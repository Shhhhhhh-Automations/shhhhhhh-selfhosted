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
	workflowNodes?: Array<any>;
	workflowEdges?: Array<any>;
}

export interface NodeExecutionOutput {
	success: boolean;
	data?: any;
	error?: string;
	branch?: string | number;
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
	workflowNodes?: Array<any>,
	workflowEdges?: Array<any>,
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

	const result = await executor({ nodeId: node.id, type: node.type, data: evaluatedData, previousData, context: ctx, workflowNodes, workflowEdges });
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
		branch: result.branch,
	};
}

/** 
 * Shared graph execution engine based on BFS queue 
 * Supports dynamic branching via edge handles.
 */
async function executeGraph(
	startNodes: Array<{ id: string; type: string; data: string }>,
	workflowNodes: Array<{ id: string; type: string; data: string }>,
	workflowEdges: Array<{ sourceNodeId: string; targetNodeId: string; sourceHandle?: string | null }>,
	ctx: ExecutionContext,
	executionResult: Record<string, any>
) {
	// Queue holds the node to execute, and the incoming edge that triggered it
	const queue: Array<{ node: any, incomingEdge?: any }> = startNodes.map(n => ({ node: n }));
	const executed = new Set<string>();

	while (queue.length > 0) {
		const { node, incomingEdge } = queue.shift()!;
		
		// If already executed (prevent infinite loops in cycles)
		if (executed.has(node.id)) continue;
		executed.add(node.id);

		const nodeRecord = await executeNode(node, ctx, incomingEdge, workflowNodes, workflowEdges);
		executionResult[node.id] = nodeRecord;

		if (!nodeRecord.success && !nodeRecord.skipped) {
			const rawData = typeof node.data === 'string' ? JSON.parse(node.data) : node.data;
			throw new Error(`Node '${rawData.label || node.id}' failed: ${nodeRecord.error}`);
		}

		// Find outgoing edges. If node returned a specific branch, only follow edges matching that branch's sourceHandle
		const branch = nodeRecord.branch;
		
		const outgoingEdges = workflowEdges.filter(e => {
			if (e.sourceNodeId !== node.id) return false;
			if (branch !== undefined) {
				return String(e.sourceHandle) === String(branch);
			}
			return true; // No specific branch, follow all
		});

		for (const edge of outgoingEdges) {
			const targetNode = workflowNodes.find(n => n.id === edge.targetNodeId);
			if (targetNode) {
				queue.push({ node: targetNode, incomingEdge: edge });
			}
		}
	}
}

/** Run a full workflow and persist the execution result */
export async function runWorkflow(workflowId: string, triggerPayload: any = {}, predefinedExecutionId?: string): Promise<string> {
	const executionId = predefinedExecutionId || crypto.randomUUID();
	// If predefinedExecutionId was provided, it might have already been inserted as 'pending' by the route handler.
	// We do an upsert or just an update if it exists, or insert if it doesn't.
	// Actually, doing insert ... on conflict do update status='running' is safest in SQLite.
	await db.insert(executions).values({
		id: executionId,
		workflowId,
		status: 'running',
		triggerPayload: JSON.stringify(triggerPayload),
		startedAt: new Date().toISOString(),
	}).onConflictDoUpdate({
		target: executions.id,
		set: { status: 'running', startedAt: new Date().toISOString() }
	});

	let executionResult: Record<string, any> = {};

	try {
		const workflowNodes = await db.select().from(nodes).where(eq(nodes.workflowId, workflowId)).all();
		const workflowEdges = await db.select().from(edges).where(eq(edges.workflowId, workflowId)).all();

		if (workflowNodes.length === 0) throw new Error('Workflow has no nodes');

		const vars = await loadWorkflowVars(workflowId);
		const ctx = createContext(executionId, workflowId, triggerPayload, vars);

		// Trigger nodes are nodes with no incoming edges
		const inDegree: Record<string, number> = {};
		for (const n of workflowNodes) inDegree[n.id] = 0;
		for (const e of workflowEdges) inDegree[e.targetNodeId] = (inDegree[e.targetNodeId] || 0) + 1;
		
		const startNodes = workflowNodes.filter((n) => inDegree[n.id] === 0);

		if (startNodes.length === 0) {
			// If there's a cycle and no clear start node, just pick the first one to avoid hanging
			startNodes.push(workflowNodes[0]);
		}

		await executeGraph(startNodes, workflowNodes, workflowEdges, ctx, executionResult);

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
	predefinedExecutionId?: string
): Promise<string> {
	const executionId = predefinedExecutionId || crypto.randomUUID();
	await db.insert(executions).values({
		id: executionId,
		workflowId,
		status: 'running',
		triggerPayload: JSON.stringify(triggerPayload),
		startedAt: new Date().toISOString(),
	}).onConflictDoUpdate({
		target: executions.id,
		set: { status: 'running', startedAt: new Date().toISOString() }
	});

	let executionResult: Record<string, any> = {};

	try {
		const workflowNodes = await db.select().from(nodes).where(eq(nodes.workflowId, workflowId)).all();
		const workflowEdges = await db.select().from(edges).where(eq(edges.workflowId, workflowId)).all();

		const startNode = workflowNodes.find(n => n.id === startNodeId);
		if (!startNode) throw new Error(`Start node ${startNodeId} not found`);

		const vars = await loadWorkflowVars(workflowId);
		const ctx = createContext(executionId, workflowId, triggerPayload, vars);

		await executeGraph([startNode], workflowNodes, workflowEdges, ctx, executionResult);

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
