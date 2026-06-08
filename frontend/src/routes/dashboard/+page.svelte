<script lang="ts">
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import { apiFetch } from '$lib/api/client';
import Button from '$lib/components/ui/Button.svelte';
import { toast } from '$lib/components/ui/useToast.svelte';

let workflows = $state<any[]>([]);
let isLoading = $state(true);
let isCreating = $state(false);

onMount(async () => {
	try {
		workflows = await apiFetch('/workflows');
	} catch (e) {
		console.error('Failed to load workflows', e);
		toast.add({ title: 'Error', description: 'Failed to load workflows', type: 'error' });
	} finally {
		isLoading = false;
	}
});

async function createWorkflow() {
	isCreating = true;
	try {
		const newWf = await apiFetch('/workflows', { method: 'POST' });
		toast.add({ title: 'Success', description: 'Workflow created successfully', type: 'success' });
		goto(`/dashboard/${newWf.id}`);
	} catch (e) {
		console.error('Failed to create workflow', e);
		toast.add({ title: 'Error', description: 'Could not create workflow', type: 'error' });
		isCreating = false;
	}
}

function openWorkflow(id: string) {
	goto(`/dashboard/${id}`);
}

async function handleLogout() {
	await apiFetch('/auth/logout', { method: 'POST' });
	goto('/login');
}
</script>

<!-- The wrapping div gives us the light theme, overriding the dark +layout.svelte -->
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
					<a href="/dashboard" class="text-blue-600 border-b-2 border-blue-600 pb-5 pt-5">Workflows</a>
					<a href="/dashboard/credentials" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Credentials</a>
					<a href="/dashboard/executions" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Executions</a>
					<a href="/dashboard/settings" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Settings</a>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Button variant="outline" size="sm" onclick={handleLogout}>Logout</Button>
				<div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-xs shadow-sm cursor-pointer ring-2 ring-white hover:ring-blue-100 transition-all">
					ME
				</div>
			</div>
		</div>
	</nav>

	<div class="max-w-[1400px] mx-auto px-6 py-12">
		<header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
			<div>
				<h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Workflows</h1>
				<p class="text-gray-500 text-sm mt-1">Manage and orchestrate your automations.</p>
			</div>
			
			<div class="flex items-center gap-4">
				<div class="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
					<div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
					<span class="text-[11px] font-bold tracking-wider uppercase text-gray-600">Operational</span>
				</div>
				<Button variant="aurora" onclick={createWorkflow} disabled={isCreating}>
					{isCreating ? 'Creating...' : '+ New Workflow'}
				</Button>
			</div>
		</header>

		{#if isLoading}
			<div class="flex items-center justify-center min-h-[400px]">
				<div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
			</div>
		{:else if workflows.length === 0}
			<!-- Empty State -->
			<div class="relative bg-white border border-gray-200 rounded-3xl p-12 md:p-20 flex flex-col items-center justify-center text-center overflow-hidden min-h-[400px] shadow-sm">
				<div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
				
				<div class="relative z-10 space-y-6 max-w-md">
					<div class="w-20 h-20 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto text-blue-600 shadow-sm">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12a8 8 0 0 1 16 0z" /><path d="M12 12v6a2 2 0 0 0 4 0v-6m-4 0v-6a2 2 0 0 0 -4 0v6" /></svg>
					</div>
					<h2 class="text-2xl font-bold tracking-tight text-gray-900">
						No workflows yet
					</h2>
					<p class="text-gray-500 text-sm leading-relaxed">
						Create your first workflow to start automating your tasks quietly and efficiently.
					</p>
					<Button variant="aurora" size="lg" onclick={createWorkflow} disabled={isCreating} class="mt-4">
						{isCreating ? 'Creating...' : 'Create Workflow'}
					</Button>
				</div>
			</div>
		{:else}
			<!-- Grid of Workflows -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each workflows as wf}
					<button 
						onclick={() => openWorkflow(wf.id)}
						class="text-left group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						<div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<div class="relative z-10">
							<div class="flex items-center justify-between mb-4">
								<div class="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-blue-600 transition-colors shadow-sm">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12a8 8 0 0 1 16 0z" /><path d="M12 12v6a2 2 0 0 0 4 0v-6m-4 0v-6a2 2 0 0 0 -4 0v6" /></svg>
								</div>
								{#if wf.isActive}
									<span class="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold uppercase tracking-wider">Active</span>
								{:else}
									<span class="px-2.5 py-0.5 bg-gray-100 text-gray-600 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-wider">Draft</span>
								{/if}
							</div>
							<h3 class="text-base font-bold text-gray-900 mb-1 truncate">{wf.name}</h3>
							<p class="text-[11px] text-gray-500 mb-4 font-medium">Updated {new Date(wf.updatedAt).toLocaleDateString()}</p>
							
							<div class="flex items-center gap-2 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0">
								Open Canvas
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
							</div>
						</div>
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>
