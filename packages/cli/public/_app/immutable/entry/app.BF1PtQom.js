const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.BYmdgfnf.js',
			'../chunks/CF3HcCU-.js',
			'../chunks/D_ARSHuy.js',
			'../chunks/C41dpvGy.js',
			'../chunks/BjEwslEs.js',
			'../assets/0.DTlJ1gpC.css',
			'../nodes/1.wzDofM7T.js',
			'../chunks/CTHplljA.js',
			'../chunks/fY0BZPQl.js',
			'../chunks/zXCsM1WZ.js',
			'../chunks/CJfWclPr.js',
			'../chunks/LM21Vpnx.js',
			'../nodes/2.h0yKUYw1.js',
			'../chunks/BZ5PAaN8.js',
			'../chunks/ad1oCDNU.js',
			'../assets/2.BNvRl97X.css',
			'../nodes/3.0ittIgs9.js',
			'../chunks/DVYdd_6U.js',
			'../chunks/Bn3y9Etn.js',
			'../assets/3.BuUd2IpZ.css',
			'../nodes/4.B4otoV7O.js',
			'../assets/4.CaPAYbpm.css',
		]),
) => i.map((i) => d[i]);
var J = (r) => {
	throw TypeError(r);
};
var K = (r, e, s) => e.has(r) || J('Cannot ' + s);
var c = (r, e, s) => (K(r, e, 'read from private field'), s ? s.call(r) : e.get(r)),
	j = (r, e, s) =>
		e.has(r)
			? J('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(r)
				: e.set(r, s),
	C = (r, e, s, o) => (K(r, e, 'write to private field'), o ? o.call(r, s) : e.set(r, s), s);

import { c as B, b as G, p as V } from '../chunks/Bn3y9Etn.js';
import { i as D } from '../chunks/BZ5PAaN8.js';
import { t as de, a as O, c as p, f as Q } from '../chunks/CF3HcCU-.js';
import { h as ie, m as le, s as me, u as ue } from '../chunks/CTHplljA.js';
import {
	L as _,
	G as $,
	H as ae,
	P as ce,
	aI as ee,
	O as I,
	aH as M,
	a6 as N,
	K as ne,
	N as oe,
	aJ as re,
	I as S,
	J as se,
	aK as T,
	B as te,
	aG as X,
	Q as x,
	n as Z,
} from '../chunks/D_ARSHuy.js';
import { o as fe } from '../chunks/LM21Vpnx.js';

const he = 'modulepreload',
	_e = (r, e) => new URL(r, e).href,
	U = {},
	k = (e, s, o) => {
		let i = Promise.resolve();
		if (s && s.length > 0) {
			const a = document.getElementsByTagName('link'),
				t = document.querySelector('meta[property=csp-nonce]'),
				m = (t == null ? void 0 : t.nonce) || (t == null ? void 0 : t.getAttribute('nonce'));
			i = Promise.allSettled(
				s.map((l) => {
					if (((l = _e(l, o)), l in U)) return;
					U[l] = !0;
					const g = l.endsWith('.css'),
						A = g ? '[rel="stylesheet"]' : '';
					if (o)
						for (let y = a.length - 1; y >= 0; y--) {
							const n = a[y];
							if (n.href === l && (!g || n.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${l}"]${A}`)) return;
					const f = document.createElement('link');
					if (
						((f.rel = g ? 'stylesheet' : he),
						g || (f.as = 'script'),
						(f.crossOrigin = ''),
						(f.href = l),
						m && f.setAttribute('nonce', m),
						document.head.appendChild(f),
						g)
					)
						return new Promise((y, n) => {
							f.addEventListener('load', y),
								f.addEventListener('error', () => n(new Error(`Unable to preload CSS for ${l}`)));
						});
				}),
			);
		}
		function h(a) {
			const t = new Event('vite:preloadError', { cancelable: !0 });
			if (((t.payload = a), window.dispatchEvent(t), !t.defaultPrevented)) throw a;
		}
		return i.then((a) => {
			for (const t of a || []) t.status === 'rejected' && h(t.reason);
			return e().catch(h);
		});
	},
	je = {};
function ve(r) {
	return class extends ge {
		constructor(e) {
			super({ component: r, ...e });
		}
	};
}
var v, u;
class ge {
	constructor(e) {
		j(this, v);
		j(this, u);
		var h;
		var s = new Map(),
			o = (a, t) => {
				var m = M(t, !1, !1);
				return s.set(a, m), m;
			};
		const i = new Proxy(
			{ ...(e.props || {}), $$events: {} },
			{
				get(a, t) {
					return _(s.get(t) ?? o(t, Reflect.get(a, t)));
				},
				has(a, t) {
					return t === N ? !0 : (_(s.get(t) ?? o(t, Reflect.get(a, t))), Reflect.has(a, t));
				},
				set(a, t, m) {
					return S(s.get(t) ?? o(t, m), m), Reflect.set(a, t, m);
				},
			},
		);
		C(
			this,
			u,
			(e.hydrate ? ie : le)(e.component, {
				target: e.target,
				anchor: e.anchor,
				props: i,
				context: e.context,
				intro: e.intro ?? !1,
				recover: e.recover,
				transformError: e.transformError,
			}),
		),
			(!((h = e == null ? void 0 : e.props) != null && h.$$host) || e.sync === !1) && X(),
			C(this, v, i.$$events);
		for (const a of Object.keys(c(this, u)))
			a === '$set' ||
				a === '$destroy' ||
				a === '$on' ||
				Z(this, a, {
					get() {
						return c(this, u)[a];
					},
					set(t) {
						c(this, u)[a] = t;
					},
					enumerable: !0,
				});
		(c(this, u).$set = (a) => {
			Object.assign(i, a);
		}),
			(c(this, u).$destroy = () => {
				ue(c(this, u));
			});
	}
	$set(e) {
		c(this, u).$set(e);
	}
	$on(e, s) {
		c(this, v)[e] = c(this, v)[e] || [];
		const o = (...i) => s.call(this, ...i);
		return (
			c(this, v)[e].push(o),
			() => {
				c(this, v)[e] = c(this, v)[e].filter((i) => i !== o);
			}
		);
	}
	$destroy() {
		c(this, u).$destroy();
	}
}
(v = new WeakMap()), (u = new WeakMap());
var ye = Q(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>',
	),
	Ee = Q('<!> <!>', 1);
function be(r, e) {
	$(e, !0);
	const s = V(e, 'components', 23, () => []),
		o = V(e, 'data_0', 3, null),
		i = V(e, 'data_1', 3, null);
	ee(() => e.stores.page.set(e.page)),
		te(() => {
			e.stores, e.page, e.constructors, s(), e.form, o(), i(), e.stores.page.notify();
		});
	const h = I(!1),
		a = I(!1),
		t = I(null);
	fe(() => {
		const n = e.stores.page.subscribe(() => {
			_(h) &&
				(S(a, !0),
				re().then(() => {
					S(t, document.title || 'untitled page', !0);
				}));
		});
		return S(h, !0), n;
	});
	const m = T(() => e.constructors[1]);
	var l = Ee(),
		g = x(l);
	var A = (n) => {
			const E = T(() => e.constructors[0]);
			var b = p(),
				w = x(b);
			B(
				w,
				() => _(E),
				(P, R) => {
					G(
						R(P, {
							get data() {
								return o();
							},
							get form() {
								return e.form;
							},
							get params() {
								return e.page.params;
							},
							children: (d, Re) => {
								var H = p(),
									Y = x(H);
								B(
									Y,
									() => _(m),
									(z, F) => {
										G(
											F(z, {
												get data() {
													return i();
												},
												get form() {
													return e.form;
												},
												get params() {
													return e.page.params;
												},
											}),
											(L) => (s()[1] = L),
											() => {
												var L;
												return (L = s()) == null ? void 0 : L[1];
											},
										);
									},
								),
									O(d, H);
							},
							$$slots: { default: !0 },
						}),
						(d) => (s()[0] = d),
						() => {
							var d;
							return (d = s()) == null ? void 0 : d[0];
						},
					);
				},
			),
				O(n, b);
		},
		q = (n) => {
			const E = T(() => e.constructors[0]);
			var b = p(),
				w = x(b);
			B(
				w,
				() => _(E),
				(P, R) => {
					G(
						R(P, {
							get data() {
								return o();
							},
							get form() {
								return e.form;
							},
							get params() {
								return e.page.params;
							},
						}),
						(d) => (s()[0] = d),
						() => {
							var d;
							return (d = s()) == null ? void 0 : d[0];
						},
					);
				},
			),
				O(n, b);
		};
	D(g, (n) => {
		e.constructors[1] ? n(A) : n(q, -1);
	});
	var f = se(g, 2);
	var y = (n) => {
		var E = ye(),
			b = ne(E);
		var w = (P) => {
			var R = de();
			ce(() => me(R, _(t))), O(P, R);
		};
		D(b, (P) => {
			_(a) && P(w);
		});
		oe(E), O(n, E);
	};
	D(f, (n) => {
		_(h) && n(y);
	});
	O(r, l), ae();
}
const Ce = ve(be),
	Ie = [
		() =>
			k(
				() => import('../nodes/0.BYmdgfnf.js'),
				__vite__mapDeps([0, 1, 2, 3, 4, 5]),
				import.meta.url,
			),
		() =>
			k(
				() => import('../nodes/1.wzDofM7T.js'),
				__vite__mapDeps([6, 1, 2, 7, 8, 9, 10, 11]),
				import.meta.url,
			),
		() =>
			k(
				() => import('../nodes/2.h0yKUYw1.js'),
				__vite__mapDeps([12, 1, 2, 11, 8, 13, 4, 9, 10, 14, 15]),
				import.meta.url,
			),
		() =>
			k(
				() => import('../nodes/3.0ittIgs9.js'),
				__vite__mapDeps([16, 1, 2, 10, 7, 8, 13, 4, 17, 18, 3, 14, 11, 19]),
				import.meta.url,
			),
		() =>
			k(
				() => import('../nodes/4.B4otoV7O.js'),
				__vite__mapDeps([20, 1, 2, 7, 8, 13, 4, 17, 9, 10, 11, 14, 21]),
				import.meta.url,
			),
	],
	Te = [],
	pe = { '/': [2], '/dashboard': [3], '/setup': [4] },
	W = {
		handleError: ({ error: r }) => {
			console.error(r);
		},
		reroute: () => {},
		transport: {},
	},
	Pe = Object.fromEntries(Object.entries(W.transport).map(([r, e]) => [r, e.decode])),
	De = Object.fromEntries(Object.entries(W.transport).map(([r, e]) => [r, e.encode])),
	Ve = !1,
	Be = (r, e) => Pe[r](e);

export {
	Be as decode,
	Ce as root,
	De as encoders,
	Ie as nodes,
	je as matchers,
	Pe as decoders,
	pe as dictionary,
	Te as server_loads,
	Ve as hash,
	W as hooks,
};
