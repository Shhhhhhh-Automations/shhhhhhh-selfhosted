import { getPlugin, type NodeExecutionInput, type NodeExecutionOutput } from './plugins';

export async function executeIsolatedNode(input: NodeExecutionInput): Promise<NodeExecutionOutput> {
	// 1. Resolve plugin
	const executor = getPlugin(input.type);
	if (!executor) {
		return {
			success: false,
			error: `No executor found for node type: ${input.type}`
		};
	}

	// 2. Execute plugin logic
	try {
		const result = await executor(input);
		return result;
	} catch (error: any) {
		return {
			success: false,
			error: error.message || 'Unknown error occurred during execution'
		};
	}
}
