import { a as se } from '../chunks/ad1oCDNU.js';
import { a as E, d as oe } from '../chunks/BWIk9SjA.js';
import { i as O } from '../chunks/CEaf6PKY.js';
import { f as _, a as p } from '../chunks/CfrYN2ca.js';
import { s as L } from '../chunks/CLCD54bi.js';
import { g as ie } from '../chunks/COmhP_Qq.js';
import {
	a5 as $,
	D as A,
	v as ae,
	h as B,
	y as d,
	L as ee,
	Z as F,
	x as f,
	C as i,
	a0 as J,
	_ as K,
	B as le,
	z as o,
	a1 as Q,
	w as re,
	Y as T,
	a6 as te,
	$ as V,
	A as v,
	a2 as W,
	k as w,
	a3 as X,
	a4 as Z,
} from '../chunks/CvLgNXMg.js';

const ne = Symbol('is custom element'),
	ce = Symbol('is html'),
	de = X ? 'link' : 'LINK';
function ve(e) {
	if (B) {
		var t = !1,
			r = () => {
				if (!t) {
					if (((t = !0), e.hasAttribute('value'))) {
						var s = e.value;
						R(e, 'value', null), (e.value = s);
					}
					if (e.hasAttribute('checked')) {
						var a = e.checked;
						R(e, 'checked', null), (e.checked = a);
					}
				}
			};
		(e[F] = r), K(r), V();
	}
}
function R(e, t, r, s) {
	var a = ue(e);
	(B &&
		((a[t] = e.getAttribute(t)),
		t === 'src' || t === 'srcset' || (t === 'href' && e.nodeName === de))) ||
		(a[t] !== (a[t] = r) && (t === 'loading' && (e[J] = r), e.removeAttribute(t)));
}
function ue(e) {
	var t;
	return e[(t = Q)] ?? (e[t] = { [ne]: e.nodeName.includes('-'), [ce]: e.namespaceURI === W });
}
function he(e, t, r = t) {
	var s = new WeakSet();
	Z(e, 'input', async (a) => {
		var l = a ? e.defaultValue : e.value;
		if (((l = C(e) ? I(l) : l), r(l), w !== null && s.add(w), await $(), l !== (l = t()))) {
			var y = e.selectionStart,
				u = e.selectionEnd,
				g = e.value.length;
			if (((e.value = l ?? ''), u !== null)) {
				var b = e.value.length;
				y === u && u === g && b > g
					? ((e.selectionStart = b), (e.selectionEnd = b))
					: ((e.selectionStart = y), (e.selectionEnd = Math.min(u, b)));
			}
		}
	}),
		((B && e.defaultValue !== e.value) || (ee(t) == null && e.value)) &&
			(r(C(e) ? I(e.value) : e.value), w !== null && s.add(w)),
		te(() => {
			var a = t();
			if (e === document.activeElement) {
				var l = w;
				if (s.has(l)) return;
			}
			(C(e) && a === I(e.value)) ||
				(e.type === 'date' && !a && !e.value) ||
				(a !== e.value && (e.value = a ?? ''));
		});
}
function C(e) {
	var t = e.type;
	return t === 'number' || t === 'range';
}
function I(e) {
	return e === '' ? null : +e;
}
var fe = _(
		`<div class="text-center space-y-6"><div class="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-automation"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path><path d="M10 13l2 2l4 -4"></path><path d="M12 9v4"></path></svg></div> <h1 class="text-4xl font-bold tracking-tight text-white svelte-g40i6i">Quietly powerful.</h1> <p class="text-white/50 text-lg font-light leading-relaxed">Let's get your automation engine ready. It only takes a minute to configure your quiet operations.</p> <button class="w-full py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300">Begin Setup</button></div>`,
	),
	be = _(
		'<div class="text-accent2 text-sm bg-accent2/10 p-4 rounded-2xl border border-accent2/20 flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> </div>',
	),
	xe = _(
		'<div class="space-y-8"><div class="space-y-2"><h2 class="text-3xl font-bold tracking-tight text-white svelte-g40i6i">Platform Settings</h2> <p class="text-white/40 font-light">Give your automation instance a name.</p></div> <div class="space-y-6"><div class="space-y-3"><label for="platformName" class="block text-sm font-medium text-white/60 ml-1">Instance Name</label> <input id="platformName" type="text" class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-lg text-white placeholder:text-white/20 focus:border-white/30 focus:bg-white/10 outline-none transition-all duration-300" placeholder="e.g. My Automation Lab"/></div> <!> <div class="pt-4 flex flex-col sm:flex-row gap-4"><button class="flex-1 py-4 border border-white/10 hover:bg-white/5 text-white rounded-full font-bold transition-all duration-300">Back</button> <button class="flex-[2] py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:scale-100"> </button></div></div></div>',
	),
	ge = _(
		'<div class="text-center space-y-6"><div class="w-20 h-20 bg-accent2/10 border border-accent2/20 rounded-full flex items-center justify-center mx-auto mb-8 text-accent2"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg></div> <h1 class="text-4xl font-bold tracking-tight text-white svelte-g40i6i">All Set!</h1> <p class="text-white/50 text-lg font-light leading-relaxed">Your <span class="text-white font-medium"> </span> instance is ready for loud automations.</p> <button class="w-full py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300">Go to Dashboard</button></div>',
	),
	me = _(
		'<div class="flex items-center justify-center min-h-[90vh] px-4 py-12"><div class="max-w-lg w-full bg-black/40 backdrop-blur-2xl border border-white/10 p-10 rounded-[32px] shadow-2xl relative overflow-hidden"><div class="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] pointer-events-none"></div> <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-accent1/20 blur-[80px] pointer-events-none"></div> <div class="relative z-10"><!></div></div></div>',
	);
function Ae(e, t) {
	ae(t, !0);
	const r = A(1),
		s = A('shhhhhhh.it'),
		a = A(!1),
		l = A('');
	async function y() {
		f(a, !0), f(l, '');
		try {
			await se('/setup', { method: 'POST', body: JSON.stringify({ platformName: v(s) }) }), f(r, 3);
		} catch (n) {
			f(l, n.message, !0);
		} finally {
			f(a, !1);
		}
	}
	var u = me(),
		g = o(u),
		b = d(o(g), 4),
		z = o(b);
	var D = (n) => {
			var c = fe(),
				h = d(o(c), 6);
			i(c), E('click', h, () => f(r, 2)), p(n, c);
		},
		G = (n) => {
			var c = xe(),
				h = d(o(c), 2),
				x = o(h),
				k = d(o(x), 2);
			ve(k), i(x);
			var S = d(x, 2);
			var U = (m) => {
				var N = be(),
					q = d(o(N));
				i(N), T(() => L(q, ` ${v(l) ?? ''}`)), p(m, N);
			};
			O(S, (m) => {
				v(l) && m(U);
			});
			var H = d(S, 2),
				j = o(H),
				M = d(j, 2),
				Y = o(M, !0);
			i(M),
				i(H),
				i(h),
				i(c),
				T(() => {
					(M.disabled = v(a)), L(Y, v(a) ? 'Configuring...' : 'Complete Setup');
				}),
				he(
					k,
					() => v(s),
					(m) => f(s, m),
				),
				E('click', j, () => f(r, 1)),
				E('click', M, y),
				p(n, c);
		},
		P = (n) => {
			var c = ge(),
				h = d(o(c), 4),
				x = d(o(h)),
				k = o(x, !0);
			i(x), le(), i(h);
			var S = d(h, 2);
			i(c), T(() => L(k, v(s))), E('click', S, () => ie('/dashboard')), p(n, c);
		};
	O(z, (n) => {
		v(r) === 1 ? n(D) : v(r) === 2 ? n(G, 1) : v(r) === 3 && n(P, 2);
	});
	i(b), i(g), i(u), p(e, u), re();
}
oe(['click']);

export { Ae as component };
