import { d as Ir, c as Mr, a as Or } from './DA0K5guU.js';
import { n as Hr, i as kr, c as Pr } from './DiFkmEDl.js';
import {
	aY as _r,
	aV as Ar,
	aL as B,
	aT as br,
	R as Cr,
	aQ as cr,
	d as D,
	w as dr,
	a$ as Er,
	aM as er,
	aW as gr,
	aU as H,
	aX as hr,
	aK as K,
	aH as Lr,
	aP as lr,
	C as Nr,
	aR as nr,
	k as O,
	J as or,
	j as q,
	h as S,
	a_ as Sr,
	aO as sr,
	aZ as Tr,
	aN as tr,
	g as U,
	v as ur,
	aS as vr,
	aJ as Z,
	Q as z,
} from './njxCO7gR.js';

function jr(r, f) {
	var a = void 0,
		i;
	Z(() => {
		a !== (a = f()) &&
			(i && (U(i), (i = null)),
			a &&
				(i = q(() => {
					z(() => a(r));
				})));
	});
}
function p(r) {
	var f,
		a,
		i = '';
	if (typeof r == 'string' || typeof r == 'number') i += r;
	else if (typeof r == 'object')
		if (Array.isArray(r)) {
			var e = r.length;
			for (f = 0; f < e; f++) r[f] && (a = p(r[f])) && (i && (i += ' '), (i += a));
		} else for (a in r) r[a] && (i && (i += ' '), (i += a));
	return i;
}
function wr() {
	for (var r, f, a = 0, i = '', e = arguments.length; a < e; a++)
		(r = arguments[a]) && (f = p(r)) && (i && (i += ' '), (i += f));
	return i;
}
function Rr(r) {
	return typeof r == 'object' ? wr(r) : (r ?? '');
}
const F = [
	...` 	
\r\f \v\uFEFF`,
];
function Ur(r, f, a) {
	var i = r == null ? '' : '' + r;
	if ((f && (i = i ? i + ' ' + f : f), a)) {
		for (var e of Object.keys(a))
			if (a[e]) i = i ? i + ' ' + e : e;
			else if (i.length)
				for (var t = e.length, s = 0; (s = i.indexOf(e, s)) >= 0; ) {
					var o = s + t;
					(s === 0 || F.includes(i[s - 1])) && (o === i.length || F.includes(i[o]))
						? (i = (s === 0 ? '' : i.substring(0, s)) + i.substring(o + 1))
						: (s = o);
				}
	}
	return i === '' ? null : i;
}
function J(r, f = !1) {
	var a = f ? ' !important;' : ';',
		i = '';
	for (var e of Object.keys(r)) {
		var t = r[e];
		t != null && t !== '' && (i += ' ' + e + ': ' + t + a);
	}
	return i;
}
function P(r) {
	return r[0] !== '-' || r[1] !== '-' ? r.toLowerCase() : r;
}
function yr(r, f) {
	if (f) {
		var a = '',
			i,
			e;
		if ((Array.isArray(f) ? ((i = f[0]), (e = f[1])) : (i = f), r)) {
			r = String(r)
				.replaceAll(/\s*\/\*.*?\*\/\s*/g, '')
				.trim();
			var t = !1,
				s = 0,
				o = !1,
				v = [];
			i && v.push(...Object.keys(i).map(P)), e && v.push(...Object.keys(e).map(P));
			var c = 0,
				g = -1;
			const N = r.length;
			for (var d = 0; d < N; d++) {
				var u = r[d];
				if (
					(o
						? u === '/' && r[d - 1] === '*' && (o = !1)
						: t
							? t === u && (t = !1)
							: u === '/' && r[d + 1] === '*'
								? (o = !0)
								: u === '"' || u === "'"
									? (t = u)
									: u === '('
										? s++
										: u === ')' && s--,
					!o && t === !1 && s === 0)
				) {
					if (u === ':' && g === -1) g = d;
					else if (u === ';' || d === N - 1) {
						if (g !== -1) {
							var L = P(r.substring(c, g).trim());
							if (!v.includes(L)) {
								u !== ';' && d++;
								var T = r.substring(c, d).trim();
								a += ' ' + T + ';';
							}
						}
						(c = d + 1), (g = -1);
					}
				}
			}
		}
		return i && (a += J(i)), e && (a += J(e, !0)), (a = a.trim()), a === '' ? null : a;
	}
	return r == null ? null : String(r);
}
function Vr(r, f, a, i, e, t) {
	var s = r[K];
	if (S || s !== a || s === void 0) {
		var o = Ur(a, i, t);
		(!S || o !== r.getAttribute('class')) &&
			(o == null ? r.removeAttribute('class') : f ? (r.className = o) : r.setAttribute('class', o)),
			(r[K] = a);
	} else if (t && e !== t)
		for (var v in t) {
			var c = !!t[v];
			(e == null || c !== !!e[v]) && r.classList.toggle(v, c);
		}
	return t;
}
function j(r, f = {}, a, i) {
	for (var e in a) {
		var t = a[e];
		f[e] !== t && (a[e] == null ? r.style.removeProperty(e) : r.style.setProperty(e, t, i));
	}
}
function $r(r, f, a, i) {
	var e = r[B];
	if (S || e !== f) {
		var t = yr(f, i);
		(!S || t !== r.getAttribute('style')) &&
			(t == null ? r.removeAttribute('style') : (r.style.cssText = t)),
			(r[B] = f);
	} else
		i &&
			(Array.isArray(i)
				? (j(r, a == null ? void 0 : a[0], i[0]),
					j(r, a == null ? void 0 : a[1], i[1], 'important'))
				: j(r, a, i));
	return i;
}
function y(r, f, a = !1) {
	if (r.multiple) {
		if (f == null) return;
		if (!er(f)) return tr();
		for (var i of r.options) i.selected = f.includes(Q(i));
		return;
	}
	for (i of r.options) {
		var e = Q(i);
		if (sr(e, f)) {
			i.selected = !0;
			return;
		}
	}
	(!a || f !== void 0) && (r.selectedIndex = -1);
}
function Gr(r) {
	var f = new MutationObserver(() => {
		y(r, r.__value);
	});
	f.observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ['value'] }),
		ur(() => {
			f.disconnect();
		});
}
function Q(r) {
	return '__value' in r ? r.__value : r.value;
}
const I = Symbol('class'),
	M = Symbol('style'),
	m = Symbol('is custom element'),
	x = Symbol('is html'),
	Yr = H ? 'link' : 'LINK',
	W = H ? 'input' : 'INPUT',
	Kr = H ? 'option' : 'OPTION',
	Br = H ? 'select' : 'SELECT';
function Dr(r) {
	if (S) {
		var f = !1,
			a = () => {
				if (!f) {
					if (((f = !0), r.hasAttribute('value'))) {
						var i = r.value;
						k(r, 'value', null), (r.value = i);
					}
					if (r.hasAttribute('checked')) {
						var e = r.checked;
						k(r, 'checked', null), (r.checked = e);
					}
				}
			};
		(r[vr] = a), dr(a), br();
	}
}
function Fr(r, f) {
	f ? r.hasAttribute('selected') || r.setAttribute('selected', '') : r.removeAttribute('selected');
}
function k(r, f, a, i) {
	var e = rr(r);
	(S &&
		((e[f] = r.getAttribute(f)),
		f === 'src' || f === 'srcset' || (f === 'href' && r.nodeName === Yr))) ||
		(e[f] !== (e[f] = a) &&
			(f === 'loading' && (r[nr] = a),
			a == null
				? r.removeAttribute(f)
				: typeof a != 'string' && ar(r).includes(f)
					? (r[f] = a)
					: r.setAttribute(f, a)));
}
function Jr(r, f, a, i, e = !1, t = !1) {
	if (S && e && r.nodeName === W) {
		var s = r,
			o = s.type === 'checkbox' ? 'defaultChecked' : 'defaultValue';
		o in a || Dr(s);
	}
	var v = rr(r),
		c = v[m],
		g = !v[x];
	const d = S && c;
	d && D(!1);
	var u = f || {},
		L = r.nodeName === Kr;
	for (var T in f) T in a || (a[T] = null);
	a.class ? (a.class = Rr(a.class)) : (i || a[I]) && (a.class = null),
		a[M] && (a.style ?? (a.style = null));
	var N = ar(r);
	if (r.nodeName === W && 'type' in a && ('value' in a || '__value' in a)) {
		var E = a.type;
		(E !== u.type || (E === void 0 && r.hasAttribute('type'))) && ((u.type = E), k(r, 'type', E));
	}
	for (const l in a) {
		const n = a[l];
		if (L && l === 'value' && n == null) {
			(r.value = r.__value = ''), (u[l] = n);
			continue;
		}
		if (l === 'class') {
			var _ = r.namespaceURI === 'http://www.w3.org/1999/xhtml';
			Vr(r, _, n, i, f == null ? void 0 : f[I], a[I]), (u[l] = n), (u[I] = a[I]);
			continue;
		}
		if (l === 'style') {
			$r(r, n, f == null ? void 0 : f[M], a[M]), (u[l] = n), (u[M] = a[M]);
			continue;
		}
		var V = u[l];
		if (!(n === V && !(n === void 0 && r.hasAttribute(l)))) {
			u[l] = n;
			var $ = l[0] + l[1];
			if ($ !== '$$')
				if ($ === 'on') {
					const h = {},
						C = '$$' + l;
					let A = l.slice(2);
					var G = Pr(A);
					if ((kr(A) && ((A = A.slice(0, -7)), (h.capture = !0)), !G && V)) {
						if (n != null) continue;
						r.removeEventListener(A, u[C], h), (u[C] = null);
					}
					if (G) Or(A, r, n), Ir([A]);
					else if (n != null) {
						const fr = function (ir) {
							u[l].call(this, ir);
						};
						u[C] = Mr(A, r, fr, h);
					}
				} else if (l === 'style') k(r, l, n);
				else if (l === 'autofocus') Ar(r, !!n);
				else if (!c && (l === '__value' || (l === 'value' && n != null))) r.value = r.__value = n;
				else if (l === 'selected' && L) Fr(r, n);
				else {
					var b = l;
					g || (b = Hr(b));
					var Y = b === 'defaultValue' || b === 'defaultChecked';
					if (n == null && !c && !Y)
						if (((v[l] = null), b === 'value' || b === 'checked')) {
							const h = r;
							const C = f === void 0;
							if (b === 'value') {
								const A = h.defaultValue;
								h.removeAttribute(b), (h.defaultValue = A), (h.value = h.__value = C ? A : null);
							} else {
								const A = h.defaultChecked;
								h.removeAttribute(b), (h.defaultChecked = A), (h.checked = C ? A : !1);
							}
						} else r.removeAttribute(l);
					else
						Y || (N.includes(b) && (c || typeof n != 'string'))
							? ((r[b] = n), b in v && (v[b] = gr))
							: typeof n != 'function' && k(r, b, n);
				}
		}
	}
	return d && D(!0), u;
}
function Zr(r, f, a = [], i = [], e = [], t, s = !1, o = !1) {
	lr(e, a, i, (v) => {
		var c = void 0,
			g = {},
			d = r.nodeName === Br,
			u = !1;
		if (
			(Z(() => {
				var T = f(...v.map(or)),
					N = Jr(r, c, T, t, s, o);
				u && d && 'value' in T && y(r, T.value);
				for (const _ of Object.getOwnPropertySymbols(g)) T[_] || U(g[_]);
				for (const _ of Object.getOwnPropertySymbols(T)) {
					var E = T[_];
					_.description === cr &&
						(!c || E !== c[_]) &&
						(g[_] && U(g[_]), (g[_] = q(() => jr(r, () => E)))),
						(N[_] = E);
				}
				c = N;
			}),
			d)
		) {
			var L = r;
			z(() => {
				y(L, c.value, !0), Gr(L);
			});
		}
		u = !0;
	});
}
function rr(r) {
	var f;
	return r[(f = hr)] ?? (r[f] = { [m]: r.nodeName.includes('-'), [x]: r.namespaceURI === _r });
}
var X = new Map();
function ar(r) {
	var f = r.getAttribute('is') || r.nodeName,
		a = X.get(f);
	if (a) return a;
	X.set(f, (a = []));
	for (var i, e = r, t = Element.prototype; t !== e; ) {
		i = Sr(e);
		for (var s in i)
			i[s].set && s !== 'innerHTML' && s !== 'textContent' && s !== 'innerText' && a.push(s);
		e = Tr(e);
	}
	return a;
}
function qr(r, f, a = f) {
	var i = new WeakSet();
	Er(r, 'input', async (e) => {
		var t = e ? r.defaultValue : r.value;
		if (((t = w(r) ? R(t) : t), a(t), O !== null && i.add(O), await Lr(), t !== (t = f()))) {
			var s = r.selectionStart,
				o = r.selectionEnd,
				v = r.value.length;
			if (((r.value = t ?? ''), o !== null)) {
				var c = r.value.length;
				s === o && o === v && c > v
					? ((r.selectionStart = c), (r.selectionEnd = c))
					: ((r.selectionStart = s), (r.selectionEnd = Math.min(o, c)));
			}
		}
	}),
		((S && r.defaultValue !== r.value) || (Nr(f) == null && r.value)) &&
			(a(w(r) ? R(r.value) : r.value), O !== null && i.add(O)),
		Cr(() => {
			var e = f();
			if (r === document.activeElement) {
				var t = O;
				if (i.has(t)) return;
			}
			(w(r) && e === R(r.value)) ||
				(r.type === 'date' && !e && !r.value) ||
				(e !== r.value && (r.value = e ?? ''));
		});
}
function w(r) {
	var f = r.type;
	return f === 'number' || f === 'range';
}
function R(r) {
	return r === '' ? null : +r;
}

export { $r as e, Dr as r, I as C, k as s, M as S, qr as b, Rr as d, Vr as c, Zr as a };
