<script lang="ts">
	import { SvelteFlow, Controls, Background, BackgroundVariant } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	
	import TriggerNode from './nodes/TriggerNode.svelte';
	import ActionNode from './nodes/ActionNode.svelte';
	import { apiFetch } from '$lib/api/client';
	import { onMount } from 'svelte';

	let { class: className = '', workflowId = 'preview-workflow-1' } = $props();

	// Custom node types registry
	const nodeTypes = {
		trigger: TriggerNode,
		action: ActionNode
	};

	// Mock initial nodes and edges for the dashboard preview
	const initialNodes = [
		{
			id: '1',
			type: 'trigger',
			position: { x: 100, y: 200 },
			data: {
				typeLabel: 'Webhook',
				label: 'Catch Hook',
				description: 'Listens for incoming HTTP POST requests.',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v14" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 7c-2.333 -3.333 -4.667 -5 -7 -5" /><path d="M12 7c2.333 -3.333 4.667 -5 7 -5" /></svg>'
			}
		},
		{
			id: '2',
			type: 'action',
			position: { x: 500, y: 150 },
			data: {
				typeLabel: 'Google Docs',
				label: 'Create Document',
				description: 'Generates a new document from a template.',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg>'
			}
		},
		{
			id: '3',
			type: 'action',
			position: { x: 500, y: 300 },
			data: {
				typeLabel: 'Slack',
				label: 'Send Message',
				description: 'Posts a message to a specific channel.',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M8 12l8 0" /><path d="M12 8l0 8" /></svg>'
			}
		}
	];

	const initialEdges = [
		{
			id: 'e1-2',
			source: '1',
			target: '2',
			animated: true,
			style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;'
		},
		{
			id: 'e1-3',
			source: '1',
			target: '3',
			animated: true,
			style: 'stroke: oklch(75% 0.2 230); stroke-width: 2px;'
		}
	];

	let nodes = $state.raw([...initialNodes]);
	let edges = $state.raw([...initialEdges]);

	// Aurora effect tracking
	let mouseX = $state(50);
	let mouseY = $state(50);

	// Playground State
	let selectedNode = $state<any>(null);
	let isPlaygroundOpen = $state(false);
	let testOutput = $state<string | null>(null);
	let isTesting = $state(false);

	let isSaving = $state(false);
	let isDeploying = $state(false);
	let isActive = $state(false);
	let isLoading = $state(true);

	onMount(async () => {
		try {
			const data = await apiFetch(`/workflows/${workflowId}`);
			
			if (data && Array.isArray(data.nodes) && data.nodes.length > 0) {
				nodes = data.nodes.map((n: any) => ({
					...n,
					position: { x: n.positionX, y: n.positionY },
					data: typeof n.data === 'string' ? JSON.parse(n.data) : n.data
				}));
			} else {
				nodes = [...initialNodes];
			}
			
			if (data && Array.isArray(data.edges) && data.edges.length > 0) {
				edges = data.edges.map((e: any) => ({
					id: e.id,
					source: e.sourceNodeId,
					target: e.targetNodeId,
					sourceHandle: e.sourceHandle,
					targetHandle: e.targetHandle,
					animated: true,
					style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;'
				}));
			} else {
				edges = [...initialEdges];
			}

			if (data && data.isActive !== undefined) {
				isActive = data.isActive;
			}
		} catch (error: any) {
			// If it's a 404, it just means the workflow hasn't been saved yet. 
			// We can quietly use the mock state without alarming the user.
			if (!error.message?.includes('Not Found')) {
				console.warn('Could not load workflow data:', error);
			}
			nodes = [...initialNodes];
			edges = [...initialEdges];
		} finally {
			isLoading = false;
		}
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

	function closePlayground() {
		isPlaygroundOpen = false;
		selectedNode = null;
	}

	async function saveWorkflow() {
		isSaving = true;
		try {
			await apiFetch(`/workflows/${workflowId}/graph`, {
				method: 'PUT',
				body: JSON.stringify({
					nodes: nodes,
					edges: edges
				})
			});
			console.log('Workflow saved successfully');
		} catch (error) {
			console.error('Failed to save workflow:', error);
		} finally {
			setTimeout(() => isSaving = false, 500);
		}
	}

	async function toggleDeploy() {
		isDeploying = true;
		try {
			const targetState = !isActive;
			const res = await apiFetch(`/workflows/${workflowId}/deploy`, {
				method: 'POST',
				body: JSON.stringify({ isActive: targetState })
			});
			isActive = res.isActive;
		} catch (error) {
			console.error('Failed to deploy workflow:', error);
		} finally {
			setTimeout(() => isDeploying = false, 500);
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
					type: selectedNode.data.typeLabel || selectedNode.type,
					data: selectedNode.data
				})
			});
			
			testOutput = JSON.stringify(response, null, 2);
		} catch (e: any) {
			testOutput = JSON.stringify({ error: e.message }, null, 2);
		} finally {
			isTesting = false;
		}
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

	<div class="absolute top-6 right-6 z-20 flex items-center gap-4 transition-all duration-500 {isPlaygroundOpen ? 'mr-[35%]' : ''}">
		<button 
			onclick={saveWorkflow}
			disabled={isSaving}
			class="px-6 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors disabled:opacity-50"
		>
			{isSaving ? 'Saving...' : 'Save Workflow'}
		</button>

		<button 
			onclick={toggleDeploy}
			disabled={isDeploying}
			class="flex items-center gap-2 px-6 py-2 {isActive ? 'bg-primary/20 text-primary border-primary/50' : 'bg-white text-black border-transparent'} border rounded-full font-bold text-sm hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(var(--primary),0.2)]"
		>
			{#if isDeploying}
				<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
				Working...
			{:else if isActive}
				<div class="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_currentColor]"></div>
				Active
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
				Deploy
			{/if}
		</button>
	</div>

	<!-- Svelte Flow Canvas -->
	<div class="absolute inset-0 z-10 transition-all duration-500 {isPlaygroundOpen ? 'w-[65%]' : 'w-full'}">
		{#if !isLoading}
			<SvelteFlow 
				{nodes} 
				{edges} 
				{nodeTypes} 
				fitView
				class="organic-tech-flow"
				colorMode="dark"
				onnodeclick={onNodeClick}
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
				<div class="space-y-4">
					<h4 class="text-sm font-bold tracking-widest uppercase text-white/40">Configuration</h4>
					<div class="space-y-3">
						<label class="block">
							<span class="block text-sm text-white/70 mb-1">Node Name</span>
							<input type="text" bind:value={selectedNode.data.label} class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
						</label>
					</div>
				</div>

				<!-- Execution Output -->
				<div class="space-y-4">
					<h4 class="text-sm font-bold tracking-widest uppercase text-white/40">Execution Result</h4>
					
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
			</div>

			<!-- Sticky Footer Actions -->
			<div class="p-6 border-t border-white/10 bg-black/40 mt-auto">
				<button 
					onclick={testNode}
					disabled={isTesting}
					class="w-full group relative flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
				>
					{#if isTesting}
						<div class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
						Running...
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
						Test Node
					{/if}
				</button>
			</div>
		{/if}
	</div>
</div>

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
