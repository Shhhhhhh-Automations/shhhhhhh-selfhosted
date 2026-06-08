<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { apiFetch } from '$lib/api/client';

  let workflows = $state<any[]>([]);
  let isLoading = $state(true);
  let isCreating = $state(false);

  onMount(async () => {
    try {
      workflows = await apiFetch('/workflows');
    } catch (e) {
      console.error('Failed to load workflows', e);
    } finally {
      isLoading = false;
    }
  });

  async function createWorkflow() {
    isCreating = true;
    try {
      const newWf = await apiFetch('/workflows', { method: 'POST' });
      // Redirect to the new canvas
      goto(`/dashboard/${newWf.id}`);
    } catch (e) {
      console.error('Failed to create workflow', e);
      isCreating = false;
    }
  }

  function openWorkflow(id: string) {
    goto(`/dashboard/${id}`);
  }
</script>

<div class="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
  <header class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
    <div class="space-y-2">
      <h1 class="text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">Dashboard</h1>
      <p class="text-white/40 text-xl font-light">Your automation command center.</p>
    </div>
    
    <div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
      <div class="w-2 h-2 rounded-full bg-accent2 animate-pulse shadow-[0_0_8px_rgba(var(--accent2),0.5)]"></div>
      <span class="text-sm font-bold tracking-wider uppercase text-white/60">System Operational</span>
    </div>
  </header>

  {#if isLoading}
    <div class="flex items-center justify-center min-h-[400px]">
      <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  {:else if workflows.length === 0}
    <!-- Empty State -->
    <div class="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[40px] p-12 md:p-20 flex flex-col items-center justify-center text-center overflow-hidden min-h-[500px] shadow-2xl">
      <!-- Decorative background blur -->
      <div class="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      
      <div class="relative z-10 space-y-8 max-w-lg">
        <div class="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary shadow-[0_0_30px_rgba(var(--primary),0.2)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12a8 8 0 0 1 16 0z" /><path d="M12 12v6a2 2 0 0 0 4 0v-6m-4 0v-6a2 2 0 0 0 -4 0v6" /></svg>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          No Workflows Yet
        </h2>
        <p class="text-white/50 text-xl font-light leading-relaxed">
          Create your first workflow to start automating your tasks quietly and efficiently.
        </p>
        <button 
          onclick={createWorkflow}
          disabled={isCreating}
          class="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
        >
          {isCreating ? 'Creating...' : 'Create New Workflow'}
        </button>
      </div>
    </div>
  {:else}
    <!-- List of Workflows -->
    <div class="mb-8 flex justify-between items-center">
      <h2 class="text-2xl font-bold">Your Workflows</h2>
      <button 
        onclick={createWorkflow}
        disabled={isCreating}
        class="px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
      >
        {isCreating ? 'Creating...' : '+ New Workflow'}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each workflows as wf}
        <button 
          onclick={() => openWorkflow(wf.id)}
          class="text-left group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-[32px] p-8 shadow-xl hover:border-primary/50 transition-colors overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12a8 8 0 0 1 16 0z" /><path d="M12 12v6a2 2 0 0 0 4 0v-6m-4 0v-6a2 2 0 0 0 -4 0v6" /></svg>
              </div>
              {#if wf.isActive}
                <span class="px-3 py-1 bg-primary/20 text-primary border border-primary/50 rounded-full text-xs font-bold uppercase tracking-wider">Active</span>
              {:else}
                <span class="px-3 py-1 bg-white/5 text-white/50 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider">Draft</span>
              {/if}
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">{wf.name}</h3>
            <p class="text-sm text-white/40 mb-6">Last updated: {new Date(wf.updatedAt).toLocaleDateString()}</p>
            <div class="flex items-center text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
              Open Canvas →
            </div>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  h1, h2, h3, h4 {
    font-family: "Bricolage Grotesque", sans-serif;
  }
</style>
