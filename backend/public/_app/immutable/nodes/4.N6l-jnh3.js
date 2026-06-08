var rs = Object.defineProperty;
var Qo = (e) => {
	throw TypeError(e);
};
var os = (e, t, n) =>
	t in e ? rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var Ze = (e, t, n) => os(e, typeof t != 'symbol' ? t + '' : t, n),
	to = (e, t, n) => t.has(e) || Qo('Cannot ' + n);
var S = (e, t, n) => (to(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	Z = (e, t, n) =>
		t.has(e)
			? Qo('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	Fn = (e, t, n, r) => (to(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
	$o = (e, t, n) => (to(e, t, 'access private method'), n);
import { a as Yt } from '../chunks/ad1oCDNU.js';
import { s as yt } from '../chunks/B_TgjQzj.js';
import {
	p as $,
	b as ar,
	a as Cs,
	d as Es,
	s as Sn,
	r as vn,
	c as zo,
} from '../chunks/Bd6HErHA.js';
import { o as Ns, a as Yr } from '../chunks/C6YoVMfv.js';
import { a as L, f as ne, b as no, c as Qe, t as Zi, d as ze } from '../chunks/CBtzEIIA.js';
import { e as Gn, a as me, d as Oo, o as vo } from '../chunks/CEyMyz77.js';
import { s as Me, a as Ps } from '../chunks/CwolrOM7.js';
import {
	e as _t,
	f as As,
	b as an,
	r as hr,
	d as Io,
	c as qe,
	a as qt,
	s as Te,
	C as To,
	S as Xr,
	g as zs,
} from '../chunks/D-sGiDVg.js';
import {
	bi as _s,
	bj as Ao,
	b7 as as,
	_ as B,
	X as be,
	bh as bs,
	a2 as Cn,
	bc as cs,
	a3 as de,
	h as dr,
	O as ds,
	s as ei,
	br as fr,
	aI as fs,
	bf as Gi,
	aK as gs,
	bp as gt,
	aF as hs,
	bl as ir,
	q as is,
	bk as Ji,
	bn as je,
	bm as ji,
	bo as ks,
	T as ls,
	ae as ms,
	i as ni,
	Y as P,
	ao as ps,
	ad as qi,
	a9 as Rt,
	bg as ri,
	bq as Ss,
	d as s,
	bb as ss,
	a as ti,
	aS as Ui,
	a1 as ue,
	C as us,
	a0 as V,
	a5 as Vn,
	bd as vs,
	$ as vt,
	aU as w,
	a4 as we,
	a7 as ws,
	W as xe,
	aa as xs,
	Z as Y,
	g as Yn,
	be as ys,
	a6 as Zt,
} from '../chunks/Dgz2FIaC.js';
import { s as Ms } from '../chunks/FVa1k_Qt.js';
import { e as Jn, i as oi } from '../chunks/myK57fyd.js';
import { i as le } from '../chunks/y3wZxoFQ.js';
const Ts = [];
function Qi(e, t = !1, n = !1) {
	return _r(e, new Map(), '', Ts, null, n);
}
function _r(e, t, n, r, o = null, a = !1) {
	if (typeof e == 'object' && e !== null) {
		var i = t.get(e);
		if (i !== void 0) return i;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (is(e)) {
			var l = Array(e.length);
			t.set(e, l), o !== null && t.set(o, l);
			for (var c = 0; c < e.length; c += 1) {
				var u = e[c];
				c in e && (l[c] = _r(u, t, n, r, null, a));
			}
			return l;
		}
		if (as(e) === ss) {
			(l = {}), t.set(e, l), o !== null && t.set(o, l);
			for (var f of Object.keys(e)) l[f] = _r(e[f], t, n, r, null, a);
			return l;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == 'function' && !a) return _r(e.toJSON(), t, n, r, e);
	}
	if (e instanceof EventTarget) return e;
	try {
		return structuredClone(e);
	} catch {
		return e;
	}
}
function Nr(e, t, n = !1, r = !1, o = !1, a = !1) {
	var i = e,
		l = '';
	if (n) {
		var c = e;
		dr && (i = ei(Yn(c)));
	}
	de(() => {
		var u = ls;
		if (l === (l = t() ?? '')) {
			dr && ti();
			return;
		}
		if (n && !dr) {
			(u.nodes = null), (c.innerHTML = l), l !== '' && no(Yn(c), c.lastChild);
			return;
		}
		if ((u.nodes !== null && (cs(u.nodes.start, u.nodes.end), (u.nodes = null)), l !== '')) {
			if (dr) {
				ni.data;
				for (var f = ti(), h = f; f !== null && (f.nodeType !== us || f.data !== ''); )
					(h = f), (f = ds(f));
				if (f === null) throw (fs(), hs);
				no(ni, h), (i = ei(f));
				return;
			}
			var d = r ? vs : o ? ys : void 0,
				g = gs(r ? 'svg' : o ? 'math' : 'template', d);
			g.innerHTML = l;
			var m = r || o ? g : g.content;
			if ((no(Yn(m), m.lastChild), r || o)) for (; Yn(m); ) i.before(Yn(m));
			else i.before(m);
		}
	});
}
function tt(e, t, n) {
	qi(() => {
		var r = Zt(() => t(e, n == null ? void 0 : n()) || {});
		if (n && r != null && r.update) {
			var o = !1,
				a = {};
			ms(() => {
				var i = n();
				Gi(i), o && ws(a, i) && ((a = i), r.update(i));
			}),
				(o = !0);
		}
		if (r != null && r.destroy) return () => r.destroy();
	});
}
var Wt, zn, nr, Kr, $i;
const Fr = class Fr {
	constructor(t) {
		Z(this, Kr);
		Z(this, Wt, new WeakMap());
		Z(this, zn);
		Z(this, nr);
		Fn(this, nr, t);
	}
	observe(t, n) {
		var r = S(this, Wt).get(t) || new Set();
		return (
			r.add(n),
			S(this, Wt).set(t, r),
			$o(this, Kr, $i).call(this).observe(t, S(this, nr)),
			() => {
				var o = S(this, Wt).get(t);
				o.delete(n), o.size === 0 && (S(this, Wt).delete(t), S(this, zn).unobserve(t));
			}
		);
	}
};
(Wt = new WeakMap()),
	(zn = new WeakMap()),
	(nr = new WeakMap()),
	(Kr = new WeakSet()),
	($i = function () {
		return (
			S(this, zn) ??
			Fn(
				this,
				zn,
				new ResizeObserver((t) => {
					for (var n of t) {
						Fr.entries.set(n.target, n);
						for (var r of S(this, Wt).get(n.target) || []) r(n);
					}
				}),
			)
		);
	}),
	Ze(Fr, 'entries', new WeakMap());
const yo = Fr;
var Is = new yo({ box: 'border-box' });
function ii(e, t, n) {
	var r = Is.observe(e, () => n(e[t]));
	qi(() => (Zt(() => n(e[t])), r));
}
function Os(e = !1) {
	const t = xs,
		n = t.l.u;
	if (!n) return;
	let r = () => Gi(t.s);
	if (e) {
		let o = 0,
			a = {};
		const i = ps(() => {
			let l = !1;
			const c = t.s;
			for (const u in c) c[u] !== a[u] && ((a[u] = c[u]), (l = !0));
			return l && o++, o;
		});
		r = () => s(i);
	}
	n.b.length &&
		Ui(() => {
			ai(t, r), ri(n.b);
		}),
		Rt(() => {
			const o = Zt(() => n.m.map(bs));
			return () => {
				for (const a of o) typeof a == 'function' && a();
			};
		}),
		n.a.length &&
			Rt(() => {
				ai(t, r), ri(n.a);
			});
}
function ai(e, t) {
	if (e.l.s) for (const n of e.l.s) s(n);
	t();
}
const Ds = () => {
		const e = Ms;
		return {
			page: { subscribe: e.page.subscribe },
			navigating: { subscribe: e.navigating.subscribe },
			updated: e.updated,
		};
	},
	Hs = {
		subscribe(e) {
			return Ds().page.subscribe(e);
		},
	};
var Rs = { value: () => {} };
function Wr() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + '') || r in n || /[\s.]/.test(r))
			throw new Error('illegal type: ' + r);
		n[r] = [];
	}
	return new kr(n);
}
function kr(e) {
	this._ = e;
}
function Ls(e, t) {
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
kr.prototype = Wr.prototype = {
	constructor: kr,
	on: function (e, t) {
		var n = this._,
			r = Ls(e + '', n),
			o,
			a = -1,
			i = r.length;
		if (arguments.length < 2) {
			for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = Vs(n[o], e.name))) return o;
			return;
		}
		if (t != null && typeof t != 'function') throw new Error('invalid callback: ' + t);
		for (; ++a < i; )
			if ((o = (e = r[a]).type)) n[o] = si(n[o], e.name, t);
			else if (t == null) for (o in n) n[o] = si(n[o], e.name, null);
		return this;
	},
	copy: function () {
		var e = {},
			t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new kr(e);
	},
	call: function (e, t) {
		if ((o = arguments.length - 2) > 0)
			for (var n = new Array(o), r = 0, o, a; r < o; ++r) n[r] = arguments[r + 2];
		if (!Object.hasOwn(this._, e)) throw new Error('unknown type: ' + e);
		for (a = this._[e], r = 0, o = a.length; r < o; ++r) a[r].value.apply(t, n);
	},
	apply: function (e, t, n) {
		if (!Object.hasOwn(this._, e)) throw new Error('unknown type: ' + e);
		for (var r = this._[e], o = 0, a = r.length; o < a; ++o) r[o].value.apply(t, n);
	},
};
function Vs(e, t) {
	for (var n = 0, r = e.length, o; n < r; ++n) if ((o = e[n]).name === t) return o.value;
}
function si(e, t, n) {
	for (var r = 0, o = e.length; r < o; ++r)
		if (e[r].name === t) {
			(e[r] = Rs), (e = e.slice(0, r).concat(e.slice(r + 1)));
			break;
		}
	return n != null && e.push({ name: t, value: n }), e;
}
var mo = 'http://www.w3.org/1999/xhtml';
const li = {
	svg: 'http://www.w3.org/2000/svg',
	xhtml: mo,
	xlink: 'http://www.w3.org/1999/xlink',
	xml: 'http://www.w3.org/XML/1998/namespace',
	xmlns: 'http://www.w3.org/2000/xmlns/',
};
function Zr(e) {
	var t = (e += ''),
		n = t.indexOf(':');
	return (
		n >= 0 && (t = e.slice(0, n)) !== 'xmlns' && (e = e.slice(n + 1)),
		Object.hasOwn(li, t) ? { space: li[t], local: e } : e
	);
}
function Bs(e) {
	return function () {
		var t = this.ownerDocument,
			n = this.namespaceURI;
		return n === mo && t.documentElement.namespaceURI === mo
			? t.createElement(e)
			: t.createElementNS(n, e);
	};
}
function Ks(e) {
	return function () {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function ea(e) {
	var t = Zr(e);
	return (t.local ? Ks : Bs)(t);
}
function Fs() {}
function Do(e) {
	return e == null
		? Fs
		: function () {
				return this.querySelector(e);
			};
}
function Ys(e) {
	typeof e != 'function' && (e = Do(e));
	for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
		for (var a = t[o], i = a.length, l = (r[o] = new Array(i)), c, u, f = 0; f < i; ++f)
			(c = a[f]) &&
				(u = e.call(c, c.__data__, f, a)) &&
				('__data__' in c && (u.__data__ = c.__data__), (l[f] = u));
	return new ht(r, this._parents);
}
function Xs(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ws() {
	return [];
}
function ta(e) {
	return e == null
		? Ws
		: function () {
				return this.querySelectorAll(e);
			};
}
function Zs(e) {
	return function () {
		return Xs(e.apply(this, arguments));
	};
}
function qs(e) {
	typeof e == 'function' ? (e = Zs(e)) : (e = ta(e));
	for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
		for (var i = t[a], l = i.length, c, u = 0; u < l; ++u)
			(c = i[u]) && (r.push(e.call(c, c.__data__, u, i)), o.push(c));
	return new ht(r, o);
}
function na(e) {
	return function () {
		return this.matches(e);
	};
}
function ra(e) {
	return (t) => t.matches(e);
}
var Gs = Array.prototype.find;
function Us(e) {
	return function () {
		return Gs.call(this.children, e);
	};
}
function Js() {
	return this.firstElementChild;
}
function js(e) {
	return this.select(e == null ? Js : Us(typeof e == 'function' ? e : ra(e)));
}
var Qs = Array.prototype.filter;
function $s() {
	return Array.from(this.children);
}
function el(e) {
	return function () {
		return Qs.call(this.children, e);
	};
}
function tl(e) {
	return this.selectAll(e == null ? $s : el(typeof e == 'function' ? e : ra(e)));
}
function nl(e) {
	typeof e != 'function' && (e = na(e));
	for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
		for (var a = t[o], i = a.length, l = (r[o] = []), c, u = 0; u < i; ++u)
			(c = a[u]) && e.call(c, c.__data__, u, a) && l.push(c);
	return new ht(r, this._parents);
}
function oa(e) {
	return new Array(e.length);
}
function rl() {
	return new ht(this._enter || this._groups.map(oa), this._parents);
}
function Pr(e, t) {
	(this.ownerDocument = e.ownerDocument),
		(this.namespaceURI = e.namespaceURI),
		(this._next = null),
		(this._parent = e),
		(this.__data__ = t);
}
Pr.prototype = {
	constructor: Pr,
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
function ol(e) {
	return () => e;
}
function il(e, t, n, r, o, a) {
	for (var i = 0, l, c = t.length, u = a.length; i < u; ++i)
		(l = t[i]) ? ((l.__data__ = a[i]), (r[i] = l)) : (n[i] = new Pr(e, a[i]));
	for (; i < c; ++i) (l = t[i]) && (o[i] = l);
}
function al(e, t, n, r, o, a, i) {
	var l,
		c,
		u = new Map(),
		f = t.length,
		h = a.length,
		d = new Array(f),
		g;
	for (l = 0; l < f; ++l)
		(c = t[l]) &&
			((d[l] = g = i.call(c, c.__data__, l, t) + ''), u.has(g) ? (o[l] = c) : u.set(g, c));
	for (l = 0; l < h; ++l)
		(g = i.call(e, a[l], l, a) + ''),
			(c = u.get(g)) ? ((r[l] = c), (c.__data__ = a[l]), u.delete(g)) : (n[l] = new Pr(e, a[l]));
	for (l = 0; l < f; ++l) (c = t[l]) && u.get(d[l]) === c && (o[l] = c);
}
function sl(e) {
	return e.__data__;
}
function ll(e, t) {
	if (!arguments.length) return Array.from(this, sl);
	var n = t ? al : il,
		r = this._parents,
		o = this._groups;
	typeof e != 'function' && (e = ol(e));
	for (var a = o.length, i = new Array(a), l = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
		var f = r[u],
			h = o[u],
			d = h.length,
			g = cl(e.call(f, f && f.__data__, u, r)),
			m = g.length,
			x = (l[u] = new Array(m)),
			C = (i[u] = new Array(m)),
			z = (c[u] = new Array(d));
		n(f, h, x, C, z, g, t);
		for (var R = 0, E = 0, M, H; R < m; ++R)
			if ((M = x[R])) {
				for (R >= E && (E = R + 1); !(H = C[E]) && ++E < m; );
				M._next = H || null;
			}
	}
	return (i = new ht(i, r)), (i._enter = l), (i._exit = c), i;
}
function cl(e) {
	return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function ul() {
	return new ht(this._exit || this._groups.map(oa), this._parents);
}
function dl(e, t, n) {
	var r = this.enter(),
		o = this,
		a = this.exit();
	return (
		typeof e == 'function' ? ((r = e(r)), r && (r = r.selection())) : (r = r.append(e + '')),
		t != null && ((o = t(o)), o && (o = o.selection())),
		n == null ? a.remove() : n(a),
		r && o ? r.merge(o).order() : o
	);
}
function fl(e) {
	for (
		var t = e.selection ? e.selection() : e,
			n = this._groups,
			r = t._groups,
			o = n.length,
			a = r.length,
			i = Math.min(o, a),
			l = new Array(o),
			c = 0;
		c < i;
		++c
	)
		for (var u = n[c], f = r[c], h = u.length, d = (l[c] = new Array(h)), g, m = 0; m < h; ++m)
			(g = u[m] || f[m]) && (d[m] = g);
	for (; c < o; ++c) l[c] = n[c];
	return new ht(l, this._parents);
}
function hl() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n; )
		for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
			(i = r[o]) &&
				(a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), (a = i));
	return this;
}
function gl(e) {
	e || (e = vl);
	function t(h, d) {
		return h && d ? e(h.__data__, d.__data__) : !h - !d;
	}
	for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
		for (var i = n[a], l = i.length, c = (o[a] = new Array(l)), u, f = 0; f < l; ++f)
			(u = i[f]) && (c[f] = u);
		c.sort(t);
	}
	return new ht(o, this._parents).order();
}
function vl(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function yl() {
	var e = arguments[0];
	return (arguments[0] = this), e.apply(null, arguments), this;
}
function ml() {
	return Array.from(this);
}
function wl() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
		for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
			var i = r[o];
			if (i) return i;
		}
	return null;
}
function xl() {
	let e = 0;
	for (const t of this) ++e;
	return e;
}
function bl() {
	return !this.node();
}
function pl(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
		for (var o = t[n], a = 0, i = o.length, l; a < i; ++a)
			(l = o[a]) && e.call(l, l.__data__, a, o);
	return this;
}
function _l(e) {
	return function () {
		this.removeAttribute(e);
	};
}
function kl(e) {
	return function () {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Sl(e, t) {
	return function () {
		this.setAttribute(e, t);
	};
}
function Cl(e, t) {
	return function () {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function El(e, t) {
	return function () {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Ml(e, t) {
	return function () {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Nl(e, t) {
	var n = Zr(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each(
		(t == null
			? n.local
				? kl
				: _l
			: typeof t == 'function'
				? n.local
					? Ml
					: El
				: n.local
					? Cl
					: Sl)(n, t),
	);
}
function ia(e) {
	return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
}
function Pl(e) {
	return function () {
		this.style.removeProperty(e);
	};
}
function Al(e, t, n) {
	return function () {
		this.style.setProperty(e, t, n);
	};
}
function zl(e, t, n) {
	return function () {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Tl(e, t, n) {
	return arguments.length > 1
		? this.each((t == null ? Pl : typeof t == 'function' ? zl : Al)(e, t, n ?? ''))
		: Tn(this.node(), e);
}
function Tn(e, t) {
	return e.style.getPropertyValue(t) || ia(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Il(e) {
	return function () {
		delete this[e];
	};
}
function Ol(e, t) {
	return function () {
		this[e] = t;
	};
}
function Dl(e, t) {
	return function () {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : (this[e] = n);
	};
}
function Hl(e, t) {
	return arguments.length > 1
		? this.each((t == null ? Il : typeof t == 'function' ? Dl : Ol)(e, t))
		: this.node()[e];
}
function aa(e) {
	return e.trim().split(/^|\s+/);
}
function Ho(e) {
	return e.classList || new sa(e);
}
function sa(e) {
	(this._node = e), (this._names = aa(e.getAttribute('class') || ''));
}
sa.prototype = {
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
function la(e, t) {
	for (var n = Ho(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function ca(e, t) {
	for (var n = Ho(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Rl(e) {
	return function () {
		la(this, e);
	};
}
function Ll(e) {
	return function () {
		ca(this, e);
	};
}
function Vl(e, t) {
	return function () {
		(t.apply(this, arguments) ? la : ca)(this, e);
	};
}
function Bl(e, t) {
	var n = aa(e + '');
	if (arguments.length < 2) {
		for (var r = Ho(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
		return !0;
	}
	return this.each((typeof t == 'function' ? Vl : t ? Rl : Ll)(n, t));
}
function Kl() {
	this.textContent = '';
}
function Fl(e) {
	return function () {
		this.textContent = e;
	};
}
function Yl(e) {
	return function () {
		var t = e.apply(this, arguments);
		this.textContent = t ?? '';
	};
}
function Xl(e) {
	return arguments.length
		? this.each(e == null ? Kl : (typeof e == 'function' ? Yl : Fl)(e))
		: this.node().textContent;
}
function Wl() {
	this.innerHTML = '';
}
function Zl(e) {
	return function () {
		this.innerHTML = e;
	};
}
function ql(e) {
	return function () {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? '';
	};
}
function Gl(e) {
	return arguments.length
		? this.each(e == null ? Wl : (typeof e == 'function' ? ql : Zl)(e))
		: this.node().innerHTML;
}
function Ul() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Jl() {
	return this.each(Ul);
}
function jl() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ql() {
	return this.each(jl);
}
function $l(e) {
	var t = typeof e == 'function' ? e : ea(e);
	return this.select(function () {
		return this.appendChild(t.apply(this, arguments));
	});
}
function ec() {
	return null;
}
function tc(e, t) {
	var n = typeof e == 'function' ? e : ea(e),
		r = t == null ? ec : typeof t == 'function' ? t : Do(t);
	return this.select(function () {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
function nc() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function rc() {
	return this.each(nc);
}
function oc() {
	var e = this.cloneNode(!1),
		t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ic() {
	var e = this.cloneNode(!0),
		t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ac(e) {
	return this.select(e ? ic : oc);
}
function sc(e) {
	return arguments.length ? this.property('__data__', e) : this.node().__data__;
}
function lc(e) {
	return function (t) {
		e.call(this, t, this.__data__);
	};
}
function cc(e) {
	return e
		.trim()
		.split(/^|\s+/)
		.map((t) => {
			var n = '',
				r = t.indexOf('.');
			return r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))), { type: t, name: n };
		});
}
function uc(e) {
	return function () {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
				(a = t[n]),
					(!e.type || a.type === e.type) && a.name === e.name
						? this.removeEventListener(a.type, a.listener, a.options)
						: (t[++r] = a);
			++r ? (t.length = r) : delete this.__on;
		}
	};
}
function dc(e, t, n) {
	return function () {
		var r = this.__on,
			o,
			a = lc(t);
		if (r) {
			for (var i = 0, l = r.length; i < l; ++i)
				if ((o = r[i]).type === e.type && o.name === e.name) {
					this.removeEventListener(o.type, o.listener, o.options),
						this.addEventListener(o.type, (o.listener = a), (o.options = n)),
						(o.value = t);
					return;
				}
		}
		this.addEventListener(e.type, a, n),
			(o = { type: e.type, name: e.name, value: t, listener: a, options: n }),
			r ? r.push(o) : (this.__on = [o]);
	};
}
function fc(e, t, n) {
	var r = cc(e + ''),
		o,
		a = r.length,
		i;
	if (arguments.length < 2) {
		var l = this.node().__on;
		if (l) {
			for (var c = 0, u = l.length, f; c < u; ++c)
				for (o = 0, f = l[c]; o < a; ++o)
					if ((i = r[o]).type === f.type && i.name === f.name) return f.value;
		}
		return;
	}
	for (l = t ? dc : uc, o = 0; o < a; ++o) this.each(l(r[o], t, n));
	return this;
}
function ua(e, t, n) {
	var r = ia(e),
		o = r.CustomEvent;
	typeof o == 'function'
		? (o = new o(t, n))
		: ((o = r.document.createEvent('Event')),
			n
				? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail))
				: o.initEvent(t, !1, !1)),
		e.dispatchEvent(o);
}
function hc(e, t) {
	return function () {
		return ua(this, e, t);
	};
}
function gc(e, t) {
	return function () {
		return ua(this, e, t.apply(this, arguments));
	};
}
function vc(e, t) {
	return this.each((typeof t == 'function' ? gc : hc)(e, t));
}
function* yc() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
		for (var r = e[t], o = 0, a = r.length, i; o < a; ++o) (i = r[o]) && (yield i);
}
var da = [null];
function ht(e, t) {
	(this._groups = e), (this._parents = t);
}
function sr() {
	return new ht([[document.documentElement]], da);
}
function mc() {
	return this;
}
ht.prototype = sr.prototype = {
	constructor: ht,
	select: Ys,
	selectAll: qs,
	selectChild: js,
	selectChildren: tl,
	filter: nl,
	data: ll,
	enter: rl,
	exit: ul,
	join: dl,
	merge: fl,
	selection: mc,
	order: hl,
	sort: gl,
	call: yl,
	nodes: ml,
	node: wl,
	size: xl,
	empty: bl,
	each: pl,
	attr: Nl,
	style: Tl,
	property: Hl,
	classed: Bl,
	text: Xl,
	html: Gl,
	raise: Jl,
	lower: Ql,
	append: $l,
	insert: tc,
	remove: rc,
	clone: ac,
	datum: sc,
	on: fc,
	dispatch: vc,
	[Symbol.iterator]: yc,
};
function xt(e) {
	return typeof e == 'string'
		? new ht([[document.querySelector(e)]], [document.documentElement])
		: new ht([[e]], da);
}
function wc(e) {
	let t;
	for (; (t = e.sourceEvent); ) e = t;
	return e;
}
function Et(e, t) {
	if (((e = wc(e)), t === void 0 && (t = e.currentTarget), t)) {
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
const xc = { passive: !1 },
	jn = { capture: !0, passive: !1 };
function ro(e) {
	e.stopImmediatePropagation();
}
function Mn(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function fa(e) {
	var t = e.document.documentElement,
		n = xt(e).on('dragstart.drag', Mn, jn);
	'onselectstart' in t
		? n.on('selectstart.drag', Mn, jn)
		: ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = 'none'));
}
function ha(e, t) {
	var n = e.document.documentElement,
		r = xt(e).on('dragstart.drag', null);
	t &&
		(r.on('click.drag', Mn, jn),
		setTimeout(() => {
			r.on('click.drag', null);
		}, 0)),
		'onselectstart' in n
			? r.on('selectstart.drag', null)
			: ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
}
const gr = (e) => () => e;
function wo(
	e,
	{
		sourceEvent: t,
		subject: n,
		target: r,
		identifier: o,
		active: a,
		x: i,
		y: l,
		dx: c,
		dy: u,
		dispatch: f,
	},
) {
	Object.defineProperties(this, {
		type: { value: e, enumerable: !0, configurable: !0 },
		sourceEvent: { value: t, enumerable: !0, configurable: !0 },
		subject: { value: n, enumerable: !0, configurable: !0 },
		target: { value: r, enumerable: !0, configurable: !0 },
		identifier: { value: o, enumerable: !0, configurable: !0 },
		active: { value: a, enumerable: !0, configurable: !0 },
		x: { value: i, enumerable: !0, configurable: !0 },
		y: { value: l, enumerable: !0, configurable: !0 },
		dx: { value: c, enumerable: !0, configurable: !0 },
		dy: { value: u, enumerable: !0, configurable: !0 },
		_: { value: f },
	});
}
wo.prototype.on = function () {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
function bc(e) {
	return !e.ctrlKey && !e.button;
}
function pc() {
	return this.parentNode;
}
function _c(e, t) {
	return t ?? { x: e.x, y: e.y };
}
function kc() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function Sc() {
	var e = bc,
		t = pc,
		n = _c,
		r = kc,
		o = {},
		a = Wr('start', 'drag', 'end'),
		i = 0,
		l,
		c,
		u,
		f,
		h = 0;
	function d(M) {
		M.on('mousedown.drag', g)
			.filter(r)
			.on('touchstart.drag', C)
			.on('touchmove.drag', z, xc)
			.on('touchend.drag touchcancel.drag', R)
			.style('touch-action', 'none')
			.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	function g(M, H) {
		if (!(f || !e.call(this, M, H))) {
			var K = E(this, t.call(this, M, H), M, H, 'mouse');
			K &&
				(xt(M.view).on('mousemove.drag', m, jn).on('mouseup.drag', x, jn),
				fa(M.view),
				ro(M),
				(u = !1),
				(l = M.clientX),
				(c = M.clientY),
				K('start', M));
		}
	}
	function m(M) {
		if ((Mn(M), !u)) {
			var H = M.clientX - l,
				K = M.clientY - c;
			u = H * H + K * K > h;
		}
		o.mouse('drag', M);
	}
	function x(M) {
		xt(M.view).on('mousemove.drag mouseup.drag', null), ha(M.view, u), Mn(M), o.mouse('end', M);
	}
	function C(M, H) {
		if (e.call(this, M, H)) {
			var K = M.changedTouches,
				U = t.call(this, M, H),
				J = K.length,
				F,
				re;
			for (F = 0; F < J; ++F)
				(re = E(this, U, M, H, K[F].identifier, K[F])) && (ro(M), re('start', M, K[F]));
		}
	}
	function z(M) {
		var H = M.changedTouches,
			K = H.length,
			U,
			J;
		for (U = 0; U < K; ++U) (J = o[H[U].identifier]) && (Mn(M), J('drag', M, H[U]));
	}
	function R(M) {
		var H = M.changedTouches,
			K = H.length,
			U,
			J;
		for (
			f && clearTimeout(f),
				f = setTimeout(() => {
					f = null;
				}, 500),
				U = 0;
			U < K;
			++U
		)
			(J = o[H[U].identifier]) && (ro(M), J('end', M, H[U]));
	}
	function E(M, H, K, U, J, F) {
		var re = a.copy(),
			N = Et(F || K, H),
			b,
			A,
			v;
		if (
			(v = n.call(
				M,
				new wo('beforestart', {
					sourceEvent: K,
					target: d,
					identifier: J,
					active: i,
					x: N[0],
					y: N[1],
					dx: 0,
					dy: 0,
					dispatch: re,
				}),
				U,
			)) != null
		)
			return (
				(b = v.x - N[0] || 0),
				(A = v.y - N[1] || 0),
				function _(y, k, D) {
					var T = N,
						O;
					switch (y) {
						case 'start':
							(o[J] = _), (O = i++);
							break;
						case 'end':
							delete o[J], --i;
						case 'drag':
							(N = Et(D || k, H)), (O = i);
							break;
					}
					re.call(
						y,
						M,
						new wo(y, {
							sourceEvent: k,
							subject: v,
							target: d,
							identifier: J,
							active: O,
							x: N[0] + b,
							y: N[1] + A,
							dx: N[0] - T[0],
							dy: N[1] - T[1],
							dispatch: re,
						}),
						U,
					);
				}
			);
	}
	return (
		(d.filter = function (M) {
			return arguments.length ? ((e = typeof M == 'function' ? M : gr(!!M)), d) : e;
		}),
		(d.container = function (M) {
			return arguments.length ? ((t = typeof M == 'function' ? M : gr(M)), d) : t;
		}),
		(d.subject = function (M) {
			return arguments.length ? ((n = typeof M == 'function' ? M : gr(M)), d) : n;
		}),
		(d.touchable = function (M) {
			return arguments.length ? ((r = typeof M == 'function' ? M : gr(!!M)), d) : r;
		}),
		(d.on = function () {
			var M = a.on.apply(a, arguments);
			return M === a ? d : M;
		}),
		(d.clickDistance = function (M) {
			return arguments.length ? ((h = (M = +M) * M), d) : Math.sqrt(h);
		}),
		d
	);
}
function Ro(e, t, n) {
	(e.prototype = t.prototype = n), (n.constructor = e);
}
function ga(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
function lr() {}
var Qn = 0.7,
	Ar = 1 / Qn,
	Nn = '\\s*([+-]?\\d+)\\s*',
	$n = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
	Nt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
	Cc = /^#([0-9a-f]{3,8})$/,
	Ec = new RegExp(`^rgb\\(${Nn},${Nn},${Nn}\\)$`),
	Mc = new RegExp(`^rgb\\(${Nt},${Nt},${Nt}\\)$`),
	Nc = new RegExp(`^rgba\\(${Nn},${Nn},${Nn},${$n}\\)$`),
	Pc = new RegExp(`^rgba\\(${Nt},${Nt},${Nt},${$n}\\)$`),
	Ac = new RegExp(`^hsl\\(${$n},${Nt},${Nt}\\)$`),
	zc = new RegExp(`^hsla\\(${$n},${Nt},${Nt},${$n}\\)$`),
	ci = {
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
Ro(lr, cn, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: ui,
	formatHex: ui,
	formatHex8: Tc,
	formatHsl: Ic,
	formatRgb: di,
	toString: di,
});
function ui() {
	return this.rgb().formatHex();
}
function Tc() {
	return this.rgb().formatHex8();
}
function Ic() {
	return va(this).formatHsl();
}
function di() {
	return this.rgb().formatRgb();
}
function cn(e) {
	var t, n;
	return (
		(e = (e + '').trim().toLowerCase()),
		(t = Cc.exec(e))
			? ((n = t[1].length),
				(t = parseInt(t[1], 16)),
				n === 6
					? fi(t)
					: n === 3
						? new nt(
								((t >> 8) & 15) | ((t >> 4) & 240),
								((t >> 4) & 15) | (t & 240),
								((t & 15) << 4) | (t & 15),
								1,
							)
						: n === 8
							? vr((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
							: n === 4
								? vr(
										((t >> 12) & 15) | ((t >> 8) & 240),
										((t >> 8) & 15) | ((t >> 4) & 240),
										((t >> 4) & 15) | (t & 240),
										(((t & 15) << 4) | (t & 15)) / 255,
									)
								: null)
			: (t = Ec.exec(e))
				? new nt(t[1], t[2], t[3], 1)
				: (t = Mc.exec(e))
					? new nt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
					: (t = Nc.exec(e))
						? vr(t[1], t[2], t[3], t[4])
						: (t = Pc.exec(e))
							? vr((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
							: (t = Ac.exec(e))
								? vi(t[1], t[2] / 100, t[3] / 100, 1)
								: (t = zc.exec(e))
									? vi(t[1], t[2] / 100, t[3] / 100, t[4])
									: Object.hasOwn(ci, e)
										? fi(ci[e])
										: e === 'transparent'
											? new nt(NaN, NaN, NaN, 0)
											: null
	);
}
function fi(e) {
	return new nt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function vr(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new nt(e, t, n, r);
}
function Oc(e) {
	return (
		e instanceof lr || (e = cn(e)), e ? ((e = e.rgb()), new nt(e.r, e.g, e.b, e.opacity)) : new nt()
	);
}
function xo(e, t, n, r) {
	return arguments.length === 1 ? Oc(e) : new nt(e, t, n, r ?? 1);
}
function nt(e, t, n, r) {
	(this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
Ro(
	nt,
	xo,
	ga(lr, {
		brighter(e) {
			return (
				(e = e == null ? Ar : Ar ** e), new nt(this.r * e, this.g * e, this.b * e, this.opacity)
			);
		},
		darker(e) {
			return (
				(e = e == null ? Qn : Qn ** e), new nt(this.r * e, this.g * e, this.b * e, this.opacity)
			);
		},
		rgb() {
			return this;
		},
		clamp() {
			return new nt(ln(this.r), ln(this.g), ln(this.b), zr(this.opacity));
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
		hex: hi,
		formatHex: hi,
		formatHex8: Dc,
		formatRgb: gi,
		toString: gi,
	}),
);
function hi() {
	return `#${sn(this.r)}${sn(this.g)}${sn(this.b)}`;
}
function Dc() {
	return `#${sn(this.r)}${sn(this.g)}${sn(this.b)}${sn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function gi() {
	const e = zr(this.opacity);
	return `${e === 1 ? 'rgb(' : 'rgba('}${ln(this.r)}, ${ln(this.g)}, ${ln(this.b)}${e === 1 ? ')' : `, ${e})`}`;
}
function zr(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ln(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function sn(e) {
	return (e = ln(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function vi(e, t, n, r) {
	return (
		r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
		new bt(e, t, n, r)
	);
}
function va(e) {
	if (e instanceof bt) return new bt(e.h, e.s, e.l, e.opacity);
	if ((e instanceof lr || (e = cn(e)), !e)) return new bt();
	if (e instanceof bt) return e;
	e = e.rgb();
	var t = e.r / 255,
		n = e.g / 255,
		r = e.b / 255,
		o = Math.min(t, n, r),
		a = Math.max(t, n, r),
		i = NaN,
		l = a - o,
		c = (a + o) / 2;
	return (
		l
			? (t === a
					? (i = (n - r) / l + (n < r) * 6)
					: n === a
						? (i = (r - t) / l + 2)
						: (i = (t - n) / l + 4),
				(l /= c < 0.5 ? a + o : 2 - a - o),
				(i *= 60))
			: (l = c > 0 && c < 1 ? 0 : i),
		new bt(i, l, c, e.opacity)
	);
}
function Hc(e, t, n, r) {
	return arguments.length === 1 ? va(e) : new bt(e, t, n, r ?? 1);
}
function bt(e, t, n, r) {
	(this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
Ro(
	bt,
	Hc,
	ga(lr, {
		brighter(e) {
			return (e = e == null ? Ar : Ar ** e), new bt(this.h, this.s, this.l * e, this.opacity);
		},
		darker(e) {
			return (e = e == null ? Qn : Qn ** e), new bt(this.h, this.s, this.l * e, this.opacity);
		},
		rgb() {
			var e = (this.h % 360) + (this.h < 0) * 360,
				t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
				n = this.l,
				r = n + (n < 0.5 ? n : 1 - n) * t,
				o = 2 * n - r;
			return new nt(
				oo(e >= 240 ? e - 240 : e + 120, o, r),
				oo(e, o, r),
				oo(e < 120 ? e + 240 : e - 120, o, r),
				this.opacity,
			);
		},
		clamp() {
			return new bt(yi(this.h), yr(this.s), yr(this.l), zr(this.opacity));
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
			const e = zr(this.opacity);
			return `${e === 1 ? 'hsl(' : 'hsla('}${yi(this.h)}, ${yr(this.s) * 100}%, ${yr(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
		},
	}),
);
function yi(e) {
	return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function yr(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function oo(e, t, n) {
	return (
		(e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t) *
		255
	);
}
const Lo = (e) => () => e;
function Rc(e, t) {
	return (n) => e + n * t;
}
function Lc(e, t, n) {
	return (e = e ** n), (t = t ** n - e), (n = 1 / n), (r) => (e + r * t) ** n;
}
function Vc(e) {
	return (e = +e) == 1 ? ya : (t, n) => (n - t ? Lc(t, n, e) : Lo(isNaN(t) ? n : t));
}
function ya(e, t) {
	var n = t - e;
	return n ? Rc(e, n) : Lo(isNaN(e) ? t : e);
}
const Tr = (function e(t) {
	var n = Vc(t);
	function r(o, a) {
		var i = n((o = xo(o)).r, (a = xo(a)).r),
			l = n(o.g, a.g),
			c = n(o.b, a.b),
			u = ya(o.opacity, a.opacity);
		return (f) => ((o.r = i(f)), (o.g = l(f)), (o.b = c(f)), (o.opacity = u(f)), o + '');
	}
	return (r.gamma = e), r;
})(1);
function Bc(e, t) {
	t || (t = []);
	var n = e ? Math.min(t.length, e.length) : 0,
		r = t.slice(),
		o;
	return (a) => {
		for (o = 0; o < n; ++o) r[o] = e[o] * (1 - a) + t[o] * a;
		return r;
	};
}
function Kc(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Fc(e, t) {
	var n = t ? t.length : 0,
		r = e ? Math.min(n, e.length) : 0,
		o = new Array(r),
		a = new Array(n),
		i;
	for (i = 0; i < r; ++i) o[i] = Un(e[i], t[i]);
	for (; i < n; ++i) a[i] = t[i];
	return (l) => {
		for (i = 0; i < r; ++i) a[i] = o[i](l);
		return a;
	};
}
function Yc(e, t) {
	var n = new Date();
	return (e = +e), (t = +t), (r) => (n.setTime(e * (1 - r) + t * r), n);
}
function Mt(e, t) {
	return (e = +e), (t = +t), (n) => e * (1 - n) + t * n;
}
function Xc(e, t) {
	var n = {},
		r = {},
		o;
	(e === null || typeof e != 'object') && (e = {}),
		(t === null || typeof t != 'object') && (t = {});
	for (o in t) o in e ? (n[o] = Un(e[o], t[o])) : (r[o] = t[o]);
	return (a) => {
		for (o in n) r[o] = n[o](a);
		return r;
	};
}
var bo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	io = new RegExp(bo.source, 'g');
function Wc(e) {
	return () => e;
}
function Zc(e) {
	return (t) => e(t) + '';
}
function ma(e, t) {
	var n = (bo.lastIndex = io.lastIndex = 0),
		r,
		o,
		a,
		i = -1,
		l = [],
		c = [];
	for (e = e + '', t = t + ''; (r = bo.exec(e)) && (o = io.exec(t)); )
		(a = o.index) > n && ((a = t.slice(n, a)), l[i] ? (l[i] += a) : (l[++i] = a)),
			(r = r[0]) === (o = o[0])
				? l[i]
					? (l[i] += o)
					: (l[++i] = o)
				: ((l[++i] = null), c.push({ i, x: Mt(r, o) })),
			(n = io.lastIndex);
	return (
		n < t.length && ((a = t.slice(n)), l[i] ? (l[i] += a) : (l[++i] = a)),
		l.length < 2
			? c[0]
				? Zc(c[0].x)
				: Wc(t)
			: ((t = c.length),
				(u) => {
					for (var f = 0, h; f < t; ++f) l[(h = c[f]).i] = h.x(u);
					return l.join('');
				})
	);
}
function Un(e, t) {
	var n = typeof t,
		r;
	return t == null || n === 'boolean'
		? Lo(t)
		: (n === 'number'
				? Mt
				: n === 'string'
					? (r = cn(t))
						? ((t = r), Tr)
						: ma
					: t instanceof cn
						? Tr
						: t instanceof Date
							? Yc
							: Kc(t)
								? Bc
								: Array.isArray(t)
									? Fc
									: (typeof t.valueOf != 'function' && typeof t.toString != 'function') || isNaN(t)
										? Xc
										: Mt)(e, t);
}
var mi = 180 / Math.PI,
	po = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function wa(e, t, n, r, o, a) {
	var i, l, c;
	return (
		(i = Math.sqrt(e * e + t * t)) && ((e /= i), (t /= i)),
		(c = e * n + t * r) && ((n -= e * c), (r -= t * c)),
		(l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (c /= l)),
		e * r < t * n && ((e = -e), (t = -t), (c = -c), (i = -i)),
		{
			translateX: o,
			translateY: a,
			rotate: Math.atan2(t, e) * mi,
			skewX: Math.atan(c) * mi,
			scaleX: i,
			scaleY: l,
		}
	);
}
var mr;
function qc(e) {
	const t = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(e + '');
	return t.isIdentity ? po : wa(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Gc(e) {
	return e == null ||
		(mr || (mr = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
		mr.setAttribute('transform', e),
		!(e = mr.transform.baseVal.consolidate()))
		? po
		: ((e = e.matrix), wa(e.a, e.b, e.c, e.d, e.e, e.f));
}
function xa(e, t, n, r) {
	function o(u) {
		return u.length ? u.pop() + ' ' : '';
	}
	function a(u, f, h, d, g, m) {
		if (u !== h || f !== d) {
			var x = g.push('translate(', null, t, null, n);
			m.push({ i: x - 4, x: Mt(u, h) }, { i: x - 2, x: Mt(f, d) });
		} else (h || d) && g.push('translate(' + h + t + d + n);
	}
	function i(u, f, h, d) {
		u !== f
			? (u - f > 180 ? (f += 360) : f - u > 180 && (u += 360),
				d.push({ i: h.push(o(h) + 'rotate(', null, r) - 2, x: Mt(u, f) }))
			: f && h.push(o(h) + 'rotate(' + f + r);
	}
	function l(u, f, h, d) {
		u !== f
			? d.push({ i: h.push(o(h) + 'skewX(', null, r) - 2, x: Mt(u, f) })
			: f && h.push(o(h) + 'skewX(' + f + r);
	}
	function c(u, f, h, d, g, m) {
		if (u !== h || f !== d) {
			var x = g.push(o(g) + 'scale(', null, ',', null, ')');
			m.push({ i: x - 4, x: Mt(u, h) }, { i: x - 2, x: Mt(f, d) });
		} else (h !== 1 || d !== 1) && g.push(o(g) + 'scale(' + h + ',' + d + ')');
	}
	return (u, f) => {
		var h = [],
			d = [];
		return (
			(u = e(u)),
			(f = e(f)),
			a(u.translateX, u.translateY, f.translateX, f.translateY, h, d),
			i(u.rotate, f.rotate, h, d),
			l(u.skewX, f.skewX, h, d),
			c(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, d),
			(u = f = null),
			(g) => {
				for (var m = -1, x = d.length, C; ++m < x; ) h[(C = d[m]).i] = C.x(g);
				return h.join('');
			}
		);
	};
}
var Uc = xa(qc, 'px, ', 'px)', 'deg)'),
	Jc = xa(Gc, ', ', ')', ')'),
	jc = 1e-12;
function wi(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Qc(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function $c(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Sr = (function e(t, n, r) {
	function o(a, i) {
		var l = a[0],
			c = a[1],
			u = a[2],
			f = i[0],
			h = i[1],
			d = i[2],
			g = f - l,
			m = h - c,
			x = g * g + m * m,
			C,
			z;
		if (x < jc)
			(z = Math.log(d / u) / t), (C = (U) => [l + U * g, c + U * m, u * Math.exp(t * U * z)]);
		else {
			var R = Math.sqrt(x),
				E = (d * d - u * u + r * x) / (2 * u * n * R),
				M = (d * d - u * u - r * x) / (2 * d * n * R),
				H = Math.log(Math.sqrt(E * E + 1) - E),
				K = Math.log(Math.sqrt(M * M + 1) - M);
			(z = (K - H) / t),
				(C = (U) => {
					var J = U * z,
						F = wi(H),
						re = (u / (n * R)) * (F * $c(t * J + H) - Qc(H));
					return [l + re * g, c + re * m, (u * F) / wi(t * J + H)];
				});
		}
		return (C.duration = (z * 1e3 * t) / Math.SQRT2), C;
	}
	return (
		(o.rho = (a) => {
			var i = Math.max(0.001, +a),
				l = i * i,
				c = l * l;
			return e(i, l, c);
		}),
		o
	);
})(Math.SQRT2, 2, 4);
var In = 0,
	Zn = 0,
	Xn = 0,
	ba = 1e3,
	Ir,
	qn,
	Or = 0,
	un = 0,
	qr = 0,
	er = typeof performance == 'object' && performance.now ? performance : Date,
	pa =
		typeof window == 'object' && window.requestAnimationFrame
			? window.requestAnimationFrame.bind(window)
			: (e) => {
					setTimeout(e, 17);
				};
function Vo() {
	return un || (pa(eu), (un = er.now() + qr));
}
function eu() {
	un = 0;
}
function Dr() {
	this._call = this._time = this._next = null;
}
Dr.prototype = _a.prototype = {
	constructor: Dr,
	restart: function (e, t, n) {
		if (typeof e != 'function') throw new TypeError('callback is not a function');
		(n = (n == null ? Vo() : +n) + (t == null ? 0 : +t)),
			!this._next && qn !== this && (qn ? (qn._next = this) : (Ir = this), (qn = this)),
			(this._call = e),
			(this._time = n),
			_o();
	},
	stop: function () {
		this._call && ((this._call = null), (this._time = 1 / 0), _o());
	},
};
function _a(e, t, n) {
	var r = new Dr();
	return r.restart(e, t, n), r;
}
function tu() {
	Vo(), ++In;
	for (var e = Ir, t; e; ) (t = un - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
	--In;
}
function xi() {
	(un = (Or = er.now()) + qr), (In = Zn = 0);
	try {
		tu();
	} finally {
		(In = 0), ru(), (un = 0);
	}
}
function nu() {
	var e = er.now(),
		t = e - Or;
	t > ba && ((qr -= t), (Or = e));
}
function ru() {
	for (var e, t = Ir, n, r = 1 / 0; t; )
		t._call
			? (r > t._time && (r = t._time), (e = t), (t = t._next))
			: ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (Ir = n)));
	(qn = e), _o(r);
}
function _o(e) {
	if (!In) {
		Zn && (Zn = clearTimeout(Zn));
		var t = e - un;
		t > 24
			? (e < 1 / 0 && (Zn = setTimeout(xi, e - er.now() - qr)), Xn && (Xn = clearInterval(Xn)))
			: (Xn || ((Or = er.now()), (Xn = setInterval(nu, ba))), (In = 1), pa(xi));
	}
}
function bi(e, t, n) {
	var r = new Dr();
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
var ou = Wr('start', 'end', 'cancel', 'interrupt'),
	iu = [],
	ka = 0,
	pi = 1,
	ko = 2,
	Cr = 3,
	_i = 4,
	So = 5,
	Er = 6;
function Gr(e, t, n, r, o, a) {
	var i = e.__transition;
	if (!i) e.__transition = {};
	else if (n in i) return;
	au(e, n, {
		name: t,
		index: r,
		group: o,
		on: ou,
		tween: iu,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: ka,
	});
}
function Bo(e, t) {
	var n = kt(e, t);
	if (n.state > ka) throw new Error('too late; already scheduled');
	return n;
}
function At(e, t) {
	var n = kt(e, t);
	if (n.state > Cr) throw new Error('too late; already running');
	return n;
}
function kt(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw new Error('transition not found');
	return n;
}
function au(e, t, n) {
	var r = e.__transition,
		o;
	(r[t] = n), (n.timer = _a(a, 0, n.time));
	function a(u) {
		(n.state = pi), n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
	}
	function i(u) {
		var f, h, d, g;
		if (n.state !== pi) return c();
		for (f in r)
			if (((g = r[f]), g.name === n.name)) {
				if (g.state === Cr) return bi(i);
				g.state === _i
					? ((g.state = Er),
						g.timer.stop(),
						g.on.call('interrupt', e, e.__data__, g.index, g.group),
						delete r[f])
					: +f < t &&
						((g.state = Er),
						g.timer.stop(),
						g.on.call('cancel', e, e.__data__, g.index, g.group),
						delete r[f]);
			}
		if (
			(bi(() => {
				n.state === Cr && ((n.state = _i), n.timer.restart(l, n.delay, n.time), l(u));
			}),
			(n.state = ko),
			n.on.call('start', e, e.__data__, n.index, n.group),
			n.state === ko)
		) {
			for (n.state = Cr, o = new Array((d = n.tween.length)), f = 0, h = -1; f < d; ++f)
				(g = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
			o.length = h + 1;
		}
	}
	function l(u) {
		for (
			var f =
					u < n.duration
						? n.ease.call(null, u / n.duration)
						: (n.timer.restart(c), (n.state = So), 1),
				h = -1,
				d = o.length;
			++h < d;
		)
			o[h].call(e, f);
		n.state === So && (n.on.call('end', e, e.__data__, n.index, n.group), c());
	}
	function c() {
		(n.state = Er), n.timer.stop(), delete r[t];
		for (var u in r) return;
		delete e.__transition;
	}
}
function Mr(e, t) {
	var n = e.__transition,
		r,
		o,
		a = !0,
		i;
	if (n) {
		t = t == null ? null : t + '';
		for (i in n) {
			if ((r = n[i]).name !== t) {
				a = !1;
				continue;
			}
			(o = r.state > ko && r.state < So),
				(r.state = Er),
				r.timer.stop(),
				r.on.call(o ? 'interrupt' : 'cancel', e, e.__data__, r.index, r.group),
				delete n[i];
		}
		a && delete e.__transition;
	}
}
function su(e) {
	return this.each(function () {
		Mr(this, e);
	});
}
function lu(e, t) {
	var n, r;
	return function () {
		var o = At(this, e),
			a = o.tween;
		if (a !== n) {
			r = n = a;
			for (var i = 0, l = r.length; i < l; ++i)
				if (r[i].name === t) {
					(r = r.slice()), r.splice(i, 1);
					break;
				}
		}
		o.tween = r;
	};
}
function cu(e, t, n) {
	var r, o;
	if (typeof n != 'function') throw new Error();
	return function () {
		var a = At(this, e),
			i = a.tween;
		if (i !== r) {
			o = (r = i).slice();
			for (var l = { name: t, value: n }, c = 0, u = o.length; c < u; ++c)
				if (o[c].name === t) {
					o[c] = l;
					break;
				}
			c === u && o.push(l);
		}
		a.tween = o;
	};
}
function uu(e, t) {
	var n = this._id;
	if (((e += ''), arguments.length < 2)) {
		for (var r = kt(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
			if ((i = r[o]).name === e) return i.value;
		return null;
	}
	return this.each((t == null ? lu : cu)(n, e, t));
}
function Ko(e, t, n) {
	var r = e._id;
	return (
		e.each(function () {
			var o = At(this, r);
			(o.value || (o.value = {}))[t] = n.apply(this, arguments);
		}),
		(o) => kt(o, r).value[t]
	);
}
function Sa(e, t) {
	var n;
	return (typeof t == 'number' ? Mt : t instanceof cn ? Tr : (n = cn(t)) ? ((t = n), Tr) : ma)(
		e,
		t,
	);
}
function du(e) {
	return function () {
		this.removeAttribute(e);
	};
}
function fu(e) {
	return function () {
		this.removeAttributeNS(e.space, e.local);
	};
}
function hu(e, t, n) {
	var r,
		o = n + '',
		a;
	return function () {
		var i = this.getAttribute(e);
		return i === o ? null : i === r ? a : (a = t((r = i), n));
	};
}
function gu(e, t, n) {
	var r,
		o = n + '',
		a;
	return function () {
		var i = this.getAttributeNS(e.space, e.local);
		return i === o ? null : i === r ? a : (a = t((r = i), n));
	};
}
function vu(e, t, n) {
	var r, o, a;
	return function () {
		var i,
			l = n(this),
			c;
		return l == null
			? void this.removeAttribute(e)
			: ((i = this.getAttribute(e)),
				(c = l + ''),
				i === c ? null : i === r && c === o ? a : ((o = c), (a = t((r = i), l))));
	};
}
function yu(e, t, n) {
	var r, o, a;
	return function () {
		var i,
			l = n(this),
			c;
		return l == null
			? void this.removeAttributeNS(e.space, e.local)
			: ((i = this.getAttributeNS(e.space, e.local)),
				(c = l + ''),
				i === c ? null : i === r && c === o ? a : ((o = c), (a = t((r = i), l))));
	};
}
function mu(e, t) {
	var n = Zr(e),
		r = n === 'transform' ? Jc : Sa;
	return this.attrTween(
		e,
		typeof t == 'function'
			? (n.local ? yu : vu)(n, r, Ko(this, 'attr.' + e, t))
			: t == null
				? (n.local ? fu : du)(n)
				: (n.local ? gu : hu)(n, r, t),
	);
}
function wu(e, t) {
	return function (n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function xu(e, t) {
	return function (n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function bu(e, t) {
	var n, r;
	function o() {
		var a = t.apply(this, arguments);
		return a !== r && (n = (r = a) && xu(e, a)), n;
	}
	return (o._value = t), o;
}
function pu(e, t) {
	var n, r;
	function o() {
		var a = t.apply(this, arguments);
		return a !== r && (n = (r = a) && wu(e, a)), n;
	}
	return (o._value = t), o;
}
function _u(e, t) {
	var n = 'attr.' + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != 'function') throw new Error();
	var r = Zr(e);
	return this.tween(n, (r.local ? bu : pu)(r, t));
}
function ku(e, t) {
	return function () {
		Bo(this, e).delay = +t.apply(this, arguments);
	};
}
function Su(e, t) {
	return (
		(t = +t),
		function () {
			Bo(this, e).delay = t;
		}
	);
}
function Cu(e) {
	var t = this._id;
	return arguments.length
		? this.each((typeof e == 'function' ? ku : Su)(t, e))
		: kt(this.node(), t).delay;
}
function Eu(e, t) {
	return function () {
		At(this, e).duration = +t.apply(this, arguments);
	};
}
function Mu(e, t) {
	return (
		(t = +t),
		function () {
			At(this, e).duration = t;
		}
	);
}
function Nu(e) {
	var t = this._id;
	return arguments.length
		? this.each((typeof e == 'function' ? Eu : Mu)(t, e))
		: kt(this.node(), t).duration;
}
function Pu(e, t) {
	if (typeof t != 'function') throw new Error();
	return function () {
		At(this, e).ease = t;
	};
}
function Au(e) {
	var t = this._id;
	return arguments.length ? this.each(Pu(t, e)) : kt(this.node(), t).ease;
}
function zu(e, t) {
	return function () {
		var n = t.apply(this, arguments);
		if (typeof n != 'function') throw new Error();
		At(this, e).ease = n;
	};
}
function Tu(e) {
	if (typeof e != 'function') throw new Error();
	return this.each(zu(this._id, e));
}
function Iu(e) {
	typeof e != 'function' && (e = na(e));
	for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
		for (var a = t[o], i = a.length, l = (r[o] = []), c, u = 0; u < i; ++u)
			(c = a[u]) && e.call(c, c.__data__, u, a) && l.push(c);
	return new Lt(r, this._parents, this._name, this._id);
}
function Ou(e) {
	if (e._id !== this._id) throw new Error();
	for (
		var t = this._groups,
			n = e._groups,
			r = t.length,
			o = n.length,
			a = Math.min(r, o),
			i = new Array(r),
			l = 0;
		l < a;
		++l
	)
		for (var c = t[l], u = n[l], f = c.length, h = (i[l] = new Array(f)), d, g = 0; g < f; ++g)
			(d = c[g] || u[g]) && (h[g] = d);
	for (; l < r; ++l) i[l] = t[l];
	return new Lt(i, this._parents, this._name, this._id);
}
function Du(e) {
	return (e + '')
		.trim()
		.split(/^|\s+/)
		.every((t) => {
			var n = t.indexOf('.');
			return n >= 0 && (t = t.slice(0, n)), !t || t === 'start';
		});
}
function Hu(e, t, n) {
	var r,
		o,
		a = Du(t) ? Bo : At;
	return function () {
		var i = a(this, e),
			l = i.on;
		l !== r && (o = (r = l).copy()).on(t, n), (i.on = o);
	};
}
function Ru(e, t) {
	var n = this._id;
	return arguments.length < 2 ? kt(this.node(), n).on.on(e) : this.each(Hu(n, e, t));
}
function Lu(e) {
	return function () {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Vu() {
	return this.on('end.remove', Lu(this._id));
}
function Bu(e) {
	var t = this._name,
		n = this._id;
	typeof e != 'function' && (e = Do(e));
	for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
		for (var l = r[i], c = l.length, u = (a[i] = new Array(c)), f, h, d = 0; d < c; ++d)
			(f = l[d]) &&
				(h = e.call(f, f.__data__, d, l)) &&
				('__data__' in f && (h.__data__ = f.__data__), (u[d] = h), Gr(u[d], t, n, d, u, kt(f, n)));
	return new Lt(a, this._parents, t, n);
}
function Ku(e) {
	var t = this._name,
		n = this._id;
	typeof e != 'function' && (e = ta(e));
	for (var r = this._groups, o = r.length, a = [], i = [], l = 0; l < o; ++l)
		for (var c = r[l], u = c.length, f, h = 0; h < u; ++h)
			if ((f = c[h])) {
				for (var d = e.call(f, f.__data__, h, c), g, m = kt(f, n), x = 0, C = d.length; x < C; ++x)
					(g = d[x]) && Gr(g, t, n, x, d, m);
				a.push(d), i.push(f);
			}
	return new Lt(a, i, t, n);
}
var Fu = sr.prototype.constructor;
function Yu() {
	return new Fu(this._groups, this._parents);
}
function Xu(e, t) {
	var n, r, o;
	return function () {
		var a = Tn(this, e),
			i = (this.style.removeProperty(e), Tn(this, e));
		return a === i ? null : a === n && i === r ? o : (o = t((n = a), (r = i)));
	};
}
function Ca(e) {
	return function () {
		this.style.removeProperty(e);
	};
}
function Wu(e, t, n) {
	var r,
		o = n + '',
		a;
	return function () {
		var i = Tn(this, e);
		return i === o ? null : i === r ? a : (a = t((r = i), n));
	};
}
function Zu(e, t, n) {
	var r, o, a;
	return function () {
		var i = Tn(this, e),
			l = n(this),
			c = l + '';
		return (
			l == null && (c = l = (this.style.removeProperty(e), Tn(this, e))),
			i === c ? null : i === r && c === o ? a : ((o = c), (a = t((r = i), l)))
		);
	};
}
function qu(e, t) {
	var n,
		r,
		o,
		a = 'style.' + t,
		i = 'end.' + a,
		l;
	return function () {
		var c = At(this, e),
			u = c.on,
			f = c.value[a] == null ? l || (l = Ca(t)) : void 0;
		(u !== n || o !== f) && (r = (n = u).copy()).on(i, (o = f)), (c.on = r);
	};
}
function Gu(e, t, n) {
	var r = (e += '') == 'transform' ? Uc : Sa;
	return t == null
		? this.styleTween(e, Xu(e, r)).on('end.style.' + e, Ca(e))
		: typeof t == 'function'
			? this.styleTween(e, Zu(e, r, Ko(this, 'style.' + e, t))).each(qu(this._id, e))
			: this.styleTween(e, Wu(e, r, t), n).on('end.style.' + e, null);
}
function Uu(e, t, n) {
	return function (r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Ju(e, t, n) {
	var r, o;
	function a() {
		var i = t.apply(this, arguments);
		return i !== o && (r = (o = i) && Uu(e, i, n)), r;
	}
	return (a._value = t), a;
}
function ju(e, t, n) {
	var r = 'style.' + (e += '');
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != 'function') throw new Error();
	return this.tween(r, Ju(e, t, n ?? ''));
}
function Qu(e) {
	return function () {
		this.textContent = e;
	};
}
function $u(e) {
	return function () {
		var t = e(this);
		this.textContent = t ?? '';
	};
}
function ed(e) {
	return this.tween(
		'text',
		typeof e == 'function' ? $u(Ko(this, 'text', e)) : Qu(e == null ? '' : e + ''),
	);
}
function td(e) {
	return function (t) {
		this.textContent = e.call(this, t);
	};
}
function nd(e) {
	var t, n;
	function r() {
		var o = e.apply(this, arguments);
		return o !== n && (t = (n = o) && td(o)), t;
	}
	return (r._value = e), r;
}
function rd(e) {
	var t = 'text';
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != 'function') throw new Error();
	return this.tween(t, nd(e));
}
function od() {
	for (
		var e = this._name, t = this._id, n = Ea(), r = this._groups, o = r.length, a = 0;
		a < o;
		++a
	)
		for (var i = r[a], l = i.length, c, u = 0; u < l; ++u)
			if ((c = i[u])) {
				var f = kt(c, t);
				Gr(c, e, n, u, i, {
					time: f.time + f.delay + f.duration,
					delay: 0,
					duration: f.duration,
					ease: f.ease,
				});
			}
	return new Lt(r, this._parents, e, n);
}
function id() {
	var e,
		t,
		r = this._id,
		o = this.size();
	return new Promise((a, i) => {
		var l = { value: i },
			c = {
				value: () => {
					--o === 0 && a();
				},
			};
		this.each(function () {
			var u = At(this, r),
				f = u.on;
			f !== e && ((t = (e = f).copy()), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(c)),
				(u.on = t);
		}),
			o === 0 && a();
	});
}
var ad = 0;
function Lt(e, t, n, r) {
	(this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
}
function Ea() {
	return ++ad;
}
var Ot = sr.prototype;
Lt.prototype = {
	constructor: Lt,
	select: Bu,
	selectAll: Ku,
	selectChild: Ot.selectChild,
	selectChildren: Ot.selectChildren,
	filter: Iu,
	merge: Ou,
	selection: Yu,
	transition: od,
	call: Ot.call,
	nodes: Ot.nodes,
	node: Ot.node,
	size: Ot.size,
	empty: Ot.empty,
	each: Ot.each,
	on: Ru,
	attr: mu,
	attrTween: _u,
	style: Gu,
	styleTween: ju,
	text: ed,
	textTween: rd,
	remove: Vu,
	tween: uu,
	delay: Cu,
	duration: Nu,
	ease: Au,
	easeVarying: Tu,
	end: id,
	[Symbol.iterator]: Ot[Symbol.iterator],
};
function sd(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var ld = { time: null, delay: 0, duration: 250, ease: sd };
function cd(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]); )
		if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
	return n;
}
function ud(e) {
	var t, n;
	e instanceof Lt
		? ((t = e._id), (e = e._name))
		: ((t = Ea()), ((n = ld).time = Vo()), (e = e == null ? null : e + ''));
	for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
		for (var i = r[a], l = i.length, c, u = 0; u < l; ++u)
			(c = i[u]) && Gr(c, e, t, u, i, n || cd(c, t));
	return new Lt(r, this._parents, e, t);
}
sr.prototype.interrupt = su;
sr.prototype.transition = ud;
const wr = (e) => () => e;
function dd(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
	Object.defineProperties(this, {
		type: { value: e, enumerable: !0, configurable: !0 },
		sourceEvent: { value: t, enumerable: !0, configurable: !0 },
		target: { value: n, enumerable: !0, configurable: !0 },
		transform: { value: r, enumerable: !0, configurable: !0 },
		_: { value: o },
	});
}
function Dt(e, t, n) {
	(this.k = e), (this.x = t), (this.y = n);
}
Dt.prototype = {
	constructor: Dt,
	scale: function (e) {
		return e === 1 ? this : new Dt(this.k * e, this.x, this.y);
	},
	translate: function (e, t) {
		return (e === 0) & (t === 0) ? this : new Dt(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ur = new Dt(1, 0, 0);
Ma.prototype = Dt.prototype;
function Ma(e) {
	for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ur;
	return e.__zoom;
}
function ao(e) {
	e.stopImmediatePropagation();
}
function Wn(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function fd(e) {
	return (!e.ctrlKey || e.type === 'wheel') && !e.button;
}
function hd() {
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
function ki() {
	return this.__zoom || Ur;
}
function gd(e) {
	return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1);
}
function vd() {
	return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function yd(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0],
		o = e.invertX(t[1][0]) - n[1][0],
		a = e.invertY(t[0][1]) - n[0][1],
		i = e.invertY(t[1][1]) - n[1][1];
	return e.translate(
		o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
		i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i),
	);
}
function md() {
	var e = fd,
		t = hd,
		n = yd,
		r = gd,
		o = vd,
		a = [0, 1 / 0],
		i = [
			[-1 / 0, -1 / 0],
			[1 / 0, 1 / 0],
		],
		l = 250,
		c = Sr,
		u = Wr('start', 'zoom', 'end'),
		f,
		h,
		d,
		g = 500,
		m = 150,
		x = 0,
		C = 10;
	function z(v) {
		v.property('__zoom', ki)
			.on('wheel.zoom', J, { passive: !1 })
			.on('mousedown.zoom', F)
			.on('dblclick.zoom', re)
			.filter(o)
			.on('touchstart.zoom', N)
			.on('touchmove.zoom', b)
			.on('touchend.zoom touchcancel.zoom', A)
			.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	}
	(z.transform = (v, _, y, k) => {
		var D = v.selection ? v.selection() : v;
		D.property('__zoom', ki),
			v !== D
				? H(v, _, y, k)
				: D.interrupt().each(function () {
						K(this, arguments)
							.event(k)
							.start()
							.zoom(null, typeof _ == 'function' ? _.apply(this, arguments) : _)
							.end();
					});
	}),
		(z.scaleBy = (v, _, y, k) => {
			z.scaleTo(
				v,
				function () {
					var D = this.__zoom.k,
						T = typeof _ == 'function' ? _.apply(this, arguments) : _;
					return D * T;
				},
				y,
				k,
			);
		}),
		(z.scaleTo = (v, _, y, k) => {
			z.transform(
				v,
				function () {
					var D = t.apply(this, arguments),
						T = this.__zoom,
						O = y == null ? M(D) : typeof y == 'function' ? y.apply(this, arguments) : y,
						X = T.invert(O),
						Q = typeof _ == 'function' ? _.apply(this, arguments) : _;
					return n(E(R(T, Q), O, X), D, i);
				},
				y,
				k,
			);
		}),
		(z.translateBy = (v, _, y, k) => {
			z.transform(
				v,
				function () {
					return n(
						this.__zoom.translate(
							typeof _ == 'function' ? _.apply(this, arguments) : _,
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
		(z.translateTo = (v, _, y, k, D) => {
			z.transform(
				v,
				function () {
					var T = t.apply(this, arguments),
						O = this.__zoom,
						X = k == null ? M(T) : typeof k == 'function' ? k.apply(this, arguments) : k;
					return n(
						Ur.translate(X[0], X[1])
							.scale(O.k)
							.translate(
								typeof _ == 'function' ? -_.apply(this, arguments) : -_,
								typeof y == 'function' ? -y.apply(this, arguments) : -y,
							),
						T,
						i,
					);
				},
				k,
				D,
			);
		});
	function R(v, _) {
		return (_ = Math.max(a[0], Math.min(a[1], _))), _ === v.k ? v : new Dt(_, v.x, v.y);
	}
	function E(v, _, y) {
		var k = _[0] - y[0] * v.k,
			D = _[1] - y[1] * v.k;
		return k === v.x && D === v.y ? v : new Dt(v.k, k, D);
	}
	function M(v) {
		return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
	}
	function H(v, _, y, k) {
		v.on('start.zoom', function () {
			K(this, arguments).event(k).start();
		})
			.on('interrupt.zoom end.zoom', function () {
				K(this, arguments).event(k).end();
			})
			.tween('zoom', function () {
				var T = arguments,
					O = K(this, T).event(k),
					X = t.apply(this, T),
					Q = y == null ? M(X) : typeof y == 'function' ? y.apply(this, T) : y,
					j = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]),
					G = this.__zoom,
					ee = typeof _ == 'function' ? _.apply(this, T) : _,
					ie = c(G.invert(Q).concat(j / G.k), ee.invert(Q).concat(j / ee.k));
				return (te) => {
					if (te === 1) te = ee;
					else {
						var ae = ie(te),
							ye = j / ae[2];
						te = new Dt(ye, Q[0] - ae[0] * ye, Q[1] - ae[1] * ye);
					}
					O.zoom(null, te);
				};
			});
	}
	function K(v, _, y) {
		return (!y && v.__zooming) || new U(v, _);
	}
	function U(v, _) {
		(this.that = v),
			(this.args = _),
			(this.active = 0),
			(this.sourceEvent = null),
			(this.extent = t.apply(v, _)),
			(this.taps = 0);
	}
	U.prototype = {
		event: function (v) {
			return v && (this.sourceEvent = v), this;
		},
		start: function () {
			return ++this.active === 1 && ((this.that.__zooming = this), this.emit('start')), this;
		},
		zoom: function (v, _) {
			return (
				this.mouse && v !== 'mouse' && (this.mouse[1] = _.invert(this.mouse[0])),
				this.touch0 && v !== 'touch' && (this.touch0[1] = _.invert(this.touch0[0])),
				this.touch1 && v !== 'touch' && (this.touch1[1] = _.invert(this.touch1[0])),
				(this.that.__zoom = _),
				this.emit('zoom'),
				this
			);
		},
		end: function () {
			return --this.active === 0 && (delete this.that.__zooming, this.emit('end')), this;
		},
		emit: function (v) {
			var _ = xt(this.that).datum();
			u.call(
				v,
				this.that,
				new dd(v, {
					sourceEvent: this.sourceEvent,
					target: z,
					transform: this.that.__zoom,
					dispatch: u,
				}),
				_,
			);
		},
	};
	function J(v, ..._) {
		if (!e.apply(this, arguments)) return;
		var y = K(this, _).event(v),
			k = this.__zoom,
			D = Math.max(a[0], Math.min(a[1], k.k * 2 ** r.apply(this, arguments))),
			T = Et(v);
		if (y.wheel)
			(y.mouse[0][0] !== T[0] || y.mouse[0][1] !== T[1]) &&
				(y.mouse[1] = k.invert((y.mouse[0] = T))),
				clearTimeout(y.wheel);
		else {
			if (k.k === D) return;
			(y.mouse = [T, k.invert(T)]), Mr(this), y.start();
		}
		Wn(v),
			(y.wheel = setTimeout(O, m)),
			y.zoom('mouse', n(E(R(k, D), y.mouse[0], y.mouse[1]), y.extent, i));
		function O() {
			(y.wheel = null), y.end();
		}
	}
	function F(v, ..._) {
		if (d || !e.apply(this, arguments)) return;
		var y = v.currentTarget,
			k = K(this, _, !0).event(v),
			D = xt(v.view).on('mousemove.zoom', Q, !0).on('mouseup.zoom', j, !0),
			T = Et(v, y),
			O = v.clientX,
			X = v.clientY;
		fa(v.view), ao(v), (k.mouse = [T, this.__zoom.invert(T)]), Mr(this), k.start();
		function Q(G) {
			if ((Wn(G), !k.moved)) {
				var ee = G.clientX - O,
					ie = G.clientY - X;
				k.moved = ee * ee + ie * ie > x;
			}
			k.event(G).zoom(
				'mouse',
				n(E(k.that.__zoom, (k.mouse[0] = Et(G, y)), k.mouse[1]), k.extent, i),
			);
		}
		function j(G) {
			D.on('mousemove.zoom mouseup.zoom', null), ha(G.view, k.moved), Wn(G), k.event(G).end();
		}
	}
	function re(v, ..._) {
		if (e.apply(this, arguments)) {
			var y = this.__zoom,
				k = Et(v.changedTouches ? v.changedTouches[0] : v, this),
				D = y.invert(k),
				T = y.k * (v.shiftKey ? 0.5 : 2),
				O = n(E(R(y, T), k, D), t.apply(this, _), i);
			Wn(v),
				l > 0
					? xt(this).transition().duration(l).call(H, O, k, v)
					: xt(this).call(z.transform, O, k, v);
		}
	}
	function N(v, ..._) {
		if (e.apply(this, arguments)) {
			var y = v.touches,
				k = y.length,
				D = K(this, _, v.changedTouches.length === k).event(v),
				T,
				O,
				X,
				Q;
			for (ao(v), O = 0; O < k; ++O)
				(X = y[O]),
					(Q = Et(X, this)),
					(Q = [Q, this.__zoom.invert(Q), X.identifier]),
					D.touch0
						? !D.touch1 && D.touch0[2] !== Q[2] && ((D.touch1 = Q), (D.taps = 0))
						: ((D.touch0 = Q), (T = !0), (D.taps = 1 + !!f));
			f && (f = clearTimeout(f)),
				T &&
					(D.taps < 2 &&
						((h = Q[0]),
						(f = setTimeout(() => {
							f = null;
						}, g))),
					Mr(this),
					D.start());
		}
	}
	function b(v, ..._) {
		if (this.__zooming) {
			var y = K(this, _).event(v),
				k = v.changedTouches,
				D = k.length,
				T,
				O,
				X,
				Q;
			for (Wn(v), T = 0; T < D; ++T)
				(O = k[T]),
					(X = Et(O, this)),
					y.touch0 && y.touch0[2] === O.identifier
						? (y.touch0[0] = X)
						: y.touch1 && y.touch1[2] === O.identifier && (y.touch1[0] = X);
			if (((O = y.that.__zoom), y.touch1)) {
				var j = y.touch0[0],
					G = y.touch0[1],
					ee = y.touch1[0],
					ie = y.touch1[1],
					te = (te = ee[0] - j[0]) * te + (te = ee[1] - j[1]) * te,
					ae = (ae = ie[0] - G[0]) * ae + (ae = ie[1] - G[1]) * ae;
				(O = R(O, Math.sqrt(te / ae))),
					(X = [(j[0] + ee[0]) / 2, (j[1] + ee[1]) / 2]),
					(Q = [(G[0] + ie[0]) / 2, (G[1] + ie[1]) / 2]);
			} else if (y.touch0) (X = y.touch0[0]), (Q = y.touch0[1]);
			else return;
			y.zoom('touch', n(E(O, X, Q), y.extent, i));
		}
	}
	function A(v, ..._) {
		if (this.__zooming) {
			var y = K(this, _).event(v),
				k = v.changedTouches,
				D = k.length,
				T,
				O;
			for (
				ao(v),
					d && clearTimeout(d),
					d = setTimeout(() => {
						d = null;
					}, g),
					T = 0;
				T < D;
				++T
			)
				(O = k[T]),
					y.touch0 && y.touch0[2] === O.identifier
						? delete y.touch0
						: y.touch1 && y.touch1[2] === O.identifier && delete y.touch1;
			if ((y.touch1 && !y.touch0 && ((y.touch0 = y.touch1), delete y.touch1), y.touch0))
				y.touch0[1] = this.__zoom.invert(y.touch0[0]);
			else if (
				(y.end(), y.taps === 2 && ((O = Et(O, this)), Math.hypot(h[0] - O[0], h[1] - O[1]) < C))
			) {
				var X = xt(this).on('dblclick.zoom');
				X && X.apply(this, arguments);
			}
		}
	}
	return (
		(z.wheelDelta = function (v) {
			return arguments.length ? ((r = typeof v == 'function' ? v : wr(+v)), z) : r;
		}),
		(z.filter = function (v) {
			return arguments.length ? ((e = typeof v == 'function' ? v : wr(!!v)), z) : e;
		}),
		(z.touchable = function (v) {
			return arguments.length ? ((o = typeof v == 'function' ? v : wr(!!v)), z) : o;
		}),
		(z.extent = function (v) {
			return arguments.length
				? ((t =
						typeof v == 'function'
							? v
							: wr([
									[+v[0][0], +v[0][1]],
									[+v[1][0], +v[1][1]],
								])),
					z)
				: t;
		}),
		(z.scaleExtent = function (v) {
			return arguments.length ? ((a[0] = +v[0]), (a[1] = +v[1]), z) : [a[0], a[1]];
		}),
		(z.translateExtent = function (v) {
			return arguments.length
				? ((i[0][0] = +v[0][0]),
					(i[1][0] = +v[1][0]),
					(i[0][1] = +v[0][1]),
					(i[1][1] = +v[1][1]),
					z)
				: [
						[i[0][0], i[0][1]],
						[i[1][0], i[1][1]],
					];
		}),
		(z.constrain = function (v) {
			return arguments.length ? ((n = v), z) : n;
		}),
		(z.duration = function (v) {
			return arguments.length ? ((l = +v), z) : l;
		}),
		(z.interpolate = function (v) {
			return arguments.length ? ((c = v), z) : c;
		}),
		(z.on = function () {
			var v = u.on.apply(u, arguments);
			return v === u ? z : v;
		}),
		(z.clickDistance = function (v) {
			return arguments.length ? ((x = (v = +v) * v), z) : Math.sqrt(x);
		}),
		(z.tapDistance = function (v) {
			return arguments.length ? ((C = +v), z) : C;
		}),
		z
	);
}
const dn = {
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
	Co = [
		[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
		[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
	],
	Na = ['Enter', ' ', 'Escape'],
	wd = {
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
var On;
((e) => {
	(e.Strict = 'strict'), (e.Loose = 'loose');
})(On || (On = {}));
var Pn;
((e) => {
	(e.Free = 'free'), (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal');
})(Pn || (Pn = {}));
var Hr;
((e) => {
	(e.Partial = 'partial'), (e.Full = 'full');
})(Hr || (Hr = {}));
const Eo = {
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
var Xt;
((e) => {
	(e.Bezier = 'default'),
		(e.Straight = 'straight'),
		(e.Step = 'step'),
		(e.SmoothStep = 'smoothstep'),
		(e.SimpleBezier = 'simplebezier');
})(Xt || (Xt = {}));
var Rr;
((e) => {
	(e.Arrow = 'arrow'), (e.ArrowClosed = 'arrowclosed');
})(Rr || (Rr = {}));
var ce;
((e) => {
	(e.Left = 'left'), (e.Top = 'top'), (e.Right = 'right'), (e.Bottom = 'bottom');
})(ce || (ce = {}));
const Si = { [ce.Left]: ce.Right, [ce.Right]: ce.Left, [ce.Top]: ce.Bottom, [ce.Bottom]: ce.Top };
function xd(e, t) {
	if (!e && !t) return !0;
	if (!e || !t || e.size !== t.size) return !1;
	if (!e.size && !t.size) return !0;
	for (const n of e.keys()) if (!t.has(n)) return !1;
	return !0;
}
function Ci(e, t, n) {
	if (!n) return;
	const r = [];
	e.forEach((o, a) => {
		(t != null && t.has(a)) || r.push(o);
	}),
		r.length && n(r);
}
function bd(e) {
	return e === null ? null : e ? 'valid' : 'invalid';
}
const Pa = (e) => 'id' in e && 'source' in e && 'target' in e,
	pd = (e) => 'id' in e && 'position' in e && !('source' in e) && !('target' in e),
	Fo = (e) => 'id' in e && 'internals' in e && !('source' in e) && !('target' in e),
	cr = (e, t = [0, 0]) => {
		const { width: n, height: r } = yn(e),
			o = e.origin ?? t,
			a = n * o[0],
			i = r * o[1];
		return { x: e.position.x - a, y: e.position.y - i };
	},
	_d = (e, t = { nodeOrigin: [0, 0] }) => {
		if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
		const n = e.reduce(
			(r, o) => {
				const a = typeof o == 'string';
				let i = !t.nodeLookup && !a ? o : void 0;
				t.nodeLookup && (i = a ? t.nodeLookup.get(o) : Fo(o) ? o : t.nodeLookup.get(o.id));
				const l = i ? Lr(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
				return jr(r, l);
			},
			{ x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
		);
		return Qr(n);
	},
	Jr = (e, t = {}) => {
		let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
			r = !1;
		return (
			e.forEach((o) => {
				(t.filter === void 0 || t.filter(o)) && ((n = jr(n, Lr(o))), (r = !0));
			}),
			r ? Qr(n) : { x: 0, y: 0, width: 0, height: 0 }
		);
	},
	Yo = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
		const l = { ...Bn(t, [n, r, o]), width: t.width / o, height: t.height / o },
			c = [];
		for (const u of e.values()) {
			const { measured: f, selectable: h = !0, hidden: d = !1 } = u;
			if ((i && !h) || d) continue;
			const g = f.width ?? u.width ?? u.initialWidth ?? null,
				m = f.height ?? u.height ?? u.initialHeight ?? null,
				x = tr(l, Hn(u)),
				C = (g ?? 0) * (m ?? 0),
				z = a && x > 0;
			(!u.internals.handleBounds || z || x >= C || u.dragging) && c.push(u);
		}
		return c;
	},
	kd = (e, t) => {
		const n = new Set();
		return (
			e.forEach((r) => {
				n.add(r.id);
			}),
			t.filter((r) => n.has(r.source) || n.has(r.target))
		);
	};
function Sd(e, t) {
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
async function Cd({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
	if (e.size === 0) return !0;
	const l = Sd(e, i),
		c = Jr(l),
		u = Wo(
			c,
			t,
			n,
			(i == null ? void 0 : i.minZoom) ?? o,
			(i == null ? void 0 : i.maxZoom) ?? a,
			(i == null ? void 0 : i.padding) ?? 0.1,
		);
	return (
		await r.setViewport(u, {
			duration: i == null ? void 0 : i.duration,
			ease: i == null ? void 0 : i.ease,
			interpolate: i == null ? void 0 : i.interpolate,
		}),
		!0
	);
}
function Aa({
	nodeId: e,
	nextPosition: t,
	nodeLookup: n,
	nodeOrigin: r = [0, 0],
	nodeExtent: o,
	onError: a,
}) {
	const i = n.get(e),
		l = i.parentId ? n.get(i.parentId) : void 0,
		{ x: c, y: u } = l ? l.internals.positionAbsolute : { x: 0, y: 0 },
		f = i.origin ?? r;
	let h = i.extent || o;
	if (i.extent === 'parent' && !i.expandParent)
		if (!l) a == null || a('005', dn.error005());
		else {
			const g = l.measured.width,
				m = l.measured.height;
			g &&
				m &&
				(h = [
					[c, u],
					[c + g, u + m],
				]);
		}
	else
		l &&
			Ln(i.extent) &&
			(h = [
				[i.extent[0][0] + c, i.extent[0][1] + u],
				[i.extent[1][0] + c, i.extent[1][1] + u],
			]);
	const d = Ln(h) ? fn(t, h, i.measured) : t;
	return (
		(i.measured.width === void 0 || i.measured.height === void 0) &&
			(a == null || a('015', dn.error015())),
		{
			position: {
				x: d.x - c + (i.measured.width ?? 0) * f[0],
				y: d.y - u + (i.measured.height ?? 0) * f[1],
			},
			positionAbsolute: d,
		}
	);
}
async function Ed({
	nodesToRemove: e = [],
	edgesToRemove: t = [],
	nodes: n,
	edges: r,
	onBeforeDelete: o,
}) {
	const a = new Set(e.map((d) => d.id)),
		i = [];
	for (const d of n) {
		if (d.deletable === !1) continue;
		const g = a.has(d.id),
			m = !g && d.parentId && i.find((x) => x.id === d.parentId);
		(g || m) && i.push(d);
	}
	const l = new Set(t.map((d) => d.id)),
		c = r.filter((d) => d.deletable !== !1),
		f = kd(i, c);
	for (const d of c) l.has(d.id) && !f.find((m) => m.id === d.id) && f.push(d);
	if (!o) return { edges: f, nodes: i };
	const h = await o({ nodes: i, edges: f });
	return typeof h == 'boolean' ? (h ? { edges: f, nodes: i } : { edges: [], nodes: [] }) : h;
}
const Dn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
	fn = (e = { x: 0, y: 0 }, t, n) => ({
		x: Dn(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
		y: Dn(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0)),
	});
function za(e, t, n) {
	const { width: r, height: o } = yn(n),
		{ x: a, y: i } = n.internals.positionAbsolute;
	return fn(
		e,
		[
			[a, i],
			[a + r, i + o],
		],
		t,
	);
}
const Ei = (e, t, n) =>
		e < t ? Dn(Math.abs(e - t), 1, t) / t : e > n ? -Dn(Math.abs(e - n), 1, t) / t : 0,
	Xo = (e, t, n = 15, r = 40) => {
		const o = Ei(e.x, r, t.width - r) * n,
			a = Ei(e.y, r, t.height - r) * n;
		return [o, a];
	},
	jr = (e, t) => ({
		x: Math.min(e.x, t.x),
		y: Math.min(e.y, t.y),
		x2: Math.max(e.x2, t.x2),
		y2: Math.max(e.y2, t.y2),
	}),
	Mo = ({ x: e, y: t, width: n, height: r }) => ({ x: e, y: t, x2: e + n, y2: t + r }),
	Qr = ({ x: e, y: t, x2: n, y2: r }) => ({ x: e, y: t, width: n - e, height: r - t }),
	Hn = (e, t = [0, 0]) => {
		var o, a;
		const { x: n, y: r } = Fo(e) ? e.internals.positionAbsolute : cr(e, t);
		return {
			x: n,
			y: r,
			width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
			height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0,
		};
	},
	Lr = (e, t = [0, 0]) => {
		var o, a;
		const { x: n, y: r } = Fo(e) ? e.internals.positionAbsolute : cr(e, t);
		return {
			x: n,
			y: r,
			x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
			y2: r + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0),
		};
	},
	Md = (e, t) => Qr(jr(Mo(e), Mo(t))),
	tr = (e, t) => {
		const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)),
			r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
		return Math.ceil(n * r);
	},
	Mi = (e) => Ht(e.width) && Ht(e.height) && Ht(e.x) && Ht(e.y),
	Ht = (e) => !isNaN(e) && isFinite(e),
	Ta = (e, t) => (n, r) => {},
	ur = (e, t = [1, 1]) => ({ x: t[0] * Math.round(e.x / t[0]), y: t[1] * Math.round(e.y / t[1]) }),
	Bn = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
		const l = { x: (e - n) / o, y: (t - r) / o };
		return a ? ur(l, i) : l;
	},
	Rn = ({ x: e, y: t }, [n, r, o]) => ({ x: e * o + n, y: t * o + r });
function kn(e, t) {
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
function Nd(e, t, n) {
	if (typeof e == 'string' || typeof e == 'number') {
		const r = kn(e, n),
			o = kn(e, t);
		return { top: r, right: o, bottom: r, left: o, x: o * 2, y: r * 2 };
	}
	if (typeof e == 'object') {
		const r = kn(e.top ?? e.y ?? 0, n),
			o = kn(e.bottom ?? e.y ?? 0, n),
			a = kn(e.left ?? e.x ?? 0, t),
			i = kn(e.right ?? e.x ?? 0, t);
		return { top: r, right: i, bottom: o, left: a, x: a + i, y: r + o };
	}
	return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Pd(e, t, n, r, o, a) {
	const { x: i, y: l } = Rn(e, [t, n, r]),
		{ x: c, y: u } = Rn({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]),
		f = o - c,
		h = a - u;
	return { left: Math.floor(i), top: Math.floor(l), right: Math.floor(f), bottom: Math.floor(h) };
}
const Wo = (e, t, n, r, o, a) => {
		const i = Nd(a, t, n),
			l = (t - i.x) / e.width,
			c = (n - i.y) / e.height,
			u = Math.min(l, c),
			f = Dn(u, r, o),
			h = e.x + e.width / 2,
			d = e.y + e.height / 2,
			g = t / 2 - h * f,
			m = n / 2 - d * f,
			x = Pd(e, g, m, f, t, n),
			C = {
				left: Math.min(x.left - i.left, 0),
				top: Math.min(x.top - i.top, 0),
				right: Math.min(x.right - i.right, 0),
				bottom: Math.min(x.bottom - i.bottom, 0),
			};
		return { x: g - C.left + C.right, y: m - C.top + C.bottom, zoom: f };
	},
	Vr = () => {
		var e;
		return (
			typeof navigator < 'u' &&
			((e = navigator == null ? void 0 : navigator.userAgent) == null
				? void 0
				: e.indexOf('Mac')) >= 0
		);
	};
function Ln(e) {
	return e != null && e !== 'parent';
}
function yn(e) {
	var t, n;
	return {
		width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
		height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0,
	};
}
function Ad(e) {
	var t, n;
	return (
		(((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 &&
		(((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0
	);
}
function zd(e, t = { width: 0, height: 0 }, n, r, o) {
	const a = { ...e },
		i = r.get(n);
	if (i) {
		const l = i.origin || o;
		(a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * l[0]),
			(a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * l[1]);
	}
	return a;
}
function Td(e) {
	return { ...wd, ...(e || {}) };
}
function so(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
	const { x: a, y: i } = pt(e),
		l = Bn(
			{ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) },
			r,
		),
		{ x: c, y: u } = n ? ur(l, t) : l;
	return { xSnapped: c, ySnapped: u, ...l };
}
const Ia = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
	Oa = (e) => {
		var t;
		return (
			((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) ||
			(window == null ? void 0 : window.document)
		);
	},
	Id = ['INPUT', 'SELECT', 'TEXTAREA'];
function Da(e) {
	var r, o;
	const t =
		((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
	return (t == null ? void 0 : t.nodeType) !== 1
		? !1
		: Id.includes(t.nodeName) || t.hasAttribute('contenteditable') || !!t.closest('.nokey');
}
const Ha = (e) => 'clientX' in e,
	pt = (e, t) => {
		var a, i;
		const n = Ha(e),
			r = n ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX,
			o = n ? e.clientY : (i = e.touches) == null ? void 0 : i[0].clientY;
		return {
			x: r - ((t == null ? void 0 : t.left) ?? 0),
			y: o - ((t == null ? void 0 : t.top) ?? 0),
		};
	},
	Ni = (e, t, n, r, o) => {
		const a = t.querySelectorAll(`.${e}`);
		return !a || !a.length
			? null
			: Array.from(a).map((i) => {
					const l = i.getBoundingClientRect();
					return {
						id: i.getAttribute('data-handleid'),
						type: e,
						nodeId: o,
						position: i.getAttribute('data-handlepos'),
						x: (l.left - n.left) / r,
						y: (l.top - n.top) / r,
						...Ia(i),
					};
				});
	};
function Od({
	sourceX: e,
	sourceY: t,
	targetX: n,
	targetY: r,
	sourceControlX: o,
	sourceControlY: a,
	targetControlX: i,
	targetControlY: l,
}) {
	const c = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125,
		u = t * 0.125 + a * 0.375 + l * 0.375 + r * 0.125,
		f = Math.abs(c - e),
		h = Math.abs(u - t);
	return [c, u, f, h];
}
function xr(e, t) {
	return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Pi({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
	switch (e) {
		case ce.Left:
			return [t - xr(t - r, a), n];
		case ce.Right:
			return [t + xr(r - t, a), n];
		case ce.Top:
			return [t, n - xr(n - o, a)];
		case ce.Bottom:
			return [t, n + xr(o - n, a)];
	}
}
function Ra({
	sourceX: e,
	sourceY: t,
	sourcePosition: n = ce.Bottom,
	targetX: r,
	targetY: o,
	targetPosition: a = ce.Top,
	curvature: i = 0.25,
}) {
	const [l, c] = Pi({ pos: n, x1: e, y1: t, x2: r, y2: o, c: i }),
		[u, f] = Pi({ pos: a, x1: r, y1: o, x2: e, y2: t, c: i }),
		[h, d, g, m] = Od({
			sourceX: e,
			sourceY: t,
			targetX: r,
			targetY: o,
			sourceControlX: l,
			sourceControlY: c,
			targetControlX: u,
			targetControlY: f,
		});
	return [`M${e},${t} C${l},${c} ${u},${f} ${r},${o}`, h, d, g, m];
}
function La({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	const o = Math.abs(n - e) / 2,
		a = n < e ? n + o : n - o,
		i = Math.abs(r - t) / 2,
		l = r < t ? r + i : r - i;
	return [a, l, o, i];
}
function Dd({
	sourceNode: e,
	targetNode: t,
	selected: n = !1,
	zIndex: r = 0,
	elevateOnSelect: o = !1,
	zIndexMode: a = 'basic',
}) {
	if (a === 'manual') return r;
	const i = o && n ? r + 1e3 : r,
		l = Math.max(
			e.parentId || (o && e.selected) ? e.internals.z : 0,
			t.parentId || (o && t.selected) ? t.internals.z : 0,
		);
	return i + l;
}
function Hd({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
	const a = jr(Lr(e), Lr(t));
	a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
	const i = { x: -o[0] / o[2], y: -o[1] / o[2], width: n / o[2], height: r / o[2] };
	return tr(i, Qr(a)) > 0;
}
const Rd = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
		`xy-edge__${e}${t || ''}-${n}${r || ''}`,
	Ld = (e, t) =>
		t.some(
			(n) =>
				n.source === e.source &&
				n.target === e.target &&
				(n.sourceHandle === e.sourceHandle || (!n.sourceHandle && !e.sourceHandle)) &&
				(n.targetHandle === e.targetHandle || (!n.targetHandle && !e.targetHandle)),
		),
	Vd = (e, t, n = {}) => {
		var a;
		if (!e.source || !e.target)
			return (a = n.onError) == null || a.call(n, '006', dn.error006()), t;
		const r = n.getEdgeId || Rd;
		let o;
		return (
			Pa(e) ? (o = { ...e }) : (o = { ...e, id: r(e) }),
			Ld(o, t)
				? t
				: (o.sourceHandle === null && delete o.sourceHandle,
					o.targetHandle === null && delete o.targetHandle,
					t.concat(o))
		);
	};
function Va({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	const [o, a, i, l] = La({ sourceX: e, sourceY: t, targetX: n, targetY: r });
	return [`M ${e},${t}L ${n},${r}`, o, a, i, l];
}
const Ai = {
		[ce.Left]: { x: -1, y: 0 },
		[ce.Right]: { x: 1, y: 0 },
		[ce.Top]: { x: 0, y: -1 },
		[ce.Bottom]: { x: 0, y: 1 },
	},
	Bd = ({ source: e, sourcePosition: t = ce.Bottom, target: n }) =>
		t === ce.Left || t === ce.Right
			? e.x < n.x
				? { x: 1, y: 0 }
				: { x: -1, y: 0 }
			: e.y < n.y
				? { x: 0, y: 1 }
				: { x: 0, y: -1 },
	zi = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function Kd({
	source: e,
	sourcePosition: t = ce.Bottom,
	target: n,
	targetPosition: r = ce.Top,
	center: o,
	offset: a,
	stepPosition: i,
}) {
	const l = Ai[t],
		c = Ai[r],
		u = { x: e.x + l.x * a, y: e.y + l.y * a },
		f = { x: n.x + c.x * a, y: n.y + c.y * a },
		h = Bd({ source: u, sourcePosition: t, target: f }),
		d = h.x !== 0 ? 'x' : 'y',
		g = h[d];
	let m = [],
		x,
		C;
	const z = { x: 0, y: 0 },
		R = { x: 0, y: 0 },
		[, , E, M] = La({ sourceX: e.x, sourceY: e.y, targetX: n.x, targetY: n.y });
	if (l[d] * c[d] === -1) {
		d === 'x'
			? ((x = o.x ?? u.x + (f.x - u.x) * i), (C = o.y ?? (u.y + f.y) / 2))
			: ((x = o.x ?? (u.x + f.x) / 2), (C = o.y ?? u.y + (f.y - u.y) * i));
		const J = [
				{ x, y: u.y },
				{ x, y: f.y },
			],
			F = [
				{ x: u.x, y: C },
				{ x: f.x, y: C },
			];
		l[d] === g ? (m = d === 'x' ? J : F) : (m = d === 'x' ? F : J);
	} else {
		const J = [{ x: u.x, y: f.y }],
			F = [{ x: f.x, y: u.y }];
		if ((d === 'x' ? (m = l.x === g ? F : J) : (m = l.y === g ? J : F), t === r)) {
			const v = Math.abs(e[d] - n[d]);
			if (v <= a) {
				const _ = Math.min(a - 1, a - v);
				l[d] === g ? (z[d] = (u[d] > e[d] ? -1 : 1) * _) : (R[d] = (f[d] > n[d] ? -1 : 1) * _);
			}
		}
		if (t !== r) {
			const v = d === 'x' ? 'y' : 'x',
				_ = l[d] === c[v],
				y = u[v] > f[v],
				k = u[v] < f[v];
			((l[d] === 1 && ((!_ && y) || (_ && k))) || (l[d] !== 1 && ((!_ && k) || (_ && y)))) &&
				(m = d === 'x' ? J : F);
		}
		const re = { x: u.x + z.x, y: u.y + z.y },
			N = { x: f.x + R.x, y: f.y + R.y },
			b = Math.max(Math.abs(re.x - m[0].x), Math.abs(N.x - m[0].x)),
			A = Math.max(Math.abs(re.y - m[0].y), Math.abs(N.y - m[0].y));
		b >= A ? ((x = (re.x + N.x) / 2), (C = m[0].y)) : ((x = m[0].x), (C = (re.y + N.y) / 2));
	}
	const H = { x: u.x + z.x, y: u.y + z.y },
		K = { x: f.x + R.x, y: f.y + R.y };
	return [
		[
			e,
			...(H.x !== m[0].x || H.y !== m[0].y ? [H] : []),
			...m,
			...(K.x !== m[m.length - 1].x || K.y !== m[m.length - 1].y ? [K] : []),
			n,
		],
		x,
		C,
		E,
		M,
	];
}
function Fd(e, t, n, r) {
	const o = Math.min(zi(e, t) / 2, zi(t, n) / 2, r),
		{ x: a, y: i } = t;
	if ((e.x === a && a === n.x) || (e.y === i && i === n.y)) return `L${a} ${i}`;
	if (e.y === i) {
		const u = e.x < n.x ? -1 : 1,
			f = e.y < n.y ? 1 : -1;
		return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * f}`;
	}
	const l = e.x < n.x ? 1 : -1,
		c = e.y < n.y ? -1 : 1;
	return `L ${a},${i + o * c}Q ${a},${i} ${a + o * l},${i}`;
}
function Zo({
	sourceX: e,
	sourceY: t,
	sourcePosition: n = ce.Bottom,
	targetX: r,
	targetY: o,
	targetPosition: a = ce.Top,
	borderRadius: i = 5,
	centerX: l,
	centerY: c,
	offset: u = 20,
	stepPosition: f = 0.5,
}) {
	const [h, d, g, m, x] = Kd({
		source: { x: e, y: t },
		sourcePosition: n,
		target: { x: r, y: o },
		targetPosition: a,
		center: { x: l, y: c },
		offset: u,
		stepPosition: f,
	});
	let C = `M${h[0].x} ${h[0].y}`;
	for (let z = 1; z < h.length - 1; z++) C += Fd(h[z - 1], h[z], h[z + 1], i);
	return (C += `L${h[h.length - 1].x} ${h[h.length - 1].y}`), [C, d, g, m, x];
}
function Ti(e) {
	var t;
	return (
		e &&
		!!(e.internals.handleBounds || ((t = e.handles) != null && t.length)) &&
		!!(e.measured.width || e.width || e.initialWidth)
	);
}
function Yd(e) {
	var h;
	const { sourceNode: t, targetNode: n } = e;
	if (!Ti(t) || !Ti(n)) return null;
	const r = t.internals.handleBounds || Ii(t.handles),
		o = n.internals.handleBounds || Ii(n.handles),
		a = Oi((r == null ? void 0 : r.source) ?? [], e.sourceHandle),
		i = Oi(
			e.connectionMode === On.Strict
				? ((o == null ? void 0 : o.target) ?? [])
				: ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
			e.targetHandle,
		);
	if (!a || !i)
		return (
			(h = e.onError) == null ||
				h.call(
					e,
					'008',
					dn.error008(a ? 'target' : 'source', {
						id: e.id,
						sourceHandle: e.sourceHandle,
						targetHandle: e.targetHandle,
					}),
				),
			null
		);
	const l = (a == null ? void 0 : a.position) || ce.Bottom,
		c = (i == null ? void 0 : i.position) || ce.Top,
		u = hn(t, a, l),
		f = hn(n, i, c);
	return {
		sourceX: u.x,
		sourceY: u.y,
		targetX: f.x,
		targetY: f.y,
		sourcePosition: l,
		targetPosition: c,
	};
}
function Ii(e) {
	if (!e) return null;
	const t = [],
		n = [];
	for (const r of e)
		(r.width = r.width ?? 1),
			(r.height = r.height ?? 1),
			r.type === 'source' ? t.push(r) : r.type === 'target' && n.push(r);
	return { source: t, target: n };
}
function hn(e, t, n = ce.Left, r = !1) {
	const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x,
		a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y,
		{ width: i, height: l } = t ?? yn(e);
	if (r) return { x: o + i / 2, y: a + l / 2 };
	switch ((t == null ? void 0 : t.position) ?? n) {
		case ce.Top:
			return { x: o + i / 2, y: a };
		case ce.Right:
			return { x: o + i, y: a + l / 2 };
		case ce.Bottom:
			return { x: o + i / 2, y: a + l };
		case ce.Left:
			return { x: o, y: a + l / 2 };
	}
}
function Oi(e, t) {
	return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
}
function No(e, t) {
	return e
		? typeof e == 'string'
			? e
			: `${t ? `${t}__` : ''}${Object.keys(e)
					.sort()
					.map((r) => `${r}=${e[r]}`)
					.join('&')}`
		: '';
}
function Xd(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
	const a = new Set();
	return e
		.reduce(
			(i, l) => (
				[l.markerStart || r, l.markerEnd || o].forEach((c) => {
					if (c && typeof c == 'object') {
						const u = No(c, t);
						a.has(u) || (i.push({ id: u, color: c.color || n, ...c }), a.add(u));
					}
				}),
				i
			),
			[],
		)
		.sort((i, l) => i.id.localeCompare(l.id));
}
const Ba = 1e3,
	Wd = 10,
	qo = {
		nodeOrigin: [0, 0],
		nodeExtent: Co,
		elevateNodesOnSelect: !0,
		zIndexMode: 'basic',
		defaults: {},
	},
	Zd = { ...qo, checkEquality: !0 };
function Go(e, t) {
	const n = { ...e };
	for (const r in t) t[r] !== void 0 && (n[r] = t[r]);
	return n;
}
function qd(e, t, n) {
	const r = Go(qo, n);
	for (const o of e.values())
		if (o.parentId) Jo(o, e, t, r);
		else {
			const a = cr(o, r.nodeOrigin),
				i = Ln(o.extent) ? o.extent : r.nodeExtent,
				l = fn(a, i, yn(o));
			o.internals.positionAbsolute = l;
		}
}
function Gd(e, t) {
	if (!e.handles) return e.measured ? (t == null ? void 0 : t.internals.handleBounds) : void 0;
	const n = [],
		r = [];
	for (const o of e.handles) {
		const a = {
			id: o.id,
			width: o.width ?? 1,
			height: o.height ?? 1,
			nodeId: e.id,
			x: o.x,
			y: o.y,
			position: o.position,
			type: o.type,
		};
		o.type === 'source' ? n.push(a) : o.type === 'target' && r.push(a);
	}
	return { source: n, target: r };
}
function Uo(e) {
	return e === 'manual';
}
function Ud(e, t, n, r = {}) {
	var f, h;
	const o = Go(Zd, r),
		a = { i: 0 },
		i = new Map(t),
		l = o != null && o.elevateNodesOnSelect && !Uo(o.zIndexMode) ? Ba : 0;
	let c = e.length > 0,
		u = !1;
	t.clear(), n.clear();
	for (const d of e) {
		let g = i.get(d.id);
		if (o.checkEquality && d === (g == null ? void 0 : g.internals.userNode)) t.set(d.id, g);
		else {
			const m = cr(d, o.nodeOrigin),
				x = Ln(d.extent) ? d.extent : o.nodeExtent,
				C = fn(m, x, yn(d));
			(g = {
				...o.defaults,
				...d,
				measured: {
					width: (f = d.measured) == null ? void 0 : f.width,
					height: (h = d.measured) == null ? void 0 : h.height,
				},
				internals: {
					positionAbsolute: C,
					handleBounds: Gd(d, g),
					z: Ka(d, l, o.zIndexMode),
					userNode: d,
				},
			}),
				t.set(d.id, g);
		}
		(g.measured === void 0 || g.measured.width === void 0 || g.measured.height === void 0) &&
			!g.hidden &&
			(c = !1),
			d.parentId && Jo(g, t, n, r, a),
			u || (u = d.selected ?? !1);
	}
	return { nodesInitialized: c, hasSelectedNodes: u };
}
function Jd(e, t) {
	if (!e.parentId) return;
	const n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
}
function Jo(e, t, n, r, o) {
	const { elevateNodesOnSelect: a, nodeOrigin: i, nodeExtent: l, zIndexMode: c } = Go(qo, r),
		u = e.parentId,
		f = t.get(u);
	if (!f) {
		console.warn(
			`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
		);
		return;
	}
	Jd(e, n),
		o &&
			!f.parentId &&
			f.internals.rootParentIndex === void 0 &&
			c === 'auto' &&
			((f.internals.rootParentIndex = ++o.i), (f.internals.z = f.internals.z + o.i * Wd)),
		o && f.internals.rootParentIndex !== void 0 && (o.i = f.internals.rootParentIndex);
	const h = a && !Uo(c) ? Ba : 0,
		{ x: d, y: g, z: m } = jd(e, f, i, l, h, c),
		{ positionAbsolute: x } = e.internals,
		C = d !== x.x || g !== x.y;
	(C || m !== e.internals.z) &&
		t.set(e.id, {
			...e,
			internals: { ...e.internals, positionAbsolute: C ? { x: d, y: g } : x, z: m },
		});
}
function Ka(e, t, n) {
	const r = Ht(e.zIndex) ? e.zIndex : 0;
	return Uo(n) ? r : r + (e.selected ? t : 0);
}
function jd(e, t, n, r, o, a) {
	const { x: i, y: l } = t.internals.positionAbsolute,
		c = yn(e),
		u = cr(e, n),
		f = Ln(e.extent) ? fn(u, e.extent, c) : u;
	let h = fn({ x: i + f.x, y: l + f.y }, r, c);
	e.extent === 'parent' && (h = za(h, c, t));
	const d = Ka(e, o, a),
		g = t.internals.z ?? 0;
	return { x: h.x, y: h.y, z: g >= d ? g + 1 : d };
}
function Qd(e, t, n, r = [0, 0]) {
	var i;
	const o = [],
		a = new Map();
	for (const l of e) {
		const c = t.get(l.parentId);
		if (!c) continue;
		const u = ((i = a.get(l.parentId)) == null ? void 0 : i.expandedRect) ?? Hn(c),
			f = Md(u, l.rect);
		a.set(l.parentId, { expandedRect: f, parent: c });
	}
	return (
		a.size > 0 &&
			a.forEach(({ expandedRect: l, parent: c }, u) => {
				var E;
				const f = c.internals.positionAbsolute,
					h = yn(c),
					d = c.origin ?? r,
					g = l.x < f.x ? Math.round(Math.abs(f.x - l.x)) : 0,
					m = l.y < f.y ? Math.round(Math.abs(f.y - l.y)) : 0,
					x = Math.max(h.width, Math.round(l.width)),
					C = Math.max(h.height, Math.round(l.height)),
					z = (x - h.width) * d[0],
					R = (C - h.height) * d[1];
				(g > 0 || m > 0 || z || R) &&
					(o.push({
						id: u,
						type: 'position',
						position: { x: c.position.x - g + z, y: c.position.y - m + R },
					}),
					(E = n.get(u)) == null ||
						E.forEach((M) => {
							e.some((H) => H.id === M.id) ||
								o.push({
									id: M.id,
									type: 'position',
									position: { x: M.position.x + g, y: M.position.y + m },
								});
						})),
					(h.width < l.width || h.height < l.height || g || m) &&
						o.push({
							id: u,
							type: 'dimensions',
							setAttributes: !0,
							dimensions: { width: x + (g ? d[0] * g - z : 0), height: C + (m ? d[1] * m - R : 0) },
						});
			}),
		o
	);
}
function $d(e, t, n, r, o, a, i) {
	const l = r == null ? void 0 : r.querySelector('.xyflow__viewport');
	let c = !1;
	if (!l) return { changes: [], updatedInternals: c };
	const u = [],
		f = window.getComputedStyle(l),
		{ m22: h } = new window.DOMMatrixReadOnly(f.transform),
		d = [];
	for (const g of e.values()) {
		const m = t.get(g.id);
		if (!m) continue;
		if (m.hidden) {
			t.set(m.id, { ...m, internals: { ...m.internals, handleBounds: void 0 } }), (c = !0);
			continue;
		}
		const x = Ia(g.nodeElement),
			C = m.measured.width !== x.width || m.measured.height !== x.height;
		if (x.width && x.height && (C || !m.internals.handleBounds || g.force)) {
			const R = g.nodeElement.getBoundingClientRect(),
				E = Ln(m.extent) ? m.extent : a;
			let { positionAbsolute: M } = m.internals;
			m.parentId && m.extent === 'parent'
				? (M = za(M, x, t.get(m.parentId)))
				: E && (M = fn(M, E, x));
			const H = {
				...m,
				measured: x,
				internals: {
					...m.internals,
					positionAbsolute: M,
					handleBounds: {
						source: Ni('source', g.nodeElement, R, h, m.id),
						target: Ni('target', g.nodeElement, R, h, m.id),
					},
				},
			};
			t.set(m.id, H),
				m.parentId && Jo(H, t, n, { nodeOrigin: o, zIndexMode: i }),
				(c = !0),
				C &&
					(u.push({ id: m.id, type: 'dimensions', dimensions: x }),
					m.expandParent &&
						m.parentId &&
						d.push({ id: m.id, parentId: m.parentId, rect: Hn(H, o) }));
		}
	}
	if (d.length > 0) {
		const g = Qd(d, t, n, o);
		u.push(...g);
	}
	return { changes: u, updatedInternals: c };
}
async function ef({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
	if (!t || (!e.x && !e.y)) return !1;
	const i = await t.setViewportConstrained(
		{ x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
		[
			[0, 0],
			[o, a],
		],
		r,
	);
	return !!i && (i.x !== n[0] || i.y !== n[1] || i.k !== n[2]);
}
function Di(e, t, n, r, o, a) {
	let i = o;
	const l = r.get(i) || new Map();
	r.set(i, l.set(n, t)), (i = `${o}-${e}`);
	const c = r.get(i) || new Map();
	if ((r.set(i, c.set(n, t)), a)) {
		i = `${o}-${e}-${a}`;
		const u = r.get(i) || new Map();
		r.set(i, u.set(n, t));
	}
}
function tf(e, t, n) {
	e.clear(), t.clear();
	for (const r of n) {
		const { source: o, target: a, sourceHandle: i = null, targetHandle: l = null } = r,
			c = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: l },
			u = `${o}-${i}--${a}-${l}`,
			f = `${a}-${l}--${o}-${i}`;
		Di('source', c, f, e, o, i), Di('target', c, u, e, a, l), t.set(r.id, r);
	}
}
function Fa(e, t) {
	if (!e.parentId) return !1;
	const n = t.get(e.parentId);
	return n ? (n.selected ? !0 : Fa(n, t)) : !1;
}
function Hi(e, t, n) {
	var o;
	let r = e;
	do {
		if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t)) return !0;
		if (r === n) return !1;
		r = r == null ? void 0 : r.parentElement;
	} while (r);
	return !1;
}
function nf(e, t, n, r) {
	const o = new Map();
	for (const [a, i] of e)
		if (
			(i.selected || i.id === r) &&
			(!i.parentId || !Fa(i, e)) &&
			(i.draggable || (t && typeof i.draggable > 'u'))
		) {
			const l = e.get(a);
			l &&
				o.set(a, {
					id: a,
					position: l.position || { x: 0, y: 0 },
					distance: {
						x: n.x - l.internals.positionAbsolute.x,
						y: n.y - l.internals.positionAbsolute.y,
					},
					extent: l.extent,
					parentId: l.parentId,
					origin: l.origin,
					expandParent: l.expandParent,
					internals: { positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 } },
					measured: { width: l.measured.width ?? 0, height: l.measured.height ?? 0 },
				});
		}
	return o;
}
function lo({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
	var i, l, c;
	const o = [];
	for (const [u, f] of t) {
		const h = (i = n.get(u)) == null ? void 0 : i.internals.userNode;
		h && o.push({ ...h, position: f.position, dragging: r });
	}
	if (!e) return [o[0], o];
	const a = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
	return [
		a
			? {
					...a,
					position: ((c = t.get(e)) == null ? void 0 : c.position) || a.position,
					dragging: r,
				}
			: o[0],
		o,
	];
}
function rf({ dragItems: e, snapGrid: t, x: n, y: r }) {
	const o = e.values().next().value;
	if (!o) return null;
	const a = { x: n - o.distance.x, y: r - o.distance.y },
		i = ur(a, t);
	return { x: i.x - a.x, y: i.y - a.y };
}
function of({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
	let a = { x: null, y: null },
		i = 0,
		l = new Map(),
		c = !1,
		u = { x: 0, y: 0 },
		f = null,
		h = !1,
		d = null,
		g = !1,
		m = !1,
		x = null;
	function C({
		noDragClassName: R,
		handleSelector: E,
		domNode: M,
		isSelectable: H,
		nodeId: K,
		nodeClickDistance: U = 0,
	}) {
		d = xt(M);
		function J({ x: b, y: A }) {
			const {
				nodeLookup: v,
				nodeExtent: _,
				snapGrid: y,
				snapToGrid: k,
				nodeOrigin: D,
				onNodeDrag: T,
				onSelectionDrag: O,
				onError: X,
				updateNodePositions: Q,
			} = t();
			a = { x: b, y: A };
			let j = !1;
			const G = l.size > 1,
				ee = G && _ ? Mo(Jr(l)) : null,
				ie = G && k ? rf({ dragItems: l, snapGrid: y, x: b, y: A }) : null;
			for (const [te, ae] of l) {
				if (!v.has(te)) continue;
				let ye = { x: b - ae.distance.x, y: A - ae.distance.y };
				k && (ye = ie ? { x: Math.round(ye.x + ie.x), y: Math.round(ye.y + ie.y) } : ur(ye, y));
				let Pe = null;
				if (G && _ && !ae.extent && ee) {
					const { positionAbsolute: _e } = ae.internals,
						De = _e.x - ee.x + _[0][0],
						Be = _e.x + ae.measured.width - ee.x2 + _[1][0],
						Je = _e.y - ee.y + _[0][1],
						$e = _e.y + ae.measured.height - ee.y2 + _[1][1];
					Pe = [
						[De, Je],
						[Be, $e],
					];
				}
				const { position: he, positionAbsolute: Ie } = Aa({
					nodeId: te,
					nextPosition: ye,
					nodeLookup: v,
					nodeExtent: Pe || _,
					nodeOrigin: D,
					onError: X,
				});
				(j = j || ae.position.x !== he.x || ae.position.y !== he.y),
					(ae.position = he),
					(ae.internals.positionAbsolute = Ie);
			}
			if (((m = m || j), !!j && (Q(l, !0), x && (r || T || (!K && O))))) {
				const [te, ae] = lo({ nodeId: K, dragItems: l, nodeLookup: v });
				r == null || r(x, l, te, ae), T == null || T(x, te, ae), K || O == null || O(x, ae);
			}
		}
		async function F() {
			if (!f) return;
			const { transform: b, panBy: A, autoPanSpeed: v, autoPanOnNodeDrag: _ } = t();
			if (!_) {
				(c = !1), cancelAnimationFrame(i);
				return;
			}
			const [y, k] = Xo(u, f, v);
			(y !== 0 || k !== 0) &&
				((a.x = (a.x ?? 0) - y / b[2]),
				(a.y = (a.y ?? 0) - k / b[2]),
				(await A({ x: y, y: k })) && J(a)),
				(i = requestAnimationFrame(F));
		}
		function re(b) {
			var G;
			const {
				nodeLookup: A,
				multiSelectionActive: v,
				nodesDraggable: _,
				transform: y,
				snapGrid: k,
				snapToGrid: D,
				selectNodesOnDrag: T,
				onNodeDragStart: O,
				onSelectionDragStart: X,
				unselectNodesAndEdges: Q,
			} = t();
			(h = !0),
				(!T || !H) && !v && K && (((G = A.get(K)) != null && G.selected) || Q()),
				H && T && K && (e == null || e(K));
			const j = so(b.sourceEvent, { transform: y, snapGrid: k, snapToGrid: D, containerBounds: f });
			if (((a = j), (l = nf(A, _, j, K)), l.size > 0 && (n || O || (!K && X)))) {
				const [ee, ie] = lo({ nodeId: K, dragItems: l, nodeLookup: A });
				n == null || n(b.sourceEvent, l, ee, ie),
					O == null || O(b.sourceEvent, ee, ie),
					K || X == null || X(b.sourceEvent, ie);
			}
		}
		const N = Sc()
			.clickDistance(U)
			.on('start', (b) => {
				const { domNode: A, nodeDragThreshold: v, transform: _, snapGrid: y, snapToGrid: k } = t();
				(f = (A == null ? void 0 : A.getBoundingClientRect()) || null),
					(g = !1),
					(m = !1),
					(x = b.sourceEvent),
					v === 0 && re(b),
					(a = so(b.sourceEvent, { transform: _, snapGrid: y, snapToGrid: k, containerBounds: f })),
					(u = pt(b.sourceEvent, f));
			})
			.on('drag', (b) => {
				const {
						autoPanOnNodeDrag: A,
						transform: v,
						snapGrid: _,
						snapToGrid: y,
						nodeDragThreshold: k,
						nodeLookup: D,
					} = t(),
					T = so(b.sourceEvent, { transform: v, snapGrid: _, snapToGrid: y, containerBounds: f });
				if (
					((x = b.sourceEvent),
					((b.sourceEvent.type === 'touchmove' && b.sourceEvent.touches.length > 1) ||
						(K && !D.has(K))) &&
						(g = !0),
					!g)
				) {
					if ((!c && A && h && ((c = !0), F()), !h)) {
						const O = pt(b.sourceEvent, f),
							X = O.x - u.x,
							Q = O.y - u.y;
						Math.sqrt(X * X + Q * Q) > k && re(b);
					}
					(a.x !== T.xSnapped || a.y !== T.ySnapped) &&
						l &&
						h &&
						((u = pt(b.sourceEvent, f)), J(T));
				}
			})
			.on('end', (b) => {
				if (!h || g) {
					g && l.size > 0 && t().updateNodePositions(l, !1);
					return;
				}
				if (((c = !1), (h = !1), cancelAnimationFrame(i), l.size > 0)) {
					const {
						nodeLookup: A,
						updateNodePositions: v,
						onNodeDragStop: _,
						onSelectionDragStop: y,
					} = t();
					if ((m && (v(l, !1), (m = !1)), o || _ || (!K && y))) {
						const [k, D] = lo({ nodeId: K, dragItems: l, nodeLookup: A, dragging: !1 });
						o == null || o(b.sourceEvent, l, k, D),
							_ == null || _(b.sourceEvent, k, D),
							K || y == null || y(b.sourceEvent, D);
					}
				}
			})
			.filter((b) => {
				const A = b.target;
				return !b.button && (!R || !Hi(A, `.${R}`, M)) && (!E || Hi(A, E, M));
			});
		d.call(N);
	}
	function z() {
		d == null || d.on('.drag', null);
	}
	return { update: C, destroy: z };
}
function af(e, t, n) {
	const r = [],
		o = { x: e.x - n, y: e.y - n, width: n * 2, height: n * 2 };
	for (const a of t.values()) tr(o, Hn(a)) > 0 && r.push(a);
	return r;
}
const sf = 250;
function lf(e, t, n, r) {
	var l, c;
	let o = [],
		a = 1 / 0;
	const i = af(e, n, t + sf);
	for (const u of i) {
		const f = [
			...(((l = u.internals.handleBounds) == null ? void 0 : l.source) ?? []),
			...(((c = u.internals.handleBounds) == null ? void 0 : c.target) ?? []),
		];
		for (const h of f) {
			if (r.nodeId === h.nodeId && r.type === h.type && r.id === h.id) continue;
			const { x: d, y: g } = hn(u, h, h.position, !0),
				m = Math.sqrt((d - e.x) ** 2 + (g - e.y) ** 2);
			m > t ||
				(m < a ? ((o = [{ ...h, x: d, y: g }]), (a = m)) : m === a && o.push({ ...h, x: d, y: g }));
		}
	}
	if (!o.length) return null;
	if (o.length > 1) {
		const u = r.type === 'source' ? 'target' : 'source';
		return o.find((f) => f.type === u) ?? o[0];
	}
	return o[0];
}
function Ya(e, t, n, r, o, a = !1) {
	var u, f, h;
	const i = r.get(e);
	if (!i) return null;
	const l =
			o === 'strict'
				? (u = i.internals.handleBounds) == null
					? void 0
					: u[t]
				: [
						...(((f = i.internals.handleBounds) == null ? void 0 : f.source) ?? []),
						...(((h = i.internals.handleBounds) == null ? void 0 : h.target) ?? []),
					],
		c = (n ? (l == null ? void 0 : l.find((d) => d.id === n)) : l == null ? void 0 : l[0]) ?? null;
	return c && a ? { ...c, ...hn(i, c, c.position, !0) } : c;
}
function Xa(e, t) {
	return (
		e ||
		(t != null && t.classList.contains('target')
			? 'target'
			: t != null && t.classList.contains('source')
				? 'source'
				: null)
	);
}
function cf(e, t) {
	let n = null;
	return t ? (n = !0) : e && !t && (n = !1), n;
}
const Wa = () => !0;
function uf(
	e,
	{
		connectionMode: t,
		connectionRadius: n,
		handleId: r,
		nodeId: o,
		edgeUpdaterType: a,
		isTarget: i,
		domNode: l,
		nodeLookup: c,
		lib: u,
		autoPanOnConnect: f,
		flowId: h,
		panBy: d,
		cancelConnection: g,
		onConnectStart: m,
		onConnect: x,
		onConnectEnd: C,
		isValidConnection: z = Wa,
		onReconnectEnd: R,
		updateConnection: E,
		getTransform: M,
		getFromHandle: H,
		autoPanSpeed: K,
		dragThreshold: U = 1,
		handleDomNode: J,
	},
) {
	const F = Oa(e.target);
	let re = 0,
		N;
	const { x: b, y: A } = pt(e),
		v = Xa(a, J),
		_ = l == null ? void 0 : l.getBoundingClientRect();
	let y = !1;
	if (!_ || !v) return;
	const k = Ya(o, v, r, c, t);
	if (!k) return;
	let D = pt(e, _),
		T = !1,
		O = null,
		X = !1,
		Q = null;
	function j() {
		if (!f || !_) return;
		const [he, Ie] = Xo(D, _, K);
		d({ x: he, y: Ie }), (re = requestAnimationFrame(j));
	}
	const G = { ...k, nodeId: o, type: v, position: k.position },
		ee = c.get(o);
	let te = {
		inProgress: !0,
		isValid: null,
		from: hn(ee, G, ce.Left, !0),
		fromHandle: G,
		fromPosition: G.position,
		fromNode: ee,
		to: D,
		toHandle: null,
		toPosition: Si[G.position],
		toNode: null,
		pointer: D,
	};
	function ae() {
		(y = !0), E(te), m == null || m(e, { nodeId: o, handleId: r, handleType: v });
	}
	U === 0 && ae();
	function ye(he) {
		if (!y) {
			const { x: $e, y: ge } = pt(he),
				pe = $e - b,
				Ke = ge - A;
			if (!(pe * pe + Ke * Ke > U * U)) return;
			ae();
		}
		if (!H() || !G) {
			Pe(he);
			return;
		}
		const Ie = M();
		(D = pt(he, _)), (N = lf(Bn(D, Ie, !1, [1, 1]), n, c, G)), T || (j(), (T = !0));
		const _e = Za(he, {
			handle: N,
			connectionMode: t,
			fromNodeId: o,
			fromHandleId: r,
			fromType: i ? 'target' : 'source',
			isValidConnection: z,
			doc: F,
			lib: u,
			flowId: h,
			nodeLookup: c,
		});
		(Q = _e.handleDomNode), (O = _e.connection), (X = cf(!!N, _e.isValid));
		const De = c.get(o),
			Be = De ? hn(De, G, ce.Left, !0) : te.from,
			Je = {
				...te,
				from: Be,
				isValid: X,
				to: _e.toHandle && X ? Rn({ x: _e.toHandle.x, y: _e.toHandle.y }, Ie) : D,
				toHandle: _e.toHandle,
				toPosition: X && _e.toHandle ? _e.toHandle.position : Si[G.position],
				toNode: _e.toHandle ? c.get(_e.toHandle.nodeId) : null,
				pointer: D,
			};
		E(Je), (te = Je);
	}
	function Pe(he) {
		if (!('touches' in he && he.touches.length > 0)) {
			if (y) {
				(N || Q) && O && X && (x == null || x(O));
				const { inProgress: Ie, ..._e } = te,
					De = { ..._e, toPosition: te.toHandle ? te.toPosition : null };
				C == null || C(he, De), a && (R == null || R(he, De));
			}
			g(),
				cancelAnimationFrame(re),
				(T = !1),
				(X = !1),
				(O = null),
				(Q = null),
				F.removeEventListener('mousemove', ye),
				F.removeEventListener('mouseup', Pe),
				F.removeEventListener('touchmove', ye),
				F.removeEventListener('touchend', Pe);
		}
	}
	F.addEventListener('mousemove', ye),
		F.addEventListener('mouseup', Pe),
		F.addEventListener('touchmove', ye),
		F.addEventListener('touchend', Pe);
}
function Za(
	e,
	{
		handle: t,
		connectionMode: n,
		fromNodeId: r,
		fromHandleId: o,
		fromType: a,
		doc: i,
		lib: l,
		flowId: c,
		isValidConnection: u = Wa,
		nodeLookup: f,
	},
) {
	const h = a === 'target',
		d = t
			? i.querySelector(
					`.${l}-flow__handle[data-id="${c}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`,
				)
			: null,
		{ x: g, y: m } = pt(e),
		x = i.elementFromPoint(g, m),
		C = x != null && x.classList.contains(`${l}-flow__handle`) ? x : d,
		z = { handleDomNode: C, isValid: !1, connection: null, toHandle: null };
	if (C) {
		const R = Xa(void 0, C),
			E = C.getAttribute('data-nodeid'),
			M = C.getAttribute('data-handleid'),
			H = C.classList.contains('connectable'),
			K = C.classList.contains('connectableend');
		if (!E || !R) return z;
		const U = {
			source: h ? E : r,
			sourceHandle: h ? M : o,
			target: h ? r : E,
			targetHandle: h ? o : M,
		};
		z.connection = U;
		const F =
			H &&
			K &&
			(n === On.Strict ? (h && R === 'source') || (!h && R === 'target') : E !== r || M !== o);
		(z.isValid = F && u(U)), (z.toHandle = Ya(E, R, M, f, n, !0));
	}
	return z;
}
const Ri = { onPointerDown: uf, isValid: Za },
	$r = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
	co = ({ x: e, y: t, zoom: n }) => Ur.translate(e, t).scale(n),
	En = (e, t) => e.target.closest(`.${t}`),
	qa = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
	df = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2,
	uo = (e, t = 0, n = df, r = () => {}) => {
		const o = typeof t == 'number' && t > 0;
		return o || r(), o ? e.transition().duration(t).ease(n).on('end', r) : e;
	},
	Ga = (e) => {
		const t = e.ctrlKey && Vr() ? 10 : 1;
		return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t;
	};
function ff({
	zoomPanValues: e,
	noWheelClassName: t,
	d3Selection: n,
	d3Zoom: r,
	panOnScrollMode: o,
	panOnScrollSpeed: a,
	zoomOnPinch: i,
	onPanZoomStart: l,
	onPanZoom: c,
	onPanZoomEnd: u,
}) {
	return (f) => {
		if (En(f, t)) return f.ctrlKey && f.preventDefault(), !1;
		f.preventDefault(), f.stopImmediatePropagation();
		const h = n.property('__zoom').k || 1;
		if (f.ctrlKey && i) {
			const C = Et(f),
				z = Ga(f),
				R = h * 2 ** z;
			r.scaleTo(n, R, C, f);
			return;
		}
		const d = f.deltaMode === 1 ? 20 : 1;
		let g = o === Pn.Vertical ? 0 : f.deltaX * d,
			m = o === Pn.Horizontal ? 0 : f.deltaY * d;
		!Vr() && f.shiftKey && o !== Pn.Vertical && ((g = f.deltaY * d), (m = 0)),
			r.translateBy(n, -(g / h) * a, -(m / h) * a, { internal: !0 });
		const x = $r(n.property('__zoom'));
		clearTimeout(e.panScrollTimeout),
			e.isPanScrolling
				? (c == null || c(f, x),
					(e.panScrollTimeout = setTimeout(() => {
						u == null || u(f, x), (e.isPanScrolling = !1);
					}, 150)))
				: ((e.isPanScrolling = !0), l == null || l(f, x));
	};
}
function hf({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function (r, o) {
		const a = r.type === 'wheel',
			i = !t && a && !r.ctrlKey,
			l = En(r, e);
		if ((r.ctrlKey && a && l && r.preventDefault(), i || l)) return null;
		r.preventDefault(), n.call(this, r, o);
	};
}
function gf({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		var a, i, l;
		if ((a = r.sourceEvent) != null && a.internal) return;
		const o = $r(r.transform);
		(e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0),
			(e.isZoomingOrPanning = !0),
			(e.prevViewport = o),
			((l = r.sourceEvent) == null ? void 0 : l.type) === 'mousedown' && t(!0),
			n && (n == null || n(r.sourceEvent, o));
	};
}
function vf({
	zoomPanValues: e,
	panOnDrag: t,
	onPaneContextMenu: n,
	onTransformChange: r,
	onPanZoom: o,
}) {
	return (a) => {
		var i, l;
		(e.usedRightMouseButton = !!(n && qa(t, e.mouseButton ?? 0))),
			((i = a.sourceEvent) != null && i.sync) || r([a.transform.x, a.transform.y, a.transform.k]),
			o &&
				!((l = a.sourceEvent) != null && l.internal) &&
				(o == null || o(a.sourceEvent, $r(a.transform)));
	};
}
function yf({
	zoomPanValues: e,
	panOnDrag: t,
	panOnScroll: n,
	onDraggingChange: r,
	onPanZoomEnd: o,
	onPaneContextMenu: a,
}) {
	return (i) => {
		var l;
		if (
			!((l = i.sourceEvent) != null && l.internal) &&
			((e.isZoomingOrPanning = !1),
			a &&
				qa(t, e.mouseButton ?? 0) &&
				!e.usedRightMouseButton &&
				i.sourceEvent &&
				a(i.sourceEvent),
			(e.usedRightMouseButton = !1),
			r(!1),
			o)
		) {
			const c = $r(i.transform);
			(e.prevViewport = c),
				clearTimeout(e.timerId),
				(e.timerId = setTimeout(
					() => {
						o == null || o(i.sourceEvent, c);
					},
					n ? 150 : 0,
				));
		}
	};
}
function mf({
	zoomActivationKeyPressed: e,
	zoomOnScroll: t,
	zoomOnPinch: n,
	panOnDrag: r,
	panOnScroll: o,
	zoomOnDoubleClick: a,
	userSelectionActive: i,
	noWheelClassName: l,
	noPanClassName: c,
	lib: u,
	connectionInProgress: f,
}) {
	return (h) => {
		var C;
		const d = e || t,
			g = n && h.ctrlKey,
			m = h.type === 'wheel';
		if (
			h.button === 1 &&
			h.type === 'mousedown' &&
			(En(h, `${u}-flow__node`) || En(h, `${u}-flow__edge`))
		)
			return !0;
		if (
			(!r && !d && !o && !a && !n) ||
			i ||
			(f && !m) ||
			(En(h, l) && m) ||
			(En(h, c) && (!m || (o && m && !e))) ||
			(!n && h.ctrlKey && m)
		)
			return !1;
		if (!n && h.type === 'touchstart' && ((C = h.touches) == null ? void 0 : C.length) > 1)
			return h.preventDefault(), !1;
		if (
			(!d && !o && !g && m) ||
			(!r && (h.type === 'mousedown' || h.type === 'touchstart')) ||
			(Array.isArray(r) && !r.includes(h.button) && h.type === 'mousedown')
		)
			return !1;
		const x = (Array.isArray(r) && r.includes(h.button)) || !h.button || h.button <= 1;
		return (!h.ctrlKey || m) && x;
	};
}
function wf({
	domNode: e,
	minZoom: t,
	maxZoom: n,
	translateExtent: r,
	viewport: o,
	onPanZoom: a,
	onPanZoomStart: i,
	onPanZoomEnd: l,
	onDraggingChange: c,
}) {
	const u = {
			isZoomingOrPanning: !1,
			usedRightMouseButton: !1,
			prevViewport: {},
			mouseButton: 0,
			timerId: void 0,
			panScrollTimeout: void 0,
			isPanScrolling: !1,
		},
		f = e.getBoundingClientRect(),
		h = md().scaleExtent([t, n]).translateExtent(r),
		d = xt(e).call(h);
	R(
		{ x: o.x, y: o.y, zoom: Dn(o.zoom, t, n) },
		[
			[0, 0],
			[f.width, f.height],
		],
		r,
	);
	const g = d.on('wheel.zoom'),
		m = d.on('dblclick.zoom');
	h.wheelDelta(Ga);
	async function x(N, b) {
		return d
			? new Promise((A) => {
					h == null ||
						h.interpolate((b == null ? void 0 : b.interpolate) === 'linear' ? Un : Sr).transform(
							uo(d, b == null ? void 0 : b.duration, b == null ? void 0 : b.ease, () => A(!0)),
							N,
						);
				})
			: !1;
	}
	function C({
		noWheelClassName: N,
		noPanClassName: b,
		onPaneContextMenu: A,
		userSelectionActive: v,
		panOnScroll: _,
		panOnDrag: y,
		panOnScrollMode: k,
		panOnScrollSpeed: D,
		preventScrolling: T,
		zoomOnPinch: O,
		zoomOnScroll: X,
		zoomOnDoubleClick: Q,
		zoomActivationKeyPressed: j,
		lib: G,
		onTransformChange: ee,
		connectionInProgress: ie,
		paneClickDistance: te,
		selectionOnDrag: ae,
	}) {
		v && !u.isZoomingOrPanning && z();
		const ye = _ && !j && !v;
		h.clickDistance(ae ? 1 / 0 : !Ht(te) || te < 0 ? 0 : te);
		const Pe = ye
			? ff({
					zoomPanValues: u,
					noWheelClassName: N,
					d3Selection: d,
					d3Zoom: h,
					panOnScrollMode: k,
					panOnScrollSpeed: D,
					zoomOnPinch: O,
					onPanZoomStart: i,
					onPanZoom: a,
					onPanZoomEnd: l,
				})
			: hf({ noWheelClassName: N, preventScrolling: T, d3ZoomHandler: g });
		d.on('wheel.zoom', Pe, { passive: !1 });
		const he = gf({ zoomPanValues: u, onDraggingChange: c, onPanZoomStart: i });
		h.on('start', he);
		const Ie = vf({
			zoomPanValues: u,
			panOnDrag: y,
			onPaneContextMenu: !!A,
			onPanZoom: a,
			onTransformChange: ee,
		});
		h.on('zoom', Ie);
		const _e = yf({
			zoomPanValues: u,
			panOnDrag: y,
			panOnScroll: _,
			onPaneContextMenu: A,
			onPanZoomEnd: l,
			onDraggingChange: c,
		});
		h.on('end', _e);
		const De = mf({
			zoomActivationKeyPressed: j,
			panOnDrag: y,
			zoomOnScroll: X,
			panOnScroll: _,
			zoomOnDoubleClick: Q,
			zoomOnPinch: O,
			userSelectionActive: v,
			noPanClassName: b,
			noWheelClassName: N,
			lib: G,
			connectionInProgress: ie,
		});
		h.filter(De), Q ? d.on('dblclick.zoom', m) : d.on('dblclick.zoom', null);
	}
	function z() {
		h.on('zoom', null);
	}
	async function R(N, b, A) {
		const v = co(N),
			_ = h == null ? void 0 : h.constrain()(v, b, A);
		return _ && (await x(_)), _;
	}
	async function E(N, b) {
		const A = co(N);
		return await x(A, b), A;
	}
	function M(N) {
		if (d) {
			const b = co(N),
				A = d.property('__zoom');
			(A.k !== N.zoom || A.x !== N.x || A.y !== N.y) &&
				(h == null || h.transform(d, b, null, { sync: !0 }));
		}
	}
	function H() {
		const N = d ? Ma(d.node()) : { x: 0, y: 0, k: 1 };
		return { x: N.x, y: N.y, zoom: N.k };
	}
	async function K(N, b) {
		return d
			? new Promise((A) => {
					h == null ||
						h.interpolate((b == null ? void 0 : b.interpolate) === 'linear' ? Un : Sr).scaleTo(
							uo(d, b == null ? void 0 : b.duration, b == null ? void 0 : b.ease, () => A(!0)),
							N,
						);
				})
			: !1;
	}
	async function U(N, b) {
		return d
			? new Promise((A) => {
					h == null ||
						h.interpolate((b == null ? void 0 : b.interpolate) === 'linear' ? Un : Sr).scaleBy(
							uo(d, b == null ? void 0 : b.duration, b == null ? void 0 : b.ease, () => A(!0)),
							N,
						);
				})
			: !1;
	}
	function J(N) {
		h == null || h.scaleExtent(N);
	}
	function F(N) {
		h == null || h.translateExtent(N);
	}
	function re(N) {
		const b = !Ht(N) || N < 0 ? 0 : N;
		h == null || h.clickDistance(b);
	}
	return {
		update: C,
		destroy: z,
		setViewport: E,
		setViewportConstrained: R,
		getViewport: H,
		scaleTo: K,
		scaleBy: U,
		setScaleExtent: J,
		setTranslateExtent: F,
		syncViewport: M,
		setClickDistance: re,
	};
}
var Li;
((e) => {
	(e.Line = 'line'), (e.Handle = 'handle');
})(Li || (Li = {}));
const xf = Ta();
function bf(e, t, n = {}) {
	return Vd(e, t, { ...n, onError: n.onError ?? xf });
}
function jo() {
	const e = {};
	return [
		(t) => {
			if (t && !_s(e)) throw new Error(t);
			return Ao(e);
		},
		(t) => Ji(e, t),
	];
}
const [pf, _f] = jo(),
	[kf, Sf] = jo(),
	[Cf, Ef] = jo();
var Mf = new Set([
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
	Nf = ne('<div><!></div>');
function gn(e, t) {
	xe(t, !0);
	const n = $(t, 'id', 3, null),
		r = $(t, 'type', 3, 'source'),
		o = $(t, 'position', 19, () => ce.Top),
		a = $(t, 'isConnectableStart', 3, !0),
		i = $(t, 'isConnectableEnd', 3, !0),
		l = vn(t, Mf);
	const c = pf('Handle must be used within a Custom Node component'),
		u = kf('Handle must be used within a Custom Node component');
	let f = w(() => r() === 'target'),
		h = w(() => (t.isConnectable !== void 0 ? t.isConnectable : u.value)),
		d = Kn(),
		g = w(() => d.ariaLabelConfig),
		m = null;
	Ui(() => {
		if (t.onconnect || t.ondisconnect) {
			d.edges;
			const b = d.connectionLookup.get(`${c}-${r()}${n() ? `-${n()}` : ''}`);
			if (m && !xd(b, m)) {
				const A = b ?? new Map();
				Ci(m, A, t.ondisconnect), Ci(A, m, t.onconnect);
			}
			m = new Map(b);
		}
	});
	const x = w(() => {
			if (!d.connection.inProgress) return [!1, !1, !1, !1, null];
			const { fromHandle: b, toHandle: A, isValid: v } = d.connection,
				_ = b && b.nodeId === c && b.type === r() && b.id === n(),
				y = A && A.nodeId === c && A.type === r() && A.id === n(),
				k =
					d.connectionMode === On.Strict
						? (b == null ? void 0 : b.type) !== r()
						: c !== (b == null ? void 0 : b.nodeId) || n() !== (b == null ? void 0 : b.id);
			return [!0, _, y, k, y && v];
		}),
		C = w(() => ir(s(x), 5)),
		z = w(() => s(C)[0]),
		R = w(() => s(C)[1]),
		E = w(() => s(C)[2]),
		M = w(() => s(C)[3]),
		H = w(() => s(C)[4]);
	function K(b) {
		var v;
		const A = d.onbeforeconnect ? d.onbeforeconnect(b) : b;
		A && (d.addEdge(A), (v = d.onconnect) == null || v.call(d, b));
	}
	function U(b) {
		const A = Ha(b);
		b.currentTarget &&
			((A && b.button === 0) || !A) &&
			Ri.onPointerDown(b, {
				handleId: n(),
				nodeId: c,
				isTarget: s(f),
				connectionRadius: d.connectionRadius,
				domNode: d.domNode,
				nodeLookup: d.nodeLookup,
				connectionMode: d.connectionMode,
				lib: 'svelte',
				autoPanOnConnect: d.autoPanOnConnect,
				autoPanSpeed: d.autoPanSpeed,
				flowId: d.flowId,
				isValidConnection:
					t.isValidConnection ||
					((...v) => {
						var _;
						return ((_ = d.isValidConnection) == null ? void 0 : _.call(d, ...v)) ?? !0;
					}),
				updateConnection: d.updateConnection,
				cancelConnection: d.cancelConnection,
				panBy: d.panBy,
				onConnect: K,
				onConnectStart: d.onconnectstart,
				onConnectEnd: (...v) => {
					var _;
					return (_ = d.onconnectend) == null ? void 0 : _.call(d, ...v);
				},
				getTransform: () => [d.viewport.x, d.viewport.y, d.viewport.zoom],
				getFromHandle: () => d.connection.fromHandle,
				dragThreshold: d.connectionDragThreshold,
				handleDomNode: b.currentTarget,
			});
	}
	function J(b) {
		var Q, j;
		if (!c || (!d.clickConnectStartHandle && !a())) return;
		if (!d.clickConnectStartHandle) {
			(Q = d.onclickconnectstart) == null ||
				Q.call(d, b, { nodeId: c, handleId: n(), handleType: r() }),
				(d.clickConnectStartHandle = { nodeId: c, type: r(), id: n() });
			return;
		}
		const A = Oa(b.target),
			v = t.isValidConnection ?? d.isValidConnection,
			{ connectionMode: _, clickConnectStartHandle: y, flowId: k, nodeLookup: D } = d,
			{ connection: T, isValid: O } = Ri.isValid(b, {
				handle: { nodeId: c, id: n(), type: r() },
				connectionMode: _,
				fromNodeId: y.nodeId,
				fromHandleId: y.id ?? null,
				fromType: y.type,
				isValidConnection: v,
				flowId: k,
				doc: A,
				lib: 'svelte',
				nodeLookup: D,
			});
		O && T && K(T);
		const X = structuredClone(Qi(d.connection));
		delete X.inProgress,
			(X.toPosition = X.toHandle ? X.toHandle.position : null),
			(j = d.onclickconnectend) == null || j.call(d, b, X),
			(d.clickConnectStartHandle = null);
	}
	var F = Nf(),
		re = () => {};
	qt(F, () => ({
		'data-handleid': n(),
		'data-nodeid': c,
		'data-handlepos': o(),
		'data-id': `${d.flowId ?? ''}-${c ?? ''}-${n() ?? 'null' ?? ''}-${r() ?? ''}`,
		class: [
			'svelte-flow__handle',
			`svelte-flow__handle-${o()}`,
			d.noDragClass,
			d.noPanClass,
			o(),
			t.class,
		],
		onmousedown: U,
		ontouchstart: U,
		onclick: d.clickConnect ? J : void 0,
		onkeypress: re,
		style: t.style,
		role: 'button',
		'aria-label': s(g)['handle.ariaLabel'],
		tabindex: '-1',
		...l,
		[To]: {
			valid: s(H),
			connectingto: s(E),
			connectingfrom: s(R),
			source: !s(f),
			target: s(f),
			connectablestart: a(),
			connectableend: i(),
			connectable: s(h),
			connectionindicator:
				s(h) && (!s(z) || s(M)) && (s(z) || d.clickConnectStartHandle ? i() : a()),
		},
	}));
	var N = B(F);
	yt(N, () => t.children ?? Vn), V(F), L(e, F), be();
}
var Pf = ne('<!> <!>', 1);
function Ua(e, t) {
	xe(t, !0);
	const n = $(t, 'targetPosition', 19, () => ce.Top),
		r = $(t, 'sourcePosition', 19, () => ce.Bottom);
	var o = Pf(),
		a = we(o);
	gn(a, {
		type: 'target',
		get position() {
			return n();
		},
	});
	var i = Y(a),
		l = Y(i);
	gn(l, {
		type: 'source',
		get position() {
			return r();
		},
	}),
		de(() => {
			var c;
			return Me(i, ` ${((c = t.data) == null ? void 0 : c.label) ?? ''} `);
		}),
		L(e, o),
		be();
}
var Af = ne(' <!>', 1);
function zf(e, t) {
	xe(t, !0);
	const n = $(t, 'data', 19, () => ({ label: 'Node' })),
		r = $(t, 'sourcePosition', 19, () => ce.Bottom);
	vt();
	var o = Af(),
		a = we(o),
		i = Y(a);
	gn(i, {
		type: 'source',
		get position() {
			return r();
		},
	}),
		de(() => {
			var l;
			return Me(a, `${((l = n()) == null ? void 0 : l.label) ?? ''} `);
		}),
		L(e, o),
		be();
}
var Tf = ne(' <!>', 1);
function If(e, t) {
	xe(t, !0);
	const n = $(t, 'data', 19, () => ({ label: 'Node' })),
		r = $(t, 'targetPosition', 19, () => ce.Top);
	vt();
	var o = Tf(),
		a = we(o),
		i = Y(a);
	gn(i, {
		type: 'target',
		get position() {
			return r();
		},
	}),
		de(() => {
			var l;
			return Me(a, `${((l = n()) == null ? void 0 : l.label) ?? ''} `);
		}),
		L(e, o),
		be();
}
function Of(e, t) {}
function fo(e, t, n) {
	if (!n || !t) return;
	const r = n === 'root' ? t : t.querySelector(`.svelte-flow__${n}`);
	r && r.appendChild(e);
}
function ho(e, t) {
	const n = w(Kn),
		r = w(() => s(n).domNode);
	let o;
	return (
		s(r)
			? fo(e, s(r), t)
			: (o = ji(() => {
					Rt(() => {
						fo(e, s(r), t), o == null || o();
					});
				})),
		{
			async update(a) {
				fo(e, s(r), a);
			},
			destroy() {
				e.parentNode && e.parentNode.removeChild(e), o == null || o();
			},
		}
	);
}
function Df() {
	const e = ue(typeof window > 'u');
	if (s(e)) {
		const t = ji(() => {
			Rt(() => {
				P(e, !1), t == null || t();
			});
		});
	}
	return {
		get value() {
			return s(e);
		},
	};
}
const Vi = (e) => pd(e),
	Hf = (e) => Pa(e);
function Pt(e) {
	return e === void 0 ? void 0 : `${e}px`;
}
const Br = {
	ArrowUp: { x: 0, y: -1 },
	ArrowDown: { x: 0, y: 1 },
	ArrowLeft: { x: -1, y: 0 },
	ArrowRight: { x: 1, y: 0 },
};
var Rf = new Set([
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
	Lf = ne('<div><!></div>');
function Vf(e, t) {
	xe(t, !0);
	const n = $(t, 'x', 3, 0),
		r = $(t, 'y', 3, 0),
		o = $(t, 'selectEdgeOnClick', 3, !1),
		a = $(t, 'transparent', 3, !1),
		i = vn(t, Rf);
	const l = Kn(),
		c = Cf('EdgeLabel must be used within a Custom Edge component');
	const u = w(() => {
		var g;
		return (g = l.visible.edges.get(c)) == null ? void 0 : g.zIndex;
	});
	var f = Lf(),
		h = () => {
			o() && c && l.handleEdgeSelection(c);
		};
	qt(
		f,
		(g) => ({
			class: ['svelte-flow__edge-label', { transparent: a() }, t.class],
			tabindex: '-1',
			onclick: h,
			...i,
			[Xr]: g,
		}),
		[
			() => ({
				display: Df().value ? 'none' : void 0,
				cursor: o() ? 'pointer' : void 0,
				transform: `translate(-50%, -50%) translate(${n() ?? ''}px,${r() ?? ''}px)`,
				'pointer-events': 'all',
				width: Pt(t.width),
				height: Pt(t.height),
				'z-index': s(u),
			}),
		],
		void 0,
		void 0,
		'svelte-1wg91mu',
	);
	var d = B(f);
	yt(d, () => t.children ?? Vn),
		V(f),
		tt(
			f,
			(g, m) => (ho == null ? void 0 : ho(g, m)),
			() => 'edge-labels',
		),
		L(e, f),
		be();
}
var Bf = new Set([
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
	Kf = ze('<path></path>'),
	Ff = ze('<path fill="none"></path><!><!>', 1);
function eo(e, t) {
	const n = $(t, 'interactionWidth', 3, 20),
		r = vn(t, Bf);
	var o = Ff(),
		a = we(o),
		i = Y(a);
	var l = (f) => {
		var h = Kf();
		qt(h, () => ({
			d: t.path,
			'stroke-opacity': 0,
			'stroke-width': n(),
			fill: 'none',
			class: 'svelte-flow__edge-interaction',
			...r,
		})),
			L(f, h);
	};
	le(i, (f) => {
		n() > 0 && f(l);
	});
	var c = Y(i);
	var u = (f) => {
		Vf(f, {
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
			children: (h, d) => {
				vt();
				var g = Zi();
				de(() => Me(g, t.label)), L(h, g);
			},
			$$slots: { default: !0 },
		});
	};
	le(c, (f) => {
		t.label && f(u);
	});
	de(() => {
		Te(a, 'id', t.id),
			Te(a, 'd', t.path),
			qe(a, 0, Io(['svelte-flow__edge-path', t.class])),
			Te(a, 'marker-start', t.markerStart),
			Te(a, 'marker-end', t.markerEnd),
			_t(a, t.style);
	}),
		L(e, o);
}
function Ja(e, t) {
	xe(t, !0);
	const n = w(() => {
			var l;
			return Ra({
				sourceX: t.sourceX,
				sourceY: t.sourceY,
				targetX: t.targetX,
				targetY: t.targetY,
				sourcePosition: t.sourcePosition,
				targetPosition: t.targetPosition,
				curvature: (l = t.pathOptions) == null ? void 0 : l.curvature,
			});
		}),
		r = w(() => ir(s(n), 3)),
		o = w(() => s(r)[0]),
		a = w(() => s(r)[1]),
		i = w(() => s(r)[2]);
	eo(e, {
		get id() {
			return t.id;
		},
		get path() {
			return s(o);
		},
		get labelX() {
			return s(a);
		},
		get labelY() {
			return s(i);
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
		be();
}
function Yf(e, t) {
	xe(t, !0);
	const n = w(() =>
			Zo({
				sourceX: t.sourceX,
				sourceY: t.sourceY,
				targetX: t.targetX,
				targetY: t.targetY,
				sourcePosition: t.sourcePosition,
				targetPosition: t.targetPosition,
			}),
		),
		r = w(() => ir(s(n), 3)),
		o = w(() => s(r)[0]),
		a = w(() => s(r)[1]),
		i = w(() => s(r)[2]);
	eo(e, {
		get path() {
			return s(o);
		},
		get labelX() {
			return s(a);
		},
		get labelY() {
			return s(i);
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
		be();
}
function Xf(e, t) {
	xe(t, !0);
	const n = w(() =>
			Va({ sourceX: t.sourceX, sourceY: t.sourceY, targetX: t.targetX, targetY: t.targetY }),
		),
		r = w(() => ir(s(n), 3)),
		o = w(() => s(r)[0]),
		a = w(() => s(r)[1]),
		i = w(() => s(r)[2]);
	eo(e, {
		get path() {
			return s(o);
		},
		get labelX() {
			return s(a);
		},
		get labelY() {
			return s(i);
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
		be();
}
function Wf(e, t) {
	xe(t, !0);
	const n = w(() =>
			Zo({
				sourceX: t.sourceX,
				sourceY: t.sourceY,
				targetX: t.targetX,
				targetY: t.targetY,
				sourcePosition: t.sourcePosition,
				targetPosition: t.targetPosition,
				borderRadius: 0,
			}),
		),
		r = w(() => ir(s(n), 3)),
		o = w(() => s(r)[0]),
		a = w(() => s(r)[1]),
		i = w(() => s(r)[2]);
	eo(e, {
		get path() {
			return s(o);
		},
		get labelX() {
			return s(a);
		},
		get labelY() {
			return s(i);
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
		be();
}
var rr, or;
class Zf {
	constructor(t, n) {
		Z(this, rr);
		Z(this, or);
		Fn(this, rr, t), Fn(this, or, Ps(n));
	}
	get current() {
		return S(this, or).call(this), S(this, rr).call(this);
	}
}
(rr = new WeakMap()), (or = new WeakMap());
const qf = /\(.+\)/,
	Gf = new Set(['all', 'print', 'screen', 'and', 'or', 'not', 'only']);
class Uf extends Zf {
	constructor(t, n) {
		const r = qf.test(t) || t.split(/[\s,]+/).some((a) => Gf.has(a.trim())) ? t : `(${t})`;
		const o = window.matchMedia(r);
		super(
			() => o.matches,
			(a) => vo(o, 'change', a),
		);
	}
}
function Jf(e, t, n, r) {
	const o = new Map();
	return (
		Yo(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((a) => {
			o.set(a.id, a);
		}),
		o
	);
}
function Bi(e) {
	const {
			edges: t,
			defaultEdgeOptions: n,
			nodeLookup: r,
			previousEdges: o,
			connectionMode: a,
			onerror: i,
			onlyRenderVisible: l,
			elevateEdgesOnSelect: c,
			zIndexMode: u,
		} = e,
		f = new Map();
	for (const h of t) {
		const d = r.get(h.source),
			g = r.get(h.target);
		if (!d || !g) continue;
		if (l) {
			const { visibleNodes: C, transform: z, width: R, height: E } = e;
			if (Hd({ sourceNode: d, targetNode: g, width: R, height: E, transform: z }))
				C.set(d.id, d), C.set(g.id, g);
			else continue;
		}
		const m = o.get(h.id);
		if (m && h === m.edge && d == m.sourceNode && g == m.targetNode) {
			f.set(h.id, m);
			continue;
		}
		const x = Yd({
			id: h.id,
			sourceNode: d,
			targetNode: g,
			sourceHandle: h.sourceHandle || null,
			targetHandle: h.targetHandle || null,
			connectionMode: a,
			onError: i,
		});
		x &&
			f.set(h.id, {
				...n,
				...h,
				...x,
				zIndex: Dd({
					selected: h.selected,
					zIndex: h.zIndex ?? n.zIndex,
					sourceNode: d,
					targetNode: g,
					elevateOnSelect: c,
					zIndexMode: u,
				}),
				sourceNode: d,
				targetNode: g,
				edge: h,
			});
	}
	return f;
}
const jf = Ta(),
	ja = { input: zf, output: If, default: Ua, group: Of },
	Qa = { straight: Xf, smoothstep: Yf, default: Ja, step: Wf };
function Qf(e, t, n, r, o, a) {
	if (t && !n && r && o) {
		const i = Jr(a, {
			filter: (l) => !!((l.width || l.initialWidth) && (l.height || l.initialHeight)),
		});
		return Wo(i, r, o, 0.5, 2, 0.1);
	} else return n ?? { x: 0, y: 0, zoom: 1 };
}
function $f(e) {
	var n,
		r,
		o,
		a,
		i,
		l,
		c,
		u,
		f,
		h,
		d,
		g,
		m,
		x,
		C,
		z,
		R,
		E,
		M,
		H,
		K,
		U,
		J,
		F,
		re,
		N,
		b,
		A,
		v,
		_,
		y,
		k,
		D,
		T,
		O,
		X,
		Q,
		j,
		G,
		ee,
		ie,
		te,
		ae,
		ye,
		Pe,
		he,
		Ie,
		_e,
		De,
		Be,
		Je,
		$e,
		ge,
		pe,
		Ke,
		Se,
		Fe,
		rt,
		ot,
		Le,
		Gt,
		Ut,
		Jt,
		zt,
		jt,
		Qt,
		Vt,
		$t,
		en,
		tn,
		I,
		W,
		q,
		oe,
		se,
		fe;
	class t {
		constructor() {
			Z(
				this,
				n,
				w(() => e.props.id ?? '1'),
			);
			Z(this, r, ue(null));
			Z(this, o, ue(null));
			Z(this, a, ue(e.width ?? 0));
			Z(this, i, ue(e.height ?? 0));
			Z(this, l, ue(e.props.zIndexMode ?? 'basic'));
			Z(
				this,
				c,
				w(() => {
					var Ne;
					const { nodesInitialized: p } = Ud(e.nodes, this.nodeLookup, this.parentLookup, {
						nodeExtent: this.nodeExtent,
						nodeOrigin: this.nodeOrigin,
						elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
						checkEquality: !0,
						zIndexMode: this.zIndexMode,
					});
					return (
						this.fitViewQueued &&
							p &&
							((Ne = this.fitViewOptions) != null && Ne.duration
								? this.resolveFitView()
								: queueMicrotask(() => {
										this.resolveFitView();
									})),
						p
					);
				}),
			);
			Z(
				this,
				u,
				w(() => this.panZoom !== null),
			);
			Z(
				this,
				f,
				w(() => (tf(this.connectionLookup, this.edgeLookup, e.edges), e.edges)),
			);
			Ze(this, '_prevSelectedNodes', []);
			Ze(this, '_prevSelectedNodeIds', new Set());
			Z(
				this,
				h,
				w(() => {
					const p = this._prevSelectedNodeIds.size,
						Ne = new Set(),
						Ce = this.nodes.filter(
							(Ee) => (
								Ee.selected && (Ne.add(Ee.id), this._prevSelectedNodeIds.delete(Ee.id)), Ee.selected
							),
						);
					return (
						(p !== Ne.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = Ce),
						(this._prevSelectedNodeIds = Ne),
						this._prevSelectedNodes
					);
				}),
			);
			Ze(this, '_prevSelectedEdges', []);
			Ze(this, '_prevSelectedEdgeIds', new Set());
			Z(
				this,
				d,
				w(() => {
					const p = this._prevSelectedEdgeIds.size,
						Ne = new Set(),
						Ce = this.edges.filter(
							(Ee) => (
								Ee.selected && (Ne.add(Ee.id), this._prevSelectedEdgeIds.delete(Ee.id)), Ee.selected
							),
						);
					return (
						(p !== Ne.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = Ce),
						(this._prevSelectedEdgeIds = Ne),
						this._prevSelectedEdges
					);
				}),
			);
			Ze(this, 'selectionChangeHandlers', new Map());
			Ze(this, 'nodeLookup', new Map());
			Ze(this, 'parentLookup', new Map());
			Ze(this, 'connectionLookup', new Map());
			Ze(this, 'edgeLookup', new Map());
			Ze(this, '_prevVisibleEdges', new Map());
			Z(
				this,
				g,
				w(() => {
					const {
						nodes: p,
						_edges: Ne,
						_prevVisibleEdges: Ce,
						nodeLookup: Ee,
						connectionMode: it,
						onerror: Tt,
						onlyRenderVisibleElements: ve,
						defaultEdgeOptions: Oe,
						zIndexMode: Bt,
					} = this;
					let St, nn;
					const Kt = {
						edges: Ne,
						defaultEdgeOptions: Oe,
						previousEdges: Ce,
						nodeLookup: Ee,
						connectionMode: it,
						elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
						zIndexMode: Bt,
						onerror: Tt,
					};
					if (ve) {
						const { viewport: Ve, width: Xe, height: Ye } = this,
							at = [Ve.x, Ve.y, Ve.zoom];
						(St = Jf(Ee, at, Xe, Ye)),
							(nn = Bi({
								...Kt,
								onlyRenderVisible: !0,
								visibleNodes: St,
								transform: at,
								width: Xe,
								height: Ye,
							}));
					} else (St = this.nodeLookup), (nn = Bi(Kt));
					return { nodes: St, edges: nn };
				}),
			);
			Z(
				this,
				m,
				w(() => e.props.nodesDraggable ?? !0),
			);
			Z(
				this,
				x,
				w(() => e.props.nodesConnectable ?? !0),
			);
			Z(
				this,
				C,
				w(() => e.props.elementsSelectable ?? !0),
			);
			Z(
				this,
				z,
				w(() => e.props.nodesFocusable ?? !0),
			);
			Z(
				this,
				R,
				w(() => e.props.edgesFocusable ?? !0),
			);
			Z(
				this,
				E,
				w(() => e.props.disableKeyboardA11y ?? !1),
			);
			Z(
				this,
				M,
				w(() => e.props.minZoom ?? 0.5),
			);
			Z(
				this,
				H,
				w(() => e.props.maxZoom ?? 2),
			);
			Z(
				this,
				K,
				w(() => e.props.nodeOrigin ?? [0, 0]),
			);
			Z(
				this,
				U,
				w(() => e.props.nodeExtent ?? Co),
			);
			Z(
				this,
				J,
				w(() => e.props.translateExtent ?? Co),
			);
			Z(
				this,
				F,
				w(() => e.props.defaultEdgeOptions ?? {}),
			);
			Z(
				this,
				re,
				w(() => e.props.nodeDragThreshold ?? 1),
			);
			Z(
				this,
				N,
				w(() => e.props.autoPanOnNodeDrag ?? !0),
			);
			Z(
				this,
				b,
				w(() => e.props.autoPanOnConnect ?? !0),
			);
			Z(
				this,
				A,
				w(() => e.props.autoPanOnNodeFocus ?? !0),
			);
			Z(
				this,
				v,
				w(() => e.props.autoPanSpeed ?? 15),
			);
			Z(
				this,
				_,
				w(() => e.props.connectionDragThreshold ?? 1),
			);
			Ze(this, 'fitViewQueued', e.props.fitView ?? !1);
			Ze(this, 'fitViewOptions', e.props.fitViewOptions);
			Ze(this, 'fitViewResolver', null);
			Z(
				this,
				y,
				w(() => e.props.snapGrid ?? null),
			);
			Z(this, k, ue(!1));
			Z(this, D, ue(null));
			Z(this, T, ue(!1));
			Z(this, O, ue(!1));
			Z(this, X, ue(!1));
			Z(this, Q, ue(!1));
			Z(this, j, ue(!1));
			Z(this, G, ue(null));
			Z(this, ee, ue(''));
			Z(
				this,
				ie,
				w(() => e.props.selectionMode ?? Hr.Partial),
			);
			Z(
				this,
				te,
				w(() => ({ ...ja, ...e.props.nodeTypes })),
			);
			Z(
				this,
				ae,
				w(() => ({ ...Qa, ...e.props.edgeTypes })),
			);
			Z(
				this,
				ye,
				w(() => e.props.noPanClass ?? 'nopan'),
			);
			Z(
				this,
				Pe,
				w(() => e.props.noDragClass ?? 'nodrag'),
			);
			Z(
				this,
				he,
				w(() => e.props.noWheelClass ?? 'nowheel'),
			);
			Z(
				this,
				Ie,
				w(() => Td(e.props.ariaLabelConfig)),
			);
			Z(
				this,
				_e,
				ue(
					Qf(
						this.nodesInitialized,
						e.props.fitView,
						e.props.initialViewport,
						this.width,
						this.height,
						this.nodeLookup,
					),
				),
			);
			Z(this, De, ue(Eo));
			Z(
				this,
				Be,
				w(() =>
					this._connection.inProgress
						? {
								...this._connection,
								to: Bn(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom]),
							}
						: this._connection,
				),
			);
			Z(
				this,
				Je,
				w(() => e.props.connectionMode ?? On.Strict),
			);
			Z(
				this,
				$e,
				w(() => e.props.connectionRadius ?? 20),
			);
			Z(
				this,
				ge,
				w(() => e.props.isValidConnection ?? (() => !0)),
			);
			Z(
				this,
				pe,
				w(() => e.props.selectNodesOnDrag ?? !0),
			);
			Z(
				this,
				Ke,
				w(() => (e.props.defaultMarkerColor === void 0 ? '#b1b1b7' : e.props.defaultMarkerColor)),
			);
			Z(
				this,
				Se,
				w(() =>
					Xd(e.edges, {
						defaultColor: this.defaultMarkerColor,
						id: this.flowId,
						defaultMarkerStart: this.defaultEdgeOptions.markerStart,
						defaultMarkerEnd: this.defaultEdgeOptions.markerEnd,
					}),
				),
			);
			Z(
				this,
				Fe,
				w(() => e.props.onlyRenderVisibleElements ?? !1),
			);
			Z(
				this,
				rt,
				w(() => e.props.onflowerror ?? jf),
			);
			Z(
				this,
				ot,
				w(() => e.props.ondelete),
			);
			Z(
				this,
				Le,
				w(() => e.props.onbeforedelete),
			);
			Z(
				this,
				Gt,
				w(() => e.props.onbeforeconnect),
			);
			Z(
				this,
				Ut,
				w(() => e.props.onconnect),
			);
			Z(
				this,
				Jt,
				w(() => e.props.onconnectstart),
			);
			Z(
				this,
				zt,
				w(() => e.props.onconnectend),
			);
			Z(
				this,
				jt,
				w(() => e.props.onbeforereconnect),
			);
			Z(
				this,
				Qt,
				w(() => e.props.onreconnect),
			);
			Z(
				this,
				Vt,
				w(() => e.props.onreconnectstart),
			);
			Z(
				this,
				$t,
				w(() => e.props.onreconnectend),
			);
			Z(
				this,
				en,
				w(() => e.props.clickConnect ?? !0),
			);
			Z(
				this,
				tn,
				w(() => e.props.onclickconnectstart),
			);
			Z(
				this,
				I,
				w(() => e.props.onclickconnectend),
			);
			Z(this, W, ue(null));
			Z(
				this,
				q,
				w(() => e.props.onselectiondrag),
			);
			Z(
				this,
				oe,
				w(() => e.props.onselectiondragstart),
			);
			Z(
				this,
				se,
				w(() => e.props.onselectiondragstop),
			);
			Ze(this, 'resolveFitView', async () => {
				var p;
				this.panZoom &&
					(await Cd(
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
					(p = this.fitViewResolver) == null || p.resolve(!0),
					(this.fitViewQueued = !1),
					(this.fitViewOptions = void 0),
					(this.fitViewResolver = null));
			});
			Ze(
				this,
				'_prefersDark',
				new Uf('(prefers-color-scheme: dark)', e.props.colorModeSSR === 'dark'),
			);
			Z(
				this,
				fe,
				w(() =>
					e.props.colorMode === 'system'
						? this._prefersDark.current
							? 'dark'
							: 'light'
						: (e.props.colorMode ?? 'light'),
				),
			);
		}
		get flowId() {
			return s(S(this, n));
		}
		set flowId(p) {
			P(S(this, n), p);
		}
		get domNode() {
			return s(S(this, r));
		}
		set domNode(p) {
			P(S(this, r), p);
		}
		get panZoom() {
			return s(S(this, o));
		}
		set panZoom(p) {
			P(S(this, o), p);
		}
		get width() {
			return s(S(this, a));
		}
		set width(p) {
			P(S(this, a), p);
		}
		get height() {
			return s(S(this, i));
		}
		set height(p) {
			P(S(this, i), p);
		}
		get zIndexMode() {
			return s(S(this, l));
		}
		set zIndexMode(p) {
			P(S(this, l), p);
		}
		get nodesInitialized() {
			return s(S(this, c));
		}
		set nodesInitialized(p) {
			P(S(this, c), p);
		}
		get viewportInitialized() {
			return s(S(this, u));
		}
		set viewportInitialized(p) {
			P(S(this, u), p);
		}
		get _edges() {
			return s(S(this, f));
		}
		set _edges(p) {
			P(S(this, f), p);
		}
		get nodes() {
			return this.nodesInitialized, e.nodes;
		}
		set nodes(p) {
			e.nodes = p;
		}
		get edges() {
			return this._edges;
		}
		set edges(p) {
			e.edges = p;
		}
		get selectedNodes() {
			return s(S(this, h));
		}
		set selectedNodes(p) {
			P(S(this, h), p);
		}
		get selectedEdges() {
			return s(S(this, d));
		}
		set selectedEdges(p) {
			P(S(this, d), p);
		}
		get visible() {
			return s(S(this, g));
		}
		set visible(p) {
			P(S(this, g), p);
		}
		get nodesDraggable() {
			return s(S(this, m));
		}
		set nodesDraggable(p) {
			P(S(this, m), p);
		}
		get nodesConnectable() {
			return s(S(this, x));
		}
		set nodesConnectable(p) {
			P(S(this, x), p);
		}
		get elementsSelectable() {
			return s(S(this, C));
		}
		set elementsSelectable(p) {
			P(S(this, C), p);
		}
		get nodesFocusable() {
			return s(S(this, z));
		}
		set nodesFocusable(p) {
			P(S(this, z), p);
		}
		get edgesFocusable() {
			return s(S(this, R));
		}
		set edgesFocusable(p) {
			P(S(this, R), p);
		}
		get disableKeyboardA11y() {
			return s(S(this, E));
		}
		set disableKeyboardA11y(p) {
			P(S(this, E), p);
		}
		get minZoom() {
			return s(S(this, M));
		}
		set minZoom(p) {
			P(S(this, M), p);
		}
		get maxZoom() {
			return s(S(this, H));
		}
		set maxZoom(p) {
			P(S(this, H), p);
		}
		get nodeOrigin() {
			return s(S(this, K));
		}
		set nodeOrigin(p) {
			P(S(this, K), p);
		}
		get nodeExtent() {
			return s(S(this, U));
		}
		set nodeExtent(p) {
			P(S(this, U), p);
		}
		get translateExtent() {
			return s(S(this, J));
		}
		set translateExtent(p) {
			P(S(this, J), p);
		}
		get defaultEdgeOptions() {
			return s(S(this, F));
		}
		set defaultEdgeOptions(p) {
			P(S(this, F), p);
		}
		get nodeDragThreshold() {
			return s(S(this, re));
		}
		set nodeDragThreshold(p) {
			P(S(this, re), p);
		}
		get autoPanOnNodeDrag() {
			return s(S(this, N));
		}
		set autoPanOnNodeDrag(p) {
			P(S(this, N), p);
		}
		get autoPanOnConnect() {
			return s(S(this, b));
		}
		set autoPanOnConnect(p) {
			P(S(this, b), p);
		}
		get autoPanOnNodeFocus() {
			return s(S(this, A));
		}
		set autoPanOnNodeFocus(p) {
			P(S(this, A), p);
		}
		get autoPanSpeed() {
			return s(S(this, v));
		}
		set autoPanSpeed(p) {
			P(S(this, v), p);
		}
		get connectionDragThreshold() {
			return s(S(this, _));
		}
		set connectionDragThreshold(p) {
			P(S(this, _), p);
		}
		get snapGrid() {
			return s(S(this, y));
		}
		set snapGrid(p) {
			P(S(this, y), p);
		}
		get dragging() {
			return s(S(this, k));
		}
		set dragging(p) {
			P(S(this, k), p);
		}
		get selectionRect() {
			return s(S(this, D));
		}
		set selectionRect(p) {
			P(S(this, D), p);
		}
		get selectionKeyPressed() {
			return s(S(this, T));
		}
		set selectionKeyPressed(p) {
			P(S(this, T), p);
		}
		get multiselectionKeyPressed() {
			return s(S(this, O));
		}
		set multiselectionKeyPressed(p) {
			P(S(this, O), p);
		}
		get deleteKeyPressed() {
			return s(S(this, X));
		}
		set deleteKeyPressed(p) {
			P(S(this, X), p);
		}
		get panActivationKeyPressed() {
			return s(S(this, Q));
		}
		set panActivationKeyPressed(p) {
			P(S(this, Q), p);
		}
		get zoomActivationKeyPressed() {
			return s(S(this, j));
		}
		set zoomActivationKeyPressed(p) {
			P(S(this, j), p);
		}
		get selectionRectMode() {
			return s(S(this, G));
		}
		set selectionRectMode(p) {
			P(S(this, G), p);
		}
		get ariaLiveMessage() {
			return s(S(this, ee));
		}
		set ariaLiveMessage(p) {
			P(S(this, ee), p);
		}
		get selectionMode() {
			return s(S(this, ie));
		}
		set selectionMode(p) {
			P(S(this, ie), p);
		}
		get nodeTypes() {
			return s(S(this, te));
		}
		set nodeTypes(p) {
			P(S(this, te), p);
		}
		get edgeTypes() {
			return s(S(this, ae));
		}
		set edgeTypes(p) {
			P(S(this, ae), p);
		}
		get noPanClass() {
			return s(S(this, ye));
		}
		set noPanClass(p) {
			P(S(this, ye), p);
		}
		get noDragClass() {
			return s(S(this, Pe));
		}
		set noDragClass(p) {
			P(S(this, Pe), p);
		}
		get noWheelClass() {
			return s(S(this, he));
		}
		set noWheelClass(p) {
			P(S(this, he), p);
		}
		get ariaLabelConfig() {
			return s(S(this, Ie));
		}
		set ariaLabelConfig(p) {
			P(S(this, Ie), p);
		}
		get _viewport() {
			return s(S(this, _e));
		}
		set _viewport(p) {
			P(S(this, _e), p);
		}
		get viewport() {
			return e.viewport ?? this._viewport;
		}
		set viewport(p) {
			e.viewport && (e.viewport = p), (this._viewport = p);
		}
		get _connection() {
			return s(S(this, De));
		}
		set _connection(p) {
			P(S(this, De), p);
		}
		get connection() {
			return s(S(this, Be));
		}
		set connection(p) {
			P(S(this, Be), p);
		}
		get connectionMode() {
			return s(S(this, Je));
		}
		set connectionMode(p) {
			P(S(this, Je), p);
		}
		get connectionRadius() {
			return s(S(this, $e));
		}
		set connectionRadius(p) {
			P(S(this, $e), p);
		}
		get isValidConnection() {
			return s(S(this, ge));
		}
		set isValidConnection(p) {
			P(S(this, ge), p);
		}
		get selectNodesOnDrag() {
			return s(S(this, pe));
		}
		set selectNodesOnDrag(p) {
			P(S(this, pe), p);
		}
		get defaultMarkerColor() {
			return s(S(this, Ke));
		}
		set defaultMarkerColor(p) {
			P(S(this, Ke), p);
		}
		get markers() {
			return s(S(this, Se));
		}
		set markers(p) {
			P(S(this, Se), p);
		}
		get onlyRenderVisibleElements() {
			return s(S(this, Fe));
		}
		set onlyRenderVisibleElements(p) {
			P(S(this, Fe), p);
		}
		get onerror() {
			return s(S(this, rt));
		}
		set onerror(p) {
			P(S(this, rt), p);
		}
		get ondelete() {
			return s(S(this, ot));
		}
		set ondelete(p) {
			P(S(this, ot), p);
		}
		get onbeforedelete() {
			return s(S(this, Le));
		}
		set onbeforedelete(p) {
			P(S(this, Le), p);
		}
		get onbeforeconnect() {
			return s(S(this, Gt));
		}
		set onbeforeconnect(p) {
			P(S(this, Gt), p);
		}
		get onconnect() {
			return s(S(this, Ut));
		}
		set onconnect(p) {
			P(S(this, Ut), p);
		}
		get onconnectstart() {
			return s(S(this, Jt));
		}
		set onconnectstart(p) {
			P(S(this, Jt), p);
		}
		get onconnectend() {
			return s(S(this, zt));
		}
		set onconnectend(p) {
			P(S(this, zt), p);
		}
		get onbeforereconnect() {
			return s(S(this, jt));
		}
		set onbeforereconnect(p) {
			P(S(this, jt), p);
		}
		get onreconnect() {
			return s(S(this, Qt));
		}
		set onreconnect(p) {
			P(S(this, Qt), p);
		}
		get onreconnectstart() {
			return s(S(this, Vt));
		}
		set onreconnectstart(p) {
			P(S(this, Vt), p);
		}
		get onreconnectend() {
			return s(S(this, $t));
		}
		set onreconnectend(p) {
			P(S(this, $t), p);
		}
		get clickConnect() {
			return s(S(this, en));
		}
		set clickConnect(p) {
			P(S(this, en), p);
		}
		get onclickconnectstart() {
			return s(S(this, tn));
		}
		set onclickconnectstart(p) {
			P(S(this, tn), p);
		}
		get onclickconnectend() {
			return s(S(this, I));
		}
		set onclickconnectend(p) {
			P(S(this, I), p);
		}
		get clickConnectStartHandle() {
			return s(S(this, W));
		}
		set clickConnectStartHandle(p) {
			P(S(this, W), p);
		}
		get onselectiondrag() {
			return s(S(this, q));
		}
		set onselectiondrag(p) {
			P(S(this, q), p);
		}
		get onselectiondragstart() {
			return s(S(this, oe));
		}
		set onselectiondragstart(p) {
			P(S(this, oe), p);
		}
		get onselectiondragstop() {
			return s(S(this, se));
		}
		set onselectiondragstop(p) {
			P(S(this, se), p);
		}
		get colorMode() {
			return s(S(this, fe));
		}
		set colorMode(p) {
			P(S(this, fe), p);
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
				(this._connection = Eo),
				(this.clickConnectStartHandle = null),
				(this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }),
				(this.ariaLiveMessage = '');
		}
	}
	return (
		(n = new WeakMap()),
		(r = new WeakMap()),
		(o = new WeakMap()),
		(a = new WeakMap()),
		(i = new WeakMap()),
		(l = new WeakMap()),
		(c = new WeakMap()),
		(u = new WeakMap()),
		(f = new WeakMap()),
		(h = new WeakMap()),
		(d = new WeakMap()),
		(g = new WeakMap()),
		(m = new WeakMap()),
		(x = new WeakMap()),
		(C = new WeakMap()),
		(z = new WeakMap()),
		(R = new WeakMap()),
		(E = new WeakMap()),
		(M = new WeakMap()),
		(H = new WeakMap()),
		(K = new WeakMap()),
		(U = new WeakMap()),
		(J = new WeakMap()),
		(F = new WeakMap()),
		(re = new WeakMap()),
		(N = new WeakMap()),
		(b = new WeakMap()),
		(A = new WeakMap()),
		(v = new WeakMap()),
		(_ = new WeakMap()),
		(y = new WeakMap()),
		(k = new WeakMap()),
		(D = new WeakMap()),
		(T = new WeakMap()),
		(O = new WeakMap()),
		(X = new WeakMap()),
		(Q = new WeakMap()),
		(j = new WeakMap()),
		(G = new WeakMap()),
		(ee = new WeakMap()),
		(ie = new WeakMap()),
		(te = new WeakMap()),
		(ae = new WeakMap()),
		(ye = new WeakMap()),
		(Pe = new WeakMap()),
		(he = new WeakMap()),
		(Ie = new WeakMap()),
		(_e = new WeakMap()),
		(De = new WeakMap()),
		(Be = new WeakMap()),
		(Je = new WeakMap()),
		($e = new WeakMap()),
		(ge = new WeakMap()),
		(pe = new WeakMap()),
		(Ke = new WeakMap()),
		(Se = new WeakMap()),
		(Fe = new WeakMap()),
		(rt = new WeakMap()),
		(ot = new WeakMap()),
		(Le = new WeakMap()),
		(Gt = new WeakMap()),
		(Ut = new WeakMap()),
		(Jt = new WeakMap()),
		(zt = new WeakMap()),
		(jt = new WeakMap()),
		(Qt = new WeakMap()),
		(Vt = new WeakMap()),
		($t = new WeakMap()),
		(en = new WeakMap()),
		(tn = new WeakMap()),
		(I = new WeakMap()),
		(W = new WeakMap()),
		(q = new WeakMap()),
		(oe = new WeakMap()),
		(se = new WeakMap()),
		(fe = new WeakMap()),
		new t()
	);
}
const eh = dn.error001('svelte');
function Kn() {
	const e = Ao(Po);
	if (!e) throw new Error(eh);
	return e.getStore();
}
const Po = Symbol();
function th(e) {
	const t = $f(e);
	function n(N) {
		t.nodeTypes = { ...ja, ...N };
	}
	function r(N) {
		t.edgeTypes = { ...Qa, ...N };
	}
	function o(N) {
		t.edges = bf(N, t.edges, { onError: t.onerror });
	}
	const a = (N, b = !1) => {
		t.nodes = t.nodes.map((A) => {
			if (t.connection.inProgress && t.connection.fromNode.id === A.id) {
				const _ = t.nodeLookup.get(A.id);
				_ &&
					(t.connection = { ...t.connection, from: hn(_, t.connection.fromHandle, ce.Left, !0) });
			}
			const v = N.get(A.id);
			return v ? { ...A, position: v.position, dragging: b } : A;
		});
	};
	function i(N) {
		var _, y, k;
		const { changes: b, updatedInternals: A } = $d(
			N,
			t.nodeLookup,
			t.parentLookup,
			t.domNode,
			t.nodeOrigin,
			t.nodeExtent,
			t.zIndexMode,
		);
		if (!A) return;
		qd(t.nodeLookup, t.parentLookup, {
			nodeOrigin: t.nodeOrigin,
			nodeExtent: t.nodeExtent,
			zIndexMode: t.zIndexMode,
		}),
			t.fitViewQueued && t.resolveFitView();
		const v = new Map();
		for (const D of b) {
			const T = (_ = t.nodeLookup.get(D.id)) == null ? void 0 : _.internals.userNode;
			if (!T) continue;
			const O = { ...T };
			switch (D.type) {
				case 'dimensions': {
					const X = { ...O.measured, ...D.dimensions };
					D.setAttributes &&
						((O.width = ((y = D.dimensions) == null ? void 0 : y.width) ?? O.width),
						(O.height = ((k = D.dimensions) == null ? void 0 : k.height) ?? O.height)),
						(O.measured = X);
					break;
				}
				case 'position':
					O.position = D.position ?? O.position;
					break;
			}
			v.set(D.id, O);
		}
		t.nodes = t.nodes.map((D) => v.get(D.id) ?? D);
	}
	function l(N) {
		const b = t.fitViewResolver ?? Promise.withResolvers();
		return (
			(t.fitViewQueued = !0),
			(t.fitViewOptions = N),
			(t.fitViewResolver = b),
			(t.nodes = [...t.nodes]),
			b.promise
		);
	}
	async function c(N, b, A) {
		const v = typeof (A == null ? void 0 : A.zoom) < 'u' ? A.zoom : t.maxZoom,
			_ = t.panZoom;
		return _
			? (await _.setViewport(
					{ x: t.width / 2 - N * v, y: t.height / 2 - b * v, zoom: v },
					{
						duration: A == null ? void 0 : A.duration,
						ease: A == null ? void 0 : A.ease,
						interpolate: A == null ? void 0 : A.interpolate,
					},
				),
				!0)
			: !1;
	}
	async function u(N, b) {
		const A = t.panZoom;
		return A ? A.scaleBy(N, b) : !1;
	}
	async function f(N) {
		return u(1.2, N);
	}
	function h(N) {
		return u(1 / 1.2, N);
	}
	function d(N) {
		const b = t.panZoom;
		b && (b.setScaleExtent([N, t.maxZoom]), (t.minZoom = N));
	}
	function g(N) {
		const b = t.panZoom;
		b && (b.setScaleExtent([t.minZoom, N]), (t.maxZoom = N));
	}
	function m(N) {
		const b = t.panZoom;
		b && (b.setTranslateExtent(N), (t.translateExtent = N));
	}
	function x(N, b = null) {
		let A = !1;
		const v = N.map((_) =>
			(b ? b.has(_.id) : !0) && _.selected ? ((A = !0), { ..._, selected: !1 }) : _,
		);
		return [A, v];
	}
	function C(N) {
		const b = N != null && N.nodes ? new Set(N.nodes.map((D) => D.id)) : null,
			[A, v] = x(t.nodes, b);
		A && (t.nodes = v);
		const _ = N != null && N.edges ? new Set(N.edges.map((D) => D.id)) : null,
			[y, k] = x(t.edges, _);
		y && (t.edges = k);
	}
	function z(N) {
		const b = t.multiselectionKeyPressed;
		(t.nodes = t.nodes.map((A) => {
			const v = N.includes(A.id),
				_ = (b && A.selected) || v;
			return !!A.selected !== _ ? { ...A, selected: _ } : A;
		})),
			b || C({ nodes: [] });
	}
	function R(N) {
		const b = t.multiselectionKeyPressed;
		(t.edges = t.edges.map((A) => {
			const v = N.includes(A.id),
				_ = (b && A.selected) || v;
			return !!A.selected !== _ ? { ...A, selected: _ } : A;
		})),
			b || C({ edges: [] });
	}
	function E(N, b, A) {
		const v = t.nodeLookup.get(N);
		if (!v) {
			t.onerror('012', dn.error012(N));
			return;
		}
		(t.selectionRect = null),
			(t.selectionRectMode = null),
			v.selected
				? (b || (v.selected && t.multiselectionKeyPressed)) &&
					(C({ nodes: [v.internals.userNode], edges: [] }),
					requestAnimationFrame(() => (A == null ? void 0 : A.blur())))
				: z([N]);
	}
	function M(N) {
		const b = t.edgeLookup.get(N);
		if (!b) {
			t.onerror('016', dn.error016(N));
			return;
		}
		(b.selectable || (t.elementsSelectable && typeof b.selectable > 'u')) &&
			((t.selectionRect = null),
			(t.selectionRectMode = null),
			b.selected
				? b.selected && t.multiselectionKeyPressed && C({ nodes: [], edges: [b] })
				: R([N]));
	}
	function H(N, b) {
		const {
				nodeExtent: A,
				snapGrid: v,
				nodeOrigin: _,
				nodeLookup: y,
				nodesDraggable: k,
				onerror: D,
			} = t,
			T = new Map(),
			O = (v == null ? void 0 : v[0]) ?? 5,
			X = (v == null ? void 0 : v[1]) ?? 5,
			Q = N.x * O * b,
			j = N.y * X * b;
		for (const G of y.values()) {
			if (!(G.selected && (G.draggable || (k && typeof G.draggable > 'u')))) continue;
			let ie = { x: G.internals.positionAbsolute.x + Q, y: G.internals.positionAbsolute.y + j };
			v && (ie = ur(ie, v));
			const { position: te, positionAbsolute: ae } = Aa({
				nodeId: G.id,
				nextPosition: ie,
				nodeLookup: y,
				nodeExtent: A,
				nodeOrigin: _,
				onError: D,
			});
			(G.position = te), (G.internals.positionAbsolute = ae), T.set(G.id, G);
		}
		a(T);
	}
	function K(N) {
		return ef({
			delta: N,
			panZoom: t.panZoom,
			transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
			translateExtent: t.translateExtent,
			width: t.width,
			height: t.height,
		});
	}
	const U = (N) => {
		t._connection = { ...N };
	};
	function J() {
		t._connection = Eo;
	}
	function F() {
		t.resetStoreValues(), C();
	}
	return Object.assign(t, {
		setNodeTypes: n,
		setEdgeTypes: r,
		addEdge: o,
		updateNodePositions: a,
		updateNodeInternals: i,
		zoomIn: f,
		zoomOut: h,
		fitView: l,
		setCenter: c,
		setMinZoom: d,
		setMaxZoom: g,
		setTranslateExtent: m,
		unselectNodesAndEdges: C,
		addSelectedNodes: z,
		addSelectedEdges: R,
		handleNodeSelection: E,
		handleEdgeSelection: M,
		moveSelectedNodes: H,
		panBy: K,
		updateConnection: U,
		cancelConnection: J,
		reset: F,
	});
}
function go(e, t) {
	const {
			minZoom: n,
			maxZoom: r,
			initialViewport: o,
			onPanZoomStart: a,
			onPanZoom: i,
			onPanZoomEnd: l,
			translateExtent: c,
			setPanZoomInstance: u,
			onDraggingChange: f,
			onTransformChange: h,
		} = t,
		d = wf({
			domNode: e,
			minZoom: n,
			maxZoom: r,
			translateExtent: c,
			viewport: o,
			onPanZoom: i,
			onPanZoomStart: a,
			onPanZoomEnd: l,
			onDraggingChange: f,
		}),
		g = d.getViewport();
	return (
		(o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]),
		u(d),
		d.update(t),
		{
			update(m) {
				d.update(m);
			},
		}
	);
}
var nh = ne('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function rh(e, t) {
	xe(t, !0);
	const n = $(t, 'store', 15),
		r = w(() => n().panActivationKeyPressed || t.panOnDrag),
		o = w(() => n().panActivationKeyPressed || t.panOnScroll);
	const { viewport: a } = n();
	let i = !1;
	Rt(() => {
		var u;
		!i && n().viewportInitialized && ((u = t.oninit) == null || u.call(t), (i = !0));
	});
	var l = nh(),
		c = B(l);
	yt(c, () => t.children),
		V(l),
		tt(
			l,
			(u, f) => (go == null ? void 0 : go(u, f)),
			() => ({
				viewport: n().viewport,
				minZoom: n().minZoom,
				maxZoom: n().maxZoom,
				initialViewport: a,
				onDraggingChange: (u) => {
					n((n().dragging = u), !0);
				},
				setPanZoomInstance: (u) => {
					n((n().panZoom = u), !0);
				},
				onPanZoomStart: t.onmovestart,
				onPanZoom: t.onmove,
				onPanZoomEnd: t.onmoveend,
				zoomOnScroll: t.zoomOnScroll,
				zoomOnDoubleClick: t.zoomOnDoubleClick,
				zoomOnPinch: t.zoomOnPinch,
				panOnScroll: s(o),
				panOnDrag: s(r),
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
				onTransformChange: (u) => {
					n((n().viewport = { x: u[0], y: u[1], zoom: u[2] }), !0);
				},
				connectionInProgress: n().connection.inProgress,
			}),
		),
		L(e, l),
		be();
}
function Ki(e, t) {
	return (n) => {
		n.target === t && (e == null || e(n));
	};
}
function Fi(e) {
	return (t) => {
		const n = e.has(t.id);
		return !!t.selected !== n ? { ...t, selected: n } : t;
	};
}
function Yi(e, t) {
	if (e.size !== t.size) return !1;
	for (const n of e) if (!t.has(n)) return !1;
	return !0;
}
var oh = ne('<div><!></div>');
function ih(e, t) {
	xe(t, !0);
	let n = $(t, 'store', 15),
		r = $(t, 'panOnDrag', 3, !0),
		o = $(t, 'paneClickDistance', 3, 1),
		a = $(t, 'autoPanOnSelection', 3, !0),
		i,
		l = null,
		c = new Set(),
		u = new Set(),
		f = w(() => n().panActivationKeyPressed || r()),
		h = w(
			() => n().selectionKeyPressed || !!n().selectionRect || (t.selectionOnDrag && s(f) !== !0),
		),
		d = w(() => n().elementsSelectable && (s(h) || n().selectionRectMode === 'user')),
		g = !1,
		m = 0,
		x = { x: 0, y: 0 },
		C = !1;
	function z(y) {
		var j, G;
		if (((l = i == null ? void 0 : i.getBoundingClientRect()), !l)) return;
		const k = y.target === i,
			D = !k && !!y.target.closest('.nokey'),
			T = (t.selectionOnDrag && k) || n().selectionKeyPressed;
		if (D || !s(h) || !T || y.button !== 0 || !y.isPrimary) return;
		(G = (j = y.target) == null ? void 0 : j.setPointerCapture) == null || G.call(j, y.pointerId),
			(g = !1),
			(C = !1);
		const { x: O, y: X } = pt(y, l),
			Q = Bn({ x: O, y: X }, [n().viewport.x, n().viewport.y, n().viewport.zoom]);
		n((n().selectionRect = { width: 0, height: 0, startX: Q.x, startY: Q.y, x: O, y: X }), !0),
			k || (y.stopPropagation(), y.preventDefault());
	}
	function R(y, k) {
		var G, ee, ie;
		if (
			((G = n().selectionRect) == null ? void 0 : G.startX) === void 0 ||
			n().selectionRect.startY === void 0
		)
			return;
		const D = {
				x: (ee = n().selectionRect) == null ? void 0 : ee.startX,
				y: (ie = n().selectionRect) == null ? void 0 : ie.startY,
			},
			T = Rn(D, [n().viewport.x, n().viewport.y, n().viewport.zoom]),
			O = {
				startX: D.x,
				startY: D.y,
				x: y < T.x ? y : T.x,
				y: k < T.y ? k : T.y,
				width: Math.abs(y - T.x),
				height: Math.abs(k - T.y),
			},
			X = c,
			Q = u;
		c = new Set(
			Yo(
				n().nodeLookup,
				O,
				[n().viewport.x, n().viewport.y, n().viewport.zoom],
				n().selectionMode === Hr.Partial,
				!0,
			).map((te) => te.id),
		);
		const j = n().defaultEdgeOptions.selectable ?? !0;
		u = new Set();
		for (const te of c) {
			const ae = n().connectionLookup.get(te);
			if (ae)
				for (const { edgeId: ye } of ae.values()) {
					const Pe = n().edgeLookup.get(ye);
					Pe && (Pe.selectable ?? j) && u.add(ye);
				}
		}
		Yi(X, c) || n((n().nodes = n().nodes.map(Fi(c))), !0),
			Yi(Q, u) || n((n().edges = n().edges.map(Fi(u))), !0),
			n((n().selectionRectMode = 'user'), !0),
			n((n().selectionRect = O), !0);
	}
	function E() {
		if (!a() || !l) return;
		const [y, k] = Xo(x, l, n().autoPanSpeed);
		n()
			.panBy({ x: y, y: k })
			.then((D) => {
				if (!g || !D) {
					m = requestAnimationFrame(E);
					return;
				}
				R(x.x, x.y), (m = requestAnimationFrame(E));
			});
	}
	function M() {
		cancelAnimationFrame(m), (m = 0), (C = !1);
	}
	Yr(() => {
		typeof window < 'u' && M();
	});
	function H(y) {
		var O;
		if (!s(h) || !l || !n().selectionRect) return;
		const k = pt(y, l);
		x = { x: k.x, y: k.y };
		const D = { x: n().selectionRect.startX, y: n().selectionRect.startY },
			T = Rn(D, [n().viewport.x, n().viewport.y, n().viewport.zoom]);
		if (!g) {
			const X = n().selectionKeyPressed ? 0 : o();
			if (Math.hypot(k.x - T.x, k.y - T.y) <= X) return;
			n().unselectNodesAndEdges(), (O = t.onselectionstart) == null || O.call(t, y);
		}
		(g = !0), C || (E(), (C = !0)), R(k.x, k.y);
	}
	function K(y) {
		var k, D, T;
		y.button === 0 &&
			((D = (k = y.target) == null ? void 0 : k.releasePointerCapture) == null ||
				D.call(k, y.pointerId),
			!g && y.target === i && (re == null || re(y)),
			n((n().selectionRect = null), !0),
			g && n((n().selectionRectMode = c.size > 0 ? 'nodes' : null), !0),
			g && ((T = t.onselectionend) == null || T.call(t, y)),
			M());
	}
	function U(y) {
		var k, D;
		(D = (k = y.target) == null ? void 0 : k.releasePointerCapture) == null ||
			D.call(k, y.pointerId),
			M();
	}
	const J = (y) => {
			var k;
			if (Array.isArray(s(f)) && s(f).includes(2)) {
				y.preventDefault();
				return;
			}
			(k = t.onpanecontextmenu) == null || k.call(t, { event: y });
		},
		F = (y) => {
			g && (y.stopPropagation(), (g = !1));
		};
	function re(y) {
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
	var N = oh();
	let b;
	var A = w(() => (s(d) ? void 0 : Ki(re, i))),
		v = w(() => Ki(J, i)),
		_ = B(N);
	yt(_, () => t.children),
		V(N),
		ar(
			N,
			(y) => (i = y),
			() => i,
		),
		de(
			(y) => (b = qe(N, 1, 'svelte-flow__pane svelte-flow__container', null, b, y)),
			[
				() => ({
					draggable: r() === !0 || (Array.isArray(r()) && r().includes(0)),
					dragging: n().dragging,
					selection: s(h),
				}),
			],
		),
		me('click', N, function (...y) {
			var k;
			(k = s(A)) == null || k.apply(this, y);
		}),
		Gn(
			'pointerdown',
			N,
			function (...y) {
				var k;
				(k = s(d) ? z : void 0) == null || k.apply(this, y);
			},
			!0,
		),
		me('pointermove', N, function (...y) {
			var k;
			(k = s(d) ? H : void 0) == null || k.apply(this, y);
		}),
		me('pointerup', N, function (...y) {
			var k;
			(k = s(d) ? K : void 0) == null || k.apply(this, y);
		}),
		Gn('pointercancel', N, function (...y) {
			var k;
			(k = s(d) ? U : void 0) == null || k.apply(this, y);
		}),
		me('contextmenu', N, function (...y) {
			var k;
			(k = s(v)) == null || k.apply(this, y);
		}),
		Gn(
			'click',
			N,
			function (...y) {
				var k;
				(k = s(d) ? F : void 0) == null || k.apply(this, y);
			},
			!0,
		),
		L(e, N),
		be();
}
Oo(['click', 'pointermove', 'pointerup', 'contextmenu']);
var ah = ne('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function sh(e, t) {
	xe(t, !0);
	var n = ah();
	let r;
	var o = B(n);
	yt(o, () => t.children),
		V(n),
		de(
			() =>
				(r = _t(n, '', r, {
					transform: `translate(${t.store.viewport.x ?? ''}px, ${t.store.viewport.y ?? ''}px) scale(${t.store.viewport.zoom ?? ''})`,
				})),
		),
		L(e, n),
		be();
}
function An(e, t) {
	const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t,
		l = of({
			onDrag: r,
			onDragStart: o,
			onDragStop: a,
			onNodeMouseDown: i,
			getStoreItems: () => {
				const { snapGrid: u, viewport: f } = n;
				return {
					nodes: n.nodes,
					nodeLookup: n.nodeLookup,
					edges: n.edges,
					nodeExtent: n.nodeExtent,
					snapGrid: u || [0, 0],
					snapToGrid: !!u,
					nodeOrigin: n.nodeOrigin,
					multiSelectionActive: n.multiselectionKeyPressed,
					domNode: n.domNode,
					transform: [f.x, f.y, f.zoom],
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
	function c(u, f) {
		if (f.disabled) {
			l.destroy();
			return;
		}
		l.update({
			domNode: u,
			noDragClassName: f.noDragClass,
			handleSelector: f.handleSelector,
			nodeId: f.nodeId,
			isSelectable: f.isSelectable,
			nodeClickDistance: f.nodeClickDistance,
		});
	}
	return (
		c(e, t),
		{
			update(u) {
				c(e, u);
			},
			destroy() {
				l.destroy();
			},
		}
	);
}
var lh = ne(
		'<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>',
	),
	ch = ne(
		'<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>',
		1,
	);
function uh(e, t) {
	xe(t, !0);
	var n = ch(),
		r = we(n),
		o = B(r, !0);
	V(r);
	var a = Y(r, 2),
		i = B(a, !0);
	V(a);
	var l = Y(a, 2);
	var c = (u) => {
		var f = lh(),
			h = B(f, !0);
		V(f),
			de(() => {
				Te(f, 'id', `${dh}-${t.store.flowId}`), Me(h, t.store.ariaLiveMessage);
			}),
			L(u, f);
	};
	le(l, (u) => {
		t.store.disableKeyboardA11y || u(c);
	});
	de(() => {
		Te(r, 'id', `${$a}-${t.store.flowId}`),
			Me(
				o,
				t.store.disableKeyboardA11y
					? t.store.ariaLabelConfig['node.a11yDescription.default']
					: t.store.ariaLabelConfig['node.a11yDescription.keyboardDisabled'],
			),
			Te(a, 'id', `${es}-${t.store.flowId}`),
			Me(i, t.store.ariaLabelConfig['edge.a11yDescription.default']);
	}),
		L(e, n),
		be();
}
const $a = 'svelte-flow__node-desc',
	es = 'svelte-flow__edge-desc',
	dh = 'svelte-flow__aria-live';
var fh = ne('<div><!></div>');
function hh(e, t) {
	xe(t, !0);
	const n = $(t, 'store', 15),
		r = w(() => je(t.node.data, () => ({}), !0)),
		o = w(() => je(t.node.selected, !1)),
		a = w(() => t.node.draggable),
		i = w(() => t.node.selectable),
		l = w(() => je(t.node.deletable, !0)),
		c = w(() => t.node.connectable),
		u = w(() => t.node.focusable),
		f = w(() => je(t.node.hidden, !1)),
		h = w(() => je(t.node.dragging, !1)),
		d = w(() => je(t.node.style, '')),
		g = w(() => t.node.class),
		m = w(() => je(t.node.type, 'default')),
		x = w(() => t.node.parentId),
		C = w(() => t.node.sourcePosition),
		z = w(() => t.node.targetPosition),
		R = w(() => je(t.node.measured, () => ({ width: 0, height: 0 }), !0).width),
		E = w(() => je(t.node.measured, () => ({ width: 0, height: 0 }), !0).height),
		M = w(() => t.node.initialWidth),
		H = w(() => t.node.initialHeight),
		K = w(() => t.node.width),
		U = w(() => t.node.height),
		J = w(() => t.node.dragHandle),
		F = w(() => je(t.node.internals.z, 0)),
		re = w(() => t.node.internals.positionAbsolute.x),
		N = w(() => t.node.internals.positionAbsolute.y),
		b = w(() => t.node.internals.userNode),
		{ id: A } = t.node,
		v = w(() => s(a) ?? n().nodesDraggable),
		_ = w(() => s(i) ?? n().elementsSelectable),
		y = w(() => s(c) ?? n().nodesConnectable),
		k = w(() => Ad(t.node)),
		D = w(() => !!t.node.internals.handleBounds),
		T = w(() => s(k) && s(D)),
		O = w(() => s(u) ?? n().nodesFocusable);
	function X(ge) {
		return n().parentLookup.has(ge);
	}
	let Q = w(() => X(A)),
		j = ue(null),
		G = null,
		ee = s(m),
		ie = s(C),
		te = s(z),
		ae = w(() => n().nodeTypes[s(m)] ?? Ua),
		ye = w(() => n().ariaLabelConfig),
		Pe = {
			get value() {
				return s(y);
			},
		};
	_f(A), Sf(Pe);
	const he = w(() => {
		const ge = s(R) === void 0 ? (s(K) ?? s(M)) : s(K),
			pe = s(E) === void 0 ? (s(U) ?? s(H)) : s(U);
		if (!(ge === void 0 && pe === void 0 && s(d) === void 0))
			return `${s(d)};${ge ? `width:${Pt(ge)};` : ''}${pe ? `height:${Pt(pe)};` : ''}`;
	});
	Rt(() => {
		(s(m) !== ee || s(C) !== ie || s(z) !== te) &&
			s(j) !== null &&
			requestAnimationFrame(() => {
				s(j) !== null &&
					n().updateNodeInternals(new Map([[A, { id: A, nodeElement: s(j), force: !0 }]]));
			}),
			(ee = s(m)),
			(ie = s(C)),
			(te = s(z));
	}),
		Rt(() => {
			t.resizeObserver &&
				(!s(T) || s(j) !== G) &&
				(G && t.resizeObserver.unobserve(G), s(j) && t.resizeObserver.observe(s(j)), (G = s(j)));
		}),
		Yr(() => {
			var ge;
			G && ((ge = t.resizeObserver) == null || ge.unobserve(G));
		});
	function Ie(ge) {
		var pe;
		s(_) &&
			(!n().selectNodesOnDrag || !s(v) || n().nodeDragThreshold > 0) &&
			n().handleNodeSelection(A),
			(pe = t.onnodeclick) == null || pe.call(t, { node: s(b), event: ge });
	}
	function _e(ge) {
		if (!(Da(ge) || n().disableKeyboardA11y))
			if (Na.includes(ge.key) && s(_)) {
				const pe = ge.key === 'Escape';
				n().handleNodeSelection(A, pe, s(j));
			} else
				s(v) &&
					t.node.selected &&
					Object.hasOwn(Br, ge.key) &&
					(ge.preventDefault(),
					n(
						(n().ariaLiveMessage = s(ye)['node.a11yDescription.ariaLiveMessage']({
							direction: ge.key.replace('Arrow', '').toLowerCase(),
							x: ~~t.node.internals.positionAbsolute.x,
							y: ~~t.node.internals.positionAbsolute.y,
						})),
						!0,
					),
					n().moveSelectedNodes(Br[ge.key], ge.shiftKey ? 4 : 1));
	}
	const De = () => {
		var Fe;
		if (
			n().disableKeyboardA11y ||
			!n().autoPanOnNodeFocus ||
			!((Fe = s(j)) != null && Fe.matches(':focus-visible'))
		)
			return;
		const { width: ge, height: pe, viewport: Ke } = n();
		Yo(new Map([[A, t.node]]), { x: 0, y: 0, width: ge, height: pe }, [Ke.x, Ke.y, Ke.zoom], !0)
			.length > 0 ||
			n().setCenter(
				t.node.position.x + (t.node.measured.width ?? 0) / 2,
				t.node.position.y + (t.node.measured.height ?? 0) / 2,
				{ zoom: Ke.zoom },
			);
	};
	var Be = Qe(),
		Je = we(Be);
	var $e = (ge) => {
		var pe = fh();
		qt(pe, () => ({
			'data-id': A,
			class: ['svelte-flow__node', `svelte-flow__node-${s(m)}`, s(g)],
			style: s(he),
			onclick: Ie,
			onpointerenter: t.onnodepointerenter
				? (Se) => t.onnodepointerenter({ node: s(b), event: Se })
				: void 0,
			onpointerleave: t.onnodepointerleave
				? (Se) => t.onnodepointerleave({ node: s(b), event: Se })
				: void 0,
			onpointermove: t.onnodepointermove
				? (Se) => t.onnodepointermove({ node: s(b), event: Se })
				: void 0,
			oncontextmenu: t.onnodecontextmenu
				? (Se) => t.onnodecontextmenu({ node: s(b), event: Se })
				: void 0,
			onkeydown: s(O) ? _e : void 0,
			onfocus: s(O) ? De : void 0,
			tabIndex: s(O) ? 0 : void 0,
			role: t.node.ariaRole ?? (s(O) ? 'group' : void 0),
			'aria-label': t.node.ariaLabel,
			'aria-roledescription': 'node',
			'aria-describedby': n().disableKeyboardA11y ? void 0 : `${$a}-${n().flowId}`,
			...t.node.domAttributes,
			[To]: {
				dragging: s(h),
				selected: s(o),
				draggable: s(v),
				connectable: s(y),
				selectable: s(_),
				nopan: s(v),
				parent: s(Q),
			},
			[Xr]: {
				'z-index': s(F),
				transform: `translate(${s(re) ?? ''}px, ${s(N) ?? ''}px)`,
				visibility: s(k) ? 'visible' : 'hidden',
			},
		}));
		var Ke = B(pe);
		zo(
			Ke,
			() => s(ae),
			(Se, Fe) => {
				Fe(Se, {
					get data() {
						return s(r);
					},
					get id() {
						return A;
					},
					get selected() {
						return s(o);
					},
					get selectable() {
						return s(_);
					},
					get deletable() {
						return s(l);
					},
					get sourcePosition() {
						return s(C);
					},
					get targetPosition() {
						return s(z);
					},
					get zIndex() {
						return s(F);
					},
					get dragging() {
						return s(h);
					},
					get draggable() {
						return s(v);
					},
					get dragHandle() {
						return s(J);
					},
					get parentId() {
						return s(x);
					},
					get type() {
						return s(m);
					},
					get isConnectable() {
						return s(y);
					},
					get positionAbsoluteX() {
						return s(re);
					},
					get positionAbsoluteY() {
						return s(N);
					},
					get width() {
						return s(K);
					},
					get height() {
						return s(U);
					},
				});
			},
		),
			V(pe),
			tt(
				pe,
				(Se, Fe) => (An == null ? void 0 : An(Se, Fe)),
				() => ({
					nodeId: A,
					isSelectable: s(_),
					disabled: !s(v),
					handleSelector: s(J),
					noDragClass: n().noDragClass,
					nodeClickDistance: t.nodeClickDistance,
					onNodeMouseDown: n().handleNodeSelection,
					onDrag: (Se, Fe, rt, ot) => {
						var Le;
						(Le = t.onnodedrag) == null || Le.call(t, { event: Se, targetNode: rt, nodes: ot });
					},
					onDragStart: (Se, Fe, rt, ot) => {
						var Le;
						(Le = t.onnodedragstart) == null ||
							Le.call(t, { event: Se, targetNode: rt, nodes: ot });
					},
					onDragStop: (Se, Fe, rt, ot) => {
						var Le;
						(Le = t.onnodedragstop) == null || Le.call(t, { event: Se, targetNode: rt, nodes: ot });
					},
					store: n(),
				}),
			),
			ar(
				pe,
				(Se) => P(j, Se),
				() => s(j),
			),
			L(ge, pe);
	};
	le(Je, (ge) => {
		s(f) || ge($e);
	});
	L(e, Be), be();
}
var gh = ne('<div class="svelte-flow__nodes"></div>');
function vh(e, t) {
	xe(t, !0);
	const n = $(t, 'store', 15);
	const r =
		typeof ResizeObserver > 'u'
			? null
			: new ResizeObserver((a) => {
					const i = new Map();
					a.forEach((l) => {
						const c = l.target.getAttribute('data-id');
						i.set(c, { id: c, nodeElement: l.target, force: !0 });
					}),
						n().updateNodeInternals(i);
				});
	Yr(() => {
		r == null || r.disconnect();
	});
	var o = gh();
	Jn(
		o,
		21,
		() => n().visible.nodes.values(),
		(a) => a.id,
		(a, i) => {
			hh(a, {
				get node() {
					return s(i);
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
				set store(l) {
					n(l);
				},
			});
		},
	),
		V(o),
		L(e, o),
		be();
}
var yh = ze('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function mh(e, t) {
	xe(t, !0);
	const n = w(() => t.edge.id),
		r = w(() => t.edge.source),
		o = w(() => t.edge.target),
		a = w(() => t.edge.sourceX),
		i = w(() => t.edge.sourceY),
		l = w(() => t.edge.targetX),
		c = w(() => t.edge.targetY),
		u = w(() => t.edge.sourcePosition),
		f = w(() => t.edge.targetPosition),
		h = w(() => je(t.edge.animated, !1)),
		d = w(() => je(t.edge.selected, !1)),
		g = w(() => t.edge.label),
		m = w(() => t.edge.labelStyle),
		x = w(() => je(t.edge.data, () => ({}), !0)),
		C = w(() => t.edge.style),
		z = w(() => t.edge.interactionWidth),
		R = w(() => je(t.edge.type, 'default')),
		E = w(() => t.edge.sourceHandle),
		M = w(() => t.edge.targetHandle),
		H = w(() => t.edge.markerStart),
		K = w(() => t.edge.markerEnd),
		U = w(() => t.edge.selectable),
		J = w(() => t.edge.focusable),
		F = w(() => je(t.edge.deletable, !0)),
		re = w(() => t.edge.hidden),
		N = w(() => t.edge.zIndex),
		b = w(() => t.edge.class),
		A = w(() => t.edge.ariaLabel);
	Ef(s(n));
	let v = null,
		_ = w(() => s(U) ?? t.store.elementsSelectable),
		y = w(() => s(J) ?? t.store.edgesFocusable),
		k = w(() => t.store.edgeTypes[s(R)] ?? Ja),
		D = w(() => (s(H) ? `url('#${No(s(H), t.store.flowId)}')` : void 0)),
		T = w(() => (s(K) ? `url('#${No(s(K), t.store.flowId)}')` : void 0));
	function O(ie) {
		var ae;
		const te = t.store.edgeLookup.get(s(n));
		te &&
			(s(_) && t.store.handleEdgeSelection(s(n)),
			(ae = t.onedgeclick) == null || ae.call(t, { event: ie, edge: te }));
	}
	function X(ie, te) {
		const ae = t.store.edgeLookup.get(s(n));
		ae && te({ event: ie, edge: ae });
	}
	function Q(ie) {
		if (!t.store.disableKeyboardA11y && Na.includes(ie.key) && s(_)) {
			const { unselectNodesAndEdges: te, addSelectedEdges: ae } = t.store;
			ie.key === 'Escape' ? (v == null || v.blur(), te({ edges: [t.edge] })) : ae([s(n)]);
		}
	}
	var j = Qe(),
		G = we(j);
	var ee = (ie) => {
		var te = yh();
		let ae;
		var ye = B(te);
		qt(ye, () => ({
			class: ['svelte-flow__edge', s(b)],
			'data-id': s(n),
			onclick: O,
			oncontextmenu: t.onedgecontextmenu
				? (he) => {
						X(he, t.onedgecontextmenu);
					}
				: void 0,
			onpointerenter: t.onedgepointerenter
				? (he) => {
						X(he, t.onedgepointerenter);
					}
				: void 0,
			onpointerleave: t.onedgepointerleave
				? (he) => {
						X(he, t.onedgepointerleave);
					}
				: void 0,
			'aria-label': s(A) === null ? void 0 : s(A) ? s(A) : `Edge from ${s(r)} to ${s(o)}`,
			'aria-describedby': s(y) ? `${es}-${t.store.flowId}` : void 0,
			role: t.edge.ariaRole ?? (s(y) ? 'group' : 'img'),
			'aria-roledescription': 'edge',
			onkeydown: s(y) ? Q : void 0,
			tabindex: s(y) ? 0 : void 0,
			...t.edge.domAttributes,
			[To]: { animated: s(h), selected: s(d), selectable: s(_) },
		}));
		var Pe = B(ye);
		zo(
			Pe,
			() => s(k),
			(he, Ie) => {
				Ie(he, {
					get id() {
						return s(n);
					},
					get source() {
						return s(r);
					},
					get target() {
						return s(o);
					},
					get sourceX() {
						return s(a);
					},
					get sourceY() {
						return s(i);
					},
					get targetX() {
						return s(l);
					},
					get targetY() {
						return s(c);
					},
					get sourcePosition() {
						return s(u);
					},
					get targetPosition() {
						return s(f);
					},
					get animated() {
						return s(h);
					},
					get selected() {
						return s(d);
					},
					get label() {
						return s(g);
					},
					get labelStyle() {
						return s(m);
					},
					get data() {
						return s(x);
					},
					get style() {
						return s(C);
					},
					get interactionWidth() {
						return s(z);
					},
					get selectable() {
						return s(_);
					},
					get deletable() {
						return s(F);
					},
					get type() {
						return s(R);
					},
					get sourceHandleId() {
						return s(E);
					},
					get targetHandleId() {
						return s(M);
					},
					get markerStart() {
						return s(D);
					},
					get markerEnd() {
						return s(T);
					},
				});
			},
		),
			V(ye),
			ar(
				ye,
				(he) => (v = he),
				() => v,
			),
			V(te),
			de(() => (ae = _t(te, '', ae, { 'z-index': s(N) }))),
			L(ie, te);
	};
	le(G, (ie) => {
		s(re) || ie(ee);
	});
	L(e, j), be();
}
ks();
var wh = ze('<defs></defs>');
function xh(e, t) {
	xe(t, !1);
	const n = Kn();
	Os();
	var r = wh();
	Jn(
		r,
		5,
		() => n.markers,
		(o) => o.id,
		(o, a) => {
			kh(
				o,
				Sn(() => s(a)),
			);
		},
	),
		V(r),
		L(e, r),
		be();
}
var bh = ze(
		'<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>',
	),
	ph = ze(
		'<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>',
	),
	_h = ze(
		'<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>',
	);
function kh(e, t) {
	xe(t, !0);
	const n = $(t, 'width', 3, 12.5),
		r = $(t, 'height', 3, 12.5),
		o = $(t, 'markerUnits', 3, 'strokeWidth'),
		a = $(t, 'orient', 3, 'auto-start-reverse'),
		i = $(t, 'color', 3, 'none');
	var l = _h(),
		c = B(l);
	var u = (h) => {
			var d = bh();
			let g;
			de(() => {
				Te(d, 'stroke-width', t.strokeWidth), (g = _t(d, '', g, { stroke: i() }));
			}),
				L(h, d);
		},
		f = (h) => {
			var d = ph();
			let g;
			de(() => {
				Te(d, 'stroke-width', t.strokeWidth), (g = _t(d, '', g, { stroke: i(), fill: i() }));
			}),
				L(h, d);
		};
	le(c, (h) => {
		t.type === Rr.Arrow ? h(u) : t.type === Rr.ArrowClosed && h(f, 1);
	});
	V(l),
		de(() => {
			Te(l, 'id', t.id),
				Te(l, 'markerWidth', `${n()}`),
				Te(l, 'markerHeight', `${r()}`),
				Te(l, 'markerUnits', o()),
				Te(l, 'orient', a());
		}),
		L(e, l),
		be();
}
var Sh = ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Ch(e, t) {
	xe(t, !0);
	const n = $(t, 'store', 15);
	var r = Sh(),
		o = B(r),
		a = B(o);
	xh(a, {}), V(o);
	var i = Y(o, 2);
	Jn(
		i,
		17,
		() => n().visible.edges.values(),
		(l) => l.id,
		(l, c) => {
			mh(l, {
				get edge() {
					return s(c);
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
				set store(u) {
					n(u);
				},
			});
		},
	),
		V(r),
		L(e, r),
		be();
}
var Eh = ne('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function ts(e, t) {
	xe(t, !0);
	const n = $(t, 'x', 3, 0),
		r = $(t, 'y', 3, 0),
		o = $(t, 'width', 3, 0),
		a = $(t, 'height', 3, 0),
		i = $(t, 'isVisible', 3, !0);
	var l = Qe(),
		c = we(l);
	var u = (f) => {
		var h = Eh();
		let d;
		de(
			(g) => (d = _t(h, '', d, g)),
			[
				() => ({
					width: typeof o() == 'string' ? o() : Pt(o()),
					height: typeof a() == 'string' ? a() : Pt(a()),
					transform: `translate(${n()}px, ${r()}px)`,
				}),
			],
		),
			L(f, h);
	};
	le(c, (f) => {
		i() && f(u);
	});
	L(e, l), be();
}
var Mh = ne('<div><!></div>');
function Nh(e, t) {
	xe(t, !0);
	const n = ue(void 0);
	Rt(() => {
		var h;
		t.store.disableKeyboardA11y || (h = s(n)) == null || h.focus({ preventScroll: !0 });
	});
	const r = w(() => {
		if (t.store.selectionRectMode === 'nodes') {
			t.store.nodes;
			const h = Jr(t.store.nodeLookup, { filter: (d) => !!d.selected });
			if (h.width > 0 && h.height > 0) return h;
		}
		return null;
	});
	function o(h) {
		var g;
		const d = t.store.nodes.filter((m) => m.selected);
		(g = t.onselectioncontextmenu) == null || g.call(t, { nodes: d, event: h });
	}
	function a(h) {
		var g;
		const d = t.store.nodes.filter((m) => m.selected);
		(g = t.onselectionclick) == null || g.call(t, { nodes: d, event: h });
	}
	function i(h) {
		Object.hasOwn(Br, h.key) &&
			(h.preventDefault(), t.store.moveSelectedNodes(Br[h.key], h.shiftKey ? 4 : 1));
	}
	var l = Qe(),
		c = we(l);
	var u = (h) => {
			var d = Mh();
			let g;
			var m = B(d);
			ts(m, { width: '100%', height: '100%', x: 0, y: 0 }),
				V(d),
				tt(
					d,
					(x, C) => (An == null ? void 0 : An(x, C)),
					() => ({
						disabled: !1,
						store: t.store,
						onDrag: (x, C, z, R) => {
							var E;
							(E = t.onnodedrag) == null || E.call(t, { event: x, targetNode: null, nodes: R });
						},
						onDragStart: (x, C, z, R) => {
							var E;
							(E = t.onnodedragstart) == null ||
								E.call(t, { event: x, targetNode: null, nodes: R });
						},
						onDragStop: (x, C, z, R) => {
							var E;
							(E = t.onnodedragstop) == null || E.call(t, { event: x, targetNode: null, nodes: R });
						},
					}),
				),
				ar(
					d,
					(x) => P(n, x),
					() => s(n),
				),
				de(
					(x) => {
						qe(d, 1, Io(['svelte-flow__selection-wrapper', t.store.noPanClass]), 'svelte-sf2y5e'),
							Te(d, 'role', t.store.disableKeyboardA11y ? void 0 : 'button'),
							Te(d, 'tabindex', t.store.disableKeyboardA11y ? void 0 : -1),
							(g = _t(d, '', g, x));
					},
					[
						() => ({
							width: Pt(s(r).width),
							height: Pt(s(r).height),
							transform: `translate(${s(r).x ?? ''}px, ${s(r).y ?? ''}px)`,
						}),
					],
				),
				me('contextmenu', d, o),
				me('click', d, a),
				me('keydown', d, function (...x) {
					var C;
					(C = t.store.disableKeyboardA11y ? void 0 : i) == null || C.apply(this, x);
				}),
				L(h, d);
		},
		f = w(() => t.store.selectionRectMode === 'nodes' && s(r) && Ht(s(r).x) && Ht(s(r).y));
	le(c, (h) => {
		s(f) && h(u);
	});
	L(e, l), be();
}
Oo(['contextmenu', 'click', 'keydown']);
function Ph(e) {
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
function ke(e, t) {
	let { enabled: n = !0, trigger: r, type: o = 'keydown' } = t;
	function a(l) {
		var f;
		const c = Array.isArray(r) ? r : [r],
			u = [l.metaKey, l.altKey, l.shiftKey, l.ctrlKey].reduce(
				(h, d, g) => (d ? h | (1 << g) : h),
				0,
			);
		for (const h of c) {
			const d = { preventDefault: !1, enabled: !0, ...h },
				{ modifier: g, key: m, callback: x, preventDefault: C, enabled: z } = d;
			if (z) {
				if (l.key !== m) continue;
				if (g === null || g === !1) {
					if (u !== 0) continue;
				} else if (
					g !== void 0 &&
					((f = g == null ? void 0 : g[0]) == null ? void 0 : f.length) > 0
				) {
					const E = Array.isArray(g) ? g : [g];
					let M = !1;
					for (const H of E)
						if ((Array.isArray(H) ? H : [H]).reduce((U, J) => U | Ph(J), 0) === u) {
							M = !0;
							break;
						}
					if (!M) continue;
				}
				C && l.preventDefault();
				const R = { node: e, trigger: d, originalEvent: l };
				e.dispatchEvent(new CustomEvent('shortcut', { detail: R })), x == null || x(R);
			}
		}
	}
	let i;
	return (
		n && (i = vo(e, o, a)),
		{
			update: (l) => {
				const { enabled: c = !0, type: u = 'keydown' } = l;
				n && (!c || o !== u) ? i == null || i() : !n && c && (i = vo(e, u, a)),
					(n = c),
					(o = u),
					(r = l.trigger);
			},
			destroy: () => {
				i == null || i();
			},
		}
	);
}
function Ah() {
	const e = w(Kn),
		t = (a) => {
			var u, f;
			const i = Vi(a) ? a : s(e).nodeLookup.get(a.id),
				l = i.parentId
					? zd(i.position, i.measured, i.parentId, s(e).nodeLookup, s(e).nodeOrigin)
					: i.position,
				c = {
					...i,
					position: l,
					width: ((u = i.measured) == null ? void 0 : u.width) ?? i.width,
					height: ((f = i.measured) == null ? void 0 : f.height) ?? i.height,
				};
			return Hn(c);
		};
	function n(a, i, l = { replace: !1 }) {
		s(e).nodes = Zt(() => s(e).nodes).map((c) => {
			if (c.id === a) {
				const u = typeof i == 'function' ? i(c) : i;
				return l != null && l.replace && Vi(u) ? u : { ...c, ...u };
			}
			return c;
		});
	}
	function r(a, i, l = { replace: !1 }) {
		s(e).edges = Zt(() => s(e).edges).map((c) => {
			if (c.id === a) {
				const u = typeof i == 'function' ? i(c) : i;
				return l.replace && Hf(u) ? u : { ...c, ...u };
			}
			return c;
		});
	}
	const o = (a) => s(e).nodeLookup.get(a);
	return {
		zoomIn: s(e).zoomIn,
		zoomOut: s(e).zoomOut,
		getInternalNode: o,
		getNode: (a) => {
			var i;
			return (i = o(a)) == null ? void 0 : i.internals.userNode;
		},
		getNodes: (a) => (a === void 0 ? s(e).nodes : Xi(s(e).nodeLookup, a)),
		getEdge: (a) => s(e).edgeLookup.get(a),
		getEdges: (a) => (a === void 0 ? s(e).edges : Xi(s(e).edgeLookup, a)),
		setZoom: async (a, i) => {
			const l = s(e).panZoom;
			return l ? l.scaleTo(a, i) : !1;
		},
		getZoom: () => s(e).viewport.zoom,
		setViewport: async (a, i) => {
			const l = s(e).viewport;
			return s(e).panZoom
				? (await s(e).panZoom.setViewport(
						{ x: a.x ?? l.x, y: a.y ?? l.y, zoom: a.zoom ?? l.zoom },
						i,
					),
					!0)
				: !1;
		},
		getViewport: () => Qi(s(e).viewport),
		setCenter: async (a, i, l) => s(e).setCenter(a, i, l),
		fitView: (a) => s(e).fitView(a),
		fitBounds: async (a, i) => {
			if (!s(e).panZoom) return !1;
			const l = Wo(
				a,
				s(e).width,
				s(e).height,
				s(e).minZoom,
				s(e).maxZoom,
				(i == null ? void 0 : i.padding) ?? 0.1,
			);
			return (
				await s(e).panZoom.setViewport(l, {
					duration: i == null ? void 0 : i.duration,
					ease: i == null ? void 0 : i.ease,
					interpolate: i == null ? void 0 : i.interpolate,
				}),
				!0
			);
		},
		getIntersectingNodes: (a, i = !0, l) => {
			const c = Mi(a),
				u = c ? a : t(a);
			return u
				? (l || s(e).nodes).filter((f) => {
						const h = s(e).nodeLookup.get(f.id);
						if (!h || (!c && f.id === a.id)) return !1;
						const d = Hn(h),
							g = tr(d, u);
						return (i && g > 0) || g >= d.width * d.height || g >= u.width * u.height;
					})
				: [];
		},
		isNodeIntersecting: (a, i, l = !0) => {
			const u = Mi(a) ? a : t(a);
			if (!u) return !1;
			const f = tr(u, i);
			return (l && f > 0) || f >= i.width * i.height || f >= u.width * u.height;
		},
		deleteElements: async ({ nodes: a = [], edges: i = [] }) => {
			var u, f;
			const { nodes: l, edges: c } = await Ed({
				nodesToRemove: a,
				edgesToRemove: i,
				nodes: s(e).nodes,
				edges: s(e).edges,
				onBeforeDelete: s(e).onbeforedelete,
			});
			return (
				l && (s(e).nodes = Zt(() => s(e).nodes).filter((h) => !l.some(({ id: d }) => d === h.id))),
				c && (s(e).edges = Zt(() => s(e).edges).filter((h) => !c.some(({ id: d }) => d === h.id))),
				(l.length > 0 || c.length > 0) &&
					((f = (u = s(e)).ondelete) == null || f.call(u, { nodes: l, edges: c })),
				{ deletedNodes: l, deletedEdges: c }
			);
		},
		screenToFlowPosition: (a, i = { snapToGrid: !0 }) => {
			if (!s(e).domNode) return a;
			const l = i.snapToGrid ? s(e).snapGrid : !1,
				{ x: c, y: u, zoom: f } = s(e).viewport,
				{ x: h, y: d } = s(e).domNode.getBoundingClientRect(),
				g = { x: a.x - h, y: a.y - d };
			return Bn(g, [c, u, f], l !== null, l || [1, 1]);
		},
		flowToScreenPosition: (a) => {
			if (!s(e).domNode) return a;
			const { x: i, y: l, zoom: c } = s(e).viewport,
				{ x: u, y: f } = s(e).domNode.getBoundingClientRect(),
				h = Rn(a, [i, l, c]);
			return { x: h.x + u, y: h.y + f };
		},
		toObject: () =>
			structuredClone({
				nodes: [...s(e).nodes],
				edges: [...s(e).edges],
				viewport: { ...s(e).viewport },
			}),
		updateNode: n,
		updateNodeData: (a, i, l) => {
			var f;
			const c = (f = s(e).nodeLookup.get(a)) == null ? void 0 : f.internals.userNode;
			if (!c) return;
			const u = typeof i == 'function' ? i(c) : i;
			n(a, (h) => ({ ...h, data: l != null && l.replace ? u : { ...h.data, ...u } }));
		},
		updateEdge: r,
		getNodesBounds: (a) => _d(a, { nodeLookup: s(e).nodeLookup, nodeOrigin: s(e).nodeOrigin }),
		getHandleConnections: ({ type: a, id: i, nodeId: l }) => {
			var c;
			return Array.from(
				((c = s(e).connectionLookup.get(`${l}-${a}-${i ?? null}`)) == null ? void 0 : c.values()) ??
					[],
			);
		},
	};
}
function Xi(e, t) {
	var r;
	const n = [];
	for (const o of t) {
		const a = e.get(o);
		if (a) {
			const i = 'internals' in a ? ((r = a.internals) == null ? void 0 : r.userNode) : a;
			n.push(i);
		}
	}
	return n;
}
function zh(e, t) {
	xe(t, !0);
	const n = $(t, 'store', 15),
		r = $(t, 'selectionKey', 3, 'Shift'),
		o = $(t, 'multiSelectionKey', 19, () => (Vr() ? 'Meta' : 'Control')),
		a = $(t, 'deleteKey', 3, 'Backspace'),
		i = $(t, 'panActivationKey', 3, ' '),
		l = $(t, 'zoomActivationKey', 19, () => (Vr() ? 'Meta' : 'Control')),
		{ deleteElements: c } = Ah();
	function u(x) {
		return x !== null && typeof x == 'object';
	}
	function f(x) {
		return u(x) ? x.modifier || [] : [];
	}
	function h(x) {
		return x == null ? '' : u(x) ? x.key : x;
	}
	function d(x, C) {
		return (Array.isArray(x) ? x : [x]).map((R) => {
			const E = h(R);
			return { key: E, modifier: f(R), enabled: E !== null, callback: C };
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
		const x = n().nodes.filter((z) => z.selected),
			C = n().edges.filter((z) => z.selected);
		c({ nodes: x, edges: C });
	}
	Gn('blur', gt, g),
		Gn('contextmenu', gt, g),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({ trigger: d(r(), () => n((n().selectionKeyPressed = !0), !0)), type: 'keydown' }),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({ trigger: d(r(), () => n((n().selectionKeyPressed = !1), !0)), type: 'keyup' }),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({
				trigger: d(o(), () => {
					n((n().multiselectionKeyPressed = !0), !0);
				}),
				type: 'keydown',
			}),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({ trigger: d(o(), () => n((n().multiselectionKeyPressed = !1), !0)), type: 'keyup' }),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({
				trigger: d(a(), (x) => {
					!(x.originalEvent.ctrlKey || x.originalEvent.metaKey || x.originalEvent.shiftKey) &&
						!Da(x.originalEvent) &&
						(n((n().deleteKeyPressed = !0), !0), m());
				}),
				type: 'keydown',
			}),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({ trigger: d(a(), () => n((n().deleteKeyPressed = !1), !0)), type: 'keyup' }),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({ trigger: d(i(), () => n((n().panActivationKeyPressed = !0), !0)), type: 'keydown' }),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({ trigger: d(i(), () => n((n().panActivationKeyPressed = !1), !0)), type: 'keyup' }),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({
				trigger: d(l(), () => n((n().zoomActivationKeyPressed = !0), !0)),
				type: 'keydown',
			}),
		),
		tt(
			gt,
			(x, C) => (ke == null ? void 0 : ke(x, C)),
			() => ({ trigger: d(l(), () => n((n().zoomActivationKeyPressed = !1), !0)), type: 'keyup' }),
		),
		be();
}
var Th = ze('<path fill="none" class="svelte-flow__connection-path"></path>'),
	Ih = ze('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Oh(e, t) {
	xe(t, !0);
	const n = w(() => {
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
			case Xt.Bezier: {
				const [l] = Ra(i);
				return l;
			}
			case Xt.Straight: {
				const [l] = Va(i);
				return l;
			}
			case Xt.Step:
			case Xt.SmoothStep: {
				const [l] = Zo({ ...i, borderRadius: t.type === Xt.Step ? 0 : void 0 });
				return l;
			}
		}
	});
	var r = Qe(),
		o = we(r);
	var a = (i) => {
		var l = Ih(),
			c = B(l),
			u = B(c);
		var f = (d) => {
				var g = Qe(),
					m = we(g);
				zo(
					m,
					() => t.LineComponent,
					(x, C) => {
						C(x, {});
					},
				),
					L(d, g);
			},
			h = (d) => {
				var g = Th();
				de(() => {
					Te(g, 'd', s(n)), _t(g, t.style);
				}),
					L(d, g);
			};
		le(u, (d) => {
			t.LineComponent ? d(f) : d(h, -1);
		});
		V(c),
			V(l),
			de(
				(d) => {
					Te(l, 'width', t.store.width),
						Te(l, 'height', t.store.height),
						_t(l, t.containerStyle),
						qe(c, 0, d);
				},
				[() => Io(['svelte-flow__connection', bd(t.store.connection.isValid)])],
			),
			L(i, l);
	};
	le(o, (i) => {
		t.store.connection.inProgress && i(a);
	});
	L(e, r), be();
}
var Dh = new Set(['$$slots', '$$events', '$$legacy', 'position', 'style', 'class', 'children']),
	Hh = ne('<div><!></div>');
function ns(e, t) {
	xe(t, !0);
	const n = $(t, 'position', 3, 'top-right'),
		r = vn(t, Dh),
		o = w(() => `${n()}`.split('-'));
	var a = Hh();
	qt(a, (l) => ({ class: l, style: t.style, ...r }), [
		() => ['svelte-flow__panel', t.class, ...s(o)],
	]);
	var i = B(a);
	yt(i, () => t.children ?? Vn), V(a), L(e, a), be();
}
var Rh = ne(
	'<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>',
);
function Lh(e, t) {
	xe(t, !0);
	const n = $(t, 'position', 3, 'bottom-right');
	var r = Qe(),
		o = we(r);
	var a = (i) => {
		ns(i, {
			get position() {
				return n();
			},
			class: 'svelte-flow__attribution',
			'data-message':
				'Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us',
			children: (l, c) => {
				var u = Rh();
				L(l, u);
			},
			$$slots: { default: !0 },
		});
	};
	le(o, (i) => {
		var l;
		((l = t.proOptions) != null && l.hideAttribution) || i(a);
	});
	L(e, r), be();
}
var Vh = ne('<div><!></div>');
function Bh(e, t) {
	xe(t, !0);
	const n = $(t, 'domNode', 15),
		r = $(t, 'clientWidth', 15),
		o = $(t, 'clientHeight', 15),
		a = w(() => t.rest.class),
		i = w(() =>
			Ss(t.rest, [
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
	function l(f) {
		f.currentTarget.scrollTo({ top: 0, left: 0, behavior: 'auto' }),
			t.rest.onscroll && t.rest.onscroll(f);
	}
	var c = Vh();
	qt(
		c,
		(f) => ({
			class: ['svelte-flow', 'svelte-flow__container', t.colorMode, s(a)],
			'data-testid': 'svelte-flow__wrapper',
			role: 'application',
			onscroll: l,
			...s(i),
			[Xr]: f,
		}),
		[() => ({ width: Pt(t.width), height: Pt(t.height) })],
		void 0,
		void 0,
		'svelte-mkap6j',
	);
	var u = B(c);
	yt(u, () => t.children ?? Vn),
		V(c),
		ar(
			c,
			(f) => n(f),
			() => n(),
		),
		ii(c, 'clientHeight', o),
		ii(c, 'clientWidth', r),
		L(e, c),
		be();
}
var Kh = new Set([
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
	Fh = ne(
		'<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>',
		1,
	),
	Yh = ne('<!> <!>', 1),
	Xh = ne('<!> <!> <!> <!> <!>', 1);
function Wh(e, t) {
	xe(t, !0);
	let n = $(t, 'paneClickDistance', 3, 1),
		r = $(t, 'nodeClickDistance', 3, 1),
		o = $(t, 'panOnScrollMode', 19, () => Pn.Free),
		a = $(t, 'preventScrolling', 3, !0),
		i = $(t, 'zoomOnScroll', 3, !0),
		l = $(t, 'zoomOnDoubleClick', 3, !0),
		c = $(t, 'zoomOnPinch', 3, !0),
		u = $(t, 'panOnScroll', 3, !1),
		f = $(t, 'panOnScrollSpeed', 3, 0.5),
		h = $(t, 'panOnDrag', 3, !0),
		d = $(t, 'selectionOnDrag', 3, !1),
		g = $(t, 'autoPanOnSelection', 3, !0),
		m = $(t, 'connectionLineType', 19, () => Xt.Bezier),
		x = $(t, 'nodes', 31, () => Cn([])),
		C = $(t, 'edges', 31, () => Cn([])),
		z = $(t, 'viewport', 15, void 0),
		R = vn(t, Kh),
		E = th({
			props: R,
			width: t.width,
			height: t.height,
			get nodes() {
				return x();
			},
			set nodes(H) {
				x(H);
			},
			get edges() {
				return C();
			},
			set edges(H) {
				C(H);
			},
			get viewport() {
				return z();
			},
			set viewport(H) {
				z(H);
			},
		});
	const M = Ao(Po);
	M && M.setStore && M.setStore(E),
		Ji(Po, {
			provider: !1,
			getStore() {
				return E;
			},
		}),
		Rt(() => {
			var K;
			const H = { nodes: E.selectedNodes, edges: E.selectedEdges };
			(K = Zt(() => t.onselectionchange)) == null || K(H);
			for (const U of E.selectionChangeHandlers.values()) U(H);
		}),
		Yr(() => {
			E.reset();
		}),
		Bh(e, {
			get colorMode() {
				return E.colorMode;
			},
			get width() {
				return t.width;
			},
			get height() {
				return t.height;
			},
			get rest() {
				return R;
			},
			get domNode() {
				return E.domNode;
			},
			set domNode(H) {
				E.domNode = H;
			},
			get clientWidth() {
				return E.width;
			},
			set clientWidth(H) {
				E.width = H;
			},
			get clientHeight() {
				return E.height;
			},
			set clientHeight(H) {
				E.height = H;
			},
			children: (H, K) => {
				var U = Xh(),
					J = we(U);
				zh(J, {
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
						return E;
					},
					set store(A) {
						E = A;
					},
				});
				var F = Y(J, 2);
				rh(F, {
					get panOnScrollMode() {
						return o();
					},
					get preventScrolling() {
						return a();
					},
					get zoomOnScroll() {
						return i();
					},
					get zoomOnDoubleClick() {
						return l();
					},
					get zoomOnPinch() {
						return c();
					},
					get panOnScroll() {
						return u();
					},
					get panOnScrollSpeed() {
						return f();
					},
					get panOnDrag() {
						return h();
					},
					get paneClickDistance() {
						return n();
					},
					get selectionOnDrag() {
						return d();
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
						return E;
					},
					set store(A) {
						E = A;
					},
					children: (A, v) => {
						ih(A, {
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
								return d();
							},
							get autoPanOnSelection() {
								return g();
							},
							get store() {
								return E;
							},
							set store(_) {
								E = _;
							},
							children: (_, y) => {
								var k = Yh(),
									D = we(k);
								sh(D, {
									get store() {
										return E;
									},
									set store(O) {
										E = O;
									},
									children: (O, X) => {
										var Q = Fh(),
											j = Y(we(Q), 2);
										Ch(j, {
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
												return E;
											},
											set store(te) {
												E = te;
											},
										});
										var G = Y(j, 4);
										Oh(G, {
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
												return E;
											},
											set store(te) {
												E = te;
											},
										});
										var ee = Y(G, 2);
										vh(ee, {
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
												return E;
											},
											set store(te) {
												E = te;
											},
										});
										var ie = Y(ee, 2);
										Nh(ie, {
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
												return E;
											},
											set store(te) {
												E = te;
											},
										}),
											vt(2),
											L(O, Q);
									},
									$$slots: { default: !0 },
								});
								var T = Y(D, 2);
								{
									const O = w(() => !!(E.selectionRect && E.selectionRectMode === 'user')),
										X = w(() => {
											var ee;
											return (ee = E.selectionRect) == null ? void 0 : ee.width;
										}),
										Q = w(() => {
											var ee;
											return (ee = E.selectionRect) == null ? void 0 : ee.height;
										}),
										j = w(() => {
											var ee;
											return (ee = E.selectionRect) == null ? void 0 : ee.x;
										}),
										G = w(() => {
											var ee;
											return (ee = E.selectionRect) == null ? void 0 : ee.y;
										});
									ts(T, {
										get isVisible() {
											return s(O);
										},
										get width() {
											return s(X);
										},
										get height() {
											return s(Q);
										},
										get x() {
											return s(j);
										},
										get y() {
											return s(G);
										},
									});
								}
								L(_, k);
							},
							$$slots: { default: !0 },
						});
					},
					$$slots: { default: !0 },
				});
				var re = Y(F, 2);
				Lh(re, {
					get proOptions() {
						return t.proOptions;
					},
					get position() {
						return t.attributionPosition;
					},
				});
				var N = Y(re, 2);
				uh(N, {
					get store() {
						return E;
					},
				});
				var b = Y(N, 2);
				yt(b, () => t.children ?? Vn), L(H, U);
			},
			$$slots: { default: !0 },
		}),
		be();
}
var Zh = new Set([
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
	qh = ne('<button><!></button>');
function br(e, t) {
	const n = vn(t, Zh);
	var r = qh();
	qt(r, () => ({
		type: 'button',
		onclick: t.onclick,
		class: ['svelte-flow__controls-button', t.class],
		...n,
		[Xr]: {
			'--xy-controls-button-background-color-props': t.bgColor,
			'--xy-controls-button-background-color-hover-props': t.bgColorHover,
			'--xy-controls-button-color-props': t.color,
			'--xy-controls-button-color-hover-props': t.colorHover,
			'--xy-controls-button-border-color-props': t.borderColor,
		},
	}));
	var o = B(r);
	yt(o, () => t.children ?? Vn), V(r), L(e, r);
}
var Gh = ze(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>',
);
function Uh(e) {
	var t = Gh();
	L(e, t);
}
var Jh = ze(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>',
);
function jh(e) {
	var t = Jh();
	L(e, t);
}
var Qh = ze(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>',
);
function $h(e) {
	var t = Qh();
	L(e, t);
}
var eg = ze(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>',
);
function tg(e) {
	var t = eg();
	L(e, t);
}
var ng = ze(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>',
);
function rg(e) {
	var t = ng();
	L(e, t);
}
var og = new Set([
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
	ig = ne('<!> <!>', 1),
	ag = ne('<!> <!> <!> <!> <!> <!>', 1);
function sg(e, t) {
	xe(t, !0);
	const n = $(t, 'position', 3, 'bottom-left'),
		r = $(t, 'orientation', 3, 'vertical'),
		o = $(t, 'showZoom', 3, !0),
		a = $(t, 'showFitView', 3, !0),
		i = $(t, 'showLock', 3, !0),
		l = vn(t, og),
		c = w(Kn);
	const u = w(() => ({
		bgColor: t.buttonBgColor,
		bgColorHover: t.buttonBgColorHover,
		color: t.buttonColor,
		colorHover: t.buttonColorHover,
		borderColor: t.buttonBorderColor,
	}));
	const f = w(() => s(c).nodesDraggable || s(c).nodesConnectable || s(c).elementsSelectable),
		h = w(() => s(c).viewport.zoom <= s(c).minZoom),
		d = w(() => s(c).viewport.zoom >= s(c).maxZoom),
		g = w(() => s(c).ariaLabelConfig),
		m = w(() => (r() === 'horizontal' ? 'horizontal' : 'vertical'));
	const x = () => {
			s(c).zoomIn();
		},
		C = () => {
			s(c).zoomOut();
		},
		z = () => {
			s(c).fitView(t.fitViewOptions);
		},
		R = () => {
			const E = !s(f);
			(s(c).nodesDraggable = E), (s(c).nodesConnectable = E), (s(c).elementsSelectable = E);
		};
	{
		const E = w(() => ['svelte-flow__controls', s(m), t.class]);
		ns(
			e,
			Sn(
				{
					get class() {
						return s(E);
					},
					get position() {
						return n();
					},
					'data-testid': 'svelte-flow__controls',
					get 'aria-label'() {
						return s(g)['controls.ariaLabel'];
					},
					get style() {
						return t.style;
					},
				},
				() => l,
				{
					children: (M, H) => {
						var K = ag(),
							U = we(K);
						var J = (T) => {
							var O = Qe(),
								X = we(O);
							yt(X, () => t.before), L(T, O);
						};
						le(U, (T) => {
							t.before && T(J);
						});
						var F = Y(U, 2);
						var re = (T) => {
							var O = ig(),
								X = we(O);
							br(
								X,
								Sn(
									{
										onclick: x,
										class: 'svelte-flow__controls-zoomin',
										get title() {
											return s(g)['controls.zoomIn.ariaLabel'];
										},
										get 'aria-label'() {
											return s(g)['controls.zoomIn.ariaLabel'];
										},
										get disabled() {
											return s(d);
										},
									},
									() => s(u),
									{
										children: (j, G) => {
											Uh(j);
										},
										$$slots: { default: !0 },
									},
								),
							);
							var Q = Y(X, 2);
							br(
								Q,
								Sn(
									{
										onclick: C,
										class: 'svelte-flow__controls-zoomout',
										get title() {
											return s(g)['controls.zoomOut.ariaLabel'];
										},
										get 'aria-label'() {
											return s(g)['controls.zoomOut.ariaLabel'];
										},
										get disabled() {
											return s(h);
										},
									},
									() => s(u),
									{
										children: (j, G) => {
											jh(j);
										},
										$$slots: { default: !0 },
									},
								),
							),
								L(T, O);
						};
						le(F, (T) => {
							o() && T(re);
						});
						var N = Y(F, 2);
						var b = (T) => {
							br(
								T,
								Sn(
									{
										class: 'svelte-flow__controls-fitview',
										onclick: z,
										get title() {
											return s(g)['controls.fitView.ariaLabel'];
										},
										get 'aria-label'() {
											return s(g)['controls.fitView.ariaLabel'];
										},
									},
									() => s(u),
									{
										children: (O, X) => {
											$h(O);
										},
										$$slots: { default: !0 },
									},
								),
							);
						};
						le(N, (T) => {
							a() && T(b);
						});
						var A = Y(N, 2);
						var v = (T) => {
							br(
								T,
								Sn(
									{
										class: 'svelte-flow__controls-interactive',
										onclick: R,
										get title() {
											return s(g)['controls.interactive.ariaLabel'];
										},
										get 'aria-label'() {
											return s(g)['controls.interactive.ariaLabel'];
										},
									},
									() => s(u),
									{
										children: (O, X) => {
											var Q = Qe(),
												j = we(Q);
											var G = (ie) => {
													rg(ie);
												},
												ee = (ie) => {
													tg(ie);
												};
											le(j, (ie) => {
												s(f) ? ie(G) : ie(ee, -1);
											});
											L(O, Q);
										},
										$$slots: { default: !0 },
									},
								),
							);
						};
						le(A, (T) => {
							i() && T(v);
						});
						var _ = Y(A, 2);
						var y = (T) => {
							var O = Qe(),
								X = we(O);
							yt(X, () => t.children), L(T, O);
						};
						le(_, (T) => {
							t.children && T(y);
						});
						var k = Y(_, 2);
						var D = (T) => {
							var O = Qe(),
								X = we(O);
							yt(X, () => t.after), L(T, O);
						};
						le(k, (T) => {
							t.after && T(D);
						});
						L(M, K);
					},
					$$slots: { default: !0 },
				},
			),
		);
	}
	be();
}
var lg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>',
	),
	cg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>',
	),
	ug = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9"></path></svg>',
	),
	dg = ne('<div><!></div>'),
	fg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path><path d="M4 6v6a8 3 0 0 0 16 0v-6"></path><path d="M4 12v6a8 3 0 0 0 16 0v-6"></path></svg>',
	),
	hg = ne('<div class="mt-3 text-sm text-white/50"> </div>'),
	gg = ne(
		'<div><!> <!> <div class="flex items-center gap-4"><div class="w-12 h-12 rounded-xl bg-accent1/20 flex items-center justify-center text-accent1 shadow-[0_0_15px_rgba(var(--accent1),0.2)] group-hover:shadow-[0_0_25px_rgba(var(--accent1),0.4)] transition-shadow"><!></div> <div><div class="text-xs font-bold tracking-widest uppercase text-accent1/80"> </div> <div class="text-base font-bold text-white mt-0.5"> </div></div></div> <!> <!></div>',
	);
function pr(e, t) {
	xe(t, !0);
	var n = gg(),
		r = B(n);
	gn(r, {
		type: 'target',
		get position() {
			return ce.Left;
		},
		class: '!w-3 !h-3 !bg-accent1 !border-2 !border-background',
	});
	var o = Y(r, 2);
	var a = (E) => {
		var M = dg(),
			H = B(M);
		var K = (F) => {
				var re = lg();
				L(F, re);
			},
			U = (F) => {
				var re = cg();
				L(F, re);
			},
			J = (F) => {
				var re = ug();
				L(F, re);
			};
		le(H, (F) => {
			t.data.status === 'success'
				? F(K)
				: t.data.status === 'failed'
					? F(U, 1)
					: t.data.status === 'running' && F(J, 2);
		});
		V(M),
			de(() => {
				qe(
					M,
					1,
					`absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border shadow-lg transition-transform hover:scale-110
			${t.data.status === 'success' ? 'bg-black border-accent2 text-accent2' : ''}
			${t.data.status === 'failed' ? 'bg-black border-red-500 text-red-400' : ''}
			${t.data.status === 'running' ? 'bg-black border-primary text-primary animate-spin' : ''}`,
				),
					Te(M, 'title', t.data.status === 'failed' && t.data.error ? t.data.error : t.data.status);
			}),
			L(E, M);
	};
	le(o, (E) => {
		t.data.status && E(a);
	});
	var i = Y(o, 2),
		l = B(i),
		c = B(l);
	var u = (E) => {
			var M = Qe(),
				H = we(M);
			Nr(H, () => t.data.icon), L(E, M);
		},
		f = (E) => {
			var M = fg();
			L(E, M);
		};
	le(c, (E) => {
		t.data.icon ? E(u) : E(f, -1);
	});
	V(l);
	var h = Y(l, 2),
		d = B(h),
		g = B(d, !0);
	V(d);
	var m = Y(d, 2),
		x = B(m, !0);
	V(m), V(h), V(i);
	var C = Y(i, 2);
	var z = (E) => {
		var M = hg(),
			H = B(M, !0);
		V(M), de(() => Me(H, t.data.description)), L(E, M);
	};
	le(C, (E) => {
		t.data.description && E(z);
	});
	var R = Y(C, 2);
	gn(R, {
		type: 'source',
		get position() {
			return ce.Right;
		},
		class: '!w-3 !h-3 !bg-accent1 !border-2 !border-background',
	}),
		V(n),
		de(() => {
			qe(
				n,
				1,
				`relative glass-node w-64 p-5 rounded-2xl text-left shadow-2xl transition-all group
	${t.data.status === 'success' ? '!border-accent2/80 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : ''}
	${t.data.status === 'failed' ? '!border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : ''}
	${t.data.status === 'running' ? '!border-primary/80 shadow-[0_0_20px_rgba(217,70,239,0.2)] animate-pulse' : 'hover:border-accent1/50'}`,
			),
				Me(g, t.data.typeLabel || 'Action'),
				Me(x, t.data.label || 'Unknown Action');
		}),
		L(e, n),
		be();
}
var vg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>',
	),
	yg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>',
	),
	mg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9"></path></svg>',
	),
	wg = ne('<div><!></div>'),
	xg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path></svg>',
	),
	bg = ne('<div class="mt-3 text-sm text-white/50"> </div>'),
	pg = ne(
		'<div><!> <div class="flex items-center gap-4"><div class="w-12 h-12 rounded-xl bg-accent2/20 flex items-center justify-center text-accent2 shadow-[0_0_15px_rgba(var(--accent2),0.2)] group-hover:shadow-[0_0_25px_rgba(var(--accent2),0.4)] transition-shadow"><!></div> <div><div class="text-xs font-bold tracking-widest uppercase text-accent2/80"> </div> <div class="text-base font-bold text-white mt-0.5"> </div></div></div> <!> <!></div>',
	);
function Wi(e, t) {
	xe(t, !0);
	var n = pg(),
		r = B(n);
	var o = (R) => {
		var E = wg(),
			M = B(E);
		var H = (J) => {
				var F = vg();
				L(J, F);
			},
			K = (J) => {
				var F = yg();
				L(J, F);
			},
			U = (J) => {
				var F = mg();
				L(J, F);
			};
		le(M, (J) => {
			t.data.status === 'success'
				? J(H)
				: t.data.status === 'failed'
					? J(K, 1)
					: t.data.status === 'running' && J(U, 2);
		});
		V(E),
			de(() => {
				qe(
					E,
					1,
					`absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border shadow-lg transition-transform hover:scale-110
			${t.data.status === 'success' ? 'bg-black border-accent2 text-accent2' : ''}
			${t.data.status === 'failed' ? 'bg-black border-red-500 text-red-400' : ''}
			${t.data.status === 'running' ? 'bg-black border-primary text-primary animate-spin' : ''}`,
				),
					Te(E, 'title', t.data.status === 'failed' && t.data.error ? t.data.error : t.data.status);
			}),
			L(R, E);
	};
	le(r, (R) => {
		t.data.status && R(o);
	});
	var a = Y(r, 2),
		i = B(a),
		l = B(i);
	var c = (R) => {
			var E = Qe(),
				M = we(E);
			Nr(M, () => t.data.icon), L(R, E);
		},
		u = (R) => {
			var E = xg();
			L(R, E);
		};
	le(l, (R) => {
		t.data.icon ? R(c) : R(u, -1);
	});
	V(i);
	var f = Y(i, 2),
		h = B(f),
		d = B(h, !0);
	V(h);
	var g = Y(h, 2),
		m = B(g, !0);
	V(g), V(f), V(a);
	var x = Y(a, 2);
	var C = (R) => {
		var E = bg(),
			M = B(E, !0);
		V(E), de(() => Me(M, t.data.description)), L(R, E);
	};
	le(x, (R) => {
		t.data.description && R(C);
	});
	var z = Y(x, 2);
	gn(z, {
		type: 'source',
		get position() {
			return ce.Right;
		},
		class: '!w-3 !h-3 !bg-accent2 !border-2 !border-background',
	}),
		V(n),
		de(() => {
			qe(
				n,
				1,
				`relative glass-node w-64 p-5 rounded-2xl text-left shadow-2xl transition-all group
	${t.data.status === 'success' ? '!border-accent2/80 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : ''}
	${t.data.status === 'failed' ? '!border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : ''}
	${t.data.status === 'running' ? '!border-primary/80 shadow-[0_0_20px_rgba(217,70,239,0.2)] animate-pulse' : 'hover:border-accent2/50'}`,
			),
				Me(d, t.data.typeLabel || 'Trigger'),
				Me(m, t.data.label || 'Unknown Trigger');
		}),
		L(e, n),
		be();
}
var _g = ne(
		'<div class="absolute top-6 left-1/2 -translate-x-1/2 z-30 bg-black/80 border border-primary/50 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center gap-4 shadow-[0_0_30px_rgba(var(--primary),0.25)]"><div class="flex items-center gap-2 text-sm text-white font-medium"><span class="h-2 w-2 rounded-full animate-pulse bg-primary"></span> Viewing Run: <span class="font-mono text-accent1 truncate max-w-[120px]"> </span> <span> </span></div> <button class="px-3 py-1 bg-white text-black hover:scale-105 rounded-full font-bold text-xs transition-all">Exit Playback</button></div>',
	),
	kg = ne(
		'<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> Working...',
		1,
	),
	Sg = ne(
		'<div class="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_currentColor]"></div> Active',
		1,
	),
	Cg = ne(
		'<div class="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div> Running...',
		1,
	),
	Eg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13 -8z"></path></svg> Execute',
		1,
	),
	Mg = ne(
		'<button class="px-5 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors disabled:opacity-50"> </button> <button><!></button> <button class="flex items-center gap-2 px-5 py-2 bg-accent1 text-black rounded-full font-bold text-sm hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(var(--accent1),0.25)]"><!></button>',
		1,
	),
	Ng = ne(
		'<button title="Add Node" class="px-4 py-2 bg-primary text-black rounded-full font-bold text-sm hover:scale-105 transition-all">+</button>',
	),
	Pg = ne(
		'<div class="flex items-center justify-center h-full w-full"><div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>',
	),
	Ag = ne(
		'<div><span class="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Incoming Data (Previous Node)</span> <pre class="bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-white/50 overflow-x-auto whitespace-pre-wrap"> </pre></div>',
	),
	zg = ne(
		'<div class="space-y-6"><div><span class="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Evaluated Parameters</span> <pre class="bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-accent1 overflow-x-auto whitespace-pre-wrap"> </pre></div> <!></div>',
	),
	Tg = ne(
		'<div class="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-400"><span class="font-bold block mb-1">Execution Error</span> </div>',
	),
	Ig = ne(
		'<div class="space-y-6"><!> <div><span class="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Output Data</span> <pre class="bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-accent2 overflow-x-auto whitespace-pre-wrap"> </pre></div></div>',
	),
	Og = ne(
		'<div class="flex border-b border-white/10 mb-6 bg-white/5 p-1 rounded-xl"><button>Parameters</button> <button>Output</button></div> <!>',
		1,
	),
	Dg = ne(
		'<label class="block"><span class="block text-sm text-white/70 mb-1">URL</span> <input type="text" placeholder="https://api.example.com" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"/></label> <label class="block"><span class="block text-sm text-white/70 mb-1">Method</span> <select class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"><option>GET</option><option>POST</option><option>PUT</option><option>PATCH</option><option>DELETE</option></select></label> <label class="block"><span class="block text-sm text-white/70 mb-1">Headers (JSON)</span> <textarea rows="3" placeholder="Authorization: Bearer token" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"></textarea></label> <label class="block"><span class="block text-sm text-white/70 mb-1">Request Body (JSON)</span> <textarea rows="3" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"></textarea></label>',
		1,
	),
	Hg = ne(
		'<label class="block"><span class="block text-sm text-white/70 mb-1">Webhook URL</span> <input type="text" placeholder="https://hooks.slack.com/services/..." class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"/></label> <label class="block"><span class="block text-sm text-white/70 mb-1">Message</span> <textarea rows="3" placeholder="Enter your message..." class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"></textarea></label>',
		1,
	),
	Rg = ne(
		'<label class="block"><span class="block text-sm text-white/70 mb-1">Message</span> <textarea rows="3" placeholder="What to log..." class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"></textarea></label>',
	),
	Lg = ne(
		'<label class="block"><span class="block text-sm text-white/70 mb-1">Webhook Path</span> <div class="flex items-center gap-2"><input type="text" readonly="" class="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white/50 focus:outline-none cursor-not-allowed"/> <button class="px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white/70 hover:bg-white/20">Copy</button></div></label>',
	),
	Vg = ne(
		'<p class="text-sm text-white/40 italic">Webhook path will be generated when deployed.</p>',
	),
	Bg = ne(
		'<div class="relative bg-black/80 border border-white/10 rounded-xl p-4 overflow-hidden group"><pre class="text-xs text-accent2 font-mono overflow-x-auto whitespace-pre-wrap"> </pre></div>',
	),
	Kg = ne(
		'<div class="flex items-center justify-center p-8 border border-dashed border-white/10 rounded-xl"><p class="text-sm text-white/30 italic">No output yet. Run the node to test.</p></div>',
	),
	Fg = ne(
		'<div class="space-y-4"><h4 class="text-sm font-bold tracking-widest uppercase text-white/40">Configuration</h4> <div class="space-y-3"><label class="block"><span class="block text-sm text-white/70 mb-1">Node Name</span> <input type="text" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"/></label> <!> <!> <!> <!></div></div> <div class="space-y-4"><h4 class="text-sm font-bold tracking-widest uppercase text-white/40">Isolation Test Result</h4> <!></div>',
		1,
	),
	Yg = ne(
		'<div class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div> Running...',
		1,
	),
	Xg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg> Test Node in Isolation',
		1,
	),
	Wg = ne(
		'<div class="w-5 h-5 border-2 border-accent1 border-t-transparent rounded-full animate-spin"></div> Running...',
		1,
	),
	Zg = ze(
		'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg> Run From This Node',
		1,
	),
	qg = ne(
		'<button class="w-full group relative flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"><!></button> <button class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent1/20 text-accent1 border border-accent1/35 rounded-xl font-bold hover:bg-accent1/30 transition-all disabled:opacity-50"><!></button> <button class="w-full px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl font-bold hover:bg-red-500/25 transition-all">Delete Node</button>',
		1,
	),
	Gg = ne(
		'<div class="text-xs text-white/30 text-center py-2 italic">Workspace is read-only during history playback.</div>',
	),
	Ug = ne(
		'<div class="p-6 border-b border-white/10 flex justify-between items-center bg-white/5"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"></div> <div><h3 class="text-lg font-bold tracking-tight"> </h3> <p class="text-xs text-white/50 uppercase tracking-widest"> </p></div></div> <button aria-label="Close Playground" title="Close Playground" class="p-2 hover:bg-white/10 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg></button></div> <div class="flex-1 overflow-y-auto p-6 space-y-8"><!></div> <div class="p-6 border-t border-white/10 bg-black/40 mt-auto space-y-2.5"><!></div>',
		1,
	),
	Jg = ne(
		'<div class="flex justify-center items-center py-12"><div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>',
	),
	jg = ne(
		'<div class="text-center text-white/40 italic py-12">No executions found for this workflow.</div>',
	),
	Qg = ne('<div class="text-[11px] text-white/40"> </div>'),
	$g = ne(
		'<button><div class="flex justify-between items-center gap-2"><span class="font-mono text-xs text-white/50 truncate max-w-[170px]"> </span> <span> </span></div> <div class="text-xs text-white/70"> </div> <!></button>',
	),
	e0 = ne(
		'<div class="absolute top-0 right-0 h-full w-[35%] bg-black/85 backdrop-blur-2xl border-l border-white/10 z-30 flex flex-col transition-all duration-300"><div class="p-6 border-b border-white/10 flex justify-between items-center bg-white/5"><h3 class="text-lg font-bold tracking-tight">Execution History</h3> <button aria-label="Close History" class="p-2 hover:bg-white/10 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"></path></svg></button></div> <div class="flex-1 overflow-y-auto p-6 space-y-3"><!></div></div>',
	),
	t0 = ne(
		'<button class="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"><div class="w-10 h-10 rounded bg-white/5 flex items-center justify-center"></div> <div class="text-left"><div class="font-bold"> </div> <div class="text-xs text-white/40"> </div></div></button>',
	),
	n0 = ne(
		'<div class="fixed inset-0 z-40 flex items-center justify-center bg-black/60"><div class="bg-black/80 border border-white/10 rounded-2xl p-6 w-[520px]"><h3 class="text-lg font-bold mb-4">Add Node</h3> <div class="grid grid-cols-2 gap-4"></div> <div class="mt-6 text-right"><button class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">Close</button></div></div></div>',
	),
	r0 = ne(
		'<div role="presentation"><div class="bg-aurora absolute inset-0 opacity-50 transition-all duration-300 ease-out pointer-events-none z-0"></div> <div class="absolute top-0 right-0 w-[60%] h-[60%] bg-accent1/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div> <div class="absolute top-6 left-6 z-20"><a href="/dashboard" class="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white/70 rounded-full font-bold text-sm hover:bg-white/10 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M5 12l6 6"></path><path d="M5 12l6 -6"></path></svg> Back to Dashboard</a></div> <!> <div><!> <button class="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white/80 rounded-full font-bold text-sm hover:bg-white/10 hover:text-white transition-colors" title="Execution History"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 8l0 4l2 2"></path><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path></svg></button> <!></div> <div><!></div> <div class="absolute top-0 right-0 h-full w-[35%] bg-black/60 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-500 ease-out z-20 flex flex-col"><!></div></div> <!> <!>',
		1,
	);
function o0(e, t) {
	xe(t, !0);
	const n = $(t, 'class', 3, ''),
		r = $(t, 'workflowId', 3, 'preview-workflow-1');
	const o = { webhook: Wi, 'http-request': pr, slack: pr, log: pr, trigger: Wi, action: pr },
		a = [],
		i = [],
		l = [
			{
				id: 'webhook',
				label: 'Webhook (Trigger)',
				typeLabel: 'Webhook',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v14" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 7c-2.333 -3.333 -4.667 -5 -7 -5" /><path d="M12 7c2.333 -3.333 4.667 -5 7 -5" /></svg>',
			},
			{
				id: 'http-request',
				label: 'HTTP Request (Action)',
				typeLabel: 'HTTP Request',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h18" /><path d="M12 3v18" /></svg>',
			},
			{
				id: 'slack',
				label: 'Slack (Action)',
				typeLabel: 'Slack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>',
			},
			{
				id: 'log',
				label: 'Log (Action)',
				typeLabel: 'Log',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>',
			},
		];
	const c = ue(Cn([])),
		u = ue(Cn([])),
		f = ue(!1),
		h = ue(50),
		d = ue(50),
		g = ue(null),
		m = ue(!1),
		x = ue(null),
		C = ue(!1),
		z = ue(!1),
		R = ue(!1),
		E = ue(!1),
		M = ue(!0),
		H = ue(!1),
		K = ue(!1),
		U = ue(!1),
		J = ue(Cn([])),
		F = ue(!1),
		re = ue(null),
		N = ue(Cn([])),
		b = ue('output');
	Ns(async () => {
		var I;
		try {
			const W = await Yt(`/workflows/${r()}`);
			W && Array.isArray(W.nodes) && W.nodes.length > 0
				? P(
						c,
						W.nodes.map((q) => ({
							...q,
							position: { x: q.positionX, y: q.positionY },
							data: typeof q.data == 'string' ? JSON.parse(q.data) : q.data,
						})),
						!0,
					)
				: P(c, [...a], !0),
				W && Array.isArray(W.edges) && W.edges.length > 0
					? P(
							u,
							W.edges.map((q) => ({
								id: q.id,
								source: q.sourceNodeId,
								target: q.targetNodeId,
								sourceHandle: q.sourceHandle,
								targetHandle: q.targetHandle,
								animated: !0,
								style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;',
							})),
							!0,
						)
					: P(u, [...i], !0),
				W && W.isActive !== void 0 && P(E, W.isActive, !0);
		} catch (W) {
			((I = W.message) != null && I.includes('Not Found')) ||
				console.warn('Could not load workflow data:', W),
				P(c, [], !0),
				P(u, [], !0);
		} finally {
			P(M, !1);
		}
	});
	function A(I) {
		const q = I.currentTarget.getBoundingClientRect();
		P(h, ((I.clientX - q.left) / q.width) * 100), P(d, ((I.clientY - q.top) / q.height) * 100);
	}
	function v(I) {
		const W = I.detail ? I.detail.node : I.node;
		P(g, W, !0), P(m, !0), P(x, null);
	}
	let _ = null;
	function y(I) {
		var q;
		const W =
			((q = I == null ? void 0 : I.detail) == null ? void 0 : q.nodes) ??
			(I == null ? void 0 : I.nodes) ??
			null;
		Array.isArray(W) &&
			(P(
				c,
				W.map((oe) => {
					const se = s(c).find((fe) => fe.id === oe.id);
					return {
						id: oe.id,
						type: oe.type,
						position: oe.position || { x: 0, y: 0 },
						data: (se == null ? void 0 : se.data) || oe.data || {},
						selected: oe.selected,
						isConnectable: oe.isConnectable,
					};
				}),
				!0,
			),
			clearTimeout(_),
			(_ = setTimeout(() => {
				ee();
			}, 300)));
	}
	function k(I) {
		var q;
		const W =
			((q = I == null ? void 0 : I.detail) == null ? void 0 : q.edges) ??
			(I == null ? void 0 : I.edges) ??
			null;
		Array.isArray(W) && P(u, W, !0), T();
	}
	async function D(I) {
		const W = (I == null ? void 0 : I.detail) ?? I,
			{ source: q, target: oe, sourceHandle: se, targetHandle: fe } = W;
		if (!q || !oe) return;
		const Ge = `e${q}-${oe}-${Date.now()}`;
		P(
			u,
			[
				...s(u),
				{
					id: Ge,
					source: q,
					target: oe,
					sourceHandle: se,
					targetHandle: fe,
					animated: !0,
					style: 'stroke: oklch(65% 0.25 310); stroke-width: 2px;',
				},
			],
			!0,
		);
		try {
			await ee();
		} catch (p) {
			console.warn('Failed to save edge', p);
		}
	}
	function T() {
		clearTimeout(_),
			(_ = setTimeout(() => {
				ee();
			}, 600));
	}
	function O() {
		P(m, !1), P(g, null);
	}
	function X() {
		P(f, !0);
	}
	function Q() {
		P(f, !1);
	}
	function j(I) {
		var W;
		P(
			c,
			s(c).filter((q) => q.id !== I),
			!0,
		),
			P(
				u,
				s(u).filter((q) => q.source !== I && q.target !== I),
				!0,
			),
			((W = s(g)) == null ? void 0 : W.id) === I && (P(g, null), P(m, !1)),
			ee();
	}
	async function G(I) {
		const W = 150 * (s(c).length % 3),
			q = 150 * Math.floor(s(c).length / 3),
			oe = {
				id: crypto.randomUUID(),
				type: I.id,
				position: { x: 100 + W, y: 100 + q },
				data: {
					typeLabel: I.typeLabel,
					label: I.label,
					description: '',
					icon: I.icon,
					...(I.id === 'http-request' ? { url: '', method: 'GET', headers: '{}' } : {}),
					...(I.id === 'slack' ? { webhookUrl: '', message: '' } : {}),
					...(I.id === 'webhook' ? { webhookPath: '' } : {}),
				},
			};
		P(c, [...s(c), oe], !0), P(f, !1);
		try {
			await ee();
		} catch (se) {
			console.warn('Auto-save failed after adding node', se);
		}
	}
	async function ee() {
		P(z, !0);
		try {
			const I = {
				nodes: s(c).map((W) => ({
					id: W.id,
					type: W.type,
					data: W.data,
					position: W.position || { x: 0, y: 0 },
				})),
				edges: s(u).map((W) => ({
					id: W.id,
					source: W.source,
					target: W.target,
					sourceHandle: W.sourceHandle,
					targetHandle: W.targetHandle,
				})),
			};
			await Yt(`/workflows/${r()}/graph`, { method: 'PUT', body: JSON.stringify(I) }),
				console.log('Workflow saved successfully with positions', I);
		} catch (I) {
			console.error('Failed to save workflow:', I);
		} finally {
			setTimeout(() => P(z, !1), 500);
		}
	}
	async function ie() {
		P(R, !0);
		try {
			const I = !s(E),
				W = await Yt(`/workflows/${r()}/deploy`, {
					method: 'POST',
					body: JSON.stringify({ isActive: I }),
				});
			P(E, W.isActive, !0);
		} catch (I) {
			console.error('Failed to deploy workflow:', I);
		} finally {
			setTimeout(() => P(R, !1), 500);
		}
	}
	async function te() {
		if (s(g)) {
			P(C, !0), P(x, null);
			try {
				const I = await Yt('/engine/test-node', {
					method: 'POST',
					body: JSON.stringify({ nodeId: s(g).id, type: s(g).type, data: s(g).data }),
				});
				P(x, JSON.stringify(I, null, 2), !0);
			} catch (I) {
				P(x, JSON.stringify({ error: I.message }, null, 2), !0);
			} finally {
				P(C, !1);
			}
		}
	}
	async function ae() {
		if (!s(H)) {
			P(H, !0),
				P(
					c,
					s(c).map((I) => ({
						...I,
						data: { ...I.data, status: 'running', error: void 0, execution: void 0 },
					})),
					!0,
				);
			try {
				await ee();
				const I = await Yt(`/workflows/${r()}/execute`, { method: 'POST' });
				if (I.execution) {
					const W = JSON.parse(I.execution.executionResult || '{}');
					P(
						c,
						s(c).map((oe) => {
							const se = W[oe.id];
							return {
								...oe,
								data: {
									...oe.data,
									status: se ? (se.success ? 'success' : 'failed') : void 0,
									error:
										(se == null ? void 0 : se.error) ||
										(I.execution.error && oe.id === I.execution.errorNodeId
											? I.execution.error
											: void 0),
									execution: se,
								},
							};
						}),
						!0,
					);
					const q = s(c).find((oe) => oe.data.status === 'failed');
					q && (P(g, q, !0), P(m, !0), P(b, 'output'));
				}
			} catch (I) {
				console.error('Workflow execution failed:', I);
				try {
					const W = await Yt(`/executions?workflowId=${r()}`);
					if (W && W.length > 0) {
						const q = W[0],
							oe = JSON.parse(q.executionResult || '{}');
						P(
							c,
							s(c).map((se) => {
								const fe = oe[se.id];
								return {
									...se,
									data: {
										...se.data,
										status: fe ? (fe.success ? 'success' : 'failed') : void 0,
										error:
											(fe == null ? void 0 : fe.error) ||
											(q.error && q.error.includes(se.data.label) ? q.error : void 0),
										execution: fe,
									},
								};
							}),
							!0,
						);
					}
				} catch {}
			} finally {
				P(H, !1);
			}
		}
	}
	async function ye() {
		if (!(!s(g) || s(H))) {
			P(H, !0),
				P(
					c,
					s(c).map((I) => ({
						...I,
						data: { ...I.data, status: 'running', error: void 0, execution: void 0 },
					})),
					!0,
				);
			try {
				await ee();
				const I = await Yt(`/workflows/${r()}/execute/from-node/${s(g).id}`, { method: 'POST' });
				if (I.execution) {
					const W = JSON.parse(I.execution.executionResult || '{}');
					P(
						c,
						s(c).map((se) => {
							const fe = W[se.id];
							return {
								...se,
								data: {
									...se.data,
									status: fe ? (fe.success ? 'success' : 'failed') : void 0,
									error:
										(fe == null ? void 0 : fe.error) ||
										(I.execution.error && se.id === I.execution.errorNodeId
											? I.execution.error
											: void 0),
									execution: fe,
								},
							};
						}),
						!0,
					);
					const q = s(g).id,
						oe = s(c).find((se) => se.id === q);
					oe && (P(g, oe, !0), P(b, 'output'));
				}
			} catch (I) {
				console.error('Partial execution failed:', I);
			} finally {
				P(H, !1);
			}
		}
	}
	async function Pe() {
		if ((P(K, !s(K)), s(K))) {
			P(U, !0);
			try {
				P(J, await Yt(`/executions?workflowId=${r()}`), !0);
			} catch (I) {
				console.error('Failed to load execution history:', I);
			} finally {
				P(U, !1);
			}
		}
	}
	function he() {
		P(K, !1);
	}
	function Ie(I) {
		s(F) || P(N, JSON.parse(JSON.stringify(s(c))), !0), P(F, !0), P(re, I, !0), P(K, !1);
		const W = JSON.parse(I.executionResult || '{}');
		if (
			(P(
				c,
				s(c).map((q) => {
					const oe = W[q.id];
					return {
						...q,
						data: {
							...q.data,
							status: oe ? (oe.success ? 'success' : 'failed') : void 0,
							error:
								(oe == null ? void 0 : oe.error) ||
								(I.error && I.error.includes(q.data.label) ? I.error : void 0),
							execution: oe,
						},
					};
				}),
				!0,
			),
			s(g))
		) {
			const q = s(g).id,
				oe = s(c).find((se) => se.id === q);
			oe ? (P(g, oe, !0), P(b, 'output')) : (P(g, null), P(m, !1));
		}
	}
	function _e() {
		if ((P(F, !1), P(re, null), P(c, JSON.parse(JSON.stringify(s(N))), !0), s(g))) {
			const I = s(g).id,
				W = s(c).find((q) => q.id === I);
			P(g, W || null, !0);
		}
	}
	var De = r0(),
		Be = we(De),
		Je = B(Be),
		$e = Y(Je, 6);
	var ge = (I) => {
		var W = _g(),
			q = B(W),
			oe = Y(B(q), 2),
			se = B(oe, !0);
		V(oe);
		var fe = Y(oe, 2),
			Ge = B(fe, !0);
		V(fe), V(q);
		var p = Y(q, 2);
		V(W),
			de(() => {
				var Ne, Ce, Ee;
				Me(se, (Ne = s(re)) == null ? void 0 : Ne.id),
					qe(
						fe,
						1,
						`px-2 py-0.5 rounded text-[10px] uppercase font-bold ml-1
					${((Ce = s(re)) == null ? void 0 : Ce.status) === 'success' ? 'bg-emerald-500/20 text-accent2 border border-accent2/35' : 'bg-red-500/20 text-red-400 border border-red-500/35'}`,
					),
					Me(Ge, (Ee = s(re)) == null ? void 0 : Ee.status);
			}),
			me('click', p, _e),
			L(I, W);
	};
	le($e, (I) => {
		s(F) && I(ge);
	});
	var pe = Y($e, 2),
		Ke = B(pe);
	var Se = (I) => {
		var W = Mg(),
			q = we(W),
			oe = B(q, !0);
		V(q);
		var se = Y(q, 2),
			fe = B(se);
		var Ge = (ve) => {
				var Oe = kg();
				vt(), L(ve, Oe);
			},
			p = (ve) => {
				var Oe = Sg();
				vt(), L(ve, Oe);
			},
			Ne = (ve) => {
				var Oe = Zi('Deploy');
				L(ve, Oe);
			};
		le(fe, (ve) => {
			s(R) ? ve(Ge) : s(E) ? ve(p, 1) : ve(Ne, -1);
		});
		V(se);
		var Ce = Y(se, 2),
			Ee = B(Ce);
		var it = (ve) => {
				var Oe = Cg();
				vt(), L(ve, Oe);
			},
			Tt = (ve) => {
				var Oe = Eg();
				vt(), L(ve, Oe);
			};
		le(Ee, (ve) => {
			s(H) ? ve(it) : ve(Tt, -1);
		});
		V(Ce),
			de(() => {
				(q.disabled = s(z) || s(H)),
					Me(oe, s(z) ? 'Saving...' : 'Save'),
					(se.disabled = s(R) || s(H)),
					qe(
						se,
						1,
						`flex items-center gap-2 px-5 py-2 ${s(E) ? 'bg-primary/20 text-primary border-primary/50' : 'bg-white text-black border-transparent'} border rounded-full font-bold text-sm hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(var(--primary),0.15)]`,
					),
					(Ce.disabled = s(H) || s(z));
			}),
			me('click', q, ee),
			me('click', se, ie),
			me('click', Ce, ae),
			L(I, W);
	};
	le(Ke, (I) => {
		s(F) || I(Se);
	});
	var Fe = Y(Ke, 2),
		rt = Y(Fe, 2);
	var ot = (I) => {
		var W = Ng();
		me('click', W, X), L(I, W);
	};
	le(rt, (I) => {
		s(F) || I(ot);
	});
	V(pe);
	var Le = Y(pe, 2),
		Gt = B(Le);
	var Ut = (I) => {
			{
				const W = w(() => (s(F) ? void 0 : y)),
					q = w(() => (s(F) ? void 0 : k)),
					oe = w(() => (s(F) ? void 0 : D)),
					se = w(() => !s(F)),
					fe = w(() => !s(F)),
					Ge = w(() => !s(F));
				Wh(I, {
					get nodes() {
						return s(c);
					},
					get edges() {
						return s(u);
					},
					get nodeTypes() {
						return o;
					},
					class: 'organic-tech-flow',
					colorMode: 'dark',
					onnodeclick: v,
					get onnodeschange() {
						return s(W);
					},
					get onedgeschange() {
						return s(q);
					},
					get onconnect() {
						return s(oe);
					},
					get nodesDraggable() {
						return s(se);
					},
					get nodesConnectable() {
						return s(fe);
					},
					get edgesFocusable() {
						return s(Ge);
					},
					elementsSelectable: !0,
					children: (p, Ne) => {
						sg(p, {
							class: 'bg-black/40 backdrop-blur-md border border-white/10 rounded-xl fill-white',
							buttonClass: 'border-white/10 hover:bg-white/10 fill-white',
						});
					},
					$$slots: { default: !0 },
				});
			}
		},
		Jt = (I) => {
			var W = Pg();
			L(I, W);
		};
	le(Gt, (I) => {
		s(M) ? I(Jt, -1) : I(Ut);
	});
	V(Le);
	var zt = Y(Le, 2),
		jt = B(zt);
	var Qt = (I) => {
		var W = Ug(),
			q = we(W),
			oe = B(q),
			se = B(oe);
		Nr(se, () => s(g).data.icon, !0), V(se);
		var fe = Y(se, 2),
			Ge = B(fe),
			p = B(Ge, !0);
		V(Ge);
		var Ne = Y(Ge, 2),
			Ce = B(Ne, !0);
		V(Ne), V(fe), V(oe);
		var Ee = Y(oe, 2);
		V(q);
		var it = Y(q, 2),
			Tt = B(it);
		var ve = (Ve) => {
				var Xe = Og(),
					Ye = we(Xe),
					at = B(Ye),
					Ct = Y(at, 2);
				V(Ye);
				var st = Y(Ye, 2);
				var We = (lt) => {
						var mt = zg(),
							wt = B(mt),
							He = Y(B(wt), 2),
							et = B(He, !0);
						V(He), V(wt);
						var mn = Y(wt, 2);
						var wn = (ct) => {
							var It = Ag(),
								xn = Y(B(It), 2),
								Ae = B(xn, !0);
							V(xn),
								V(It),
								de(
									(Re) => Me(Ae, Re),
									[() => JSON.stringify(s(g).data.execution.previousData, null, 2)],
								),
								L(ct, It);
						};
						le(mn, (ct) => {
							s(g).data.execution.previousData && ct(wn);
						});
						V(mt),
							de(
								(ct) => Me(et, ct),
								[() => JSON.stringify(s(g).data.execution.input || {}, null, 2)],
							),
							L(lt, mt);
					},
					rn = (lt) => {
						var mt = Ig(),
							wt = B(mt);
						var He = (ct) => {
							var It = Tg(),
								xn = Y(B(It));
							V(It), de(() => Me(xn, ` ${s(g).data.execution.error ?? ''}`)), L(ct, It);
						};
						le(wt, (ct) => {
							s(g).data.execution.error && ct(He);
						});
						var et = Y(wt, 2),
							mn = Y(B(et), 2),
							wn = B(mn, !0);
						V(mn),
							V(et),
							V(mt),
							de(
								(ct) => Me(wn, ct),
								[() => JSON.stringify(s(g).data.execution.output || {}, null, 2)],
							),
							L(lt, mt);
					};
				le(st, (lt) => {
					s(b) === 'params' ? lt(We) : lt(rn, -1);
				});
				de(() => {
					qe(
						at,
						1,
						`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${s(b) === 'params' ? 'bg-white text-black shadow-md' : 'text-white/60 hover:text-white'}`,
					),
						qe(
							Ct,
							1,
							`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${s(b) === 'output' ? 'bg-white text-black shadow-md' : 'text-white/60 hover:text-white'}`,
						);
				}),
					me('click', at, () => P(b, 'params')),
					me('click', Ct, () => P(b, 'output')),
					L(Ve, Xe);
			},
			Oe = (Ve) => {
				var Xe = Fg(),
					Ye = we(Xe),
					at = Y(B(Ye), 2),
					Ct = B(at),
					st = Y(B(Ct), 2);
				hr(st), V(Ct);
				var We = Y(Ct, 2);
				var rn = (Ae) => {
					var Re = Dg(),
						Ue = we(Re),
						ut = Y(B(Ue), 2);
					hr(ut), V(Ue);
					var Ft = Y(Ue, 2),
						dt = Y(B(Ft), 2);
					V(Ft);
					var ft = Y(Ft, 2),
						bn = Y(B(ft), 2);
					fr(bn), V(ft);
					var pn = Y(ft, 2),
						_n = Y(B(pn), 2);
					fr(_n),
						Te(_n, 'placeholder', '{ "key": "value" }'),
						V(pn),
						me('input', ut, T),
						an(
							ut,
							() => s(g).data.url,
							(on) => (s(g).data.url = on),
						),
						me('change', dt, T),
						As(
							dt,
							() => s(g).data.method,
							(on) => (s(g).data.method = on),
						),
						me('input', bn, T),
						an(
							bn,
							() => s(g).data.headers,
							(on) => (s(g).data.headers = on),
						),
						me('input', _n, T),
						an(
							_n,
							() => s(g).data.body,
							(on) => (s(g).data.body = on),
						),
						L(Ae, Re);
				};
				le(We, (Ae) => {
					s(g).type === 'http-request' && Ae(rn);
				});
				var lt = Y(We, 2);
				var mt = (Ae) => {
					var Re = Hg(),
						Ue = we(Re),
						ut = Y(B(Ue), 2);
					hr(ut), V(Ue);
					var Ft = Y(Ue, 2),
						dt = Y(B(Ft), 2);
					fr(dt),
						V(Ft),
						me('input', ut, T),
						an(
							ut,
							() => s(g).data.webhookUrl,
							(ft) => (s(g).data.webhookUrl = ft),
						),
						me('input', dt, T),
						an(
							dt,
							() => s(g).data.message,
							(ft) => (s(g).data.message = ft),
						),
						L(Ae, Re);
				};
				le(lt, (Ae) => {
					s(g).type === 'slack' && Ae(mt);
				});
				var wt = Y(lt, 2);
				var He = (Ae) => {
					var Re = Rg(),
						Ue = Y(B(Re), 2);
					fr(Ue),
						V(Re),
						me('input', Ue, T),
						an(
							Ue,
							() => s(g).data.message,
							(ut) => (s(g).data.message = ut),
						),
						L(Ae, Re);
				};
				le(wt, (Ae) => {
					s(g).type === 'log' && Ae(He);
				});
				var et = Y(wt, 2);
				var mn = (Ae) => {
					var Re = Qe(),
						Ue = we(Re);
					var ut = (dt) => {
							var ft = Lg(),
								bn = Y(B(ft), 2),
								pn = B(bn);
							hr(pn);
							var _n = Y(pn, 2);
							V(bn),
								V(ft),
								de(() => zs(pn, s(g).data.webhookPath)),
								me('click', _n, () => navigator.clipboard.writeText(s(g).data.webhookPath)),
								L(dt, ft);
						},
						Ft = (dt) => {
							var ft = Vg();
							L(dt, ft);
						};
					le(Ue, (dt) => {
						s(g).data.webhookPath ? dt(ut) : dt(Ft, -1);
					});
					L(Ae, Re);
				};
				le(et, (Ae) => {
					s(g).type === 'webhook' && Ae(mn);
				});
				V(at), V(Ye);
				var wn = Y(Ye, 2),
					ct = Y(B(wn), 2);
				var It = (Ae) => {
						var Re = Bg(),
							Ue = B(Re),
							ut = B(Ue, !0);
						V(Ue), V(Re), de(() => Me(ut, s(x))), L(Ae, Re);
					},
					xn = (Ae) => {
						var Re = Kg();
						L(Ae, Re);
					};
				le(ct, (Ae) => {
					s(x) ? Ae(It) : Ae(xn, -1);
				});
				V(wn),
					me('input', st, T),
					an(
						st,
						() => s(g).data.label,
						(Ae) => (s(g).data.label = Ae),
					),
					L(Ve, Xe);
			};
		le(Tt, (Ve) => {
			s(g).data.execution ? Ve(ve) : Ve(Oe, -1);
		});
		V(it);
		var Bt = Y(it, 2),
			St = B(Bt);
		var nn = (Ve) => {
				var Xe = qg(),
					Ye = we(Xe),
					at = B(Ye);
				var Ct = (He) => {
						var et = Yg();
						vt(), L(He, et);
					},
					st = (He) => {
						var et = Xg();
						vt(), L(He, et);
					};
				le(at, (He) => {
					s(C) ? He(Ct) : He(st, -1);
				});
				V(Ye);
				var We = Y(Ye, 2),
					rn = B(We);
				var lt = (He) => {
						var et = Wg();
						vt(), L(He, et);
					},
					mt = (He) => {
						var et = Zg();
						vt(), L(He, et);
					};
				le(rn, (He) => {
					s(H) ? He(lt) : He(mt, -1);
				});
				V(We);
				var wt = Y(We, 2);
				de(() => {
					(Ye.disabled = s(C) || s(H)), (We.disabled = s(H) || s(C));
				}),
					me('click', Ye, te),
					me('click', We, ye),
					me('click', wt, () => j(s(g).id)),
					L(Ve, Xe);
			},
			Kt = (Ve) => {
				var Xe = Gg();
				L(Ve, Xe);
			};
		le(St, (Ve) => {
			s(F) ? Ve(Kt, -1) : Ve(nn);
		});
		V(Bt),
			de(() => {
				Me(p, s(g).data.label), Me(Ce, s(g).data.typeLabel);
			}),
			me('click', Ee, O),
			L(I, W);
	};
	le(jt, (I) => {
		s(g) && I(Qt);
	});
	V(zt), V(Be);
	var Vt = Y(Be, 2);
	var $t = (I) => {
		var W = e0(),
			q = B(W),
			oe = Y(B(q), 2);
		V(q);
		var se = Y(q, 2),
			fe = B(se);
		var Ge = (Ce) => {
				var Ee = Jg();
				L(Ce, Ee);
			},
			p = (Ce) => {
				var Ee = jg();
				L(Ce, Ee);
			},
			Ne = (Ce) => {
				var Ee = Qe(),
					it = we(Ee);
				Jn(
					it,
					17,
					() => s(J),
					oi,
					(Tt, ve) => {
						var Oe = $g(),
							Bt = B(Oe),
							St = B(Bt),
							nn = B(St, !0);
						V(St);
						var Kt = Y(St, 2),
							Ve = B(Kt, !0);
						V(Kt), V(Bt);
						var Xe = Y(Bt, 2),
							Ye = B(Xe);
						V(Xe);
						var at = Y(Xe, 2);
						var Ct = (st) => {
							var We = Qg(),
								rn = B(We);
							V(We),
								de(
									(lt) => Me(rn, `Duration: ${lt ?? ''}s`),
									[
										() =>
											Math.max(
												0,
												Math.round(
													(new Date(s(ve).finishedAt).getTime() -
														new Date(s(ve).startedAt).getTime()) /
														1e3,
												),
											),
									],
								),
								L(st, We);
						};
						le(at, (st) => {
							s(ve).finishedAt && st(Ct);
						});
						V(Oe),
							de(
								(st) => {
									var We;
									qe(
										Oe,
										1,
										`w-full text-left p-4 bg-white/5 hover:bg-white/10 border ${((We = s(re)) == null ? void 0 : We.id) === s(ve).id ? 'border-primary shadow-[0_0_15px_rgba(217,70,239,0.15)]' : 'border-white/10'} rounded-2xl transition-all flex flex-col gap-1.5`,
									),
										Me(nn, s(ve).id),
										qe(
											Kt,
											1,
											`px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider border
									${s(ve).status === 'success' ? 'bg-emerald-500/10 border-accent2/30 text-accent2' : ''}
									${s(ve).status === 'failed' ? 'bg-red-500/10 border-red-500/30 text-red-400' : ''}
									${s(ve).status === 'running' ? 'bg-primary/10 border-primary/30 text-primary animate-pulse' : ''}
									${s(ve).status === 'pending' ? 'bg-white/5 border-white/10 text-white/50' : ''}`,
										),
										Me(Ve, s(ve).status),
										Me(Ye, `Started: ${st ?? ''}`);
								},
								[() => new Date(s(ve).startedAt).toLocaleString()],
							),
							me('click', Oe, () => Ie(s(ve))),
							L(Tt, Oe);
					},
				),
					L(Ce, Ee);
			};
		le(fe, (Ce) => {
			s(U) ? Ce(Ge) : s(J).length === 0 ? Ce(p, 1) : Ce(Ne, -1);
		});
		V(se), V(W), me('click', oe, he), L(I, W);
	};
	le(Vt, (I) => {
		s(K) && I($t);
	});
	var en = Y(Vt, 2);
	var tn = (I) => {
		var W = n0(),
			q = B(W),
			oe = Y(B(q), 2);
		Jn(
			oe,
			21,
			() => l,
			oi,
			(Ge, p) => {
				var Ne = t0(),
					Ce = B(Ne);
				Nr(Ce, () => s(p).icon, !0), V(Ce);
				var Ee = Y(Ce, 2),
					it = B(Ee),
					Tt = B(it, !0);
				V(it);
				var ve = Y(it, 2),
					Oe = B(ve, !0);
				V(ve),
					V(Ee),
					V(Ne),
					de(() => {
						Me(Tt, s(p).label), Me(Oe, s(p).typeLabel);
					}),
					me('click', Ne, () => G(s(p))),
					L(Ge, Ne);
			},
		),
			V(oe);
		var se = Y(oe, 2),
			fe = B(se);
		V(se), V(q), V(W), me('click', fe, Q), L(I, W);
	};
	le(en, (I) => {
		s(f) && I(tn);
	});
	de(() => {
		qe(
			Be,
			1,
			`relative w-full h-full overflow-hidden rounded-[40px] bg-background border border-white/10 ${n() ?? ''}`,
		),
			_t(Je, `--x: ${s(h) ?? ''}%; --y: ${s(d) ?? ''}%;`),
			qe(
				pe,
				1,
				`absolute top-6 right-6 z-20 flex items-center gap-3 transition-all duration-500 ${s(m) ? 'mr-[35%]' : ''}`,
			),
			qe(Le, 1, `absolute inset-0 z-10 transition-all duration-500 ${s(m) ? 'w-[65%]' : 'w-full'}`),
			_t(zt, `transform: translateX(${s(m) ? '0%' : '100%'})`);
	}),
		me('mousemove', Be, A),
		me('click', Fe, Pe),
		L(e, De),
		be();
}
Oo(['mousemove', 'click', 'input', 'change']);
var i0 = ne('<div class="h-screen w-full relative"><!></div>');
function x0(e, t) {
	xe(t, !0);
	const n = () => Es(Hs, '$page', r),
		[r, o] = Cs();
	const a = w(() => n().params.id);
	var i = i0(),
		l = B(i);
	o0(l, {
		get workflowId() {
			return s(a);
		},
	}),
		V(i),
		L(e, i),
		be(),
		o();
}
export { x0 as component };
