<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import { fade, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	interface Props {
		open: boolean;
		onclose: () => void;
		title?: string;
		description?: string;
		children?: Snippet;
		footer?: Snippet;
		class?: string;
	}

	let {
		open = $bindable(false),
		onclose,
		title,
		description,
		children,
		footer,
		class: className = '',
	}: Props = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) onclose();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
	<!-- Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-[2px]"
		transition:fade={{ duration: 200 }}
		onclick={onclose}
	></div>

	<!-- Modal Container -->
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
		<div
			class={cn(
				'relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto',
				className
			)}
			in:scale={{ duration: 300, easing: backOut, start: 0.95 }}
			out:scale={{ duration: 200, start: 0.95 }}
			role="dialog"
			aria-modal="true"
		>
			<!-- Header -->
			<div class="p-5 border-b border-gray-100 flex items-start justify-between flex-shrink-0">
				<div>
					{#if title}
						<h2 class="text-lg font-bold text-gray-900 tracking-tight">{title}</h2>
					{/if}
					{#if description}
						<p class="text-sm text-gray-500 mt-1">{description}</p>
					{/if}
				</div>
				<button
					onclick={onclose}
					class="p-1.5 hover:bg-gray-100 rounded-md transition-colors text-gray-400 hover:text-gray-700"
					aria-label="Close"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
				</button>
			</div>

			<!-- Body -->
			<div class="p-5 overflow-y-auto max-h-[60vh]">
				{#if children}
					{@render children()}
				{/if}
			</div>

			<!-- Footer -->
			{#if footer}
				<div class="p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-2 flex-shrink-0">
					{@render footer()}
				</div>
			{/if}
		</div>
	</div>
{/if}
