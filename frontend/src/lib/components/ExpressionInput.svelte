<script lang="ts">
	import type { useVariableStore } from '$lib/hooks/useVariableStore.svelte';

	interface Props {
		value: string;
		placeholder?: string;
		class?: string;
		onchange?: (value: string) => void;
		variableStore?: ReturnType<typeof useVariableStore>;
		label?: string;
	}

	let {
		value = $bindable(''),
		placeholder = '',
		class: className = '',
		onchange,
		variableStore,
		label,
	}: Props = $props();

	let isExpression = $state(value.includes('{{'));
	let showAutocomplete = $state(false);
	let filterText = $state('');

	let previewValue = $derived.by(() => {
		if (!isExpression || !variableStore || !value.includes('{{')) return null;
		try {
			return value.replace(/\{\{\s*(.+?)\s*\}\}/g, (match, expr) => {
				const nodeMatch = expr.match(/\$node\["(.+?)"\]\.(?:json|data)\.(.+)/);
				if (nodeMatch) {
					const [, nodeName, path] = nodeMatch;
					const output = variableStore.nodeOutputs[nodeName];
					if (!output) return `<span class="preview-missing">${match}</span>`;
					const resolved = path.split('.').reduce((acc: any, k: string) => acc?.[k], output.json);
					return resolved !== undefined
						? `<span class="preview-resolved">${String(resolved)}</span>`
						: `<span class="preview-missing">${match}</span>`;
				}
				const varsMatch = expr.match(/\$vars\.(.+)/);
				if (varsMatch && variableStore) {
					const resolved = variableStore.vars[varsMatch[1]];
					return resolved !== undefined
						? `<span class="preview-resolved">${String(resolved)}</span>`
						: `<span class="preview-missing">${match}</span>`;
				}
				return `<span class="preview-pending">${match}</span>`;
			});
		} catch {
			return null;
		}
	});

	let availableExpressions = $derived(variableStore?.getAvailableExpressions() ?? []);
	let filteredSuggestions = $derived(
		availableExpressions
			.flatMap((group) => [
				{ type: 'group' as const, label: group.label, expression: group.expression },
				...group.fields.map((f) => ({ type: 'field' as const, label: f, expression: f })),
			])
			.filter((s) => !filterText || s.label.toLowerCase().includes(filterText.toLowerCase()))
			.slice(0, 20),
	);

	function toggleMode() {
		isExpression = !isExpression;
		if (isExpression && !value.includes('{{')) {
			value = `{{ ${value} }}`;
			onchange?.(value);
		} else if (!isExpression) {
			value = value.replace(/^\{\{\s*/, '').replace(/\s*\}\}$/, '');
			onchange?.(value);
		}
	}

	function handleInput(e: Event) {
		const target = e.target as HTMLTextAreaElement | HTMLInputElement;
		value = target.value;
		onchange?.(value);
		if (isExpression) {
			filterText = value.split('{{').pop()?.replace('}}', '').trim() ?? '';
			showAutocomplete = value.includes('{{') && !value.includes('}}');
		}
	}

	function insertExpression(expr: string) {
		if (value.includes('{{') && !value.includes('}}')) {
			value = value.replace(/\{\{[^}]*$/, expr);
		} else {
			value = value + ' ' + expr;
		}
		showAutocomplete = false;
		onchange?.(value);
	}
</script>

<div class="expression-field {className}">
	{#if label}
		<label class="expr-label">{label}</label>
	{/if}

	<div class="input-row" class:is-expression={isExpression}>
		{#if isExpression}
			<textarea
				class="expr-textarea"
				{placeholder}
				{value}
				oninput={handleInput}
				onfocus={() => { showAutocomplete = value.includes('{{') && !value.includes('}}'); }}
				onblur={() => setTimeout(() => { showAutocomplete = false; }, 150)}
				rows={2}
				spellcheck="false"
				autocomplete="off"
			></textarea>
		{:else}
			<input
				class="expr-input"
				type="text"
				{placeholder}
				{value}
				oninput={handleInput}
			/>
		{/if}

		<button
			class="fx-toggle"
			class:active={isExpression}
			onclick={toggleMode}
			title={isExpression ? 'Disable expression mode' : 'Enable expression mode'}
			type="button"
		>
			<span class="fx-icon">ƒ<span class="fx-x">x</span></span>
		</button>
	</div>

	{#if isExpression && previewValue}
		<div class="expr-preview">
			<span class="preview-label">Preview:</span>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html previewValue}
		</div>
	{/if}

	{#if showAutocomplete && filteredSuggestions.length > 0}
		<div class="autocomplete-dropdown">
			{#each filteredSuggestions as suggestion}
				{#if suggestion.type === 'group'}
					<div class="autocomplete-group">{suggestion.label}</div>
				{:else}
					<button
						class="autocomplete-item"
						type="button"
						onmousedown={() => insertExpression(suggestion.expression)}
					>
						{suggestion.expression}
					</button>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	.expression-field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		position: relative;
		width: 100%;
	}

	.expr-label {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #6b7280;
	}

	.input-row {
		display: flex;
		align-items: stretch;
		gap: 0;
		border: 1px solid #d1d5db;
		border-radius: 6px;
		overflow: hidden;
		background: #ffffff;
		transition: border-color 0.15s;
		box-shadow: 0 1px 2px rgba(0,0,0,0.02);
	}

	.input-row:focus-within {
		border-color: #3b82f6;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
	}

	.input-row.is-expression {
		border-color: #8b5cf6;
	}
	.input-row.is-expression:focus-within {
		box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.15);
	}

	.expr-input,
	.expr-textarea {
		flex: 1;
		background: transparent;
		border: none;
		outline: none;
		color: #111827;
		font-size: 0.8rem;
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		padding: 0.4rem 0.5rem;
		resize: none;
		line-height: 1.5;
	}

	.expr-textarea {
		padding: 0.4rem 0.5rem;
	}

	.fx-toggle {
		flex-shrink: 0;
		background: #f9fafb;
		border: none;
		border-left: 1px solid #e5e7eb;
		padding: 0 0.6rem;
		cursor: pointer;
		color: #6b7280;
		font-size: 0.75rem;
		font-weight: 700;
		transition: background 0.15s, color 0.15s;
		display: flex;
		align-items: center;
	}

	.fx-toggle:hover {
		background: #f3f4f6;
		color: #111827;
	}

	.fx-toggle.active {
		background: #f3e8ff;
		color: #7e22ce;
		border-left-color: #d8b4fe;
	}

	.fx-icon {
		font-style: italic;
		font-family: serif;
		letter-spacing: -0.05em;
	}

	.fx-x {
		font-size: 0.65em;
		vertical-align: sub;
	}

	.expr-preview {
		font-size: 0.72rem;
		font-family: 'JetBrains Mono', monospace;
		padding: 0.2rem 0.4rem;
		background: #f9fafb;
		border-radius: 4px;
		border: 1px solid #e5e7eb;
		color: #4b5563;
		line-height: 1.5;
		word-break: break-all;
	}

	.preview-label {
		color: #9ca3af;
		margin-right: 0.3rem;
		font-style: italic;
	}

	:global(.preview-resolved) { color: #059669; font-weight: 600; }
	:global(.preview-missing) { color: #ef4444; text-decoration: underline dotted; }
	:global(.preview-pending) { color: #8b5cf6; }

	.autocomplete-dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 100;
		background: #ffffff;
		border: 1px solid #e5e7eb;
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
		max-height: 220px;
		overflow-y: auto;
		margin-top: 4px;
	}

	.autocomplete-group {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #6b7280;
		padding: 0.4rem 0.6rem 0.2rem;
		background: #f9fafb;
		border-bottom: 1px solid #f3f4f6;
	}

	.autocomplete-item {
		display: block;
		width: 100%;
		text-align: left;
		background: transparent;
		border: none;
		padding: 0.4rem 0.7rem;
		font-size: 0.75rem;
		font-family: 'JetBrains Mono', monospace;
		color: #374151;
		cursor: pointer;
		transition: background 0.1s;
		border-bottom: 1px solid #f3f4f6;
	}

	.autocomplete-item:last-child {
		border-bottom: none;
	}

	.autocomplete-item:hover {
		background: #f3e8ff;
		color: #6b21a8;
	}
</style>
