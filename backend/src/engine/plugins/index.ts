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

export type PluginExecutor = (input: NodeExecutionInput) => Promise<NodeExecutionOutput>;

const plugins: Record<string, PluginExecutor> = {
	webhook: async (input) => {
		return {
			success: true,
			data: input.previousData || {
				message: 'Webhook trigger received',
				timestamp: new Date().toISOString(),
			},
		};
	},

	'http-request': async (input) => {
		const { url, method = 'GET', body, headers } = input.data;
		if (!url) return { success: false, error: 'URL is required for HTTP Request node' };
		try {
			const parsedHeaders = headers ? JSON.parse(headers) : {};
			const options: RequestInit = {
				method,
				headers: { 'Content-Type': 'application/json', ...parsedHeaders },
			};
			if (body && ['POST', 'PUT', 'PATCH'].includes(method)) {
				options.body = typeof body === 'string' ? body : JSON.stringify(body);
			}
			const response = await fetch(url, options);
			const contentType = response.headers.get('content-type') || '';
			const data = contentType.includes('application/json')
				? await response.json()
				: await response.text();
			return {
				success: response.ok,
				data: { status: response.status, statusText: response.statusText, data },
				...(response.ok ? {} : { error: `HTTP ${response.status}: ${response.statusText}` }),
			};
		} catch (err: any) {
			return { success: false, error: err.message };
		}
	},

	slack: async (input) => {
		const { webhookUrl, message } = input.data;
		if (!webhookUrl) return { success: false, error: 'Slack Webhook URL is required' };
		if (!message) return { success: false, error: 'Message is required' };
		try {
			const response = await fetch(webhookUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ text: message }),
			});
			const responseText = await response.text();
			if (!response.ok) return { success: false, error: `Slack error: ${responseText}` };
			return { success: true, data: { sent: true, message } };
		} catch (err: any) {
			return { success: false, error: err.message };
		}
	},

	log: async (input) => {
		const { message } = input.data;
		const logMessage = `[shhhhhhh:log] ${message}`;
		console.log(logMessage);
		return { success: true, data: { logged: message, timestamp: new Date().toISOString() } };
	},
};

export function getPlugin(type: string): PluginExecutor | undefined {
	const mappedType = type.toLowerCase().replace(/\s+/g, '-');
	return plugins[mappedType] ?? plugins[type];
}
