export interface NodeData {
	[key: string]: any;
}

export interface Node {
	id: string;
	type: string;
	data: NodeData;
	position: { x: number; y: number };
}

export interface Edge {
	id: string;
	source: string;
	target: string;
	sourceHandle?: string;
	targetHandle?: string;
}

export interface WorkflowCanvas {
	nodes: Node[];
	edges: Edge[];
}

export interface ExecutionContext {
	executionId: string;
	workflowId: string;
	triggerPayload: any;
	nodeResults: Record<string, any>;
	variables: Record<string, any>;
}

export interface NodeExecutionResult {
	output: any;
	error?: string;
	status: 'success' | 'failed';
}

export abstract class BaseNode {
	abstract type: string;
	abstract execute(node: Node, context: ExecutionContext): Promise<NodeExecutionResult>;
}
