<script lang="ts">
import { page } from '$app/stores';
import Canvas from '$lib/components/Canvas.svelte';

let workflowId = $derived($page.params.id);
</script>

<div class="h-screen w-full relative">
  <Canvas workflowId={workflowId} />
</div>
