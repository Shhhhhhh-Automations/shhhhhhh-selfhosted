<script lang="ts">
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import { apiFetch } from '$lib/api/client';

let isConfigured = $state<boolean | null>(null);

onMount(async () => {
	try {
		const status = await apiFetch('/settings/status');
		isConfigured = status.isConfigured;
	} catch (e) {
		console.error('Failed to check status', e);
	}
});
</script>

<div class="flex flex-col items-center justify-start min-h-screen pt-24 px-6 md:px-12 text-center">
  <!-- Title Section -->
  <div class="space-y-4 mb-16">
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9]">
      <span class="block">Quiet operations.</span>
      <span class="block text-white/40">Loud automation.</span>
    </h1>
  </div>

  <!-- Action Buttons -->
  <div class="flex flex-col sm:flex-row gap-4 mb-24">
    {#if isConfigured === false}
      <button 
        onclick={() => goto('/setup')}
        class="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
        Deploy Silently
      </button>
    {:else if isConfigured === true}
      <button 
        onclick={() => goto('/dashboard')}
        class="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v8h-6z" /><path d="M4 16h6v4h-6z" /><path d="M14 12h6v8h-6z" /><path d="M14 4h6v4h-6z" /></svg>
        Open Dashboard
      </button>
    {:else}
      <button 
        disabled
        class="px-8 py-4 bg-white/10 text-white/50 rounded-full font-bold text-lg animate-pulse"
      >
        Initializing...
      </button>
    {/if}
    
    <button class="flex items-center justify-center gap-2 px-8 py-4 bg-black border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" /></svg>
      View Docs
    </button>
  </div>

  <!-- Workflow Visualization -->
  <div class="relative w-full max-w-5xl aspect-[16/9] mb-24">
    <!-- SVG Canvas for the fluid line -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M250 350C400 350 400 150 550 150H700" stroke="url(#lineGradient)" stroke-width="8" stroke-linecap="round" class="animate-flow" />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="oklch(85% 0.25 145)" />
          <stop offset="50%" stop-color="oklch(65% 0.25 310)" />
          <stop offset="100%" stop-color="oklch(75% 0.2 230)" />
        </linearGradient>
      </defs>
    </svg>

    <!-- Node 1: Supabase / Database Trigger -->
    <div class="absolute top-[60%] left-[10%] w-72 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl text-left space-y-3 shadow-2xl">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-accent2/20 flex items-center justify-center text-accent2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-database"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
        </div>
        <span class="font-bold text-lg">Supabase</span>
      </div>
      <div>
        <div class="text-xl font-bold">Database Trigger</div>
        <div class="text-sm text-white/40">Table: Orders</div>
      </div>
    </div>

    <!-- Node 2: Google Docs / Create Document -->
    <div class="absolute top-[15%] right-[10%] w-72 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl text-left space-y-3 shadow-2xl">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-accent1/20 flex items-center justify-center text-accent1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg>
        </div>
        <span class="font-bold text-lg">Google Docs</span>
      </div>
      <div>
        <div class="text-xl font-bold">Create Google Document</div>
        <div class="text-sm text-white/40">Title: Order #1042</div>
      </div>
    </div>
  </div>

  <!-- Bottom Description -->
  <p class="max-w-3xl text-xl md:text-2xl text-white/60 font-light leading-relaxed">
    Watch your data move seamlessly. Trigger a workflow instantly when Supabase updates, process the data, and watch it generate a Google Doc automatically—all mapped out inside a fluid, neon-lit canvas.
  </p>
</div>

<style>
  .animate-flow {
    stroke-dasharray: 20;
    animation: flow 20s linear infinite;
  }

  @keyframes flow {
    from {
      stroke-dashoffset: 400;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  h1 {
    font-family: "Bricolage Grotesque", sans-serif;
  }
</style>
