import { apiFetch } from '$lib/api/client';

export function useHistory(workflowId: string, wfState: any) {
	let isHistoryOpen = $state(false);
	let isLoadingHistory = $state(false);
	let historyList = $state<any[]>([]);
	let isViewingExecution = $state(false);
	let selectedExecution = $state<any>(null);
	let nodesBeforeExecutionView = $state<any[]>([]);

	async function toggle() {
		isHistoryOpen = !isHistoryOpen;
		if (isHistoryOpen) {
			isLoadingHistory = true;
			try {
				historyList = await apiFetch(`/executions?workflowId=${workflowId}`);
			} catch (err) {
				console.error('Failed to load execution history:', err);
			} finally {
				isLoadingHistory = false;
			}
		}
	}

	function close() {
		isHistoryOpen = false;
	}

	function viewExecution(exec: any, onSelectNode?: (nodeId: string) => void) {
		if (!isViewingExecution) {
			nodesBeforeExecutionView = JSON.parse(JSON.stringify(wfState.nodes));
		}

		isViewingExecution = true;
		selectedExecution = exec;
		isHistoryOpen = false;

		const execResult = JSON.parse(exec.executionResult || '{}');
		wfState.nodes = wfState.nodes.map((n: any) => {
			const nodeRes = execResult[n.id];
			return {
				...n,
				data: {
					...n.data,
					status: nodeRes ? (nodeRes.success ? 'success' : 'failed') : undefined,
					error:
						nodeRes?.error ||
						(exec.error && exec.error.includes(n.data.label) ? exec.error : undefined),
					execution: nodeRes,
				},
			};
		});

		if (onSelectNode) {
			const failedNode = wfState.nodes.find((n: any) => n.data.status === 'failed');
			if (failedNode) {
				onSelectNode(failedNode.id);
			}
		}
	}

	function exitExecutionView(selectedNodeId: string | null, onSelectNode: (node: any) => void) {
		isViewingExecution = false;
		selectedExecution = null;
		wfState.nodes = JSON.parse(JSON.stringify(nodesBeforeExecutionView));

		if (selectedNodeId) {
			const updatedNode = wfState.nodes.find((n: any) => n.id === selectedNodeId);
			onSelectNode(updatedNode || null);
		}
	}

	return {
		get isHistoryOpen() {
			return isHistoryOpen;
		},
		set isHistoryOpen(value) {
			isHistoryOpen = value;
		},
		get isLoadingHistory() {
			return isLoadingHistory;
		},
		get historyList() {
			return historyList;
		},
		get isViewingExecution() {
			return isViewingExecution;
		},
		get selectedExecution() {
			return selectedExecution;
		},
		toggle,
		close,
		viewExecution,
		exitExecutionView,
	};
}
