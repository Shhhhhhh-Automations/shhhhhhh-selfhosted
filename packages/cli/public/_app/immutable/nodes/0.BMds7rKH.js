import { B as v } from '../chunks/B0bQ9gA8.js';
import { f as d, a as l } from '../chunks/CfrYN2ca.js';
import { b as c, z as o, E as p, C as s, y as u } from '../chunks/CvLgNXMg.js';

function b(n, r, ...e) {
	var a = new v(n);
	c(() => {
		const t = r() ?? null;
		a.ensure(t, t && ((i) => t(i, ...e)));
	}, p);
}
const m = !1,
	f = !1,
	y = Object.freeze(
		Object.defineProperty({ __proto__: null, prerender: f, ssr: m }, Symbol.toStringTag, {
			value: 'Module',
		}),
	);
var h = d(
	'<div class="min-h-screen bg-background relative overflow-hidden text-white font-sans"><div class="absolute inset-0 z-0 overflow-hidden pointer-events-none"><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"></div> <div class="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-accent1/20 blur-[150px]"></div> <div class="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent2/10 blur-[100px]"></div> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 64px 64px;"></div></div> <main class="relative z-10 min-h-screen"><!></main></div>',
);
function _(n, r) {
	var e = h(),
		a = u(o(e), 2),
		t = o(a);
	b(t, () => r.children), s(a), s(e), l(n, e);
}

export { _ as component, y as universal };
