<script lang="ts">
	import { Handle, Position, useSvelteFlow } from '@xyflow/svelte';
	import ExpressionInput from '../ExpressionInput.svelte';

	let { id, data = $bindable() }: { id: string; data: any } = $props();

	if (!data.label) data.label = 'AI Agent';
	if (data.prompt === undefined) data.prompt = 'You are a helpful AI assistant. Use the tools provided to answer the user query.';
	if (data.message === undefined) data.message = '{{ $input.message }}';

	const { deleteElements } = useSvelteFlow();
	
	function removeNode() {
		deleteElements({ nodes: [{ id }] });
	}
</script>

<div
	class="group relative min-w-[320px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-gray-300
	{data.status === 'success' ? '!border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : ''}
	{data.status === 'failed' ? '!border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : ''}
	{data.status === 'running' ? '!border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.1)] animate-pulse' : ''}"
>
	<!-- Standard Input (Data) -->
	<Handle
		type="target"
		position={Position.Left}
		class="!w-3 !h-3 !bg-white !border-2 !border-gray-400 hover:!border-black transition-colors"
		id="main"
	/>

	<!-- Tools Input (Special Handle at bottom) -->
	<Handle
		type="target"
		position={Position.Bottom}
		class="!w-4 !h-2 !rounded-sm !bg-yellow-400 !border-2 !border-white"
		id="tools"
	/>

	<!-- Output (Data) -->
	<Handle
		type="source"
		position={Position.Right}
		class="!w-3 !h-3 !bg-purple-500 !border-2 !border-white"
		id="main"
	/>

	{#if data.status}
		<div class="absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border bg-white shadow-sm transition-transform hover:scale-110
			{data.status === 'success' ? 'border-emerald-500 text-emerald-500' : ''}
			{data.status === 'failed' ? 'border-red-500 text-red-500' : ''}
			{data.status === 'running' ? 'border-purple-500 text-purple-500 animate-spin' : ''}"
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
		class="absolute -right-3 -top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 opacity-0 transition-opacity hover:bg-red-500 hover:text-white group-hover:opacity-100 shadow-sm"
		title="Delete node"
		type="button"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
	</button>

	<!-- Header -->
	<div class="mb-4 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-purple-600">
			<!-- AI spark icon -->
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
		</div>
		<div>
			<input
				type="text"
				bind:value={data.label}
				class="w-full bg-transparent text-[13px] font-bold text-gray-900 outline-none hover:bg-gray-50 focus:bg-gray-100 rounded px-1 -ml-1 transition-colors leading-tight"
			/>
			<div class="text-[10px] uppercase tracking-wider text-purple-600 mt-0.5">AI Agent</div>
		</div>
	</div>

	<!-- Configuration -->
	<div class="flex flex-col gap-3 rounded-lg bg-gray-50 border border-gray-100 p-3 nodrag">
		<div class="flex flex-col gap-1">
			<label class="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-1" for="system-prompt-{id}">System Prompt</label>
			<textarea
				id="system-prompt-{id}"
				bind:value={data.prompt}
				class="w-full bg-white text-gray-800 text-xs p-2 rounded-md border border-gray-200 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 outline-none resize-y min-h-16 shadow-sm"
			></textarea>
		</div>
		
		<ExpressionInput 
			bind:value={data.message} 
			label="User Message" 
			placeholder={'{{ $input.message }}'}
		/>

		<div class="flex flex-col gap-1 mt-1">
			<label class="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-1" for="api-key-{id}">API Key</label>
			<input
				id="api-key-{id}"
				type="password"
				bind:value={data.apiKey}
				class="w-full bg-white text-gray-800 text-xs p-2 rounded-md border border-gray-200 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 outline-none shadow-sm"
				placeholder="sk-..."
			/>
		</div>
	</div>
</div>

<style>
	:global(.nodrag) {
		cursor: default;
	}
</style>
