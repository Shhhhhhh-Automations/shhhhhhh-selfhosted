<script lang="ts">
	import type { useVariableStore } from '$lib/hooks/useVariableStore.svelte';

	interface Props {
		variableStore: ReturnType<typeof useVariableStore>;
		open?: boolean;
		onclose?: () => void;
	}

	let { variableStore, open = $bindable(false), onclose }: Props = $props();

	let newKey = $state('');
	let newValue = $state('');
	let editingKey = $state<string | null>(null);
	let editingValue = $state('');
	let copied = $state<string | null>(null);

	function startEdit(key: string, value: any) {
		editingKey = key;
		editingValue = String(value);
	}

	async function saveEdit() {
		if (!editingKey) return;
		await variableStore.setVar(editingKey, editingValue);
		editingKey = null;
	}

	async function addVariable() {
		if (!newKey.trim()) return;
		await variableStore.setVar(newKey.trim(), newValue);
		newKey = '';
		newValue = '';
	}

	function copyExpression(key: string) {
		navigator.clipboard.writeText(`{{ $vars.${key} }}`).then(() => {
			copied = key;
			setTimeout(() => { copied = null; }, 1800);
		});
	}

	let varEntries = $derived(Object.entries(variableStore.vars));
</script>

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-[39] bg-black/20 backdrop-blur-sm transition-opacity" onclick={() => { open = false; onclose?.(); }}></div>
{/if}

<aside class="fixed top-0 right-0 bottom-0 w-[340px] z-40 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[-8px_0_40px_rgba(0,0,0,0.05)] {open ? 'translate-x-0' : 'translate-x-full'}">
	<header class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
		<div class="flex items-center gap-2 text-[14px] font-bold text-gray-900 dark:text-gray-100">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"/>
				<path d="M9 12h6M12 9v6"/>
			</svg>
			<span>Variables</span>
		</div>
		<button class="p-1 rounded text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" onclick={() => { open = false; onclose?.(); }} type="button" aria-label="Close">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
				<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
			</svg>
		</button>
	</header>

	<div class="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
		<p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed m-0">
			Global variables are accessible in any node via
			<code class="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">{'{{ $vars.name }}'}</code>.
		</p>

		<div class="flex flex-col gap-2">
			{#each varEntries as [key, val]}
				<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex flex-col gap-1.5 shadow-sm">
					<div class="flex items-center justify-between">
						<span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">{key}</span>
						<button
							class="p-1 rounded text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors {copied === key ? 'text-emerald-600 dark:text-emerald-400' : ''}"
							onclick={() => copyExpression(key)}
							title="Copy expression"
							type="button"
						>
							{#if copied === key}
								<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
							{:else}
								<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
							{/if}
						</button>
					</div>
					<div class="flex items-center gap-2">
						{#if editingKey === key}
							<input
								class="flex-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-gray-100 text-[12px] font-mono px-2 py-1 outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
								type="text"
								bind:value={editingValue}
								onkeydown={(e) => { if (e.key === 'Enter') saveEdit(); if (e.key === 'Escape') editingKey = null; }}
								onblur={saveEdit}
								autofocus
							/>
						{:else}
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<span class="flex-1 text-[12px] text-gray-800 dark:text-gray-200 font-mono cursor-text px-1 py-0.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 break-all" onclick={() => startEdit(key, val)}>{String(val)}</span>
						{/if}
						<button
							class="shrink-0 p-1 rounded text-gray-400 hover:text-red-500 transition-colors"
							onclick={() => variableStore.deleteVar(key)}
							title="Delete variable"
							type="button"
						>
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
						</button>
					</div>
					<code class="text-[10px] text-gray-400 dark:text-gray-500 font-mono select-all">{'{{ $vars.' + key + ' }}'}</code>
				</div>
			{/each}

			{#if varEntries.length === 0}
				<p class="text-xs text-gray-500 dark:text-gray-400 text-center py-4 m-0">No variables yet.</p>
			{/if}
		</div>

		<div class="flex flex-col gap-2">
			<h4 class="text-[11px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 m-0">+ New variable</h4>
			<div class="flex items-center gap-1.5">
				<input class="flex-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-gray-100 text-[12px] font-mono px-2 py-1.5 outline-none focus:border-emerald-600 dark:focus:border-emerald-500" type="text" placeholder="name" bind:value={newKey} onkeydown={(e) => { if (e.key === 'Enter') addVariable(); }} />
				<span class="text-gray-500 dark:text-gray-400 text-sm font-bold">=</span>
				<input class="flex-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-gray-100 text-[12px] font-mono px-2 py-1.5 outline-none focus:border-emerald-600 dark:focus:border-emerald-500" type="text" placeholder="value" bind:value={newValue} onkeydown={(e) => { if (e.key === 'Enter') addVariable(); }} />
				<button class="bg-black dark:bg-primary border-none rounded text-white text-[12px] font-semibold px-3 py-1.5 cursor-pointer whitespace-nowrap hover:bg-gray-800 dark:hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors" onclick={addVariable} type="button" disabled={!newKey.trim()}>Add</button>
			</div>
		</div>

		<details class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group">
			<summary class="p-2.5 text-xs font-semibold text-gray-600 dark:text-gray-300 cursor-pointer list-none bg-gray-50 dark:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">Expression guide</summary>
			<ul class="m-0 p-3 flex flex-col gap-2 list-none bg-white dark:bg-gray-900">
				<li class="text-[11px] text-gray-500 dark:text-gray-400 flex flex-col gap-0.5"><code class="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded w-max">{'{{ $vars.name }}'}</code> — global variable</li>
				<li class="text-[11px] text-gray-500 dark:text-gray-400 flex flex-col gap-0.5"><code class="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded w-max">{'{{ $node["NodeName"].json.field }}'}</code> — node output</li>
				<li class="text-[11px] text-gray-500 dark:text-gray-400 flex flex-col gap-0.5"><code class="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded w-max">{'{{ $trigger.field }}'}</code> — trigger payload</li>
				<li class="text-[11px] text-gray-500 dark:text-gray-400 flex flex-col gap-0.5"><code class="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded w-max">{'{{ $execution.id }}'}</code> — execution ID</li>
			</ul>
		</details>
	</div>
</aside>
