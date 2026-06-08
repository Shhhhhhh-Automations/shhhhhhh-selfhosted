import { apiFetch } from '$lib/api/client';
import { useVariableStore } from './useVariableStore.svelte';

export function useWorkflow(initialWorkflowId: string) {
	let workflowId = $state(initialWorkflowId);
	let nodes = $state<any[]>([]);
	let edges = $state<any[]>([]);
	let isActive = $state(false);
	let isLoading = $state(true);
	let isSaving = $state(false);
	let isDeploying = $state(false);
	let isExecuting = $state(false);

	/** Companion variable store for $vars and node output previews */
	const variableStore = useVariableStore(initialWorkflowId);

	let saveTimer: any = null;

	async function load() {
		isLoading = true;
		try {
			const data = await apiFetch(`/workflows/${workflowId}`);

			if (data && Array.isArray(data.nodes) && data.nodes.length > 0) {
				nodes = data.nodes.map((n: any) => ({
					...n,
					position: { x: n.positionX, y: n.positionY },
					data: typeof n.data === 'string' ? JSON.parse(n.data) : n.data,
				}));
			} else {
				nodes = [];
			}

			if (data && Array.isArray(data.edges) && data.edges.length > 0) {
				edges = data.edges.map((e: any) => ({
					id: e.id,
					source: e.sourceNodeId,
					target: e.targetNodeId,
					sourceHandle: e.sourceHandle,
					targetHandle: e.targetHandle,
					animated: true,
					style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;',
				}));
			} else {
				edges = [];
			}

			if (data && data.isActive !== undefined) {
				isActive = data.isActive;
			}

			// Also load global variables
			await variableStore.load();
		} catch (error: any) {
			if (!error.message?.includes('Not Found')) {
				console.warn('Could not load workflow data:', error);
			}
			nodes = [];
			edges = [];
		} finally {
			isLoading = false;
		}
	}

	async function save() {
		isSaving = true;
		try {
			const payload = {
				nodes: nodes.map((n: any) => ({
					id: n.id,
					type: n.type,
					data: n.data,
					position: n.position || { x: 0, y: 0 },
				})),
				edges: edges.map((e: any) => ({
					id: e.id,
					source: e.source,
					target: e.target,
					sourceHandle: e.sourceHandle,
					targetHandle: e.targetHandle,
				})),
			};

			await apiFetch(`/workflows/${workflowId}/graph`, {
				method: 'PUT',
				body: JSON.stringify(payload),
			});
			console.log('Workflow saved successfully with positions', payload);
		} catch (error) {
			console.error('Failed to save workflow:', error);
		} finally {
			setTimeout(() => {
				isSaving = false;
			}, 500);
		}
	}

	function autosaveDebounced() {
		clearTimeout(saveTimer);
		saveTimer = setTimeout(() => {
			save();
		}, 300);
	}

	async function toggleDeploy() {
		isDeploying = true;
		try {
			const targetState = !isActive;
			const res = await apiFetch(`/workflows/${workflowId}/deploy`, {
				method: 'POST',
				body: JSON.stringify({ isActive: targetState }),
			});
			isActive = res.isActive;
		} catch (error) {
			console.error('Failed to deploy workflow:', error);
		} finally {
			setTimeout(() => {
				isDeploying = false;
			}, 500);
		}
	}

	async function execute(onComplete?: (execResult: any) => void) {
		if (isExecuting) return;
		isExecuting = true;

		nodes = nodes.map((n) => ({
			...n,
			data: { ...n.data, status: 'running', error: undefined, execution: undefined },
		}));

		try {
			await save();

			const response = await apiFetch(`/workflows/${workflowId}/execute`, {
				method: 'POST',
			});

			if (response.execution) {
				const execResult = JSON.parse(response.execution.executionResult || '{}');
				// Sync variable store with latest node outputs
				variableStore.ingestExecutionResult(execResult);
				nodes = nodes.map((n) => {
					const nodeRes = execResult[n.id];
					return {
						...n,
						data: {
							...n.data,
							status: nodeRes ? (nodeRes.success ? 'success' : 'failed') : undefined,
							error:
								nodeRes?.error ||
								(response.execution.error && n.id === response.execution.errorNodeId
									? response.execution.error
									: undefined),
							execution: nodeRes,
						},
					};
				});

				if (onComplete) {
					onComplete(response.execution);
				}
			}
		} catch (e: any) {
			console.error('Workflow execution failed:', e);
			try {
				const executions = await apiFetch(`/executions?workflowId=${workflowId}`);
				if (executions && executions.length > 0) {
					const latestExec = executions[0];
					const execResult = JSON.parse(latestExec.executionResult || '{}');
					nodes = nodes.map((n) => {
						const nodeRes = execResult[n.id];
						return {
							...n,
							data: {
								...n.data,
								status: nodeRes ? (nodeRes.success ? 'success' : 'failed') : undefined,
								error:
									nodeRes?.error ||
									(latestExec.error && latestExec.error.includes(n.data.label)
										? latestExec.error
										: undefined),
								execution: nodeRes,
							},
						};
					});
				}
			} catch {}
		} finally {
			isExecuting = false;
		}
	}

	async function executeFromNode(startNodeId: string, onComplete?: (execResult: any) => void) {
		if (isExecuting) return;
		isExecuting = true;

		nodes = nodes.map((n) => ({
			...n,
			data: { ...n.data, status: 'running', error: undefined, execution: undefined },
		}));

		try {
			await save();

			const response = await apiFetch(`/workflows/${workflowId}/execute/from-node/${startNodeId}`, {
				method: 'POST',
			});

			if (response.execution) {
				const execResult = JSON.parse(response.execution.executionResult || '{}');
				// Sync variable store with latest node outputs
				variableStore.ingestExecutionResult(execResult);
				nodes = nodes.map((n) => {
					const nodeRes = execResult[n.id];
					return {
						...n,
						data: {
							...n.data,
							status: nodeRes ? (nodeRes.success ? 'success' : 'failed') : undefined,
							error:
								nodeRes?.error ||
								(response.execution.error && n.id === response.execution.errorNodeId
									? response.execution.error
									: undefined),
							execution: nodeRes,
						},
					};
				});

				if (onComplete) {
					onComplete(response.execution);
				}
			}
		} catch (e: any) {
			console.error('Partial execution failed:', e);
		} finally {
			isExecuting = false;
		}
	}

	return {
		get workflowId() {
			return workflowId;
		},
		get nodes() {
			return nodes;
		},
		set nodes(value) {
			nodes = value;
		},
		get edges() {
			return edges;
		},
		set edges(value) {
			edges = value;
		},
		get isActive() {
			return isActive;
		},
		set isActive(value) {
			isActive = value;
		},
		get isLoading() {
			return isLoading;
		},
		get isSaving() {
			return isSaving;
		},
		get isDeploying() {
			return isDeploying;
		},
		get isExecuting() {
			return isExecuting;
		},
		/** Access the companion variable store for $vars and node output previews */
		get variableStore() {
			return variableStore;
		},
		load,
		save,
		autosaveDebounced,
		toggleDeploy,
		execute,
		executeFromNode,
	};
}
