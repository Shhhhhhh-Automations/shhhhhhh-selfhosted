<script lang="ts">
	import { Handle, Position, useSvelteFlow } from '@xyflow/svelte';
	import ExpressionInput from '../ExpressionInput.svelte';

	let { id, data = $bindable() }: { id: string; data: any } = $props();

	if (!data.label) data.label = 'Execute Workflow';
	if (data.workflowId === undefined) data.workflowId = '';
	if (data.triggerData === undefined) data.triggerData = '{}';

	const { deleteElements } = useSvelteFlow();
	
	function removeNode() {
		deleteElements({ nodes: [{ id }] });
	}
</script>

<div
	class="group relative min-w-[280px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600
	{data.status === 'success' ? '!border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] dark:shadow-[0_0_20px_rgba(16,185,129,0.3)]' : ''}
	{data.status === 'failed' ? '!border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] dark:shadow-[0_0_20px_rgba(239,68,68,0.3)]' : ''}
	{data.status === 'running' ? '!border-black dark:!border-white shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-pulse' : ''}"
>
	<Handle
		type="target"
		position={Position.Left}
		class="!w-3 !h-3 !bg-white dark:!bg-gray-900 !border-2 !border-gray-400 dark:!border-gray-600 hover:!border-black dark:hover:!border-white transition-colors"
	/>

	{#if data.status}
		<div class="absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border bg-white dark:bg-gray-900 shadow-sm transition-transform hover:scale-110
			{data.status === 'success' ? 'border-emerald-500 text-emerald-500' : ''}
			{data.status === 'failed' ? 'border-red-500 text-red-500' : ''}
			{data.status === 'running' ? 'border-black dark:border-white text-black dark:text-white animate-spin' : ''}"
			title={String(data.status === 'failed' && data.error ? data.error : data.status)}
		>
			{#if data.status === 'success'}
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
			{:else if data.status === 'failed'}
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
			{:else if data.status === 'running'}
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9"/></svg>
			{/if}
		</div>
	{/if}

	<button
		onclick={removeNode}
		class="absolute -right-3 -top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 opacity-0 transition-opacity hover:bg-red-500 hover:text-white dark:hover:bg-red-600 dark:hover:text-white group-hover:opacity-100 shadow-sm"
		title="Delete node"
		type="button"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
	</button>

	<!-- Header -->
	<div class="mb-4 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-blue-600 dark:text-blue-400">
			<!-- Execute workflow icon -->
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
		</div>
		<div>
			<input
				type="text"
				bind:value={data.label}
				class="w-full bg-transparent text-[13px] font-bold text-gray-900 dark:text-gray-100 outline-none hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-700 rounded px-1 -ml-1 transition-colors leading-tight"
			/>
			<div class="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-0.5">Sub-Workflow</div>
		</div>
	</div>

	<!-- Configuration -->
	<div class="flex flex-col gap-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-3 nodrag">
		<div class="flex flex-col gap-1">
			<label class="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1" for="workflow-id-{id}">Workflow ID</label>
			<input id="workflow-id-{id}" type="text" bind:value={data.workflowId} class="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs p-2 rounded-md border border-gray-200 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-400/20 outline-none shadow-sm" placeholder="uuid..." />
		</div>
		<ExpressionInput 
			bind:value={data.triggerData} 
			label="Trigger Data (JSON)" 
			placeholder={'{{ $node["HTTP"].json }}'}
		/>
	</div>

	<Handle
		type="source"
		position={Position.Right}
		class="!w-3 !h-3 !bg-white dark:!bg-gray-900 !border-2 !border-gray-400 dark:!border-gray-600 hover:!border-black dark:hover:!border-white transition-colors"
	/>
</div>

<style>
	:global(.nodrag) {
		cursor: default;
	}
</style>
