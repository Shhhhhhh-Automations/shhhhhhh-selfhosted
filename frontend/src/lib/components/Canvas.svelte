<script lang="ts">
import { Background, BackgroundVariant, Controls, SvelteFlow } from '@xyflow/svelte';
import '@xyflow/svelte/dist/style.css';
import { onMount } from 'svelte';
import { apiFetch } from '$lib/api/client';
import { useHistory } from '$lib/hooks/useHistory.svelte';
import { useWorkflow } from '$lib/hooks/useWorkflow.svelte';
import ActionNode from './nodes/ActionNode.svelte';
import VariablePanel from './VariablePanel.svelte';
import TriggerNode from './nodes/TriggerNode.svelte';

let { class: className = '', workflowId = 'preview-workflow-1' } = $props();

// Custom node types registry - map plugin types to visual components
const nodeTypes = {
	webhook: TriggerNode,
	'http-request': ActionNode,
	slack: ActionNode,
	log: ActionNode,
	// fallback visual types
	trigger: TriggerNode,
	action: ActionNode,
};

// Simple catalog for adding nodes via the picker
const catalog = [
	{
		id: 'webhook',
		label: 'Webhook (Trigger)',
		typeLabel: 'Webhook',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v14" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 7c-2.333 -3.333 -4.667 -5 -7 -5" /><path d="M12 7c2.333 -3.333 4.667 -5 7 -5" /></svg>',
	},
	{
		id: 'http-request',
		label: 'HTTP Request (Action)',
		typeLabel: 'HTTP Request',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h18" /><path d="M12 3v18" /></svg>',
	},
	{
		id: 'slack',
		label: 'Slack (Action)',
		typeLabel: 'Slack',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>',
	},
	{
		id: 'log',
		label: 'Log (Action)',
		typeLabel: 'Log',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>',
	},
];

// Instantiate hooks for workflow state and history playback
const wf = useWorkflow(workflowId);
const history = useHistory(workflowId, wf);

let isPickerOpen = $state(false);
let isVarPanelOpen = $state(false);

// Aurora effect tracking
let mouseX = $state(50);
let mouseY = $state(50);

// Playground State
let selectedNode = $state<any>(null);
let isPlaygroundOpen = $state(false);
let testOutput = $state<string | null>(null);
let isTesting = $state(false);
let playgroundTab = $state<'params' | 'output'>('output');

onMount(async () => {
	await wf.load();
});

function handleMouseMove(e: MouseEvent) {
	const target = e.currentTarget as HTMLElement;
	const rect = target.getBoundingClientRect();
	mouseX = ((e.clientX - rect.left) / rect.width) * 100;
	mouseY = ((e.clientY - rect.top) / rect.height) * 100;
}

function onNodeClick(event: CustomEvent | any) {
	const node = event.detail ? event.detail.node : event.node;
	selectedNode = node;
	isPlaygroundOpen = true;
	testOutput = null;
}

let hasLoaded = $state(false);
let hasLoadedEdges = $state(false);

$effect(() => {
	// Deeply track nodes positions and identities
	const _positions = wf.nodes.map((n) => ({
		id: n.id,
		x: n.position?.x,
		y: n.position?.y,
	}));

	if (wf.isLoading) {
		hasLoaded = false;
		return;
	}

	if (!hasLoaded) {
		hasLoaded = true;
		return;
	}

	if (history.isViewingExecution) return;

	console.log('Autosaving due to nodes change detected by effect');
	wf.autosaveDebounced();
});

$effect(() => {
	// Deeply track edges identities and connections
	const _edgesState = wf.edges.map((e) => ({
		id: e.id,
		source: e.source,
		target: e.target,
	}));

	if (wf.isLoading) {
		hasLoadedEdges = false;
		return;
	}

	if (!hasLoadedEdges) {
		hasLoadedEdges = true;
		return;
	}

	if (history.isViewingExecution) return;

	console.log('Autosaving due to edges change detected by effect');
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
			style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;',
		},
	];
	try {
		await wf.save();
	} catch (err) {
		console.warn('Failed to save edge', err);
	}
}

function closePlayground() {
	isPlaygroundOpen = false;
	selectedNode = null;
}

function openPicker() {
	isPickerOpen = true;
}

function closePicker() {
	isPickerOpen = false;
}

function deleteNode(nodeId: string) {
	wf.nodes = wf.nodes.filter((n: any) => n.id !== nodeId);
	wf.edges = wf.edges.filter((e: any) => e.source !== nodeId && e.target !== nodeId);
	if (selectedNode?.id === nodeId) {
		selectedNode = null;
		isPlaygroundOpen = false;
	}
	wf.save();
}

function deleteEdge(edgeId: string) {
	wf.edges = wf.edges.filter((e: any) => e.id !== edgeId);
	wf.save();
}

async function addNodeFromCatalog(item: any) {
	const xOffset = 150 * (wf.nodes.length % 3);
	const yOffset = 150 * Math.floor(wf.nodes.length / 3);

	const newNode = {
		id: crypto.randomUUID(),
		type: item.id,
		position: { x: 100 + xOffset, y: 100 + yOffset },
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
	isPickerOpen = false;
	try {
		await wf.save();
	} catch (e) {
		console.warn('Auto-save failed after adding node', e);
	}
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
			isPlaygroundOpen = true;
			playgroundTab = 'output';
		}
	});
}

async function triggerNodeExecute() {
	if (!selectedNode) return;
	await wf.executeFromNode(selectedNode.id, (execRecord) => {
		const updatedNode = wf.nodes.find((n) => n.id === selectedNode.id);
		if (updatedNode) {
			selectedNode = updatedNode;
			playgroundTab = 'output';
		}
	});
}

function handleViewExecution(exec: any) {
	history.viewExecution(exec, (failedNodeId) => {
		const failedNode = wf.nodes.find((n) => n.id === failedNodeId);
		if (failedNode) {
			selectedNode = failedNode;
			isPlaygroundOpen = true;
			playgroundTab = 'output';
		}
	});
}

function handleExitExecutionView() {
	history.exitExecutionView(selectedNode?.id || null, (node) => {
		selectedNode = node;
	});
}
</script>

<div
	class="relative w-full h-full overflow-hidden rounded-[40px] bg-background border border-white/10 {className}"
	onmousemove={handleMouseMove}
	role="presentation"
>
	<!-- Aurora Background Layer -->
	<div
		class="bg-aurora absolute inset-0 opacity-50 transition-all duration-300 ease-out pointer-events-none z-0"
		style="--x: {mouseX}%; --y: {mouseY}%;"
	></div>
	
	<!-- Mesh Gradient Secondary -->
	<div
		class="absolute top-0 right-0 w-[60%] h-[60%] bg-accent1/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"
	></div>

	<!-- Canvas Header Actions -->
	<div class="absolute top-6 left-6 z-20">
		<a 
			href="/dashboard"
			class="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white/70 rounded-full font-bold text-sm hover:bg-white/10 hover:text-white transition-colors"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
			Back to Dashboard
		</a>
	</div>

	<!-- Execution View Mode Banner -->
	{#if history.isViewingExecution}
		<div class="absolute top-6 left-1/2 -translate-x-1/2 z-30 bg-black/80 border border-primary/50 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center gap-4 shadow-[0_0_30px_rgba(var(--primary),0.25)]">
			<div class="flex items-center gap-2 text-sm text-white font-medium">
				<span class="h-2 w-2 rounded-full animate-pulse bg-primary"></span>
				Viewing Run: <span class="font-mono text-accent1 truncate max-w-[120px]">{history.selectedExecution?.id}</span>
				<span class="px-2 py-0.5 rounded text-[10px] uppercase font-bold ml-1
					{history.selectedExecution?.status === 'success' ? 'bg-emerald-500/20 text-accent2 border border-accent2/35' : 'bg-red-500/20 text-red-400 border border-red-500/35'}"
				>
					{history.selectedExecution?.status}
				</span>
			</div>
			<button 
				onclick={handleExitExecutionView}
				class="px-3 py-1 bg-white text-black hover:scale-105 rounded-full font-bold text-xs transition-all"
			>
				Exit Playback
			</button>
		</div>
	{/if}

	<div class="absolute top-6 right-6 z-20 flex items-center gap-3 transition-all duration-500 {isPlaygroundOpen ? 'mr-[35%]' : ''}">
		{#if !history.isViewingExecution}
			<button 
				onclick={wf.save}
				disabled={wf.isSaving || wf.isExecuting}
				class="px-5 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors disabled:opacity-50"
			>
				{wf.isSaving ? 'Saving...' : 'Save'}
			</button>

			<button 
				onclick={wf.toggleDeploy}
				disabled={wf.isDeploying || wf.isExecuting}
				class="flex items-center gap-2 px-5 py-2 {wf.isActive ? 'bg-primary/20 text-primary border-primary/50' : 'bg-white text-black border-transparent'} border rounded-full font-bold text-sm hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(var(--primary),0.15)]"
			>
				{#if wf.isDeploying}
					<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
					Working...
				{:else if wf.isActive}
					<div class="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_currentColor]"></div>
					Active
				{:else}
					Deploy
				{/if}
			</button>

			<!-- Execute Workflow Button -->
			<button 
				onclick={triggerWorkflowExecute}
				disabled={wf.isExecuting || wf.isSaving}
				class="flex items-center gap-2 px-5 py-2 bg-accent1 text-black rounded-full font-bold text-sm hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(var(--accent1),0.25)]"
			>
				{#if wf.isExecuting}
					<div class="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
					Running...
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13 -8z"/></svg>
					Execute
				{/if}
			</button>
		{/if}

		<!-- History Sidebar Toggle -->
		<button 
			onclick={history.toggle}
			class="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white/80 rounded-full font-bold text-sm hover:bg-white/10 hover:text-white transition-colors"
			title="Execution History"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8l0 4l2 2" /><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></svg>
		</button>
			
		{#if !history.isViewingExecution}
			<!-- Add Node Button -->
			<button onclick={openPicker} title="Add Node" class="px-4 py-2 bg-primary text-black rounded-full font-bold text-sm hover:scale-105 transition-all">
				+
			</button>
			<!-- Variables Button -->
			<button
				onclick={() => { isVarPanelOpen = !isVarPanelOpen; }}
				class="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white/80 rounded-full font-bold text-sm hover:bg-white/10 hover:text-white transition-colors"
				class:!border-primary={isVarPanelOpen}
				class:text-primary={isVarPanelOpen}
				title="Variabili globali"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"/><path d="M9 12h6M12 9v6"/></svg>
				$vars
			</button>
		{/if}
	</div>

	<!-- Svelte Flow Canvas -->
	<div class="absolute inset-0 z-10 transition-all duration-500 {isPlaygroundOpen ? 'w-[65%]' : 'w-full'}">
		{#if !wf.isLoading}
			<SvelteFlow 
				bind:nodes={wf.nodes} 
				bind:edges={wf.edges} 
				{nodeTypes} 
				class="organic-tech-flow"
				colorMode="dark"
				onnodeclick={onNodeClick}
				onconnect={history.isViewingExecution ? undefined : onConnect}
				nodesDraggable={!history.isViewingExecution}
				nodesConnectable={!history.isViewingExecution}
				edgesFocusable={!history.isViewingExecution}
				elementsSelectable={true}
			>
				<Controls 
					class="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl fill-white" 
					buttonClass="border-white/10 hover:bg-white/10 fill-white"
				/>
			</SvelteFlow>
		{:else}
			<div class="flex items-center justify-center h-full w-full">
				<div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
			</div>
		{/if}
	</div>

	<!-- Playground Side Panel -->
	<div 
		class="absolute top-0 right-0 h-full w-[35%] bg-black/60 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-500 ease-out z-20 flex flex-col"
		style="transform: translateX({isPlaygroundOpen ? '0%' : '100%'})"
	>
		{#if selectedNode}
			<div class="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
						{@html selectedNode.data.icon}
					</div>
					<div>
						<h3 class="text-lg font-bold tracking-tight">{selectedNode.data.label}</h3>
						<p class="text-xs text-white/50 uppercase tracking-widest">{selectedNode.data.typeLabel}</p>
					</div>
				</div>
				<button aria-label="Close Playground" title="Close Playground" onclick={closePlayground} class="p-2 hover:bg-white/10 rounded-full transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
				</button>
			</div>

			<div class="flex-1 overflow-y-auto p-6 space-y-8">
				{#if selectedNode.data.execution}
					<!-- Execution Viewer Mode Tabs -->
					<div class="flex border-b border-white/10 mb-6 bg-white/5 p-1 rounded-xl">
						<button 
							onclick={() => playgroundTab = 'params'} 
							class="flex-1 py-2 rounded-lg text-sm font-bold transition-all {playgroundTab === 'params' ? 'bg-white text-black shadow-md' : 'text-white/60 hover:text-white'}"
						>
							Parameters
						</button>
						<button 
							onclick={() => playgroundTab = 'output'} 
							class="flex-1 py-2 rounded-lg text-sm font-bold transition-all {playgroundTab === 'output' ? 'bg-white text-black shadow-md' : 'text-white/60 hover:text-white'}"
						>
							Output
						</button>
					</div>

					{#if playgroundTab === 'params'}
						<div class="space-y-6">
							<div>
								<span class="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Evaluated Parameters</span>
								<pre class="bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-accent1 overflow-x-auto whitespace-pre-wrap">{JSON.stringify(selectedNode.data.execution.input || {}, null, 2)}</pre>
							</div>
							{#if selectedNode.data.execution.previousData}
								<div>
									<span class="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Incoming Data (Previous Node)</span>
									<pre class="bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-white/50 overflow-x-auto whitespace-pre-wrap">{JSON.stringify(selectedNode.data.execution.previousData, null, 2)}</pre>
								</div>
							{/if}
						</div>
					{:else}
						<div class="space-y-6">
							{#if selectedNode.data.execution.error}
								<div class="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-400">
									<span class="font-bold block mb-1">Execution Error</span>
									{selectedNode.data.execution.error}
								</div>
							{/if}
							<div>
								<span class="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Output Data</span>
								<pre class="bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-accent2 overflow-x-auto whitespace-pre-wrap">{JSON.stringify(selectedNode.data.execution.output || {}, null, 2)}</pre>
							</div>
						</div>
					{/if}
				{:else}
					<!-- Normal Editor Mode -->
					<div class="space-y-4">
						<h4 class="text-sm font-bold tracking-widest uppercase text-white/40">Configuration</h4>
						<div class="space-y-3">
							<label class="block">
								<span class="block text-sm text-white/70 mb-1">Node Name</span>
								<input 
									type="text" 
									bind:value={selectedNode.data.label} 
									oninput={wf.autosaveDebounced}
									class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" 
								/>
							</label>

							<!-- HTTP Request Config -->
							{#if selectedNode.type === 'http-request'}
								<label class="block">
									<span class="block text-sm text-white/70 mb-1">URL</span>
									<input 
										type="text" 
										bind:value={selectedNode.data.url} 
										oninput={wf.autosaveDebounced}
										placeholder="https://api.example.com" 
										class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" 
									/>
								</label>
								<label class="block">
									<span class="block text-sm text-white/70 mb-1">Method</span>
									<select 
										bind:value={selectedNode.data.method} 
										onchange={wf.autosaveDebounced}
										class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
									>
										<option>GET</option>
										<option>POST</option>
										<option>PUT</option>
										<option>PATCH</option>
										<option>DELETE</option>
									</select>
								</label>
								<label class="block">
									<span class="block text-sm text-white/70 mb-1">Headers (JSON)</span>
									<textarea 
										bind:value={selectedNode.data.headers} 
										oninput={wf.autosaveDebounced}
										rows="3" 
										placeholder="Authorization: Bearer token" 
										class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
									></textarea>
								</label>
								<label class="block">
									<span class="block text-sm text-white/70 mb-1">Request Body (JSON)</span>
									<textarea 
										bind:value={selectedNode.data.body} 
										oninput={wf.autosaveDebounced}
										rows="3" 
										placeholder={'{ "key": "value" }'} 
										class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
									></textarea>
								</label>
							{/if}

							<!-- Slack Config -->
							{#if selectedNode.type === 'slack'}
								<label class="block">
									<span class="block text-sm text-white/70 mb-1">Webhook URL</span>
									<input 
										type="text" 
										bind:value={selectedNode.data.webhookUrl} 
										oninput={wf.autosaveDebounced}
										placeholder="https://hooks.slack.com/services/..." 
										class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" 
									/>
								</label>
								<label class="block">
									<span class="block text-sm text-white/70 mb-1">Message</span>
									<textarea 
										bind:value={selectedNode.data.message} 
										oninput={wf.autosaveDebounced}
										rows="3" 
										placeholder="Enter your message..." 
										class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
									></textarea>
								</label>
							{/if}

							<!-- Log Config -->
							{#if selectedNode.type === 'log'}
								<label class="block">
									<span class="block text-sm text-white/70 mb-1">Message</span>
									<textarea 
										bind:value={selectedNode.data.message} 
										oninput={wf.autosaveDebounced}
										rows="3" 
										placeholder="What to log..." 
										class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
									></textarea>
								</label>
							{/if}

							<!-- Webhook Config -->
							{#if selectedNode.type === 'webhook'}
								{#if selectedNode.data.webhookPath}
									<label class="block">
										<span class="block text-sm text-white/70 mb-1">Webhook Path</span>
										<div class="flex items-center gap-2">
											<input type="text" value={selectedNode.data.webhookPath} readonly class="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white/50 focus:outline-none cursor-not-allowed" />
											<button onclick={() => navigator.clipboard.writeText(selectedNode.data.webhookPath)} class="px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white/70 hover:bg-white/20">Copy</button>
										</div>
									</label>
								{:else}
									<p class="text-sm text-white/40 italic">Webhook path will be generated when deployed.</p>
								{/if}
							{/if}
						</div>
					</div>

					<!-- Execution Output -->
					<div class="space-y-4">
						<h4 class="text-sm font-bold tracking-widest uppercase text-white/40">Isolation Test Result</h4>
						
						{#if testOutput}
							<div class="relative bg-black/80 border border-white/10 rounded-xl p-4 overflow-hidden group">
								<pre class="text-xs text-accent2 font-mono overflow-x-auto whitespace-pre-wrap">{testOutput}</pre>
							</div>
						{:else}
							<div class="flex items-center justify-center p-8 border border-dashed border-white/10 rounded-xl">
								<p class="text-sm text-white/30 italic">No output yet. Run the node to test.</p>
							</div>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Sticky Footer Actions -->
			<div class="p-6 border-t border-white/10 bg-black/40 mt-auto space-y-2.5">
				{#if !history.isViewingExecution}
					<button 
						onclick={testNode}
						disabled={isTesting || wf.isExecuting}
						class="w-full group relative flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
					>
						{#if isTesting}
							<div class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
							Running...
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
							Test Node in Isolation
						{/if}
					</button>

					<button 
						onclick={triggerNodeExecute}
						disabled={wf.isExecuting || isTesting}
						class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent1/20 text-accent1 border border-accent1/35 rounded-xl font-bold hover:bg-accent1/30 transition-all disabled:opacity-50"
					>
						{#if wf.isExecuting}
							<div class="w-5 h-5 border-2 border-accent1 border-t-transparent rounded-full animate-spin"></div>
							Running...
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
							Run From This Node
						{/if}
					</button>

					<button 
						onclick={() => deleteNode(selectedNode.id)}
						class="w-full px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl font-bold hover:bg-red-500/25 transition-all"
					>
						Delete Node
					</button>
				{:else}
					<div class="text-xs text-white/30 text-center py-2 italic">
						Workspace is read-only during history playback.
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<!-- History Sidebar Drawer -->
{#if history.isHistoryOpen}
	<div class="absolute top-0 right-0 h-full w-[35%] bg-black/85 backdrop-blur-2xl border-l border-white/10 z-30 flex flex-col transition-all duration-300">
		<div class="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
			<h3 class="text-lg font-bold tracking-tight">Execution History</h3>
			<button aria-label="Close History" onclick={history.close} class="p-2 hover:bg-white/10 rounded-full transition-colors">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
			</button>
		</div>
		
		<div class="flex-1 overflow-y-auto p-6 space-y-3">
			{#if history.isLoadingHistory}
				<div class="flex justify-center items-center py-12">
					<div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
				</div>
			{:else if history.historyList.length === 0}
				<div class="text-center text-white/40 italic py-12">No executions found for this workflow.</div>
			{:else}
				{#each history.historyList as exec}
					<button 
						onclick={() => handleViewExecution(exec)}
						class="w-full text-left p-4 bg-white/5 hover:bg-white/10 border {history.selectedExecution?.id === exec.id ? 'border-primary shadow-[0_0_15px_rgba(217,70,239,0.15)]' : 'border-white/10'} rounded-2xl transition-all flex flex-col gap-1.5"
					>
						<div class="flex justify-between items-center gap-2">
							<span class="font-mono text-xs text-white/50 truncate max-w-[170px]">{exec.id}</span>
							<span class="px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider border
								{exec.status === 'success' ? 'bg-emerald-500/10 border-accent2/30 text-accent2' : ''}
								{exec.status === 'failed' ? 'bg-red-500/10 border-red-500/30 text-red-400' : ''}
								{exec.status === 'running' ? 'bg-primary/10 border-primary/30 text-primary animate-pulse' : ''}
								{exec.status === 'pending' ? 'bg-white/5 border-white/10 text-white/50' : ''}"
							>
								{exec.status}
							</span>
						</div>
						<div class="text-xs text-white/70">
							Started: {new Date(exec.startedAt).toLocaleString()}
						</div>
						{#if exec.finishedAt}
							<div class="text-[11px] text-white/40">
								Duration: {Math.max(0, Math.round((new Date(exec.finishedAt).getTime() - new Date(exec.startedAt).getTime()) / 1000))}s
							</div>
						{/if}
					</button>
				{/each}
			{/if}
		</div>
	</div>
{/if}

<!-- Node Picker Modal -->
{#if isPickerOpen}
	<div class="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
		<div class="bg-black/80 border border-white/10 rounded-2xl p-6 w-[520px]">
			<h3 class="text-lg font-bold mb-4">Add Node</h3>
			<div class="grid grid-cols-2 gap-4">
				{#each catalog as item}
					<button onclick={() => addNodeFromCatalog(item)} class="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10">
						<div class="w-10 h-10 rounded bg-white/5 flex items-center justify-center">{@html item.icon}</div>
						<div class="text-left">
							<div class="font-bold">{item.label}</div>
							<div class="text-xs text-white/40">{item.typeLabel}</div>
						</div>
					</button>
				{/each}
			</div>
			<div class="mt-6 text-right">
				<button onclick={closePicker} class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">Close</button>
			</div>
		</div>
	</div>
{/if}

<!-- Variable Panel slide-over -->
<VariablePanel
	variableStore={wf.variableStore}
	bind:open={isVarPanelOpen}
	onclose={() => { isVarPanelOpen = false; }}
/>

<style>
	:global(.organic-tech-flow .svelte-flow__pane) {
		background: transparent !important;
	}
	
	:global(.organic-tech-flow .svelte-flow__edge-path) {
		stroke-width: 3;
		opacity: 0.8;
	}

	:global(.organic-tech-flow .svelte-flow__edge:hover .svelte-flow__edge-path) {
		stroke-width: 4;
		opacity: 1;
	}
</style>
