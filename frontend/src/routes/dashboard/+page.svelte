<script lang="ts">
import Canvas from '$lib/components/Canvas.svelte';
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <!-- Main Content: Canvas Preview -->
    <div class="lg:col-span-8 min-h-[600px] shadow-2xl">
      <Canvas />
    </div>

    <!-- Sidebar: Stats/Info -->
    <div class="lg:col-span-4 space-y-8">
      <div class="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-xl">
        <h3 class="text-xl font-bold mb-6 text-white/80">Recent Executions</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-center py-12 px-6 border border-dashed border-white/10 rounded-2xl">
            <p class="text-white/20 text-sm font-medium italic">No quiet executions yet.</p>
          </div>
        </div>
      </div>
      
      <div class="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-xl">
        <h3 class="text-xl font-bold mb-6 text-white/80">Active Workflows</h3>
        <div class="space-y-4">
          <div class="flex flex-col items-center justify-center py-12 px-6 border border-dashed border-white/10 rounded-2xl gap-4">
            <p class="text-white/20 text-sm font-medium italic">Zero workflows active.</p>
            <button class="text-accent1 text-sm font-bold hover:text-white transition-colors">Create your first →</button>
          </div>
        </div>
      </div>

      <!-- Quick Action Card -->
      <div class="bg-primary/10 border border-primary/20 rounded-[32px] p-8">
        <h4 class="text-lg font-bold text-primary-foreground mb-2">Need help?</h4>
        <p class="text-white/40 text-sm mb-6">Explore our documentation to learn how to deploy silently.</p>
        <button class="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold text-sm transition-all">
          View Documentation
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  h1, h3, h4 {
    font-family: "Bricolage Grotesque", sans-serif;
  }
</style>
