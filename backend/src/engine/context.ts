/**
 * Typed execution context passed through the engine.
 * Modelled after the n8n execution model: each node exposes its output
 * as `NodeOutput` keyed by the node label (or ID fallback).
 */

export interface NodeOutput {
	/** The primary JSON output of the node — accessible via `$node["label"].json.field` */
	json: Record<string, any>;
	/** Reserved for future binary/file outputs */
	binary?: Record<string, any>;
	success: boolean;
	error?: string;
	/** The node type (e.g., 'webhook', 'http-request') */
	nodeType: string;
	/** The node's display label */
	label?: string;
	startedAt: string;
	finishedAt: string;
}

export interface ExecutionContext {
	executionId: string;
	workflowId: string;
	/** Raw trigger payload — accessible via `$trigger.field` */
	triggerPayload: any;
	/**
	 * Node outputs keyed by both node label and node ID.
	 * Accessible via `$node["Label"].json.field`.
	 */
	nodeOutputs: Record<string, NodeOutput>;
	/**
	 * Global workflow variables — accessible via `$vars.variableName`.
	 * Persisted in the `workflows.variables` column.
	 */
	vars: Record<string, any>;
}

/** Create a fresh execution context */
export function createContext(
	executionId: string,
	workflowId: string,
	triggerPayload: any,
	vars: Record<string, any> = {},
): ExecutionContext {
	return {
		executionId,
		workflowId,
		triggerPayload,
		nodeOutputs: {},
		vars,
	};
}

/** Register a node's output into the context (keyed by label and by ID) */
export function registerNodeOutput(
	ctx: ExecutionContext,
	nodeId: string,
	label: string | undefined,
	output: NodeOutput,
): void {
	ctx.nodeOutputs[nodeId] = output;
	if (label) {
		ctx.nodeOutputs[label] = output;
	}
}
