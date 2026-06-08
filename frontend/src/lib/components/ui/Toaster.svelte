<script lang="ts">
	import { toast, type Toast } from './useToast.svelte';
	import { fly } from 'svelte/transition';
	import { cn } from '$lib/utils';

	const typeStyles: Record<string, string> = {
		default: 'bg-white border-gray-200 text-gray-900',
		success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
		error: 'bg-red-50 border-red-200 text-red-900',
		warning: 'bg-amber-50 border-amber-200 text-amber-900'
	};

	const iconStyles: Record<string, string> = {
		default: 'text-gray-500',
		success: 'text-emerald-500',
		error: 'text-red-500',
		warning: 'text-amber-500'
	};
</script>

<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none w-full max-w-sm">
	{#each toast.toasts as t (t.id)}
		<div
			class={cn(
				'pointer-events-auto flex w-full items-start gap-3 rounded-lg border p-4 shadow-lg transition-all',
				typeStyles[t.type || 'default']
			)}
			in:fly={{ y: 20, duration: 300 }}
			out:fly={{ y: 20, duration: 200, opacity: 0 }}
			role="alert"
		>
			<div class={cn('mt-0.5', iconStyles[t.type || 'default'])}>
				{#if t.type === 'success'}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
				{:else if t.type === 'error'}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
				{:else if t.type === 'warning'}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v2m0 4v.01" /><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" /></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
				{/if}
			</div>
			
			<div class="flex-1">
				{#if t.title}
					<h3 class="text-sm font-bold">{t.title}</h3>
				{/if}
				{#if t.description}
					<p class="text-sm opacity-80 mt-1">{t.description}</p>
				{/if}
			</div>

			<button
				onclick={() => toast.remove(t.id)}
				class="rounded-md p-1 opacity-50 hover:opacity-100 transition-opacity"
				aria-label="Close"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
			</button>
		</div>
	{/each}
</div>
