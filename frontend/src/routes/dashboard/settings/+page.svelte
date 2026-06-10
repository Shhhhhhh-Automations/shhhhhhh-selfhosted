<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import { toast } from '$lib/components/ui/useToast.svelte';
	import { themeStore } from '$lib/stores/theme.svelte';
	import type { ThemeMode } from '$lib/stores/theme.svelte';
	import { apiFetch } from '$lib/api/client';

	let email = $state('');
	let name = $state('');
	let currentPassword = $state('');
	let newPassword = $state('');
	let isLoading = $state(true);

	let activeTab = $state<'profile' | 'appearance' | 'sessions'>('profile');

	type Session = { id: string; device: string; location: string; current: boolean; lastActive: string };
	let sessions = $state<Session[]>([]);

	onMount(async () => {
		try {
			// Fetch profile
			const profileData = await apiFetch('/auth/me');
			email = profileData.user.email;
			name = profileData.user.name;

			// Fetch sessions
			sessions = await apiFetch('/auth/sessions');
		} catch (error) {
			console.error('Failed to load settings data:', error);
		} finally {
			isLoading = false;
		}
	});

	async function handleSave() {
		try {
			await apiFetch('/auth/profile', {
				method: 'PUT',
				body: JSON.stringify({ name, email })
			});
			toast.add({ title: 'Saved', description: 'Your profile settings have been updated.', type: 'success' });
		} catch (e: any) {
			toast.add({ title: 'Error', description: e.message || 'Failed to update profile.', type: 'error' });
		}
	}

	async function handlePasswordChange() {
		if (!currentPassword || !newPassword) {
			toast.add({ title: 'Error', description: 'Please fill both password fields.', type: 'error' });
			return;
		}
		try {
			await apiFetch('/auth/password', {
				method: 'PUT',
				body: JSON.stringify({ currentPassword, newPassword })
			});
			toast.add({ title: 'Security Updated', description: 'Your password has been changed.', type: 'success' });
			currentPassword = '';
			newPassword = '';
		} catch (e: any) {
			toast.add({ title: 'Error', description: e.message || 'Failed to update password.', type: 'error' });
		}
	}

	function setTheme(mode: ThemeMode) {
		themeStore.setMode(mode);
	}

	async function revokeSession(id: string) {
		try {
			await apiFetch(`/auth/sessions/${id}`, { method: 'DELETE' });
			sessions = sessions.filter(s => s.id !== id);
			toast.add({ title: 'Session Revoked', description: 'The device has been logged out.', type: 'default' });
		} catch (error: any) {
			toast.add({ title: 'Error', description: error.message || 'Failed to revoke session.', type: 'error' });
		}
	}
</script>

<header class="mb-12">
	<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Settings</h1>
	<p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage your account and platform preferences.</p>
</header>

<div class="flex flex-col md:flex-row gap-10">
	<!-- Sidebar Tabs -->
	<div class="w-full md:w-64 flex-shrink-0 flex flex-col gap-2">
		<button 
			class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors focus:outline-none {activeTab === 'profile' ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-primary shadow-sm border border-gray-100 dark:border-gray-700' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white border border-transparent'}"
			onclick={() => activeTab = 'profile'}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0 -4 -4H9a4 4 0 0 0 -4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
			Profile & Security
		</button>
		<button 
			class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors focus:outline-none {activeTab === 'appearance' ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-primary shadow-sm border border-gray-100 dark:border-gray-700' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white border border-transparent'}"
			onclick={() => activeTab = 'appearance'}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
			Appearance
		</button>
		<button 
			class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors focus:outline-none {activeTab === 'sessions' ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-primary shadow-sm border border-gray-100 dark:border-gray-700' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white border border-transparent'}"
			onclick={() => activeTab = 'sessions'}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
			Active Sessions
		</button>
	</div>

	<!-- Main Content Area -->
	<div class="flex-1 max-w-3xl">
		{#if activeTab === 'profile'}
			<div class="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
				<div>
					<h2 class="text-xl font-bold text-gray-900 dark:text-white">Profile Information</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Update your account's profile information and email address.</p>
				</div>
				<div class="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 space-y-5 backdrop-blur-md">
					<div class="space-y-1.5">
						<label class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Name</label>
						<Input bind:value={name} placeholder="Your Name" />
					</div>
					<div class="space-y-1.5">
						<label class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Email</label>
						<Input type="email" bind:value={email} placeholder="you@example.com" />
					</div>
					<div class="pt-2 flex justify-end">
						<Button variant="aurora" onclick={handleSave}>Save Changes</Button>
					</div>
				</div>

				<div class="pt-6">
					<h2 class="text-xl font-bold text-gray-900 dark:text-white">Security</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Ensure your account is using a long, random password to stay secure.</p>
				</div>
				<div class="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 space-y-5 backdrop-blur-md">
					<div class="space-y-1.5">
						<label class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Current Password</label>
						<Input type="password" bind:value={currentPassword} />
					</div>
					<div class="space-y-1.5">
						<label class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">New Password</label>
						<Input type="password" bind:value={newPassword} />
					</div>
					<div class="pt-2 flex justify-end">
						<Button variant="default" onclick={handlePasswordChange}>Update Password</Button>
					</div>
				</div>
			</div>
		{:else if activeTab === 'appearance'}
			<div class="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
				<div>
					<h2 class="text-xl font-bold text-gray-900 dark:text-white">Appearance</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Customize the platform's theme to your preference.</p>
				</div>
				<div class="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 space-y-6 backdrop-blur-md">
					<div class="space-y-4">
						<label class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Theme Mode</label>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
							<button 
								class="flex flex-col items-center gap-3 p-4 border-2 rounded-xl transition-all focus:outline-none {themeStore.mode === 'system' ? 'border-blue-500 dark:border-primary bg-blue-50/50 dark:bg-primary/10 text-blue-700 dark:text-primary' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400'}"
								onclick={() => setTheme('system')}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="12" x="4" y="4" rx="2"/><path d="M2 18h20"/><path d="M12 22v-4"/></svg>
								<span class="text-sm font-bold">System default</span>
							</button>
							<button 
								class="flex flex-col items-center gap-3 p-4 border-2 rounded-xl transition-all focus:outline-none {themeStore.mode === 'light' ? 'border-blue-500 dark:border-primary bg-blue-50/50 dark:bg-primary/10 text-blue-700 dark:text-primary' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400'}"
								onclick={() => setTheme('light')}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
								<span class="text-sm font-bold">Light mode</span>
							</button>
							<button 
								class="flex flex-col items-center gap-3 p-4 border-2 rounded-xl transition-all focus:outline-none {themeStore.mode === 'dark' ? 'border-blue-500 dark:border-primary bg-blue-50/50 dark:bg-primary/10 text-blue-700 dark:text-primary' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400'}"
								onclick={() => setTheme('dark')}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
								<span class="text-sm font-bold">Dark mode</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		{:else if activeTab === 'sessions'}
			<div class="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
				<div>
					<h2 class="text-xl font-bold text-gray-900 dark:text-white">Active Sessions</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Review the devices that are currently logged into your account.</p>
				</div>
				<div class="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden backdrop-blur-md">
					<div class="divide-y divide-gray-100 dark:divide-gray-800">
						{#each sessions as session}
							<div class="p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors">
								<div class="flex items-center gap-4">
									<div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
										{#if session.device.includes('MacBook')}
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="12" x="4" y="4" rx="2"/><path d="M2 18h20"/><path d="M12 22v-4"/></svg>
										{:else}
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
										{/if}
									</div>
									<div>
										<p class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
											{session.device}
											{#if session.current}
												<span class="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-wider font-bold">This device</span>
											{/if}
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{session.location} • Last active {new Date(session.lastActive).toLocaleDateString()}</p>
									</div>
								</div>
								{#if !session.current}
									<button 
										onclick={() => revokeSession(session.id)}
										class="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1.5 rounded-md transition-colors"
									>
										Revoke
									</button>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
