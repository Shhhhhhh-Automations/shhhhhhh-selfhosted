import {
	aA as A,
	c as b,
	aB as C,
	aD as D,
	u as g,
	e as i,
	aC as L,
	h as l,
	a as M,
	ax as N,
	am as o,
	az as T,
	i as v,
	ay as x,
} from './njxCO7gR.js';

var h;
const m =
	((h = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : h.trustedTypes) &&
	globalThis.window.trustedTypes.createPolicy('svelte-trusted-html', { createHTML: (e) => e });
function O(e) {
	return (m == null ? void 0 : m.createHTML(e)) ?? e;
}
function w(e) {
	var a = N('template');
	return (a.innerHTML = O(e.replaceAll('<!>', '<!---->'))), a.content;
}
function n(e, a) {
	var r = g;
	r.nodes === null && (r.nodes = { start: e, end: a, a: null, t: null });
}
function F(e, a) {
	var r = (a & T) !== 0,
		f = (a & A) !== 0,
		s,
		_ = !e.startsWith('<!>');
	return () => {
		if (l) return n(i, null), i;
		s === void 0 && ((s = w(_ ? e : '<!>' + e)), r || (s = o(s)));
		var t = f || x ? document.importNode(s, !0) : s.cloneNode(!0);
		if (r) {
			var c = o(t),
				u = t.lastChild;
			n(c, u);
		} else n(t, t);
		return t;
	};
}
function P(e, a, r = 'svg') {
	var f = !e.startsWith('<!>'),
		s = (a & T) !== 0,
		_ = `<${r}>${f ? e : '<!>' + e}</${r}>`,
		t;
	return () => {
		if (l) return n(i, null), i;
		if (!t) {
			var c = w(_),
				u = o(c);
			if (s) for (t = document.createDocumentFragment(); o(u); ) t.appendChild(o(u));
			else t = o(u);
		}
		var d = t.cloneNode(!0);
		if (s) {
			var E = o(d),
				y = d.lastChild;
			n(E, y);
		} else n(d, d);
		return d;
	};
}
function H(e, a) {
	return P(e, a, 'svg');
}
function S(e = '') {
	if (!l) {
		var a = v(e + '');
		return n(a, a), a;
	}
	var r = i;
	return r.nodeType !== L ? (r.before((r = v())), b(r)) : D(r), n(r, r), r;
}
function $() {
	if (l) return n(i, null), i;
	var e = document.createDocumentFragment(),
		a = document.createComment(''),
		r = v();
	return e.append(a, r), n(a, r), e;
}
function B(e, a) {
	if (l) {
		var r = g;
		(!(r.f & C) || r.nodes.end === null) && (r.nodes.end = i), M();
		return;
	}
	e !== null && e.before(a);
}
const R = '5';
var p;
typeof window < 'u' &&
	((p = window.__svelte ?? (window.__svelte = {})).v ?? (p.v = new Set())).add(R);

export { $ as c, B as a, F as f, H as d, n as b, S as t };
