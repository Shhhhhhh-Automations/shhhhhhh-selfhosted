<script lang="ts">
import { goto } from '$app/navigation';
import { apiFetch } from '$lib/api/client';

let step = $state(1);
let platformName = $state('shhhhhhh.it');
let email = $state('');
let password = $state('');
let loading = $state(false);
let error = $state('');

async function handleSetup() {
	if (!email || !password || !platformName) {
		error = 'Please fill in all fields.';
		return;
	}

	loading = true;
	error = '';
	try {
		await apiFetch('/auth/setup', {
			method: 'POST',
			body: JSON.stringify({ platformName, email, password }),
		});
		step = 3;
	} catch (e: any) {
		error = e.message;
	} finally {
		loading = false;
	}
}
</script>

<div class="flex items-center justify-center min-h-[90vh] px-4 py-12 transition-colors duration-200">
  <div class="max-w-lg w-full bg-white/80 dark:bg-black/40 backdrop-blur-2xl border border-gray-200 dark:border-white/10 p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
    <!-- Subtle glow effect inside card -->
    <div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 dark:bg-primary/20 blur-[80px] pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 dark:bg-accent1/20 blur-[80px] pointer-events-none"></div>

    <div class="relative z-10">
      {#if step === 1}
        <div class="text-center space-y-6">
          <div class="w-20 h-20 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-gray-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M10 13l2 2l4 -4" /><path d="M12 9v4" /></svg>
          </div>
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Quietly powerful.</h1>
          <p class="text-gray-500 dark:text-white/50 text-lg font-light leading-relaxed">Let's get your automation engine ready. Create your Admin account to secure your instance.</p>
          <button 
            onclick={() => step = 2}
            class="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-sm"
          >
            Begin Setup
          </button>
        </div>
      {:else if step === 2}
        <div class="space-y-8">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create Admin</h2>
            <p class="text-gray-500 dark:text-white/40 font-light">Set up your credentials and instance name.</p>
          </div>
          
          <form class="space-y-6" onsubmit={(e) => { e.preventDefault(); handleSetup(); }}>
            <div class="space-y-3">
              <label for="platformName" class="block text-sm font-medium text-gray-700 dark:text-white/60 ml-1">Instance Name</label>
              <input 
                id="platformName"
                type="text" 
                bind:value={platformName}
                required
                class="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-3 text-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:border-blue-500 dark:focus:border-white/30 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-0 dark:focus:bg-white/10 outline-none transition-all duration-300 shadow-sm dark:shadow-none"
                placeholder="e.g. My Automation Lab"
              />
            </div>

            <div class="space-y-3">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white/60 ml-1">Admin Email</label>
              <input 
                id="email"
                type="email" 
                bind:value={email}
                required
                class="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-3 text-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:border-blue-500 dark:focus:border-white/30 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-0 dark:focus:bg-white/10 outline-none transition-all duration-300 shadow-sm dark:shadow-none"
                placeholder="admin@shhhhhhh.it"
              />
            </div>

            <div class="space-y-3">
              <label for="password" class="block text-sm font-medium text-gray-700 dark:text-white/60 ml-1">Admin Password</label>
              <input 
                id="password"
                type="password" 
                bind:value={password}
                required
                class="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-3 text-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:border-blue-500 dark:focus:border-white/30 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-0 dark:focus:bg-white/10 outline-none transition-all duration-300 shadow-sm dark:shadow-none"
                placeholder="••••••••"
              />
            </div>

            {#if error}
              <div class="text-red-600 dark:text-accent2 text-sm bg-red-50 dark:bg-accent2/10 p-4 rounded-2xl border border-red-200 dark:border-accent2/20 flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {error}
              </div>
            {/if}

            <div class="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                type="button"
                onclick={() => step = 1}
                class="flex-1 py-4 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-white rounded-full font-bold transition-all duration-300"
              >
                Back
              </button>
              <button 
                type="submit"
                disabled={loading}
                class="flex-[2] py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:scale-100 shadow-sm"
              >
                {loading ? 'Configuring...' : 'Complete Setup'}
              </button>
            </div>
          </form>
        </div>
      {:else if step === 3}
        <div class="text-center space-y-6">
          <div class="w-20 h-20 bg-green-50 dark:bg-accent2/10 border border-green-200 dark:border-accent2/20 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 dark:text-accent2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
          </div>
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Instance Secured!</h1>
          <p class="text-gray-500 dark:text-white/50 text-lg font-light leading-relaxed">Your <span class="text-gray-900 dark:text-white font-medium">{platformName}</span> instance is ready and your session is active.</p>
          <button 
            onclick={() => goto('/dashboard')}
            class="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-sm"
          >
            Go to Dashboard
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  h1, h2 {
    font-family: "Bricolage Grotesque", sans-serif;
  }
</style>
