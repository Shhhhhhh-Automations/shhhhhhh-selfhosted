<script lang="ts">
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import { apiFetch } from '$lib/api/client';

let { children } = $props();
let isAuthenticated = $state(false);
let isChecking = $state(true);

onMount(async () => {
	try {
		await apiFetch('/auth/me');
		isAuthenticated = true;
	} catch (e) {
		// Unauthorized
		goto('/login');
	} finally {
		isChecking = false;
	}
});
</script>

{#if isChecking}
	<div class="min-h-screen bg-gray-50 flex items-center justify-center">
		<div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
	</div>
{:else if isAuthenticated}
	{@render children()}
{/if}
