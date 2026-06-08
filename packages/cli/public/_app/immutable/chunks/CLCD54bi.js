var ke = Object.defineProperty;
var oe = (i) => {
	throw TypeError(i);
};
var De = (i, e, s) =>
	e in i ? ke(i, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (i[e] = s);
var q = (i, e, s) => De(i, typeof e != 'symbol' ? e + '' : e, s),
	Z = (i, e, s) => e.has(i) || oe('Cannot ' + s);
var t = (i, e, s) => (Z(i, e, 'read from private field'), s ? s.call(i) : e.get(i)),
	o = (i, e, s) =>
		e.has(i)
			? oe('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(i)
				: e.set(i, s),
	n = (i, e, s, r) => (Z(i, e, 'write to private field'), r ? r.call(i, s) : e.set(i, s), s),
	d = (i, e, s) => (Z(i, e, 'access private method'), s);

import { b as nt, r as ve, h as ye } from './BWIk9SjA.js';
import { b as at } from './CfrYN2ca.js';
import {
	aa as _e,
	_ as $,
	aj as $e,
	ai as B,
	B as Be,
	i as be,
	L as Ce,
	q as ce,
	k as D,
	a9 as de,
	a8 as Ee,
	p as ee,
	av as et,
	e as F,
	a7 as Fe,
	aq as Ge,
	ay as ge,
	a as He,
	b as Ie,
	ar as ie,
	ax as it,
	al as Je,
	t as je,
	as as Ke,
	j as k,
	ad as Le,
	ac as le,
	af as Me,
	A as me,
	h as O,
	a6 as Oe,
	d as P,
	s as Pe,
	ae as pe,
	at as Qe,
	ah as qe,
	w as rt,
	am as se,
	aw as st,
	W as Te,
	g as te,
	v as tt,
	c as U,
	an as Ue,
	o as ue,
	ag as Ve,
	E as We,
	ao as we,
	ap as Xe,
	m as xe,
	u as Y,
	ab as Ye,
	au as Ze,
	ak as ze,
} from './CvLgNXMg.js';

function ht(i) {
	let e = 0,
		s = Ee(0),
		r;
	return () => {
		Fe() &&
			(me(s),
			Oe(
				() => (
					e === 0 && (r = Ce(() => i(() => de(s)))),
					(e += 1),
					() => {
						$(() => {
							(e -= 1), e === 0 && (r == null || r(), (r = void 0), de(s));
						});
					}
				),
			));
	};
}
var ft = We | $e;
function ot(i, e, s, r) {
	new dt(i, e, s, r);
}
var p, x, v, C, u, y, _, g, A, I, S, H, L, M, N, X, a, Re, Ae, Ne, re, z, J, ne, ae;
class dt {
	constructor(e, s, r, m) {
		o(this, a);
		q(this, 'parent');
		q(this, 'is_pending', !1);
		q(this, 'transform_error');
		o(this, p);
		o(this, x, O ? F : null);
		o(this, v);
		o(this, C);
		o(this, u);
		o(this, y, null);
		o(this, _, null);
		o(this, g, null);
		o(this, A, null);
		o(this, I, 0);
		o(this, S, 0);
		o(this, H, !1);
		o(this, L, new Set());
		o(this, M, new Set());
		o(this, N, null);
		o(
			this,
			X,
			ht(
				() => (
					n(this, N, Ee(t(this, I))),
					() => {
						n(this, N, null);
					}
				),
			),
		);
		var h;
		n(this, p, e),
			n(this, v, s),
			n(this, C, (f) => {
				var E = Y;
				(E.b = this), (E.f |= _e), r(f);
			}),
			(this.parent = Y.b),
			(this.transform_error =
				m ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? ((f) => f)),
			n(
				this,
				u,
				Ie(() => {
					if (O) {
						const f = t(this, x);
						He();
						const E = f.data === Ye;
						if (f.data.startsWith(le)) {
							const c = JSON.parse(f.data.slice(le.length));
							d(this, a, Ae).call(this, c);
						} else E ? d(this, a, Ne).call(this) : d(this, a, Re).call(this);
					} else d(this, a, re).call(this);
				}, ft),
			),
			O && n(this, p, F);
	}
	defer_effect(e) {
		Le(e, t(this, L), t(this, M));
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!t(this, v).pending;
	}
	update_pending_count(e, s) {
		d(this, a, ne).call(this, e, s),
			n(this, I, t(this, I) + e),
			!(!t(this, N) || t(this, H)) &&
				(n(this, H, !0),
				$(() => {
					n(this, H, !1), t(this, N) && qe(t(this, N), t(this, I));
				}));
	}
	get_effect_pending() {
		return t(this, X).call(this), me(t(this, N));
	}
	error(e) {
		var s;
		if (!t(this, v).onerror && !t(this, v).failed) throw e;
		(s = D) != null && s.is_fork
			? (t(this, y) && D.skip_effect(t(this, y)),
				t(this, _) && D.skip_effect(t(this, _)),
				t(this, g) && D.skip_effect(t(this, g)),
				D.oncommit(() => {
					d(this, a, ae).call(this, e);
				}))
			: d(this, a, ae).call(this, e);
	}
}
(p = new WeakMap()),
	(x = new WeakMap()),
	(v = new WeakMap()),
	(C = new WeakMap()),
	(u = new WeakMap()),
	(y = new WeakMap()),
	(_ = new WeakMap()),
	(g = new WeakMap()),
	(A = new WeakMap()),
	(I = new WeakMap()),
	(S = new WeakMap()),
	(H = new WeakMap()),
	(L = new WeakMap()),
	(M = new WeakMap()),
	(N = new WeakMap()),
	(X = new WeakMap()),
	(a = new WeakSet()),
	(Re = function () {
		try {
			n(
				this,
				y,
				k(() => t(this, C).call(this, t(this, p))),
			);
		} catch (e) {
			this.error(e);
		}
	}),
	(Ae = function (e) {
		const s = t(this, v).failed;
		s &&
			n(
				this,
				g,
				k(() => {
					s(
						t(this, p),
						() => e,
						() => () => {},
					);
				}),
			);
	}),
	(Ne = function () {
		const e = t(this, v).pending;
		e &&
			((this.is_pending = !0),
			n(
				this,
				_,
				k(() => e(t(this, p))),
			),
			$(() => {
				var s = n(this, A, document.createDocumentFragment()),
					r = be();
				s.append(r),
					n(
						this,
						y,
						d(this, a, J).call(this, () => k(() => t(this, C).call(this, r))),
					),
					t(this, S) === 0 &&
						(t(this, p).before(s),
						n(this, A, null),
						ee(t(this, _), () => {
							n(this, _, null);
						}),
						d(this, a, z).call(this, D));
			}));
	}),
	(re = function () {
		try {
			if (
				((this.is_pending = this.has_pending_snippet()),
				n(this, S, 0),
				n(this, I, 0),
				n(
					this,
					y,
					k(() => {
						t(this, C).call(this, t(this, p));
					}),
				),
				t(this, S) > 0)
			) {
				var e = n(this, A, document.createDocumentFragment());
				xe(t(this, y), e);
				const s = t(this, v).pending;
				n(
					this,
					_,
					k(() => s(t(this, p))),
				);
			} else d(this, a, z).call(this, D);
		} catch (s) {
			this.error(s);
		}
	}),
	(z = function (e) {
		(this.is_pending = !1), e.transfer_effects(t(this, L), t(this, M));
	}),
	(J = function (e) {
		var s = Y,
			r = je,
			m = Te;
		ce(t(this, u)), ue(t(this, u)), pe(t(this, u).ctx);
		try {
			return Me.ensure(), e();
		} catch (h) {
			return Ve(h), null;
		} finally {
			ce(s), ue(r), pe(m);
		}
	}),
	(ne = function (e, s) {
		var r;
		if (!this.has_pending_snippet()) {
			this.parent && d((r = this.parent), a, ne).call(r, e, s);
			return;
		}
		n(this, S, t(this, S) + e),
			t(this, S) === 0 &&
				(d(this, a, z).call(this, s),
				t(this, _) &&
					ee(t(this, _), () => {
						n(this, _, null);
					}),
				t(this, A) && (t(this, p).before(t(this, A)), n(this, A, null)));
	}),
	(ae = function (e) {
		t(this, y) && (te(t(this, y)), n(this, y, null)),
			t(this, _) && (te(t(this, _)), n(this, _, null)),
			t(this, g) && (te(t(this, g)), n(this, g, null)),
			O && (U(t(this, x)), Be(), U(Pe()));
		var s = t(this, v).onerror;
		const r = t(this, v).failed;
		var m = !1,
			h = !1;
		const f = () => {
				if (m) {
					Je();
					return;
				}
				(m = !0),
					h && ze(),
					t(this, g) !== null &&
						ee(t(this, g), () => {
							n(this, g, null);
						}),
					d(this, a, J).call(this, () => {
						d(this, a, re).call(this);
					});
			},
			E = (l) => {
				try {
					(h = !0), s == null || s(l, f), (h = !1);
				} catch (c) {
					B(c, t(this, u) && t(this, u).parent);
				}
				r &&
					n(
						this,
						g,
						d(this, a, J).call(this, () => {
							try {
								return k(() => {
									var c = Y;
									(c.b = this),
										(c.f |= _e),
										r(
											t(this, p),
											() => l,
											() => f,
										);
								});
							} catch (c) {
								return B(c, t(this, u).parent), null;
							}
						}),
					);
			};
		$(() => {
			var l;
			try {
				l = this.transform_error(e);
			} catch (c) {
				B(c, t(this, u) && t(this, u).parent);
				return;
			}
			l !== null && typeof l == 'object' && typeof l.then == 'function'
				? l.then(E, (c) => B(c, t(this, u) && t(this, u).parent))
				: E(l);
		});
	});
const _t = ['touchstart', 'touchmove'];
function lt(i) {
	return _t.includes(i);
}
function yt(i, e) {
	var r;
	var s = e == null ? '' : typeof e == 'object' ? `${e}` : e;
	s !== (i[(r = ge)] ?? (i[r] = i.nodeValue)) && ((i[ge] = s), (i.nodeValue = `${s}`));
}
function ct(i, e) {
	return Se(i, e);
}
function mt(i, e) {
	se(), (e.intro = e.intro ?? !1);
	const s = e.target,
		r = O,
		m = F;
	try {
		for (var h = Ue(s); h && (h.nodeType !== we || h.data !== Xe); ) h = Ge(h);
		if (!h) throw ie;
		P(!0), U(h);
		const f = Se(i, { ...e, anchor: h });
		return P(!1), f;
	} catch (f) {
		if (
			f instanceof Error &&
			f.message
				.split(`
`)
				.some((E) => E.startsWith('https://svelte.dev/e/'))
		)
			throw f;
		return (
			f !== ie && console.warn('Failed to hydrate: ', f),
			e.recover === !1 && Ke(),
			se(),
			Qe(s),
			P(!1),
			ct(i, e)
		);
	} finally {
		P(r), U(m);
	}
}
const W = new Map();
function Se(
	i,
	{ target: e, anchor: s, props: r = {}, events: m, context: h, intro: f = !0, transformError: E },
) {
	se();
	var l = void 0,
		c = Ze(() => {
			var V = s ?? e.appendChild(be());
			ot(
				V,
				{ pending: () => {} },
				(b) => {
					tt({});
					var T = Te;
					if (
						(h && (T.c = h),
						m && (r.$$events = m),
						O && at(b, null),
						(l = i(b, r) || {}),
						O && ((Y.nodes.end = F), F === null || F.nodeType !== we || F.data !== st))
					)
						throw (it(), ie);
					rt();
				},
				E,
			);
			var G = new Set(),
				K = (b) => {
					for (var T = 0; T < b.length; T++) {
						var w = b[T];
						if (!G.has(w)) {
							G.add(w);
							var j = lt(w);
							for (const Q of [e, document]) {
								var R = W.get(Q);
								R === void 0 && ((R = new Map()), W.set(Q, R));
								var fe = R.get(w);
								fe === void 0
									? (Q.addEventListener(w, ye, { passive: j }), R.set(w, 1))
									: R.set(w, fe + 1);
							}
						}
					}
				};
			return (
				K(et(nt)),
				ve.add(K),
				() => {
					var j;
					for (var b of G)
						for (const R of [e, document]) {
							var T = W.get(R),
								w = T.get(b);
							--w == 0
								? (R.removeEventListener(b, ye), T.delete(b), T.size === 0 && W.delete(R))
								: T.set(b, w);
						}
					ve.delete(K), V !== s && ((j = V.parentNode) == null || j.removeChild(V));
				}
			);
		});
	return he.set(l, c), l;
}
const he = new WeakMap();
function Et(i, e) {
	const s = he.get(i);
	return s ? (he.delete(i), s(e)) : Promise.resolve();
}

export { ct as m, Et as u, mt as h, yt as s };
