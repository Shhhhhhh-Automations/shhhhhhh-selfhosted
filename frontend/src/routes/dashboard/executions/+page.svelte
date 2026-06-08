<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';

	// Mock executions for now
	let executions = $state([
		{ id: 'ex-1234', workflow: 'Daily Sync', status: 'Success', time: '2026-06-08 10:00:00', duration: '2.3s' },
		{ id: 'ex-1235', workflow: 'Process Order #492', status: 'Failed', time: '2026-06-08 11:15:22', duration: '1.1s' },
		{ id: 'ex-1236', workflow: 'Daily Sync', status: 'Success', time: '2026-06-07 10:00:00', duration: '2.5s' }
	]);

	async function handleLogout() {
		await import('$lib/api/client').then(m => m.apiFetch('/auth/logout', { method: 'POST' }));
		goto('/login');
	}
</script>

<div class="min-h-screen bg-gray-50 text-gray-900 w-full absolute inset-0 z-10 overflow-y-auto font-sans">
	<!-- Top Navigation -->
	<nav class="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
		<div class="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
					</div>
					<span class="font-bold text-gray-900 text-lg tracking-tight">shhhhhhh</span>
				</div>
				<div class="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-500">
					<a href="/dashboard" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Workflows</a>
					<a href="/dashboard/credentials" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Credentials</a>
					<a href="/dashboard/executions" class="text-blue-600 border-b-2 border-blue-600 pb-5 pt-5">Executions</a>
					<a href="/dashboard/settings" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Settings</a>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Button variant="outline" size="sm" onclick={handleLogout}>Logout</Button>
				<div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-xs shadow-sm cursor-pointer ring-2 ring-white hover:ring-blue-100 transition-all">ME</div>
			</div>
		</div>
	</nav>

	<div class="max-w-[1400px] mx-auto px-6 py-12">
		<header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
			<div>
				<h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Execution History</h1>
				<p class="text-gray-500 text-sm mt-1">Review the logs and runs of your automations.</p>
			</div>
		</header>

		<div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
			<div class="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
				<div class="col-span-2">Execution ID</div>
				<div class="col-span-4">Workflow</div>
				<div class="col-span-2">Status</div>
				<div class="col-span-3">Date / Time</div>
				<div class="col-span-1 text-right">Duration</div>
			</div>
			
			{#each executions as ex}
				<button class="w-full text-left grid grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors last:border-0 focus:outline-none focus:bg-blue-50 cursor-pointer">
					<div class="col-span-2 font-mono text-xs text-gray-500">{ex.id}</div>
					<div class="col-span-4 font-bold text-sm text-gray-900">{ex.workflow}</div>
					<div class="col-span-2">
						{#if ex.status === 'Success'}
							<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
								<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
								Success
							</span>
						{:else}
							<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-[11px] font-bold">
								<span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
								Failed
							</span>
						{/if}
					</div>
					<div class="col-span-3 text-sm text-gray-500">{ex.time}</div>
					<div class="col-span-1 text-right text-sm text-gray-500 font-mono">{ex.duration}</div>
				</button>
			{/each}

			{#if executions.length === 0}
				<div class="p-12 text-center text-gray-500">
					No executions recorded yet.
				</div>
			{/if}
		</div>
	</div>
</div>
