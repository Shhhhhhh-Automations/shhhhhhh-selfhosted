const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.BMds7rKH.js',
			'../chunks/CfrYN2ca.js',
			'../chunks/CvLgNXMg.js',
			'../chunks/B0bQ9gA8.js',
			'../assets/0.Dtus1QzC.css',
			'../nodes/1.mDW3KhzN.js',
			'../chunks/CLCD54bi.js',
			'../chunks/BWIk9SjA.js',
			'../chunks/FnKxiJg_.js',
			'../chunks/DkjOq4nL.js',
			'../nodes/2.1SsVUkKv.js',
			'../chunks/CEaf6PKY.js',
			'../chunks/ad1oCDNU.js',
			'../assets/2.BNvRl97X.css',
			'../nodes/3.CzVaFMEA.js',
			'../chunks/CeLkYPio.js',
			'../assets/3.CAYcJOaP.css',
			'../nodes/4.By1SrGZ7.js',
			'../assets/4.CaPAYbpm.css',
		]),
) => i.map((i) => d[i]);
var F = (e) => {
	throw TypeError(e);
};
var G = (e, t, s) => t.has(e) || F('Cannot ' + s);
var d = (e, t, s) => (G(e, t, 'read from private field'), s ? s.call(e) : t.get(e)),
	L = (e, t, s) =>
		t.has(e)
			? F('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, s),
	p = (e, t, s, o) => (G(e, t, 'write to private field'), o ? o.call(e, s) : t.set(e, s), s);

import { B as Ct } from '../chunks/B0bQ9gA8.js';
import { i as I } from '../chunks/CEaf6PKY.js';
import { p as B } from '../chunks/CeLkYPio.js';
import { f as H, c as j, t as Lt, a as w } from '../chunks/CfrYN2ca.js';
import { m as At, h as kt, u as St, s as xt } from '../chunks/CLCD54bi.js';
import {
	aM as _t,
	aJ as $,
	X as A,
	E as at,
	a5 as bt,
	D as C,
	ap as ct,
	aO as D,
	a6 as dt,
	V as Et,
	aK as et,
	aL as ft,
	v as gt,
	u as ht,
	c as it,
	W as lt,
	h as M,
	L as mt,
	r as nt,
	C as Ot,
	s as ot,
	w as Pt,
	y as Rt,
	a as rt,
	x as S,
	b as st,
	Y as Tt,
	n as tt,
	e as ut,
	A as v,
	T as vt,
	d as W,
	z as wt,
	aN as yt,
	U as Z,
} from '../chunks/CvLgNXMg.js';
import { o as pt } from '../chunks/DkjOq4nL.js';

const Dt = 'modulepreload',
	jt = (e, t) => new URL(e, t).href,
	z = {},
	T = (t, s, o) => {
		let i = Promise.resolve();
		if (s && s.length > 0) {
			const a = document.getElementsByTagName('link'),
				r = document.querySelector('meta[property=csp-nonce]'),
				n = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute('nonce'));
			i = Promise.allSettled(
				s.map((u) => {
					if (((u = jt(u, o)), u in z)) return;
					z[u] = !0;
					const f = u.endsWith('.css'),
						x = f ? '[rel="stylesheet"]' : '';
					if (o)
						for (let y = a.length - 1; y >= 0; y--) {
							const l = a[y];
							if (l.href === u && (!f || l.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${u}"]${x}`)) return;
					const _ = document.createElement('link');
					if (
						((_.rel = f ? 'stylesheet' : Dt),
						f || (_.as = 'script'),
						(_.crossOrigin = ''),
						(_.href = u),
						n && _.setAttribute('nonce', n),
						document.head.appendChild(_),
						f)
					)
						return new Promise((y, l) => {
							_.addEventListener('load', y),
								_.addEventListener('error', () => l(new Error(`Unable to preload CSS for ${u}`)));
						});
				}),
			);
		}
		function c(a) {
			const r = new Event('vite:preloadError', { cancelable: !0 });
			if (((r.payload = a), window.dispatchEvent(r), !r.defaultPrevented)) throw a;
		}
		return i.then((a) => {
			for (const r of a || []) r.status === 'rejected' && c(r.reason);
			return t().catch(c);
		});
	},
	Xt = {};
function It(e) {
	return class extends Bt {
		constructor(t) {
			super({ component: e, ...t });
		}
	};
}
var g, m;
class Bt {
	constructor(t) {
		L(this, g);
		L(this, m);
		var c;
		var s = new Map(),
			o = (a, r) => {
				var n = et(r, !1, !1);
				return s.set(a, n), n;
			};
		const i = new Proxy(
			{ ...(t.props || {}), $$events: {} },
			{
				get(a, r) {
					return v(s.get(r) ?? o(r, Reflect.get(a, r)));
				},
				has(a, r) {
					return r === Z ? !0 : (v(s.get(r) ?? o(r, Reflect.get(a, r))), Reflect.has(a, r));
				},
				set(a, r, n) {
					return S(s.get(r) ?? o(r, n), n), Reflect.set(a, r, n);
				},
			},
		);
		p(
			this,
			m,
			(t.hydrate ? kt : At)(t.component, {
				target: t.target,
				anchor: t.anchor,
				props: i,
				context: t.context,
				intro: t.intro ?? !1,
				recover: t.recover,
				transformError: t.transformError,
			}),
		),
			(!((c = t == null ? void 0 : t.props) != null && c.$$host) || t.sync === !1) && $(),
			p(this, g, i.$$events);
		for (const a of Object.keys(d(this, m)))
			a === '$set' ||
				a === '$destroy' ||
				a === '$on' ||
				tt(this, a, {
					get() {
						return d(this, m)[a];
					},
					set(r) {
						d(this, m)[a] = r;
					},
					enumerable: !0,
				});
		(d(this, m).$set = (a) => {
			Object.assign(i, a);
		}),
			(d(this, m).$destroy = () => {
				St(d(this, m));
			});
	}
	$set(t) {
		d(this, m).$set(t);
	}
	$on(t, s) {
		d(this, g)[t] = d(this, g)[t] || [];
		const o = (...i) => s.call(this, ...i);
		return (
			d(this, g)[t].push(o),
			() => {
				d(this, g)[t] = d(this, g)[t].filter((i) => i !== o);
			}
		);
	}
	$destroy() {
		d(this, m).$destroy();
	}
}
(g = new WeakMap()), (m = new WeakMap());
function V(e, t, s) {
	var o;
	M && ((o = ut), rt());
	var i = new Ct(e);
	st(() => {
		var c = t() ?? null;
		if (M) {
			var a = nt(o),
				r = a === ct,
				n = c !== null;
			if (r !== n) {
				var u = ot();
				it(u), (i.anchor = u), W(!1), i.ensure(c, c && ((f) => s(f, c))), W(!0);
				return;
			}
		}
		i.ensure(c, c && ((f) => s(f, c)));
	}, at);
}
function Y(e, t) {
	return e === t || (e == null ? void 0 : e[vt]) === t;
}
function N(e = {}, t, s, o) {
	var i = lt.r,
		c = ht;
	return (
		ft(() => {
			var a, r;
			return (
				dt(() => {
					(a = r),
						(r = []),
						mt(() => {
							Y(s(...r), e) || (t(e, ...r), a && Y(s(...a), e) && t(null, ...a));
						});
				}),
				() => {
					let n = c;
					for (; n !== i && n.parent !== null && n.parent.f & _t; ) n = n.parent;
					const u = () => {
							r && Y(s(...r), e) && t(null, ...r);
						},
						f = n.teardown;
					n.teardown = () => {
						u(), f == null || f();
					};
				}
			);
		}),
		e
	);
}
var Vt = H(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>',
	),
	Yt = H('<!> <!>', 1);
function Nt(e, t) {
	gt(t, !0);
	const s = B(t, 'components', 23, () => []),
		o = B(t, 'data_0', 3, null),
		i = B(t, 'data_1', 3, null);
	yt(() => t.stores.page.set(t.page)),
		Et(() => {
			t.stores, t.page, t.constructors, s(), t.form, o(), i(), t.stores.page.notify();
		});
	const c = C(!1),
		a = C(!1),
		r = C(null);
	pt(() => {
		const l = t.stores.page.subscribe(() => {
			v(c) &&
				(S(a, !0),
				bt().then(() => {
					S(r, document.title || 'untitled page', !0);
				}));
		});
		return S(c, !0), l;
	});
	const n = D(() => t.constructors[1]);
	var u = Yt(),
		f = A(u);
	var x = (l) => {
			const E = D(() => t.constructors[0]);
			var b = j(),
				O = A(b);
			V(
				O,
				() => v(E),
				(R, P) => {
					N(
						P(R, {
							get data() {
								return o();
							},
							get form() {
								return t.form;
							},
							get params() {
								return t.page.params;
							},
							children: (h, qt) => {
								var q = j(),
									K = A(q);
								V(
									K,
									() => v(n),
									(X, Q) => {
										N(
											Q(X, {
												get data() {
													return i();
												},
												get form() {
													return t.form;
												},
												get params() {
													return t.page.params;
												},
											}),
											(k) => (s()[1] = k),
											() => {
												var k;
												return (k = s()) == null ? void 0 : k[1];
											},
										);
									},
								),
									w(h, q);
							},
							$$slots: { default: !0 },
						}),
						(h) => (s()[0] = h),
						() => {
							var h;
							return (h = s()) == null ? void 0 : h[0];
						},
					);
				},
			),
				w(l, b);
		},
		U = (l) => {
			const E = D(() => t.constructors[0]);
			var b = j(),
				O = A(b);
			V(
				O,
				() => v(E),
				(R, P) => {
					N(
						P(R, {
							get data() {
								return o();
							},
							get form() {
								return t.form;
							},
							get params() {
								return t.page.params;
							},
						}),
						(h) => (s()[0] = h),
						() => {
							var h;
							return (h = s()) == null ? void 0 : h[0];
						},
					);
				},
			),
				w(l, b);
		};
	I(f, (l) => {
		t.constructors[1] ? l(x) : l(U, -1);
	});
	var _ = Rt(f, 2);
	var y = (l) => {
		var E = Vt(),
			b = wt(E);
		var O = (R) => {
			var P = Lt();
			Tt(() => xt(P, v(r))), w(R, P);
		};
		I(b, (R) => {
			v(a) && R(O);
		});
		Ot(E), w(l, E);
	};
	I(_, (l) => {
		v(c) && l(y);
	});
	w(e, u), Pt();
}
const Qt = It(Nt),
	Zt = [
		() =>
			T(() => import('../nodes/0.BMds7rKH.js'), __vite__mapDeps([0, 1, 2, 3, 4]), import.meta.url),
		() =>
			T(
				() => import('../nodes/1.mDW3KhzN.js'),
				__vite__mapDeps([5, 1, 2, 6, 7, 8, 9]),
				import.meta.url,
			),
		() =>
			T(
				() => import('../nodes/2.1SsVUkKv.js'),
				__vite__mapDeps([10, 1, 2, 9, 7, 11, 3, 8, 12, 13]),
				import.meta.url,
			),
		() =>
			T(
				() => import('../nodes/3.CzVaFMEA.js'),
				__vite__mapDeps([14, 1, 2, 7, 15, 16]),
				import.meta.url,
			),
		() =>
			T(
				() => import('../nodes/4.By1SrGZ7.js'),
				__vite__mapDeps([17, 1, 2, 6, 7, 11, 3, 8, 9, 12, 18]),
				import.meta.url,
			),
	],
	$t = [],
	te = { '/': [2], '/dashboard': [3], '/setup': [4] },
	J = {
		handleError: ({ error: e }) => {
			console.error(e);
		},
		reroute: () => {},
		transport: {},
	},
	Ut = Object.fromEntries(Object.entries(J.transport).map(([e, t]) => [e, t.decode])),
	ee = Object.fromEntries(Object.entries(J.transport).map(([e, t]) => [e, t.encode])),
	re = !1,
	se = (e, t) => Ut[e](t);

export {
	$t as server_loads,
	ee as encoders,
	J as hooks,
	Qt as root,
	re as hash,
	se as decode,
	te as dictionary,
	Ut as decoders,
	Xt as matchers,
	Zt as nodes,
};
