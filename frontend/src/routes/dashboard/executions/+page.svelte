<script lang="ts">
	import { onMount } from 'svelte';
	import { apiFetch } from '$lib/api/client';
	import { toast } from '$lib/components/ui/useToast.svelte';

	let executions = $state<any[]>([]);
	let isLoading = $state(true);

	onMount(async () => {
		try {
			executions = await apiFetch('/executions');
		} catch (error) {
			console.error('Failed to fetch executions:', error);
			toast.add({ title: 'Error', description: 'Could not load execution history', type: 'error' });
		} finally {
			isLoading = false;
		}
	});
</script>

<header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
	<div>
		<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Execution History</h1>
		<p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Review the logs and runs of your automations.</p>
	</div>
</header>

<div class="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden backdrop-blur-md">
	<div class="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
		<div class="col-span-2">Execution ID</div>
		<div class="col-span-4">Workflow</div>
		<div class="col-span-2">Status</div>
		<div class="col-span-3">Date / Time</div>
		<div class="col-span-1 text-right">Duration</div>
	</div>
	
	{#if isLoading}
		<div class="p-12 flex justify-center">
			<div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
		</div>
	{:else}
		{#each executions as ex}
			<button class="w-full text-left grid grid-cols-12 gap-4 p-4 border-b border-gray-100 dark:border-gray-800 items-center hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors last:border-0 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/20 cursor-pointer">
				<div class="col-span-2 font-mono text-xs text-gray-500 dark:text-gray-400">{ex.id.substring(0, 8)}...</div>
				<div class="col-span-4 font-bold text-sm text-gray-900 dark:text-gray-100">{ex.workflowName || 'Unknown Workflow'}</div>
				<div class="col-span-2">
					{#if ex.status === 'success'}
						<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-[11px] font-bold">
							<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
							Success
						</span>
					{:else if ex.status === 'failed'}
						<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/20 text-[11px] font-bold">
							<span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
							Failed
						</span>
					{:else}
						<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 text-[11px] font-bold">
							<span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
							{ex.status}
						</span>
					{/if}
				</div>
				<div class="col-span-3 text-sm text-gray-500 dark:text-gray-400">{new Date(ex.startedAt).toLocaleString()}</div>
				<div class="col-span-1 text-right text-sm text-gray-500 dark:text-gray-400 font-mono">
					{#if ex.finishedAt}
						{((new Date(ex.finishedAt).getTime() - new Date(ex.startedAt).getTime()) / 1000).toFixed(1)}s
					{:else}
						-
					{/if}
				</div>
			</button>
		{/each}

		{#if executions.length === 0}
			<div class="p-12 text-center text-gray-500 dark:text-gray-400">
				No executions recorded yet.
			</div>
		{/if}
	{/if}
</div>
