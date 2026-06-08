<script lang="ts">
import '../app.css';
let { children } = $props();
</script>

<div class="min-h-screen bg-background relative overflow-hidden text-white font-sans">
  <!-- Mesh Gradient Background -->
  <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"></div>
    <div class="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-accent1/20 blur-[150px]"></div>
    <div class="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent2/10 blur-[100px]"></div>
    
    <!-- Grid Pattern -->
    <div class="absolute inset-0 opacity-[0.03]" 
         style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 64px 64px;">
    </div>
  </div>
  
  <main class="relative z-10 min-h-screen">
    {@render children()}
  </main>
</div>
