import type { ExecutionContext } from '../context';
import { aiAgentPlugin } from './ai-agent';

export interface NodeExecutionInput {
	nodeId: string;
	type: string;
	data: Record<string, any>;
	previousData?: any;
	/** Full execution context — provides access to $vars, $node outputs, etc. */
	context?: ExecutionContext;
}

export interface NodeExecutionOutput {
	success: boolean;
	data?: any;
	error?: string;
	/** Optional branch identifier to route execution (e.g., "true", "false", "0", "1") */
	branch?: string | number;
}

export type PluginExecutor = (input: NodeExecutionInput) => Promise<NodeExecutionOutput>;

const plugins: Record<string, PluginExecutor> = {
	'ai-agent': aiAgentPlugin,
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

	if: async (input) => {
		const { condition } = input.data;
		// Condition can be evaluated as truthy or falsy. 
		// "true", "1", true, 1 are considered true.
		const isTrue = condition === true || condition === 'true' || condition === 1 || condition === '1';
		return {
			success: true,
			data: { conditionEvaluated: isTrue, inputData: input.previousData },
			branch: isTrue ? 'true' : 'false',
		};
	},

	code: async (input) => {
		const { code } = input.data;
		if (!code) return { success: false, error: 'No code provided' };

		try {
			// Using Function constructor as a basic sandbox for now. 
			// In a real production environment, use a strict sandbox like isolated-vm or Bun's worker API.
			// Exposing $input to the code snippet.
			const fn = new Function('$input', `
				return (async () => {
					${code}
				})();
			`);
			const result = await fn(input.previousData);
			return { success: true, data: result };
		} catch (error: any) {
			return { success: false, error: error.message };
		}
	},

	'execute-workflow': async (input) => {
		const { workflowId, triggerData } = input.data;
		if (!workflowId) return { success: false, error: 'No workflow ID provided' };

		try {
			// In order to avoid circular dependencies, we dynamically import runWorkflow
			const runner = await import('../runner');
			const payload = triggerData ? (typeof triggerData === 'string' ? JSON.parse(triggerData) : triggerData) : input.previousData;
			const executionId = await runner.runWorkflow(workflowId, payload);
			return { success: true, data: { executionId, workflowId } };
		} catch (error: any) {
			return { success: false, error: `Failed to execute workflow: ${error.message}` };
		}
	},
};

export function getPlugin(type: string): PluginExecutor | undefined {
	const mappedType = type.toLowerCase().replace(/\s+/g, '-');
	return plugins[mappedType] ?? plugins[type];
}
