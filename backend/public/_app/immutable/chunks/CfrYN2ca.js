import {
	aE as A,
	u as c,
	aA as E,
	aB as g,
	h as i,
	an as l,
	c as M,
	a as N,
	az as p,
	e as s,
	i as u,
	aC as w,
	aF as x,
	aD as y,
} from './CvLgNXMg.js';

var f;
const d =
	((f = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : f.trustedTypes) &&
	globalThis.window.trustedTypes.createPolicy('svelte-trusted-html', { createHTML: (t) => t });
function L(t) {
	return (d == null ? void 0 : d.createHTML(t)) ?? t;
}
function b(t) {
	var r = p('template');
	return (r.innerHTML = L(t.replaceAll('<!>', '<!---->'))), r.content;
}
function n(t, r) {
	var e = c;
	e.nodes === null && (e.nodes = { start: t, end: r, a: null, t: null });
}
function P(t, r) {
	var e = (r & g) !== 0,
		m = (r & w) !== 0,
		a,
		v = !t.startsWith('<!>');
	return () => {
		if (i) return n(s, null), s;
		a === void 0 && ((a = b(v ? t : '<!>' + t)), e || (a = l(a)));
		var o = m || E ? document.importNode(a, !0) : a.cloneNode(!0);
		if (e) {
			var T = l(o),
				h = o.lastChild;
			n(T, h);
		} else n(o, o);
		return o;
	};
}
function R(t = '') {
	if (!i) {
		var r = u(t + '');
		return n(r, r), r;
	}
	var e = s;
	return e.nodeType !== A ? (e.before((e = u())), M(e)) : x(e), n(e, e), e;
}
function D() {
	if (i) return n(s, null), s;
	var t = document.createDocumentFragment(),
		r = document.createComment(''),
		e = u();
	return t.append(r, e), n(r, e), t;
}
function I(t, r) {
	if (i) {
		var e = c;
		(!(e.f & y) || e.nodes.end === null) && (e.nodes.end = s), N();
		return;
	}
	t !== null && t.before(r);
}
const C = '5';
var _;
typeof window < 'u' &&
	((_ = window.__svelte ?? (window.__svelte = {})).v ?? (_.v = new Set())).add(C);

export { D as c, I as a, n as b, P as f, R as t };
