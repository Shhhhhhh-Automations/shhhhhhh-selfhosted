var Xs = Object.defineProperty;
var Po = (e) => {
	throw TypeError(e);
};
var Ws = (e, t, n) =>
	t in e ? Xs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var Ee = (e, t, n) => Ws(e, typeof t != 'symbol' ? t + '' : t, n),
	xr = (e, t, n) => t.has(e) || Po('Cannot ' + n);
var C = (e, t, n) => (xr(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	B = (e, t, n) =>
		t.has(e)
			? Po('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	sn = (e, t, n, r) => (xr(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
	Ao = (e, t, n) => (xr(e, t, 'access private method'), n);

import { i as ve } from '../chunks/89-NG9tb.js';
import { a as zn } from '../chunks/ad1oCDNU.js';
import {
	s as be,
	d as no,
	e as qe,
	S as sr,
	b as Ta,
	C as to,
	c as vt,
	a as yt,
	r as za,
} from '../chunks/BNYHR-rk.js';
import { b as En, s as It, c as oo, r as Pt, p as U } from '../chunks/BQqSQ0fF.js';
import { a as ir, o as Pa } from '../chunks/D4x0b2LA.js';
import { a as Fe, e as gn, o as Rr, d as ro } from '../chunks/DA0K5guU.js';
import { s as Ye } from '../chunks/DFfDkG9t.js';
import { a as Aa, s as Ce } from '../chunks/DiFkmEDl.js';
import {
	be as _a,
	d as _r,
	K as $e,
	at as $r,
	k as $s,
	bo as Ae,
	bd as Ai,
	Z as aa,
	M as ae,
	z as at,
	bp as Be,
	aI as b,
	R as ba,
	i as br,
	bh as Ca,
	f as Ci,
	J as c,
	b8 as ca,
	F as ce,
	G as D,
	X as Do,
	a as Dr,
	ar as da,
	a2 as Ea,
	b2 as Ei,
	b1 as ea,
	I as ee,
	bj as eo,
	b6 as et,
	m as fa,
	b0 as Gs,
	bl as Gt,
	u as ga,
	C as gt,
	j as Hr,
	g as ha,
	c as hn,
	bn as Ii,
	a7 as Io,
	b5 as ia,
	L as J,
	h as Je,
	aa as Js,
	au as js,
	A as ka,
	aM as ki,
	b7 as kr,
	w as la,
	D as le,
	bi as Ma,
	p as Mi,
	ap as ma,
	O as me,
	bq as Na,
	ao as Ni,
	a3 as na,
	bf as Oo,
	e as Ot,
	b4 as oa,
	Q as Pi,
	bc as pa,
	r as Qs,
	aZ as qs,
	b3 as ra,
	bg as Sa,
	an as Si,
	bm as Sn,
	aF as sa,
	bk as Ti,
	ag as To,
	am as Tt,
	l as ta,
	H as te,
	b as Us,
	b9 as ua,
	ba as va,
	ax as wa,
	bb as xa,
	av as ya,
	N as ye,
	aG as zi,
	s as zo,
} from '../chunks/njxCO7gR.js';
import { b as pr, a as q, c as Re, d as Se, f as se, t as Zs } from '../chunks/pYZ6ss2q.js';

const Ia = [];
function Oi(e, t = !1, n = !1) {
	return Vn(e, new Map(), '', Ia, null, n);
}
function Vn(e, t, n, r, o = null, s = !1) {
	if (typeof e == 'object' && e !== null) {
		var i = t.get(e);
		if (i !== void 0) return i;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (ki(e)) {
			var a = Array(e.length);
			t.set(e, a), o !== null && t.set(o, a);
			for (var l = 0; l < e.length; l += 1) {
				var d = e[l];
				l in e && (a[l] = Vn(d, t, n, r, null, s));
			}
			return a;
		}
		if (qs(e) === Gs) {
			(a = {}), t.set(e, a), o !== null && t.set(o, a);
			for (var u of Object.keys(e)) a[u] = Vn(e[u], t, n, r, null, s);
			return a;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == 'function' && !s) return Vn(e.toJSON(), t, n, r, e);
	}
	if (e instanceof EventTarget) return e;
	try {
		return structuredClone(e);
	} catch {
		return e;
	}
}
function Oa(e, t, n) {
	for (var r = [], o = t.length, s, i = t.length, a = 0; a < o; a++) {
		const h = t[a];
		Mi(
			h,
			() => {
				if (s) {
					if ((s.pending.delete(h), s.done.add(h), s.pending.size === 0)) {
						var f = e.outrogroups;
						Lr(e, $r(s.done)), f.delete(s), f.size === 0 && (e.outrogroups = null);
					}
				} else i -= 1;
			},
			!1,
		);
	}
	if (i === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var d = n,
				u = d.parentNode;
			da(u), u.append(d), e.items.clear();
		}
		Lr(e, t, !l);
	} else
		(s = { pending: new Set(t), done: new Set() }),
			(e.outrogroups ?? (e.outrogroups = new Set())).add(s);
}
function Lr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (const i of e.pending.values()) for (const a of i) r.add(e.items.get(a).e);
	}
	for (var o = 0; o < t.length; o++) {
		var s = t[o];
		if (r != null && r.has(s)) {
			s.f |= et;
			const i = document.createDocumentFragment();
			fa(s, i);
		} else ha(t[o], n);
	}
}
var Ho;
function io(e, t, n, r, o, s = null) {
	var i = e,
		a = new Map(),
		l = (t & Ei) !== 0;
	if (l) {
		var d = e;
		i = Je ? hn(Tt(d)) : d.appendChild(br());
	}
	Je && Dr();
	var u = null,
		h = na(() => {
			var P = n();
			return ki(P) ? P : P == null ? [] : $r(P);
		}),
		f,
		g = new Map(),
		m = !0;
	function x(P) {
		O.effect.f & aa ||
			(O.pending.delete(P),
			(O.fallback = u),
			Da(O, f, i, t, r),
			u !== null &&
				(f.length === 0
					? u.f & et
						? ((u.f ^= et), un(u, null, i))
						: Ci(u)
					: Mi(u, () => {
							u = null;
						})));
	}
	function w(P) {
		O.pending.delete(P);
	}
	var S = Us(() => {
			f = c(h);
			var P = f.length;
			let A = !1;
			if (Je) {
				var H = Qs(i) === Js;
				H !== (P === 0) && ((i = zo()), hn(i), _r(!1), (A = !0));
			}
			for (var V = new Set(), F = $s, Q = ta(), Y = 0; Y < P; Y += 1) {
				Je && Ot.nodeType === Si && Ot.data === js && ((i = Ot), (A = !0), _r(!1));
				var $ = f[Y],
					M = r($, Y),
					p = m ? null : a.get(M);
				p
					? (p.v && To(p.v, $), p.i && To(p.i, Y), Q && F.unskip_effect(p.e))
					: ((p = Ha(a, m ? i : (Ho ?? (Ho = br())), $, M, Y, o, t, n)),
						m || (p.e.f |= et),
						a.set(M, p)),
					V.add(M);
			}
			if (
				(P === 0 &&
					s &&
					!u &&
					(m ? (u = Hr(() => s(i))) : ((u = Hr(() => s(Ho ?? (Ho = br())))), (u.f |= et))),
				P > V.size && ea(),
				Je && P > 0 && hn(zo()),
				!m)
			)
				if ((g.set(F, V), Q)) {
					for (const [N, v] of a) V.has(N) || F.skip_effect(v.e);
					F.oncommit(x), F.ondiscard(w);
				} else x(F);
			A && _r(!0), c(h);
		}),
		O = { effect: S, items: a, pending: g, outrogroups: null, fallback: u };
	(m = !1), Je && (i = Ot);
}
function an(e) {
	for (; e !== null && !(e.f & ca); ) e = e.next;
	return e;
}
function Da(e, t, n, r, o) {
	var $, M, p, N, v, E, y, k, I;
	var s = (r & ua) !== 0,
		i = t.length,
		a = e.items,
		l = an(e.effect.first),
		d,
		u = null,
		h,
		f = [],
		g = [],
		m,
		x,
		w,
		S;
	if (s)
		for (S = 0; S < i; S += 1)
			(m = t[S]),
				(x = o(m, S)),
				(w = a.get(x).e),
				w.f & et ||
					((M = ($ = w.nodes) == null ? void 0 : $.a) == null || M.measure(),
					(h ?? (h = new Set())).add(w));
	for (S = 0; S < i; S += 1) {
		if (((m = t[S]), (x = o(m, S)), (w = a.get(x).e), e.outrogroups !== null))
			for (const z of e.outrogroups) z.pending.delete(w), z.done.delete(w);
		if (
			(w.f & kr &&
				(Ci(w),
				s &&
					((N = (p = w.nodes) == null ? void 0 : p.a) == null || N.unfix(),
					(h ?? (h = new Set())).delete(w))),
			w.f & et)
		)
			if (((w.f ^= et), w === l)) un(w, null, n);
			else {
				var O = u ? u.next : l;
				w === e.effect.last && (e.effect.last = w.prev),
					w.prev && (w.prev.next = w.next),
					w.next && (w.next.prev = w.prev),
					dt(e, u, w),
					dt(e, w, O),
					un(w, O, n),
					(u = w),
					(f = []),
					(g = []),
					(l = an(u.next));
				continue;
			}
		if (w !== l) {
			if (d !== void 0 && d.has(w)) {
				if (f.length < g.length) {
					var P = g[0],
						A;
					u = P.prev;
					var H = f[0],
						V = f[f.length - 1];
					for (A = 0; A < f.length; A += 1) un(f[A], P, n);
					for (A = 0; A < g.length; A += 1) d.delete(g[A]);
					dt(e, H.prev, V.next),
						dt(e, u, H),
						dt(e, V, P),
						(l = P),
						(u = V),
						(S -= 1),
						(f = []),
						(g = []);
				} else
					d.delete(w),
						un(w, l, n),
						dt(e, w.prev, w.next),
						dt(e, w, u === null ? e.effect.first : u.next),
						dt(e, u, w),
						(u = w);
				continue;
			}
			for (f = [], g = []; l !== null && l !== w; )
				(d ?? (d = new Set())).add(l), g.push(l), (l = an(l.next));
			if (l === null) continue;
		}
		w.f & et || f.push(w), (u = w), (l = an(w.next));
	}
	if (e.outrogroups !== null) {
		for (const z of e.outrogroups)
			z.pending.size === 0 && (Lr(e, $r(z.done)), (v = e.outrogroups) == null || v.delete(z));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || d !== void 0) {
		var F = [];
		if (d !== void 0) for (w of d) w.f & kr || F.push(w);
		for (; l !== null; ) !(l.f & kr) && l !== e.fallback && F.push(l), (l = an(l.next));
		var Q = F.length;
		if (Q > 0) {
			var Y = r & Ei && i === 0 ? n : null;
			if (s) {
				for (S = 0; S < Q; S += 1)
					(y = (E = F[S].nodes) == null ? void 0 : E.a) == null || y.measure();
				for (S = 0; S < Q; S += 1) (I = (k = F[S].nodes) == null ? void 0 : k.a) == null || I.fix();
			}
			Oa(e, F, Y);
		}
	}
	s &&
		la(() => {
			var z, T;
			if (h !== void 0)
				for (w of h) (T = (z = w.nodes) == null ? void 0 : z.a) == null || T.apply();
		});
}
function Ha(e, t, n, r, o, s, i, a) {
	var l = i & oa ? (i & ia ? Io(n) : sa(n, !1, !1)) : null,
		d = i & ra ? Io(o) : null;
	return {
		v: l,
		i: d,
		e: Hr(
			() => (
				s(t, l ?? n, d ?? o, a),
				() => {
					e.delete(r);
				}
			),
		),
	};
}
function un(e, t, n) {
	if (e.nodes)
		for (
			var r = e.nodes.start, o = e.nodes.end, s = t && !(t.f & et) ? t.nodes.start : n;
			r !== null;
		) {
			var i = Ni(r);
			if ((s.before(r), r === o)) return;
			r = i;
		}
}
function dt(e, t, n) {
	t === null ? (e.effect.first = n) : (t.next = n), n === null ? (e.effect.last = t) : (n.prev = t);
}
function so(e, t, n = !1, r = !1, o = !1, s = !1) {
	var i = e,
		a = '';
	if (n) {
		var l = e;
		Je && (i = hn(Tt(l)));
	}
	ye(() => {
		var d = ga;
		if (a === (a = t() ?? '')) {
			Je && Dr();
			return;
		}
		if (n && !Je) {
			(d.nodes = null), (l.innerHTML = a), a !== '' && pr(Tt(l), l.lastChild);
			return;
		}
		if ((d.nodes !== null && (va(d.nodes.start, d.nodes.end), (d.nodes = null)), a !== '')) {
			if (Je) {
				Ot.data;
				for (var u = Dr(), h = u; u !== null && (u.nodeType !== Si || u.data !== ''); )
					(h = u), (u = Ni(u));
				if (u === null) throw (ya(), ma);
				pr(Ot, h), (i = hn(u));
				return;
			}
			var f = r ? xa : o ? pa : void 0,
				g = wa(r ? 'svg' : o ? 'math' : 'template', f);
			g.innerHTML = a;
			var m = r || o ? g : g.content;
			if ((pr(Tt(m), m.lastChild), r || o)) for (; Tt(m); ) i.before(Tt(m));
			else i.before(m);
		}
	});
}
function Ie(e, t, n) {
	Pi(() => {
		var r = gt(() => t(e, n == null ? void 0 : n()) || {});
		if (n && r != null && r.update) {
			var o = !1,
				s = {};
			ba(() => {
				var i = n();
				Ai(i), o && _a(s, i) && ((s = i), r.update(i));
			}),
				(o = !0);
		}
		if (r != null && r.destroy) return () => r.destroy();
	});
}
var ht, Kt, bn, rr, Di;
const or = class or {
	constructor(t) {
		B(this, rr);
		B(this, ht, new WeakMap());
		B(this, Kt);
		B(this, bn);
		sn(this, bn, t);
	}
	observe(t, n) {
		var r = C(this, ht).get(t) || new Set();
		return (
			r.add(n),
			C(this, ht).set(t, r),
			Ao(this, rr, Di).call(this).observe(t, C(this, bn)),
			() => {
				var o = C(this, ht).get(t);
				o.delete(n), o.size === 0 && (C(this, ht).delete(t), C(this, Kt).unobserve(t));
			}
		);
	}
};
(ht = new WeakMap()),
	(Kt = new WeakMap()),
	(bn = new WeakMap()),
	(rr = new WeakSet()),
	(Di = function () {
		return (
			C(this, Kt) ??
			sn(
				this,
				Kt,
				new ResizeObserver((t) => {
					for (var n of t) {
						or.entries.set(n.target, n);
						for (var r of C(this, ht).get(n.target) || []) r(n);
					}
				}),
			)
		);
	}),
	Ee(or, 'entries', new WeakMap());
const Vr = or;
var Ra = new Vr({ box: 'border-box' });
function Ro(e, t, n) {
	var r = Ra.observe(e, () => n(e[t]));
	Pi(() => (gt(() => n(e[t])), r));
}
function La(e = !1) {
	const t = ka,
		n = t.l.u;
	if (!n) return;
	let r = () => Ai(t.s);
	if (e) {
		let o = 0,
			s = {};
		const i = Ea(() => {
			let a = !1;
			const l = t.s;
			for (const d in l) l[d] !== s[d] && ((s[d] = l[d]), (a = !0));
			return a && o++, o;
		});
		r = () => c(i);
	}
	n.b.length &&
		zi(() => {
			Lo(t, r), Oo(n.b);
		}),
		at(() => {
			const o = gt(() => n.m.map(Sa));
			return () => {
				for (const s of o) typeof s == 'function' && s();
			};
		}),
		n.a.length &&
			at(() => {
				Lo(t, r), Oo(n.a);
			});
}
function Lo(e, t) {
	if (e.l.s) for (const n of e.l.s) c(n);
	t();
}
Ca();
var Va = { value: () => {} };
function ar() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + '') || r in n || /[\s.]/.test(r))
			throw new Error('illegal type: ' + r);
		n[r] = [];
	}
	return new Kn(n);
}
function Kn(e) {
	this._ = e;
}
function Ka(e, t) {
	return e
		.trim()
		.split(/^|\s+/)
		.map((n) => {
			var r = '',
				o = n.indexOf('.');
			if ((o >= 0 && ((r = n.slice(o + 1)), (n = n.slice(0, o))), n && !Object.hasOwn(t, n)))
				throw new Error('unknown type: ' + n);
			return { type: n, name: r };
		});
}
Kn.prototype = ar.prototype = {
	constructor: Kn,
	on: function (e, t) {
		var n = this._,
			r = Ka(e + '', n),
			o,
			s = -1,
			i = r.length;
		if (arguments.length < 2) {
			for (; ++s < i; ) if ((o = (e = r[s]).type) && (o = Ba(n[o], e.name))) return o;
			return;
		}
		if (t != null && typeof t != 'function') throw new Error('invalid callback: ' + t);
		for (; ++s < i; )
			if ((o = (e = r[s]).type)) n[o] = Vo(n[o], e.name, t);
			else if (t == null) for (o in n) n[o] = Vo(n[o], e.name, null);
		return this;
	},
	copy: function () {
		var e = {},
			t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new Kn(e);
	},
	call: function (e, t) {
		if ((o = arguments.length - 2) > 0)
			for (var n = new Array(o), r = 0, o, s; r < o; ++r) n[r] = arguments[r + 2];
		if (!Object.hasOwn(this._, e)) throw new Error('unknown type: ' + e);
		for (s = this._[e], r = 0, o = s.length; r < o; ++r) s[r].value.apply(t, n);
	},
	apply: function (e, t, n) {
		if (!Object.hasOwn(this._, e)) throw new Error('unknown type: ' + e);
		for (var r = this._[e], o = 0, s = r.length; o < s; ++o) r[o].value.apply(t, n);
	},
};
function Ba(e, t) {
	for (var n = 0, r = e.length, o; n < r; ++n) if ((o = e[n]).name === t) return o.value;
}
function Vo(e, t, n) {
	for (var r = 0, o = e.length; r < o; ++r)
		if (e[r].name === t) {
			(e[r] = Va), (e = e.slice(0, r).concat(e.slice(r + 1)));
			break;
		}
	return n != null && e.push({ name: t, value: n }), e;
}
var Kr = 'http://www.w3.org/1999/xhtml';
const Ko = {
	svg: 'http://www.w3.org/2000/svg',
	xhtml: Kr,
	xlink: 'http://www.w3.org/1999/xlink',
	xml: 'http://www.w3.org/XML/1998/namespace',
	xmlns: 'http://www.w3.org/2000/xmlns/',
};
function lr(e) {
	var t = (e += ''),
		n = t.indexOf(':');
	return (
		n >= 0 && (t = e.slice(0, n)) !== 'xmlns' && (e = e.slice(n + 1)),
		Object.hasOwn(Ko, t) ? { space: Ko[t], local: e } : e
	);
}
function Fa(e) {
	return function () {
		var t = this.ownerDocument,
			n = this.namespaceURI;
		return n === Kr && t.documentElement.namespaceURI === Kr
			? t.createElement(e)
			: t.createElementNS(n, e);
	};
}
function Ya(e) {
	return function () {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function Hi(e) {
	var t = lr(e);
	return (t.local ? Ya : Fa)(t);
}
function Xa() {}
function ao(e) {
	return e == null
		? Xa
		: function () {
				return this.querySelector(e);
			};
}
function Wa(e) {
	typeof e != 'function' && (e = ao(e));
	for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
		for (var s = t[o], i = s.length, a = (r[o] = new Array(i)), l, d, u = 0; u < i; ++u)
			(l = s[u]) &&
				(d = e.call(l, l.__data__, u, s)) &&
				('__data__' in l && (d.__data__ = l.__data__), (a[u] = d));
	return new Le(r, this._parents);
}
function Za(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function qa() {
	return [];
}
function Ri(e) {
	return e == null
		? qa
		: function () {
				return this.querySelectorAll(e);
			};
}
function Ga(e) {
	return function () {
		return Za(e.apply(this, arguments));
	};
}
function Ua(e) {
	typeof e == 'function' ? (e = Ga(e)) : (e = Ri(e));
	for (var t = this._groups, n = t.length, r = [], o = [], s = 0; s < n; ++s)
		for (var i = t[s], a = i.length, l, d = 0; d < a; ++d)
			(l = i[d]) && (r.push(e.call(l, l.__data__, d, i)), o.push(l));
	return new Le(r, o);
}
function Li(e) {
	return function () {
		return this.matches(e);
	};
}
function Vi(e) {
	return (t) => t.matches(e);
}
var Qa = Array.prototype.find;
function Ja(e) {
	return function () {
		return Qa.call(this.children, e);
	};
}
function ja() {
	return this.firstElementChild;
}
function $a(e) {
	return this.select(e == null ? ja : Ja(typeof e == 'function' ? e : Vi(e)));
}
var el = Array.prototype.filter;
function tl() {
	return Array.from(this.children);
}
function nl(e) {
	return function () {
		return el.call(this.children, e);
	};
}
function rl(e) {
	return this.selectAll(e == null ? tl : nl(typeof e == 'function' ? e : Vi(e)));
}
function ol(e) {
	typeof e != 'function' && (e = Li(e));
	for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
		for (var s = t[o], i = s.length, a = (r[o] = []), l, d = 0; d < i; ++d)
			(l = s[d]) && e.call(l, l.__data__, d, s) && a.push(l);
	return new Le(r, this._parents);
}
function Ki(e) {
	return new Array(e.length);
}
function il() {
	return new Le(this._enter || this._groups.map(Ki), this._parents);
}
function Wn(e, t) {
	(this.ownerDocument = e.ownerDocument),
		(this.namespaceURI = e.namespaceURI),
		(this._next = null),
		(this._parent = e),
		(this.__data__ = t);
}
Wn.prototype = {
	constructor: Wn,
	appendChild: function (e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function (e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function (e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function (e) {
		return this._parent.querySelectorAll(e);
	},
};
function sl(e) {
	return () => e;
}
function al(e, t, n, r, o, s) {
	for (var i = 0, a, l = t.length, d = s.length; i < d; ++i)
		(a = t[i]) ? ((a.__data__ = s[i]), (r[i] = a)) : (n[i] = new Wn(e, s[i]));
	for (; i < l; ++i) (a = t[i]) && (o[i] = a);
}
function ll(e, t, n, r, o, s, i) {
	var a,
		l,
		d = new Map(),
		u = t.length,
		h = s.length,
		f = new Array(u),
		g;
	for (a = 0; a < u; ++a)
		(l = t[a]) &&
			((f[a] = g = i.call(l, l.__data__, a, t) + ''), d.has(g) ? (o[a] = l) : d.set(g, l));
	for (a = 0; a < h; ++a)
		(g = i.call(e, s[a], a, s) + ''),
			(l = d.get(g)) ? ((r[a] = l), (l.__data__ = s[a]), d.delete(g)) : (n[a] = new Wn(e, s[a]));
	for (a = 0; a < u; ++a) (l = t[a]) && d.get(f[a]) === l && (o[a] = l);
}
function cl(e) {
	return e.__data__;
}
function ul(e, t) {
	if (!arguments.length) return Array.from(this, cl);
	var n = t ? ll : al,
		r = this._parents,
		o = this._groups;
	typeof e != 'function' && (e = sl(e));
	for (var s = o.length, i = new Array(s), a = new Array(s), l = new Array(s), d = 0; d < s; ++d) {
		var u = r[d],
			h = o[d],
			f = h.length,
			g = dl(e.call(u, u && u.__data__, d, r)),
			m = g.length,
			x = (a[d] = new Array(m)),
			w = (i[d] = new Array(m)),
			S = (l[d] = new Array(f));
		n(u, h, x, w, S, g, t);
		for (var O = 0, P = 0, A, H; O < m; ++O)
			if ((A = x[O])) {
				for (O >= P && (P = O + 1); !(H = w[P]) && ++P < m; );
				A._next = H || null;
			}
	}
	return (i = new Le(i, r)), (i._enter = a), (i._exit = l), i;
}
function dl(e) {
	return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function fl() {
	return new Le(this._exit || this._groups.map(Ki), this._parents);
}
function hl(e, t, n) {
	var r = this.enter(),
		o = this,
		s = this.exit();
	return (
		typeof e == 'function' ? ((r = e(r)), r && (r = r.selection())) : (r = r.append(e + '')),
		t != null && ((o = t(o)), o && (o = o.selection())),
		n == null ? s.remove() : n(s),
		r && o ? r.merge(o).order() : o
	);
}
function gl(e) {
	for (
		var t = e.selection ? e.selection() : e,
			n = this._groups,
			r = t._groups,
			o = n.length,
			s = r.length,
			i = Math.min(o, s),
			a = new Array(o),
			l = 0;
		l < i;
		++l
	)
		for (var d = n[l], u = r[l], h = d.length, f = (a[l] = new Array(h)), g, m = 0; m < h; ++m)
			(g = d[m] || u[m]) && (f[m] = g);
	for (; l < o; ++l) a[l] = n[l];
	return new Le(a, this._parents);
}
function vl() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n; )
		for (var r = e[t], o = r.length - 1, s = r[o], i; --o >= 0; )
			(i = r[o]) &&
				(s && i.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(i, s), (s = i));
	return this;
}
function yl(e) {
	e || (e = ml);
	function t(h, f) {
		return h && f ? e(h.__data__, f.__data__) : !h - !f;
	}
	for (var n = this._groups, r = n.length, o = new Array(r), s = 0; s < r; ++s) {
		for (var i = n[s], a = i.length, l = (o[s] = new Array(a)), d, u = 0; u < a; ++u)
			(d = i[u]) && (l[u] = d);
		l.sort(t);
	}
	return new Le(o, this._parents).order();
}
function ml(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function wl() {
	var e = arguments[0];
	return (arguments[0] = this), e.apply(null, arguments), this;
}
function xl() {
	return Array.from(this);
}
function pl() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
		for (var r = e[t], o = 0, s = r.length; o < s; ++o) {
			var i = r[o];
			if (i) return i;
		}
	return null;
}
function bl() {
	let e = 0;
	for (const t of this) ++e;
	return e;
}
function _l() {
	return !this.node();
}
function kl(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
		for (var o = t[n], s = 0, i = o.length, a; s < i; ++s)
			(a = o[s]) && e.call(a, a.__data__, s, o);
	return this;
}
function Sl(e) {
	return function () {
		this.removeAttribute(e);
	};
}
function El(e) {
	return function () {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Cl(e, t) {
	return function () {
		this.setAttribute(e, t);
	};
}
function Ml(e, t) {
	return function () {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Nl(e, t) {
	return function () {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Pl(e, t) {
	return function () {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Al(e, t) {
	var n = lr(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each(
		(t == null
			? n.local
				? El
				: Sl
			: typeof t == 'function'
				? n.local
					? Pl
					: Nl
				: n.local
					? Ml
					: Cl)(n, t),
	);
}
function Bi(e) {
	return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
}
function zl(e) {
	return function () {
		this.style.removeProperty(e);
	};
}
function Tl(e, t, n) {
	return function () {
		this.style.setProperty(e, t, n);
	};
}
function Il(e, t, n) {
	return function () {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Ol(e, t, n) {
	return arguments.length > 1
		? this.each((t == null ? zl : typeof t == 'function' ? Il : Tl)(e, t, n ?? ''))
		: Bt(this.node(), e);
}
function Bt(e, t) {
	return e.style.getPropertyValue(t) || Bi(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Dl(e) {
	return function () {
		delete this[e];
	};
}
function Hl(e, t) {
	return function () {
		this[e] = t;
	};
}
function Rl(e, t) {
	return function () {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : (this[e] = n);
	};
}
function Ll(e, t) {
	return arguments.length > 1
		? this.each((t == null ? Dl : typeof t == 'function' ? Rl : Hl)(e, t))
		: this.node()[e];
}
function Fi(e) {
	return e.trim().split(/^|\s+/);
}
function lo(e) {
	return e.classList || new Yi(e);
}
function Yi(e) {
	(this._node = e), (this._names = Fi(e.getAttribute('class') || ''));
}
Yi.prototype = {
	add: function (e) {
		var t = this._names.indexOf(e);
		t < 0 && (this._names.push(e), this._node.setAttribute('class', this._names.join(' ')));
	},
	remove: function (e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute('class', this._names.join(' ')));
	},
	contains: function (e) {
		return this._names.indexOf(e) >= 0;
	},
};
function Xi(e, t) {
	for (var n = lo(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Wi(e, t) {
	for (var n = lo(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Vl(e) {
	return function () {
		Xi(this, e);
	};
}
function Kl(e) {
	return function () {
		Wi(this, e);
	};
}
function Bl(e, t) {
	return function () {
		(t.apply(this, arguments) ? Xi : Wi)(this, e);
	};
}
function Fl(e, t) {
	var n = Fi(e + '');
	if (arguments.length < 2) {
		for (var r = lo(this.node()), o = -1, s = n.length; ++o < s; ) if (!r.contains(n[o])) return !1;
		return !0;
	}
	return this.each((typeof t == 'function' ? Bl : t ? Vl : Kl)(n, t));
}
function Yl() {
	this.textContent = '';
}
function Xl(e) {
	return function () {
		this.textContent = e;
	};
}
function Wl(e) {
	return function () {
		var t = e.apply(this, arguments);
		this.textContent = t ?? '';
	};
}
function Zl(e) {
	return arguments.length
		? this.each(e == null ? Yl : (typeof e == 'function' ? Wl : Xl)(e))
		: this.node().textContent;
}
function ql() {
	this.innerHTML = '';
}
function Gl(e) {
	return function () {
		this.innerHTML = e;
	};
}
function Ul(e) {
	return function () {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? '';
	};
}
function Ql(e) {
	return arguments.length
		? this.each(e == null ? ql : (typeof e == 'function' ? Ul : Gl)(e))
		: this.node().innerHTML;
}
function Jl() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function jl() {
	return this.each(Jl);
}
function $l() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ec() {
	return this.each($l);
}
function tc(e) {
	var t = typeof e == 'function' ? e : Hi(e);
	return this.select(function () {
		return this.appendChild(t.apply(this, arguments));
	});
}
function nc() {
	return null;
}
function rc(e, t) {
	var n = typeof e == 'function' ? e : Hi(e),
		r = t == null ? nc : typeof t == 'function' ? t : ao(t);
	return this.select(function () {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
function oc() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function ic() {
	return this.each(oc);
}
function sc() {
	var e = this.cloneNode(!1),
		t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ac() {
	var e = this.cloneNode(!0),
		t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function lc(e) {
	return this.select(e ? ac : sc);
}
function cc(e) {
	return arguments.length ? this.property('__data__', e) : this.node().__data__;
}
function uc(e) {
	return function (t) {
		e.call(this, t, this.__data__);
	};
}
function dc(e) {
	return e
		.trim()
		.split(/^|\s+/)
		.map((t) => {
			var n = '',
				r = t.indexOf('.');
			return r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))), { type: t, name: n };
		});
}
function fc(e) {
	return function () {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, o = t.length, s; n < o; ++n)
				(s = t[n]),
					(!e.type || s.type === e.type) && s.name === e.name
						? this.removeEventListener(s.type, s.listener, s.options)
						: (t[++r] = s);
			++r ? (t.length = r) : delete this.__on;
		}
	};
}
function hc(e, t, n) {
	return function () {
		var r = this.__on,
			o,
			s = uc(t);
		if (r) {
			for (var i = 0, a = r.length; i < a; ++i)
				if ((o = r[i]).type === e.type && o.name === e.name) {
					this.removeEventListener(o.type, o.listener, o.options),
						this.addEventListener(o.type, (o.listener = s), (o.options = n)),
						(o.value = t);
					return;
				}
		}
		this.addEventListener(e.type, s, n),
			(o = { type: e.type, name: e.name, value: t, listener: s, options: n }),
			r ? r.push(o) : (this.__on = [o]);
	};
}
function gc(e, t, n) {
	var r = dc(e + ''),
		o,
		s = r.length,
		i;
	if (arguments.length < 2) {
		var a = this.node().__on;
		if (a) {
			for (var l = 0, d = a.length, u; l < d; ++l)
				for (o = 0, u = a[l]; o < s; ++o)
					if ((i = r[o]).type === u.type && i.name === u.name) return u.value;
		}
		return;
	}
	for (a = t ? hc : fc, o = 0; o < s; ++o) this.each(a(r[o], t, n));
	return this;
}
function Zi(e, t, n) {
	var r = Bi(e),
		o = r.CustomEvent;
	typeof o == 'function'
		? (o = new o(t, n))
		: ((o = r.document.createEvent('Event')),
			n
				? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail))
				: o.initEvent(t, !1, !1)),
		e.dispatchEvent(o);
}
function vc(e, t) {
	return function () {
		return Zi(this, e, t);
	};
}
function yc(e, t) {
	return function () {
		return Zi(this, e, t.apply(this, arguments));
	};
}
function mc(e, t) {
	return this.each((typeof t == 'function' ? yc : vc)(e, t));
}
function* wc() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
		for (var r = e[t], o = 0, s = r.length, i; o < s; ++o) (i = r[o]) && (yield i);
}
var qi = [null];
function Le(e, t) {
	(this._groups = e), (this._parents = t);
}
function Cn() {
	return new Le([[document.documentElement]], qi);
}
function xc() {
	return this;
}
Le.prototype = Cn.prototype = {
	constructor: Le,
	select: Wa,
	selectAll: Ua,
	selectChild: $a,
	selectChildren: rl,
	filter: ol,
	data: ul,
	enter: il,
	exit: fl,
	join: hl,
	merge: gl,
	selection: xc,
	order: vl,
	sort: yl,
	call: wl,
	nodes: xl,
	node: pl,
	size: bl,
	empty: _l,
	each: kl,
	attr: Al,
	style: Ol,
	property: Ll,
	classed: Fl,
	text: Zl,
	html: Ql,
	raise: jl,
	lower: ec,
	append: tc,
	insert: rc,
	remove: ic,
	clone: lc,
	datum: cc,
	on: gc,
	dispatch: mc,
	[Symbol.iterator]: wc,
};
function Xe(e) {
	return typeof e == 'string'
		? new Le([[document.querySelector(e)]], [document.documentElement])
		: new Le([[e]], qi);
}
function pc(e) {
	let t;
	for (; (t = e.sourceEvent); ) e = t;
	return e;
}
function Qe(e, t) {
	if (((e = pc(e)), t === void 0 && (t = e.currentTarget), t)) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return (
				(r.x = e.clientX),
				(r.y = e.clientY),
				(r = r.matrixTransform(t.getScreenCTM().inverse())),
				[r.x, r.y]
			);
		}
		if (t.getBoundingClientRect) {
			var o = t.getBoundingClientRect();
			return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
const bc = { passive: !1 },
	yn = { capture: !0, passive: !1 };
function Sr(e) {
	e.stopImmediatePropagation();
}
function Ht(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function Gi(e) {
	var t = e.document.documentElement,
		n = Xe(e).on('dragstart.drag', Ht, yn);
	'onselectstart' in t
		? n.on('selectstart.drag', Ht, yn)
		: ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = 'none'));
}
function Ui(e, t) {
	var n = e.document.documentElement,
		r = Xe(e).on('dragstart.drag', null);
	t &&
		(r.on('click.drag', Ht, yn),
		setTimeout(() => {
			r.on('click.drag', null);
		}, 0)),
		'onselectstart' in n
			? r.on('selectstart.drag', null)
			: ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
}
const Tn = (e) => () => e;
function Br(
	e,
	{
		sourceEvent: t,
		subject: n,
		target: r,
		identifier: o,
		active: s,
		x: i,
		y: a,
		dx: l,
		dy: d,
		dispatch: u,
	},
) {
	Object.defineProperties(this, {
		type: { value: e, enumerable: !0, configurable: !0 },
		sourceEvent: { value: t, enumerable: !0, configurable: !0 },
		subject: { value: n, enumerable: !0, configurable: !0 },
		target: { value: r, enumerable: !0, configurable: !0 },
		identifier: { value: o, enumerable: !0, configurable: !0 },
		active: { value: s, enumerable: !0, configurable: !0 },
		x: { value: i, enumerable: !0, configurable: !0 },
		y: { value: a, enumerable: !0, configurable: !0 },
		dx: { value: l, enumerable: !0, configurable: !0 },
		dy: { value: d, enumerable: !0, configurable: !0 },
		_: { value: u },
	});
}
Br.prototype.on = function () {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
function _c(e) {
	return !e.ctrlKey && !e.button;
}
function kc() {
	return this.parentNode;
}
function Sc(e, t) {
	return t ?? { x: e.x, y: e.y };
}
function Ec() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function Cc() {
	var e = _c,
		t = kc,
		n = Sc,
		r = Ec,
		o = {},
		s = ar('start', 'drag', 'end'),
		i = 0,
		a,
		l,
		d,
		u,
		h = 0;
	function f(A) {
		A.on('mousedown.drag', g)
			.filter(r)
			.on('touchstart.drag', w)
			.on('touchmove.drag', S, bc)
			.on('touchend.drag touchcancel.drag', O)
			.style('touch-action', 'none')
			.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	function g(A, H) {
		if (!(u || !e.call(this, A, H))) {
			var V = P(this, t.call(this, A, H), A, H, 'mouse');
			V &&
				(Xe(A.view).on('mousemove.drag', m, yn).on('mouseup.drag', x, yn),
				Gi(A.view),
				Sr(A),
				(d = !1),
				(a = A.clientX),
				(l = A.clientY),
				V('start', A));
		}
	}
	function m(A) {
		if ((Ht(A), !d)) {
			var H = A.clientX - a,
				V = A.clientY - l;
			d = H * H + V * V > h;
		}
		o.mouse('drag', A);
	}
	function x(A) {
		Xe(A.view).on('mousemove.drag mouseup.drag', null), Ui(A.view, d), Ht(A), o.mouse('end', A);
	}
	function w(A, H) {
		if (e.call(this, A, H)) {
			var V = A.changedTouches,
				F = t.call(this, A, H),
				Q = V.length,
				Y,
				$;
			for (Y = 0; Y < Q; ++Y)
				($ = P(this, F, A, H, V[Y].identifier, V[Y])) && (Sr(A), $('start', A, V[Y]));
		}
	}
	function S(A) {
		var H = A.changedTouches,
			V = H.length,
			F,
			Q;
		for (F = 0; F < V; ++F) (Q = o[H[F].identifier]) && (Ht(A), Q('drag', A, H[F]));
	}
	function O(A) {
		var H = A.changedTouches,
			V = H.length,
			F,
			Q;
		for (
			u && clearTimeout(u),
				u = setTimeout(() => {
					u = null;
				}, 500),
				F = 0;
			F < V;
			++F
		)
			(Q = o[H[F].identifier]) && (Sr(A), Q('end', A, H[F]));
	}
	function P(A, H, V, F, Q, Y) {
		var $ = s.copy(),
			M = Qe(Y || V, H),
			p,
			N,
			v;
		if (
			(v = n.call(
				A,
				new Br('beforestart', {
					sourceEvent: V,
					target: f,
					identifier: Q,
					active: i,
					x: M[0],
					y: M[1],
					dx: 0,
					dy: 0,
					dispatch: $,
				}),
				F,
			)) != null
		)
			return (
				(p = v.x - M[0] || 0),
				(N = v.y - M[1] || 0),
				function E(y, k, I) {
					var z = M,
						T;
					switch (y) {
						case 'start':
							(o[Q] = E), (T = i++);
							break;
						case 'end':
							delete o[Q], --i;
						case 'drag':
							(M = Qe(I || k, H)), (T = i);
							break;
					}
					$.call(
						y,
						A,
						new Br(y, {
							sourceEvent: k,
							subject: v,
							target: f,
							identifier: Q,
							active: T,
							x: M[0] + p,
							y: M[1] + N,
							dx: M[0] - z[0],
							dy: M[1] - z[1],
							dispatch: $,
						}),
						F,
					);
				}
			);
	}
	return (
		(f.filter = function (A) {
			return arguments.length ? ((e = typeof A == 'function' ? A : Tn(!!A)), f) : e;
		}),
		(f.container = function (A) {
			return arguments.length ? ((t = typeof A == 'function' ? A : Tn(A)), f) : t;
		}),
		(f.subject = function (A) {
			return arguments.length ? ((n = typeof A == 'function' ? A : Tn(A)), f) : n;
		}),
		(f.touchable = function (A) {
			return arguments.length ? ((r = typeof A == 'function' ? A : Tn(!!A)), f) : r;
		}),
		(f.on = function () {
			var A = s.on.apply(s, arguments);
			return A === s ? f : A;
		}),
		(f.clickDistance = function (A) {
			return arguments.length ? ((h = (A = +A) * A), f) : Math.sqrt(h);
		}),
		f
	);
}
function co(e, t, n) {
	(e.prototype = t.prototype = n), (n.constructor = e);
}
function Qi(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
function Mn() {}
var mn = 0.7,
	Zn = 1 / mn,
	Rt = '\\s*([+-]?\\d+)\\s*',
	wn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
	tt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
	Mc = /^#([0-9a-f]{3,8})$/,
	Nc = new RegExp(`^rgb\\(${Rt},${Rt},${Rt}\\)$`),
	Pc = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`),
	Ac = new RegExp(`^rgba\\(${Rt},${Rt},${Rt},${wn}\\)$`),
	zc = new RegExp(`^rgba\\(${tt},${tt},${tt},${wn}\\)$`),
	Tc = new RegExp(`^hsl\\(${wn},${tt},${tt}\\)$`),
	Ic = new RegExp(`^hsla\\(${wn},${tt},${tt},${wn}\\)$`),
	Bo = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074,
	};
co(Mn, kt, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Fo,
	formatHex: Fo,
	formatHex8: Oc,
	formatHsl: Dc,
	formatRgb: Yo,
	toString: Yo,
});
function Fo() {
	return this.rgb().formatHex();
}
function Oc() {
	return this.rgb().formatHex8();
}
function Dc() {
	return Ji(this).formatHsl();
}
function Yo() {
	return this.rgb().formatRgb();
}
function kt(e) {
	var t, n;
	return (
		(e = (e + '').trim().toLowerCase()),
		(t = Mc.exec(e))
			? ((n = t[1].length),
				(t = parseInt(t[1], 16)),
				n === 6
					? Xo(t)
					: n === 3
						? new Oe(
								((t >> 8) & 15) | ((t >> 4) & 240),
								((t >> 4) & 15) | (t & 240),
								((t & 15) << 4) | (t & 15),
								1,
							)
						: n === 8
							? In((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
							: n === 4
								? In(
										((t >> 12) & 15) | ((t >> 8) & 240),
										((t >> 8) & 15) | ((t >> 4) & 240),
										((t >> 4) & 15) | (t & 240),
										(((t & 15) << 4) | (t & 15)) / 255,
									)
								: null)
			: (t = Nc.exec(e))
				? new Oe(t[1], t[2], t[3], 1)
				: (t = Pc.exec(e))
					? new Oe((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
					: (t = Ac.exec(e))
						? In(t[1], t[2], t[3], t[4])
						: (t = zc.exec(e))
							? In((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
							: (t = Tc.exec(e))
								? qo(t[1], t[2] / 100, t[3] / 100, 1)
								: (t = Ic.exec(e))
									? qo(t[1], t[2] / 100, t[3] / 100, t[4])
									: Object.hasOwn(Bo, e)
										? Xo(Bo[e])
										: e === 'transparent'
											? new Oe(NaN, NaN, NaN, 0)
											: null
	);
}
function Xo(e) {
	return new Oe((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function In(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new Oe(e, t, n, r);
}
function Hc(e) {
	return (
		e instanceof Mn || (e = kt(e)), e ? ((e = e.rgb()), new Oe(e.r, e.g, e.b, e.opacity)) : new Oe()
	);
}
function Fr(e, t, n, r) {
	return arguments.length === 1 ? Hc(e) : new Oe(e, t, n, r ?? 1);
}
function Oe(e, t, n, r) {
	(this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
co(
	Oe,
	Fr,
	Qi(Mn, {
		brighter(e) {
			return (
				(e = e == null ? Zn : Zn ** e), new Oe(this.r * e, this.g * e, this.b * e, this.opacity)
			);
		},
		darker(e) {
			return (
				(e = e == null ? mn : mn ** e), new Oe(this.r * e, this.g * e, this.b * e, this.opacity)
			);
		},
		rgb() {
			return this;
		},
		clamp() {
			return new Oe(_t(this.r), _t(this.g), _t(this.b), qn(this.opacity));
		},
		displayable() {
			return (
				-0.5 <= this.r &&
				this.r < 255.5 &&
				-0.5 <= this.g &&
				this.g < 255.5 &&
				-0.5 <= this.b &&
				this.b < 255.5 &&
				0 <= this.opacity &&
				this.opacity <= 1
			);
		},
		hex: Wo,
		formatHex: Wo,
		formatHex8: Rc,
		formatRgb: Zo,
		toString: Zo,
	}),
);
function Wo() {
	return `#${bt(this.r)}${bt(this.g)}${bt(this.b)}`;
}
function Rc() {
	return `#${bt(this.r)}${bt(this.g)}${bt(this.b)}${bt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Zo() {
	const e = qn(this.opacity);
	return `${e === 1 ? 'rgb(' : 'rgba('}${_t(this.r)}, ${_t(this.g)}, ${_t(this.b)}${e === 1 ? ')' : `, ${e})`}`;
}
function qn(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function _t(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function bt(e) {
	return (e = _t(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function qo(e, t, n, r) {
	return (
		r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
		new We(e, t, n, r)
	);
}
function Ji(e) {
	if (e instanceof We) return new We(e.h, e.s, e.l, e.opacity);
	if ((e instanceof Mn || (e = kt(e)), !e)) return new We();
	if (e instanceof We) return e;
	e = e.rgb();
	var t = e.r / 255,
		n = e.g / 255,
		r = e.b / 255,
		o = Math.min(t, n, r),
		s = Math.max(t, n, r),
		i = NaN,
		a = s - o,
		l = (s + o) / 2;
	return (
		a
			? (t === s
					? (i = (n - r) / a + (n < r) * 6)
					: n === s
						? (i = (r - t) / a + 2)
						: (i = (t - n) / a + 4),
				(a /= l < 0.5 ? s + o : 2 - s - o),
				(i *= 60))
			: (a = l > 0 && l < 1 ? 0 : i),
		new We(i, a, l, e.opacity)
	);
}
function Lc(e, t, n, r) {
	return arguments.length === 1 ? Ji(e) : new We(e, t, n, r ?? 1);
}
function We(e, t, n, r) {
	(this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
co(
	We,
	Lc,
	Qi(Mn, {
		brighter(e) {
			return (e = e == null ? Zn : Zn ** e), new We(this.h, this.s, this.l * e, this.opacity);
		},
		darker(e) {
			return (e = e == null ? mn : mn ** e), new We(this.h, this.s, this.l * e, this.opacity);
		},
		rgb() {
			var e = (this.h % 360) + (this.h < 0) * 360,
				t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
				n = this.l,
				r = n + (n < 0.5 ? n : 1 - n) * t,
				o = 2 * n - r;
			return new Oe(
				Er(e >= 240 ? e - 240 : e + 120, o, r),
				Er(e, o, r),
				Er(e < 120 ? e + 240 : e - 120, o, r),
				this.opacity,
			);
		},
		clamp() {
			return new We(Go(this.h), On(this.s), On(this.l), qn(this.opacity));
		},
		displayable() {
			return (
				((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
				0 <= this.l &&
				this.l <= 1 &&
				0 <= this.opacity &&
				this.opacity <= 1
			);
		},
		formatHsl() {
			const e = qn(this.opacity);
			return `${e === 1 ? 'hsl(' : 'hsla('}${Go(this.h)}, ${On(this.s) * 100}%, ${On(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
		},
	}),
);
function Go(e) {
	return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function On(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Er(e, t, n) {
	return (
		(e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t) *
		255
	);
}
const uo = (e) => () => e;
function Vc(e, t) {
	return (n) => e + n * t;
}
function Kc(e, t, n) {
	return (e = e ** n), (t = t ** n - e), (n = 1 / n), (r) => (e + r * t) ** n;
}
function Bc(e) {
	return (e = +e) == 1 ? ji : (t, n) => (n - t ? Kc(t, n, e) : uo(isNaN(t) ? n : t));
}
function ji(e, t) {
	var n = t - e;
	return n ? Vc(e, n) : uo(isNaN(e) ? t : e);
}
const Gn = (function e(t) {
	var n = Bc(t);
	function r(o, s) {
		var i = n((o = Fr(o)).r, (s = Fr(s)).r),
			a = n(o.g, s.g),
			l = n(o.b, s.b),
			d = ji(o.opacity, s.opacity);
		return (u) => ((o.r = i(u)), (o.g = a(u)), (o.b = l(u)), (o.opacity = d(u)), o + '');
	}
	return (r.gamma = e), r;
})(1);
function Fc(e, t) {
	t || (t = []);
	var n = e ? Math.min(t.length, e.length) : 0,
		r = t.slice(),
		o;
	return (s) => {
		for (o = 0; o < n; ++o) r[o] = e[o] * (1 - s) + t[o] * s;
		return r;
	};
}
function Yc(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Xc(e, t) {
	var n = t ? t.length : 0,
		r = e ? Math.min(n, e.length) : 0,
		o = new Array(r),
		s = new Array(n),
		i;
	for (i = 0; i < r; ++i) o[i] = vn(e[i], t[i]);
	for (; i < n; ++i) s[i] = t[i];
	return (a) => {
		for (i = 0; i < r; ++i) s[i] = o[i](a);
		return s;
	};
}
function Wc(e, t) {
	var n = new Date();
	return (e = +e), (t = +t), (r) => (n.setTime(e * (1 - r) + t * r), n);
}
function je(e, t) {
	return (e = +e), (t = +t), (n) => e * (1 - n) + t * n;
}
function Zc(e, t) {
	var n = {},
		r = {},
		o;
	(e === null || typeof e != 'object') && (e = {}),
		(t === null || typeof t != 'object') && (t = {});
	for (o in t) o in e ? (n[o] = vn(e[o], t[o])) : (r[o] = t[o]);
	return (s) => {
		for (o in n) r[o] = n[o](s);
		return r;
	};
}
var Yr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	Cr = new RegExp(Yr.source, 'g');
function qc(e) {
	return () => e;
}
function Gc(e) {
	return (t) => e(t) + '';
}
function $i(e, t) {
	var n = (Yr.lastIndex = Cr.lastIndex = 0),
		r,
		o,
		s,
		i = -1,
		a = [],
		l = [];
	for (e = e + '', t = t + ''; (r = Yr.exec(e)) && (o = Cr.exec(t)); )
		(s = o.index) > n && ((s = t.slice(n, s)), a[i] ? (a[i] += s) : (a[++i] = s)),
			(r = r[0]) === (o = o[0])
				? a[i]
					? (a[i] += o)
					: (a[++i] = o)
				: ((a[++i] = null), l.push({ i, x: je(r, o) })),
			(n = Cr.lastIndex);
	return (
		n < t.length && ((s = t.slice(n)), a[i] ? (a[i] += s) : (a[++i] = s)),
		a.length < 2
			? l[0]
				? Gc(l[0].x)
				: qc(t)
			: ((t = l.length),
				(d) => {
					for (var u = 0, h; u < t; ++u) a[(h = l[u]).i] = h.x(d);
					return a.join('');
				})
	);
}
function vn(e, t) {
	var n = typeof t,
		r;
	return t == null || n === 'boolean'
		? uo(t)
		: (n === 'number'
				? je
				: n === 'string'
					? (r = kt(t))
						? ((t = r), Gn)
						: $i
					: t instanceof kt
						? Gn
						: t instanceof Date
							? Wc
							: Yc(t)
								? Fc
								: Array.isArray(t)
									? Xc
									: (typeof t.valueOf != 'function' && typeof t.toString != 'function') || isNaN(t)
										? Zc
										: je)(e, t);
}
var Uo = 180 / Math.PI,
	Xr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function es(e, t, n, r, o, s) {
	var i, a, l;
	return (
		(i = Math.sqrt(e * e + t * t)) && ((e /= i), (t /= i)),
		(l = e * n + t * r) && ((n -= e * l), (r -= t * l)),
		(a = Math.sqrt(n * n + r * r)) && ((n /= a), (r /= a), (l /= a)),
		e * r < t * n && ((e = -e), (t = -t), (l = -l), (i = -i)),
		{
			translateX: o,
			translateY: s,
			rotate: Math.atan2(t, e) * Uo,
			skewX: Math.atan(l) * Uo,
			scaleX: i,
			scaleY: a,
		}
	);
}
var Dn;
function Uc(e) {
	const t = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(e + '');
	return t.isIdentity ? Xr : es(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Qc(e) {
	return e == null ||
		(Dn || (Dn = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
		Dn.setAttribute('transform', e),
		!(e = Dn.transform.baseVal.consolidate()))
		? Xr
		: ((e = e.matrix), es(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ts(e, t, n, r) {
	function o(d) {
		return d.length ? d.pop() + ' ' : '';
	}
	function s(d, u, h, f, g, m) {
		if (d !== h || u !== f) {
			var x = g.push('translate(', null, t, null, n);
			m.push({ i: x - 4, x: je(d, h) }, { i: x - 2, x: je(u, f) });
		} else (h || f) && g.push('translate(' + h + t + f + n);
	}
	function i(d, u, h, f) {
		d !== u
			? (d - u > 180 ? (u += 360) : u - d > 180 && (d += 360),
				f.push({ i: h.push(o(h) + 'rotate(', null, r) - 2, x: je(d, u) }))
			: u && h.push(o(h) + 'rotate(' + u + r);
	}
	function a(d, u, h, f) {
		d !== u
			? f.push({ i: h.push(o(h) + 'skewX(', null, r) - 2, x: je(d, u) })
			: u && h.push(o(h) + 'skewX(' + u + r);
	}
	function l(d, u, h, f, g, m) {
		if (d !== h || u !== f) {
			var x = g.push(o(g) + 'scale(', null, ',', null, ')');
			m.push({ i: x - 4, x: je(d, h) }, { i: x - 2, x: je(u, f) });
		} else (h !== 1 || f !== 1) && g.push(o(g) + 'scale(' + h + ',' + f + ')');
	}
	return (d, u) => {
		var h = [],
			f = [];
		return (
			(d = e(d)),
			(u = e(u)),
			s(d.translateX, d.translateY, u.translateX, u.translateY, h, f),
			i(d.rotate, u.rotate, h, f),
			a(d.skewX, u.skewX, h, f),
			l(d.scaleX, d.scaleY, u.scaleX, u.scaleY, h, f),
			(d = u = null),
			(g) => {
				for (var m = -1, x = f.length, w; ++m < x; ) h[(w = f[m]).i] = w.x(g);
				return h.join('');
			}
		);
	};
}
var Jc = ts(Uc, 'px, ', 'px)', 'deg)'),
	jc = ts(Qc, ', ', ')', ')'),
	$c = 1e-12;
function Qo(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function eu(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function tu(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Bn = (function e(t, n, r) {
	function o(s, i) {
		var a = s[0],
			l = s[1],
			d = s[2],
			u = i[0],
			h = i[1],
			f = i[2],
			g = u - a,
			m = h - l,
			x = g * g + m * m,
			w,
			S;
		if (x < $c)
			(S = Math.log(f / d) / t), (w = (F) => [a + F * g, l + F * m, d * Math.exp(t * F * S)]);
		else {
			var O = Math.sqrt(x),
				P = (f * f - d * d + r * x) / (2 * d * n * O),
				A = (f * f - d * d - r * x) / (2 * f * n * O),
				H = Math.log(Math.sqrt(P * P + 1) - P),
				V = Math.log(Math.sqrt(A * A + 1) - A);
			(S = (V - H) / t),
				(w = (F) => {
					var Q = F * S,
						Y = Qo(H),
						$ = (d / (n * O)) * (Y * tu(t * Q + H) - eu(H));
					return [a + $ * g, l + $ * m, (d * Y) / Qo(t * Q + H)];
				});
		}
		return (w.duration = (S * 1e3 * t) / Math.SQRT2), w;
	}
	return (
		(o.rho = (s) => {
			var i = Math.max(0.001, +s),
				a = i * i,
				l = a * a;
			return e(i, a, l);
		}),
		o
	);
})(Math.SQRT2, 2, 4);
var Ft = 0,
	dn = 0,
	ln = 0,
	ns = 1e3,
	Un,
	fn,
	Qn = 0,
	St = 0,
	cr = 0,
	xn = typeof performance == 'object' && performance.now ? performance : Date,
	rs =
		typeof window == 'object' && window.requestAnimationFrame
			? window.requestAnimationFrame.bind(window)
			: (e) => {
					setTimeout(e, 17);
				};
function fo() {
	return St || (rs(nu), (St = xn.now() + cr));
}
function nu() {
	St = 0;
}
function Jn() {
	this._call = this._time = this._next = null;
}
Jn.prototype = os.prototype = {
	constructor: Jn,
	restart: function (e, t, n) {
		if (typeof e != 'function') throw new TypeError('callback is not a function');
		(n = (n == null ? fo() : +n) + (t == null ? 0 : +t)),
			!this._next && fn !== this && (fn ? (fn._next = this) : (Un = this), (fn = this)),
			(this._call = e),
			(this._time = n),
			Wr();
	},
	stop: function () {
		this._call && ((this._call = null), (this._time = 1 / 0), Wr());
	},
};
function os(e, t, n) {
	var r = new Jn();
	return r.restart(e, t, n), r;
}
function ru() {
	fo(), ++Ft;
	for (var e = Un, t; e; ) (t = St - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
	--Ft;
}
function Jo() {
	(St = (Qn = xn.now()) + cr), (Ft = dn = 0);
	try {
		ru();
	} finally {
		(Ft = 0), iu(), (St = 0);
	}
}
function ou() {
	var e = xn.now(),
		t = e - Qn;
	t > ns && ((cr -= t), (Qn = e));
}
function iu() {
	for (var e, t = Un, n, r = 1 / 0; t; )
		t._call
			? (r > t._time && (r = t._time), (e = t), (t = t._next))
			: ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (Un = n)));
	(fn = e), Wr(r);
}
function Wr(e) {
	if (!Ft) {
		dn && (dn = clearTimeout(dn));
		var t = e - St;
		t > 24
			? (e < 1 / 0 && (dn = setTimeout(Jo, e - xn.now() - cr)), ln && (ln = clearInterval(ln)))
			: (ln || ((Qn = xn.now()), (ln = setInterval(ou, ns))), (Ft = 1), rs(Jo));
	}
}
function jo(e, t, n) {
	var r = new Jn();
	return (
		(t = t == null ? 0 : +t),
		r.restart(
			(o) => {
				r.stop(), e(o + t);
			},
			t,
			n,
		),
		r
	);
}
var su = ar('start', 'end', 'cancel', 'interrupt'),
	au = [],
	is = 0,
	$o = 1,
	Zr = 2,
	Fn = 3,
	ei = 4,
	qr = 5,
	Yn = 6;
function ur(e, t, n, r, o, s) {
	var i = e.__transition;
	if (!i) e.__transition = {};
	else if (n in i) return;
	lu(e, n, {
		name: t,
		index: r,
		group: o,
		on: su,
		tween: au,
		time: s.time,
		delay: s.delay,
		duration: s.duration,
		ease: s.ease,
		timer: null,
		state: is,
	});
}
function ho(e, t) {
	var n = Ge(e, t);
	if (n.state > is) throw new Error('too late; already scheduled');
	return n;
}
function rt(e, t) {
	var n = Ge(e, t);
	if (n.state > Fn) throw new Error('too late; already running');
	return n;
}
function Ge(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw new Error('transition not found');
	return n;
}
function lu(e, t, n) {
	var r = e.__transition,
		o;
	(r[t] = n), (n.timer = os(s, 0, n.time));
	function s(d) {
		(n.state = $o), n.timer.restart(i, n.delay, n.time), n.delay <= d && i(d - n.delay);
	}
	function i(d) {
		var u, h, f, g;
		if (n.state !== $o) return l();
		for (u in r)
			if (((g = r[u]), g.name === n.name)) {
				if (g.state === Fn) return jo(i);
				g.state === ei
					? ((g.state = Yn),
						g.timer.stop(),
						g.on.call('interrupt', e, e.__data__, g.index, g.group),
						delete r[u])
					: +u < t &&
						((g.state = Yn),
						g.timer.stop(),
						g.on.call('cancel', e, e.__data__, g.index, g.group),
						delete r[u]);
			}
		if (
			(jo(() => {
				n.state === Fn && ((n.state = ei), n.timer.restart(a, n.delay, n.time), a(d));
			}),
			(n.state = Zr),
			n.on.call('start', e, e.__data__, n.index, n.group),
			n.state === Zr)
		) {
			for (n.state = Fn, o = new Array((f = n.tween.length)), u = 0, h = -1; u < f; ++u)
				(g = n.tween[u].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
			o.length = h + 1;
		}
	}
	function a(d) {
		for (
			var u =
					d < n.duration
						? n.ease.call(null, d / n.duration)
						: (n.timer.restart(l), (n.state = qr), 1),
				h = -1,
				f = o.length;
			++h < f;
		)
			o[h].call(e, u);
		n.state === qr && (n.on.call('end', e, e.__data__, n.index, n.group), l());
	}
	function l() {
		(n.state = Yn), n.timer.stop(), delete r[t];
		for (var d in r) return;
		delete e.__transition;
	}
}
function Xn(e, t) {
	var n = e.__transition,
		r,
		o,
		s = !0,
		i;
	if (n) {
		t = t == null ? null : t + '';
		for (i in n) {
			if ((r = n[i]).name !== t) {
				s = !1;
				continue;
			}
			(o = r.state > Zr && r.state < qr),
				(r.state = Yn),
				r.timer.stop(),
				r.on.call(o ? 'interrupt' : 'cancel', e, e.__data__, r.index, r.group),
				delete n[i];
		}
		s && delete e.__transition;
	}
}
function cu(e) {
	return this.each(function () {
		Xn(this, e);
	});
}
function uu(e, t) {
	var n, r;
	return function () {
		var o = rt(this, e),
			s = o.tween;
		if (s !== n) {
			r = n = s;
			for (var i = 0, a = r.length; i < a; ++i)
				if (r[i].name === t) {
					(r = r.slice()), r.splice(i, 1);
					break;
				}
		}
		o.tween = r;
	};
}
function du(e, t, n) {
	var r, o;
	if (typeof n != 'function') throw new Error();
	return function () {
		var s = rt(this, e),
			i = s.tween;
		if (i !== r) {
			o = (r = i).slice();
			for (var a = { name: t, value: n }, l = 0, d = o.length; l < d; ++l)
				if (o[l].name === t) {
					o[l] = a;
					break;
				}
			l === d && o.push(a);
		}
		s.tween = o;
	};
}
function fu(e, t) {
	var n = this._id;
	if (((e += ''), arguments.length < 2)) {
		for (var r = Ge(this.node(), n).tween, o = 0, s = r.length, i; o < s; ++o)
			if ((i = r[o]).name === e) return i.value;
		return null;
	}
	return this.each((t == null ? uu : du)(n, e, t));
}
function go(e, t, n) {
	var r = e._id;
	return (
		e.each(function () {
			var o = rt(this, r);
			(o.value || (o.value = {}))[t] = n.apply(this, arguments);
		}),
		(o) => Ge(o, r).value[t]
	);
}
function ss(e, t) {
	var n;
	return (typeof t == 'number' ? je : t instanceof kt ? Gn : (n = kt(t)) ? ((t = n), Gn) : $i)(
		e,
		t,
	);
}
function hu(e) {
	return function () {
		this.removeAttribute(e);
	};
}
function gu(e) {
	return function () {
		this.removeAttributeNS(e.space, e.local);
	};
}
function vu(e, t, n) {
	var r,
		o = n + '',
		s;
	return function () {
		var i = this.getAttribute(e);
		return i === o ? null : i === r ? s : (s = t((r = i), n));
	};
}
function yu(e, t, n) {
	var r,
		o = n + '',
		s;
	return function () {
		var i = this.getAttributeNS(e.space, e.local);
		return i === o ? null : i === r ? s : (s = t((r = i), n));
	};
}
function mu(e, t, n) {
	var r, o, s;
	return function () {
		var i,
			a = n(this),
			l;
		return a == null
			? void this.removeAttribute(e)
			: ((i = this.getAttribute(e)),
				(l = a + ''),
				i === l ? null : i === r && l === o ? s : ((o = l), (s = t((r = i), a))));
	};
}
function wu(e, t, n) {
	var r, o, s;
	return function () {
		var i,
			a = n(this),
			l;
		return a == null
			? void this.removeAttributeNS(e.space, e.local)
			: ((i = this.getAttributeNS(e.space, e.local)),
				(l = a + ''),
				i === l ? null : i === r && l === o ? s : ((o = l), (s = t((r = i), a))));
	};
}
function xu(e, t) {
	var n = lr(e),
		r = n === 'transform' ? jc : ss;
	return this.attrTween(
		e,
		typeof t == 'function'
			? (n.local ? wu : mu)(n, r, go(this, 'attr.' + e, t))
			: t == null
				? (n.local ? gu : hu)(n)
				: (n.local ? yu : vu)(n, r, t),
	);
}
function pu(e, t) {
	return function (n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function bu(e, t) {
	return function (n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function _u(e, t) {
	var n, r;
	function o() {
		var s = t.apply(this, arguments);
		return s !== r && (n = (r = s) && bu(e, s)), n;
	}
	return (o._value = t), o;
}
function ku(e, t) {
	var n, r;
	function o() {
		var s = t.apply(this, arguments);
		return s !== r && (n = (r = s) && pu(e, s)), n;
	}
	return (o._value = t), o;
}
function Su(e, t) {
	var n = 'attr.' + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != 'function') throw new Error();
	var r = lr(e);
	return this.tween(n, (r.local ? _u : ku)(r, t));
}
function Eu(e, t) {
	return function () {
		ho(this, e).delay = +t.apply(this, arguments);
	};
}
function Cu(e, t) {
	return (
		(t = +t),
		function () {
			ho(this, e).delay = t;
		}
	);
}
function Mu(e) {
	var t = this._id;
	return arguments.length
		? this.each((typeof e == 'function' ? Eu : Cu)(t, e))
		: Ge(this.node(), t).delay;
}
function Nu(e, t) {
	return function () {
		rt(this, e).duration = +t.apply(this, arguments);
	};
}
function Pu(e, t) {
	return (
		(t = +t),
		function () {
			rt(this, e).duration = t;
		}
	);
}
function Au(e) {
	var t = this._id;
	return arguments.length
		? this.each((typeof e == 'function' ? Nu : Pu)(t, e))
		: Ge(this.node(), t).duration;
}
function zu(e, t) {
	if (typeof t != 'function') throw new Error();
	return function () {
		rt(this, e).ease = t;
	};
}
function Tu(e) {
	var t = this._id;
	return arguments.length ? this.each(zu(t, e)) : Ge(this.node(), t).ease;
}
function Iu(e, t) {
	return function () {
		var n = t.apply(this, arguments);
		if (typeof n != 'function') throw new Error();
		rt(this, e).ease = n;
	};
}
function Ou(e) {
	if (typeof e != 'function') throw new Error();
	return this.each(Iu(this._id, e));
}
function Du(e) {
	typeof e != 'function' && (e = Li(e));
	for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
		for (var s = t[o], i = s.length, a = (r[o] = []), l, d = 0; d < i; ++d)
			(l = s[d]) && e.call(l, l.__data__, d, s) && a.push(l);
	return new lt(r, this._parents, this._name, this._id);
}
function Hu(e) {
	if (e._id !== this._id) throw new Error();
	for (
		var t = this._groups,
			n = e._groups,
			r = t.length,
			o = n.length,
			s = Math.min(r, o),
			i = new Array(r),
			a = 0;
		a < s;
		++a
	)
		for (var l = t[a], d = n[a], u = l.length, h = (i[a] = new Array(u)), f, g = 0; g < u; ++g)
			(f = l[g] || d[g]) && (h[g] = f);
	for (; a < r; ++a) i[a] = t[a];
	return new lt(i, this._parents, this._name, this._id);
}
function Ru(e) {
	return (e + '')
		.trim()
		.split(/^|\s+/)
		.every((t) => {
			var n = t.indexOf('.');
			return n >= 0 && (t = t.slice(0, n)), !t || t === 'start';
		});
}
function Lu(e, t, n) {
	var r,
		o,
		s = Ru(t) ? ho : rt;
	return function () {
		var i = s(this, e),
			a = i.on;
		a !== r && (o = (r = a).copy()).on(t, n), (i.on = o);
	};
}
function Vu(e, t) {
	var n = this._id;
	return arguments.length < 2 ? Ge(this.node(), n).on.on(e) : this.each(Lu(n, e, t));
}
function Ku(e) {
	return function () {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Bu() {
	return this.on('end.remove', Ku(this._id));
}
function Fu(e) {
	var t = this._name,
		n = this._id;
	typeof e != 'function' && (e = ao(e));
	for (var r = this._groups, o = r.length, s = new Array(o), i = 0; i < o; ++i)
		for (var a = r[i], l = a.length, d = (s[i] = new Array(l)), u, h, f = 0; f < l; ++f)
			(u = a[f]) &&
				(h = e.call(u, u.__data__, f, a)) &&
				('__data__' in u && (h.__data__ = u.__data__), (d[f] = h), ur(d[f], t, n, f, d, Ge(u, n)));
	return new lt(s, this._parents, t, n);
}
function Yu(e) {
	var t = this._name,
		n = this._id;
	typeof e != 'function' && (e = Ri(e));
	for (var r = this._groups, o = r.length, s = [], i = [], a = 0; a < o; ++a)
		for (var l = r[a], d = l.length, u, h = 0; h < d; ++h)
			if ((u = l[h])) {
				for (var f = e.call(u, u.__data__, h, l), g, m = Ge(u, n), x = 0, w = f.length; x < w; ++x)
					(g = f[x]) && ur(g, t, n, x, f, m);
				s.push(f), i.push(u);
			}
	return new lt(s, i, t, n);
}
var Xu = Cn.prototype.constructor;
function Wu() {
	return new Xu(this._groups, this._parents);
}
function Zu(e, t) {
	var n, r, o;
	return function () {
		var s = Bt(this, e),
			i = (this.style.removeProperty(e), Bt(this, e));
		return s === i ? null : s === n && i === r ? o : (o = t((n = s), (r = i)));
	};
}
function as(e) {
	return function () {
		this.style.removeProperty(e);
	};
}
function qu(e, t, n) {
	var r,
		o = n + '',
		s;
	return function () {
		var i = Bt(this, e);
		return i === o ? null : i === r ? s : (s = t((r = i), n));
	};
}
function Gu(e, t, n) {
	var r, o, s;
	return function () {
		var i = Bt(this, e),
			a = n(this),
			l = a + '';
		return (
			a == null && (l = a = (this.style.removeProperty(e), Bt(this, e))),
			i === l ? null : i === r && l === o ? s : ((o = l), (s = t((r = i), a)))
		);
	};
}
function Uu(e, t) {
	var n,
		r,
		o,
		s = 'style.' + t,
		i = 'end.' + s,
		a;
	return function () {
		var l = rt(this, e),
			d = l.on,
			u = l.value[s] == null ? a || (a = as(t)) : void 0;
		(d !== n || o !== u) && (r = (n = d).copy()).on(i, (o = u)), (l.on = r);
	};
}
function Qu(e, t, n) {
	var r = (e += '') == 'transform' ? Jc : ss;
	return t == null
		? this.styleTween(e, Zu(e, r)).on('end.style.' + e, as(e))
		: typeof t == 'function'
			? this.styleTween(e, Gu(e, r, go(this, 'style.' + e, t))).each(Uu(this._id, e))
			: this.styleTween(e, qu(e, r, t), n).on('end.style.' + e, null);
}
function Ju(e, t, n) {
	return function (r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function ju(e, t, n) {
	var r, o;
	function s() {
		var i = t.apply(this, arguments);
		return i !== o && (r = (o = i) && Ju(e, i, n)), r;
	}
	return (s._value = t), s;
}
function $u(e, t, n) {
	var r = 'style.' + (e += '');
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != 'function') throw new Error();
	return this.tween(r, ju(e, t, n ?? ''));
}
function ed(e) {
	return function () {
		this.textContent = e;
	};
}
function td(e) {
	return function () {
		var t = e(this);
		this.textContent = t ?? '';
	};
}
function nd(e) {
	return this.tween(
		'text',
		typeof e == 'function' ? td(go(this, 'text', e)) : ed(e == null ? '' : e + ''),
	);
}
function rd(e) {
	return function (t) {
		this.textContent = e.call(this, t);
	};
}
function od(e) {
	var t, n;
	function r() {
		var o = e.apply(this, arguments);
		return o !== n && (t = (n = o) && rd(o)), t;
	}
	return (r._value = e), r;
}
function id(e) {
	var t = 'text';
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != 'function') throw new Error();
	return this.tween(t, od(e));
}
function sd() {
	for (
		var e = this._name, t = this._id, n = ls(), r = this._groups, o = r.length, s = 0;
		s < o;
		++s
	)
		for (var i = r[s], a = i.length, l, d = 0; d < a; ++d)
			if ((l = i[d])) {
				var u = Ge(l, t);
				ur(l, e, n, d, i, {
					time: u.time + u.delay + u.duration,
					delay: 0,
					duration: u.duration,
					ease: u.ease,
				});
			}
	return new lt(r, this._parents, e, n);
}
function ad() {
	var e,
		t,
		r = this._id,
		o = this.size();
	return new Promise((s, i) => {
		var a = { value: i },
			l = {
				value: () => {
					--o === 0 && s();
				},
			};
		this.each(function () {
			var d = rt(this, r),
				u = d.on;
			u !== e && ((t = (e = u).copy()), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)),
				(d.on = t);
		}),
			o === 0 && s();
	});
}
var ld = 0;
function lt(e, t, n, r) {
	(this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
}
function ls() {
	return ++ld;
}
var ot = Cn.prototype;
lt.prototype = {
	constructor: lt,
	select: Fu,
	selectAll: Yu,
	selectChild: ot.selectChild,
	selectChildren: ot.selectChildren,
	filter: Du,
	merge: Hu,
	selection: Wu,
	transition: sd,
	call: ot.call,
	nodes: ot.nodes,
	node: ot.node,
	size: ot.size,
	empty: ot.empty,
	each: ot.each,
	on: Vu,
	attr: xu,
	attrTween: Su,
	style: Qu,
	styleTween: $u,
	text: nd,
	textTween: id,
	remove: Bu,
	tween: fu,
	delay: Mu,
	duration: Au,
	ease: Tu,
	easeVarying: Ou,
	end: ad,
	[Symbol.iterator]: ot[Symbol.iterator],
};
function cd(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var ud = { time: null, delay: 0, duration: 250, ease: cd };
function dd(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]); )
		if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
	return n;
}
function fd(e) {
	var t, n;
	e instanceof lt
		? ((t = e._id), (e = e._name))
		: ((t = ls()), ((n = ud).time = fo()), (e = e == null ? null : e + ''));
	for (var r = this._groups, o = r.length, s = 0; s < o; ++s)
		for (var i = r[s], a = i.length, l, d = 0; d < a; ++d)
			(l = i[d]) && ur(l, e, t, d, i, n || dd(l, t));
	return new lt(r, this._parents, e, t);
}
Cn.prototype.interrupt = cu;
Cn.prototype.transition = fd;
const Hn = (e) => () => e;
function hd(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
	Object.defineProperties(this, {
		type: { value: e, enumerable: !0, configurable: !0 },
		sourceEvent: { value: t, enumerable: !0, configurable: !0 },
		target: { value: n, enumerable: !0, configurable: !0 },
		transform: { value: r, enumerable: !0, configurable: !0 },
		_: { value: o },
	});
}
function it(e, t, n) {
	(this.k = e), (this.x = t), (this.y = n);
}
it.prototype = {
	constructor: it,
	scale: function (e) {
		return e === 1 ? this : new it(this.k * e, this.x, this.y);
	},
	translate: function (e, t) {
		return (e === 0) & (t === 0) ? this : new it(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function (e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function (e) {
		return e * this.k + this.x;
	},
	applyY: function (e) {
		return e * this.k + this.y;
	},
	invert: function (e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function (e) {
		return (e - this.x) / this.k;
	},
	invertY: function (e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function (e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function (e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function () {
		return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
	},
};
var dr = new it(1, 0, 0);
cs.prototype = it.prototype;
function cs(e) {
	for (; !e.__zoom; ) if (!(e = e.parentNode)) return dr;
	return e.__zoom;
}
function Mr(e) {
	e.stopImmediatePropagation();
}
function cn(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function gd(e) {
	return (!e.ctrlKey || e.type === 'wheel') && !e.button;
}
function vd() {
	var e = this;
	return e instanceof SVGElement
		? ((e = e.ownerSVGElement || e),
			e.hasAttribute('viewBox')
				? ((e = e.viewBox.baseVal),
					[
						[e.x, e.y],
						[e.x + e.width, e.y + e.height],
					])
				: [
						[0, 0],
						[e.width.baseVal.value, e.height.baseVal.value],
					])
		: [
				[0, 0],
				[e.clientWidth, e.clientHeight],
			];
}
function ti() {
	return this.__zoom || dr;
}
function yd(e) {
	return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1);
}
function md() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function wd(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0],
		o = e.invertX(t[1][0]) - n[1][0],
		s = e.invertY(t[0][1]) - n[0][1],
		i = e.invertY(t[1][1]) - n[1][1];
	return e.translate(
		o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
		i > s ? (s + i) / 2 : Math.min(0, s) || Math.max(0, i),
	);
}
function xd() {
	var e = gd,
		t = vd,
		n = wd,
		r = yd,
		o = md,
		s = [0, 1 / 0],
		i = [
			[-1 / 0, -1 / 0],
			[1 / 0, 1 / 0],
		],
		a = 250,
		l = Bn,
		d = ar('start', 'zoom', 'end'),
		u,
		h,
		f,
		g = 500,
		m = 150,
		x = 0,
		w = 10;
	function S(v) {
		v.property('__zoom', ti)
			.on('wheel.zoom', Q, { passive: !1 })
			.on('mousedown.zoom', Y)
			.on('dblclick.zoom', $)
			.filter(o)
			.on('touchstart.zoom', M)
			.on('touchmove.zoom', p)
			.on('touchend.zoom touchcancel.zoom', N)
			.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	(S.transform = (v, E, y, k) => {
		var I = v.selection ? v.selection() : v;
		I.property('__zoom', ti),
			v !== I
				? H(v, E, y, k)
				: I.interrupt().each(function () {
						V(this, arguments)
							.event(k)
							.start()
							.zoom(null, typeof E == 'function' ? E.apply(this, arguments) : E)
							.end();
					});
	}),
		(S.scaleBy = (v, E, y, k) => {
			S.scaleTo(
				v,
				function () {
					var I = this.__zoom.k,
						z = typeof E == 'function' ? E.apply(this, arguments) : E;
					return I * z;
				},
				y,
				k,
			);
		}),
		(S.scaleTo = (v, E, y, k) => {
			S.transform(
				v,
				function () {
					var I = t.apply(this, arguments),
						z = this.__zoom,
						T = y == null ? A(I) : typeof y == 'function' ? y.apply(this, arguments) : y,
						K = z.invert(T),
						G = typeof E == 'function' ? E.apply(this, arguments) : E;
					return n(P(O(z, G), T, K), I, i);
				},
				y,
				k,
			);
		}),
		(S.translateBy = (v, E, y, k) => {
			S.transform(
				v,
				function () {
					return n(
						this.__zoom.translate(
							typeof E == 'function' ? E.apply(this, arguments) : E,
							typeof y == 'function' ? y.apply(this, arguments) : y,
						),
						t.apply(this, arguments),
						i,
					);
				},
				null,
				k,
			);
		}),
		(S.translateTo = (v, E, y, k, I) => {
			S.transform(
				v,
				function () {
					var z = t.apply(this, arguments),
						T = this.__zoom,
						K = k == null ? A(z) : typeof k == 'function' ? k.apply(this, arguments) : k;
					return n(
						dr
							.translate(K[0], K[1])
							.scale(T.k)
							.translate(
								typeof E == 'function' ? -E.apply(this, arguments) : -E,
								typeof y == 'function' ? -y.apply(this, arguments) : -y,
							),
						z,
						i,
					);
				},
				k,
				I,
			);
		});
	function O(v, E) {
		return (E = Math.max(s[0], Math.min(s[1], E))), E === v.k ? v : new it(E, v.x, v.y);
	}
	function P(v, E, y) {
		var k = E[0] - y[0] * v.k,
			I = E[1] - y[1] * v.k;
		return k === v.x && I === v.y ? v : new it(v.k, k, I);
	}
	function A(v) {
		return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
	}
	function H(v, E, y, k) {
		v.on('start.zoom', function () {
			V(this, arguments).event(k).start();
		})
			.on('interrupt.zoom end.zoom', function () {
				V(this, arguments).event(k).end();
			})
			.tween('zoom', function () {
				var z = arguments,
					T = V(this, z).event(k),
					K = t.apply(this, z),
					G = y == null ? A(K) : typeof y == 'function' ? y.apply(this, z) : y,
					Z = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]),
					X = this.__zoom,
					j = typeof E == 'function' ? E.apply(this, z) : E,
					R = l(X.invert(G).concat(Z / X.k), j.invert(G).concat(Z / j.k));
				return (L) => {
					if (L === 1) L = j;
					else {
						var W = R(L),
							ie = Z / W[2];
						L = new it(ie, G[0] - W[0] * ie, G[1] - W[1] * ie);
					}
					T.zoom(null, L);
				};
			});
	}
	function V(v, E, y) {
		return (!y && v.__zooming) || new F(v, E);
	}
	function F(v, E) {
		(this.that = v),
			(this.args = E),
			(this.active = 0),
			(this.sourceEvent = null),
			(this.extent = t.apply(v, E)),
			(this.taps = 0);
	}
	F.prototype = {
		event: function (v) {
			return v && (this.sourceEvent = v), this;
		},
		start: function () {
			return ++this.active === 1 && ((this.that.__zooming = this), this.emit('start')), this;
		},
		zoom: function (v, E) {
			return (
				this.mouse && v !== 'mouse' && (this.mouse[1] = E.invert(this.mouse[0])),
				this.touch0 && v !== 'touch' && (this.touch0[1] = E.invert(this.touch0[0])),
				this.touch1 && v !== 'touch' && (this.touch1[1] = E.invert(this.touch1[0])),
				(this.that.__zoom = E),
				this.emit('zoom'),
				this
			);
		},
		end: function () {
			return --this.active === 0 && (delete this.that.__zooming, this.emit('end')), this;
		},
		emit: function (v) {
			var E = Xe(this.that).datum();
			d.call(
				v,
				this.that,
				new hd(v, {
					sourceEvent: this.sourceEvent,
					target: S,
					transform: this.that.__zoom,
					dispatch: d,
				}),
				E,
			);
		},
	};
	function Q(v, ...E) {
		if (!e.apply(this, arguments)) return;
		var y = V(this, E).event(v),
			k = this.__zoom,
			I = Math.max(s[0], Math.min(s[1], k.k * 2 ** r.apply(this, arguments))),
			z = Qe(v);
		if (y.wheel)
			(y.mouse[0][0] !== z[0] || y.mouse[0][1] !== z[1]) &&
				(y.mouse[1] = k.invert((y.mouse[0] = z))),
				clearTimeout(y.wheel);
		else {
			if (k.k === I) return;
			(y.mouse = [z, k.invert(z)]), Xn(this), y.start();
		}
		cn(v),
			(y.wheel = setTimeout(T, m)),
			y.zoom('mouse', n(P(O(k, I), y.mouse[0], y.mouse[1]), y.extent, i));
		function T() {
			(y.wheel = null), y.end();
		}
	}
	function Y(v, ...E) {
		if (f || !e.apply(this, arguments)) return;
		var y = v.currentTarget,
			k = V(this, E, !0).event(v),
			I = Xe(v.view).on('mousemove.zoom', G, !0).on('mouseup.zoom', Z, !0),
			z = Qe(v, y),
			T = v.clientX,
			K = v.clientY;
		Gi(v.view), Mr(v), (k.mouse = [z, this.__zoom.invert(z)]), Xn(this), k.start();
		function G(X) {
			if ((cn(X), !k.moved)) {
				var j = X.clientX - T,
					R = X.clientY - K;
				k.moved = j * j + R * R > x;
			}
			k.event(X).zoom(
				'mouse',
				n(P(k.that.__zoom, (k.mouse[0] = Qe(X, y)), k.mouse[1]), k.extent, i),
			);
		}
		function Z(X) {
			I.on('mousemove.zoom mouseup.zoom', null), Ui(X.view, k.moved), cn(X), k.event(X).end();
		}
	}
	function $(v, ...E) {
		if (e.apply(this, arguments)) {
			var y = this.__zoom,
				k = Qe(v.changedTouches ? v.changedTouches[0] : v, this),
				I = y.invert(k),
				z = y.k * (v.shiftKey ? 0.5 : 2),
				T = n(P(O(y, z), k, I), t.apply(this, E), i);
			cn(v),
				a > 0
					? Xe(this).transition().duration(a).call(H, T, k, v)
					: Xe(this).call(S.transform, T, k, v);
		}
	}
	function M(v, ...E) {
		if (e.apply(this, arguments)) {
			var y = v.touches,
				k = y.length,
				I = V(this, E, v.changedTouches.length === k).event(v),
				z,
				T,
				K,
				G;
			for (Mr(v), T = 0; T < k; ++T)
				(K = y[T]),
					(G = Qe(K, this)),
					(G = [G, this.__zoom.invert(G), K.identifier]),
					I.touch0
						? !I.touch1 && I.touch0[2] !== G[2] && ((I.touch1 = G), (I.taps = 0))
						: ((I.touch0 = G), (z = !0), (I.taps = 1 + !!u));
			u && (u = clearTimeout(u)),
				z &&
					(I.taps < 2 &&
						((h = G[0]),
						(u = setTimeout(() => {
							u = null;
						}, g))),
					Xn(this),
					I.start());
		}
	}
	function p(v, ...E) {
		if (this.__zooming) {
			var y = V(this, E).event(v),
				k = v.changedTouches,
				I = k.length,
				z,
				T,
				K,
				G;
			for (cn(v), z = 0; z < I; ++z)
				(T = k[z]),
					(K = Qe(T, this)),
					y.touch0 && y.touch0[2] === T.identifier
						? (y.touch0[0] = K)
						: y.touch1 && y.touch1[2] === T.identifier && (y.touch1[0] = K);
			if (((T = y.that.__zoom), y.touch1)) {
				var Z = y.touch0[0],
					X = y.touch0[1],
					j = y.touch1[0],
					R = y.touch1[1],
					L = (L = j[0] - Z[0]) * L + (L = j[1] - Z[1]) * L,
					W = (W = R[0] - X[0]) * W + (W = R[1] - X[1]) * W;
				(T = O(T, Math.sqrt(L / W))),
					(K = [(Z[0] + j[0]) / 2, (Z[1] + j[1]) / 2]),
					(G = [(X[0] + R[0]) / 2, (X[1] + R[1]) / 2]);
			} else if (y.touch0) (K = y.touch0[0]), (G = y.touch0[1]);
			else return;
			y.zoom('touch', n(P(T, K, G), y.extent, i));
		}
	}
	function N(v, ...E) {
		if (this.__zooming) {
			var y = V(this, E).event(v),
				k = v.changedTouches,
				I = k.length,
				z,
				T;
			for (
				Mr(v),
					f && clearTimeout(f),
					f = setTimeout(() => {
						f = null;
					}, g),
					z = 0;
				z < I;
				++z
			)
				(T = k[z]),
					y.touch0 && y.touch0[2] === T.identifier
						? delete y.touch0
						: y.touch1 && y.touch1[2] === T.identifier && delete y.touch1;
			if ((y.touch1 && !y.touch0 && ((y.touch0 = y.touch1), delete y.touch1), y.touch0))
				y.touch0[1] = this.__zoom.invert(y.touch0[0]);
			else if (
				(y.end(), y.taps === 2 && ((T = Qe(T, this)), Math.hypot(h[0] - T[0], h[1] - T[1]) < w))
			) {
				var K = Xe(this).on('dblclick.zoom');
				K && K.apply(this, arguments);
			}
		}
	}
	return (
		(S.wheelDelta = function (v) {
			return arguments.length ? ((r = typeof v == 'function' ? v : Hn(+v)), S) : r;
		}),
		(S.filter = function (v) {
			return arguments.length ? ((e = typeof v == 'function' ? v : Hn(!!v)), S) : e;
		}),
		(S.touchable = function (v) {
			return arguments.length ? ((o = typeof v == 'function' ? v : Hn(!!v)), S) : o;
		}),
		(S.extent = function (v) {
			return arguments.length
				? ((t =
						typeof v == 'function'
							? v
							: Hn([
									[+v[0][0], +v[0][1]],
									[+v[1][0], +v[1][1]],
								])),
					S)
				: t;
		}),
		(S.scaleExtent = function (v) {
			return arguments.length ? ((s[0] = +v[0]), (s[1] = +v[1]), S) : [s[0], s[1]];
		}),
		(S.translateExtent = function (v) {
			return arguments.length
				? ((i[0][0] = +v[0][0]),
					(i[1][0] = +v[1][0]),
					(i[0][1] = +v[0][1]),
					(i[1][1] = +v[1][1]),
					S)
				: [
						[i[0][0], i[0][1]],
						[i[1][0], i[1][1]],
					];
		}),
		(S.constrain = function (v) {
			return arguments.length ? ((n = v), S) : n;
		}),
		(S.duration = function (v) {
			return arguments.length ? ((a = +v), S) : a;
		}),
		(S.interpolate = function (v) {
			return arguments.length ? ((l = v), S) : l;
		}),
		(S.on = function () {
			var v = d.on.apply(d, arguments);
			return v === d ? S : v;
		}),
		(S.clickDistance = function (v) {
			return arguments.length ? ((x = (v = +v) * v), S) : Math.sqrt(x);
		}),
		(S.tapDistance = function (v) {
			return arguments.length ? ((w = +v), S) : w;
		}),
		S
	);
}
const Et = {
		error001: (e = 'react') =>
			`Seems like you have not used zustand provider as an ancestor. Help: https://${e}flow.dev/error#001`,
		error002: () =>
			"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
		error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
		error004: () => 'The parent container needs a width and a height to render the graph.',
		error005: () => 'Only child nodes can use a parent extent.',
		error006: () => "Can't create edge. An edge needs a source and a target.",
		error007: (e) => `The old edge with id=${e} does not exist.`,
		error009: (e) => `Marker type "${e}" doesn't exist.`,
		error008: (e, { id: t, sourceHandle: n, targetHandle: r }) =>
			`Couldn't create edge for ${e} handle id: "${e === 'source' ? n : r}", edge id: ${t}.`,
		error010: () =>
			'Handle: No node id found. Make sure to only use a Handle inside a custom Node.',
		error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
		error012: (e) =>
			`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
		error013: (e = 'react') =>
			`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
		error014: () =>
			'useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.',
		error015: () =>
			'It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.',
		error016: (e) =>
			`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`,
	},
	Gr = [
		[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
		[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
	],
	us = ['Enter', ' ', 'Escape'],
	pd = {
		'node.a11yDescription.default':
			'Press enter or space to select a node. Press delete to remove it and escape to cancel.',
		'node.a11yDescription.keyboardDisabled':
			'Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.',
		'node.a11yDescription.ariaLiveMessage': ({ direction: e, x: t, y: n }) =>
			`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
		'edge.a11yDescription.default':
			'Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.',
		'controls.ariaLabel': 'Control Panel',
		'controls.zoomIn.ariaLabel': 'Zoom In',
		'controls.zoomOut.ariaLabel': 'Zoom Out',
		'controls.fitView.ariaLabel': 'Fit View',
		'controls.interactive.ariaLabel': 'Toggle Interactivity',
		'minimap.ariaLabel': 'Mini Map',
		'handle.ariaLabel': 'Handle',
	};
var Yt;
((e) => {
	(e.Strict = 'strict'), (e.Loose = 'loose');
})(Yt || (Yt = {}));
var Lt;
((e) => {
	(e.Free = 'free'), (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal');
})(Lt || (Lt = {}));
var jn;
((e) => {
	(e.Partial = 'partial'), (e.Full = 'full');
})(jn || (jn = {}));
const Ur = {
	inProgress: !1,
	isValid: null,
	from: null,
	fromHandle: null,
	fromPosition: null,
	fromNode: null,
	to: null,
	toHandle: null,
	toPosition: null,
	toNode: null,
	pointer: null,
};
var ft;
((e) => {
	(e.Bezier = 'default'),
		(e.Straight = 'straight'),
		(e.Step = 'step'),
		(e.SmoothStep = 'smoothstep'),
		(e.SimpleBezier = 'simplebezier');
})(ft || (ft = {}));
var $n;
((e) => {
	(e.Arrow = 'arrow'), (e.ArrowClosed = 'arrowclosed');
})($n || ($n = {}));
var ne;
((e) => {
	(e.Left = 'left'), (e.Top = 'top'), (e.Right = 'right'), (e.Bottom = 'bottom');
})(ne || (ne = {}));
const ni = { [ne.Left]: ne.Right, [ne.Right]: ne.Left, [ne.Top]: ne.Bottom, [ne.Bottom]: ne.Top };
function bd(e, t) {
	if (!e && !t) return !0;
	if (!e || !t || e.size !== t.size) return !1;
	if (!e.size && !t.size) return !0;
	for (const n of e.keys()) if (!t.has(n)) return !1;
	return !0;
}
function ri(e, t, n) {
	if (!n) return;
	const r = [];
	e.forEach((o, s) => {
		(t != null && t.has(s)) || r.push(o);
	}),
		r.length && n(r);
}
function _d(e) {
	return e === null ? null : e ? 'valid' : 'invalid';
}
const ds = (e) => 'id' in e && 'source' in e && 'target' in e,
	kd = (e) => 'id' in e && 'position' in e && !('source' in e) && !('target' in e),
	vo = (e) => 'id' in e && 'internals' in e && !('source' in e) && !('target' in e),
	Nn = (e, t = [0, 0]) => {
		const { width: n, height: r } = At(e),
			o = e.origin ?? t,
			s = n * o[0],
			i = r * o[1];
		return { x: e.position.x - s, y: e.position.y - i };
	},
	Sd = (e, t = { nodeOrigin: [0, 0] }) => {
		if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
		const n = e.reduce(
			(r, o) => {
				const s = typeof o == 'string';
				let i = !t.nodeLookup && !s ? o : void 0;
				t.nodeLookup && (i = s ? t.nodeLookup.get(o) : vo(o) ? o : t.nodeLookup.get(o.id));
				const a = i ? er(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
				return hr(r, a);
			},
			{ x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
		);
		return gr(n);
	},
	fr = (e, t = {}) => {
		let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
			r = !1;
		return (
			e.forEach((o) => {
				(t.filter === void 0 || t.filter(o)) && ((n = hr(n, er(o))), (r = !0));
			}),
			r ? gr(n) : { x: 0, y: 0, width: 0, height: 0 }
		);
	},
	yo = (e, t, [n, r, o] = [0, 0, 1], s = !1, i = !1) => {
		const a = { ...Ut(t, [n, r, o]), width: t.width / o, height: t.height / o },
			l = [];
		for (const d of e.values()) {
			const { measured: u, selectable: h = !0, hidden: f = !1 } = d;
			if ((i && !h) || f) continue;
			const g = u.width ?? d.width ?? d.initialWidth ?? null,
				m = u.height ?? d.height ?? d.initialHeight ?? null,
				x = pn(a, Wt(d)),
				w = (g ?? 0) * (m ?? 0),
				S = s && x > 0;
			(!d.internals.handleBounds || S || x >= w || d.dragging) && l.push(d);
		}
		return l;
	},
	Ed = (e, t) => {
		const n = new Set();
		return (
			e.forEach((r) => {
				n.add(r.id);
			}),
			t.filter((r) => n.has(r.source) || n.has(r.target))
		);
	};
function Cd(e, t) {
	const n = new Map(),
		r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
	return (
		e.forEach((o) => {
			o.measured.width &&
				o.measured.height &&
				((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) &&
				(!r || r.has(o.id)) &&
				n.set(o.id, o);
		}),
		n
	);
}
async function Md({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: s }, i) {
	if (e.size === 0) return !0;
	const a = Cd(e, i),
		l = fr(a),
		d = wo(
			l,
			t,
			n,
			(i == null ? void 0 : i.minZoom) ?? o,
			(i == null ? void 0 : i.maxZoom) ?? s,
			(i == null ? void 0 : i.padding) ?? 0.1,
		);
	return (
		await r.setViewport(d, {
			duration: i == null ? void 0 : i.duration,
			ease: i == null ? void 0 : i.ease,
			interpolate: i == null ? void 0 : i.interpolate,
		}),
		!0
	);
}
function fs({
	nodeId: e,
	nextPosition: t,
	nodeLookup: n,
	nodeOrigin: r = [0, 0],
	nodeExtent: o,
	onError: s,
}) {
	const i = n.get(e),
		a = i.parentId ? n.get(i.parentId) : void 0,
		{ x: l, y: d } = a ? a.internals.positionAbsolute : { x: 0, y: 0 },
		u = i.origin ?? r;
	let h = i.extent || o;
	if (i.extent === 'parent' && !i.expandParent)
		if (!a) s == null || s('005', Et.error005());
		else {
			const g = a.measured.width,
				m = a.measured.height;
			g &&
				m &&
				(h = [
					[l, d],
					[l + g, d + m],
				]);
		}
	else
		a &&
			qt(i.extent) &&
			(h = [
				[i.extent[0][0] + l, i.extent[0][1] + d],
				[i.extent[1][0] + l, i.extent[1][1] + d],
			]);
	const f = qt(h) ? Ct(t, h, i.measured) : t;
	return (
		(i.measured.width === void 0 || i.measured.height === void 0) &&
			(s == null || s('015', Et.error015())),
		{
			position: {
				x: f.x - l + (i.measured.width ?? 0) * u[0],
				y: f.y - d + (i.measured.height ?? 0) * u[1],
			},
			positionAbsolute: f,
		}
	);
}
async function Nd({
	nodesToRemove: e = [],
	edgesToRemove: t = [],
	nodes: n,
	edges: r,
	onBeforeDelete: o,
}) {
	const s = new Set(e.map((f) => f.id)),
		i = [];
	for (const f of n) {
		if (f.deletable === !1) continue;
		const g = s.has(f.id),
			m = !g && f.parentId && i.find((x) => x.id === f.parentId);
		(g || m) && i.push(f);
	}
	const a = new Set(t.map((f) => f.id)),
		l = r.filter((f) => f.deletable !== !1),
		u = Ed(i, l);
	for (const f of l) a.has(f.id) && !u.find((m) => m.id === f.id) && u.push(f);
	if (!o) return { edges: u, nodes: i };
	const h = await o({ nodes: i, edges: u });
	return typeof h == 'boolean' ? (h ? { edges: u, nodes: i } : { edges: [], nodes: [] }) : h;
}
const Xt = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
	Ct = (e = { x: 0, y: 0 }, t, n) => ({
		x: Xt(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
		y: Xt(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0)),
	});
function hs(e, t, n) {
	const { width: r, height: o } = At(n),
		{ x: s, y: i } = n.internals.positionAbsolute;
	return Ct(
		e,
		[
			[s, i],
			[s + r, i + o],
		],
		t,
	);
}
const oi = (e, t, n) =>
		e < t ? Xt(Math.abs(e - t), 1, t) / t : e > n ? -Xt(Math.abs(e - n), 1, t) / t : 0,
	mo = (e, t, n = 15, r = 40) => {
		const o = oi(e.x, r, t.width - r) * n,
			s = oi(e.y, r, t.height - r) * n;
		return [o, s];
	},
	hr = (e, t) => ({
		x: Math.min(e.x, t.x),
		y: Math.min(e.y, t.y),
		x2: Math.max(e.x2, t.x2),
		y2: Math.max(e.y2, t.y2),
	}),
	Qr = ({ x: e, y: t, width: n, height: r }) => ({ x: e, y: t, x2: e + n, y2: t + r }),
	gr = ({ x: e, y: t, x2: n, y2: r }) => ({ x: e, y: t, width: n - e, height: r - t }),
	Wt = (e, t = [0, 0]) => {
		var o, s;
		const { x: n, y: r } = vo(e) ? e.internals.positionAbsolute : Nn(e, t);
		return {
			x: n,
			y: r,
			width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
			height: ((s = e.measured) == null ? void 0 : s.height) ?? e.height ?? e.initialHeight ?? 0,
		};
	},
	er = (e, t = [0, 0]) => {
		var o, s;
		const { x: n, y: r } = vo(e) ? e.internals.positionAbsolute : Nn(e, t);
		return {
			x: n,
			y: r,
			x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
			y2: r + (((s = e.measured) == null ? void 0 : s.height) ?? e.height ?? e.initialHeight ?? 0),
		};
	},
	Pd = (e, t) => gr(hr(Qr(e), Qr(t))),
	pn = (e, t) => {
		const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)),
			r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
		return Math.ceil(n * r);
	},
	ii = (e) => st(e.width) && st(e.height) && st(e.x) && st(e.y),
	st = (e) => !isNaN(e) && isFinite(e),
	gs = (e, t) => (n, r) => {},
	Pn = (e, t = [1, 1]) => ({ x: t[0] * Math.round(e.x / t[0]), y: t[1] * Math.round(e.y / t[1]) }),
	Ut = ({ x: e, y: t }, [n, r, o], s = !1, i = [1, 1]) => {
		const a = { x: (e - n) / o, y: (t - r) / o };
		return s ? Pn(a, i) : a;
	},
	Zt = ({ x: e, y: t }, [n, r, o]) => ({ x: e * o + n, y: t * o + r });
function zt(e, t) {
	if (typeof e == 'number') return Math.floor((t - t / (1 + e)) * 0.5);
	if (typeof e == 'string' && e.endsWith('px')) {
		const n = parseFloat(e);
		if (!Number.isNaN(n)) return Math.floor(n);
	}
	if (typeof e == 'string' && e.endsWith('%')) {
		const n = parseFloat(e);
		if (!Number.isNaN(n)) return Math.floor(t * n * 0.01);
	}
	return (
		console.error(
			`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`,
		),
		0
	);
}
function Ad(e, t, n) {
	if (typeof e == 'string' || typeof e == 'number') {
		const r = zt(e, n),
			o = zt(e, t);
		return { top: r, right: o, bottom: r, left: o, x: o * 2, y: r * 2 };
	}
	if (typeof e == 'object') {
		const r = zt(e.top ?? e.y ?? 0, n),
			o = zt(e.bottom ?? e.y ?? 0, n),
			s = zt(e.left ?? e.x ?? 0, t),
			i = zt(e.right ?? e.x ?? 0, t);
		return { top: r, right: i, bottom: o, left: s, x: s + i, y: r + o };
	}
	return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function zd(e, t, n, r, o, s) {
	const { x: i, y: a } = Zt(e, [t, n, r]),
		{ x: l, y: d } = Zt({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]),
		u = o - l,
		h = s - d;
	return { left: Math.floor(i), top: Math.floor(a), right: Math.floor(u), bottom: Math.floor(h) };
}
const wo = (e, t, n, r, o, s) => {
		const i = Ad(s, t, n),
			a = (t - i.x) / e.width,
			l = (n - i.y) / e.height,
			d = Math.min(a, l),
			u = Xt(d, r, o),
			h = e.x + e.width / 2,
			f = e.y + e.height / 2,
			g = t / 2 - h * u,
			m = n / 2 - f * u,
			x = zd(e, g, m, u, t, n),
			w = {
				left: Math.min(x.left - i.left, 0),
				top: Math.min(x.top - i.top, 0),
				right: Math.min(x.right - i.right, 0),
				bottom: Math.min(x.bottom - i.bottom, 0),
			};
		return { x: g - w.left + w.right, y: m - w.top + w.bottom, zoom: u };
	},
	tr = () => {
		var e;
		return (
			typeof navigator < 'u' &&
			((e = navigator == null ? void 0 : navigator.userAgent) == null
				? void 0
				: e.indexOf('Mac')) >= 0
		);
	};
function qt(e) {
	return e != null && e !== 'parent';
}
function At(e) {
	var t, n;
	return {
		width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
		height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0,
	};
}
function Td(e) {
	var t, n;
	return (
		(((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 &&
		(((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0
	);
}
function Id(e, t = { width: 0, height: 0 }, n, r, o) {
	const s = { ...e },
		i = r.get(n);
	if (i) {
		const a = i.origin || o;
		(s.x += i.internals.positionAbsolute.x - (t.width ?? 0) * a[0]),
			(s.y += i.internals.positionAbsolute.y - (t.height ?? 0) * a[1]);
	}
	return s;
}
function Od(e) {
	return { ...pd, ...(e || {}) };
}
function Nr(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
	const { x: s, y: i } = Ze(e),
		a = Ut(
			{ x: s - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) },
			r,
		),
		{ x: l, y: d } = n ? Pn(a, t) : a;
	return { xSnapped: l, ySnapped: d, ...a };
}
const vs = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
	ys = (e) => {
		var t;
		return (
			((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) ||
			(window == null ? void 0 : window.document)
		);
	},
	Dd = ['INPUT', 'SELECT', 'TEXTAREA'];
function ms(e) {
	var r, o;
	const t =
		((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
	return (t == null ? void 0 : t.nodeType) !== 1
		? !1
		: Dd.includes(t.nodeName) || t.hasAttribute('contenteditable') || !!t.closest('.nokey');
}
const ws = (e) => 'clientX' in e,
	Ze = (e, t) => {
		var s, i;
		const n = ws(e),
			r = n ? e.clientX : (s = e.touches) == null ? void 0 : s[0].clientX,
			o = n ? e.clientY : (i = e.touches) == null ? void 0 : i[0].clientY;
		return {
			x: r - ((t == null ? void 0 : t.left) ?? 0),
			y: o - ((t == null ? void 0 : t.top) ?? 0),
		};
	},
	si = (e, t, n, r, o) => {
		const s = t.querySelectorAll(`.${e}`);
		return !s || !s.length
			? null
			: Array.from(s).map((i) => {
					const a = i.getBoundingClientRect();
					return {
						id: i.getAttribute('data-handleid'),
						type: e,
						nodeId: o,
						position: i.getAttribute('data-handlepos'),
						x: (a.left - n.left) / r,
						y: (a.top - n.top) / r,
						...vs(i),
					};
				});
	};
function Hd({
	sourceX: e,
	sourceY: t,
	targetX: n,
	targetY: r,
	sourceControlX: o,
	sourceControlY: s,
	targetControlX: i,
	targetControlY: a,
}) {
	const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125,
		d = t * 0.125 + s * 0.375 + a * 0.375 + r * 0.125,
		u = Math.abs(l - e),
		h = Math.abs(d - t);
	return [l, d, u, h];
}
function Rn(e, t) {
	return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ai({ pos: e, x1: t, y1: n, x2: r, y2: o, c: s }) {
	switch (e) {
		case ne.Left:
			return [t - Rn(t - r, s), n];
		case ne.Right:
			return [t + Rn(r - t, s), n];
		case ne.Top:
			return [t, n - Rn(n - o, s)];
		case ne.Bottom:
			return [t, n + Rn(o - n, s)];
	}
}
function xs({
	sourceX: e,
	sourceY: t,
	sourcePosition: n = ne.Bottom,
	targetX: r,
	targetY: o,
	targetPosition: s = ne.Top,
	curvature: i = 0.25,
}) {
	const [a, l] = ai({ pos: n, x1: e, y1: t, x2: r, y2: o, c: i }),
		[d, u] = ai({ pos: s, x1: r, y1: o, x2: e, y2: t, c: i }),
		[h, f, g, m] = Hd({
			sourceX: e,
			sourceY: t,
			targetX: r,
			targetY: o,
			sourceControlX: a,
			sourceControlY: l,
			targetControlX: d,
			targetControlY: u,
		});
	return [`M${e},${t} C${a},${l} ${d},${u} ${r},${o}`, h, f, g, m];
}
function ps({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	const o = Math.abs(n - e) / 2,
		s = n < e ? n + o : n - o,
		i = Math.abs(r - t) / 2,
		a = r < t ? r + i : r - i;
	return [s, a, o, i];
}
function Rd({
	sourceNode: e,
	targetNode: t,
	selected: n = !1,
	zIndex: r = 0,
	elevateOnSelect: o = !1,
	zIndexMode: s = 'basic',
}) {
	if (s === 'manual') return r;
	const i = o && n ? r + 1e3 : r,
		a = Math.max(
			e.parentId || (o && e.selected) ? e.internals.z : 0,
			t.parentId || (o && t.selected) ? t.internals.z : 0,
		);
	return i + a;
}
function Ld({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
	const s = hr(er(e), er(t));
	s.x === s.x2 && (s.x2 += 1), s.y === s.y2 && (s.y2 += 1);
	const i = { x: -o[0] / o[2], y: -o[1] / o[2], width: n / o[2], height: r / o[2] };
	return pn(i, gr(s)) > 0;
}
const Vd = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
		`xy-edge__${e}${t || ''}-${n}${r || ''}`,
	Kd = (e, t) =>
		t.some(
			(n) =>
				n.source === e.source &&
				n.target === e.target &&
				(n.sourceHandle === e.sourceHandle || (!n.sourceHandle && !e.sourceHandle)) &&
				(n.targetHandle === e.targetHandle || (!n.targetHandle && !e.targetHandle)),
		),
	Bd = (e, t, n = {}) => {
		var s;
		if (!e.source || !e.target)
			return (s = n.onError) == null || s.call(n, '006', Et.error006()), t;
		const r = n.getEdgeId || Vd;
		let o;
		return (
			ds(e) ? (o = { ...e }) : (o = { ...e, id: r(e) }),
			Kd(o, t)
				? t
				: (o.sourceHandle === null && delete o.sourceHandle,
					o.targetHandle === null && delete o.targetHandle,
					t.concat(o))
		);
	};
function bs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	const [o, s, i, a] = ps({ sourceX: e, sourceY: t, targetX: n, targetY: r });
	return [`M ${e},${t}L ${n},${r}`, o, s, i, a];
}
const li = {
		[ne.Left]: { x: -1, y: 0 },
		[ne.Right]: { x: 1, y: 0 },
		[ne.Top]: { x: 0, y: -1 },
		[ne.Bottom]: { x: 0, y: 1 },
	},
	Fd = ({ source: e, sourcePosition: t = ne.Bottom, target: n }) =>
		t === ne.Left || t === ne.Right
			? e.x < n.x
				? { x: 1, y: 0 }
				: { x: -1, y: 0 }
			: e.y < n.y
				? { x: 0, y: 1 }
				: { x: 0, y: -1 },
	ci = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function Yd({
	source: e,
	sourcePosition: t = ne.Bottom,
	target: n,
	targetPosition: r = ne.Top,
	center: o,
	offset: s,
	stepPosition: i,
}) {
	const a = li[t],
		l = li[r],
		d = { x: e.x + a.x * s, y: e.y + a.y * s },
		u = { x: n.x + l.x * s, y: n.y + l.y * s },
		h = Fd({ source: d, sourcePosition: t, target: u }),
		f = h.x !== 0 ? 'x' : 'y',
		g = h[f];
	let m = [],
		x,
		w;
	const S = { x: 0, y: 0 },
		O = { x: 0, y: 0 },
		[, , P, A] = ps({ sourceX: e.x, sourceY: e.y, targetX: n.x, targetY: n.y });
	if (a[f] * l[f] === -1) {
		f === 'x'
			? ((x = o.x ?? d.x + (u.x - d.x) * i), (w = o.y ?? (d.y + u.y) / 2))
			: ((x = o.x ?? (d.x + u.x) / 2), (w = o.y ?? d.y + (u.y - d.y) * i));
		const Q = [
				{ x, y: d.y },
				{ x, y: u.y },
			],
			Y = [
				{ x: d.x, y: w },
				{ x: u.x, y: w },
			];
		a[f] === g ? (m = f === 'x' ? Q : Y) : (m = f === 'x' ? Y : Q);
	} else {
		const Q = [{ x: d.x, y: u.y }],
			Y = [{ x: u.x, y: d.y }];
		if ((f === 'x' ? (m = a.x === g ? Y : Q) : (m = a.y === g ? Q : Y), t === r)) {
			const v = Math.abs(e[f] - n[f]);
			if (v <= s) {
				const E = Math.min(s - 1, s - v);
				a[f] === g ? (S[f] = (d[f] > e[f] ? -1 : 1) * E) : (O[f] = (u[f] > n[f] ? -1 : 1) * E);
			}
		}
		if (t !== r) {
			const v = f === 'x' ? 'y' : 'x',
				E = a[f] === l[v],
				y = d[v] > u[v],
				k = d[v] < u[v];
			((a[f] === 1 && ((!E && y) || (E && k))) || (a[f] !== 1 && ((!E && k) || (E && y)))) &&
				(m = f === 'x' ? Q : Y);
		}
		const $ = { x: d.x + S.x, y: d.y + S.y },
			M = { x: u.x + O.x, y: u.y + O.y },
			p = Math.max(Math.abs($.x - m[0].x), Math.abs(M.x - m[0].x)),
			N = Math.max(Math.abs($.y - m[0].y), Math.abs(M.y - m[0].y));
		p >= N ? ((x = ($.x + M.x) / 2), (w = m[0].y)) : ((x = m[0].x), (w = ($.y + M.y) / 2));
	}
	const H = { x: d.x + S.x, y: d.y + S.y },
		V = { x: u.x + O.x, y: u.y + O.y };
	return [
		[
			e,
			...(H.x !== m[0].x || H.y !== m[0].y ? [H] : []),
			...m,
			...(V.x !== m[m.length - 1].x || V.y !== m[m.length - 1].y ? [V] : []),
			n,
		],
		x,
		w,
		P,
		A,
	];
}
function Xd(e, t, n, r) {
	const o = Math.min(ci(e, t) / 2, ci(t, n) / 2, r),
		{ x: s, y: i } = t;
	if ((e.x === s && s === n.x) || (e.y === i && i === n.y)) return `L${s} ${i}`;
	if (e.y === i) {
		const d = e.x < n.x ? -1 : 1,
			u = e.y < n.y ? 1 : -1;
		return `L ${s + o * d},${i}Q ${s},${i} ${s},${i + o * u}`;
	}
	const a = e.x < n.x ? 1 : -1,
		l = e.y < n.y ? -1 : 1;
	return `L ${s},${i + o * l}Q ${s},${i} ${s + o * a},${i}`;
}
function xo({
	sourceX: e,
	sourceY: t,
	sourcePosition: n = ne.Bottom,
	targetX: r,
	targetY: o,
	targetPosition: s = ne.Top,
	borderRadius: i = 5,
	centerX: a,
	centerY: l,
	offset: d = 20,
	stepPosition: u = 0.5,
}) {
	const [h, f, g, m, x] = Yd({
		source: { x: e, y: t },
		sourcePosition: n,
		target: { x: r, y: o },
		targetPosition: s,
		center: { x: a, y: l },
		offset: d,
		stepPosition: u,
	});
	let w = `M${h[0].x} ${h[0].y}`;
	for (let S = 1; S < h.length - 1; S++) w += Xd(h[S - 1], h[S], h[S + 1], i);
	return (w += `L${h[h.length - 1].x} ${h[h.length - 1].y}`), [w, f, g, m, x];
}
function ui(e) {
	var t;
	return (
		e &&
		!!(e.internals.handleBounds || ((t = e.handles) != null && t.length)) &&
		!!(e.measured.width || e.width || e.initialWidth)
	);
}
function Wd(e) {
	var h;
	const { sourceNode: t, targetNode: n } = e;
	if (!ui(t) || !ui(n)) return null;
	const r = t.internals.handleBounds || di(t.handles),
		o = n.internals.handleBounds || di(n.handles),
		s = fi((r == null ? void 0 : r.source) ?? [], e.sourceHandle),
		i = fi(
			e.connectionMode === Yt.Strict
				? ((o == null ? void 0 : o.target) ?? [])
				: ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
			e.targetHandle,
		);
	if (!s || !i)
		return (
			(h = e.onError) == null ||
				h.call(
					e,
					'008',
					Et.error008(s ? 'target' : 'source', {
						id: e.id,
						sourceHandle: e.sourceHandle,
						targetHandle: e.targetHandle,
					}),
				),
			null
		);
	const a = (s == null ? void 0 : s.position) || ne.Bottom,
		l = (i == null ? void 0 : i.position) || ne.Top,
		d = Mt(t, s, a),
		u = Mt(n, i, l);
	return {
		sourceX: d.x,
		sourceY: d.y,
		targetX: u.x,
		targetY: u.y,
		sourcePosition: a,
		targetPosition: l,
	};
}
function di(e) {
	if (!e) return null;
	const t = [],
		n = [];
	for (const r of e)
		(r.width = r.width ?? 1),
			(r.height = r.height ?? 1),
			r.type === 'source' ? t.push(r) : r.type === 'target' && n.push(r);
	return { source: t, target: n };
}
function Mt(e, t, n = ne.Left, r = !1) {
	const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x,
		s = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y,
		{ width: i, height: a } = t ?? At(e);
	if (r) return { x: o + i / 2, y: s + a / 2 };
	switch ((t == null ? void 0 : t.position) ?? n) {
		case ne.Top:
			return { x: o + i / 2, y: s };
		case ne.Right:
			return { x: o + i, y: s + a / 2 };
		case ne.Bottom:
			return { x: o + i / 2, y: s + a };
		case ne.Left:
			return { x: o, y: s + a / 2 };
	}
}
function fi(e, t) {
	return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
}
function Jr(e, t) {
	return e
		? typeof e == 'string'
			? e
			: `${t ? `${t}__` : ''}${Object.keys(e)
					.sort()
					.map((r) => `${r}=${e[r]}`)
					.join('&')}`
		: '';
}
function Zd(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
	const s = new Set();
	return e
		.reduce(
			(i, a) => (
				[a.markerStart || r, a.markerEnd || o].forEach((l) => {
					if (l && typeof l == 'object') {
						const d = Jr(l, t);
						s.has(d) || (i.push({ id: d, color: l.color || n, ...l }), s.add(d));
					}
				}),
				i
			),
			[],
		)
		.sort((i, a) => i.id.localeCompare(a.id));
}
const _s = 1e3,
	qd = 10,
	po = {
		nodeOrigin: [0, 0],
		nodeExtent: Gr,
		elevateNodesOnSelect: !0,
		zIndexMode: 'basic',
		defaults: {},
	},
	Gd = { ...po, checkEquality: !0 };
function bo(e, t) {
	const n = { ...e };
	for (const r in t) t[r] !== void 0 && (n[r] = t[r]);
	return n;
}
function Ud(e, t, n) {
	const r = bo(po, n);
	for (const o of e.values())
		if (o.parentId) ko(o, e, t, r);
		else {
			const s = Nn(o, r.nodeOrigin),
				i = qt(o.extent) ? o.extent : r.nodeExtent,
				a = Ct(s, i, At(o));
			o.internals.positionAbsolute = a;
		}
}
function Qd(e, t) {
	if (!e.handles) return e.measured ? (t == null ? void 0 : t.internals.handleBounds) : void 0;
	const n = [],
		r = [];
	for (const o of e.handles) {
		const s = {
			id: o.id,
			width: o.width ?? 1,
			height: o.height ?? 1,
			nodeId: e.id,
			x: o.x,
			y: o.y,
			position: o.position,
			type: o.type,
		};
		o.type === 'source' ? n.push(s) : o.type === 'target' && r.push(s);
	}
	return { source: n, target: r };
}
function _o(e) {
	return e === 'manual';
}
function Jd(e, t, n, r = {}) {
	var u, h;
	const o = bo(Gd, r),
		s = { i: 0 },
		i = new Map(t),
		a = o != null && o.elevateNodesOnSelect && !_o(o.zIndexMode) ? _s : 0;
	let l = e.length > 0,
		d = !1;
	t.clear(), n.clear();
	for (const f of e) {
		let g = i.get(f.id);
		if (o.checkEquality && f === (g == null ? void 0 : g.internals.userNode)) t.set(f.id, g);
		else {
			const m = Nn(f, o.nodeOrigin),
				x = qt(f.extent) ? f.extent : o.nodeExtent,
				w = Ct(m, x, At(f));
			(g = {
				...o.defaults,
				...f,
				measured: {
					width: (u = f.measured) == null ? void 0 : u.width,
					height: (h = f.measured) == null ? void 0 : h.height,
				},
				internals: {
					positionAbsolute: w,
					handleBounds: Qd(f, g),
					z: ks(f, a, o.zIndexMode),
					userNode: f,
				},
			}),
				t.set(f.id, g);
		}
		(g.measured === void 0 || g.measured.width === void 0 || g.measured.height === void 0) &&
			!g.hidden &&
			(l = !1),
			f.parentId && ko(g, t, n, r, s),
			d || (d = f.selected ?? !1);
	}
	return { nodesInitialized: l, hasSelectedNodes: d };
}
function jd(e, t) {
	if (!e.parentId) return;
	const n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
}
function ko(e, t, n, r, o) {
	const { elevateNodesOnSelect: s, nodeOrigin: i, nodeExtent: a, zIndexMode: l } = bo(po, r),
		d = e.parentId,
		u = t.get(d);
	if (!u) {
		console.warn(
			`Parent node ${d} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
		);
		return;
	}
	jd(e, n),
		o &&
			!u.parentId &&
			u.internals.rootParentIndex === void 0 &&
			l === 'auto' &&
			((u.internals.rootParentIndex = ++o.i), (u.internals.z = u.internals.z + o.i * qd)),
		o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
	const h = s && !_o(l) ? _s : 0,
		{ x: f, y: g, z: m } = $d(e, u, i, a, h, l),
		{ positionAbsolute: x } = e.internals,
		w = f !== x.x || g !== x.y;
	(w || m !== e.internals.z) &&
		t.set(e.id, {
			...e,
			internals: { ...e.internals, positionAbsolute: w ? { x: f, y: g } : x, z: m },
		});
}
function ks(e, t, n) {
	const r = st(e.zIndex) ? e.zIndex : 0;
	return _o(n) ? r : r + (e.selected ? t : 0);
}
function $d(e, t, n, r, o, s) {
	const { x: i, y: a } = t.internals.positionAbsolute,
		l = At(e),
		d = Nn(e, n),
		u = qt(e.extent) ? Ct(d, e.extent, l) : d;
	let h = Ct({ x: i + u.x, y: a + u.y }, r, l);
	e.extent === 'parent' && (h = hs(h, l, t));
	const f = ks(e, o, s),
		g = t.internals.z ?? 0;
	return { x: h.x, y: h.y, z: g >= f ? g + 1 : f };
}
function ef(e, t, n, r = [0, 0]) {
	var i;
	const o = [],
		s = new Map();
	for (const a of e) {
		const l = t.get(a.parentId);
		if (!l) continue;
		const d = ((i = s.get(a.parentId)) == null ? void 0 : i.expandedRect) ?? Wt(l),
			u = Pd(d, a.rect);
		s.set(a.parentId, { expandedRect: u, parent: l });
	}
	return (
		s.size > 0 &&
			s.forEach(({ expandedRect: a, parent: l }, d) => {
				var P;
				const u = l.internals.positionAbsolute,
					h = At(l),
					f = l.origin ?? r,
					g = a.x < u.x ? Math.round(Math.abs(u.x - a.x)) : 0,
					m = a.y < u.y ? Math.round(Math.abs(u.y - a.y)) : 0,
					x = Math.max(h.width, Math.round(a.width)),
					w = Math.max(h.height, Math.round(a.height)),
					S = (x - h.width) * f[0],
					O = (w - h.height) * f[1];
				(g > 0 || m > 0 || S || O) &&
					(o.push({
						id: d,
						type: 'position',
						position: { x: l.position.x - g + S, y: l.position.y - m + O },
					}),
					(P = n.get(d)) == null ||
						P.forEach((A) => {
							e.some((H) => H.id === A.id) ||
								o.push({
									id: A.id,
									type: 'position',
									position: { x: A.position.x + g, y: A.position.y + m },
								});
						})),
					(h.width < a.width || h.height < a.height || g || m) &&
						o.push({
							id: d,
							type: 'dimensions',
							setAttributes: !0,
							dimensions: { width: x + (g ? f[0] * g - S : 0), height: w + (m ? f[1] * m - O : 0) },
						});
			}),
		o
	);
}
function tf(e, t, n, r, o, s, i) {
	const a = r == null ? void 0 : r.querySelector('.xyflow__viewport');
	let l = !1;
	if (!a) return { changes: [], updatedInternals: l };
	const d = [],
		u = window.getComputedStyle(a),
		{ m22: h } = new window.DOMMatrixReadOnly(u.transform),
		f = [];
	for (const g of e.values()) {
		const m = t.get(g.id);
		if (!m) continue;
		if (m.hidden) {
			t.set(m.id, { ...m, internals: { ...m.internals, handleBounds: void 0 } }), (l = !0);
			continue;
		}
		const x = vs(g.nodeElement),
			w = m.measured.width !== x.width || m.measured.height !== x.height;
		if (x.width && x.height && (w || !m.internals.handleBounds || g.force)) {
			const O = g.nodeElement.getBoundingClientRect(),
				P = qt(m.extent) ? m.extent : s;
			let { positionAbsolute: A } = m.internals;
			m.parentId && m.extent === 'parent'
				? (A = hs(A, x, t.get(m.parentId)))
				: P && (A = Ct(A, P, x));
			const H = {
				...m,
				measured: x,
				internals: {
					...m.internals,
					positionAbsolute: A,
					handleBounds: {
						source: si('source', g.nodeElement, O, h, m.id),
						target: si('target', g.nodeElement, O, h, m.id),
					},
				},
			};
			t.set(m.id, H),
				m.parentId && ko(H, t, n, { nodeOrigin: o, zIndexMode: i }),
				(l = !0),
				w &&
					(d.push({ id: m.id, type: 'dimensions', dimensions: x }),
					m.expandParent &&
						m.parentId &&
						f.push({ id: m.id, parentId: m.parentId, rect: Wt(H, o) }));
		}
	}
	if (f.length > 0) {
		const g = ef(f, t, n, o);
		d.push(...g);
	}
	return { changes: d, updatedInternals: l };
}
async function nf({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: s }) {
	if (!t || (!e.x && !e.y)) return !1;
	const i = await t.setViewportConstrained(
		{ x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
		[
			[0, 0],
			[o, s],
		],
		r,
	);
	return !!i && (i.x !== n[0] || i.y !== n[1] || i.k !== n[2]);
}
function hi(e, t, n, r, o, s) {
	let i = o;
	const a = r.get(i) || new Map();
	r.set(i, a.set(n, t)), (i = `${o}-${e}`);
	const l = r.get(i) || new Map();
	if ((r.set(i, l.set(n, t)), s)) {
		i = `${o}-${e}-${s}`;
		const d = r.get(i) || new Map();
		r.set(i, d.set(n, t));
	}
}
function rf(e, t, n) {
	e.clear(), t.clear();
	for (const r of n) {
		const { source: o, target: s, sourceHandle: i = null, targetHandle: a = null } = r,
			l = { edgeId: r.id, source: o, target: s, sourceHandle: i, targetHandle: a },
			d = `${o}-${i}--${s}-${a}`,
			u = `${s}-${a}--${o}-${i}`;
		hi('source', l, u, e, o, i), hi('target', l, d, e, s, a), t.set(r.id, r);
	}
}
function Ss(e, t) {
	if (!e.parentId) return !1;
	const n = t.get(e.parentId);
	return n ? (n.selected ? !0 : Ss(n, t)) : !1;
}
function gi(e, t, n) {
	var o;
	let r = e;
	do {
		if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t)) return !0;
		if (r === n) return !1;
		r = r == null ? void 0 : r.parentElement;
	} while (r);
	return !1;
}
function of(e, t, n, r) {
	const o = new Map();
	for (const [s, i] of e)
		if (
			(i.selected || i.id === r) &&
			(!i.parentId || !Ss(i, e)) &&
			(i.draggable || (t && typeof i.draggable > 'u'))
		) {
			const a = e.get(s);
			a &&
				o.set(s, {
					id: s,
					position: a.position || { x: 0, y: 0 },
					distance: {
						x: n.x - a.internals.positionAbsolute.x,
						y: n.y - a.internals.positionAbsolute.y,
					},
					extent: a.extent,
					parentId: a.parentId,
					origin: a.origin,
					expandParent: a.expandParent,
					internals: { positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 } },
					measured: { width: a.measured.width ?? 0, height: a.measured.height ?? 0 },
				});
		}
	return o;
}
function Pr({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
	var i, a, l;
	const o = [];
	for (const [d, u] of t) {
		const h = (i = n.get(d)) == null ? void 0 : i.internals.userNode;
		h && o.push({ ...h, position: u.position, dragging: r });
	}
	if (!e) return [o[0], o];
	const s = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
	return [
		s
			? {
					...s,
					position: ((l = t.get(e)) == null ? void 0 : l.position) || s.position,
					dragging: r,
				}
			: o[0],
		o,
	];
}
function sf({ dragItems: e, snapGrid: t, x: n, y: r }) {
	const o = e.values().next().value;
	if (!o) return null;
	const s = { x: n - o.distance.x, y: r - o.distance.y },
		i = Pn(s, t);
	return { x: i.x - s.x, y: i.y - s.y };
}
function af({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
	let s = { x: null, y: null },
		i = 0,
		a = new Map(),
		l = !1,
		d = { x: 0, y: 0 },
		u = null,
		h = !1,
		f = null,
		g = !1,
		m = !1,
		x = null;
	function w({
		noDragClassName: O,
		handleSelector: P,
		domNode: A,
		isSelectable: H,
		nodeId: V,
		nodeClickDistance: F = 0,
	}) {
		f = Xe(A);
		function Q({ x: p, y: N }) {
			const {
				nodeLookup: v,
				nodeExtent: E,
				snapGrid: y,
				snapToGrid: k,
				nodeOrigin: I,
				onNodeDrag: z,
				onSelectionDrag: T,
				onError: K,
				updateNodePositions: G,
			} = t();
			s = { x: p, y: N };
			let Z = !1;
			const X = a.size > 1,
				j = X && E ? Qr(fr(a)) : null,
				R = X && k ? sf({ dragItems: a, snapGrid: y, x: p, y: N }) : null;
			for (const [L, W] of a) {
				if (!v.has(L)) continue;
				let ie = { x: p - W.distance.x, y: N - W.distance.y };
				k && (ie = R ? { x: Math.round(ie.x + R.x), y: Math.round(ie.y + R.y) } : Pn(ie, y));
				let ge = null;
				if (X && E && !W.extent && j) {
					const { positionAbsolute: ue } = W.internals,
						pe = ue.x - j.x + E[0][0],
						ze = ue.x + W.measured.width - j.x2 + E[1][0],
						Te = ue.y - j.y + E[0][1],
						Ne = ue.y + W.measured.height - j.y2 + E[1][1];
					ge = [
						[pe, Te],
						[ze, Ne],
					];
				}
				const { position: re, positionAbsolute: we } = fs({
					nodeId: L,
					nextPosition: ie,
					nodeLookup: v,
					nodeExtent: ge || E,
					nodeOrigin: I,
					onError: K,
				});
				(Z = Z || W.position.x !== re.x || W.position.y !== re.y),
					(W.position = re),
					(W.internals.positionAbsolute = we);
			}
			if (((m = m || Z), !!Z && (G(a, !0), x && (r || z || (!V && T))))) {
				const [L, W] = Pr({ nodeId: V, dragItems: a, nodeLookup: v });
				r == null || r(x, a, L, W), z == null || z(x, L, W), V || T == null || T(x, W);
			}
		}
		async function Y() {
			if (!u) return;
			const { transform: p, panBy: N, autoPanSpeed: v, autoPanOnNodeDrag: E } = t();
			if (!E) {
				(l = !1), cancelAnimationFrame(i);
				return;
			}
			const [y, k] = mo(d, u, v);
			(y !== 0 || k !== 0) &&
				((s.x = (s.x ?? 0) - y / p[2]),
				(s.y = (s.y ?? 0) - k / p[2]),
				(await N({ x: y, y: k })) && Q(s)),
				(i = requestAnimationFrame(Y));
		}
		function $(p) {
			var X;
			const {
				nodeLookup: N,
				multiSelectionActive: v,
				nodesDraggable: E,
				transform: y,
				snapGrid: k,
				snapToGrid: I,
				selectNodesOnDrag: z,
				onNodeDragStart: T,
				onSelectionDragStart: K,
				unselectNodesAndEdges: G,
			} = t();
			(h = !0),
				(!z || !H) && !v && V && (((X = N.get(V)) != null && X.selected) || G()),
				H && z && V && (e == null || e(V));
			const Z = Nr(p.sourceEvent, { transform: y, snapGrid: k, snapToGrid: I, containerBounds: u });
			if (((s = Z), (a = of(N, E, Z, V)), a.size > 0 && (n || T || (!V && K)))) {
				const [j, R] = Pr({ nodeId: V, dragItems: a, nodeLookup: N });
				n == null || n(p.sourceEvent, a, j, R),
					T == null || T(p.sourceEvent, j, R),
					V || K == null || K(p.sourceEvent, R);
			}
		}
		const M = Cc()
			.clickDistance(F)
			.on('start', (p) => {
				const { domNode: N, nodeDragThreshold: v, transform: E, snapGrid: y, snapToGrid: k } = t();
				(u = (N == null ? void 0 : N.getBoundingClientRect()) || null),
					(g = !1),
					(m = !1),
					(x = p.sourceEvent),
					v === 0 && $(p),
					(s = Nr(p.sourceEvent, { transform: E, snapGrid: y, snapToGrid: k, containerBounds: u })),
					(d = Ze(p.sourceEvent, u));
			})
			.on('drag', (p) => {
				const {
						autoPanOnNodeDrag: N,
						transform: v,
						snapGrid: E,
						snapToGrid: y,
						nodeDragThreshold: k,
						nodeLookup: I,
					} = t(),
					z = Nr(p.sourceEvent, { transform: v, snapGrid: E, snapToGrid: y, containerBounds: u });
				if (
					((x = p.sourceEvent),
					((p.sourceEvent.type === 'touchmove' && p.sourceEvent.touches.length > 1) ||
						(V && !I.has(V))) &&
						(g = !0),
					!g)
				) {
					if ((!l && N && h && ((l = !0), Y()), !h)) {
						const T = Ze(p.sourceEvent, u),
							K = T.x - d.x,
							G = T.y - d.y;
						Math.sqrt(K * K + G * G) > k && $(p);
					}
					(s.x !== z.xSnapped || s.y !== z.ySnapped) &&
						a &&
						h &&
						((d = Ze(p.sourceEvent, u)), Q(z));
				}
			})
			.on('end', (p) => {
				if (!h || g) {
					g && a.size > 0 && t().updateNodePositions(a, !1);
					return;
				}
				if (((l = !1), (h = !1), cancelAnimationFrame(i), a.size > 0)) {
					const {
						nodeLookup: N,
						updateNodePositions: v,
						onNodeDragStop: E,
						onSelectionDragStop: y,
					} = t();
					if ((m && (v(a, !1), (m = !1)), o || E || (!V && y))) {
						const [k, I] = Pr({ nodeId: V, dragItems: a, nodeLookup: N, dragging: !1 });
						o == null || o(p.sourceEvent, a, k, I),
							E == null || E(p.sourceEvent, k, I),
							V || y == null || y(p.sourceEvent, I);
					}
				}
			})
			.filter((p) => {
				const N = p.target;
				return !p.button && (!O || !gi(N, `.${O}`, A)) && (!P || gi(N, P, A));
			});
		f.call(M);
	}
	function S() {
		f == null || f.on('.drag', null);
	}
	return { update: w, destroy: S };
}
function lf(e, t, n) {
	const r = [],
		o = { x: e.x - n, y: e.y - n, width: n * 2, height: n * 2 };
	for (const s of t.values()) pn(o, Wt(s)) > 0 && r.push(s);
	return r;
}
const cf = 250;
function uf(e, t, n, r) {
	var a, l;
	let o = [],
		s = 1 / 0;
	const i = lf(e, n, t + cf);
	for (const d of i) {
		const u = [
			...(((a = d.internals.handleBounds) == null ? void 0 : a.source) ?? []),
			...(((l = d.internals.handleBounds) == null ? void 0 : l.target) ?? []),
		];
		for (const h of u) {
			if (r.nodeId === h.nodeId && r.type === h.type && r.id === h.id) continue;
			const { x: f, y: g } = Mt(d, h, h.position, !0),
				m = Math.sqrt((f - e.x) ** 2 + (g - e.y) ** 2);
			m > t ||
				(m < s ? ((o = [{ ...h, x: f, y: g }]), (s = m)) : m === s && o.push({ ...h, x: f, y: g }));
		}
	}
	if (!o.length) return null;
	if (o.length > 1) {
		const d = r.type === 'source' ? 'target' : 'source';
		return o.find((u) => u.type === d) ?? o[0];
	}
	return o[0];
}
function Es(e, t, n, r, o, s = !1) {
	var d, u, h;
	const i = r.get(e);
	if (!i) return null;
	const a =
			o === 'strict'
				? (d = i.internals.handleBounds) == null
					? void 0
					: d[t]
				: [
						...(((u = i.internals.handleBounds) == null ? void 0 : u.source) ?? []),
						...(((h = i.internals.handleBounds) == null ? void 0 : h.target) ?? []),
					],
		l = (n ? (a == null ? void 0 : a.find((f) => f.id === n)) : a == null ? void 0 : a[0]) ?? null;
	return l && s ? { ...l, ...Mt(i, l, l.position, !0) } : l;
}
function Cs(e, t) {
	return (
		e ||
		(t != null && t.classList.contains('target')
			? 'target'
			: t != null && t.classList.contains('source')
				? 'source'
				: null)
	);
}
function df(e, t) {
	let n = null;
	return t ? (n = !0) : e && !t && (n = !1), n;
}
const Ms = () => !0;
function ff(
	e,
	{
		connectionMode: t,
		connectionRadius: n,
		handleId: r,
		nodeId: o,
		edgeUpdaterType: s,
		isTarget: i,
		domNode: a,
		nodeLookup: l,
		lib: d,
		autoPanOnConnect: u,
		flowId: h,
		panBy: f,
		cancelConnection: g,
		onConnectStart: m,
		onConnect: x,
		onConnectEnd: w,
		isValidConnection: S = Ms,
		onReconnectEnd: O,
		updateConnection: P,
		getTransform: A,
		getFromHandle: H,
		autoPanSpeed: V,
		dragThreshold: F = 1,
		handleDomNode: Q,
	},
) {
	const Y = ys(e.target);
	let $ = 0,
		M;
	const { x: p, y: N } = Ze(e),
		v = Cs(s, Q),
		E = a == null ? void 0 : a.getBoundingClientRect();
	let y = !1;
	if (!E || !v) return;
	const k = Es(o, v, r, l, t);
	if (!k) return;
	let I = Ze(e, E),
		z = !1,
		T = null,
		K = !1,
		G = null;
	function Z() {
		if (!u || !E) return;
		const [re, we] = mo(I, E, V);
		f({ x: re, y: we }), ($ = requestAnimationFrame(Z));
	}
	const X = { ...k, nodeId: o, type: v, position: k.position },
		j = l.get(o);
	let L = {
		inProgress: !0,
		isValid: null,
		from: Mt(j, X, ne.Left, !0),
		fromHandle: X,
		fromPosition: X.position,
		fromNode: j,
		to: I,
		toHandle: null,
		toPosition: ni[X.position],
		toNode: null,
		pointer: I,
	};
	function W() {
		(y = !0), P(L), m == null || m(e, { nodeId: o, handleId: r, handleType: v });
	}
	F === 0 && W();
	function ie(re) {
		if (!y) {
			const { x: Ne, y: oe } = Ze(re),
				he = Ne - p,
				_e = oe - N;
			if (!(he * he + _e * _e > F * F)) return;
			W();
		}
		if (!H() || !X) {
			ge(re);
			return;
		}
		const we = A();
		(I = Ze(re, E)), (M = uf(Ut(I, we, !1, [1, 1]), n, l, X)), z || (Z(), (z = !0));
		const ue = Ns(re, {
			handle: M,
			connectionMode: t,
			fromNodeId: o,
			fromHandleId: r,
			fromType: i ? 'target' : 'source',
			isValidConnection: S,
			doc: Y,
			lib: d,
			flowId: h,
			nodeLookup: l,
		});
		(G = ue.handleDomNode), (T = ue.connection), (K = df(!!M, ue.isValid));
		const pe = l.get(o),
			ze = pe ? Mt(pe, X, ne.Left, !0) : L.from,
			Te = {
				...L,
				from: ze,
				isValid: K,
				to: ue.toHandle && K ? Zt({ x: ue.toHandle.x, y: ue.toHandle.y }, we) : I,
				toHandle: ue.toHandle,
				toPosition: K && ue.toHandle ? ue.toHandle.position : ni[X.position],
				toNode: ue.toHandle ? l.get(ue.toHandle.nodeId) : null,
				pointer: I,
			};
		P(Te), (L = Te);
	}
	function ge(re) {
		if (!('touches' in re && re.touches.length > 0)) {
			if (y) {
				(M || G) && T && K && (x == null || x(T));
				const { inProgress: we, ...ue } = L,
					pe = { ...ue, toPosition: L.toHandle ? L.toPosition : null };
				w == null || w(re, pe), s && (O == null || O(re, pe));
			}
			g(),
				cancelAnimationFrame($),
				(z = !1),
				(K = !1),
				(T = null),
				(G = null),
				Y.removeEventListener('mousemove', ie),
				Y.removeEventListener('mouseup', ge),
				Y.removeEventListener('touchmove', ie),
				Y.removeEventListener('touchend', ge);
		}
	}
	Y.addEventListener('mousemove', ie),
		Y.addEventListener('mouseup', ge),
		Y.addEventListener('touchmove', ie),
		Y.addEventListener('touchend', ge);
}
function Ns(
	e,
	{
		handle: t,
		connectionMode: n,
		fromNodeId: r,
		fromHandleId: o,
		fromType: s,
		doc: i,
		lib: a,
		flowId: l,
		isValidConnection: d = Ms,
		nodeLookup: u,
	},
) {
	const h = s === 'target',
		f = t
			? i.querySelector(
					`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`,
				)
			: null,
		{ x: g, y: m } = Ze(e),
		x = i.elementFromPoint(g, m),
		w = x != null && x.classList.contains(`${a}-flow__handle`) ? x : f,
		S = { handleDomNode: w, isValid: !1, connection: null, toHandle: null };
	if (w) {
		const O = Cs(void 0, w),
			P = w.getAttribute('data-nodeid'),
			A = w.getAttribute('data-handleid'),
			H = w.classList.contains('connectable'),
			V = w.classList.contains('connectableend');
		if (!P || !O) return S;
		const F = {
			source: h ? P : r,
			sourceHandle: h ? A : o,
			target: h ? r : P,
			targetHandle: h ? o : A,
		};
		S.connection = F;
		const Y =
			H &&
			V &&
			(n === Yt.Strict ? (h && O === 'source') || (!h && O === 'target') : P !== r || A !== o);
		(S.isValid = Y && d(F)), (S.toHandle = Es(P, O, A, u, n, !0));
	}
	return S;
}
const vi = { onPointerDown: ff, isValid: Ns },
	vr = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
	Ar = ({ x: e, y: t, zoom: n }) => dr.translate(e, t).scale(n),
	Dt = (e, t) => e.target.closest(`.${t}`),
	Ps = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
	hf = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2,
	zr = (e, t = 0, n = hf, r = () => {}) => {
		const o = typeof t == 'number' && t > 0;
		return o || r(), o ? e.transition().duration(t).ease(n).on('end', r) : e;
	},
	As = (e) => {
		const t = e.ctrlKey && tr() ? 10 : 1;
		return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t;
	};
function gf({
	zoomPanValues: e,
	noWheelClassName: t,
	d3Selection: n,
	d3Zoom: r,
	panOnScrollMode: o,
	panOnScrollSpeed: s,
	zoomOnPinch: i,
	onPanZoomStart: a,
	onPanZoom: l,
	onPanZoomEnd: d,
}) {
	return (u) => {
		if (Dt(u, t)) return u.ctrlKey && u.preventDefault(), !1;
		u.preventDefault(), u.stopImmediatePropagation();
		const h = n.property('__zoom').k || 1;
		if (u.ctrlKey && i) {
			const w = Qe(u),
				S = As(u),
				O = h * 2 ** S;
			r.scaleTo(n, O, w, u);
			return;
		}
		const f = u.deltaMode === 1 ? 20 : 1;
		let g = o === Lt.Vertical ? 0 : u.deltaX * f,
			m = o === Lt.Horizontal ? 0 : u.deltaY * f;
		!tr() && u.shiftKey && o !== Lt.Vertical && ((g = u.deltaY * f), (m = 0)),
			r.translateBy(n, -(g / h) * s, -(m / h) * s, { internal: !0 });
		const x = vr(n.property('__zoom'));
		clearTimeout(e.panScrollTimeout),
			e.isPanScrolling
				? (l == null || l(u, x),
					(e.panScrollTimeout = setTimeout(() => {
						d == null || d(u, x), (e.isPanScrolling = !1);
					}, 150)))
				: ((e.isPanScrolling = !0), a == null || a(u, x));
	};
}
function vf({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function (r, o) {
		const s = r.type === 'wheel',
			i = !t && s && !r.ctrlKey,
			a = Dt(r, e);
		if ((r.ctrlKey && s && a && r.preventDefault(), i || a)) return null;
		r.preventDefault(), n.call(this, r, o);
	};
}
function yf({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		var s, i, a;
		if ((s = r.sourceEvent) != null && s.internal) return;
		const o = vr(r.transform);
		(e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0),
			(e.isZoomingOrPanning = !0),
			(e.prevViewport = o),
			((a = r.sourceEvent) == null ? void 0 : a.type) === 'mousedown' && t(!0),
			n && (n == null || n(r.sourceEvent, o));
	};
}
function mf({
	zoomPanValues: e,
	panOnDrag: t,
	onPaneContextMenu: n,
	onTransformChange: r,
	onPanZoom: o,
}) {
	return (s) => {
		var i, a;
		(e.usedRightMouseButton = !!(n && Ps(t, e.mouseButton ?? 0))),
			((i = s.sourceEvent) != null && i.sync) || r([s.transform.x, s.transform.y, s.transform.k]),
			o &&
				!((a = s.sourceEvent) != null && a.internal) &&
				(o == null || o(s.sourceEvent, vr(s.transform)));
	};
}
function wf({
	zoomPanValues: e,
	panOnDrag: t,
	panOnScroll: n,
	onDraggingChange: r,
	onPanZoomEnd: o,
	onPaneContextMenu: s,
}) {
	return (i) => {
		var a;
		if (
			!((a = i.sourceEvent) != null && a.internal) &&
			((e.isZoomingOrPanning = !1),
			s &&
				Ps(t, e.mouseButton ?? 0) &&
				!e.usedRightMouseButton &&
				i.sourceEvent &&
				s(i.sourceEvent),
			(e.usedRightMouseButton = !1),
			r(!1),
			o)
		) {
			const l = vr(i.transform);
			(e.prevViewport = l),
				clearTimeout(e.timerId),
				(e.timerId = setTimeout(
					() => {
						o == null || o(i.sourceEvent, l);
					},
					n ? 150 : 0,
				));
		}
	};
}
function xf({
	zoomActivationKeyPressed: e,
	zoomOnScroll: t,
	zoomOnPinch: n,
	panOnDrag: r,
	panOnScroll: o,
	zoomOnDoubleClick: s,
	userSelectionActive: i,
	noWheelClassName: a,
	noPanClassName: l,
	lib: d,
	connectionInProgress: u,
}) {
	return (h) => {
		var w;
		const f = e || t,
			g = n && h.ctrlKey,
			m = h.type === 'wheel';
		if (
			h.button === 1 &&
			h.type === 'mousedown' &&
			(Dt(h, `${d}-flow__node`) || Dt(h, `${d}-flow__edge`))
		)
			return !0;
		if (
			(!r && !f && !o && !s && !n) ||
			i ||
			(u && !m) ||
			(Dt(h, a) && m) ||
			(Dt(h, l) && (!m || (o && m && !e))) ||
			(!n && h.ctrlKey && m)
		)
			return !1;
		if (!n && h.type === 'touchstart' && ((w = h.touches) == null ? void 0 : w.length) > 1)
			return h.preventDefault(), !1;
		if (
			(!f && !o && !g && m) ||
			(!r && (h.type === 'mousedown' || h.type === 'touchstart')) ||
			(Array.isArray(r) && !r.includes(h.button) && h.type === 'mousedown')
		)
			return !1;
		const x = (Array.isArray(r) && r.includes(h.button)) || !h.button || h.button <= 1;
		return (!h.ctrlKey || m) && x;
	};
}
function pf({
	domNode: e,
	minZoom: t,
	maxZoom: n,
	translateExtent: r,
	viewport: o,
	onPanZoom: s,
	onPanZoomStart: i,
	onPanZoomEnd: a,
	onDraggingChange: l,
}) {
	const d = {
			isZoomingOrPanning: !1,
			usedRightMouseButton: !1,
			prevViewport: {},
			mouseButton: 0,
			timerId: void 0,
			panScrollTimeout: void 0,
			isPanScrolling: !1,
		},
		u = e.getBoundingClientRect(),
		h = xd().scaleExtent([t, n]).translateExtent(r),
		f = Xe(e).call(h);
	O(
		{ x: o.x, y: o.y, zoom: Xt(o.zoom, t, n) },
		[
			[0, 0],
			[u.width, u.height],
		],
		r,
	);
	const g = f.on('wheel.zoom'),
		m = f.on('dblclick.zoom');
	h.wheelDelta(As);
	async function x(M, p) {
		return f
			? new Promise((N) => {
					h == null ||
						h.interpolate((p == null ? void 0 : p.interpolate) === 'linear' ? vn : Bn).transform(
							zr(f, p == null ? void 0 : p.duration, p == null ? void 0 : p.ease, () => N(!0)),
							M,
						);
				})
			: !1;
	}
	function w({
		noWheelClassName: M,
		noPanClassName: p,
		onPaneContextMenu: N,
		userSelectionActive: v,
		panOnScroll: E,
		panOnDrag: y,
		panOnScrollMode: k,
		panOnScrollSpeed: I,
		preventScrolling: z,
		zoomOnPinch: T,
		zoomOnScroll: K,
		zoomOnDoubleClick: G,
		zoomActivationKeyPressed: Z,
		lib: X,
		onTransformChange: j,
		connectionInProgress: R,
		paneClickDistance: L,
		selectionOnDrag: W,
	}) {
		v && !d.isZoomingOrPanning && S();
		const ie = E && !Z && !v;
		h.clickDistance(W ? 1 / 0 : !st(L) || L < 0 ? 0 : L);
		const ge = ie
			? gf({
					zoomPanValues: d,
					noWheelClassName: M,
					d3Selection: f,
					d3Zoom: h,
					panOnScrollMode: k,
					panOnScrollSpeed: I,
					zoomOnPinch: T,
					onPanZoomStart: i,
					onPanZoom: s,
					onPanZoomEnd: a,
				})
			: vf({ noWheelClassName: M, preventScrolling: z, d3ZoomHandler: g });
		f.on('wheel.zoom', ge, { passive: !1 });
		const re = yf({ zoomPanValues: d, onDraggingChange: l, onPanZoomStart: i });
		h.on('start', re);
		const we = mf({
			zoomPanValues: d,
			panOnDrag: y,
			onPaneContextMenu: !!N,
			onPanZoom: s,
			onTransformChange: j,
		});
		h.on('zoom', we);
		const ue = wf({
			zoomPanValues: d,
			panOnDrag: y,
			panOnScroll: E,
			onPaneContextMenu: N,
			onPanZoomEnd: a,
			onDraggingChange: l,
		});
		h.on('end', ue);
		const pe = xf({
			zoomActivationKeyPressed: Z,
			panOnDrag: y,
			zoomOnScroll: K,
			panOnScroll: E,
			zoomOnDoubleClick: G,
			zoomOnPinch: T,
			userSelectionActive: v,
			noPanClassName: p,
			noWheelClassName: M,
			lib: X,
			connectionInProgress: R,
		});
		h.filter(pe), G ? f.on('dblclick.zoom', m) : f.on('dblclick.zoom', null);
	}
	function S() {
		h.on('zoom', null);
	}
	async function O(M, p, N) {
		const v = Ar(M),
			E = h == null ? void 0 : h.constrain()(v, p, N);
		return E && (await x(E)), E;
	}
	async function P(M, p) {
		const N = Ar(M);
		return await x(N, p), N;
	}
	function A(M) {
		if (f) {
			const p = Ar(M),
				N = f.property('__zoom');
			(N.k !== M.zoom || N.x !== M.x || N.y !== M.y) &&
				(h == null || h.transform(f, p, null, { sync: !0 }));
		}
	}
	function H() {
		const M = f ? cs(f.node()) : { x: 0, y: 0, k: 1 };
		return { x: M.x, y: M.y, zoom: M.k };
	}
	async function V(M, p) {
		return f
			? new Promise((N) => {
					h == null ||
						h.interpolate((p == null ? void 0 : p.interpolate) === 'linear' ? vn : Bn).scaleTo(
							zr(f, p == null ? void 0 : p.duration, p == null ? void 0 : p.ease, () => N(!0)),
							M,
						);
				})
			: !1;
	}
	async function F(M, p) {
		return f
			? new Promise((N) => {
					h == null ||
						h.interpolate((p == null ? void 0 : p.interpolate) === 'linear' ? vn : Bn).scaleBy(
							zr(f, p == null ? void 0 : p.duration, p == null ? void 0 : p.ease, () => N(!0)),
							M,
						);
				})
			: !1;
	}
	function Q(M) {
		h == null || h.scaleExtent(M);
	}
	function Y(M) {
		h == null || h.translateExtent(M);
	}
	function $(M) {
		const p = !st(M) || M < 0 ? 0 : M;
		h == null || h.clickDistance(p);
	}
	return {
		update: w,
		destroy: S,
		setViewport: P,
		setViewportConstrained: O,
		getViewport: H,
		scaleTo: V,
		scaleBy: F,
		setScaleExtent: Q,
		setTranslateExtent: Y,
		syncViewport: A,
		setClickDistance: $,
	};
}
var yi;
((e) => {
	(e.Line = 'line'), (e.Handle = 'handle');
})(yi || (yi = {}));
const bf = gs();
function _f(e, t, n = {}) {
	return Bd(e, t, { ...n, onError: n.onError ?? bf });
}
function So() {
	const e = {};
	return [
		(t) => {
			if (t && !Ma(e)) throw new Error(t);
			return eo(e);
		},
		(t) => Ti(e, t),
	];
}
const [kf, Sf] = So(),
	[Ef, Cf] = So(),
	[Mf, Nf] = So();
var Pf = new Set([
		'$$slots',
		'$$events',
		'$$legacy',
		'id',
		'type',
		'position',
		'style',
		'class',
		'isConnectable',
		'isConnectableStart',
		'isConnectableEnd',
		'isValidConnection',
		'onconnect',
		'ondisconnect',
		'children',
	]),
	Af = se('<div><!></div>');
function Nt(e, t) {
	le(t, !0);
	const n = U(t, 'id', 3, null),
		r = U(t, 'type', 3, 'source'),
		o = U(t, 'position', 19, () => ne.Top),
		s = U(t, 'isConnectableStart', 3, !0),
		i = U(t, 'isConnectableEnd', 3, !0),
		a = Pt(t, Pf);
	const l = kf('Handle must be used within a Custom Node component'),
		d = Ef('Handle must be used within a Custom Node component');
	let u = b(() => r() === 'target'),
		h = b(() => (t.isConnectable !== void 0 ? t.isConnectable : d.value)),
		f = Qt(),
		g = b(() => f.ariaLabelConfig),
		m = null;
	zi(() => {
		if (t.onconnect || t.ondisconnect) {
			f.edges;
			const p = f.connectionLookup.get(`${l}-${r()}${n() ? `-${n()}` : ''}`);
			if (m && !bd(p, m)) {
				const N = p ?? new Map();
				ri(m, N, t.ondisconnect), ri(N, m, t.onconnect);
			}
			m = new Map(p);
		}
	});
	const x = b(() => {
			if (!f.connection.inProgress) return [!1, !1, !1, !1, null];
			const { fromHandle: p, toHandle: N, isValid: v } = f.connection,
				E = p && p.nodeId === l && p.type === r() && p.id === n(),
				y = N && N.nodeId === l && N.type === r() && N.id === n(),
				k =
					f.connectionMode === Yt.Strict
						? (p == null ? void 0 : p.type) !== r()
						: l !== (p == null ? void 0 : p.nodeId) || n() !== (p == null ? void 0 : p.id);
			return [!0, E, y, k, y && v];
		}),
		w = b(() => Sn(c(x), 5)),
		S = b(() => c(w)[0]),
		O = b(() => c(w)[1]),
		P = b(() => c(w)[2]),
		A = b(() => c(w)[3]),
		H = b(() => c(w)[4]);
	function V(p) {
		var v;
		const N = f.onbeforeconnect ? f.onbeforeconnect(p) : p;
		N && (f.addEdge(N), (v = f.onconnect) == null || v.call(f, p));
	}
	function F(p) {
		const N = ws(p);
		p.currentTarget &&
			((N && p.button === 0) || !N) &&
			vi.onPointerDown(p, {
				handleId: n(),
				nodeId: l,
				isTarget: c(u),
				connectionRadius: f.connectionRadius,
				domNode: f.domNode,
				nodeLookup: f.nodeLookup,
				connectionMode: f.connectionMode,
				lib: 'svelte',
				autoPanOnConnect: f.autoPanOnConnect,
				autoPanSpeed: f.autoPanSpeed,
				flowId: f.flowId,
				isValidConnection:
					t.isValidConnection ||
					((...v) => {
						var E;
						return ((E = f.isValidConnection) == null ? void 0 : E.call(f, ...v)) ?? !0;
					}),
				updateConnection: f.updateConnection,
				cancelConnection: f.cancelConnection,
				panBy: f.panBy,
				onConnect: V,
				onConnectStart: f.onconnectstart,
				onConnectEnd: (...v) => {
					var E;
					return (E = f.onconnectend) == null ? void 0 : E.call(f, ...v);
				},
				getTransform: () => [f.viewport.x, f.viewport.y, f.viewport.zoom],
				getFromHandle: () => f.connection.fromHandle,
				dragThreshold: f.connectionDragThreshold,
				handleDomNode: p.currentTarget,
			});
	}
	function Q(p) {
		var G, Z;
		if (!l || (!f.clickConnectStartHandle && !s())) return;
		if (!f.clickConnectStartHandle) {
			(G = f.onclickconnectstart) == null ||
				G.call(f, p, { nodeId: l, handleId: n(), handleType: r() }),
				(f.clickConnectStartHandle = { nodeId: l, type: r(), id: n() });
			return;
		}
		const N = ys(p.target),
			v = t.isValidConnection ?? f.isValidConnection,
			{ connectionMode: E, clickConnectStartHandle: y, flowId: k, nodeLookup: I } = f,
			{ connection: z, isValid: T } = vi.isValid(p, {
				handle: { nodeId: l, id: n(), type: r() },
				connectionMode: E,
				fromNodeId: y.nodeId,
				fromHandleId: y.id ?? null,
				fromType: y.type,
				isValidConnection: v,
				flowId: k,
				doc: N,
				lib: 'svelte',
				nodeLookup: I,
			});
		T && z && V(z);
		const K = structuredClone(Oi(f.connection));
		delete K.inProgress,
			(K.toPosition = K.toHandle ? K.toHandle.position : null),
			(Z = f.onclickconnectend) == null || Z.call(f, p, K),
			(f.clickConnectStartHandle = null);
	}
	var Y = Af(),
		$ = () => {};
	yt(Y, () => ({
		'data-handleid': n(),
		'data-nodeid': l,
		'data-handlepos': o(),
		'data-id': `${f.flowId ?? ''}-${l ?? ''}-${n() ?? 'null' ?? ''}-${r() ?? ''}`,
		class: [
			'svelte-flow__handle',
			`svelte-flow__handle-${o()}`,
			f.noDragClass,
			f.noPanClass,
			o(),
			t.class,
		],
		onmousedown: F,
		ontouchstart: F,
		onclick: f.clickConnect ? Q : void 0,
		onkeypress: $,
		style: t.style,
		role: 'button',
		'aria-label': c(g)['handle.ariaLabel'],
		tabindex: '-1',
		...a,
		[to]: {
			valid: c(H),
			connectingto: c(P),
			connectingfrom: c(O),
			source: !c(u),
			target: c(u),
			connectablestart: s(),
			connectableend: i(),
			connectable: c(h),
			connectionindicator:
				c(h) && (!c(S) || c(A)) && (c(S) || f.clickConnectStartHandle ? i() : s()),
		},
	}));
	var M = ee(Y);
	Ye(M, () => t.children ?? Gt), J(Y), q(e, Y), ce();
}
var zf = se('<!> <!>', 1);
function zs(e, t) {
	le(t, !0);
	const n = U(t, 'targetPosition', 19, () => ne.Top),
		r = U(t, 'sourcePosition', 19, () => ne.Bottom);
	var o = zf(),
		s = me(o);
	Nt(s, {
		type: 'target',
		get position() {
			return n();
		},
	});
	var i = te(s),
		a = te(i);
	Nt(a, {
		type: 'source',
		get position() {
			return r();
		},
	}),
		ye(() => {
			var l;
			return Ce(i, ` ${((l = t.data) == null ? void 0 : l.label) ?? ''} `);
		}),
		q(e, o),
		ce();
}
var Tf = se(' <!>', 1);
function If(e, t) {
	le(t, !0);
	const n = U(t, 'data', 19, () => ({ label: 'Node' })),
		r = U(t, 'sourcePosition', 19, () => ne.Bottom);
	$e();
	var o = Tf(),
		s = me(o),
		i = te(s);
	Nt(i, {
		type: 'source',
		get position() {
			return r();
		},
	}),
		ye(() => {
			var a;
			return Ce(s, `${((a = n()) == null ? void 0 : a.label) ?? ''} `);
		}),
		q(e, o),
		ce();
}
var Of = se(' <!>', 1);
function Df(e, t) {
	le(t, !0);
	const n = U(t, 'data', 19, () => ({ label: 'Node' })),
		r = U(t, 'targetPosition', 19, () => ne.Top);
	$e();
	var o = Of(),
		s = me(o),
		i = te(s);
	Nt(i, {
		type: 'target',
		get position() {
			return r();
		},
	}),
		ye(() => {
			var a;
			return Ce(s, `${((a = n()) == null ? void 0 : a.label) ?? ''} `);
		}),
		q(e, o),
		ce();
}
function Hf(e, t) {}
function Tr(e, t, n) {
	if (!n || !t) return;
	const r = n === 'root' ? t : t.querySelector(`.svelte-flow__${n}`);
	r && r.appendChild(e);
}
function Ir(e, t) {
	const n = b(Qt),
		r = b(() => c(n).domNode);
	let o;
	return (
		c(r)
			? Tr(e, c(r), t)
			: (o = Ii(() => {
					at(() => {
						Tr(e, c(r), t), o == null || o();
					});
				})),
		{
			async update(s) {
				Tr(e, c(r), s);
			},
			destroy() {
				e.parentNode && e.parentNode.removeChild(e), o == null || o();
			},
		}
	);
}
function Rf() {
	const e = ae(typeof window > 'u');
	if (c(e)) {
		const t = Ii(() => {
			at(() => {
				D(e, !1), t == null || t();
			});
		});
	}
	return {
		get value() {
			return c(e);
		},
	};
}
const mi = (e) => kd(e),
	Lf = (e) => ds(e);
function nt(e) {
	return e === void 0 ? void 0 : `${e}px`;
}
const nr = {
	ArrowUp: { x: 0, y: -1 },
	ArrowDown: { x: 0, y: 1 },
	ArrowLeft: { x: -1, y: 0 },
	ArrowRight: { x: 1, y: 0 },
};
var Vf = new Set([
		'$$slots',
		'$$events',
		'$$legacy',
		'x',
		'y',
		'width',
		'height',
		'selectEdgeOnClick',
		'transparent',
		'class',
		'children',
	]),
	Kf = se('<div><!></div>');
function Bf(e, t) {
	le(t, !0);
	const n = U(t, 'x', 3, 0),
		r = U(t, 'y', 3, 0),
		o = U(t, 'selectEdgeOnClick', 3, !1),
		s = U(t, 'transparent', 3, !1),
		i = Pt(t, Vf);
	const a = Qt(),
		l = Mf('EdgeLabel must be used within a Custom Edge component');
	const d = b(() => {
		var g;
		return (g = a.visible.edges.get(l)) == null ? void 0 : g.zIndex;
	});
	var u = Kf(),
		h = () => {
			o() && l && a.handleEdgeSelection(l);
		};
	yt(
		u,
		(g) => ({
			class: ['svelte-flow__edge-label', { transparent: s() }, t.class],
			tabindex: '-1',
			onclick: h,
			...i,
			[sr]: g,
		}),
		[
			() => ({
				display: Rf().value ? 'none' : void 0,
				cursor: o() ? 'pointer' : void 0,
				transform: `translate(-50%, -50%) translate(${n() ?? ''}px,${r() ?? ''}px)`,
				'pointer-events': 'all',
				width: nt(t.width),
				height: nt(t.height),
				'z-index': c(d),
			}),
		],
		void 0,
		void 0,
		'svelte-1wg91mu',
	);
	var f = ee(u);
	Ye(f, () => t.children ?? Gt),
		J(u),
		Ie(
			u,
			(g, m) => (Ir == null ? void 0 : Ir(g, m)),
			() => 'edge-labels',
		),
		q(e, u),
		ce();
}
var Ff = new Set([
		'$$slots',
		'$$events',
		'$$legacy',
		'id',
		'path',
		'label',
		'labelX',
		'labelY',
		'labelStyle',
		'markerStart',
		'markerEnd',
		'style',
		'interactionWidth',
		'class',
	]),
	Yf = Se('<path></path>'),
	Xf = Se('<path fill="none"></path><!><!>', 1);
function yr(e, t) {
	const n = U(t, 'interactionWidth', 3, 20),
		r = Pt(t, Ff);
	var o = Xf(),
		s = me(o),
		i = te(s);
	var a = (u) => {
		var h = Yf();
		yt(h, () => ({
			d: t.path,
			'stroke-opacity': 0,
			'stroke-width': n(),
			fill: 'none',
			class: 'svelte-flow__edge-interaction',
			...r,
		})),
			q(u, h);
	};
	ve(i, (u) => {
		n() > 0 && u(a);
	});
	var l = te(i);
	var d = (u) => {
		Bf(u, {
			get x() {
				return t.labelX;
			},
			get y() {
				return t.labelY;
			},
			get style() {
				return t.labelStyle;
			},
			selectEdgeOnClick: !0,
			children: (h, f) => {
				$e();
				var g = Zs();
				ye(() => Ce(g, t.label)), q(h, g);
			},
			$$slots: { default: !0 },
		});
	};
	ve(l, (u) => {
		t.label && u(d);
	});
	ye(() => {
		be(s, 'id', t.id),
			be(s, 'd', t.path),
			vt(s, 0, no(['svelte-flow__edge-path', t.class])),
			be(s, 'marker-start', t.markerStart),
			be(s, 'marker-end', t.markerEnd),
			qe(s, t.style);
	}),
		q(e, o);
}
function Ts(e, t) {
	le(t, !0);
	const n = b(() => {
			var a;
			return xs({
				sourceX: t.sourceX,
				sourceY: t.sourceY,
				targetX: t.targetX,
				targetY: t.targetY,
				sourcePosition: t.sourcePosition,
				targetPosition: t.targetPosition,
				curvature: (a = t.pathOptions) == null ? void 0 : a.curvature,
			});
		}),
		r = b(() => Sn(c(n), 3)),
		o = b(() => c(r)[0]),
		s = b(() => c(r)[1]),
		i = b(() => c(r)[2]);
	yr(e, {
		get id() {
			return t.id;
		},
		get path() {
			return c(o);
		},
		get labelX() {
			return c(s);
		},
		get labelY() {
			return c(i);
		},
		get label() {
			return t.label;
		},
		get labelStyle() {
			return t.labelStyle;
		},
		get markerStart() {
			return t.markerStart;
		},
		get markerEnd() {
			return t.markerEnd;
		},
		get interactionWidth() {
			return t.interactionWidth;
		},
		get style() {
			return t.style;
		},
	}),
		ce();
}
function Wf(e, t) {
	le(t, !0);
	const n = b(() =>
			xo({
				sourceX: t.sourceX,
				sourceY: t.sourceY,
				targetX: t.targetX,
				targetY: t.targetY,
				sourcePosition: t.sourcePosition,
				targetPosition: t.targetPosition,
			}),
		),
		r = b(() => Sn(c(n), 3)),
		o = b(() => c(r)[0]),
		s = b(() => c(r)[1]),
		i = b(() => c(r)[2]);
	yr(e, {
		get path() {
			return c(o);
		},
		get labelX() {
			return c(s);
		},
		get labelY() {
			return c(i);
		},
		get label() {
			return t.label;
		},
		get labelStyle() {
			return t.labelStyle;
		},
		get markerStart() {
			return t.markerStart;
		},
		get markerEnd() {
			return t.markerEnd;
		},
		get interactionWidth() {
			return t.interactionWidth;
		},
		get style() {
			return t.style;
		},
	}),
		ce();
}
function Zf(e, t) {
	le(t, !0);
	const n = b(() =>
			bs({ sourceX: t.sourceX, sourceY: t.sourceY, targetX: t.targetX, targetY: t.targetY }),
		),
		r = b(() => Sn(c(n), 3)),
		o = b(() => c(r)[0]),
		s = b(() => c(r)[1]),
		i = b(() => c(r)[2]);
	yr(e, {
		get path() {
			return c(o);
		},
		get labelX() {
			return c(s);
		},
		get labelY() {
			return c(i);
		},
		get label() {
			return t.label;
		},
		get labelStyle() {
			return t.labelStyle;
		},
		get markerStart() {
			return t.markerStart;
		},
		get markerEnd() {
			return t.markerEnd;
		},
		get interactionWidth() {
			return t.interactionWidth;
		},
		get style() {
			return t.style;
		},
	}),
		ce();
}
function qf(e, t) {
	le(t, !0);
	const n = b(() =>
			xo({
				sourceX: t.sourceX,
				sourceY: t.sourceY,
				targetX: t.targetX,
				targetY: t.targetY,
				sourcePosition: t.sourcePosition,
				targetPosition: t.targetPosition,
				borderRadius: 0,
			}),
		),
		r = b(() => Sn(c(n), 3)),
		o = b(() => c(r)[0]),
		s = b(() => c(r)[1]),
		i = b(() => c(r)[2]);
	yr(e, {
		get path() {
			return c(o);
		},
		get labelX() {
			return c(s);
		},
		get labelY() {
			return c(i);
		},
		get label() {
			return t.label;
		},
		get labelStyle() {
			return t.labelStyle;
		},
		get markerStart() {
			return t.markerStart;
		},
		get markerEnd() {
			return t.markerEnd;
		},
		get interactionWidth() {
			return t.interactionWidth;
		},
		get style() {
			return t.style;
		},
	}),
		ce();
}
var _n, kn;
class Gf {
	constructor(t, n) {
		B(this, _n);
		B(this, kn);
		sn(this, _n, t), sn(this, kn, Aa(n));
	}
	get current() {
		return C(this, kn).call(this), C(this, _n).call(this);
	}
}
(_n = new WeakMap()), (kn = new WeakMap());
const Uf = /\(.+\)/,
	Qf = new Set(['all', 'print', 'screen', 'and', 'or', 'not', 'only']);
class Jf extends Gf {
	constructor(t, n) {
		const r = Uf.test(t) || t.split(/[\s,]+/).some((s) => Qf.has(s.trim())) ? t : `(${t})`;
		const o = window.matchMedia(r);
		super(
			() => o.matches,
			(s) => Rr(o, 'change', s),
		);
	}
}
function jf(e, t, n, r) {
	const o = new Map();
	return (
		yo(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((s) => {
			o.set(s.id, s);
		}),
		o
	);
}
function wi(e) {
	const {
			edges: t,
			defaultEdgeOptions: n,
			nodeLookup: r,
			previousEdges: o,
			connectionMode: s,
			onerror: i,
			onlyRenderVisible: a,
			elevateEdgesOnSelect: l,
			zIndexMode: d,
		} = e,
		u = new Map();
	for (const h of t) {
		const f = r.get(h.source),
			g = r.get(h.target);
		if (!f || !g) continue;
		if (a) {
			const { visibleNodes: w, transform: S, width: O, height: P } = e;
			if (Ld({ sourceNode: f, targetNode: g, width: O, height: P, transform: S }))
				w.set(f.id, f), w.set(g.id, g);
			else continue;
		}
		const m = o.get(h.id);
		if (m && h === m.edge && f == m.sourceNode && g == m.targetNode) {
			u.set(h.id, m);
			continue;
		}
		const x = Wd({
			id: h.id,
			sourceNode: f,
			targetNode: g,
			sourceHandle: h.sourceHandle || null,
			targetHandle: h.targetHandle || null,
			connectionMode: s,
			onError: i,
		});
		x &&
			u.set(h.id, {
				...n,
				...h,
				...x,
				zIndex: Rd({
					selected: h.selected,
					zIndex: h.zIndex ?? n.zIndex,
					sourceNode: f,
					targetNode: g,
					elevateOnSelect: l,
					zIndexMode: d,
				}),
				sourceNode: f,
				targetNode: g,
				edge: h,
			});
	}
	return u;
}
const $f = gs(),
	Is = { input: If, output: Df, default: zs, group: Hf },
	Os = { straight: Zf, smoothstep: Wf, default: Ts, step: qf };
function eh(e, t, n, r, o, s) {
	if (t && !n && r && o) {
		const i = fr(s, {
			filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight)),
		});
		return wo(i, r, o, 0.5, 2, 0.1);
	} else return n ?? { x: 0, y: 0, zoom: 1 };
}
function th(e) {
	var n,
		r,
		o,
		s,
		i,
		a,
		l,
		d,
		u,
		h,
		f,
		g,
		m,
		x,
		w,
		S,
		O,
		P,
		A,
		H,
		V,
		F,
		Q,
		Y,
		$,
		M,
		p,
		N,
		v,
		E,
		y,
		k,
		I,
		z,
		T,
		K,
		G,
		Z,
		X,
		j,
		R,
		L,
		W,
		ie,
		ge,
		re,
		we,
		ue,
		pe,
		ze,
		Te,
		Ne,
		oe,
		he,
		_e,
		de,
		ke,
		De,
		He,
		Me,
		ct,
		Ue,
		mt,
		wt,
		xt,
		xe,
		Pe,
		ut,
		pt,
		Jt,
		jt,
		$t,
		en,
		tn,
		nn,
		rn;
	class t {
		constructor() {
			B(
				this,
				n,
				b(() => e.props.id ?? '1'),
			);
			B(this, r, ae(null));
			B(this, o, ae(null));
			B(this, s, ae(e.width ?? 0));
			B(this, i, ae(e.height ?? 0));
			B(this, a, ae(e.props.zIndexMode ?? 'basic'));
			B(
				this,
				l,
				b(() => {
					var Ve;
					const { nodesInitialized: _ } = Jd(e.nodes, this.nodeLookup, this.parentLookup, {
						nodeExtent: this.nodeExtent,
						nodeOrigin: this.nodeOrigin,
						elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
						checkEquality: !0,
						zIndexMode: this.zIndexMode,
					});
					return (
						this.fitViewQueued &&
							_ &&
							((Ve = this.fitViewOptions) != null && Ve.duration
								? this.resolveFitView()
								: queueMicrotask(() => {
										this.resolveFitView();
									})),
						_
					);
				}),
			);
			B(
				this,
				d,
				b(() => this.panZoom !== null),
			);
			B(
				this,
				u,
				b(() => (rf(this.connectionLookup, this.edgeLookup, e.edges), e.edges)),
			);
			Ee(this, '_prevSelectedNodes', []);
			Ee(this, '_prevSelectedNodeIds', new Set());
			B(
				this,
				h,
				b(() => {
					const _ = this._prevSelectedNodeIds.size,
						Ve = new Set(),
						on = this.nodes.filter(
							(Ke) => (
								Ke.selected && (Ve.add(Ke.id), this._prevSelectedNodeIds.delete(Ke.id)), Ke.selected
							),
						);
					return (
						(_ !== Ve.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = on),
						(this._prevSelectedNodeIds = Ve),
						this._prevSelectedNodes
					);
				}),
			);
			Ee(this, '_prevSelectedEdges', []);
			Ee(this, '_prevSelectedEdgeIds', new Set());
			B(
				this,
				f,
				b(() => {
					const _ = this._prevSelectedEdgeIds.size,
						Ve = new Set(),
						on = this.edges.filter(
							(Ke) => (
								Ke.selected && (Ve.add(Ke.id), this._prevSelectedEdgeIds.delete(Ke.id)), Ke.selected
							),
						);
					return (
						(_ !== Ve.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = on),
						(this._prevSelectedEdgeIds = Ve),
						this._prevSelectedEdges
					);
				}),
			);
			Ee(this, 'selectionChangeHandlers', new Map());
			Ee(this, 'nodeLookup', new Map());
			Ee(this, 'parentLookup', new Map());
			Ee(this, 'connectionLookup', new Map());
			Ee(this, 'edgeLookup', new Map());
			Ee(this, '_prevVisibleEdges', new Map());
			B(
				this,
				g,
				b(() => {
					const {
						nodes: _,
						_edges: Ve,
						_prevVisibleEdges: on,
						nodeLookup: Ke,
						connectionMode: Vs,
						onerror: Ks,
						onlyRenderVisibleElements: Bs,
						defaultEdgeOptions: Fs,
						zIndexMode: Ys,
					} = this;
					let An, mr;
					const Eo = {
						edges: Ve,
						defaultEdgeOptions: Fs,
						previousEdges: on,
						nodeLookup: Ke,
						connectionMode: Vs,
						elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
						zIndexMode: Ys,
						onerror: Ks,
					};
					if (Bs) {
						const { viewport: wr, width: Co, height: Mo } = this,
							No = [wr.x, wr.y, wr.zoom];
						(An = jf(Ke, No, Co, Mo)),
							(mr = wi({
								...Eo,
								onlyRenderVisible: !0,
								visibleNodes: An,
								transform: No,
								width: Co,
								height: Mo,
							}));
					} else (An = this.nodeLookup), (mr = wi(Eo));
					return { nodes: An, edges: mr };
				}),
			);
			B(
				this,
				m,
				b(() => e.props.nodesDraggable ?? !0),
			);
			B(
				this,
				x,
				b(() => e.props.nodesConnectable ?? !0),
			);
			B(
				this,
				w,
				b(() => e.props.elementsSelectable ?? !0),
			);
			B(
				this,
				S,
				b(() => e.props.nodesFocusable ?? !0),
			);
			B(
				this,
				O,
				b(() => e.props.edgesFocusable ?? !0),
			);
			B(
				this,
				P,
				b(() => e.props.disableKeyboardA11y ?? !1),
			);
			B(
				this,
				A,
				b(() => e.props.minZoom ?? 0.5),
			);
			B(
				this,
				H,
				b(() => e.props.maxZoom ?? 2),
			);
			B(
				this,
				V,
				b(() => e.props.nodeOrigin ?? [0, 0]),
			);
			B(
				this,
				F,
				b(() => e.props.nodeExtent ?? Gr),
			);
			B(
				this,
				Q,
				b(() => e.props.translateExtent ?? Gr),
			);
			B(
				this,
				Y,
				b(() => e.props.defaultEdgeOptions ?? {}),
			);
			B(
				this,
				$,
				b(() => e.props.nodeDragThreshold ?? 1),
			);
			B(
				this,
				M,
				b(() => e.props.autoPanOnNodeDrag ?? !0),
			);
			B(
				this,
				p,
				b(() => e.props.autoPanOnConnect ?? !0),
			);
			B(
				this,
				N,
				b(() => e.props.autoPanOnNodeFocus ?? !0),
			);
			B(
				this,
				v,
				b(() => e.props.autoPanSpeed ?? 15),
			);
			B(
				this,
				E,
				b(() => e.props.connectionDragThreshold ?? 1),
			);
			Ee(this, 'fitViewQueued', e.props.fitView ?? !1);
			Ee(this, 'fitViewOptions', e.props.fitViewOptions);
			Ee(this, 'fitViewResolver', null);
			B(
				this,
				y,
				b(() => e.props.snapGrid ?? null),
			);
			B(this, k, ae(!1));
			B(this, I, ae(null));
			B(this, z, ae(!1));
			B(this, T, ae(!1));
			B(this, K, ae(!1));
			B(this, G, ae(!1));
			B(this, Z, ae(!1));
			B(this, X, ae(null));
			B(this, j, ae(''));
			B(
				this,
				R,
				b(() => e.props.selectionMode ?? jn.Partial),
			);
			B(
				this,
				L,
				b(() => ({ ...Is, ...e.props.nodeTypes })),
			);
			B(
				this,
				W,
				b(() => ({ ...Os, ...e.props.edgeTypes })),
			);
			B(
				this,
				ie,
				b(() => e.props.noPanClass ?? 'nopan'),
			);
			B(
				this,
				ge,
				b(() => e.props.noDragClass ?? 'nodrag'),
			);
			B(
				this,
				re,
				b(() => e.props.noWheelClass ?? 'nowheel'),
			);
			B(
				this,
				we,
				b(() => Od(e.props.ariaLabelConfig)),
			);
			B(
				this,
				ue,
				ae(
					eh(
						this.nodesInitialized,
						e.props.fitView,
						e.props.initialViewport,
						this.width,
						this.height,
						this.nodeLookup,
					),
				),
			);
			B(this, pe, ae(Ur));
			B(
				this,
				ze,
				b(() =>
					this._connection.inProgress
						? {
								...this._connection,
								to: Ut(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom]),
							}
						: this._connection,
				),
			);
			B(
				this,
				Te,
				b(() => e.props.connectionMode ?? Yt.Strict),
			);
			B(
				this,
				Ne,
				b(() => e.props.connectionRadius ?? 20),
			);
			B(
				this,
				oe,
				b(() => e.props.isValidConnection ?? (() => !0)),
			);
			B(
				this,
				he,
				b(() => e.props.selectNodesOnDrag ?? !0),
			);
			B(
				this,
				_e,
				b(() => (e.props.defaultMarkerColor === void 0 ? '#b1b1b7' : e.props.defaultMarkerColor)),
			);
			B(
				this,
				de,
				b(() =>
					Zd(e.edges, {
						defaultColor: this.defaultMarkerColor,
						id: this.flowId,
						defaultMarkerStart: this.defaultEdgeOptions.markerStart,
						defaultMarkerEnd: this.defaultEdgeOptions.markerEnd,
					}),
				),
			);
			B(
				this,
				ke,
				b(() => e.props.onlyRenderVisibleElements ?? !1),
			);
			B(
				this,
				De,
				b(() => e.props.onflowerror ?? $f),
			);
			B(
				this,
				He,
				b(() => e.props.ondelete),
			);
			B(
				this,
				Me,
				b(() => e.props.onbeforedelete),
			);
			B(
				this,
				ct,
				b(() => e.props.onbeforeconnect),
			);
			B(
				this,
				Ue,
				b(() => e.props.onconnect),
			);
			B(
				this,
				mt,
				b(() => e.props.onconnectstart),
			);
			B(
				this,
				wt,
				b(() => e.props.onconnectend),
			);
			B(
				this,
				xt,
				b(() => e.props.onbeforereconnect),
			);
			B(
				this,
				xe,
				b(() => e.props.onreconnect),
			);
			B(
				this,
				Pe,
				b(() => e.props.onreconnectstart),
			);
			B(
				this,
				ut,
				b(() => e.props.onreconnectend),
			);
			B(
				this,
				pt,
				b(() => e.props.clickConnect ?? !0),
			);
			B(
				this,
				Jt,
				b(() => e.props.onclickconnectstart),
			);
			B(
				this,
				jt,
				b(() => e.props.onclickconnectend),
			);
			B(this, $t, ae(null));
			B(
				this,
				en,
				b(() => e.props.onselectiondrag),
			);
			B(
				this,
				tn,
				b(() => e.props.onselectiondragstart),
			);
			B(
				this,
				nn,
				b(() => e.props.onselectiondragstop),
			);
			Ee(this, 'resolveFitView', async () => {
				var _;
				this.panZoom &&
					(await Md(
						{
							nodes: this.nodeLookup,
							width: this.width,
							height: this.height,
							panZoom: this.panZoom,
							minZoom: this.minZoom,
							maxZoom: this.maxZoom,
						},
						this.fitViewOptions,
					),
					(_ = this.fitViewResolver) == null || _.resolve(!0),
					(this.fitViewQueued = !1),
					(this.fitViewOptions = void 0),
					(this.fitViewResolver = null));
			});
			Ee(
				this,
				'_prefersDark',
				new Jf('(prefers-color-scheme: dark)', e.props.colorModeSSR === 'dark'),
			);
			B(
				this,
				rn,
				b(() =>
					e.props.colorMode === 'system'
						? this._prefersDark.current
							? 'dark'
							: 'light'
						: (e.props.colorMode ?? 'light'),
				),
			);
		}
		get flowId() {
			return c(C(this, n));
		}
		set flowId(_) {
			D(C(this, n), _);
		}
		get domNode() {
			return c(C(this, r));
		}
		set domNode(_) {
			D(C(this, r), _);
		}
		get panZoom() {
			return c(C(this, o));
		}
		set panZoom(_) {
			D(C(this, o), _);
		}
		get width() {
			return c(C(this, s));
		}
		set width(_) {
			D(C(this, s), _);
		}
		get height() {
			return c(C(this, i));
		}
		set height(_) {
			D(C(this, i), _);
		}
		get zIndexMode() {
			return c(C(this, a));
		}
		set zIndexMode(_) {
			D(C(this, a), _);
		}
		get nodesInitialized() {
			return c(C(this, l));
		}
		set nodesInitialized(_) {
			D(C(this, l), _);
		}
		get viewportInitialized() {
			return c(C(this, d));
		}
		set viewportInitialized(_) {
			D(C(this, d), _);
		}
		get _edges() {
			return c(C(this, u));
		}
		set _edges(_) {
			D(C(this, u), _);
		}
		get nodes() {
			return this.nodesInitialized, e.nodes;
		}
		set nodes(_) {
			e.nodes = _;
		}
		get edges() {
			return this._edges;
		}
		set edges(_) {
			e.edges = _;
		}
		get selectedNodes() {
			return c(C(this, h));
		}
		set selectedNodes(_) {
			D(C(this, h), _);
		}
		get selectedEdges() {
			return c(C(this, f));
		}
		set selectedEdges(_) {
			D(C(this, f), _);
		}
		get visible() {
			return c(C(this, g));
		}
		set visible(_) {
			D(C(this, g), _);
		}
		get nodesDraggable() {
			return c(C(this, m));
		}
		set nodesDraggable(_) {
			D(C(this, m), _);
		}
		get nodesConnectable() {
			return c(C(this, x));
		}
		set nodesConnectable(_) {
			D(C(this, x), _);
		}
		get elementsSelectable() {
			return c(C(this, w));
		}
		set elementsSelectable(_) {
			D(C(this, w), _);
		}
		get nodesFocusable() {
			return c(C(this, S));
		}
		set nodesFocusable(_) {
			D(C(this, S), _);
		}
		get edgesFocusable() {
			return c(C(this, O));
		}
		set edgesFocusable(_) {
			D(C(this, O), _);
		}
		get disableKeyboardA11y() {
			return c(C(this, P));
		}
		set disableKeyboardA11y(_) {
			D(C(this, P), _);
		}
		get minZoom() {
			return c(C(this, A));
		}
		set minZoom(_) {
			D(C(this, A), _);
		}
		get maxZoom() {
			return c(C(this, H));
		}
		set maxZoom(_) {
			D(C(this, H), _);
		}
		get nodeOrigin() {
			return c(C(this, V));
		}
		set nodeOrigin(_) {
			D(C(this, V), _);
		}
		get nodeExtent() {
			return c(C(this, F));
		}
		set nodeExtent(_) {
			D(C(this, F), _);
		}
		get translateExtent() {
			return c(C(this, Q));
		}
		set translateExtent(_) {
			D(C(this, Q), _);
		}
		get defaultEdgeOptions() {
			return c(C(this, Y));
		}
		set defaultEdgeOptions(_) {
			D(C(this, Y), _);
		}
		get nodeDragThreshold() {
			return c(C(this, $));
		}
		set nodeDragThreshold(_) {
			D(C(this, $), _);
		}
		get autoPanOnNodeDrag() {
			return c(C(this, M));
		}
		set autoPanOnNodeDrag(_) {
			D(C(this, M), _);
		}
		get autoPanOnConnect() {
			return c(C(this, p));
		}
		set autoPanOnConnect(_) {
			D(C(this, p), _);
		}
		get autoPanOnNodeFocus() {
			return c(C(this, N));
		}
		set autoPanOnNodeFocus(_) {
			D(C(this, N), _);
		}
		get autoPanSpeed() {
			return c(C(this, v));
		}
		set autoPanSpeed(_) {
			D(C(this, v), _);
		}
		get connectionDragThreshold() {
			return c(C(this, E));
		}
		set connectionDragThreshold(_) {
			D(C(this, E), _);
		}
		get snapGrid() {
			return c(C(this, y));
		}
		set snapGrid(_) {
			D(C(this, y), _);
		}
		get dragging() {
			return c(C(this, k));
		}
		set dragging(_) {
			D(C(this, k), _);
		}
		get selectionRect() {
			return c(C(this, I));
		}
		set selectionRect(_) {
			D(C(this, I), _);
		}
		get selectionKeyPressed() {
			return c(C(this, z));
		}
		set selectionKeyPressed(_) {
			D(C(this, z), _);
		}
		get multiselectionKeyPressed() {
			return c(C(this, T));
		}
		set multiselectionKeyPressed(_) {
			D(C(this, T), _);
		}
		get deleteKeyPressed() {
			return c(C(this, K));
		}
		set deleteKeyPressed(_) {
			D(C(this, K), _);
		}
		get panActivationKeyPressed() {
			return c(C(this, G));
		}
		set panActivationKeyPressed(_) {
			D(C(this, G), _);
		}
		get zoomActivationKeyPressed() {
			return c(C(this, Z));
		}
		set zoomActivationKeyPressed(_) {
			D(C(this, Z), _);
		}
		get selectionRectMode() {
			return c(C(this, X));
		}
		set selectionRectMode(_) {
			D(C(this, X), _);
		}
		get ariaLiveMessage() {
			return c(C(this, j));
		}
		set ariaLiveMessage(_) {
			D(C(this, j), _);
		}
		get selectionMode() {
			return c(C(this, R));
		}
		set selectionMode(_) {
			D(C(this, R), _);
		}
		get nodeTypes() {
			return c(C(this, L));
		}
		set nodeTypes(_) {
			D(C(this, L), _);
		}
		get edgeTypes() {
			return c(C(this, W));
		}
		set edgeTypes(_) {
			D(C(this, W), _);
		}
		get noPanClass() {
			return c(C(this, ie));
		}
		set noPanClass(_) {
			D(C(this, ie), _);
		}
		get noDragClass() {
			return c(C(this, ge));
		}
		set noDragClass(_) {
			D(C(this, ge), _);
		}
		get noWheelClass() {
			return c(C(this, re));
		}
		set noWheelClass(_) {
			D(C(this, re), _);
		}
		get ariaLabelConfig() {
			return c(C(this, we));
		}
		set ariaLabelConfig(_) {
			D(C(this, we), _);
		}
		get _viewport() {
			return c(C(this, ue));
		}
		set _viewport(_) {
			D(C(this, ue), _);
		}
		get viewport() {
			return e.viewport ?? this._viewport;
		}
		set viewport(_) {
			e.viewport && (e.viewport = _), (this._viewport = _);
		}
		get _connection() {
			return c(C(this, pe));
		}
		set _connection(_) {
			D(C(this, pe), _);
		}
		get connection() {
			return c(C(this, ze));
		}
		set connection(_) {
			D(C(this, ze), _);
		}
		get connectionMode() {
			return c(C(this, Te));
		}
		set connectionMode(_) {
			D(C(this, Te), _);
		}
		get connectionRadius() {
			return c(C(this, Ne));
		}
		set connectionRadius(_) {
			D(C(this, Ne), _);
		}
		get isValidConnection() {
			return c(C(this, oe));
		}
		set isValidConnection(_) {
			D(C(this, oe), _);
		}
		get selectNodesOnDrag() {
			return c(C(this, he));
		}
		set selectNodesOnDrag(_) {
			D(C(this, he), _);
		}
		get defaultMarkerColor() {
			return c(C(this, _e));
		}
		set defaultMarkerColor(_) {
			D(C(this, _e), _);
		}
		get markers() {
			return c(C(this, de));
		}
		set markers(_) {
			D(C(this, de), _);
		}
		get onlyRenderVisibleElements() {
			return c(C(this, ke));
		}
		set onlyRenderVisibleElements(_) {
			D(C(this, ke), _);
		}
		get onerror() {
			return c(C(this, De));
		}
		set onerror(_) {
			D(C(this, De), _);
		}
		get ondelete() {
			return c(C(this, He));
		}
		set ondelete(_) {
			D(C(this, He), _);
		}
		get onbeforedelete() {
			return c(C(this, Me));
		}
		set onbeforedelete(_) {
			D(C(this, Me), _);
		}
		get onbeforeconnect() {
			return c(C(this, ct));
		}
		set onbeforeconnect(_) {
			D(C(this, ct), _);
		}
		get onconnect() {
			return c(C(this, Ue));
		}
		set onconnect(_) {
			D(C(this, Ue), _);
		}
		get onconnectstart() {
			return c(C(this, mt));
		}
		set onconnectstart(_) {
			D(C(this, mt), _);
		}
		get onconnectend() {
			return c(C(this, wt));
		}
		set onconnectend(_) {
			D(C(this, wt), _);
		}
		get onbeforereconnect() {
			return c(C(this, xt));
		}
		set onbeforereconnect(_) {
			D(C(this, xt), _);
		}
		get onreconnect() {
			return c(C(this, xe));
		}
		set onreconnect(_) {
			D(C(this, xe), _);
		}
		get onreconnectstart() {
			return c(C(this, Pe));
		}
		set onreconnectstart(_) {
			D(C(this, Pe), _);
		}
		get onreconnectend() {
			return c(C(this, ut));
		}
		set onreconnectend(_) {
			D(C(this, ut), _);
		}
		get clickConnect() {
			return c(C(this, pt));
		}
		set clickConnect(_) {
			D(C(this, pt), _);
		}
		get onclickconnectstart() {
			return c(C(this, Jt));
		}
		set onclickconnectstart(_) {
			D(C(this, Jt), _);
		}
		get onclickconnectend() {
			return c(C(this, jt));
		}
		set onclickconnectend(_) {
			D(C(this, jt), _);
		}
		get clickConnectStartHandle() {
			return c(C(this, $t));
		}
		set clickConnectStartHandle(_) {
			D(C(this, $t), _);
		}
		get onselectiondrag() {
			return c(C(this, en));
		}
		set onselectiondrag(_) {
			D(C(this, en), _);
		}
		get onselectiondragstart() {
			return c(C(this, tn));
		}
		set onselectiondragstart(_) {
			D(C(this, tn), _);
		}
		get onselectiondragstop() {
			return c(C(this, nn));
		}
		set onselectiondragstop(_) {
			D(C(this, nn), _);
		}
		get colorMode() {
			return c(C(this, rn));
		}
		set colorMode(_) {
			D(C(this, rn), _);
		}
		resetStoreValues() {
			(this.dragging = !1),
				(this.selectionRect = null),
				(this.selectionRectMode = null),
				(this.selectionKeyPressed = !1),
				(this.multiselectionKeyPressed = !1),
				(this.deleteKeyPressed = !1),
				(this.panActivationKeyPressed = !1),
				(this.zoomActivationKeyPressed = !1),
				(this._connection = Ur),
				(this.clickConnectStartHandle = null),
				(this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }),
				(this.ariaLiveMessage = '');
		}
	}
	return (
		(n = new WeakMap()),
		(r = new WeakMap()),
		(o = new WeakMap()),
		(s = new WeakMap()),
		(i = new WeakMap()),
		(a = new WeakMap()),
		(l = new WeakMap()),
		(d = new WeakMap()),
		(u = new WeakMap()),
		(h = new WeakMap()),
		(f = new WeakMap()),
		(g = new WeakMap()),
		(m = new WeakMap()),
		(x = new WeakMap()),
		(w = new WeakMap()),
		(S = new WeakMap()),
		(O = new WeakMap()),
		(P = new WeakMap()),
		(A = new WeakMap()),
		(H = new WeakMap()),
		(V = new WeakMap()),
		(F = new WeakMap()),
		(Q = new WeakMap()),
		(Y = new WeakMap()),
		($ = new WeakMap()),
		(M = new WeakMap()),
		(p = new WeakMap()),
		(N = new WeakMap()),
		(v = new WeakMap()),
		(E = new WeakMap()),
		(y = new WeakMap()),
		(k = new WeakMap()),
		(I = new WeakMap()),
		(z = new WeakMap()),
		(T = new WeakMap()),
		(K = new WeakMap()),
		(G = new WeakMap()),
		(Z = new WeakMap()),
		(X = new WeakMap()),
		(j = new WeakMap()),
		(R = new WeakMap()),
		(L = new WeakMap()),
		(W = new WeakMap()),
		(ie = new WeakMap()),
		(ge = new WeakMap()),
		(re = new WeakMap()),
		(we = new WeakMap()),
		(ue = new WeakMap()),
		(pe = new WeakMap()),
		(ze = new WeakMap()),
		(Te = new WeakMap()),
		(Ne = new WeakMap()),
		(oe = new WeakMap()),
		(he = new WeakMap()),
		(_e = new WeakMap()),
		(de = new WeakMap()),
		(ke = new WeakMap()),
		(De = new WeakMap()),
		(He = new WeakMap()),
		(Me = new WeakMap()),
		(ct = new WeakMap()),
		(Ue = new WeakMap()),
		(mt = new WeakMap()),
		(wt = new WeakMap()),
		(xt = new WeakMap()),
		(xe = new WeakMap()),
		(Pe = new WeakMap()),
		(ut = new WeakMap()),
		(pt = new WeakMap()),
		(Jt = new WeakMap()),
		(jt = new WeakMap()),
		($t = new WeakMap()),
		(en = new WeakMap()),
		(tn = new WeakMap()),
		(nn = new WeakMap()),
		(rn = new WeakMap()),
		new t()
	);
}
const nh = Et.error001('svelte');
function Qt() {
	const e = eo(jr);
	if (!e) throw new Error(nh);
	return e.getStore();
}
const jr = Symbol();
function rh(e) {
	const t = th(e);
	function n(M) {
		t.nodeTypes = { ...Is, ...M };
	}
	function r(M) {
		t.edgeTypes = { ...Os, ...M };
	}
	function o(M) {
		t.edges = _f(M, t.edges, { onError: t.onerror });
	}
	const s = (M, p = !1) => {
		t.nodes = t.nodes.map((N) => {
			if (t.connection.inProgress && t.connection.fromNode.id === N.id) {
				const E = t.nodeLookup.get(N.id);
				E &&
					(t.connection = { ...t.connection, from: Mt(E, t.connection.fromHandle, ne.Left, !0) });
			}
			const v = M.get(N.id);
			return v ? { ...N, position: v.position, dragging: p } : N;
		});
	};
	function i(M) {
		var E, y, k;
		const { changes: p, updatedInternals: N } = tf(
			M,
			t.nodeLookup,
			t.parentLookup,
			t.domNode,
			t.nodeOrigin,
			t.nodeExtent,
			t.zIndexMode,
		);
		if (!N) return;
		Ud(t.nodeLookup, t.parentLookup, {
			nodeOrigin: t.nodeOrigin,
			nodeExtent: t.nodeExtent,
			zIndexMode: t.zIndexMode,
		}),
			t.fitViewQueued && t.resolveFitView();
		const v = new Map();
		for (const I of p) {
			const z = (E = t.nodeLookup.get(I.id)) == null ? void 0 : E.internals.userNode;
			if (!z) continue;
			const T = { ...z };
			switch (I.type) {
				case 'dimensions': {
					const K = { ...T.measured, ...I.dimensions };
					I.setAttributes &&
						((T.width = ((y = I.dimensions) == null ? void 0 : y.width) ?? T.width),
						(T.height = ((k = I.dimensions) == null ? void 0 : k.height) ?? T.height)),
						(T.measured = K);
					break;
				}
				case 'position':
					T.position = I.position ?? T.position;
					break;
			}
			v.set(I.id, T);
		}
		t.nodes = t.nodes.map((I) => v.get(I.id) ?? I);
	}
	function a(M) {
		const p = t.fitViewResolver ?? Promise.withResolvers();
		return (
			(t.fitViewQueued = !0),
			(t.fitViewOptions = M),
			(t.fitViewResolver = p),
			(t.nodes = [...t.nodes]),
			p.promise
		);
	}
	async function l(M, p, N) {
		const v = typeof (N == null ? void 0 : N.zoom) < 'u' ? N.zoom : t.maxZoom,
			E = t.panZoom;
		return E
			? (await E.setViewport(
					{ x: t.width / 2 - M * v, y: t.height / 2 - p * v, zoom: v },
					{
						duration: N == null ? void 0 : N.duration,
						ease: N == null ? void 0 : N.ease,
						interpolate: N == null ? void 0 : N.interpolate,
					},
				),
				!0)
			: !1;
	}
	async function d(M, p) {
		const N = t.panZoom;
		return N ? N.scaleBy(M, p) : !1;
	}
	async function u(M) {
		return d(1.2, M);
	}
	function h(M) {
		return d(1 / 1.2, M);
	}
	function f(M) {
		const p = t.panZoom;
		p && (p.setScaleExtent([M, t.maxZoom]), (t.minZoom = M));
	}
	function g(M) {
		const p = t.panZoom;
		p && (p.setScaleExtent([t.minZoom, M]), (t.maxZoom = M));
	}
	function m(M) {
		const p = t.panZoom;
		p && (p.setTranslateExtent(M), (t.translateExtent = M));
	}
	function x(M, p = null) {
		let N = !1;
		const v = M.map((E) =>
			(p ? p.has(E.id) : !0) && E.selected ? ((N = !0), { ...E, selected: !1 }) : E,
		);
		return [N, v];
	}
	function w(M) {
		const p = M != null && M.nodes ? new Set(M.nodes.map((I) => I.id)) : null,
			[N, v] = x(t.nodes, p);
		N && (t.nodes = v);
		const E = M != null && M.edges ? new Set(M.edges.map((I) => I.id)) : null,
			[y, k] = x(t.edges, E);
		y && (t.edges = k);
	}
	function S(M) {
		const p = t.multiselectionKeyPressed;
		(t.nodes = t.nodes.map((N) => {
			const v = M.includes(N.id),
				E = (p && N.selected) || v;
			return !!N.selected !== E ? { ...N, selected: E } : N;
		})),
			p || w({ nodes: [] });
	}
	function O(M) {
		const p = t.multiselectionKeyPressed;
		(t.edges = t.edges.map((N) => {
			const v = M.includes(N.id),
				E = (p && N.selected) || v;
			return !!N.selected !== E ? { ...N, selected: E } : N;
		})),
			p || w({ edges: [] });
	}
	function P(M, p, N) {
		const v = t.nodeLookup.get(M);
		if (!v) {
			t.onerror('012', Et.error012(M));
			return;
		}
		(t.selectionRect = null),
			(t.selectionRectMode = null),
			v.selected
				? (p || (v.selected && t.multiselectionKeyPressed)) &&
					(w({ nodes: [v.internals.userNode], edges: [] }),
					requestAnimationFrame(() => (N == null ? void 0 : N.blur())))
				: S([M]);
	}
	function A(M) {
		const p = t.edgeLookup.get(M);
		if (!p) {
			t.onerror('016', Et.error016(M));
			return;
		}
		(p.selectable || (t.elementsSelectable && typeof p.selectable > 'u')) &&
			((t.selectionRect = null),
			(t.selectionRectMode = null),
			p.selected
				? p.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [p] })
				: O([M]));
	}
	function H(M, p) {
		const {
				nodeExtent: N,
				snapGrid: v,
				nodeOrigin: E,
				nodeLookup: y,
				nodesDraggable: k,
				onerror: I,
			} = t,
			z = new Map(),
			T = (v == null ? void 0 : v[0]) ?? 5,
			K = (v == null ? void 0 : v[1]) ?? 5,
			G = M.x * T * p,
			Z = M.y * K * p;
		for (const X of y.values()) {
			if (!(X.selected && (X.draggable || (k && typeof X.draggable > 'u')))) continue;
			let R = { x: X.internals.positionAbsolute.x + G, y: X.internals.positionAbsolute.y + Z };
			v && (R = Pn(R, v));
			const { position: L, positionAbsolute: W } = fs({
				nodeId: X.id,
				nextPosition: R,
				nodeLookup: y,
				nodeExtent: N,
				nodeOrigin: E,
				onError: I,
			});
			(X.position = L), (X.internals.positionAbsolute = W), z.set(X.id, X);
		}
		s(z);
	}
	function V(M) {
		return nf({
			delta: M,
			panZoom: t.panZoom,
			transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
			translateExtent: t.translateExtent,
			width: t.width,
			height: t.height,
		});
	}
	const F = (M) => {
		t._connection = { ...M };
	};
	function Q() {
		t._connection = Ur;
	}
	function Y() {
		t.resetStoreValues(), w();
	}
	return Object.assign(t, {
		setNodeTypes: n,
		setEdgeTypes: r,
		addEdge: o,
		updateNodePositions: s,
		updateNodeInternals: i,
		zoomIn: u,
		zoomOut: h,
		fitView: a,
		setCenter: l,
		setMinZoom: f,
		setMaxZoom: g,
		setTranslateExtent: m,
		unselectNodesAndEdges: w,
		addSelectedNodes: S,
		addSelectedEdges: O,
		handleNodeSelection: P,
		handleEdgeSelection: A,
		moveSelectedNodes: H,
		panBy: V,
		updateConnection: F,
		cancelConnection: Q,
		reset: Y,
	});
}
function Or(e, t) {
	const {
			minZoom: n,
			maxZoom: r,
			initialViewport: o,
			onPanZoomStart: s,
			onPanZoom: i,
			onPanZoomEnd: a,
			translateExtent: l,
			setPanZoomInstance: d,
			onDraggingChange: u,
			onTransformChange: h,
		} = t,
		f = pf({
			domNode: e,
			minZoom: n,
			maxZoom: r,
			translateExtent: l,
			viewport: o,
			onPanZoom: i,
			onPanZoomStart: s,
			onPanZoomEnd: a,
			onDraggingChange: u,
		}),
		g = f.getViewport();
	return (
		(o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]),
		d(f),
		f.update(t),
		{
			update(m) {
				f.update(m);
			},
		}
	);
}
var oh = se('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function ih(e, t) {
	le(t, !0);
	const n = U(t, 'store', 15),
		r = b(() => n().panActivationKeyPressed || t.panOnDrag),
		o = b(() => n().panActivationKeyPressed || t.panOnScroll);
	const { viewport: s } = n();
	let i = !1;
	at(() => {
		var d;
		!i && n().viewportInitialized && ((d = t.oninit) == null || d.call(t), (i = !0));
	});
	var a = oh(),
		l = ee(a);
	Ye(l, () => t.children),
		J(a),
		Ie(
			a,
			(d, u) => (Or == null ? void 0 : Or(d, u)),
			() => ({
				viewport: n().viewport,
				minZoom: n().minZoom,
				maxZoom: n().maxZoom,
				initialViewport: s,
				onDraggingChange: (d) => {
					n((n().dragging = d), !0);
				},
				setPanZoomInstance: (d) => {
					n((n().panZoom = d), !0);
				},
				onPanZoomStart: t.onmovestart,
				onPanZoom: t.onmove,
				onPanZoomEnd: t.onmoveend,
				zoomOnScroll: t.zoomOnScroll,
				zoomOnDoubleClick: t.zoomOnDoubleClick,
				zoomOnPinch: t.zoomOnPinch,
				panOnScroll: c(o),
				panOnDrag: c(r),
				panOnScrollSpeed: t.panOnScrollSpeed,
				panOnScrollMode: t.panOnScrollMode,
				zoomActivationKeyPressed: n().zoomActivationKeyPressed,
				preventScrolling: typeof t.preventScrolling == 'boolean' ? t.preventScrolling : !0,
				noPanClassName: n().noPanClass,
				noWheelClassName: n().noWheelClass,
				userSelectionActive: !!n().selectionRect,
				translateExtent: n().translateExtent,
				lib: 'svelte',
				paneClickDistance: t.paneClickDistance,
				selectionOnDrag: t.selectionOnDrag,
				onTransformChange: (d) => {
					n((n().viewport = { x: d[0], y: d[1], zoom: d[2] }), !0);
				},
				connectionInProgress: n().connection.inProgress,
			}),
		),
		q(e, a),
		ce();
}
function xi(e, t) {
	return (n) => {
		n.target === t && (e == null || e(n));
	};
}
function pi(e) {
	return (t) => {
		const n = e.has(t.id);
		return !!t.selected !== n ? { ...t, selected: n } : t;
	};
}
function bi(e, t) {
	if (e.size !== t.size) return !1;
	for (const n of e) if (!t.has(n)) return !1;
	return !0;
}
var sh = se('<div><!></div>');
function ah(e, t) {
	le(t, !0);
	let n = U(t, 'store', 15),
		r = U(t, 'panOnDrag', 3, !0),
		o = U(t, 'paneClickDistance', 3, 1),
		s = U(t, 'autoPanOnSelection', 3, !0),
		i,
		a = null,
		l = new Set(),
		d = new Set(),
		u = b(() => n().panActivationKeyPressed || r()),
		h = b(
			() => n().selectionKeyPressed || !!n().selectionRect || (t.selectionOnDrag && c(u) !== !0),
		),
		f = b(() => n().elementsSelectable && (c(h) || n().selectionRectMode === 'user')),
		g = !1,
		m = 0,
		x = { x: 0, y: 0 },
		w = !1;
	function S(y) {
		var Z, X;
		if (((a = i == null ? void 0 : i.getBoundingClientRect()), !a)) return;
		const k = y.target === i,
			I = !k && !!y.target.closest('.nokey'),
			z = (t.selectionOnDrag && k) || n().selectionKeyPressed;
		if (I || !c(h) || !z || y.button !== 0 || !y.isPrimary) return;
		(X = (Z = y.target) == null ? void 0 : Z.setPointerCapture) == null || X.call(Z, y.pointerId),
			(g = !1),
			(w = !1);
		const { x: T, y: K } = Ze(y, a),
			G = Ut({ x: T, y: K }, [n().viewport.x, n().viewport.y, n().viewport.zoom]);
		n((n().selectionRect = { width: 0, height: 0, startX: G.x, startY: G.y, x: T, y: K }), !0),
			k || (y.stopPropagation(), y.preventDefault());
	}
	function O(y, k) {
		var X, j, R;
		if (
			((X = n().selectionRect) == null ? void 0 : X.startX) === void 0 ||
			n().selectionRect.startY === void 0
		)
			return;
		const I = {
				x: (j = n().selectionRect) == null ? void 0 : j.startX,
				y: (R = n().selectionRect) == null ? void 0 : R.startY,
			},
			z = Zt(I, [n().viewport.x, n().viewport.y, n().viewport.zoom]),
			T = {
				startX: I.x,
				startY: I.y,
				x: y < z.x ? y : z.x,
				y: k < z.y ? k : z.y,
				width: Math.abs(y - z.x),
				height: Math.abs(k - z.y),
			},
			K = l,
			G = d;
		l = new Set(
			yo(
				n().nodeLookup,
				T,
				[n().viewport.x, n().viewport.y, n().viewport.zoom],
				n().selectionMode === jn.Partial,
				!0,
			).map((L) => L.id),
		);
		const Z = n().defaultEdgeOptions.selectable ?? !0;
		d = new Set();
		for (const L of l) {
			const W = n().connectionLookup.get(L);
			if (W)
				for (const { edgeId: ie } of W.values()) {
					const ge = n().edgeLookup.get(ie);
					ge && (ge.selectable ?? Z) && d.add(ie);
				}
		}
		bi(K, l) || n((n().nodes = n().nodes.map(pi(l))), !0),
			bi(G, d) || n((n().edges = n().edges.map(pi(d))), !0),
			n((n().selectionRectMode = 'user'), !0),
			n((n().selectionRect = T), !0);
	}
	function P() {
		if (!s() || !a) return;
		const [y, k] = mo(x, a, n().autoPanSpeed);
		n()
			.panBy({ x: y, y: k })
			.then((I) => {
				if (!g || !I) {
					m = requestAnimationFrame(P);
					return;
				}
				O(x.x, x.y), (m = requestAnimationFrame(P));
			});
	}
	function A() {
		cancelAnimationFrame(m), (m = 0), (w = !1);
	}
	ir(() => {
		typeof window < 'u' && A();
	});
	function H(y) {
		var T;
		if (!c(h) || !a || !n().selectionRect) return;
		const k = Ze(y, a);
		x = { x: k.x, y: k.y };
		const I = { x: n().selectionRect.startX, y: n().selectionRect.startY },
			z = Zt(I, [n().viewport.x, n().viewport.y, n().viewport.zoom]);
		if (!g) {
			const K = n().selectionKeyPressed ? 0 : o();
			if (Math.hypot(k.x - z.x, k.y - z.y) <= K) return;
			n().unselectNodesAndEdges(), (T = t.onselectionstart) == null || T.call(t, y);
		}
		(g = !0), w || (P(), (w = !0)), O(k.x, k.y);
	}
	function V(y) {
		var k, I, z;
		y.button === 0 &&
			((I = (k = y.target) == null ? void 0 : k.releasePointerCapture) == null ||
				I.call(k, y.pointerId),
			!g && y.target === i && ($ == null || $(y)),
			n((n().selectionRect = null), !0),
			g && n((n().selectionRectMode = l.size > 0 ? 'nodes' : null), !0),
			g && ((z = t.onselectionend) == null || z.call(t, y)),
			A());
	}
	function F(y) {
		var k, I;
		(I = (k = y.target) == null ? void 0 : k.releasePointerCapture) == null ||
			I.call(k, y.pointerId),
			A();
	}
	const Q = (y) => {
			var k;
			if (Array.isArray(c(u)) && c(u).includes(2)) {
				y.preventDefault();
				return;
			}
			(k = t.onpanecontextmenu) == null || k.call(t, { event: y });
		},
		Y = (y) => {
			g && (y.stopPropagation(), (g = !1));
		};
	function $(y) {
		var k;
		if (g || n().connection.inProgress) {
			g = !1;
			return;
		}
		(k = t.onpaneclick) == null || k.call(t, { event: y }),
			n().unselectNodesAndEdges(),
			n((n().selectionRectMode = null), !0),
			n((n().selectionRect = null), !0);
	}
	var M = sh();
	let p;
	var N = b(() => (c(f) ? void 0 : xi($, i))),
		v = b(() => xi(Q, i)),
		E = ee(M);
	Ye(E, () => t.children),
		J(M),
		En(
			M,
			(y) => (i = y),
			() => i,
		),
		ye(
			(y) => (p = vt(M, 1, 'svelte-flow__pane svelte-flow__container', null, p, y)),
			[
				() => ({
					draggable: r() === !0 || (Array.isArray(r()) && r().includes(0)),
					dragging: n().dragging,
					selection: c(h),
				}),
			],
		),
		Fe('click', M, function (...y) {
			var k;
			(k = c(N)) == null || k.apply(this, y);
		}),
		gn(
			'pointerdown',
			M,
			function (...y) {
				var k;
				(k = c(f) ? S : void 0) == null || k.apply(this, y);
			},
			!0,
		),
		Fe('pointermove', M, function (...y) {
			var k;
			(k = c(f) ? H : void 0) == null || k.apply(this, y);
		}),
		Fe('pointerup', M, function (...y) {
			var k;
			(k = c(f) ? V : void 0) == null || k.apply(this, y);
		}),
		gn('pointercancel', M, function (...y) {
			var k;
			(k = c(f) ? F : void 0) == null || k.apply(this, y);
		}),
		Fe('contextmenu', M, function (...y) {
			var k;
			(k = c(v)) == null || k.apply(this, y);
		}),
		gn(
			'click',
			M,
			function (...y) {
				var k;
				(k = c(f) ? Y : void 0) == null || k.apply(this, y);
			},
			!0,
		),
		q(e, M),
		ce();
}
ro(['click', 'pointermove', 'pointerup', 'contextmenu']);
var lh = se('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function ch(e, t) {
	le(t, !0);
	var n = lh();
	let r;
	var o = ee(n);
	Ye(o, () => t.children),
		J(n),
		ye(
			() =>
				(r = qe(n, '', r, {
					transform: `translate(${t.store.viewport.x ?? ''}px, ${t.store.viewport.y ?? ''}px) scale(${t.store.viewport.zoom ?? ''})`,
				})),
		),
		q(e, n),
		ce();
}
function Vt(e, t) {
	const { store: n, onDrag: r, onDragStart: o, onDragStop: s, onNodeMouseDown: i } = t,
		a = af({
			onDrag: r,
			onDragStart: o,
			onDragStop: s,
			onNodeMouseDown: i,
			getStoreItems: () => {
				const { snapGrid: d, viewport: u } = n;
				return {
					nodes: n.nodes,
					nodeLookup: n.nodeLookup,
					edges: n.edges,
					nodeExtent: n.nodeExtent,
					snapGrid: d || [0, 0],
					snapToGrid: !!d,
					nodeOrigin: n.nodeOrigin,
					multiSelectionActive: n.multiselectionKeyPressed,
					domNode: n.domNode,
					transform: [u.x, u.y, u.zoom],
					autoPanOnNodeDrag: n.autoPanOnNodeDrag,
					nodesDraggable: n.nodesDraggable,
					selectNodesOnDrag: n.selectNodesOnDrag,
					nodeDragThreshold: n.nodeDragThreshold,
					unselectNodesAndEdges: n.unselectNodesAndEdges,
					updateNodePositions: n.updateNodePositions,
					onSelectionDrag: n.onselectiondrag,
					onSelectionDragStart: n.onselectiondragstart,
					onSelectionDragStop: n.onselectiondragstop,
					panBy: n.panBy,
				};
			},
		});
	function l(d, u) {
		if (u.disabled) {
			a.destroy();
			return;
		}
		a.update({
			domNode: d,
			noDragClassName: u.noDragClass,
			handleSelector: u.handleSelector,
			nodeId: u.nodeId,
			isSelectable: u.isSelectable,
			nodeClickDistance: u.nodeClickDistance,
		});
	}
	return (
		l(e, t),
		{
			update(d) {
				l(e, d);
			},
			destroy() {
				a.destroy();
			},
		}
	);
}
var uh = se(
		'<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>',
	),
	dh = se(
		'<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>',
		1,
	);
function fh(e, t) {
	le(t, !0);
	var n = dh(),
		r = me(n),
		o = ee(r, !0);
	J(r);
	var s = te(r, 2),
		i = ee(s, !0);
	J(s);
	var a = te(s, 2);
	var l = (d) => {
		var u = uh(),
			h = ee(u, !0);
		J(u),
			ye(() => {
				be(u, 'id', `${hh}-${t.store.flowId}`), Ce(h, t.store.ariaLiveMessage);
			}),
			q(d, u);
	};
	ve(a, (d) => {
		t.store.disableKeyboardA11y || d(l);
	});
	ye(() => {
		be(r, 'id', `${Ds}-${t.store.flowId}`),
			Ce(
				o,
				t.store.disableKeyboardA11y
					? t.store.ariaLabelConfig['node.a11yDescription.default']
					: t.store.ariaLabelConfig['node.a11yDescription.keyboardDisabled'],
			),
			be(s, 'id', `${Hs}-${t.store.flowId}`),
			Ce(i, t.store.ariaLabelConfig['edge.a11yDescription.default']);
	}),
		q(e, n),
		ce();
}
const Ds = 'svelte-flow__node-desc',
	Hs = 'svelte-flow__edge-desc',
	hh = 'svelte-flow__aria-live';
var gh = se('<div><!></div>');
function vh(e, t) {
	le(t, !0);
	const n = U(t, 'store', 15),
		r = b(() => Ae(t.node.data, () => ({}), !0)),
		o = b(() => Ae(t.node.selected, !1)),
		s = b(() => t.node.draggable),
		i = b(() => t.node.selectable),
		a = b(() => Ae(t.node.deletable, !0)),
		l = b(() => t.node.connectable),
		d = b(() => t.node.focusable),
		u = b(() => Ae(t.node.hidden, !1)),
		h = b(() => Ae(t.node.dragging, !1)),
		f = b(() => Ae(t.node.style, '')),
		g = b(() => t.node.class),
		m = b(() => Ae(t.node.type, 'default')),
		x = b(() => t.node.parentId),
		w = b(() => t.node.sourcePosition),
		S = b(() => t.node.targetPosition),
		O = b(() => Ae(t.node.measured, () => ({ width: 0, height: 0 }), !0).width),
		P = b(() => Ae(t.node.measured, () => ({ width: 0, height: 0 }), !0).height),
		A = b(() => t.node.initialWidth),
		H = b(() => t.node.initialHeight),
		V = b(() => t.node.width),
		F = b(() => t.node.height),
		Q = b(() => t.node.dragHandle),
		Y = b(() => Ae(t.node.internals.z, 0)),
		$ = b(() => t.node.internals.positionAbsolute.x),
		M = b(() => t.node.internals.positionAbsolute.y),
		p = b(() => t.node.internals.userNode),
		{ id: N } = t.node,
		v = b(() => c(s) ?? n().nodesDraggable),
		E = b(() => c(i) ?? n().elementsSelectable),
		y = b(() => c(l) ?? n().nodesConnectable),
		k = b(() => Td(t.node)),
		I = b(() => !!t.node.internals.handleBounds),
		z = b(() => c(k) && c(I)),
		T = b(() => c(d) ?? n().nodesFocusable);
	function K(oe) {
		return n().parentLookup.has(oe);
	}
	let G = b(() => K(N)),
		Z = ae(null),
		X = null,
		j = c(m),
		R = c(w),
		L = c(S),
		W = b(() => n().nodeTypes[c(m)] ?? zs),
		ie = b(() => n().ariaLabelConfig),
		ge = {
			get value() {
				return c(y);
			},
		};
	Sf(N), Cf(ge);
	const re = b(() => {
		const oe = c(O) === void 0 ? (c(V) ?? c(A)) : c(V),
			he = c(P) === void 0 ? (c(F) ?? c(H)) : c(F);
		if (!(oe === void 0 && he === void 0 && c(f) === void 0))
			return `${c(f)};${oe ? `width:${nt(oe)};` : ''}${he ? `height:${nt(he)};` : ''}`;
	});
	at(() => {
		(c(m) !== j || c(w) !== R || c(S) !== L) &&
			c(Z) !== null &&
			requestAnimationFrame(() => {
				c(Z) !== null &&
					n().updateNodeInternals(new Map([[N, { id: N, nodeElement: c(Z), force: !0 }]]));
			}),
			(j = c(m)),
			(R = c(w)),
			(L = c(S));
	}),
		at(() => {
			t.resizeObserver &&
				(!c(z) || c(Z) !== X) &&
				(X && t.resizeObserver.unobserve(X), c(Z) && t.resizeObserver.observe(c(Z)), (X = c(Z)));
		}),
		ir(() => {
			var oe;
			X && ((oe = t.resizeObserver) == null || oe.unobserve(X));
		});
	function we(oe) {
		var he;
		c(E) &&
			(!n().selectNodesOnDrag || !c(v) || n().nodeDragThreshold > 0) &&
			n().handleNodeSelection(N),
			(he = t.onnodeclick) == null || he.call(t, { node: c(p), event: oe });
	}
	function ue(oe) {
		if (!(ms(oe) || n().disableKeyboardA11y))
			if (us.includes(oe.key) && c(E)) {
				const he = oe.key === 'Escape';
				n().handleNodeSelection(N, he, c(Z));
			} else
				c(v) &&
					t.node.selected &&
					Object.hasOwn(nr, oe.key) &&
					(oe.preventDefault(),
					n(
						(n().ariaLiveMessage = c(ie)['node.a11yDescription.ariaLiveMessage']({
							direction: oe.key.replace('Arrow', '').toLowerCase(),
							x: ~~t.node.internals.positionAbsolute.x,
							y: ~~t.node.internals.positionAbsolute.y,
						})),
						!0,
					),
					n().moveSelectedNodes(nr[oe.key], oe.shiftKey ? 4 : 1));
	}
	const pe = () => {
		var ke;
		if (
			n().disableKeyboardA11y ||
			!n().autoPanOnNodeFocus ||
			!((ke = c(Z)) != null && ke.matches(':focus-visible'))
		)
			return;
		const { width: oe, height: he, viewport: _e } = n();
		yo(new Map([[N, t.node]]), { x: 0, y: 0, width: oe, height: he }, [_e.x, _e.y, _e.zoom], !0)
			.length > 0 ||
			n().setCenter(
				t.node.position.x + (t.node.measured.width ?? 0) / 2,
				t.node.position.y + (t.node.measured.height ?? 0) / 2,
				{ zoom: _e.zoom },
			);
	};
	var ze = Re(),
		Te = me(ze);
	var Ne = (oe) => {
		var he = gh();
		yt(he, () => ({
			'data-id': N,
			class: ['svelte-flow__node', `svelte-flow__node-${c(m)}`, c(g)],
			style: c(re),
			onclick: we,
			onpointerenter: t.onnodepointerenter
				? (de) => t.onnodepointerenter({ node: c(p), event: de })
				: void 0,
			onpointerleave: t.onnodepointerleave
				? (de) => t.onnodepointerleave({ node: c(p), event: de })
				: void 0,
			onpointermove: t.onnodepointermove
				? (de) => t.onnodepointermove({ node: c(p), event: de })
				: void 0,
			oncontextmenu: t.onnodecontextmenu
				? (de) => t.onnodecontextmenu({ node: c(p), event: de })
				: void 0,
			onkeydown: c(T) ? ue : void 0,
			onfocus: c(T) ? pe : void 0,
			tabIndex: c(T) ? 0 : void 0,
			role: t.node.ariaRole ?? (c(T) ? 'group' : void 0),
			'aria-label': t.node.ariaLabel,
			'aria-roledescription': 'node',
			'aria-describedby': n().disableKeyboardA11y ? void 0 : `${Ds}-${n().flowId}`,
			...t.node.domAttributes,
			[to]: {
				dragging: c(h),
				selected: c(o),
				draggable: c(v),
				connectable: c(y),
				selectable: c(E),
				nopan: c(v),
				parent: c(G),
			},
			[sr]: {
				'z-index': c(Y),
				transform: `translate(${c($) ?? ''}px, ${c(M) ?? ''}px)`,
				visibility: c(k) ? 'visible' : 'hidden',
			},
		}));
		var _e = ee(he);
		oo(
			_e,
			() => c(W),
			(de, ke) => {
				ke(de, {
					get data() {
						return c(r);
					},
					get id() {
						return N;
					},
					get selected() {
						return c(o);
					},
					get selectable() {
						return c(E);
					},
					get deletable() {
						return c(a);
					},
					get sourcePosition() {
						return c(w);
					},
					get targetPosition() {
						return c(S);
					},
					get zIndex() {
						return c(Y);
					},
					get dragging() {
						return c(h);
					},
					get draggable() {
						return c(v);
					},
					get dragHandle() {
						return c(Q);
					},
					get parentId() {
						return c(x);
					},
					get type() {
						return c(m);
					},
					get isConnectable() {
						return c(y);
					},
					get positionAbsoluteX() {
						return c($);
					},
					get positionAbsoluteY() {
						return c(M);
					},
					get width() {
						return c(V);
					},
					get height() {
						return c(F);
					},
				});
			},
		),
			J(he),
			Ie(
				he,
				(de, ke) => (Vt == null ? void 0 : Vt(de, ke)),
				() => ({
					nodeId: N,
					isSelectable: c(E),
					disabled: !c(v),
					handleSelector: c(Q),
					noDragClass: n().noDragClass,
					nodeClickDistance: t.nodeClickDistance,
					onNodeMouseDown: n().handleNodeSelection,
					onDrag: (de, ke, De, He) => {
						var Me;
						(Me = t.onnodedrag) == null || Me.call(t, { event: de, targetNode: De, nodes: He });
					},
					onDragStart: (de, ke, De, He) => {
						var Me;
						(Me = t.onnodedragstart) == null ||
							Me.call(t, { event: de, targetNode: De, nodes: He });
					},
					onDragStop: (de, ke, De, He) => {
						var Me;
						(Me = t.onnodedragstop) == null || Me.call(t, { event: de, targetNode: De, nodes: He });
					},
					store: n(),
				}),
			),
			En(
				he,
				(de) => D(Z, de),
				() => c(Z),
			),
			q(oe, he);
	};
	ve(Te, (oe) => {
		c(u) || oe(Ne);
	});
	q(e, ze), ce();
}
var yh = se('<div class="svelte-flow__nodes"></div>');
function mh(e, t) {
	le(t, !0);
	const n = U(t, 'store', 15);
	const r =
		typeof ResizeObserver > 'u'
			? null
			: new ResizeObserver((s) => {
					const i = new Map();
					s.forEach((a) => {
						const l = a.target.getAttribute('data-id');
						i.set(l, { id: l, nodeElement: a.target, force: !0 });
					}),
						n().updateNodeInternals(i);
				});
	ir(() => {
		r == null || r.disconnect();
	});
	var o = yh();
	io(
		o,
		21,
		() => n().visible.nodes.values(),
		(s) => s.id,
		(s, i) => {
			vh(s, {
				get node() {
					return c(i);
				},
				get resizeObserver() {
					return r;
				},
				get nodeClickDistance() {
					return t.nodeClickDistance;
				},
				get onnodeclick() {
					return t.onnodeclick;
				},
				get onnodepointerenter() {
					return t.onnodepointerenter;
				},
				get onnodepointermove() {
					return t.onnodepointermove;
				},
				get onnodepointerleave() {
					return t.onnodepointerleave;
				},
				get onnodedrag() {
					return t.onnodedrag;
				},
				get onnodedragstart() {
					return t.onnodedragstart;
				},
				get onnodedragstop() {
					return t.onnodedragstop;
				},
				get onnodecontextmenu() {
					return t.onnodecontextmenu;
				},
				get store() {
					return n();
				},
				set store(a) {
					n(a);
				},
			});
		},
	),
		J(o),
		q(e, o),
		ce();
}
var wh = Se('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function xh(e, t) {
	le(t, !0);
	const n = b(() => t.edge.id),
		r = b(() => t.edge.source),
		o = b(() => t.edge.target),
		s = b(() => t.edge.sourceX),
		i = b(() => t.edge.sourceY),
		a = b(() => t.edge.targetX),
		l = b(() => t.edge.targetY),
		d = b(() => t.edge.sourcePosition),
		u = b(() => t.edge.targetPosition),
		h = b(() => Ae(t.edge.animated, !1)),
		f = b(() => Ae(t.edge.selected, !1)),
		g = b(() => t.edge.label),
		m = b(() => t.edge.labelStyle),
		x = b(() => Ae(t.edge.data, () => ({}), !0)),
		w = b(() => t.edge.style),
		S = b(() => t.edge.interactionWidth),
		O = b(() => Ae(t.edge.type, 'default')),
		P = b(() => t.edge.sourceHandle),
		A = b(() => t.edge.targetHandle),
		H = b(() => t.edge.markerStart),
		V = b(() => t.edge.markerEnd),
		F = b(() => t.edge.selectable),
		Q = b(() => t.edge.focusable),
		Y = b(() => Ae(t.edge.deletable, !0)),
		$ = b(() => t.edge.hidden),
		M = b(() => t.edge.zIndex),
		p = b(() => t.edge.class),
		N = b(() => t.edge.ariaLabel);
	Nf(c(n));
	let v = null,
		E = b(() => c(F) ?? t.store.elementsSelectable),
		y = b(() => c(Q) ?? t.store.edgesFocusable),
		k = b(() => t.store.edgeTypes[c(O)] ?? Ts),
		I = b(() => (c(H) ? `url('#${Jr(c(H), t.store.flowId)}')` : void 0)),
		z = b(() => (c(V) ? `url('#${Jr(c(V), t.store.flowId)}')` : void 0));
	function T(R) {
		var W;
		const L = t.store.edgeLookup.get(c(n));
		L &&
			(c(E) && t.store.handleEdgeSelection(c(n)),
			(W = t.onedgeclick) == null || W.call(t, { event: R, edge: L }));
	}
	function K(R, L) {
		const W = t.store.edgeLookup.get(c(n));
		W && L({ event: R, edge: W });
	}
	function G(R) {
		if (!t.store.disableKeyboardA11y && us.includes(R.key) && c(E)) {
			const { unselectNodesAndEdges: L, addSelectedEdges: W } = t.store;
			R.key === 'Escape' ? (v == null || v.blur(), L({ edges: [t.edge] })) : W([c(n)]);
		}
	}
	var Z = Re(),
		X = me(Z);
	var j = (R) => {
		var L = wh();
		let W;
		var ie = ee(L);
		yt(ie, () => ({
			class: ['svelte-flow__edge', c(p)],
			'data-id': c(n),
			onclick: T,
			oncontextmenu: t.onedgecontextmenu
				? (re) => {
						K(re, t.onedgecontextmenu);
					}
				: void 0,
			onpointerenter: t.onedgepointerenter
				? (re) => {
						K(re, t.onedgepointerenter);
					}
				: void 0,
			onpointerleave: t.onedgepointerleave
				? (re) => {
						K(re, t.onedgepointerleave);
					}
				: void 0,
			'aria-label': c(N) === null ? void 0 : c(N) ? c(N) : `Edge from ${c(r)} to ${c(o)}`,
			'aria-describedby': c(y) ? `${Hs}-${t.store.flowId}` : void 0,
			role: t.edge.ariaRole ?? (c(y) ? 'group' : 'img'),
			'aria-roledescription': 'edge',
			onkeydown: c(y) ? G : void 0,
			tabindex: c(y) ? 0 : void 0,
			...t.edge.domAttributes,
			[to]: { animated: c(h), selected: c(f), selectable: c(E) },
		}));
		var ge = ee(ie);
		oo(
			ge,
			() => c(k),
			(re, we) => {
				we(re, {
					get id() {
						return c(n);
					},
					get source() {
						return c(r);
					},
					get target() {
						return c(o);
					},
					get sourceX() {
						return c(s);
					},
					get sourceY() {
						return c(i);
					},
					get targetX() {
						return c(a);
					},
					get targetY() {
						return c(l);
					},
					get sourcePosition() {
						return c(d);
					},
					get targetPosition() {
						return c(u);
					},
					get animated() {
						return c(h);
					},
					get selected() {
						return c(f);
					},
					get label() {
						return c(g);
					},
					get labelStyle() {
						return c(m);
					},
					get data() {
						return c(x);
					},
					get style() {
						return c(w);
					},
					get interactionWidth() {
						return c(S);
					},
					get selectable() {
						return c(E);
					},
					get deletable() {
						return c(Y);
					},
					get type() {
						return c(O);
					},
					get sourceHandleId() {
						return c(P);
					},
					get targetHandleId() {
						return c(A);
					},
					get markerStart() {
						return c(I);
					},
					get markerEnd() {
						return c(z);
					},
				});
			},
		),
			J(ie),
			En(
				ie,
				(re) => (v = re),
				() => v,
			),
			J(L),
			ye(() => (W = qe(L, '', W, { 'z-index': c(M) }))),
			q(R, L);
	};
	ve(X, (R) => {
		c($) || R(j);
	});
	q(e, Z), ce();
}
var ph = Se('<defs></defs>');
function bh(e, t) {
	le(t, !1);
	const n = Qt();
	La();
	var r = ph();
	io(
		r,
		5,
		() => n.markers,
		(o) => o.id,
		(o, s) => {
			Eh(
				o,
				It(() => c(s)),
			);
		},
	),
		J(r),
		q(e, r),
		ce();
}
var _h = Se(
		'<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>',
	),
	kh = Se(
		'<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>',
	),
	Sh = Se(
		'<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>',
	);
function Eh(e, t) {
	le(t, !0);
	const n = U(t, 'width', 3, 12.5),
		r = U(t, 'height', 3, 12.5),
		o = U(t, 'markerUnits', 3, 'strokeWidth'),
		s = U(t, 'orient', 3, 'auto-start-reverse'),
		i = U(t, 'color', 3, 'none');
	var a = Sh(),
		l = ee(a);
	var d = (h) => {
			var f = _h();
			let g;
			ye(() => {
				be(f, 'stroke-width', t.strokeWidth), (g = qe(f, '', g, { stroke: i() }));
			}),
				q(h, f);
		},
		u = (h) => {
			var f = kh();
			let g;
			ye(() => {
				be(f, 'stroke-width', t.strokeWidth), (g = qe(f, '', g, { stroke: i(), fill: i() }));
			}),
				q(h, f);
		};
	ve(l, (h) => {
		t.type === $n.Arrow ? h(d) : t.type === $n.ArrowClosed && h(u, 1);
	});
	J(a),
		ye(() => {
			be(a, 'id', t.id),
				be(a, 'markerWidth', `${n()}`),
				be(a, 'markerHeight', `${r()}`),
				be(a, 'markerUnits', o()),
				be(a, 'orient', s());
		}),
		q(e, a),
		ce();
}
var Ch = se('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Mh(e, t) {
	le(t, !0);
	const n = U(t, 'store', 15);
	var r = Ch(),
		o = ee(r),
		s = ee(o);
	bh(s, {}), J(o);
	var i = te(o, 2);
	io(
		i,
		17,
		() => n().visible.edges.values(),
		(a) => a.id,
		(a, l) => {
			xh(a, {
				get edge() {
					return c(l);
				},
				get onedgeclick() {
					return t.onedgeclick;
				},
				get onedgecontextmenu() {
					return t.onedgecontextmenu;
				},
				get onedgepointerenter() {
					return t.onedgepointerenter;
				},
				get onedgepointerleave() {
					return t.onedgepointerleave;
				},
				get store() {
					return n();
				},
				set store(d) {
					n(d);
				},
			});
		},
	),
		J(r),
		q(e, r),
		ce();
}
var Nh = se('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function Rs(e, t) {
	le(t, !0);
	const n = U(t, 'x', 3, 0),
		r = U(t, 'y', 3, 0),
		o = U(t, 'width', 3, 0),
		s = U(t, 'height', 3, 0),
		i = U(t, 'isVisible', 3, !0);
	var a = Re(),
		l = me(a);
	var d = (u) => {
		var h = Nh();
		let f;
		ye(
			(g) => (f = qe(h, '', f, g)),
			[
				() => ({
					width: typeof o() == 'string' ? o() : nt(o()),
					height: typeof s() == 'string' ? s() : nt(s()),
					transform: `translate(${n()}px, ${r()}px)`,
				}),
			],
		),
			q(u, h);
	};
	ve(l, (u) => {
		i() && u(d);
	});
	q(e, a), ce();
}
var Ph = se('<div><!></div>');
function Ah(e, t) {
	le(t, !0);
	const n = ae(void 0);
	at(() => {
		var h;
		t.store.disableKeyboardA11y || (h = c(n)) == null || h.focus({ preventScroll: !0 });
	});
	const r = b(() => {
		if (t.store.selectionRectMode === 'nodes') {
			t.store.nodes;
			const h = fr(t.store.nodeLookup, { filter: (f) => !!f.selected });
			if (h.width > 0 && h.height > 0) return h;
		}
		return null;
	});
	function o(h) {
		var g;
		const f = t.store.nodes.filter((m) => m.selected);
		(g = t.onselectioncontextmenu) == null || g.call(t, { nodes: f, event: h });
	}
	function s(h) {
		var g;
		const f = t.store.nodes.filter((m) => m.selected);
		(g = t.onselectionclick) == null || g.call(t, { nodes: f, event: h });
	}
	function i(h) {
		Object.hasOwn(nr, h.key) &&
			(h.preventDefault(), t.store.moveSelectedNodes(nr[h.key], h.shiftKey ? 4 : 1));
	}
	var a = Re(),
		l = me(a);
	var d = (h) => {
			var f = Ph();
			let g;
			var m = ee(f);
			Rs(m, { width: '100%', height: '100%', x: 0, y: 0 }),
				J(f),
				Ie(
					f,
					(x, w) => (Vt == null ? void 0 : Vt(x, w)),
					() => ({
						disabled: !1,
						store: t.store,
						onDrag: (x, w, S, O) => {
							var P;
							(P = t.onnodedrag) == null || P.call(t, { event: x, targetNode: null, nodes: O });
						},
						onDragStart: (x, w, S, O) => {
							var P;
							(P = t.onnodedragstart) == null ||
								P.call(t, { event: x, targetNode: null, nodes: O });
						},
						onDragStop: (x, w, S, O) => {
							var P;
							(P = t.onnodedragstop) == null || P.call(t, { event: x, targetNode: null, nodes: O });
						},
					}),
				),
				En(
					f,
					(x) => D(n, x),
					() => c(n),
				),
				ye(
					(x) => {
						vt(f, 1, no(['svelte-flow__selection-wrapper', t.store.noPanClass]), 'svelte-sf2y5e'),
							be(f, 'role', t.store.disableKeyboardA11y ? void 0 : 'button'),
							be(f, 'tabindex', t.store.disableKeyboardA11y ? void 0 : -1),
							(g = qe(f, '', g, x));
					},
					[
						() => ({
							width: nt(c(r).width),
							height: nt(c(r).height),
							transform: `translate(${c(r).x ?? ''}px, ${c(r).y ?? ''}px)`,
						}),
					],
				),
				Fe('contextmenu', f, o),
				Fe('click', f, s),
				Fe('keydown', f, function (...x) {
					var w;
					(w = t.store.disableKeyboardA11y ? void 0 : i) == null || w.apply(this, x);
				}),
				q(h, f);
		},
		u = b(() => t.store.selectionRectMode === 'nodes' && c(r) && st(c(r).x) && st(c(r).y));
	ve(l, (h) => {
		c(u) && h(d);
	});
	q(e, a), ce();
}
ro(['contextmenu', 'click', 'keydown']);
function zh(e) {
	switch (e) {
		case 'ctrl':
			return 8;
		case 'shift':
			return 4;
		case 'alt':
			return 2;
		case 'meta':
			return 1;
	}
}
function fe(e, t) {
	let { enabled: n = !0, trigger: r, type: o = 'keydown' } = t;
	function s(a) {
		var u;
		const l = Array.isArray(r) ? r : [r],
			d = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
				(h, f, g) => (f ? h | (1 << g) : h),
				0,
			);
		for (const h of l) {
			const f = { preventDefault: !1, enabled: !0, ...h },
				{ modifier: g, key: m, callback: x, preventDefault: w, enabled: S } = f;
			if (S) {
				if (a.key !== m) continue;
				if (g === null || g === !1) {
					if (d !== 0) continue;
				} else if (
					g !== void 0 &&
					((u = g == null ? void 0 : g[0]) == null ? void 0 : u.length) > 0
				) {
					const P = Array.isArray(g) ? g : [g];
					let A = !1;
					for (const H of P)
						if ((Array.isArray(H) ? H : [H]).reduce((F, Q) => F | zh(Q), 0) === d) {
							A = !0;
							break;
						}
					if (!A) continue;
				}
				w && a.preventDefault();
				const O = { node: e, trigger: f, originalEvent: a };
				e.dispatchEvent(new CustomEvent('shortcut', { detail: O })), x == null || x(O);
			}
		}
	}
	let i;
	return (
		n && (i = Rr(e, o, s)),
		{
			update: (a) => {
				const { enabled: l = !0, type: d = 'keydown' } = a;
				n && (!l || o !== d) ? i == null || i() : !n && l && (i = Rr(e, d, s)),
					(n = l),
					(o = d),
					(r = a.trigger);
			},
			destroy: () => {
				i == null || i();
			},
		}
	);
}
function Th() {
	const e = b(Qt),
		t = (s) => {
			var d, u;
			const i = mi(s) ? s : c(e).nodeLookup.get(s.id),
				a = i.parentId
					? Id(i.position, i.measured, i.parentId, c(e).nodeLookup, c(e).nodeOrigin)
					: i.position,
				l = {
					...i,
					position: a,
					width: ((d = i.measured) == null ? void 0 : d.width) ?? i.width,
					height: ((u = i.measured) == null ? void 0 : u.height) ?? i.height,
				};
			return Wt(l);
		};
	function n(s, i, a = { replace: !1 }) {
		c(e).nodes = gt(() => c(e).nodes).map((l) => {
			if (l.id === s) {
				const d = typeof i == 'function' ? i(l) : i;
				return a != null && a.replace && mi(d) ? d : { ...l, ...d };
			}
			return l;
		});
	}
	function r(s, i, a = { replace: !1 }) {
		c(e).edges = gt(() => c(e).edges).map((l) => {
			if (l.id === s) {
				const d = typeof i == 'function' ? i(l) : i;
				return a.replace && Lf(d) ? d : { ...l, ...d };
			}
			return l;
		});
	}
	const o = (s) => c(e).nodeLookup.get(s);
	return {
		zoomIn: c(e).zoomIn,
		zoomOut: c(e).zoomOut,
		getInternalNode: o,
		getNode: (s) => {
			var i;
			return (i = o(s)) == null ? void 0 : i.internals.userNode;
		},
		getNodes: (s) => (s === void 0 ? c(e).nodes : _i(c(e).nodeLookup, s)),
		getEdge: (s) => c(e).edgeLookup.get(s),
		getEdges: (s) => (s === void 0 ? c(e).edges : _i(c(e).edgeLookup, s)),
		setZoom: async (s, i) => {
			const a = c(e).panZoom;
			return a ? a.scaleTo(s, i) : !1;
		},
		getZoom: () => c(e).viewport.zoom,
		setViewport: async (s, i) => {
			const a = c(e).viewport;
			return c(e).panZoom
				? (await c(e).panZoom.setViewport(
						{ x: s.x ?? a.x, y: s.y ?? a.y, zoom: s.zoom ?? a.zoom },
						i,
					),
					!0)
				: !1;
		},
		getViewport: () => Oi(c(e).viewport),
		setCenter: async (s, i, a) => c(e).setCenter(s, i, a),
		fitView: (s) => c(e).fitView(s),
		fitBounds: async (s, i) => {
			if (!c(e).panZoom) return !1;
			const a = wo(
				s,
				c(e).width,
				c(e).height,
				c(e).minZoom,
				c(e).maxZoom,
				(i == null ? void 0 : i.padding) ?? 0.1,
			);
			return (
				await c(e).panZoom.setViewport(a, {
					duration: i == null ? void 0 : i.duration,
					ease: i == null ? void 0 : i.ease,
					interpolate: i == null ? void 0 : i.interpolate,
				}),
				!0
			);
		},
		getIntersectingNodes: (s, i = !0, a) => {
			const l = ii(s),
				d = l ? s : t(s);
			return d
				? (a || c(e).nodes).filter((u) => {
						const h = c(e).nodeLookup.get(u.id);
						if (!h || (!l && u.id === s.id)) return !1;
						const f = Wt(h),
							g = pn(f, d);
						return (i && g > 0) || g >= f.width * f.height || g >= d.width * d.height;
					})
				: [];
		},
		isNodeIntersecting: (s, i, a = !0) => {
			const d = ii(s) ? s : t(s);
			if (!d) return !1;
			const u = pn(d, i);
			return (a && u > 0) || u >= i.width * i.height || u >= d.width * d.height;
		},
		deleteElements: async ({ nodes: s = [], edges: i = [] }) => {
			var d, u;
			const { nodes: a, edges: l } = await Nd({
				nodesToRemove: s,
				edgesToRemove: i,
				nodes: c(e).nodes,
				edges: c(e).edges,
				onBeforeDelete: c(e).onbeforedelete,
			});
			return (
				a && (c(e).nodes = gt(() => c(e).nodes).filter((h) => !a.some(({ id: f }) => f === h.id))),
				l && (c(e).edges = gt(() => c(e).edges).filter((h) => !l.some(({ id: f }) => f === h.id))),
				(a.length > 0 || l.length > 0) &&
					((u = (d = c(e)).ondelete) == null || u.call(d, { nodes: a, edges: l })),
				{ deletedNodes: a, deletedEdges: l }
			);
		},
		screenToFlowPosition: (s, i = { snapToGrid: !0 }) => {
			if (!c(e).domNode) return s;
			const a = i.snapToGrid ? c(e).snapGrid : !1,
				{ x: l, y: d, zoom: u } = c(e).viewport,
				{ x: h, y: f } = c(e).domNode.getBoundingClientRect(),
				g = { x: s.x - h, y: s.y - f };
			return Ut(g, [l, d, u], a !== null, a || [1, 1]);
		},
		flowToScreenPosition: (s) => {
			if (!c(e).domNode) return s;
			const { x: i, y: a, zoom: l } = c(e).viewport,
				{ x: d, y: u } = c(e).domNode.getBoundingClientRect(),
				h = Zt(s, [i, a, l]);
			return { x: h.x + d, y: h.y + u };
		},
		toObject: () =>
			structuredClone({
				nodes: [...c(e).nodes],
				edges: [...c(e).edges],
				viewport: { ...c(e).viewport },
			}),
		updateNode: n,
		updateNodeData: (s, i, a) => {
			var u;
			const l = (u = c(e).nodeLookup.get(s)) == null ? void 0 : u.internals.userNode;
			if (!l) return;
			const d = typeof i == 'function' ? i(l) : i;
			n(s, (h) => ({ ...h, data: a != null && a.replace ? d : { ...h.data, ...d } }));
		},
		updateEdge: r,
		getNodesBounds: (s) => Sd(s, { nodeLookup: c(e).nodeLookup, nodeOrigin: c(e).nodeOrigin }),
		getHandleConnections: ({ type: s, id: i, nodeId: a }) => {
			var l;
			return Array.from(
				((l = c(e).connectionLookup.get(`${a}-${s}-${i ?? null}`)) == null ? void 0 : l.values()) ??
					[],
			);
		},
	};
}
function _i(e, t) {
	var r;
	const n = [];
	for (const o of t) {
		const s = e.get(o);
		if (s) {
			const i = 'internals' in s ? ((r = s.internals) == null ? void 0 : r.userNode) : s;
			n.push(i);
		}
	}
	return n;
}
function Ih(e, t) {
	le(t, !0);
	const n = U(t, 'store', 15),
		r = U(t, 'selectionKey', 3, 'Shift'),
		o = U(t, 'multiSelectionKey', 19, () => (tr() ? 'Meta' : 'Control')),
		s = U(t, 'deleteKey', 3, 'Backspace'),
		i = U(t, 'panActivationKey', 3, ' '),
		a = U(t, 'zoomActivationKey', 19, () => (tr() ? 'Meta' : 'Control')),
		{ deleteElements: l } = Th();
	function d(x) {
		return x !== null && typeof x == 'object';
	}
	function u(x) {
		return d(x) ? x.modifier || [] : [];
	}
	function h(x) {
		return x == null ? '' : d(x) ? x.key : x;
	}
	function f(x, w) {
		return (Array.isArray(x) ? x : [x]).map((O) => {
			const P = h(O);
			return { key: P, modifier: u(O), enabled: P !== null, callback: w };
		});
	}
	function g() {
		n((n().selectionRect = null), !0),
			n((n().selectionKeyPressed = !1), !0),
			n((n().multiselectionKeyPressed = !1), !0),
			n((n().deleteKeyPressed = !1), !0),
			n((n().panActivationKeyPressed = !1), !0),
			n((n().zoomActivationKeyPressed = !1), !0);
	}
	function m() {
		const x = n().nodes.filter((S) => S.selected),
			w = n().edges.filter((S) => S.selected);
		l({ nodes: x, edges: w });
	}
	gn('blur', Be, g),
		gn('contextmenu', Be, g),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({ trigger: f(r(), () => n((n().selectionKeyPressed = !0), !0)), type: 'keydown' }),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({ trigger: f(r(), () => n((n().selectionKeyPressed = !1), !0)), type: 'keyup' }),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({
				trigger: f(o(), () => {
					n((n().multiselectionKeyPressed = !0), !0);
				}),
				type: 'keydown',
			}),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({ trigger: f(o(), () => n((n().multiselectionKeyPressed = !1), !0)), type: 'keyup' }),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({
				trigger: f(s(), (x) => {
					!(x.originalEvent.ctrlKey || x.originalEvent.metaKey || x.originalEvent.shiftKey) &&
						!ms(x.originalEvent) &&
						(n((n().deleteKeyPressed = !0), !0), m());
				}),
				type: 'keydown',
			}),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({ trigger: f(s(), () => n((n().deleteKeyPressed = !1), !0)), type: 'keyup' }),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({ trigger: f(i(), () => n((n().panActivationKeyPressed = !0), !0)), type: 'keydown' }),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({ trigger: f(i(), () => n((n().panActivationKeyPressed = !1), !0)), type: 'keyup' }),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({
				trigger: f(a(), () => n((n().zoomActivationKeyPressed = !0), !0)),
				type: 'keydown',
			}),
		),
		Ie(
			Be,
			(x, w) => (fe == null ? void 0 : fe(x, w)),
			() => ({ trigger: f(a(), () => n((n().zoomActivationKeyPressed = !1), !0)), type: 'keyup' }),
		),
		ce();
}
var Oh = Se('<path fill="none" class="svelte-flow__connection-path"></path>'),
	Dh = Se('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Hh(e, t) {
	le(t, !0);
	const n = b(() => {
		if (!t.store.connection.inProgress) return '';
		const i = {
			sourceX: t.store.connection.from.x,
			sourceY: t.store.connection.from.y,
			sourcePosition: t.store.connection.fromPosition,
			targetX: t.store.connection.to.x,
			targetY: t.store.connection.to.y,
			targetPosition: t.store.connection.toPosition,
		};
		switch (t.type) {
			case ft.Bezier: {
				const [a] = xs(i);
				return a;
			}
			case ft.Straight: {
				const [a] = bs(i);
				return a;
			}
			case ft.Step:
			case ft.SmoothStep: {
				const [a] = xo({ ...i, borderRadius: t.type === ft.Step ? 0 : void 0 });
				return a;
			}
		}
	});
	var r = Re(),
		o = me(r);
	var s = (i) => {
		var a = Dh(),
			l = ee(a),
			d = ee(l);
		var u = (f) => {
				var g = Re(),
					m = me(g);
				oo(
					m,
					() => t.LineComponent,
					(x, w) => {
						w(x, {});
					},
				),
					q(f, g);
			},
			h = (f) => {
				var g = Oh();
				ye(() => {
					be(g, 'd', c(n)), qe(g, t.style);
				}),
					q(f, g);
			};
		ve(d, (f) => {
			t.LineComponent ? f(u) : f(h, -1);
		});
		J(l),
			J(a),
			ye(
				(f) => {
					be(a, 'width', t.store.width),
						be(a, 'height', t.store.height),
						qe(a, t.containerStyle),
						vt(l, 0, f);
				},
				[() => no(['svelte-flow__connection', _d(t.store.connection.isValid)])],
			),
			q(i, a);
	};
	ve(o, (i) => {
		t.store.connection.inProgress && i(s);
	});
	q(e, r), ce();
}
var Rh = new Set(['$$slots', '$$events', '$$legacy', 'position', 'style', 'class', 'children']),
	Lh = se('<div><!></div>');
function Ls(e, t) {
	le(t, !0);
	const n = U(t, 'position', 3, 'top-right'),
		r = Pt(t, Rh),
		o = b(() => `${n()}`.split('-'));
	var s = Lh();
	yt(s, (a) => ({ class: a, style: t.style, ...r }), [
		() => ['svelte-flow__panel', t.class, ...c(o)],
	]);
	var i = ee(s);
	Ye(i, () => t.children ?? Gt), J(s), q(e, s), ce();
}
var Vh = se(
	'<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>',
);
function Kh(e, t) {
	le(t, !0);
	const n = U(t, 'position', 3, 'bottom-right');
	var r = Re(),
		o = me(r);
	var s = (i) => {
		Ls(i, {
			get position() {
				return n();
			},
			class: 'svelte-flow__attribution',
			'data-message':
				'Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us',
			children: (a, l) => {
				var d = Vh();
				q(a, d);
			},
			$$slots: { default: !0 },
		});
	};
	ve(o, (i) => {
		var a;
		((a = t.proOptions) != null && a.hideAttribution) || i(s);
	});
	q(e, r), ce();
}
var Bh = se('<div><!></div>');
function Fh(e, t) {
	le(t, !0);
	const n = U(t, 'domNode', 15),
		r = U(t, 'clientWidth', 15),
		o = U(t, 'clientHeight', 15),
		s = b(() => t.rest.class),
		i = b(() =>
			Na(t.rest, [
				'id',
				'class',
				'nodeTypes',
				'edgeTypes',
				'colorMode',
				'isValidConnection',
				'onmove',
				'onmovestart',
				'onmoveend',
				'onflowerror',
				'ondelete',
				'onbeforedelete',
				'onbeforeconnect',
				'onconnect',
				'onconnectstart',
				'onconnectend',
				'onbeforereconnect',
				'onreconnect',
				'onreconnectstart',
				'onreconnectend',
				'onclickconnectstart',
				'onclickconnectend',
				'oninit',
				'onselectionchange',
				'onselectiondragstart',
				'onselectiondrag',
				'onselectiondragstop',
				'onselectionstart',
				'onselectionend',
				'clickConnect',
				'fitView',
				'fitViewOptions',
				'nodeOrigin',
				'nodeDragThreshold',
				'connectionDragThreshold',
				'minZoom',
				'maxZoom',
				'initialViewport',
				'connectionRadius',
				'connectionMode',
				'selectionMode',
				'selectNodesOnDrag',
				'snapGrid',
				'defaultMarkerColor',
				'translateExtent',
				'nodeExtent',
				'onlyRenderVisibleElements',
				'autoPanOnConnect',
				'autoPanOnNodeDrag',
				'colorModeSSR',
				'defaultEdgeOptions',
				'elevateNodesOnSelect',
				'elevateEdgesOnSelect',
				'nodesDraggable',
				'autoPanOnNodeFocus',
				'nodesConnectable',
				'elementsSelectable',
				'nodesFocusable',
				'edgesFocusable',
				'disableKeyboardA11y',
				'noDragClass',
				'noPanClass',
				'noWheelClass',
				'ariaLabelConfig',
				'autoPanSpeed',
				'panOnScrollSpeed',
				'zIndexMode',
				'autoPanOnSelection',
			]),
		);
	function a(u) {
		u.currentTarget.scrollTo({ top: 0, left: 0, behavior: 'auto' }),
			t.rest.onscroll && t.rest.onscroll(u);
	}
	var l = Bh();
	yt(
		l,
		(u) => ({
			class: ['svelte-flow', 'svelte-flow__container', t.colorMode, c(s)],
			'data-testid': 'svelte-flow__wrapper',
			role: 'application',
			onscroll: a,
			...c(i),
			[sr]: u,
		}),
		[() => ({ width: nt(t.width), height: nt(t.height) })],
		void 0,
		void 0,
		'svelte-mkap6j',
	);
	var d = ee(l);
	Ye(d, () => t.children ?? Gt),
		J(l),
		En(
			l,
			(u) => n(u),
			() => n(),
		),
		Ro(l, 'clientHeight', o),
		Ro(l, 'clientWidth', r),
		q(e, l),
		ce();
}
var Yh = new Set([
		'$$slots',
		'$$events',
		'$$legacy',
		'width',
		'height',
		'proOptions',
		'selectionKey',
		'deleteKey',
		'panActivationKey',
		'multiSelectionKey',
		'zoomActivationKey',
		'paneClickDistance',
		'nodeClickDistance',
		'onmovestart',
		'onmoveend',
		'onmove',
		'oninit',
		'onnodeclick',
		'onnodecontextmenu',
		'onnodedrag',
		'onnodedragstart',
		'onnodedragstop',
		'onnodepointerenter',
		'onnodepointermove',
		'onnodepointerleave',
		'onselectionclick',
		'onselectioncontextmenu',
		'onselectionstart',
		'onselectionend',
		'onedgeclick',
		'onedgecontextmenu',
		'onedgepointerenter',
		'onedgepointerleave',
		'onpaneclick',
		'onpanecontextmenu',
		'panOnScrollMode',
		'preventScrolling',
		'zoomOnScroll',
		'zoomOnDoubleClick',
		'zoomOnPinch',
		'panOnScroll',
		'panOnScrollSpeed',
		'panOnDrag',
		'selectionOnDrag',
		'autoPanOnSelection',
		'connectionLineComponent',
		'connectionLineStyle',
		'connectionLineContainerStyle',
		'connectionLineType',
		'attributionPosition',
		'children',
		'nodes',
		'edges',
		'viewport',
	]),
	Xh = se(
		'<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>',
		1,
	),
	Wh = se('<!> <!>', 1),
	Zh = se('<!> <!> <!> <!> <!>', 1);
function qh(e, t) {
	le(t, !0);
	let n = U(t, 'paneClickDistance', 3, 1),
		r = U(t, 'nodeClickDistance', 3, 1),
		o = U(t, 'panOnScrollMode', 19, () => Lt.Free),
		s = U(t, 'preventScrolling', 3, !0),
		i = U(t, 'zoomOnScroll', 3, !0),
		a = U(t, 'zoomOnDoubleClick', 3, !0),
		l = U(t, 'zoomOnPinch', 3, !0),
		d = U(t, 'panOnScroll', 3, !1),
		u = U(t, 'panOnScrollSpeed', 3, 0.5),
		h = U(t, 'panOnDrag', 3, !0),
		f = U(t, 'selectionOnDrag', 3, !1),
		g = U(t, 'autoPanOnSelection', 3, !0),
		m = U(t, 'connectionLineType', 19, () => ft.Bezier),
		x = U(t, 'nodes', 31, () => Do([])),
		w = U(t, 'edges', 31, () => Do([])),
		S = U(t, 'viewport', 15, void 0),
		O = Pt(t, Yh),
		P = rh({
			props: O,
			width: t.width,
			height: t.height,
			get nodes() {
				return x();
			},
			set nodes(H) {
				x(H);
			},
			get edges() {
				return w();
			},
			set edges(H) {
				w(H);
			},
			get viewport() {
				return S();
			},
			set viewport(H) {
				S(H);
			},
		});
	const A = eo(jr);
	A && A.setStore && A.setStore(P),
		Ti(jr, {
			provider: !1,
			getStore() {
				return P;
			},
		}),
		at(() => {
			var V;
			const H = { nodes: P.selectedNodes, edges: P.selectedEdges };
			(V = gt(() => t.onselectionchange)) == null || V(H);
			for (const F of P.selectionChangeHandlers.values()) F(H);
		}),
		ir(() => {
			P.reset();
		}),
		Fh(e, {
			get colorMode() {
				return P.colorMode;
			},
			get width() {
				return t.width;
			},
			get height() {
				return t.height;
			},
			get rest() {
				return O;
			},
			get domNode() {
				return P.domNode;
			},
			set domNode(H) {
				P.domNode = H;
			},
			get clientWidth() {
				return P.width;
			},
			set clientWidth(H) {
				P.width = H;
			},
			get clientHeight() {
				return P.height;
			},
			set clientHeight(H) {
				P.height = H;
			},
			children: (H, V) => {
				var F = Zh(),
					Q = me(F);
				Ih(Q, {
					get selectionKey() {
						return t.selectionKey;
					},
					get deleteKey() {
						return t.deleteKey;
					},
					get panActivationKey() {
						return t.panActivationKey;
					},
					get multiSelectionKey() {
						return t.multiSelectionKey;
					},
					get zoomActivationKey() {
						return t.zoomActivationKey;
					},
					get store() {
						return P;
					},
					set store(N) {
						P = N;
					},
				});
				var Y = te(Q, 2);
				ih(Y, {
					get panOnScrollMode() {
						return o();
					},
					get preventScrolling() {
						return s();
					},
					get zoomOnScroll() {
						return i();
					},
					get zoomOnDoubleClick() {
						return a();
					},
					get zoomOnPinch() {
						return l();
					},
					get panOnScroll() {
						return d();
					},
					get panOnScrollSpeed() {
						return u();
					},
					get panOnDrag() {
						return h();
					},
					get paneClickDistance() {
						return n();
					},
					get selectionOnDrag() {
						return f();
					},
					get onmovestart() {
						return t.onmovestart;
					},
					get onmove() {
						return t.onmove;
					},
					get onmoveend() {
						return t.onmoveend;
					},
					get oninit() {
						return t.oninit;
					},
					get store() {
						return P;
					},
					set store(N) {
						P = N;
					},
					children: (N, v) => {
						ah(N, {
							get onpaneclick() {
								return t.onpaneclick;
							},
							get onpanecontextmenu() {
								return t.onpanecontextmenu;
							},
							get onselectionstart() {
								return t.onselectionstart;
							},
							get onselectionend() {
								return t.onselectionend;
							},
							get panOnDrag() {
								return h();
							},
							get paneClickDistance() {
								return n();
							},
							get selectionOnDrag() {
								return f();
							},
							get autoPanOnSelection() {
								return g();
							},
							get store() {
								return P;
							},
							set store(E) {
								P = E;
							},
							children: (E, y) => {
								var k = Wh(),
									I = me(k);
								ch(I, {
									get store() {
										return P;
									},
									set store(T) {
										P = T;
									},
									children: (T, K) => {
										var G = Xh(),
											Z = te(me(G), 2);
										Mh(Z, {
											get onedgeclick() {
												return t.onedgeclick;
											},
											get onedgecontextmenu() {
												return t.onedgecontextmenu;
											},
											get onedgepointerenter() {
												return t.onedgepointerenter;
											},
											get onedgepointerleave() {
												return t.onedgepointerleave;
											},
											get store() {
												return P;
											},
											set store(L) {
												P = L;
											},
										});
										var X = te(Z, 4);
										Hh(X, {
											get type() {
												return m();
											},
											get LineComponent() {
												return t.connectionLineComponent;
											},
											get containerStyle() {
												return t.connectionLineContainerStyle;
											},
											get style() {
												return t.connectionLineStyle;
											},
											get store() {
												return P;
											},
											set store(L) {
												P = L;
											},
										});
										var j = te(X, 2);
										mh(j, {
											get nodeClickDistance() {
												return r();
											},
											get onnodeclick() {
												return t.onnodeclick;
											},
											get onnodecontextmenu() {
												return t.onnodecontextmenu;
											},
											get onnodepointerenter() {
												return t.onnodepointerenter;
											},
											get onnodepointermove() {
												return t.onnodepointermove;
											},
											get onnodepointerleave() {
												return t.onnodepointerleave;
											},
											get onnodedrag() {
												return t.onnodedrag;
											},
											get onnodedragstart() {
												return t.onnodedragstart;
											},
											get onnodedragstop() {
												return t.onnodedragstop;
											},
											get store() {
												return P;
											},
											set store(L) {
												P = L;
											},
										});
										var R = te(j, 2);
										Ah(R, {
											get onselectionclick() {
												return t.onselectionclick;
											},
											get onselectioncontextmenu() {
												return t.onselectioncontextmenu;
											},
											get onnodedrag() {
												return t.onnodedrag;
											},
											get onnodedragstart() {
												return t.onnodedragstart;
											},
											get onnodedragstop() {
												return t.onnodedragstop;
											},
											get store() {
												return P;
											},
											set store(L) {
												P = L;
											},
										}),
											$e(2),
											q(T, G);
									},
									$$slots: { default: !0 },
								});
								var z = te(I, 2);
								{
									const T = b(() => !!(P.selectionRect && P.selectionRectMode === 'user')),
										K = b(() => {
											var j;
											return (j = P.selectionRect) == null ? void 0 : j.width;
										}),
										G = b(() => {
											var j;
											return (j = P.selectionRect) == null ? void 0 : j.height;
										}),
										Z = b(() => {
											var j;
											return (j = P.selectionRect) == null ? void 0 : j.x;
										}),
										X = b(() => {
											var j;
											return (j = P.selectionRect) == null ? void 0 : j.y;
										});
									Rs(z, {
										get isVisible() {
											return c(T);
										},
										get width() {
											return c(K);
										},
										get height() {
											return c(G);
										},
										get x() {
											return c(Z);
										},
										get y() {
											return c(X);
										},
									});
								}
								q(E, k);
							},
							$$slots: { default: !0 },
						});
					},
					$$slots: { default: !0 },
				});
				var $ = te(Y, 2);
				Kh($, {
					get proOptions() {
						return t.proOptions;
					},
					get position() {
						return t.attributionPosition;
					},
				});
				var M = te($, 2);
				fh(M, {
					get store() {
						return P;
					},
				});
				var p = te(M, 2);
				Ye(p, () => t.children ?? Gt), q(H, F);
			},
			$$slots: { default: !0 },
		}),
		ce();
}
var Gh = new Set([
		'$$slots',
		'$$events',
		'$$legacy',
		'class',
		'bgColor',
		'bgColorHover',
		'color',
		'colorHover',
		'borderColor',
		'onclick',
		'children',
	]),
	Uh = se('<button><!></button>');
function Ln(e, t) {
	const n = Pt(t, Gh);
	var r = Uh();
	yt(r, () => ({
		type: 'button',
		onclick: t.onclick,
		class: ['svelte-flow__controls-button', t.class],
		...n,
		[sr]: {
			'--xy-controls-button-background-color-props': t.bgColor,
			'--xy-controls-button-background-color-hover-props': t.bgColorHover,
			'--xy-controls-button-color-props': t.color,
			'--xy-controls-button-color-hover-props': t.colorHover,
			'--xy-controls-button-border-color-props': t.borderColor,
		},
	}));
	var o = ee(r);
	Ye(o, () => t.children ?? Gt), J(r), q(e, r);
}
var Qh = Se(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>',
);
function Jh(e) {
	var t = Qh();
	q(e, t);
}
var jh = Se(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>',
);
function $h(e) {
	var t = jh();
	q(e, t);
}
var eg = Se(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>',
);
function tg(e) {
	var t = eg();
	q(e, t);
}
var ng = Se(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>',
);
function rg(e) {
	var t = ng();
	q(e, t);
}
var og = Se(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>',
);
function ig(e) {
	var t = og();
	q(e, t);
}
var sg = new Set([
		'$$slots',
		'$$events',
		'$$legacy',
		'position',
		'orientation',
		'showZoom',
		'showFitView',
		'showLock',
		'style',
		'class',
		'buttonBgColor',
		'buttonBgColorHover',
		'buttonColor',
		'buttonColorHover',
		'buttonBorderColor',
		'fitViewOptions',
		'children',
		'before',
		'after',
	]),
	ag = se('<!> <!>', 1),
	lg = se('<!> <!> <!> <!> <!> <!>', 1);
function cg(e, t) {
	le(t, !0);
	const n = U(t, 'position', 3, 'bottom-left'),
		r = U(t, 'orientation', 3, 'vertical'),
		o = U(t, 'showZoom', 3, !0),
		s = U(t, 'showFitView', 3, !0),
		i = U(t, 'showLock', 3, !0),
		a = Pt(t, sg),
		l = b(Qt);
	const d = b(() => ({
		bgColor: t.buttonBgColor,
		bgColorHover: t.buttonBgColorHover,
		color: t.buttonColor,
		colorHover: t.buttonColorHover,
		borderColor: t.buttonBorderColor,
	}));
	const u = b(() => c(l).nodesDraggable || c(l).nodesConnectable || c(l).elementsSelectable),
		h = b(() => c(l).viewport.zoom <= c(l).minZoom),
		f = b(() => c(l).viewport.zoom >= c(l).maxZoom),
		g = b(() => c(l).ariaLabelConfig),
		m = b(() => (r() === 'horizontal' ? 'horizontal' : 'vertical'));
	const x = () => {
			c(l).zoomIn();
		},
		w = () => {
			c(l).zoomOut();
		},
		S = () => {
			c(l).fitView(t.fitViewOptions);
		},
		O = () => {
			const P = !c(u);
			(c(l).nodesDraggable = P), (c(l).nodesConnectable = P), (c(l).elementsSelectable = P);
		};
	{
		const P = b(() => ['svelte-flow__controls', c(m), t.class]);
		Ls(
			e,
			It(
				{
					get class() {
						return c(P);
					},
					get position() {
						return n();
					},
					'data-testid': 'svelte-flow__controls',
					get 'aria-label'() {
						return c(g)['controls.ariaLabel'];
					},
					get style() {
						return t.style;
					},
				},
				() => a,
				{
					children: (A, H) => {
						var V = lg(),
							F = me(V);
						var Q = (z) => {
							var T = Re(),
								K = me(T);
							Ye(K, () => t.before), q(z, T);
						};
						ve(F, (z) => {
							t.before && z(Q);
						});
						var Y = te(F, 2);
						var $ = (z) => {
							var T = ag(),
								K = me(T);
							Ln(
								K,
								It(
									{
										onclick: x,
										class: 'svelte-flow__controls-zoomin',
										get title() {
											return c(g)['controls.zoomIn.ariaLabel'];
										},
										get 'aria-label'() {
											return c(g)['controls.zoomIn.ariaLabel'];
										},
										get disabled() {
											return c(f);
										},
									},
									() => c(d),
									{
										children: (Z, X) => {
											Jh(Z);
										},
										$$slots: { default: !0 },
									},
								),
							);
							var G = te(K, 2);
							Ln(
								G,
								It(
									{
										onclick: w,
										class: 'svelte-flow__controls-zoomout',
										get title() {
											return c(g)['controls.zoomOut.ariaLabel'];
										},
										get 'aria-label'() {
											return c(g)['controls.zoomOut.ariaLabel'];
										},
										get disabled() {
											return c(h);
										},
									},
									() => c(d),
									{
										children: (Z, X) => {
											$h(Z);
										},
										$$slots: { default: !0 },
									},
								),
							),
								q(z, T);
						};
						ve(Y, (z) => {
							o() && z($);
						});
						var M = te(Y, 2);
						var p = (z) => {
							Ln(
								z,
								It(
									{
										class: 'svelte-flow__controls-fitview',
										onclick: S,
										get title() {
											return c(g)['controls.fitView.ariaLabel'];
										},
										get 'aria-label'() {
											return c(g)['controls.fitView.ariaLabel'];
										},
									},
									() => c(d),
									{
										children: (T, K) => {
											tg(T);
										},
										$$slots: { default: !0 },
									},
								),
							);
						};
						ve(M, (z) => {
							s() && z(p);
						});
						var N = te(M, 2);
						var v = (z) => {
							Ln(
								z,
								It(
									{
										class: 'svelte-flow__controls-interactive',
										onclick: O,
										get title() {
											return c(g)['controls.interactive.ariaLabel'];
										},
										get 'aria-label'() {
											return c(g)['controls.interactive.ariaLabel'];
										},
									},
									() => c(d),
									{
										children: (T, K) => {
											var G = Re(),
												Z = me(G);
											var X = (R) => {
													ig(R);
												},
												j = (R) => {
													rg(R);
												};
											ve(Z, (R) => {
												c(u) ? R(X) : R(j, -1);
											});
											q(T, G);
										},
										$$slots: { default: !0 },
									},
								),
							);
						};
						ve(N, (z) => {
							i() && z(v);
						});
						var E = te(N, 2);
						var y = (z) => {
							var T = Re(),
								K = me(T);
							Ye(K, () => t.children), q(z, T);
						};
						ve(E, (z) => {
							t.children && z(y);
						});
						var k = te(E, 2);
						var I = (z) => {
							var T = Re(),
								K = me(T);
							Ye(K, () => t.after), q(z, T);
						};
						ve(k, (z) => {
							t.after && z(I);
						});
						q(A, V);
					},
					$$slots: { default: !0 },
				},
			),
		);
	}
	ce();
}
var ug = Se(
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path></svg>',
	),
	dg = se('<div class="mt-3 text-sm text-white/50"> </div>'),
	fg = se(
		'<div class="glass-node w-64 p-5 rounded-2xl text-left shadow-2xl transition-all hover:border-accent2/50 group"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-xl bg-accent2/20 flex items-center justify-center text-accent2 shadow-[0_0_15px_rgba(var(--accent2),0.2)] group-hover:shadow-[0_0_25px_rgba(var(--accent2),0.4)] transition-shadow"><!></div> <div><div class="text-xs font-bold tracking-widest uppercase text-accent2/80"> </div> <div class="text-base font-bold text-white mt-0.5"> </div></div></div> <!> <!></div>',
	);
function hg(e, t) {
	le(t, !0);
	var n = fg(),
		r = ee(n),
		o = ee(r),
		s = ee(o);
	var i = (w) => {
			var S = Re(),
				O = me(S);
			so(O, () => t.data.icon), q(w, S);
		},
		a = (w) => {
			var S = ug();
			q(w, S);
		};
	ve(s, (w) => {
		t.data.icon ? w(i) : w(a, -1);
	});
	J(o);
	var l = te(o, 2),
		d = ee(l),
		u = ee(d, !0);
	J(d);
	var h = te(d, 2),
		f = ee(h, !0);
	J(h), J(l), J(r);
	var g = te(r, 2);
	var m = (w) => {
		var S = dg(),
			O = ee(S, !0);
		J(S), ye(() => Ce(O, t.data.description)), q(w, S);
	};
	ve(g, (w) => {
		t.data.description && w(m);
	});
	var x = te(g, 2);
	Nt(x, {
		type: 'source',
		get position() {
			return ne.Right;
		},
		class: '!w-3 !h-3 !bg-accent2 !border-2 !border-background',
	}),
		J(n),
		ye(() => {
			Ce(u, t.data.typeLabel || 'Trigger'), Ce(f, t.data.label || 'Unknown Trigger');
		}),
		q(e, n),
		ce();
}
var gg = Se(
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path><path d="M4 6v6a8 3 0 0 0 16 0v-6"></path><path d="M4 12v6a8 3 0 0 0 16 0v-6"></path></svg>',
	),
	vg = se('<div class="mt-3 text-sm text-white/50"> </div>'),
	yg = se(
		'<div class="glass-node w-64 p-5 rounded-2xl text-left shadow-2xl transition-all hover:border-accent1/50 group"><!> <div class="flex items-center gap-4"><div class="w-12 h-12 rounded-xl bg-accent1/20 flex items-center justify-center text-accent1 shadow-[0_0_15px_rgba(var(--accent1),0.2)] group-hover:shadow-[0_0_25px_rgba(var(--accent1),0.4)] transition-shadow"><!></div> <div><div class="text-xs font-bold tracking-widest uppercase text-accent1/80"> </div> <div class="text-base font-bold text-white mt-0.5"> </div></div></div> <!> <!></div>',
	);
function mg(e, t) {
	le(t, !0);
	var n = yg(),
		r = ee(n);
	Nt(r, {
		type: 'target',
		get position() {
			return ne.Left;
		},
		class: '!w-3 !h-3 !bg-accent1 !border-2 !border-background',
	});
	var o = te(r, 2),
		s = ee(o),
		i = ee(s);
	var a = (S) => {
			var O = Re(),
				P = me(O);
			so(P, () => t.data.icon), q(S, O);
		},
		l = (S) => {
			var O = gg();
			q(S, O);
		};
	ve(i, (S) => {
		t.data.icon ? S(a) : S(l, -1);
	});
	J(s);
	var d = te(s, 2),
		u = ee(d),
		h = ee(u, !0);
	J(u);
	var f = te(u, 2),
		g = ee(f, !0);
	J(f), J(d), J(o);
	var m = te(o, 2);
	var x = (S) => {
		var O = vg(),
			P = ee(O, !0);
		J(O), ye(() => Ce(P, t.data.description)), q(S, O);
	};
	ve(m, (S) => {
		t.data.description && S(x);
	});
	var w = te(m, 2);
	Nt(w, {
		type: 'source',
		get position() {
			return ne.Right;
		},
		class: '!w-3 !h-3 !bg-accent1 !border-2 !border-background',
	}),
		J(n),
		ye(() => {
			Ce(h, t.data.typeLabel || 'Action'), Ce(g, t.data.label || 'Unknown Action');
		}),
		q(e, n),
		ce();
}
var wg = se(
		'<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> Working...',
		1,
	),
	xg = se(
		'<div class="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_currentColor]"></div> Active',
		1,
	),
	pg = Se(
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg> Deploy',
		1,
	),
	bg = se(
		'<div class="flex items-center justify-center h-full w-full"><div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>',
	),
	_g = se(
		'<div class="relative bg-black/80 border border-white/10 rounded-xl p-4 overflow-hidden group"><pre class="text-xs text-accent2 font-mono overflow-x-auto whitespace-pre-wrap"> </pre></div>',
	),
	kg = se(
		'<div class="flex items-center justify-center p-8 border border-dashed border-white/10 rounded-xl"><p class="text-sm text-white/30 italic">No output yet. Run the node to test.</p></div>',
	),
	Sg = se(
		'<div class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div> Running...',
		1,
	),
	Eg = Se(
		'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg> Test Node',
		1,
	),
	Cg = se(
		'<div class="p-6 border-b border-white/10 flex justify-between items-center bg-white/5"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"></div> <div><h3 class="text-lg font-bold tracking-tight"> </h3> <p class="text-xs text-white/50 uppercase tracking-widest"> </p></div></div> <button aria-label="Close Playground" title="Close Playground" class="p-2 hover:bg-white/10 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg></button></div> <div class="flex-1 overflow-y-auto p-6 space-y-8"><div class="space-y-4"><h4 class="text-sm font-bold tracking-widest uppercase text-white/40">Configuration</h4> <div class="space-y-3"><label class="block"><span class="block text-sm text-white/70 mb-1">Node Name</span> <input type="text" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"/></label></div></div> <div class="space-y-4"><h4 class="text-sm font-bold tracking-widest uppercase text-white/40">Execution Result</h4> <!></div></div> <div class="p-6 border-t border-white/10 bg-black/40 mt-auto"><button class="w-full group relative flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"><!></button></div>',
		1,
	),
	Mg = se(
		'<div role="presentation"><div class="bg-aurora absolute inset-0 opacity-50 transition-all duration-300 ease-out pointer-events-none z-0"></div> <div class="absolute top-0 right-0 w-[60%] h-[60%] bg-accent1/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div> <div><button class="px-6 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors disabled:opacity-50"> </button> <button><!></button></div> <div><!></div> <div class="absolute top-0 right-0 h-full w-[35%] bg-black/60 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-500 ease-out z-20 flex flex-col"><!></div></div>',
	);
function Ng(e, t) {
	le(t, !0);
	const n = U(t, 'class', 3, '');
	const r = { trigger: hg, action: mg },
		o = [
			{
				id: '1',
				type: 'trigger',
				position: { x: 100, y: 200 },
				data: {
					typeLabel: 'Webhook',
					label: 'Catch Hook',
					description: 'Listens for incoming HTTP POST requests.',
					icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v14" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 7c-2.333 -3.333 -4.667 -5 -7 -5" /><path d="M12 7c2.333 -3.333 4.667 -5 7 -5" /></svg>',
				},
			},
			{
				id: '2',
				type: 'action',
				position: { x: 500, y: 150 },
				data: {
					typeLabel: 'Google Docs',
					label: 'Create Document',
					description: 'Generates a new document from a template.',
					icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg>',
				},
			},
			{
				id: '3',
				type: 'action',
				position: { x: 500, y: 300 },
				data: {
					typeLabel: 'Slack',
					label: 'Send Message',
					description: 'Posts a message to a specific channel.',
					icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M8 12l8 0" /><path d="M12 8l0 8" /></svg>',
				},
			},
		],
		s = [
			{
				id: 'e1-2',
				source: '1',
				target: '2',
				animated: !0,
				style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;',
			},
			{
				id: 'e1-3',
				source: '1',
				target: '3',
				animated: !0,
				style: 'stroke: oklch(75% 0.2 230); stroke-width: 2px;',
			},
		];
	const i = ae([...o]),
		a = ae([...s]),
		l = ae(50),
		d = ae(50),
		u = ae(null),
		h = ae(!1),
		f = ae(null),
		g = ae(!1);
	const m = 'preview-workflow-1';
	const x = ae(!1),
		w = ae(!1),
		S = ae(!1),
		O = ae(!0);
	Pa(async () => {
		var R;
		try {
			const L = await zn(`/workflows/${m}`);
			L && Array.isArray(L.nodes) && L.nodes.length > 0
				? D(
						i,
						L.nodes.map((W) => ({
							...W,
							position: { x: W.positionX, y: W.positionY },
							data: typeof W.data == 'string' ? JSON.parse(W.data) : W.data,
						})),
					)
				: D(i, [...o]),
				L && Array.isArray(L.edges) && L.edges.length > 0
					? D(
							a,
							L.edges.map((W) => ({
								id: W.id,
								source: W.sourceNodeId,
								target: W.targetNodeId,
								sourceHandle: W.sourceHandle,
								targetHandle: W.targetHandle,
								animated: !0,
								style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;',
							})),
						)
					: D(a, [...s]),
				L && L.isActive !== void 0 && D(S, L.isActive, !0);
		} catch (L) {
			((R = L.message) != null && R.includes('Not Found')) ||
				console.warn('Could not load workflow data:', L),
				D(i, [...o]),
				D(a, [...s]);
		} finally {
			D(O, !1);
		}
	});
	function P(R) {
		const W = R.currentTarget.getBoundingClientRect();
		D(l, ((R.clientX - W.left) / W.width) * 100), D(d, ((R.clientY - W.top) / W.height) * 100);
	}
	function A(R) {
		const L = R.detail ? R.detail.node : R.node;
		D(u, L, !0), D(h, !0), D(f, null);
	}
	function H() {
		D(h, !1), D(u, null);
	}
	async function V() {
		D(x, !0);
		try {
			await zn(`/workflows/${m}/graph`, {
				method: 'PUT',
				body: JSON.stringify({ nodes: c(i), edges: c(a) }),
			}),
				console.log('Workflow saved successfully');
		} catch (R) {
			console.error('Failed to save workflow:', R);
		} finally {
			setTimeout(() => D(x, !1), 500);
		}
	}
	async function F() {
		D(w, !0);
		try {
			const R = !c(S),
				L = await zn(`/workflows/${m}/deploy`, {
					method: 'POST',
					body: JSON.stringify({ isActive: R }),
				});
			D(S, L.isActive, !0);
		} catch (R) {
			console.error('Failed to deploy workflow:', R);
		} finally {
			setTimeout(() => D(w, !1), 500);
		}
	}
	async function Q() {
		if (c(u)) {
			D(g, !0), D(f, null);
			try {
				const R = await zn('/engine/test-node', {
					method: 'POST',
					body: JSON.stringify({
						nodeId: c(u).id,
						type: c(u).data.typeLabel || c(u).type,
						data: c(u).data,
					}),
				});
				D(f, JSON.stringify(R, null, 2), !0);
			} catch (R) {
				D(f, JSON.stringify({ error: R.message }, null, 2), !0);
			} finally {
				D(g, !1);
			}
		}
	}
	var Y = Mg(),
		$ = ee(Y),
		M = te($, 4),
		p = ee(M),
		N = ee(p, !0);
	J(p);
	var v = te(p, 2),
		E = ee(v);
	var y = (R) => {
			var L = wg();
			$e(), q(R, L);
		},
		k = (R) => {
			var L = xg();
			$e(), q(R, L);
		},
		I = (R) => {
			var L = pg();
			$e(), q(R, L);
		};
	ve(E, (R) => {
		c(w) ? R(y) : c(S) ? R(k, 1) : R(I, -1);
	});
	J(v), J(M);
	var z = te(M, 2),
		T = ee(z);
	var K = (R) => {
			qh(R, {
				get nodes() {
					return c(i);
				},
				get edges() {
					return c(a);
				},
				get nodeTypes() {
					return r;
				},
				fitView: !0,
				class: 'organic-tech-flow',
				colorMode: 'dark',
				onnodeclick: A,
				children: (L, W) => {
					cg(L, {
						class: 'bg-black/40 backdrop-blur-md border border-white/10 rounded-xl fill-white',
						buttonClass: 'border-white/10 hover:bg-white/10 fill-white',
					});
				},
				$$slots: { default: !0 },
			});
		},
		G = (R) => {
			var L = bg();
			q(R, L);
		};
	ve(T, (R) => {
		c(O) ? R(G, -1) : R(K);
	});
	J(z);
	var Z = te(z, 2),
		X = ee(Z);
	var j = (R) => {
		var L = Cg(),
			W = me(L),
			ie = ee(W),
			ge = ee(ie);
		so(ge, () => c(u).data.icon, !0), J(ge);
		var re = te(ge, 2),
			we = ee(re),
			ue = ee(we, !0);
		J(we);
		var pe = te(we, 2),
			ze = ee(pe, !0);
		J(pe), J(re), J(ie);
		var Te = te(ie, 2);
		J(W);
		var Ne = te(W, 2),
			oe = ee(Ne),
			he = te(ee(oe), 2),
			_e = ee(he),
			de = te(ee(_e), 2);
		za(de), J(_e), J(he), J(oe);
		var ke = te(oe, 2),
			De = te(ee(ke), 2);
		var He = (xe) => {
				var Pe = _g(),
					ut = ee(Pe),
					pt = ee(ut, !0);
				J(ut), J(Pe), ye(() => Ce(pt, c(f))), q(xe, Pe);
			},
			Me = (xe) => {
				var Pe = kg();
				q(xe, Pe);
			};
		ve(De, (xe) => {
			c(f) ? xe(He) : xe(Me, -1);
		});
		J(ke), J(Ne);
		var ct = te(Ne, 2),
			Ue = ee(ct),
			mt = ee(Ue);
		var wt = (xe) => {
				var Pe = Sg();
				$e(), q(xe, Pe);
			},
			xt = (xe) => {
				var Pe = Eg();
				$e(), q(xe, Pe);
			};
		ve(mt, (xe) => {
			c(g) ? xe(wt) : xe(xt, -1);
		});
		J(Ue),
			J(ct),
			ye(() => {
				Ce(ue, c(u).data.label), Ce(ze, c(u).data.typeLabel), (Ue.disabled = c(g));
			}),
			Fe('click', Te, H),
			Ta(
				de,
				() => c(u).data.label,
				(xe) => (c(u).data.label = xe),
			),
			Fe('click', Ue, Q),
			q(R, L);
	};
	ve(X, (R) => {
		c(u) && R(j);
	});
	J(Z),
		J(Y),
		ye(() => {
			vt(
				Y,
				1,
				`relative w-full h-full overflow-hidden rounded-[40px] bg-background border border-white/10 ${n() ?? ''}`,
			),
				qe($, `--x: ${c(l) ?? ''}%; --y: ${c(d) ?? ''}%;`),
				vt(
					M,
					1,
					`absolute top-6 right-6 z-20 flex items-center gap-4 transition-all duration-500 ${c(h) ? 'mr-[35%]' : ''}`,
				),
				(p.disabled = c(x)),
				Ce(N, c(x) ? 'Saving...' : 'Save Workflow'),
				(v.disabled = c(w)),
				vt(
					v,
					1,
					`flex items-center gap-2 px-6 py-2 ${c(S) ? 'bg-primary/20 text-primary border-primary/50' : 'bg-white text-black border-transparent'} border rounded-full font-bold text-sm hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(var(--primary),0.2)]`,
				),
				vt(
					z,
					1,
					`absolute inset-0 z-10 transition-all duration-500 ${c(h) ? 'w-[65%]' : 'w-full'}`,
				),
				qe(Z, `transform: translateX(${c(h) ? '0%' : '100%'})`);
		}),
		Fe('mousemove', Y, P),
		Fe('click', p, V),
		Fe('click', v, F),
		q(e, Y),
		ce();
}
ro(['mousemove', 'click']);
var Pg = se(
	'<div class="max-w-[1400px] mx-auto px-6 md:px-12 py-12"><header class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"><div class="space-y-2"><h1 class="text-5xl md:text-6xl font-bold tracking-tight text-white leading-none svelte-x1i5gj">Dashboard</h1> <p class="text-white/40 text-xl font-light">Your automation command center.</p></div> <div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-3"><div class="w-2 h-2 rounded-full bg-accent2 animate-pulse shadow-[0_0_8px_rgba(var(--accent2),0.5)]"></div> <span class="text-sm font-bold tracking-wider uppercase text-white/60">System Operational</span></div></header> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-8 min-h-[600px] shadow-2xl"><!></div> <div class="lg:col-span-4 space-y-8"><div class="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-xl"><h3 class="text-xl font-bold mb-6 text-white/80 svelte-x1i5gj">Recent Executions</h3> <div class="space-y-4"><div class="flex items-center justify-center py-12 px-6 border border-dashed border-white/10 rounded-2xl"><p class="text-white/20 text-sm font-medium italic">No quiet executions yet.</p></div></div></div> <div class="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-xl"><h3 class="text-xl font-bold mb-6 text-white/80 svelte-x1i5gj">Active Workflows</h3> <div class="space-y-4"><div class="flex flex-col items-center justify-center py-12 px-6 border border-dashed border-white/10 rounded-2xl gap-4"><p class="text-white/20 text-sm font-medium italic">Zero workflows active.</p> <button class="text-accent1 text-sm font-bold hover:text-white transition-colors">Create your first →</button></div></div></div> <div class="bg-primary/10 border border-primary/20 rounded-[32px] p-8"><h4 class="text-lg font-bold text-primary-foreground mb-2 svelte-x1i5gj">Need help?</h4> <p class="text-white/40 text-sm mb-6">Explore our documentation to learn how to deploy silently.</p> <button class="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold text-sm transition-all">View Documentation</button></div></div></div></div>',
);
function Fg(e) {
	var t = Pg(),
		n = te(ee(t), 2),
		r = ee(n),
		o = ee(r);
	Ng(o, {}), J(r), $e(2), J(n), J(t), q(e, t);
}

export { Fg as component };
