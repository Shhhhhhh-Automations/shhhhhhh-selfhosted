<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	
	let { data }: NodeProps = $props();
</script>

<div class="glass-node w-64 p-5 rounded-2xl text-left shadow-2xl transition-all hover:border-accent1/50 group">
	<Handle 
		type="target" 
		position={Position.Left} 
		class="!w-3 !h-3 !bg-accent1 !border-2 !border-background"
	/>

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
