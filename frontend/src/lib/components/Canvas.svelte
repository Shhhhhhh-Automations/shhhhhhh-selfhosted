<script lang="ts">
	import { SvelteFlow, Controls, Background, BackgroundVariant } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	
	import TriggerNode from './nodes/TriggerNode.svelte';
	import ActionNode from './nodes/ActionNode.svelte';
	import { apiFetch } from '$lib/api/client';
	import { onMount } from 'svelte';

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

	// Start with an empty canvas by default. Nodes will be loaded from the backend when available.
	const initialNodes = [];
	const initialEdges = [];

	// Simple catalog for adding nodes via the picker
	const catalog = [
		{ id: 'webhook', label: 'Webhook (Trigger)', typeLabel: 'Webhook', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v14" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 7c-2.333 -3.333 -4.667 -5 -7 -5" /><path d="M12 7c2.333 -3.333 4.667 -5 7 -5" /></svg>' },
		{ id: 'http-request', label: 'HTTP Request (Action)', typeLabel: 'HTTP Request', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h18" /><path d="M12 3v18" /></svg>' },
		{ id: 'slack', label: 'Slack (Action)', typeLabel: 'Slack', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>' },
		{ id: 'log', label: 'Log (Action)', typeLabel: 'Log', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>' }
	];

	let nodes = $state([]);
	let edges = $state([]);

	let isPickerOpen = $state(false);

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
			// If it's a 404, it just means the workflow hasn't been saved yet. Use an empty canvas.
			if (!error.message?.includes('Not Found')) {
				console.warn('Could not load workflow data:', error);
			}
			nodes = [];
			edges = [];
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

	let saveTimer: any = null;

	function handleNodesChange(e: any) {
		const updated = e?.detail?.nodes ?? e?.nodes ?? null;
		if (Array.isArray(updated)) {
			nodes = updated.map((n: any) => {
				const existingNode = nodes.find((existing: any) => existing.id === n.id);
				return {
					id: n.id,
					type: n.type,
					position: n.position || { x: 0, y: 0 },
					data: existingNode?.data || n.data || {},
					selected: n.selected,
					isConnectable: n.isConnectable
				};
			});
			// Salva immediatamente i nodi spostati (le posizioni cambiano frequentemente durante drag)
			clearTimeout(saveTimer);
			saveTimer = setTimeout(() => {
				saveWorkflow();
			}, 300);
		}
	}

	function handleEdgesChange(e: any) {
		const updated = e?.detail?.edges ?? e?.edges ?? null;
		if (Array.isArray(updated)) {
			edges = updated;
		}
		autosaveDebounced();
	}

	async function onConnect(e: any) {
		const ev = e?.detail ?? e;
		const { source, target, sourceHandle, targetHandle } = ev;
		if (!source || !target) return;
		const id = `e${source}-${target}-${Date.now()}`;
		edges = [...edges, { id, source, target, sourceHandle, targetHandle, animated: true, style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;' }];
		// Persist the new edge
		try { await saveWorkflow(); } catch (err) { console.warn('Failed to save edge', err); }
	}

	function autosaveDebounced() {
		clearTimeout(saveTimer);
		saveTimer = setTimeout(() => {
			saveWorkflow();
		}, 600);
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
		nodes = nodes.filter((n: any) => n.id !== nodeId);
		edges = edges.filter((e: any) => e.source !== nodeId && e.target !== nodeId);
		if (selectedNode?.id === nodeId) {
			selectedNode = null;
			isPlaygroundOpen = false;
		}
		saveWorkflow();
	}

	function deleteEdge(edgeId: string) {
		edges = edges.filter((e: any) => e.id !== edgeId);
		saveWorkflow();
	}

	async function addNodeFromCatalog(item: any) {
			// Place new node with spacing based on existing node count
			const xOffset = 150 * (nodes.length % 3);
			const yOffset = 150 * Math.floor(nodes.length / 3);
		
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
					...(item.id === 'webhook' ? { webhookPath: '' } : {}),
				},
			};

			nodes = [...nodes, newNode];
			isPickerOpen = false;
			try {
				await saveWorkflow();
			} catch (e) {
				console.warn('Auto-save failed after adding node', e);
			}
		}

	async function saveWorkflow() {
		isSaving = true;
		try {
			const payload = {
				nodes: nodes.map((n: any) => ({
					id: n.id,
					type: n.type,
					data: n.data,
					position: n.position || { x: 0, y: 0 }
				})),
				edges: edges.map((e: any) => ({
					id: e.id,
					source: e.source,
					target: e.target,
					sourceHandle: e.sourceHandle,
					targetHandle: e.targetHandle
				}))
			};
			
			await apiFetch(`/workflows/${workflowId}/graph`, {
				method: 'PUT',
				body: JSON.stringify(payload)
			});
			console.log('Workflow saved successfully with positions', payload);
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
					type: selectedNode.type,
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
			
		<!-- Add Node Button -->
		<button onclick={openPicker} title="Add Node" class="px-4 py-2 bg-primary text-black rounded-full font-bold text-sm hover:scale-105 transition-all">
			+
		</button>
	</div>

	<!-- Svelte Flow Canvas -->
	<div class="absolute inset-0 z-10 transition-all duration-500 {isPlaygroundOpen ? 'w-[65%]' : 'w-full'}">
		{#if !isLoading}
			<SvelteFlow 
				{nodes} 
				{edges} 
				{nodeTypes} 
				class="organic-tech-flow"
				colorMode="dark"
				onnodeclick={onNodeClick}
				onnodeschange={handleNodesChange}
				onedgeschange={handleEdgesChange}
				onconnect={onConnect}
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

						<!-- HTTP Request Config -->
						{#if selectedNode.type === 'http-request'}
							<label class="block">
								<span class="block text-sm text-white/70 mb-1">URL</span>
								<input type="text" bind:value={selectedNode.data.url} placeholder="https://api.example.com" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
							</label>
							<label class="block">
								<span class="block text-sm text-white/70 mb-1">Method</span>
								<select bind:value={selectedNode.data.method} class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors">
									<option>GET</option>
									<option>POST</option>
									<option>PUT</option>
									<option>PATCH</option>
									<option>DELETE</option>
								</select>
							</label>
							<label class="block">
								<span class="block text-sm text-white/70 mb-1">Headers (JSON)</span>
								<textarea bind:value={selectedNode.data.headers} rows="3" placeholder="Authorization: Bearer token" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
							</label>
						{/if}

						<!-- Slack Config -->
						{#if selectedNode.type === 'slack'}
							<label class="block">
								<span class="block text-sm text-white/70 mb-1">Webhook URL</span>
								<input type="text" bind:value={selectedNode.data.webhookUrl} placeholder="https://hooks.slack.com/services/..." class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
							</label>
							<label class="block">
								<span class="block text-sm text-white/70 mb-1">Message</span>
								<textarea bind:value={selectedNode.data.message} rows="3" placeholder="Enter your message..." class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
							</label>
						{/if}

						<!-- Log Config -->
						{#if selectedNode.type === 'log'}
							<label class="block">
								<span class="block text-sm text-white/70 mb-1">Message</span>
								<textarea bind:value={selectedNode.data.message} rows="3" placeholder="What to log..." class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
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
			<div class="p-6 border-t border-white/10 bg-black/40 mt-auto space-y-3">
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

				<button 
					onclick={() => deleteNode(selectedNode.id)}
					class="w-full px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-bold hover:bg-red-500/30 transition-all"
				>
					Delete Node
				</button>
			</div>
		{/if}
	</div>
</div>

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
