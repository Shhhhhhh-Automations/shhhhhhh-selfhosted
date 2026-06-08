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
	<div class="backdrop" onclick={() => { open = false; onclose?.(); }}></div>
{/if}

<aside class="var-panel" class:open>
	<header class="panel-header">
		<div class="header-left">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"/>
				<path d="M9 12h6M12 9v6"/>
			</svg>
			<span>Variables</span>
		</div>
		<button class="close-btn" onclick={() => { open = false; onclose?.(); }} type="button" aria-label="Close">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
				<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
			</svg>
		</button>
	</header>

	<div class="panel-body">
		<p class="panel-intro">
			Global variables are accessible in any node via
			<code>{'{{ $vars.name }}'}</code>.
		</p>

		<div class="var-list">
			{#each varEntries as [key, val]}
				<div class="var-row">
					<div class="var-key">
						<span class="key-label">{key}</span>
						<button
							class="copy-btn"
							class:copied={copied === key}
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
					<div class="var-value-row">
						{#if editingKey === key}
							<input
								class="var-value-input"
								type="text"
								bind:value={editingValue}
								onkeydown={(e) => { if (e.key === 'Enter') saveEdit(); if (e.key === 'Escape') editingKey = null; }}
								onblur={saveEdit}
								autofocus
							/>
						{:else}
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<span class="var-value" onclick={() => startEdit(key, val)}>{String(val)}</span>
						{/if}
						<button
							class="delete-btn"
							onclick={() => variableStore.deleteVar(key)}
							title="Delete variable"
							type="button"
						>
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
						</button>
					</div>
					<code class="expr-ref">{'{{ $vars.' + key + ' }}'}</code>
				</div>
			{/each}

			{#if varEntries.length === 0}
				<p class="empty-state">No variables yet.</p>
			{/if}
		</div>

		<div class="add-var">
			<h4 class="add-title">+ New variable</h4>
			<div class="add-row">
				<input class="add-input" type="text" placeholder="name" bind:value={newKey} onkeydown={(e) => { if (e.key === 'Enter') addVariable(); }} />
				<span class="add-equals">=</span>
				<input class="add-input" type="text" placeholder="value" bind:value={newValue} onkeydown={(e) => { if (e.key === 'Enter') addVariable(); }} />
				<button class="add-btn" onclick={addVariable} type="button" disabled={!newKey.trim()}>Add</button>
			</div>
		</div>

		<details class="cheatsheet">
			<summary>Expression guide</summary>
			<ul class="cheat-list">
				<li><code>{'{{ $vars.name }}'}</code> — global variable</li>
				<li><code>{'{{ $node["NodeName"].json.field }}'}</code> — node output</li>
				<li><code>{'{{ $trigger.field }}'}</code> — trigger payload</li>
				<li><code>{'{{ $execution.id }}'}</code> — execution ID</li>
			</ul>
		</details>
	</div>
</aside>

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 39;
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(2px);
	}

	.var-panel {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 340px;
		z-index: 40;
		background: #ffffff;
		border-left: 1px solid #e5e7eb;
		display: flex;
		flex-direction: column;
		transform: translateX(100%);
		transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: -8px 0 40px rgba(0, 0, 0, 0.05);
	}

	.var-panel.open { transform: translateX(0); }

	.panel-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.25rem;
		border-bottom: 1px solid #e5e7eb;
		background: #f9fafb;
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		font-weight: 700;
		color: #111827;
	}

	.close-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: #6b7280;
		padding: 0.25rem;
		border-radius: 4px;
		display: flex;
	}
	.close-btn:hover { background: #f3f4f6; color: #111827; }

	.panel-body {
		flex: 1;
		overflow-y: auto;
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.panel-intro { font-size: 0.75rem; color: #6b7280; line-height: 1.6; margin: 0; }
	.panel-intro code { color: #059669; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; background: #ecfdf5; padding: 0.1em 0.3em; border-radius: 3px; }

	.var-list { display: flex; flex-direction: column; gap: 0.5rem; }
	.var-row { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 0.65rem 0.8rem; display: flex; flex-direction: column; gap: 0.3rem; box-shadow: 0 1px 2px rgba(0,0,0,0.02); }
	.var-key { display: flex; align-items: center; justify-content: space-between; }
	.key-label { font-size: 0.72rem; font-weight: 700; color: #059669; font-family: 'JetBrains Mono', monospace; }
	.copy-btn { background: none; border: none; cursor: pointer; color: #9ca3af; padding: 0.2rem; border-radius: 3px; }
	.copy-btn:hover, .copy-btn.copied { color: #059669; }

	.var-value-row { display: flex; align-items: center; gap: 0.4rem; }
	.var-value { flex: 1; font-size: 0.78rem; color: #1f2937; font-family: 'JetBrains Mono', monospace; cursor: text; padding: 0.1rem 0.2rem; border-radius: 3px; word-break: break-all; }
	.var-value:hover { background: #f3f4f6; }
	.var-value-input { flex: 1; background: #ffffff; border: 1px solid #d1d5db; border-radius: 4px; color: #111827; font-size: 0.78rem; font-family: 'JetBrains Mono', monospace; padding: 0.2rem 0.4rem; outline: none; }
	
	.delete-btn { background: none; border: none; cursor: pointer; color: #9ca3af; padding: 0.2rem; border-radius: 3px; flex-shrink: 0; }
	.delete-btn:hover { color: #ef4444; }

	.expr-ref { font-size: 0.66rem; color: #9ca3af; font-family: 'JetBrains Mono', monospace; user-select: all; }
	.empty-state { font-size: 0.75rem; color: #6b7280; text-align: center; padding: 1rem 0; margin: 0; }

	.add-var { display: flex; flex-direction: column; gap: 0.5rem; }
	.add-title { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b7280; margin: 0; }
	.add-row { display: flex; align-items: center; gap: 0.4rem; }
	.add-input { flex: 1; background: #ffffff; border: 1px solid #d1d5db; border-radius: 5px; color: #111827; font-size: 0.78rem; font-family: 'JetBrains Mono', monospace; padding: 0.35rem 0.5rem; outline: none; }
	.add-input:focus { border-color: #059669; }
	.add-equals { color: #6b7280; font-size: 0.85rem; font-weight: 700; }
	.add-btn { background: #000000; border: none; border-radius: 5px; color: #ffffff; font-size: 0.75rem; font-weight: 600; padding: 0.35rem 0.7rem; cursor: pointer; white-space: nowrap; }
	.add-btn:hover:not(:disabled) { background: #374151; }
	.add-btn:disabled { opacity: 0.4; cursor: not-allowed; }

	.cheatsheet { border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
	.cheatsheet summary { padding: 0.6rem 0.8rem; font-size: 0.75rem; font-weight: 600; color: #4b5563; cursor: pointer; list-style: none; background: #f9fafb; }
	.cheatsheet summary:hover { color: #111827; }
	.cheat-list { margin: 0; padding: 0.75rem 1rem; display: flex; flex-direction: column; gap: 0.5rem; list-style: none; background: #ffffff; }
	.cheat-list li { font-size: 0.72rem; color: #6b7280; display: flex; flex-direction: column; gap: 0.15rem; }
	.cheat-list code { color: #059669; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; background: #ecfdf5; padding: 0.1em 0.35em; border-radius: 3px; }
</style>
