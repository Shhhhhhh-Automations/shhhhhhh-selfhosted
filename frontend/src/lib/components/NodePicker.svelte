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
	class="fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-[2px] flex items-center justify-center p-4 transition-all"
	onclick={onclose}
	onkeydown={handleKeydown}
	role="dialog"
	aria-modal="true"
	aria-label="Node Picker"
>
	<!-- Modal -->
	<div
		class="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
		onclick={(e) => e.stopPropagation()}
		role="presentation"
	>
		<!-- Header -->
		<div class="p-5 border-b border-gray-100 bg-gray-50 flex-shrink-0">
			<div class="flex items-center justify-between mb-4">
				<h2 class="text-base font-bold text-gray-900 tracking-tight">Add Node</h2>
				<button
					onclick={onclose}
					class="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-gray-400 hover:text-gray-700"
					aria-label="Close node picker"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
				</button>
			</div>

			<!-- Search -->
			<div class="relative">
				<svg class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
				<input
					type="text"
					bind:value={query}
					placeholder="Search services…"
					autofocus
					class="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow shadow-sm"
				/>
			</div>
		</div>

		<!-- Service List -->
		<div class="overflow-y-auto p-4 space-y-6 flex-1 bg-white">
			{#if filteredTriggers().length > 0}
				<section>
					<h3 class="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-3 px-2">
						Triggers
					</h3>
					<div class="space-y-1">
						{#each filteredTriggers() as service}
							<button
								id="node-picker-{service.id}"
								onclick={() => handleSelect(service)}
								class="w-full flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm transition-all text-left group"
							>
								<div
									class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-shadow bg-gray-50 border border-gray-100"
									style="color: {service.color};"
								>
									{@html service.icon}
								</div>
								<div class="min-w-0 flex-1">
									<div class="text-[13px] font-bold text-gray-900 leading-tight">{service.name}</div>
									<div class="text-[11px] text-gray-500 truncate mt-0.5">{service.description}</div>
								</div>
								<svg class="ml-auto text-gray-300 group-hover:text-blue-500 flex-shrink-0 transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
							</button>
						{/each}
					</div>
				</section>
			{/if}

			{#if filteredActions().length > 0}
				<section>
					<h3 class="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-3 px-2">
						Actions
					</h3>
					<div class="space-y-1">
						{#each filteredActions() as service}
							<button
								id="node-picker-{service.id}"
								onclick={() => handleSelect(service)}
								class="w-full flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm transition-all text-left group"
							>
								<div
									class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-50 border border-gray-100"
									style="color: {service.color};"
								>
									{@html service.icon}
								</div>
								<div class="min-w-0 flex-1">
									<div class="text-[13px] font-bold text-gray-900 leading-tight">{service.name}</div>
									<div class="text-[11px] text-gray-500 truncate mt-0.5">{service.description}</div>
								</div>
								<svg class="ml-auto text-gray-300 group-hover:text-blue-500 flex-shrink-0 transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
							</button>
						{/each}
					</div>
				</section>
			{/if}

			{#if filteredTriggers().length === 0 && filteredActions().length === 0}
				<div class="flex flex-col items-center justify-center py-12 text-gray-400">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
					<p class="mt-3 text-sm text-gray-500">No services found for "{query}"</p>
				</div>
			{/if}
		</div>
	</div>
</div>
