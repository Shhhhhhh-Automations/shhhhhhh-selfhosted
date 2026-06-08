<script lang="ts">
let { class: className = '' } = $props();

let mouseX = $state(50);
let mouseY = $state(50);

function handleMouseMove(e: MouseEvent) {
	const target = e.currentTarget as HTMLElement;
	const rect = target.getBoundingClientRect();
	mouseX = ((e.clientX - rect.left) / rect.width) * 100;
	mouseY = ((e.clientY - rect.top) / rect.height) * 100;
}
</script>

<div
	class="relative w-full h-full overflow-hidden rounded-[40px] bg-background border border-white/10 {className}"
	onmousemove={handleMouseMove}
	role="presentation"
>
	<!-- Aurora Background -->
	<div
		class="bg-aurora absolute inset-0 opacity-50 transition-all duration-300 ease-out pointer-events-none"
		style="--x: {mouseX}%; --y: {mouseY}%;"
	></div>

	<!-- Mesh Gradient Secondary -->
	<div
		class="absolute top-0 right-0 w-[60%] h-[60%] bg-accent1/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"
	></div>

	<!-- Content Layer -->
	<div class="relative z-10 w-full h-full p-12 flex flex-col items-center justify-center">
		<div class="glass-node p-8 rounded-3xl max-w-md text-center space-y-6">
			<div
				class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto text-primary"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M7 8l-4 4l4 4" />
					<path d="M17 8l4 4l-4 4" />
					<path d="M14 4l-4 16" />
				</svg>
			</div>
			<h2 class="text-3xl font-bold tracking-tight">Interactive Canvas</h2>
			<p class="text-white/50 font-light leading-relaxed">
				Move your cursor to experience the fluid <strong>Organic-Tech</strong> aurora.
				Notice how the grain texture interacts with the light.
			</p>
			<div class="flex gap-4 justify-center">
				<div class="h-1 w-12 bg-primary rounded-full"></div>
				<div class="h-1 w-4 bg-white/10 rounded-full"></div>
				<div class="h-1 w-4 bg-white/10 rounded-full"></div>
			</div>
		</div>

		<!-- Mock Nodes -->
		<div class="absolute top-20 left-20 glass-node px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase text-white/40">
			Trigger: Webhook
		</div>
		<div class="absolute bottom-20 right-20 glass-node px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase text-accent2/60">
			Action: Notification
		</div>
	</div>
</div>
