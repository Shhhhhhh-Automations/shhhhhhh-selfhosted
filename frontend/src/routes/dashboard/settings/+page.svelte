<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import { toast } from '$lib/components/ui/useToast.svelte';

	let email = $state('admin@shhhhhhh.it');
	let name = $state('Admin User');
	let currentPassword = $state('');
	let newPassword = $state('');

	function handleSave() {
		toast.add({ title: 'Saved', description: 'Your profile settings have been updated.', type: 'success' });
	}

	function handlePasswordChange() {
		if (!currentPassword || !newPassword) {
			toast.add({ title: 'Error', description: 'Please fill both password fields.', type: 'error' });
			return;
		}
		toast.add({ title: 'Security Updated', description: 'Your password has been changed.', type: 'success' });
		currentPassword = '';
		newPassword = '';
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
					<a href="/dashboard/credentials" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Credentials</a>
					<a href="/dashboard/executions" class="hover:text-gray-900 transition-colors py-5 border-b-2 border-transparent hover:border-gray-300">Executions</a>
					<a href="/dashboard/settings" class="text-blue-600 border-b-2 border-blue-600 pb-5 pt-5">Settings</a>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Button variant="outline" size="sm" onclick={handleLogout}>Logout</Button>
				<div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-xs shadow-sm cursor-pointer ring-2 ring-white hover:ring-blue-100 transition-all">ME</div>
			</div>
		</div>
	</nav>

	<div class="max-w-[1000px] mx-auto px-6 py-12">
		<header class="mb-10">
			<h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Settings</h1>
			<p class="text-gray-500 text-sm mt-1">Manage your account and platform preferences.</p>
		</header>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="md:col-span-1">
				<h2 class="text-sm font-bold text-gray-900">Profile Information</h2>
				<p class="text-xs text-gray-500 mt-1">Update your account's profile information and email address.</p>
			</div>
			<div class="md:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4">
				<div class="space-y-1.5">
					<label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Name</label>
					<Input bind:value={name} placeholder="Your Name" />
				</div>
				<div class="space-y-1.5">
					<label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Email</label>
					<Input type="email" bind:value={email} placeholder="you@example.com" />
				</div>
				<div class="pt-2 flex justify-end">
					<Button variant="aurora" onclick={handleSave}>Save Changes</Button>
				</div>
			</div>

			<div class="md:col-span-1 mt-6 md:mt-0">
				<h2 class="text-sm font-bold text-gray-900">Security</h2>
				<p class="text-xs text-gray-500 mt-1">Ensure your account is using a long, random password to stay secure.</p>
			</div>
			<div class="md:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4 mt-6 md:mt-0">
				<div class="space-y-1.5">
					<label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Current Password</label>
					<Input type="password" bind:value={currentPassword} />
				</div>
				<div class="space-y-1.5">
					<label class="text-xs font-bold text-gray-700 uppercase tracking-wider">New Password</label>
					<Input type="password" bind:value={newPassword} />
				</div>
				<div class="pt-2 flex justify-end">
					<Button variant="default" onclick={handlePasswordChange}>Update Password</Button>
				</div>
			</div>
		</div>
	</div>
</div>
