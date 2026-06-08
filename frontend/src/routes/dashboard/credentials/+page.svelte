<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { toast } from '$lib/components/ui/useToast.svelte';

	let isAdding = $state(false);
	let newCredName = $state('');
	let newCredType = $state('openai');
	let newCredKey = $state('');

	// Mock credentials for now
	let credentials = $state([
		{ id: '1', name: 'My OpenAI Key', type: 'OpenAI', updated: '2026-06-08' },
		{ id: '2', name: 'Supabase DB', type: 'Postgres', updated: '2026-06-05' }
	]);

	function handleAdd() {
		if (!newCredName || !newCredKey) {
			toast.add({ title: 'Error', description: 'Please fill all fields', type: 'error' });
			return;
		}
		
		credentials = [...credentials, {
			id: Math.random().toString(),
			name: newCredName,
			type: newCredType,
			updated: new Date().toISOString().split('T')[0]
		}];
		
		toast.add({ title: 'Success', description: 'Credential added successfully', type: 'success' });
		isAdding = false;
		newCredName = '';
		newCredKey = '';
	}

	function deleteCred(id: string) {
		credentials = credentials.filter(c => c.id !== id);
		toast.add({ title: 'Removed', description: 'Credential deleted', type: 'default' });
	}

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
					<a href="/dashboard/credentials" class="text-blue-600 border-b-2 border-blue-600 pb-5 pt-5">Credentials</a>
					<a href="/dashboard/executions" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Executions</a>
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
				<h1 class="text-3xl font-extrabold tracking-tight text-gray-900">App Connections</h1>
				<p class="text-gray-500 text-sm mt-1">Manage API keys and OAuth connections for your tools.</p>
			</div>
			<Button variant="aurora" onclick={() => isAdding = true}>+ New Credential</Button>
		</header>

		<div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
			<div class="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
				<div class="col-span-5">Name</div>
				<div class="col-span-3">Type</div>
				<div class="col-span-3">Last Updated</div>
				<div class="col-span-1 text-right">Actions</div>
			</div>
			
			{#each credentials as cred}
				<div class="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors last:border-0">
					<div class="col-span-5 font-bold text-sm text-gray-900 flex items-center gap-3">
						<div class="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -3 -3z" /><path d="M15 7v-4h4v4h-4z" /></svg>
						</div>
						{cred.name}
					</div>
					<div class="col-span-3 text-sm text-gray-600 font-medium">
						<span class="px-2 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs">{cred.type}</span>
					</div>
					<div class="col-span-3 text-sm text-gray-500">{cred.updated}</div>
					<div class="col-span-1 text-right">
						<button class="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" onclick={() => deleteCred(cred.id)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
						</button>
					</div>
				</div>
			{/each}

			{#if credentials.length === 0}
				<div class="p-12 text-center text-gray-500">
					No credentials added yet.
				</div>
			{/if}
		</div>
	</div>
</div>

<Modal 
	bind:open={isAdding} 
	onclose={() => isAdding = false}
	title="Add Credential"
	description="Connect a new service to your automations."
>
	<div class="space-y-4 py-2">
		<div class="space-y-1.5">
			<label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Service Type</label>
			<select bind:value={newCredType} class="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20">
				<option value="OpenAI">OpenAI API</option>
				<option value="Postgres">PostgreSQL</option>
				<option value="GitHub">GitHub Personal Token</option>
				<option value="Generic">Generic Webhook / API Key</option>
			</select>
		</div>
		
		<div class="space-y-1.5">
			<label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Credential Name</label>
			<Input bind:value={newCredName} placeholder="e.g. Prod Database" />
		</div>

		<div class="space-y-1.5">
			<label class="text-xs font-bold text-gray-700 uppercase tracking-wider">API Key / Token</label>
			<Input type="password" bind:value={newCredKey} placeholder="sk-..." />
		</div>
	</div>

	{#snippet footer()}
		<Button variant="ghost" onclick={() => isAdding = false}>Cancel</Button>
		<Button variant="aurora" onclick={handleAdd}>Save Credential</Button>
	{/snippet}
</Modal>
