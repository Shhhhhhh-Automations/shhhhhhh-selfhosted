<script lang="ts">
import { goto } from '$app/navigation';
import { apiFetch } from '$lib/api/client';

let step = $state(1);
let platformName = $state('shhhhhhh.it');
let loading = $state(false);
let error = $state('');

async function handleSetup() {
	loading = true;
	error = '';
	try {
		await apiFetch('/setup', {
			method: 'POST',
			body: JSON.stringify({ platformName }),
		});
		step = 3;
	} catch (e: any) {
		error = e.message;
	} finally {
		loading = false;
	}
}
</script>

<div class="flex items-center justify-center min-h-[90vh] px-4 py-12">
  <div class="max-w-lg w-full bg-black/40 backdrop-blur-2xl border border-white/10 p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
    <!-- Subtle glow effect inside card -->
    <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-accent1/20 blur-[80px] pointer-events-none"></div>

    <div class="relative z-10">
      {#if step === 1}
        <div class="text-center space-y-6">
          <div class="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-automation"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M10 13l2 2l4 -4" /><path d="M12 9v4" /></svg>
          </div>
          <h1 class="text-4xl font-bold tracking-tight text-white">Quietly powerful.</h1>
          <p class="text-white/50 text-lg font-light leading-relaxed">Let's get your automation engine ready. It only takes a minute to configure your quiet operations.</p>
          <button 
            onclick={() => step = 2}
            class="w-full py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300"
          >
            Begin Setup
          </button>
        </div>
      {:else if step === 2}
        <div class="space-y-8">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tight text-white">Platform Settings</h2>
            <p class="text-white/40 font-light">Give your automation instance a name.</p>
          </div>
          
          <div class="space-y-6">
            <div class="space-y-3">
              <label for="platformName" class="block text-sm font-medium text-white/60 ml-1">Instance Name</label>
              <input 
                id="platformName"
                type="text" 
                bind:value={platformName}
                class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-lg text-white placeholder:text-white/20 focus:border-white/30 focus:bg-white/10 outline-none transition-all duration-300"
                placeholder="e.g. My Automation Lab"
              />
            </div>

            {#if error}
              <div class="text-accent2 text-sm bg-accent2/10 p-4 rounded-2xl border border-accent2/20 flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {error}
              </div>
            {/if}

            <div class="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onclick={() => step = 1}
                class="flex-1 py-4 border border-white/10 hover:bg-white/5 text-white rounded-full font-bold transition-all duration-300"
              >
                Back
              </button>
              <button 
                onclick={handleSetup}
                disabled={loading}
                class="flex-[2] py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:scale-100"
              >
                {loading ? 'Configuring...' : 'Complete Setup'}
              </button>
            </div>
          </div>
        </div>
      {:else if step === 3}
        <div class="text-center space-y-6">
          <div class="w-20 h-20 bg-accent2/10 border border-accent2/20 rounded-full flex items-center justify-center mx-auto mb-8 text-accent2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
          </div>
          <h1 class="text-4xl font-bold tracking-tight text-white">All Set!</h1>
          <p class="text-white/50 text-lg font-light leading-relaxed">Your <span class="text-white font-medium">{platformName}</span> instance is ready for loud automations.</p>
          <button 
            onclick={() => goto('/dashboard')}
            class="w-full py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300"
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
