<script lang="ts">
import { Handle, type NodeProps, Position } from '@xyflow/svelte';

let { data }: NodeProps = $props();
</script>

<div class="relative bg-white w-64 p-4 rounded-xl text-left shadow-sm border border-gray-200 transition-all group hover:shadow-md hover:border-gray-300
	{data.status === 'success' ? '!border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : ''}
	{data.status === 'failed' ? '!border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : ''}
	{data.status === 'running' ? '!border-black shadow-[0_0_15px_rgba(0,0,0,0.1)] animate-pulse' : ''}">
	
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

	<div class="flex items-center gap-3">
		<div class="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700">
			{#if data.icon}
				{@html data.icon}
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h18" /><path d="M12 3v18" /></svg>
			{/if}
		</div>
		<div>
			<div class="text-[13px] font-bold text-gray-900 leading-tight">{data.label || 'Unknown Action'}</div>
			<div class="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">{data.typeLabel || 'Action'}</div>
		</div>
	</div>
	{#if data.description}
		<div class="mt-2 text-xs text-gray-500 line-clamp-2">{data.description}</div>
	{/if}

	<Handle 
		type="source" 
		position={Position.Right} 
		class="!w-3 !h-3 !bg-white !border-2 !border-gray-400 hover:!border-black transition-colors"
	/>
</div>
