// Centralized Service Catalog
// Each service definition drives the Node Picker UI and the Playground config panel.

export type FieldType = 'text' | 'textarea' | 'url' | 'select' | 'secret' | 'number';

export interface ConfigField {
	key: string;
	label: string;
	type: FieldType;
	placeholder?: string;
	required?: boolean;
	options?: { label: string; value: string }[];
	defaultValue?: string;
	helpText?: string;
}

export type ServiceCategory = 'trigger' | 'action';

export interface ServiceDefinition {
	/** Unique stable ID used as node.type */
	id: string;
	/** Display name shown in the UI */
	name: string;
	/** One-line description */
	description: string;
	/** Canvas node category */
	category: ServiceCategory;
	/** Inline SVG string */
	icon: string;
	/** OKLCH brand color (used for accent tinting) */
	color: string;
	/** Fields rendered in the Playground config panel */
	configSchema: ConfigField[];
}

// ─── Icon SVGs ────────────────────────────────────────────────────────────────

const webhookIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v14" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 7c-2.333 -3.333 -4.667 -5 -7 -5" /><path d="M12 7c2.333 -3.333 4.667 -5 7 -5" /></svg>`;

const httpIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l6 6" /><path d="M14 10h6v6" /><path d="M20 10l-10 10" /><circle cx="7" cy="7" r="3"/></svg>`;

const slackIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M3 12h6" /><path d="M15 12h6" /><path d="M12 3v6" /><path d="M12 15v6" /></svg>`;

const logIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>`;

// ─── Service Registry ─────────────────────────────────────────────────────────

export const serviceCatalog: ServiceDefinition[] = [
	// ── Triggers ──────────────────────────────────────────────────────────────
	{
		id: 'webhook',
		name: 'Webhook',
		description: 'Listens for incoming HTTP POST requests and triggers the workflow.',
		category: 'trigger',
		icon: webhookIcon,
		color: 'oklch(75% 0.25 280)',
		configSchema: [
			{
				key: 'label',
				label: 'Node Name',
				type: 'text',
				placeholder: 'e.g. Catch Hook',
				required: true,
				defaultValue: 'Catch Hook',
			},
		],
	},

	// ── Actions ───────────────────────────────────────────────────────────────
	{
		id: 'http-request',
		name: 'HTTP Request',
		description: 'Sends an HTTP request to any URL and returns the response.',
		category: 'action',
		icon: httpIcon,
		color: 'oklch(72% 0.2 200)',
		configSchema: [
			{
				key: 'label',
				label: 'Node Name',
				type: 'text',
				placeholder: 'e.g. Fetch Data',
				required: true,
				defaultValue: 'HTTP Request',
			},
			{
				key: 'url',
				label: 'URL',
				type: 'url',
				placeholder: 'https://api.example.com/data',
				required: true,
				helpText: 'You can reference previous node output using {{ $node["Node Name"].data.field }}',
			},
			{
				key: 'method',
				label: 'Method',
				type: 'select',
				defaultValue: 'GET',
				options: [
					{ label: 'GET', value: 'GET' },
					{ label: 'POST', value: 'POST' },
					{ label: 'PUT', value: 'PUT' },
					{ label: 'PATCH', value: 'PATCH' },
					{ label: 'DELETE', value: 'DELETE' },
				],
			},
			{
				key: 'body',
				label: 'Request Body (JSON)',
				type: 'textarea',
				placeholder: '{ "key": "{{ $node[\\"Webhook\\"].data.body.value }}" }',
				helpText: 'Only used for POST, PUT, PATCH',
			},
			{
				key: 'headers',
				label: 'Headers (JSON)',
				type: 'textarea',
				placeholder: '{ "Authorization": "Bearer token" }',
			},
		],
	},
	{
		id: 'slack',
		name: 'Slack',
		description: 'Posts a message to a Slack channel via an Incoming Webhook URL.',
		category: 'action',
		icon: slackIcon,
		color: 'oklch(70% 0.22 145)',
		configSchema: [
			{
				key: 'label',
				label: 'Node Name',
				type: 'text',
				placeholder: 'e.g. Notify Team',
				required: true,
				defaultValue: 'Send Slack Message',
			},
			{
				key: 'webhookUrl',
				label: 'Slack Webhook URL',
				type: 'secret',
				placeholder: 'https://hooks.slack.com/services/T.../B.../...',
				required: true,
				helpText: 'Create an Incoming Webhook in your Slack app settings.',
			},
			{
				key: 'message',
				label: 'Message',
				type: 'textarea',
				placeholder: 'Hello from shhhhhhh! Data: {{ $node["Webhook"].data.body.name }}',
				required: true,
				helpText: 'Supports template expressions using {{ $node["..."].data.field }}',
			},
		],
	},
	{
		id: 'log',
		name: 'Log',
		description: 'Logs data to the execution output. Useful for debugging workflows.',
		category: 'action',
		icon: logIcon,
		color: 'oklch(68% 0.15 60)',
		configSchema: [
			{
				key: 'label',
				label: 'Node Name',
				type: 'text',
				placeholder: 'e.g. Debug Log',
				required: true,
				defaultValue: 'Log Output',
			},
			{
				key: 'message',
				label: 'Message / Expression',
				type: 'textarea',
				placeholder: '{{ $node["Webhook"].data.body }}',
				required: true,
				helpText: 'Use template expressions or plain text.',
			},
		],
	},
];

/** Lookup a service by its stable ID */
export function getService(id: string): ServiceDefinition | undefined {
	return serviceCatalog.find((s) => s.id === id);
}

/** Get all triggers from the catalog */
export function getTriggers(): ServiceDefinition[] {
	return serviceCatalog.filter((s) => s.category === 'trigger');
}

/** Get all actions from the catalog */
export function getActions(): ServiceDefinition[] {
	return serviceCatalog.filter((s) => s.category === 'action');
}
