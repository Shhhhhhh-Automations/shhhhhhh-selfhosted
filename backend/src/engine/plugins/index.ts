export interface NodeExecutionInput {
	nodeId: string;
	type: string;
	data: Record<string, any>;
	previousData?: any; // Mock data passed for testing
}

export interface NodeExecutionOutput {
	success: boolean;
	data?: any;
	error?: string;
}

export type PluginExecutor = (input: NodeExecutionInput) => Promise<NodeExecutionOutput>;

const plugins: Record<string, PluginExecutor> = {
	// Dummy implementation for the mockup nodes
	'webhook': async (input) => {
		return {
			success: true,
			data: {
				body: { message: "Webhook test payload" },
				headers: { "content-type": "application/json" }
			}
		};
	},
	'google-docs': async (input) => {
		return {
			success: true,
			data: {
				documentId: "1A2b3C4d5E6f7G8h9I0j",
				url: "https://docs.google.com/document/d/1A2b3C4d5E6f7G8h9I0j/edit",
				title: input.data.label || "Test Document"
			}
		};
	},
	'slack': async (input) => {
		return {
			success: true,
			data: {
				channel: "#general",
				ts: "1234567890.123456",
				message: "Sent successfully"
			}
		};
	}
};

export function getPlugin(type: string): PluginExecutor | undefined {
	// Fallback mechanism mapping the typeLabel to internal plugin keys
	// In a real system, the 'type' field of the node would match the registry directly
	const mappedType = type.toLowerCase().replace(/\s+/g, '-');
	
	if (plugins[mappedType]) return plugins[mappedType];
	
	// Try finding by mapping common labels
	if (type.includes('Webhook')) return plugins['webhook'];
	if (type.includes('Google Docs')) return plugins['google-docs'];
	if (type.includes('Slack')) return plugins['slack'];

	return undefined;
}
