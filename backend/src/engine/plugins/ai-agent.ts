import { generateText, tool as createTool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';
import type { NodeExecutionInput, NodeExecutionOutput } from './index';
import { executeIsolatedNode } from '../runner';

/**
 * Creates a generic JSON schema parser from node configuration if needed,
 * but for simplicity, we'll assume tool nodes will pass their schemas or we just wrap them.
 * In a real scenario, we'd use 'zod' to infer schema from the tool node's config.
 * Here we define a simple `executeTool` wrapper.
 */
export async function aiAgentPlugin(input: NodeExecutionInput): Promise<NodeExecutionOutput> {
	const { data, previousData, nodeId, workflowNodes, workflowEdges, context } = input;
	
	const prompt = data.prompt || 'You are a helpful AI assistant.';
	const userMessage = data.message || previousData?.message || JSON.stringify(previousData);
	const apiKey = data.apiKey || process.env.OPENAI_API_KEY;

	if (!apiKey) {
		return { success: false, error: 'OpenAI API Key is required' };
	}

	const openai = createOpenAI({ apiKey });

	// Find tools connected to the "tools" handle
	const toolsToPass: Record<string, any> = {};

	if (workflowNodes && workflowEdges) {
		// Incoming edges to this node on the 'tools' target handle
		const toolEdges = workflowEdges.filter(e => e.targetNodeId === nodeId && e.targetHandle === 'tools');
		
		for (const edge of toolEdges) {
			const toolNode = workflowNodes.find(n => n.id === edge.sourceNodeId);
			if (toolNode) {
				const toolData = typeof toolNode.data === 'string' ? JSON.parse(toolNode.data) : toolNode.data;
				const toolName = (toolData.label || toolNode.type).replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();

				toolsToPass[toolName] = createTool({
					description: toolData.description || `Execute action: ${toolName}`,
					parameters: z.object({
						inputPayload: z.any().optional().describe('Dynamic input for the tool, if any'),
					}),
					execute: async ({ inputPayload }) => {
						// Execute the node in isolation
						const result = await executeIsolatedNode({
							nodeId: toolNode.id,
							type: toolNode.type,
							data: { ...toolData, ...inputPayload },
							previousData: inputPayload,
							context: context!,
						});
						
						if (!result.success) {
							throw new Error(`Tool execution failed: ${result.error}`);
						}
						
						return result.data;
					},
				});
			}
		}
	}

	try {
		const result = await generateText({
			model: openai('gpt-4o-mini'), // Using gpt-4o-mini as a robust default
			system: prompt,
			prompt: typeof userMessage === 'string' ? userMessage : JSON.stringify(userMessage),
			tools: Object.keys(toolsToPass).length > 0 ? toolsToPass : undefined,
			maxSteps: Object.keys(toolsToPass).length > 0 ? 5 : 1, // Allow multi-step if tools exist
		});

		return {
			success: true,
			data: {
				text: result.text,
				toolCalls: result.toolCalls,
				toolResults: result.toolResults,
				finishReason: result.finishReason,
				usage: result.usage,
			},
		};
	} catch (error: any) {
		return { success: false, error: error.message || 'Error generating AI text' };
	}
}
