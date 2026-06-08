<script lang="ts">
	import { goto } from '$app/navigation';
	import { apiFetch } from '$lib/api/client';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';

	let email = $state('');
	let password = $state('');
	let loading = $state(false);
	let error = $state('');

	async function handleLogin() {
		loading = true;
		error = '';
		try {
			await apiFetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
			});
			// Success, go to dashboard
			goto('/dashboard');
		} catch (e: any) {
			error = e.message || 'Invalid credentials';
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex items-center justify-center min-h-screen px-4 py-12 bg-white text-gray-900 font-sans relative overflow-hidden">
	<!-- Subtle Background -->
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(#d1d5db 1px, transparent 1px); background-size: 20px 20px;"></div>
	
	<!-- Glow -->
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 filter blur-[100px]" style="background: radial-gradient(circle, rgba(59,130,246,0.8), transparent 70%);"></div>

	<div class="max-w-md w-full bg-white border border-gray-200 p-10 rounded-3xl shadow-xl relative z-10">
		<div class="text-center space-y-2 mb-8">
			<div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mx-auto mb-6 shadow-sm">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
			</div>
			<h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Welcome Back</h1>
			<p class="text-gray-500 text-sm">Enter your credentials to access your instance.</p>
		</div>

		<form class="space-y-5" onsubmit={(e) => { e.preventDefault(); handleLogin(); }}>
			<div class="space-y-1.5">
				<label for="email" class="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email</label>
				<Input id="email" type="email" bind:value={email} placeholder="admin@shhhhhhh.it" required />
			</div>

			<div class="space-y-1.5">
				<label for="password" class="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Password</label>
				<Input id="password" type="password" bind:value={password} required />
			</div>

			{#if error}
				<div class="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200 flex gap-2 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
					{error}
				</div>
			{/if}

			<div class="pt-4">
				<Button type="submit" variant="aurora" class="w-full" disabled={loading}>
					{loading ? 'Authenticating...' : 'Sign In'}
				</Button>
			</div>
		</form>
	</div>
</div>
