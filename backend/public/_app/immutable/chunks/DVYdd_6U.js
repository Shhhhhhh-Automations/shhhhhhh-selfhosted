import { c as jr, i as kr, n as Pr } from './CTHplljA.js';
import {
	a_ as _r,
	aX as Ar,
	aM as B,
	v as br,
	T as Cr,
	aS as cr,
	aN as D,
	aW as dr,
	b1 as Er,
	aO as er,
	d as F,
	aY as gr,
	aZ as hr,
	j as J,
	aJ as Lr,
	aR as lr,
	F as Nr,
	aU as nr,
	k as O,
	L as or,
	aT as P,
	S as Q,
	h as S,
	b0 as Sr,
	aQ as sr,
	a$ as Tr,
	aP as tr,
	g as U,
	x as ur,
	aV as vr,
	aL as z,
} from './D_ARSHuy.js';
import { d as Ir, c as Mr, a as Or } from './fY0BZPQl.js';

function Hr(r, f) {
	var a = void 0,
		i;
	z(() => {
		a !== (a = f()) &&
			(i && (U(i), (i = null)),
			a &&
				(i = J(() => {
					Q(() => a(r));
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
const K = [
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
					(s === 0 || K.includes(i[s - 1])) && (o === i.length || K.includes(i[o]))
						? (i = (s === 0 ? '' : i.substring(0, s)) + i.substring(o + 1))
						: (s = o);
				}
	}
	return i === '' ? null : i;
}
function W(r, f = !1) {
	var a = f ? ' !important;' : ';',
		i = '';
	for (var e of Object.keys(r)) {
		var t = r[e];
		t != null && t !== '' && (i += ' ' + e + ': ' + t + a);
	}
	return i;
}
function j(r) {
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
			i && v.push(...Object.keys(i).map(j)), e && v.push(...Object.keys(e).map(j));
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
							var L = j(r.substring(c, g).trim());
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
		return i && (a += W(i)), e && (a += W(e, !0)), (a = a.trim()), a === '' ? null : a;
	}
	return r == null ? null : String(r);
}
function Vr(r, f, a, i, e, t) {
	var s = r[B];
	if (S || s !== a || s === void 0) {
		var o = Ur(a, i, t);
		(!S || o !== r.getAttribute('class')) &&
			(o == null ? r.removeAttribute('class') : f ? (r.className = o) : r.setAttribute('class', o)),
			(r[B] = a);
	} else if (t && e !== t)
		for (var v in t) {
			var c = !!t[v];
			(e == null || c !== !!e[v]) && r.classList.toggle(v, c);
		}
	return t;
}
function H(r, f = {}, a, i) {
	for (var e in a) {
		var t = a[e];
		f[e] !== t && (a[e] == null ? r.style.removeProperty(e) : r.style.setProperty(e, t, i));
	}
}
function $r(r, f, a, i) {
	var e = r[D];
	if (S || e !== f) {
		var t = yr(f, i);
		(!S || t !== r.getAttribute('style')) &&
			(t == null ? r.removeAttribute('style') : (r.style.cssText = t)),
			(r[D] = f);
	} else
		i &&
			(Array.isArray(i)
				? (H(r, a == null ? void 0 : a[0], i[0]),
					H(r, a == null ? void 0 : a[1], i[1], 'important'))
				: H(r, a, i));
	return i;
}
function y(r, f, a = !1) {
	if (r.multiple) {
		if (f == null) return;
		if (!er(f)) return tr();
		for (var i of r.options) i.selected = f.includes(X(i));
		return;
	}
	for (i of r.options) {
		var e = X(i);
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
function X(r) {
	return '__value' in r ? r.__value : r.value;
}
const I = Symbol('class'),
	M = Symbol('style'),
	m = Symbol('is custom element'),
	x = Symbol('is html'),
	Yr = P ? 'link' : 'LINK',
	Z = P ? 'input' : 'INPUT',
	Br = P ? 'option' : 'OPTION',
	Dr = P ? 'select' : 'SELECT';
function Fr(r) {
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
		(r[dr] = a), br(a), Ar();
	}
}
function Kr(r, f) {
	f ? r.hasAttribute('selected') || r.setAttribute('selected', '') : r.removeAttribute('selected');
}
function k(r, f, a, i) {
	var e = rr(r);
	(S &&
		((e[f] = r.getAttribute(f)),
		f === 'src' || f === 'srcset' || (f === 'href' && r.nodeName === Yr))) ||
		(e[f] !== (e[f] = a) &&
			(f === 'loading' && (r[Tr] = a),
			a == null
				? r.removeAttribute(f)
				: typeof a != 'string' && ar(r).includes(f)
					? (r[f] = a)
					: r.setAttribute(f, a)));
}
function Wr(r, f, a, i, e = !1, t = !1) {
	if (S && e && r.nodeName === Z) {
		var s = r,
			o = s.type === 'checkbox' ? 'defaultChecked' : 'defaultValue';
		o in a || Fr(s);
	}
	var v = rr(r),
		c = v[m],
		g = !v[x];
	const d = S && c;
	d && F(!1);
	var u = f || {},
		L = r.nodeName === Br;
	for (var T in f) T in a || (a[T] = null);
	a.class ? (a.class = Rr(a.class)) : (i || a[I]) && (a.class = null),
		a[M] && (a.style ?? (a.style = null));
	var N = ar(r);
	if (r.nodeName === Z && 'type' in a && ('value' in a || '__value' in a)) {
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
					var G = jr(A);
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
				else if (l === 'autofocus') nr(r, !!n);
				else if (!c && (l === '__value' || (l === 'value' && n != null))) r.value = r.__value = n;
				else if (l === 'selected' && L) Kr(r, n);
				else {
					var b = l;
					g || (b = Pr(b));
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
							? ((r[b] = n), b in v && (v[b] = vr))
							: typeof n != 'function' && k(r, b, n);
				}
		}
	}
	return d && F(!0), u;
}
function zr(r, f, a = [], i = [], e = [], t, s = !1, o = !1) {
	lr(e, a, i, (v) => {
		var c = void 0,
			g = {},
			d = r.nodeName === Dr,
			u = !1;
		if (
			(z(() => {
				var T = f(...v.map(or)),
					N = Wr(r, c, T, t, s, o);
				u && d && 'value' in T && y(r, T.value);
				for (const _ of Object.getOwnPropertySymbols(g)) T[_] || U(g[_]);
				for (const _ of Object.getOwnPropertySymbols(T)) {
					var E = T[_];
					_.description === cr &&
						(!c || E !== c[_]) &&
						(g[_] && U(g[_]), (g[_] = J(() => Hr(r, () => E)))),
						(N[_] = E);
				}
				c = N;
			}),
			d)
		) {
			var L = r;
			Q(() => {
				y(L, c.value, !0), Gr(L);
			});
		}
		u = !0;
	});
}
function rr(r) {
	var f;
	return r[(f = gr)] ?? (r[f] = { [m]: r.nodeName.includes('-'), [x]: r.namespaceURI === hr });
}
var q = new Map();
function ar(r) {
	var f = r.getAttribute('is') || r.nodeName,
		a = q.get(f);
	if (a) return a;
	q.set(f, (a = []));
	for (var i, e = r, t = Element.prototype; t !== e; ) {
		i = Sr(e);
		for (var s in i)
			i[s].set && s !== 'innerHTML' && s !== 'textContent' && s !== 'innerText' && a.push(s);
		e = _r(e);
	}
	return a;
}
function Jr(r, f, a = f) {
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

export { $r as e, Fr as r, I as C, Jr as b, k as s, M as S, Rr as d, Vr as c, zr as a };
