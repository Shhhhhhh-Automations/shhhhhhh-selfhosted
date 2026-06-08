import { n as k, v as M, t as q, w as S, x as T, o as v, q as w, u as x } from './njxCO7gR.js';

const u = Symbol('events'),
	B = new Set(),
	O = new Set();
function y(a, r, i, c = {}) {
	function e(t) {
		if ((c.capture || W.call(r, t), !t.cancelBubble))
			return T(() => (i == null ? void 0 : i.call(this, t)));
	}
	return (
		a.startsWith('pointer') || a.startsWith('touch') || a === 'wheel'
			? S(() => {
					r.addEventListener(a, e, c);
				})
			: r.addEventListener(a, e, c),
		e
	);
}
function H(a, r, i, c = {}) {
	var e = y(r, a, i, c);
	return () => {
		a.removeEventListener(r, e, c);
	};
}
function P(a, r, i, c, e) {
	var t = { capture: c, passive: e },
		n = y(a, r, i, t);
	(r === document.body || r === window || r === document || r instanceof HTMLMediaElement) &&
		M(() => {
			r.removeEventListener(a, n, t);
		});
}
function j(a, r, i) {
	(r[u] ?? (r[u] = {}))[a] = i;
}
function z(a) {
	for (var r = 0; r < a.length; r++) B.add(a[r]);
	for (var i of O) i(a);
}
let b = null;
function W(a) {
	var h, p;
	var i = this.ownerDocument,
		c = a.type,
		e = ((h = a.composedPath) == null ? void 0 : h.call(a)) || [],
		t = e[0] || a.target;
	b = a;
	var n = 0,
		l = b === a && a[u];
	if (l) {
		var f = e.indexOf(l);
		if (f !== -1 && (this === document || this === window)) {
			a[u] = this;
			return;
		}
		var d = e.indexOf(this);
		if (d === -1) return;
		f <= d && (n = f);
	}
	if (((t = e[n] || a.target), t !== this)) {
		k(a, 'currentTarget', {
			configurable: !0,
			get() {
				return t || i;
			},
		});
		var E = q,
			L = x;
		v(null), w(null);
		try {
			for (var o, _ = []; t !== null && t !== this; ) {
				try {
					var g = (p = t[u]) == null ? void 0 : p[c];
					g != null && (!t.disabled || a.target === t) && g.call(t, a);
				} catch (s) {
					o ? _.push(s) : (o = s);
				}
				if (a.cancelBubble) break;
				n++, (t = n < e.length ? e[n] : null);
			}
			if (o) {
				for (const s of _)
					queueMicrotask(() => {
						throw s;
					});
				throw o;
			}
		} finally {
			(a[u] = this), delete a.currentTarget, v(E), w(L);
		}
	}
}

export { B as b, H as o, j as a, O as r, P as e, W as h, y as c, z as d };
