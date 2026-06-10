<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { apiFetch } from '$lib/api/client';
	import { themeStore } from '$lib/stores/theme.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let { children } = $props();
	let isAuthenticated = $state(false);
	let isChecking = $state(true);
	let isProfileOpen = $state(false);

	onMount(async () => {
		themeStore.init();
		try {
			await apiFetch('/auth/me');
			isAuthenticated = true;
		} catch (e) {
			goto('/login');
		} finally {
			isChecking = false;
		}
	});

	async function handleLogout() {
		await apiFetch('/auth/logout', { method: 'POST' });
		goto('/login');
	}
	
	// If the route has an ID parameter and is specifically the workflow detail page,
	// we shouldn't constrain it inside the max-width layout wrapper.
	let isCanvasRoute = $derived(!!$page.params.id && $page.route.id === '/dashboard/[id]');
</script>

{#if isChecking}
	<div class="min-h-screen bg-white dark:bg-background flex items-center justify-center">
		<div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
	</div>
{:else if isAuthenticated}
	<div class="min-h-screen bg-gray-50 dark:bg-background text-gray-900 dark:text-gray-100 w-full absolute inset-0 z-10 font-sans transition-colors duration-200 {isCanvasRoute ? 'overflow-hidden' : 'overflow-y-auto'}">
		
		{#if !isCanvasRoute}
			<nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-colors duration-200">
				<div class="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
					<div class="flex items-center gap-8">
						<div class="flex items-center gap-2">
							<div class="w-8 h-8 rounded-lg bg-blue-600 dark:bg-primary flex items-center justify-center text-white shadow-sm">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
							</div>
							<span class="font-bold text-gray-900 dark:text-white text-lg tracking-tight">shhhhhhh</span>
						</div>
						<div class="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-500 dark:text-gray-400">
							<a href="/dashboard" class="{$page.url.pathname === '/dashboard' ? 'text-blue-600 dark:text-primary border-b-2 border-blue-600 dark:border-primary' : 'hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700'} transition-colors py-5">Workflows</a>
							<a href="/dashboard/credentials" class="{$page.url.pathname.includes('/credentials') ? 'text-blue-600 dark:text-primary border-b-2 border-blue-600 dark:border-primary' : 'hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700'} transition-colors py-5">Credentials</a>
							<a href="/dashboard/executions" class="{$page.url.pathname.includes('/executions') ? 'text-blue-600 dark:text-primary border-b-2 border-blue-600 dark:border-primary' : 'hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700'} transition-colors py-5">Executions</a>
						</div>
					</div>
					<div class="flex items-center gap-4 relative">
						<button class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-xs shadow-sm cursor-pointer ring-2 ring-white dark:ring-gray-900 hover:ring-blue-100 transition-all focus:outline-none" onclick={() => isProfileOpen = !isProfileOpen}>
							ME
						</button>

						{#if isProfileOpen}
							<div class="absolute right-0 top-12 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
								<a href="/dashboard/settings" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50" onclick={() => isProfileOpen = false}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0 -2 2v.18a2 2 0 0 1 -1 1.73l-.43.25a2 2 0 0 1 -2 0l-.15-.08a2 2 0 0 0 -2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1 -1 1.74l-.15.09a2 2 0 0 0 -.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2 -2v-.18a2 2 0 0 1 1 -1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0 -.73 -2.73l-.15-.08a2 2 0 0 1 -1 -1.74v-.5a2 2 0 0 1 1 -1.74l.15-.09a2 2 0 0 0 .73 -2.73l-.22-.38a2 2 0 0 0 -2.73-.73l-.15.08a2 2 0 0 1 -2 0l-.43-.25a2 2 0 0 1 -1 -1.73V4a2 2 0 0 0 -2 -2z" /><circle cx="12" cy="12" r="3" /></svg>
									Settings
								</a>
								<div class="h-px bg-gray-100 dark:bg-gray-700 my-1"></div>
								<button class="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 text-left" onclick={handleLogout}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
									Logout
								</button>
							</div>
						{/if}
					</div>
				</div>
			</nav>

			<main class="max-w-[1400px] mx-auto px-6 py-12">
				{@render children()}
			</main>
		{:else}
			<!-- Full screen layout for Canvas without constraints -->
			<div class="w-full h-full">
				{@render children()}
			</div>
		{/if}
	</div>
{/if}
