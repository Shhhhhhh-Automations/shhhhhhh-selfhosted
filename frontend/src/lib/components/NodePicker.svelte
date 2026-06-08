<script lang="ts">
import {
	getActions,
	getTriggers,
	type ServiceDefinition,
	serviceCatalog,
} from '$lib/services/catalog';

let {
	onselect,
	onclose,
}: {
	onselect: (service: ServiceDefinition) => void;
	onclose: () => void;
} = $props();

let query = $state('');

const filtered = $derived(() => {
	const q = query.toLowerCase().trim();
	if (!q) return serviceCatalog;
	return serviceCatalog.filter(
		(s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q),
	);
});

const filteredTriggers = $derived(() => filtered().filter((s) => s.category === 'trigger'));
const filteredActions = $derived(() => filtered().filter((s) => s.category === 'action'));

function handleSelect(service: ServiceDefinition) {
	onselect(service);
}

function handleKeydown(e: KeyboardEvent) {
	if (e.key === 'Escape') onclose();
}
</script>

<!-- Backdrop -->
<div
	class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
	onclick={onclose}
	onkeydown={handleKeydown}
	role="dialog"
	aria-modal="true"
	aria-label="Node Picker"
>
	<!-- Modal -->
	<div
		class="relative w-full max-w-lg bg-[oklch(10%_0.01_280)] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
		onclick={(e) => e.stopPropagation()}
		role="presentation"
	>
		<!-- Header -->
		<div class="p-6 border-b border-white/10 bg-white/5">
			<div class="flex items-center justify-between mb-4">
				<h2 class="text-lg font-bold tracking-tight">Add Node</h2>
				<button
					onclick={onclose}
					class="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
					aria-label="Close node picker"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
				</button>
			</div>

			<!-- Search -->
			<div class="relative">
				<svg class="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
				<input
					type="text"
					bind:value={query}
					placeholder="Search services…"
					autofocus
					class="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
				/>
			</div>
		</div>

		<!-- Service List -->
		<div class="overflow-y-auto max-h-[480px] p-4 space-y-6">
			{#if filteredTriggers().length > 0}
				<section>
					<h3 class="text-xs font-bold tracking-widest uppercase text-accent2/70 mb-3 px-2">
						Triggers
					</h3>
					<div class="space-y-2">
						{#each filteredTriggers() as service}
							<button
								id="node-picker-{service.id}"
								onclick={() => handleSelect(service)}
								class="w-full flex items-center gap-4 p-3 rounded-2xl border border-transparent hover:border-accent2/30 hover:bg-white/5 transition-all text-left group"
							>
								<div
									class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-shadow"
									style="background: color-mix(in oklch, {service.color} 20%, transparent); color: {service.color}; box-shadow: 0 0 0 transparent;"
								>
									{@html service.icon}
								</div>
								<div class="min-w-0">
									<div class="text-sm font-bold text-white">{service.name}</div>
									<div class="text-xs text-white/40 truncate">{service.description}</div>
								</div>
								<svg class="ml-auto text-white/20 group-hover:text-white/60 flex-shrink-0 transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
							</button>
						{/each}
					</div>
				</section>
			{/if}

			{#if filteredActions().length > 0}
				<section>
					<h3 class="text-xs font-bold tracking-widest uppercase text-accent1/70 mb-3 px-2">
						Actions
					</h3>
					<div class="space-y-2">
						{#each filteredActions() as service}
							<button
								id="node-picker-{service.id}"
								onclick={() => handleSelect(service)}
								class="w-full flex items-center gap-4 p-3 rounded-2xl border border-transparent hover:border-accent1/30 hover:bg-white/5 transition-all text-left group"
							>
								<div
									class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
									style="background: color-mix(in oklch, {service.color} 20%, transparent); color: {service.color};"
								>
									{@html service.icon}
								</div>
								<div class="min-w-0">
									<div class="text-sm font-bold text-white">{service.name}</div>
									<div class="text-xs text-white/40 truncate">{service.description}</div>
								</div>
								<svg class="ml-auto text-white/20 group-hover:text-white/60 flex-shrink-0 transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
							</button>
						{/each}
					</div>
				</section>
			{/if}

			{#if filteredTriggers().length === 0 && filteredActions().length === 0}
				<div class="flex flex-col items-center justify-center py-12 text-white/30">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
					<p class="mt-3 text-sm">No services found for "{query}"</p>
				</div>
			{/if}
		</div>
	</div>
</div>
