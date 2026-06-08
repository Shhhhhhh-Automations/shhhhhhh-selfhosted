import { db } from '../db';
import { nodes, edges, executions } from '../db/schema';
import { eq } from 'drizzle-orm';
import { getPlugin } from './plugins';
import { evaluateTemplatesInObject } from './template';

export interface NodeExecutionInput {
	nodeId: string;
	type: string;
	data: Record<string, any>;
	previousData?: any;
}

export interface NodeExecutionOutput {
	success: boolean;
	data?: any;
	error?: string;
}

export async function executeIsolatedNode(input: NodeExecutionInput): Promise<NodeExecutionOutput> {
	const executor = getPlugin(input.type);
	if (!executor) {
		return { success: false, error: `No executor found for node type: ${input.type}` };
	}
	try {
		return await executor(input);
	} catch (error: any) {
		return { success: false, error: error.message || 'Unknown error' };
	}
}

/** Topological sort of workflow nodes using edges */
function topologicalSort(
	workflowNodes: Array<{ id: string; type: string; data: string }>,
	workflowEdges: Array<{ sourceNodeId: string; targetNodeId: string }>,
): Array<{ id: string; type: string; data: string }> {
	const inDegree: Record<string, number> = {};
	const adjacency: Record<string, string[]> = {};

	for (const node of workflowNodes) {
		inDegree[node.id] = 0;
		adjacency[node.id] = [];
	}
	for (const edge of workflowEdges) {
		inDegree[edge.targetNodeId] = (inDegree[edge.targetNodeId] || 0) + 1;
		adjacency[edge.sourceNodeId].push(edge.targetNodeId);
	}

	const queue = workflowNodes.filter((n) => inDegree[n.id] === 0);
	const sorted: Array<{ id: string; type: string; data: string }> = [];

	while (queue.length > 0) {
		const node = queue.shift()!;
		sorted.push(node);
		for (const neighborId of adjacency[node.id]) {
			inDegree[neighborId]--;
			if (inDegree[neighborId] === 0) {
				queue.push(workflowNodes.find((n) => n.id === neighborId)!);
			}
		}
	}

	return sorted;
}

/** Run a full workflow and persist the execution result */
export async function runWorkflow(workflowId: string, triggerPayload: any = {}): Promise<string> {
	// 1. Create execution record
	const executionId = crypto.randomUUID();
	await db.insert(executions).values({
		id: executionId,
		workflowId,
		status: 'running',
		triggerPayload: JSON.stringify(triggerPayload),
		startedAt: new Date().toISOString(),
	});

	try {
		// 2. Load nodes and edges
		const workflowNodes = await db.select().from(nodes).where(eq(nodes.workflowId, workflowId)).all();
		const workflowEdges = await db.select().from(edges).where(eq(edges.workflowId, workflowId)).all();

		if (workflowNodes.length === 0) throw new Error('Workflow has no nodes');

		// 3. Topological sort
		const sorted = topologicalSort(workflowNodes, workflowEdges);

		// 4. Execute each node
		const nodeResults: Record<string, any> = {};
		const executionResult: Record<string, any> = {};

		for (const node of sorted) {
			const rawData = typeof node.data === 'string' ? JSON.parse(node.data) : node.data;
			// Evaluate templates using previous results
			const evaluatedData = evaluateTemplatesInObject(rawData, nodeResults, triggerPayload);

			// Get the predecessor's output as previousData
			const incomingEdge = workflowEdges.find((e) => e.targetNodeId === node.id);
			const previousData = incomingEdge ? nodeResults[incomingEdge.sourceNodeId] : triggerPayload;

			const executor = getPlugin(node.type);
			if (!executor) {
				executionResult[node.id] = {
					success: false,
					error: `No plugin for: ${node.type}`,
					skipped: true,
				};
				continue;
			}

			const result = await executor({
				nodeId: node.id,
				type: node.type,
				data: evaluatedData,
				previousData,
			});

			// Store by node ID and by node label (for template expressions)
			nodeResults[node.id] = result.data;
			if (rawData.label) nodeResults[rawData.label] = result.data;
			executionResult[node.id] = { ...result, nodeType: node.type, label: rawData.label };

			if (!result.success) {
				throw new Error(`Node '${rawData.label || node.id}' failed: ${result.error}`);
			}
		}

		// 5. Mark success
		await db
			.update(executions)
			.set({
				status: 'success',
				executionResult: JSON.stringify(executionResult),
				finishedAt: new Date().toISOString(),
			})
			.where(eq(executions.id, executionId));

		return executionId;
	} catch (error: any) {
		await db
			.update(executions)
			.set({
				status: 'failed',
				error: error.message,
				finishedAt: new Date().toISOString(),
			})
			.where(eq(executions.id, executionId));
		throw error;
	}
}

/** Run a partial workflow starting from a specific node (executes downstream nodes only) */
export async function runWorkflowFromNode(
	workflowId: string,
	startNodeId: string,
	triggerPayload: any = {},
): Promise<string> {
	const executionId = crypto.randomUUID();
	await db.insert(executions).values({
		id: executionId,
		workflowId,
		status: 'running',
		triggerPayload: JSON.stringify(triggerPayload),
		startedAt: new Date().toISOString(),
	});

	try {
		// Load nodes and edges
		const workflowNodes = await db.select().from(nodes).where(eq(nodes.workflowId, workflowId)).all();
		const workflowEdges = await db.select().from(edges).where(eq(edges.workflowId, workflowId)).all();

		// Compute reachable nodes downstream of startNodeId
		const adjacency: Record<string, string[]> = {};
		for (const n of workflowNodes) adjacency[n.id] = [];
		for (const e of workflowEdges) {
			adjacency[e.sourceNodeId] = adjacency[e.sourceNodeId] || [];
			adjacency[e.sourceNodeId].push(e.targetNodeId);
		}

		const reachable = new Set<string>();
		const queue = [startNodeId];
		while (queue.length) {
			const cur = queue.shift()!;
			if (reachable.has(cur)) continue;
			reachable.add(cur);
			for (const nb of adjacency[cur] || []) queue.push(nb);
		}

		// Filter nodes and edges to the reachable subset
		const subsetNodes = workflowNodes.filter((n) => reachable.has(n.id));
		const subsetEdges = workflowEdges.filter((e) => reachable.has(e.sourceNodeId) && reachable.has(e.targetNodeId));

		if (subsetNodes.length === 0) throw new Error('No nodes reachable from start node');

		// Topological sort restricted to subset
		const sorted = topologicalSort(subsetNodes, subsetEdges);

		// Execute sorted nodes similar to runWorkflow
		const nodeResults: Record<string, any> = {};
		const executionResult: Record<string, any> = {};

		for (const node of sorted) {
			const rawData = typeof node.data === 'string' ? JSON.parse(node.data) : node.data;
			const evaluatedData = evaluateTemplatesInObject(rawData, nodeResults, triggerPayload);

			const incomingEdge = subsetEdges.find((e) => e.targetNodeId === node.id);
			const previousData = incomingEdge ? nodeResults[incomingEdge.sourceNodeId] : triggerPayload;

			const executor = getPlugin(node.type);
			if (!executor) {
				executionResult[node.id] = { success: false, error: `No plugin for: ${node.type}`, skipped: true };
				continue;
			}

			const result = await executor({ nodeId: node.id, type: node.type, data: evaluatedData, previousData });
			nodeResults[node.id] = result.data;
			if (rawData.label) nodeResults[rawData.label] = result.data;
			executionResult[node.id] = { ...result, nodeType: node.type, label: rawData.label };

			if (!result.success) throw new Error(`Node '${rawData.label || node.id}' failed: ${result.error}`);
		}

		await db.update(executions).set({ status: 'success', executionResult: JSON.stringify(executionResult), finishedAt: new Date().toISOString() }).where(eq(executions.id, executionId));

		return executionId;
	} catch (error: any) {
		await db.update(executions).set({ status: 'failed', error: error.message, finishedAt: new Date().toISOString() }).where(eq(executions.id, executionId));
		throw error;
	}
}
