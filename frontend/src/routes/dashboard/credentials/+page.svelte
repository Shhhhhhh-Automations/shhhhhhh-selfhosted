<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { toast } from '$lib/components/ui/useToast.svelte';

	import { onMount } from 'svelte';
	import { apiFetch } from '$lib/api/client';

	let isAdding = $state(false);
	let isSubmitting = $state(false);
	let isLoading = $state(true);
	let newCredName = $state('');
	let newCredType = $state('OpenAI');
	let newCredKey = $state('');

	let credentials = $state<any[]>([]);

	async function loadCredentials() {
		try {
			credentials = await apiFetch('/credentials');
		} catch (error) {
			console.error('Failed to load credentials:', error);
			toast.add({ title: 'Error', description: 'Could not load credentials', type: 'error' });
		} finally {
			isLoading = false;
		}
	}

	onMount(() => {
		loadCredentials();
	});

	async function handleAdd() {
		if (!newCredName || !newCredKey) {
			toast.add({ title: 'Error', description: 'Please fill all fields', type: 'error' });
			return;
		}
		
		isSubmitting = true;
		try {
			await apiFetch('/credentials', {
				method: 'POST',
				body: JSON.stringify({
					name: newCredName,
					type: newCredType,
					value: newCredKey
				})
			});
			
			toast.add({ title: 'Success', description: 'Credential added securely', type: 'success' });
			isAdding = false;
			newCredName = '';
			newCredKey = '';
			await loadCredentials();
		} catch (error) {
			toast.add({ title: 'Error', description: 'Could not add credential', type: 'error' });
		} finally {
			isSubmitting = false;
		}
	}

	async function deleteCred(id: string) {
		try {
			await apiFetch(`/credentials/${id}`, { method: 'DELETE' });
			credentials = credentials.filter(c => c.id !== id);
			toast.add({ title: 'Removed', description: 'Credential deleted', type: 'default' });
		} catch (error) {
			toast.add({ title: 'Error', description: 'Could not delete credential', type: 'error' });
		}
	}
</script>

<header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
	<div>
		<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">App Connections</h1>
		<p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage API keys and OAuth connections for your tools.</p>
	</div>
	<Button variant="aurora" onclick={() => isAdding = true}>+ New Credential</Button>
</header>

<div class="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden backdrop-blur-md">
	<div class="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
		<div class="col-span-5">Name</div>
		<div class="col-span-3">Type</div>
		<div class="col-span-3">Last Updated</div>
		<div class="col-span-1 text-right">Actions</div>
	</div>
	
	{#if isLoading}
		<div class="p-12 flex justify-center">
			<div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
		</div>
	{:else}
		{#each credentials as cred}
			<div class="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 dark:border-gray-800 items-center hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors last:border-0">
				<div class="col-span-5 font-bold text-sm text-gray-900 dark:text-gray-100 flex flex-col justify-center">
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 flex-shrink-0">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -3 -3z" /><path d="M15 7v-4h4v4h-4z" /></svg>
						</div>
						<div>
							{cred.name}
							<div class="text-[10px] text-gray-400 dark:text-gray-500 font-mono mt-0.5">{cred.preview}</div>
						</div>
					</div>
				</div>
				<div class="col-span-3 text-sm text-gray-600 dark:text-gray-300 font-medium flex items-center">
					<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-md text-xs">{cred.type}</span>
				</div>
				<div class="col-span-3 text-sm text-gray-500 dark:text-gray-400 flex items-center">{new Date(cred.createdAt).toLocaleDateString()}</div>
				<div class="col-span-1 text-right flex items-center justify-end">
					<button class="p-1.5 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" onclick={() => deleteCred(cred.id)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
					</button>
				</div>
			</div>
		{/each}

		{#if credentials.length === 0}
			<div class="p-12 text-center text-gray-500 dark:text-gray-400">
				No credentials added yet.
			</div>
		{/if}
	{/if}
</div>

<Modal 
	bind:open={isAdding} 
	onclose={() => isAdding = false}
	title="Add Credential"
	description="Connect a new service to your automations."
>
	<div class="space-y-4 py-2">
		<div class="space-y-1.5">
			<label class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Service Type</label>
			<select bind:value={newCredType} class="flex h-9 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20">
				<option value="OpenAI">OpenAI API</option>
				<option value="Postgres">PostgreSQL</option>
				<option value="GitHub">GitHub Personal Token</option>
				<option value="Generic">Generic Webhook / API Key</option>
			</select>
		</div>
		
		<div class="space-y-1.5">
			<label class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Credential Name</label>
			<Input bind:value={newCredName} placeholder="e.g. Prod Database" />
		</div>

		<div class="space-y-1.5">
			<label class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">API Key / Token</label>
			<Input type="password" bind:value={newCredKey} placeholder="sk-..." />
		</div>
	</div>

	{#snippet footer()}
		<Button variant="ghost" onclick={() => isAdding = false} disabled={isSubmitting}>Cancel</Button>
		<Button variant="aurora" onclick={handleAdd} disabled={isSubmitting}>
			{isSubmitting ? 'Saving...' : 'Save Credential'}
		</Button>
	{/snippet}
</Modal>
