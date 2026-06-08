<script lang="ts">
import { Background, BackgroundVariant, Controls, SvelteFlow } from '@xyflow/svelte';
import '@xyflow/svelte/dist/style.css';
import { onMount } from 'svelte';
import { apiFetch } from '$lib/api/client';
import { useHistory } from '$lib/hooks/useHistory.svelte';
import { useWorkflow } from '$lib/hooks/useWorkflow.svelte';
import ActionNode from './nodes/ActionNode.svelte';
import ConditionNode from './nodes/ConditionNode.svelte';
import CodeNode from './nodes/CodeNode.svelte';
import ExecuteWorkflowNode from './nodes/ExecuteWorkflowNode.svelte';
import AgentNode from './nodes/AgentNode.svelte';
import VariablePanel from './VariablePanel.svelte';
import TriggerNode from './nodes/TriggerNode.svelte';

let { class: className = '', workflowId = 'preview-workflow-1' } = $props();

const nodeTypes = {
	webhook: TriggerNode,
	'http-request': ActionNode,
	slack: ActionNode,
	log: ActionNode,
	if: ConditionNode,
	code: CodeNode,
	'execute-workflow': ExecuteWorkflowNode,
	'ai-agent': AgentNode,
	trigger: TriggerNode,
	action: ActionNode,
};

const catalog = [
	{
		id: 'webhook',
		label: 'Webhook',
		typeLabel: 'Trigger',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v14" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 7c-2.333 -3.333 -4.667 -5 -7 -5" /><path d="M12 7c2.333 -3.333 4.667 -5 7 -5" /></svg>',
	},
	{
		id: 'http-request',
		label: 'HTTP Request',
		typeLabel: 'Action',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h18" /><path d="M12 3v18" /></svg>',
	},
	{
		id: 'slack',
		label: 'Slack',
		typeLabel: 'Action',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>',
	},
	{
		id: 'log',
		label: 'Log',
		typeLabel: 'Action',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>',
	},
	{
		id: 'if',
		label: 'IF Condition',
		typeLabel: 'Logic',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M15 6a9 9 0 0 0-9 9"/></svg>',
	},
	{
		id: 'code',
		label: 'JS Code',
		typeLabel: 'Action',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
	},
	{
		id: 'ai-agent',
		label: 'AI Agent',
		typeLabel: 'AI',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 3l6 0" /><path d="M12 9l0 12" /><path d="M12 9c-2.333 -3.333 -4.667 -5 -7 -5" /><path d="M12 9c2.333 -3.333 4.667 -5 7 -5" /></svg>'
	}
];

const wf = useWorkflow(workflowId);
const history = useHistory(workflowId, wf);

let selectedNode = $state<any>(null);
let testOutput = $state<string | null>(null);
let isTesting = $state(false);
let isVarPanelOpen = $state(false);
let searchQuery = $state('');

onMount(async () => {
	await wf.load();
});

function onNodeClick(event: CustomEvent | any) {
	const node = event.detail ? event.detail.node : event.node;
	selectedNode = node;
	testOutput = null;
}

let hasLoaded = $state(false);
let hasLoadedEdges = $state(false);

$effect(() => {
	const _positions = wf.nodes.map((n) => ({
		id: n.id,
		x: n.position?.x,
		y: n.position?.y,
	}));
	if (wf.isLoading) { hasLoaded = false; return; }
	if (!hasLoaded) { hasLoaded = true; return; }
	if (history.isViewingExecution) return;
	wf.autosaveDebounced();
});

$effect(() => {
	const _edgesState = wf.edges.map((e) => ({
		id: e.id,
		source: e.source,
		target: e.target,
	}));
	if (wf.isLoading) { hasLoadedEdges = false; return; }
	if (!hasLoadedEdges) { hasLoadedEdges = true; return; }
	if (history.isViewingExecution) return;
	wf.autosaveDebounced();
});

async function onConnect(e: any) {
	const ev = e?.detail ?? e;
	const { source, target, sourceHandle, targetHandle } = ev;
	if (!source || !target) return;
	const id = `e${source}-${target}-${Date.now()}`;
	wf.edges = [
		...wf.edges,
		{
			id,
			source,
			target,
			sourceHandle,
			targetHandle,
			animated: true,
			style: 'stroke: #a1a1aa; stroke-width: 2px;',
		},
	];
	try { await wf.save(); } catch (err) {}
}

function deleteNode(nodeId: string) {
	wf.nodes = wf.nodes.filter((n: any) => n.id !== nodeId);
	wf.edges = wf.edges.filter((e: any) => e.source !== nodeId && e.target !== nodeId);
	if (selectedNode?.id === nodeId) {
		selectedNode = null;
	}
	wf.save();
}

async function addNodeFromCatalog(item: any) {
	const xOffset = 150 * (wf.nodes.length % 3);
	const yOffset = 150 * Math.floor(wf.nodes.length / 3);

	const newNode = {
		id: crypto.randomUUID(),
		type: item.id,
		position: { x: 250 + xOffset, y: 150 + yOffset },
		data: {
			typeLabel: item.typeLabel,
			label: item.label,
			description: '',
			icon: item.icon,
			...(item.id === 'http-request' ? { url: '', method: 'GET', headers: '{}' } : {}),
			...(item.id === 'slack' ? { webhookUrl: '', message: '' } : {}),
			...(item.id === 'log' ? { message: '' } : {}),
			...(item.id === 'webhook' ? { webhookPath: '' } : {}),
		},
	};

	wf.nodes = [...wf.nodes, newNode];
	try { await wf.save(); } catch (e) {}
}

async function testNode() {
	if (!selectedNode) return;
	isTesting = true;
	testOutput = null;
	try {
		const response = await apiFetch('/engine/test-node', {
			method: 'POST',
			body: JSON.stringify({
				nodeId: selectedNode.id,
				type: selectedNode.type,
				data: selectedNode.data,
			}),
		});
		testOutput = JSON.stringify(response, null, 2);
	} catch (e: any) {
		testOutput = JSON.stringify({ error: e.message }, null, 2);
	} finally {
		isTesting = false;
	}
}

async function triggerWorkflowExecute() {
	await wf.execute((execRecord) => {
		const failedNode = wf.nodes.find((n) => n.data.status === 'failed');
		if (failedNode) {
			selectedNode = failedNode;
		}
	});
}

function handleViewExecution(exec: any) {
	history.viewExecution(exec, (failedNodeId) => {
		const failedNode = wf.nodes.find((n) => n.id === failedNodeId);
		if (failedNode) {
			selectedNode = failedNode;
		}
	});
}

function handleExitExecutionView() {
	history.exitExecutionView(selectedNode?.id || null, (node) => {
		selectedNode = node;
	});
}

let filteredCatalog = $derived(catalog.filter(c => c.label.toLowerCase().includes(searchQuery.toLowerCase())));
</script>

<div class="flex flex-col h-full w-full bg-[#fdfdfd] text-[#1a1a1a] font-sans overflow-hidden {className}">
	
	<!-- Top Navigation -->
	<header class="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 z-20 shrink-0">
		<div class="flex items-center gap-6">
			<a href="/dashboard" class="flex items-center gap-2 hover:opacity-70 transition-opacity">
				<div class="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold">SH</div>
			</a>
			<nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
				<a href="/dashboard" class="hover:text-black transition-colors">Recipes</a>
				<a href="/dashboard" class="text-black transition-colors">Dashboard</a>
				<a href="#" class="hover:text-black transition-colors">App Connections</a>
				<a href="#" class="hover:text-black transition-colors">Tools</a>
				<a href="#" class="hover:text-black transition-colors">Community Library</a>
			</nav>
		</div>
		
		<div class="flex items-center gap-4">
			<div class="bg-gray-100 rounded-lg p-1 flex items-center text-sm font-medium">
				<button class="px-4 py-1.5 bg-white shadow-sm rounded-md text-black">Build</button>
				<button onclick={history.toggle} class="px-4 py-1.5 text-gray-500 hover:text-black transition-colors">History</button>
			</div>

			<div class="h-6 w-px bg-gray-200 mx-2"></div>

			<button 
				onclick={wf.save}
				disabled={wf.isSaving || wf.isExecuting}
				class="text-sm font-medium text-gray-600 hover:text-black transition-colors disabled:opacity-50"
			>
				{wf.isSaving ? 'Saving...' : 'Save'}
			</button>
			
			<button 
				onclick={wf.toggleDeploy}
				disabled={wf.isDeploying || wf.isExecuting}
				class="px-4 py-2 text-sm font-bold border rounded-lg transition-colors {wf.isActive ? 'border-emerald-500 text-emerald-600 bg-emerald-50' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}"
			>
				{wf.isDeploying ? 'Deploying...' : wf.isActive ? 'Active' : 'Deploy'}
			</button>

			<button 
				onclick={triggerWorkflowExecute}
				disabled={wf.isExecuting || wf.isSaving}
				class="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center gap-2"
			>
				{#if wf.isExecuting}
					<div class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
					Running...
				{:else}
					Test Workflow
				{/if}
			</button>
		</div>
	</header>

	<div class="flex flex-1 overflow-hidden relative">
		
		<!-- Left Sidebar: Node Catalog -->
		<aside class="w-72 border-r border-gray-200 bg-white flex flex-col z-20 shrink-0">
			<div class="p-4 border-b border-gray-200">
				<div class="relative">
					<svg class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
					<input 
						type="text" 
						bind:value={searchQuery}
						placeholder="Search connectors..." 
						class="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
					/>
				</div>
			</div>
			<div class="flex-1 overflow-y-auto p-3">
				<div class="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-3 px-2">Core Blocks</div>
				<div class="grid grid-cols-2 gap-2">
					{#each filteredCatalog as item}
						<button 
							onclick={() => addNodeFromCatalog(item)}
							class="flex flex-col items-center justify-center p-4 gap-3 bg-white hover:bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl transition-all group"
						>
							<div class="w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-white border border-gray-100 group-hover:shadow-sm flex items-center justify-center text-gray-600">
								{@html item.icon}
							</div>
							<div class="text-xs font-medium text-center leading-tight text-gray-700">
								{item.label}
							</div>
						</button>
					{/each}
				</div>
			</div>
			<div class="p-4 border-t border-gray-200 bg-gray-50/50">
				<button onclick={() => isVarPanelOpen = true} class="w-full py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm text-gray-600">
					$vars (Variables)
				</button>
			</div>
		</aside>

		<!-- Center Canvas -->
		<main class="flex-1 relative bg-[#f9fafb]">
			{#if history.isViewingExecution}
				<div class="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-white border border-gray-200 shadow-lg px-6 py-2.5 rounded-full flex items-center gap-4">
					<div class="flex items-center gap-2 text-sm text-gray-700 font-medium">
						Viewing Run: <span class="font-mono text-gray-500 truncate max-w-[120px]">{history.selectedExecution?.id}</span>
						<span class="px-2 py-0.5 rounded text-[10px] uppercase font-bold ml-1
							{history.selectedExecution?.status === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}"
						>
							{history.selectedExecution?.status}
						</span>
					</div>
					<button onclick={handleExitExecutionView} class="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full font-bold text-xs transition-colors">
						Exit Playback
					</button>
				</div>
			{/if}

			{#if !wf.isLoading}
				<SvelteFlow 
					bind:nodes={wf.nodes} 
					bind:edges={wf.edges} 
					{nodeTypes} 
					colorMode="light"
					onnodeclick={onNodeClick}
					onpaneclick={() => selectedNode = null}
					onconnect={history.isViewingExecution ? undefined : onConnect}
					nodesDraggable={!history.isViewingExecution}
					nodesConnectable={!history.isViewingExecution}
					edgesFocusable={!history.isViewingExecution}
					elementsSelectable={true}
					minZoom={0.5}
					maxZoom={2}
				>
					<Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#e5e7eb" />
					<Controls 
						class="bg-white border border-gray-200 rounded-lg shadow-sm fill-gray-600" 
						buttonClass="border-gray-200 hover:bg-gray-50 fill-gray-600"
					/>
				</SvelteFlow>
			{:else}
				<div class="flex items-center justify-center h-full w-full">
					<div class="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
				</div>
			{/if}
		</main>

		<!-- Right Sidebar: Properties Panel -->
		{#if selectedNode}
			<aside class="w-80 border-l border-gray-200 bg-white flex flex-col z-20 shrink-0 shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
				<div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 rounded bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600">
							{@html selectedNode.data.icon}
						</div>
						<div>
							<h3 class="text-sm font-bold text-gray-900">{selectedNode.data.label}</h3>
							<p class="text-[10px] text-gray-500 uppercase tracking-widest">{selectedNode.data.typeLabel}</p>
						</div>
					</div>
					<button onclick={() => selectedNode = null} class="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-gray-400 hover:text-gray-600">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
					</button>
				</div>

				<div class="flex-1 overflow-y-auto p-5 space-y-6">
					{#if selectedNode.data.execution}
						<div class="space-y-4">
							{#if selectedNode.data.execution.error}
								<div class="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600">
									<span class="font-bold block mb-1">Error</span>
									{selectedNode.data.execution.error}
								</div>
							{/if}
							<div>
								<span class="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-2">Evaluated Input</span>
								<pre class="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs font-mono text-gray-700 overflow-x-auto">{JSON.stringify(selectedNode.data.execution.input || {}, null, 2)}</pre>
							</div>
							<div>
								<span class="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-2">Output Data</span>
								<pre class="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs font-mono text-emerald-700 overflow-x-auto">{JSON.stringify(selectedNode.data.execution.output || {}, null, 2)}</pre>
							</div>
						</div>
					{:else}
						<div class="space-y-4">
							<div class="space-y-3">
								<label class="block">
									<span class="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Node Name</span>
									<input 
										type="text" 
										bind:value={selectedNode.data.label} 
										oninput={wf.autosaveDebounced}
										class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/5" 
									/>
								</label>

								<!-- HTTP Request Config -->
								{#if selectedNode.type === 'http-request'}
									<label class="block">
										<span class="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">URL</span>
										<input 
											type="text" 
											bind:value={selectedNode.data.url} 
											oninput={wf.autosaveDebounced}
											class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/5" 
										/>
									</label>
									<label class="block">
										<span class="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Method</span>
										<select 
											bind:value={selectedNode.data.method} 
											onchange={wf.autosaveDebounced}
											class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/5"
										>
											<option>GET</option><option>POST</option><option>PUT</option><option>PATCH</option><option>DELETE</option>
										</select>
									</label>
								{/if}

								<!-- Webhook -->
								{#if selectedNode.type === 'webhook'}
									{#if selectedNode.data.webhookPath}
										<label class="block">
											<span class="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Webhook Path</span>
											<input type="text" value={selectedNode.data.webhookPath} readonly class="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 outline-none" />
										</label>
									{/if}
								{/if}
								
								<!-- Slack -->
								{#if selectedNode.type === 'slack'}
									<label class="block">
										<span class="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message</span>
										<textarea 
											bind:value={selectedNode.data.message} 
											oninput={wf.autosaveDebounced}
											rows="3" 
											class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/5"
										></textarea>
									</label>
								{/if}
							</div>
						</div>
					{/if}
				</div>

				<div class="p-5 border-t border-gray-200 bg-gray-50/50 space-y-2">
					<button 
						onclick={testNode}
						disabled={isTesting || wf.isExecuting}
						class="w-full py-2.5 bg-white border border-gray-200 text-black rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2"
					>
						{#if isTesting}
							<div class="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13 -8z" /></svg>
						{/if}
						Test Node
					</button>
					<button 
						onclick={() => deleteNode(selectedNode.id)}
						class="w-full py-2 text-red-600 text-sm font-medium hover:bg-red-50 rounded-lg transition-colors"
					>
						Delete
					</button>
				</div>
			</aside>
		{/if}

		<!-- Execution History Overlay (Right Sidebar equivalent when open) -->
		{#if history.isHistoryOpen && !selectedNode}
			<aside class="w-80 border-l border-gray-200 bg-white flex flex-col z-20 shrink-0 shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
				<div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
					<h3 class="text-sm font-bold text-gray-900">History</h3>
					<button aria-label="Close History" onclick={history.close} class="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
					</button>
				</div>
				<div class="flex-1 overflow-y-auto p-3 space-y-2">
					{#each history.historyList as exec}
						<button 
							onclick={() => handleViewExecution(exec)}
							class="w-full text-left p-3 bg-white hover:bg-gray-50 border {history.selectedExecution?.id === exec.id ? 'border-black ring-1 ring-black/5' : 'border-gray-200'} rounded-xl transition-all shadow-sm"
						>
							<div class="flex justify-between items-center gap-2 mb-1">
								<span class="font-mono text-xs text-gray-500 truncate">{exec.id.split('-')[0]}</span>
								<span class="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded
									{exec.status === 'success' ? 'text-emerald-600 bg-emerald-50' : ''}
									{exec.status === 'failed' ? 'text-red-600 bg-red-50' : ''}"
								>{exec.status}</span>
							</div>
							<div class="text-[11px] text-gray-400">{new Date(exec.startedAt).toLocaleString()}</div>
						</button>
					{/each}
				</div>
			</aside>
		{/if}

	</div>
</div>

<!-- Variable Panel floating modal fallback -->
{#if isVarPanelOpen}
	<VariablePanel
		variableStore={wf.variableStore}
		bind:open={isVarPanelOpen}
		onclose={() => { isVarPanelOpen = false; }}
	/>
{/if}

<style>
	:global(.svelte-flow__pane) { background: transparent !important; }
	:global(.svelte-flow__edge-path) { stroke-width: 2; }
	:global(.svelte-flow__edge:hover .svelte-flow__edge-path) { stroke-width: 3; stroke: #52525b !important; }
</style>
