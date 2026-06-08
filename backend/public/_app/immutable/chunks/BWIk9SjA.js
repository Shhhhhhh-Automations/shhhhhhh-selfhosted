import { o as h, n as k, u as q, t as S, q as v } from './CvLgNXMg.js';

const e = Symbol('events'),
	O = new Set(),
	T = new Set();
function B(a, r, i) {
	(r[e] ?? (r[e] = {}))[a] = i;
}
function D(a) {
	for (var r = 0; r < a.length; r++) O.add(a[r]);
	for (var i of T) i(a);
}
let b = null;
function M(a) {
	var _, g;
	var i = this.ownerDocument,
		w = a.type,
		o = ((_ = a.composedPath) == null ? void 0 : _.call(a)) || [],
		t = o[0] || a.target;
	b = a;
	var l = 0,
		u = b === a && a[e];
	if (u) {
		var n = o.indexOf(u);
		if (n !== -1 && (this === document || this === window)) {
			a[e] = this;
			return;
		}
		var s = o.indexOf(this);
		if (s === -1) return;
		n <= s && (l = n);
	}
	if (((t = o[l] || a.target), t !== this)) {
		k(a, 'currentTarget', {
			configurable: !0,
			get() {
				return t || i;
			},
		});
		var y = S,
			m = q;
		h(null), v(null);
		try {
			for (var c, d = []; t !== null && t !== this; ) {
				try {
					var p = (g = t[e]) == null ? void 0 : g[w];
					p != null && (!t.disabled || a.target === t) && p.call(t, a);
				} catch (f) {
					c ? d.push(f) : (c = f);
				}
				if (a.cancelBubble) break;
				l++, (t = l < o.length ? o[l] : null);
			}
			if (c) {
				for (const f of d)
					queueMicrotask(() => {
						throw f;
					});
				throw c;
			}
		} finally {
			(a[e] = this), delete a.currentTarget, h(y), v(m);
		}
	}
}

export { B as a, D as d, M as h, O as b, T as r };
