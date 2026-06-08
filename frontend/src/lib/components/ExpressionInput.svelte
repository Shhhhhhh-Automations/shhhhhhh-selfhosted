<script lang="ts">
	import type { useVariableStore } from '$lib/hooks/useVariableStore.svelte';

	interface Props {
		/** Current value (string, may contain {{ ... }} expressions) */
		value: string;
		/** Placeholder for the plain text input */
		placeholder?: string;
		/** CSS class forwarded to the root element */
		class?: string;
		/** Called whenever the value changes */
		onchange?: (value: string) => void;
		/** The variable store — provides autocomplete suggestions & preview data */
		variableStore?: ReturnType<typeof useVariableStore>;
		/** Label shown above the field */
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

	// Whether the field is in "expression mode" (shows {{ }} editor)
	let isExpression = $state(value.includes('{{'));
	let showAutocomplete = $state(false);
	let filterText = $state('');

	// Derived preview: resolve the expression against the last execution outputs
	let previewValue = $derived.by(() => {
		if (!isExpression || !variableStore || !value.includes('{{')) return null;
		// Simple client-side preview — replaces $node["Label"].json.field using nodeOutputs
		try {
			return value.replace(/\{\{\s*(.+?)\s*\}\}/g, (match, expr) => {
				// $node["Label"].json.field
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
				// $vars.name
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
			// Strip {{ }} wrappers if present
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
		// Replace the current open {{ expression with the chosen one
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

	<div class="input-row">
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
			title={isExpression ? 'Disattiva modalità espressione' : 'Attiva modalità espressione'}
			type="button"
		>
			<span class="fx-icon">ƒ<span class="fx-x">x</span></span>
		</button>
	</div>

	<!-- Live Preview -->
	{#if isExpression && previewValue}
		<div class="expr-preview">
			<span class="preview-label">Preview:</span>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html previewValue}
		</div>
	{/if}

	<!-- Autocomplete Dropdown -->
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
		color: oklch(65% 0.05 270);
	}

	.input-row {
		display: flex;
		align-items: stretch;
		gap: 0;
		border: 1px solid oklch(35% 0.06 270);
		border-radius: 6px;
		overflow: hidden;
		background: oklch(14% 0.02 270);
		transition: border-color 0.15s;
	}

	.input-row:focus-within {
		border-color: oklch(65% 0.25 310);
		box-shadow: 0 0 0 2px oklch(65% 0.25 310 / 0.15);
	}

	.expr-input,
	.expr-textarea {
		flex: 1;
		background: transparent;
		border: none;
		outline: none;
		color: oklch(92% 0.02 270);
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
		background: oklch(20% 0.04 270);
		border: none;
		border-left: 1px solid oklch(30% 0.06 270);
		padding: 0 0.6rem;
		cursor: pointer;
		color: oklch(55% 0.05 270);
		font-size: 0.75rem;
		font-weight: 700;
		transition:
			background 0.15s,
			color 0.15s;
		display: flex;
		align-items: center;
	}

	.fx-toggle:hover,
	.fx-toggle.active {
		background: oklch(28% 0.12 310);
		color: oklch(80% 0.25 310);
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

	/* Preview bar */
	.expr-preview {
		font-size: 0.72rem;
		font-family: 'JetBrains Mono', monospace;
		padding: 0.2rem 0.4rem;
		background: oklch(16% 0.03 270);
		border-radius: 4px;
		border: 1px solid oklch(28% 0.06 270);
		color: oklch(75% 0.04 270);
		line-height: 1.5;
		word-break: break-all;
	}

	.preview-label {
		color: oklch(50% 0.04 270);
		margin-right: 0.3rem;
		font-style: italic;
	}

	:global(.preview-resolved) {
		color: oklch(75% 0.2 140);
		font-weight: 600;
	}

	:global(.preview-missing) {
		color: oklch(60% 0.2 30);
		text-decoration: underline dotted;
	}

	:global(.preview-pending) {
		color: oklch(70% 0.2 310);
	}

	/* Autocomplete */
	.autocomplete-dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 100;
		background: oklch(18% 0.04 270);
		border: 1px solid oklch(35% 0.1 310);
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 0 8px 32px oklch(5% 0.02 270 / 0.8);
		max-height: 220px;
		overflow-y: auto;
		margin-top: 2px;
	}

	.autocomplete-group {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: oklch(55% 0.15 310);
		padding: 0.4rem 0.6rem 0.2rem;
		background: oklch(15% 0.04 270);
		border-bottom: 1px solid oklch(25% 0.06 270);
	}

	.autocomplete-item {
		display: block;
		width: 100%;
		text-align: left;
		background: transparent;
		border: none;
		padding: 0.35rem 0.7rem;
		font-size: 0.75rem;
		font-family: 'JetBrains Mono', monospace;
		color: oklch(80% 0.08 270);
		cursor: pointer;
		transition: background 0.1s;
		border-bottom: 1px solid oklch(22% 0.04 270);
	}

	.autocomplete-item:last-child {
		border-bottom: none;
	}

	.autocomplete-item:hover {
		background: oklch(25% 0.1 310);
		color: oklch(90% 0.2 310);
	}
</style>
