<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	interface Props extends HTMLButtonAttributes {
		children?: Snippet;
		variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'aurora';
		size?: 'default' | 'sm' | 'lg' | 'icon';
		class?: string;
	}

	let {
		children,
		variant = 'default',
		size = 'default',
		class: className = '',
		...rest
	}: Props = $props();

	const variants = {
		default: 'bg-black text-white hover:bg-gray-900 shadow-sm',
		destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-sm',
		outline: 'border border-gray-200 bg-white hover:bg-gray-100 text-gray-900 shadow-sm',
		secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm',
		ghost: 'hover:bg-gray-100 hover:text-gray-900 text-gray-700',
		link: 'text-gray-900 underline-offset-4 hover:underline',
		aurora: 'relative overflow-hidden bg-black text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-500 border border-white/10',
	};

	const sizes = {
		default: 'h-9 px-4 py-2',
		sm: 'h-8 rounded-md px-3 text-xs',
		lg: 'h-10 rounded-md px-8',
		icon: 'h-9 w-9',
	};
</script>

<button
	class={cn(
		'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white group',
		variants[variant],
		sizes[size],
		className
	)}
	{...rest}
>
	{#if variant === 'aurora'}
		<!-- Subtle mesh gradient/aurora background overlay for the button -->
		<div class="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none transition-opacity group-hover:opacity-60 duration-500" style="background: radial-gradient(circle at 20% 50%, rgba(59,130,246,0.8), transparent 50%), radial-gradient(circle at 80% 50%, rgba(139,92,246,0.8), transparent 50%);"></div>
	{/if}
	
	<span class="relative z-10 flex items-center justify-center gap-2">
		{#if children}
			{@render children()}
		{/if}
	</span>
</button>
