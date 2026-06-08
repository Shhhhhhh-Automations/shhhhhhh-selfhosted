import { eq } from 'drizzle-orm';
import { db } from '../db';
import { edges, executions, nodes, workflows } from '../db/schema';
import { createContext, registerNodeOutput, type ExecutionContext } from './context';
import { getPlugin } from './plugins';
import { evaluateTemplatesInObject } from './template';

export interface NodeExecutionInput {
	nodeId: string;
	type: string;
	data: Record<string, any>;
	previousData?: any;
	context: ExecutionContext;
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

/** Load global variables for a workflow from the DB */
async function loadWorkflowVars(workflowId: string): Promise<Record<string, any>> {
	const [wf] = await db
		.select({ variables: workflows.variables })
		.from(workflows)
		.where(eq(workflows.id, workflowId))
		.limit(1);
	if (!wf) return {};
	try {
		return JSON.parse(wf.variables || '{}');
	} catch {
		return {};
	}
}

/** Execute a single node within a context, update the context, and return the execution record */
async function executeNode(
	node: { id: string; type: string; data: string },
	ctx: ExecutionContext,
	incomingEdge: { sourceNodeId: string } | undefined,
): Promise<Record<string, any>> {
	const rawData = typeof node.data === 'string' ? JSON.parse(node.data) : node.data;
	const evaluatedData = evaluateTemplatesInObject(rawData, ctx);
	const label: string | undefined = rawData.label;

	const previousData = incomingEdge ? ctx.nodeOutputs[incomingEdge.sourceNodeId]?.json : ctx.triggerPayload;
	const startedAt = new Date().toISOString();

	const executor = getPlugin(node.type);
	if (!executor) {
		const skippedOutput = {
			json: {},
			success: false,
			error: `No plugin for: ${node.type}`,
			nodeType: node.type,
			label,
			startedAt,
			finishedAt: new Date().toISOString(),
		};
		registerNodeOutput(ctx, node.id, label, skippedOutput);
		return {
			success: false,
			error: `No plugin for: ${node.type}`,
			skipped: true,
			output: { json: {} },
			input: evaluatedData,
			nodeType: node.type,
			label,
		};
	}

	const result = await executor({ nodeId: node.id, type: node.type, data: evaluatedData, previousData, context: ctx });
	const finishedAt = new Date().toISOString();

	const nodeOutput = {
		json: result.data ?? {},
		success: result.success,
		error: result.error,
		nodeType: node.type,
		label,
		startedAt,
		finishedAt,
	};
	registerNodeOutput(ctx, node.id, label, nodeOutput);

	return {
		success: result.success,
		error: result.error,
		output: { json: result.data ?? {} },
		input: evaluatedData,
		previousData,
		nodeType: node.type,
		label,
		startedAt,
		finishedAt,
	};
}

/** Run a full workflow and persist the execution result */
export async function runWorkflow(workflowId: string, triggerPayload: any = {}): Promise<string> {
	const executionId = crypto.randomUUID();
	await db.insert(executions).values({
		id: executionId,
		workflowId,
		status: 'running',
		triggerPayload: JSON.stringify(triggerPayload),
		startedAt: new Date().toISOString(),
	});

	let executionResult: Record<string, any> = {};

	try {
		const workflowNodes = await db.select().from(nodes).where(eq(nodes.workflowId, workflowId)).all();
		const workflowEdges = await db.select().from(edges).where(eq(edges.workflowId, workflowId)).all();

		if (workflowNodes.length === 0) throw new Error('Workflow has no nodes');

		const vars = await loadWorkflowVars(workflowId);
		const ctx = createContext(executionId, workflowId, triggerPayload, vars);

		const sorted = topologicalSort(workflowNodes, workflowEdges);

		for (const node of sorted) {
			const incomingEdge = workflowEdges.find((e) => e.targetNodeId === node.id);
			const nodeRecord = await executeNode(node, ctx, incomingEdge);
			executionResult[node.id] = nodeRecord;

			if (!nodeRecord.success && !nodeRecord.skipped) {
				const rawData = typeof node.data === 'string' ? JSON.parse(node.data) : node.data;
				throw new Error(`Node '${rawData.label || node.id}' failed: ${nodeRecord.error}`);
			}
		}

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
				executionResult: JSON.stringify(executionResult),
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

	let executionResult: Record<string, any> = {};

	try {
		const workflowNodes = await db.select().from(nodes).where(eq(nodes.workflowId, workflowId)).all();
		const workflowEdges = await db.select().from(edges).where(eq(edges.workflowId, workflowId)).all();

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

		const subsetNodes = workflowNodes.filter((n) => reachable.has(n.id));
		const subsetEdges = workflowEdges.filter(
			(e) => reachable.has(e.sourceNodeId) && reachable.has(e.targetNodeId),
		);

		if (subsetNodes.length === 0) throw new Error('No nodes reachable from start node');

		const vars = await loadWorkflowVars(workflowId);
		const ctx = createContext(executionId, workflowId, triggerPayload, vars);

		const sorted = topologicalSort(subsetNodes, subsetEdges);

		for (const node of sorted) {
			const incomingEdge = subsetEdges.find((e) => e.targetNodeId === node.id);
			const nodeRecord = await executeNode(node, ctx, incomingEdge);
			executionResult[node.id] = nodeRecord;

			if (!nodeRecord.success && !nodeRecord.skipped) {
				const rawData = typeof node.data === 'string' ? JSON.parse(node.data) : node.data;
				throw new Error(`Node '${rawData.label || node.id}' failed: ${nodeRecord.error}`);
			}
		}

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
				executionResult: JSON.stringify(executionResult),
				finishedAt: new Date().toISOString(),
			})
			.where(eq(executions.id, executionId));
		throw error;
	}
}
