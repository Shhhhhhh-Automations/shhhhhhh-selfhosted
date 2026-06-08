import { apiFetch } from '$lib/api/client';

/** Structured output from a single node, mirroring the backend NodeOutput shape */
export interface NodeOutput {
	json: Record<string, any>;
	success: boolean;
	error?: string;
	nodeType: string;
	label?: string;
	startedAt?: string;
	finishedAt?: string;
}

/** A snapshot of all node outputs from the last execution */
export type NodeOutputMap = Record<string, NodeOutput>;

export function useVariableStore(workflowId: string) {
	/** Global workflow variables — accessible in expressions as {{ $vars.name }} */
	let vars = $state<Record<string, any>>({});
	/** Node outputs from the last execution, keyed by node ID and label */
	let nodeOutputs = $state<NodeOutputMap>({});
	let isLoading = $state(false);
	let isSaving = $state(false);

	/** Load global variables from the backend */
	async function load() {
		isLoading = true;
		try {
			const data = await apiFetch(`/workflows/${workflowId}/variables`);
			vars = data.variables ?? {};
		} catch (e) {
			console.warn('[useVariableStore] Failed to load variables', e);
		} finally {
			isLoading = false;
		}
	}

	/** Persist global variables to the backend */
	async function save() {
		isSaving = true;
		try {
			await apiFetch(`/workflows/${workflowId}/variables`, {
				method: 'PUT',
				body: JSON.stringify({ variables: vars }),
			});
		} catch (e) {
			console.error('[useVariableStore] Failed to save variables', e);
		} finally {
			isSaving = false;
		}
	}

	/** Set a single variable and persist immediately */
	async function setVar(key: string, value: any) {
		vars = { ...vars, [key]: value };
		await save();
	}

	/** Delete a single variable by key */
	async function deleteVar(key: string) {
		try {
			await apiFetch(`/workflows/${workflowId}/variables/${encodeURIComponent(key)}`, {
				method: 'DELETE',
			});
			const updated = { ...vars };
			delete updated[key];
			vars = updated;
		} catch (e) {
			console.error('[useVariableStore] Failed to delete variable', e);
		}
	}

	/**
	 * Ingest node outputs from an execution result.
	 * Call this after each workflow run to refresh the expression preview data.
	 */
	function ingestExecutionResult(executionResult: Record<string, any>) {
		const outputs: NodeOutputMap = {};
		for (const [nodeId, record] of Object.entries(executionResult)) {
			const output: NodeOutput = {
				json: record.output?.json ?? record.output ?? {},
				success: record.success ?? false,
				error: record.error,
				nodeType: record.nodeType ?? '',
				label: record.label,
				startedAt: record.startedAt,
				finishedAt: record.finishedAt,
			};
			outputs[nodeId] = output;
			if (record.label) {
				outputs[record.label] = output;
			}
		}
		nodeOutputs = outputs;
	}

	/**
	 * Returns the list of expression snippets available BEFORE a given node
	 * (based on which labels/IDs exist in nodeOutputs from the last run).
	 * Useful for populating the ExpressionInput autocomplete.
	 */
	function getAvailableExpressions(): Array<{
		label: string;
		expression: string;
		fields: string[];
	}> {
		const seen = new Set<string>();
		const results: Array<{ label: string; expression: string; fields: string[] }> = [];

		for (const [key, output] of Object.entries(nodeOutputs)) {
			// Skip numeric IDs (UUID) — we prefer the label alias
			if (seen.has(key)) continue;

			const displayLabel = output.label ?? key;
			// Avoid duplicating the UUID key if label already added
			if (output.label && key !== output.label) {
				seen.add(output.label);
			}
			seen.add(key);

			const fields = Object.keys(output.json).map((f) => `{{ $node["${displayLabel}"].json.${f} }}`);

			results.push({
				label: displayLabel,
				expression: `{{ $node["${displayLabel}"].json }}`,
				fields,
			});
		}

		// Add global $vars
		const varKeys = Object.keys(vars);
		if (varKeys.length > 0) {
			results.push({
				label: '$vars (variabili globali)',
				expression: `{{ $vars }}`,
				fields: varKeys.map((k) => `{{ $vars.${k} }}`),
			});
		}

		// Add $trigger shortcut
		results.push({
			label: '$trigger (payload)',
			expression: `{{ $trigger }}`,
			fields: [],
		});

		// Add $execution shortcut
		results.push({
			label: '$execution',
			expression: `{{ $execution.id }}`,
			fields: ['{{ $execution.id }}', '{{ $execution.workflowId }}'],
		});

		return results;
	}

	return {
		get vars() {
			return vars;
		},
		set vars(value) {
			vars = value;
		},
		get nodeOutputs() {
			return nodeOutputs;
		},
		get isLoading() {
			return isLoading;
		},
		get isSaving() {
			return isSaving;
		},
		load,
		save,
		setVar,
		deleteVar,
		ingestExecutionResult,
		getAvailableExpressions,
	};
}
