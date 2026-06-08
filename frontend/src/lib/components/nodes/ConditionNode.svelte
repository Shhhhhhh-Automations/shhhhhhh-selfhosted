<script lang="ts">
	import { Handle, Position, useSvelteFlow } from '@xyflow/svelte';
	import ExpressionInput from '../ExpressionInput.svelte';

	let { id, data = $bindable() }: { id: string; data: any } = $props();

	if (!data.label) data.label = 'IF Condition';
	if (data.condition === undefined) data.condition = '';

	const { deleteElements } = useSvelteFlow();
	
	function removeNode() {
		deleteElements({ nodes: [{ id }] });
	}
</script>

<div
	class="group relative min-w-[280px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-gray-300
	{data.status === 'success' ? '!border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : ''}
	{data.status === 'failed' ? '!border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : ''}
	{data.status === 'running' ? '!border-black shadow-[0_0_15px_rgba(0,0,0,0.1)] animate-pulse' : ''}"
>
	<!-- Input Handle -->
	<Handle
		type="target"
		position={Position.Left}
		class="!w-3 !h-3 !bg-white !border-2 !border-gray-400 hover:!border-black transition-colors"
	/>

	{#if data.status}
		<div class="absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border bg-white shadow-sm transition-transform hover:scale-110
			{data.status === 'success' ? 'border-emerald-500 text-emerald-500' : ''}
			{data.status === 'failed' ? 'border-red-500 text-red-500' : ''}
			{data.status === 'running' ? 'border-black text-black animate-spin' : ''}"
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

	<!-- Header -->
	<div class="mb-4 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-gray-700">
			<!-- Branch icon -->
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M15 6a9 9 0 0 0-9 9"/></svg>
		</div>
		<div>
			<input
				type="text"
				bind:value={data.label}
				class="w-full bg-transparent text-[13px] font-bold text-gray-900 outline-none hover:bg-gray-50 focus:bg-gray-100 rounded px-1 -ml-1 transition-colors leading-tight"
			/>
			<div class="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">IF Condition</div>
		</div>
	</div>

	<!-- Configuration -->
	<div class="flex flex-col gap-3 rounded-lg bg-gray-50 p-3 nodrag border border-gray-100">
		<ExpressionInput 
			bind:value={data.condition} 
			label="Condition (evaluates to true/false)" 
			placeholder={'{{ $node["HTTP"].json.status === 200 }}'}
		/>
	</div>

	<!-- True Output Handle (Top Right) -->
	<Handle
		type="source"
		position={Position.Right}
		id="true"
		style="top: 30%; right: -6px;"
		class="!w-3 !h-3 !bg-emerald-500 !border-2 !border-white"
	/>
	<div class="absolute right-2 text-[10px] font-bold text-emerald-600" style="top: 25%">true</div>

	<!-- False Output Handle (Bottom Right) -->
	<Handle
		type="source"
		position={Position.Right}
		id="false"
		style="top: 70%; right: -6px;"
		class="!w-3 !h-3 !bg-red-500 !border-2 !border-white"
	/>
	<div class="absolute right-2 text-[10px] font-bold text-red-600" style="top: 65%">false</div>

</div>

<style>
	:global(.nodrag) {
		cursor: default;
	}
</style>
