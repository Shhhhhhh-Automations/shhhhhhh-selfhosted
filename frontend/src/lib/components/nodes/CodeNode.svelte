<script lang="ts">
	import { Handle, Position, useSvelteFlow } from '@xyflow/svelte';

	let { id, data = $bindable() }: { id: string; data: any } = $props();

	if (!data.label) data.label = 'Code';
	if (data.code === undefined) data.code = `// Example: manipulate input data
const input = $input || {};
return {
  ...input,
  processedAt: new Date().toISOString()
};`;

	const { deleteElements } = useSvelteFlow();
	
	function removeNode() {
		deleteElements({ nodes: [{ id }] });
	}
</script>

<div
	class="group relative min-w-[320px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600
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

	<!-- Header -->
	<div class="mb-4 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300">
			<!-- Code icon -->
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
		</div>
		<div>
			<input
				type="text"
				bind:value={data.label}
				class="w-full bg-transparent text-[13px] font-bold text-gray-900 dark:text-gray-100 outline-none hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-700 rounded px-1 -ml-1 transition-colors leading-tight"
			/>
			<div class="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-0.5">Custom JS Code</div>
		</div>
	</div>

	<!-- Configuration -->
	<div class="flex flex-col gap-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-2 nodrag">
		<label class="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1" for="code-textarea-{id}">JavaScript code</label>
		<textarea
			id="code-textarea-{id}"
			bind:value={data.code}
			class="w-full h-32 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-mono text-[11px] p-3 rounded-md border border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 outline-none resize-y shadow-sm"
			spellcheck="false"
		></textarea>
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
