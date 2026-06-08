<script lang="ts">
import { Handle, type NodeProps, Position } from '@xyflow/svelte';

let { data }: NodeProps = $props();
</script>

<div class="relative glass-node w-64 p-5 rounded-2xl text-left shadow-2xl transition-all group
	{data.status === 'success' ? '!border-accent2/80 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : ''}
	{data.status === 'failed' ? '!border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : ''}
	{data.status === 'running' ? '!border-primary/80 shadow-[0_0_20px_rgba(217,70,239,0.2)] animate-pulse' : 'hover:border-accent1/50'}">
	
	<Handle 
		type="target" 
		position={Position.Left} 
		class="!w-3 !h-3 !bg-accent1 !border-2 !border-background"
	/>

	{#if data.status}
		<div class="absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border shadow-lg transition-transform hover:scale-110
			{data.status === 'success' ? 'bg-black border-accent2 text-accent2' : ''}
			{data.status === 'failed' ? 'bg-black border-red-500 text-red-400' : ''}
			{data.status === 'running' ? 'bg-black border-primary text-primary animate-spin' : ''}"
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

	<div class="flex items-center gap-4">
		<div class="w-12 h-12 rounded-xl bg-accent1/20 flex items-center justify-center text-accent1 shadow-[0_0_15px_rgba(var(--accent1),0.2)] group-hover:shadow-[0_0_25px_rgba(var(--accent1),0.4)] transition-shadow">
			{#if data.icon}
				{@html data.icon}
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
			{/if}
		</div>
		<div>
			<div class="text-xs font-bold tracking-widest uppercase text-accent1/80">{data.typeLabel || 'Action'}</div>
			<div class="text-base font-bold text-white mt-0.5">{data.label || 'Unknown Action'}</div>
		</div>
	</div>
	{#if data.description}
		<div class="mt-3 text-sm text-white/50">{data.description}</div>
	{/if}

	<Handle 
		type="source" 
		position={Position.Right} 
		class="!w-3 !h-3 !bg-accent1 !border-2 !border-background"
	/>
</div>
