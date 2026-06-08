import { B as ir } from './CoFazt75.js';
import {
	P as $,
	h as A,
	a3 as ar,
	u as B,
	U as b,
	r as C,
	C as D,
	B as er,
	e as F,
	s as G,
	S as H,
	a4 as h,
	d as I,
	V as J,
	b as j,
	c as K,
	Z as k,
	E as m,
	a5 as N,
	$ as nr,
	W as Q,
	Q as q,
	T as R,
	_ as rr,
	J as S,
	a1 as sr,
	a0 as tr,
	a as U,
	X as V,
	G as W,
	Y as X,
	a2 as x,
	A as Z,
	R as z,
} from './njxCO7gR.js';

let g = !1;
function fr(r) {
	var e = g;
	try {
		return (g = !1), [r(), g];
	} finally {
		g = e;
	}
}
function cr(r, e, n) {
	var t;
	A && ((t = F), U());
	var s = new ir(r);
	j(() => {
		var a = e() ?? null;
		if (A) {
			var l = C(t),
				i = l === $,
				u = a !== null;
			if (i !== u) {
				var d = G();
				K(d), (s.anchor = d), I(!1), s.ensure(a, a && ((o) => n(o, a))), I(!0);
				return;
			}
		}
		s.ensure(a, a && ((o) => n(o, a)));
	}, m);
}
function y(r, e) {
	return r === e || (r == null ? void 0 : r[R]) === e;
}
function pr(r = {}, e, n, t) {
	var s = Z.r,
		a = B;
	return (
		q(() => {
			var l, i;
			return (
				z(() => {
					(l = i),
						(i = []),
						D(() => {
							y(n(...i), r) || (e(r, ...i), l && y(n(...l), r) && e(null, ...l));
						});
				}),
				() => {
					let u = a;
					for (; u !== s && u.parent !== null && u.parent.f & H; ) u = u.parent;
					const d = () => {
							i && y(n(...i), r) && e(null, ...i);
						},
						o = u.teardown;
					u.teardown = () => {
						d(), o == null || o();
					};
				}
			);
		}),
		r
	);
}
const ur = {
	get(r, e) {
		if (!r.exclude.has(e)) return r.props[e];
	},
	set(r, e) {
		return !1;
	},
	getOwnPropertyDescriptor(r, e) {
		if (!r.exclude.has(e) && e in r.props)
			return { enumerable: !0, configurable: !0, value: r.props[e] };
	},
	has(r, e) {
		return r.exclude.has(e) ? !1 : e in r.props;
	},
	ownKeys(r) {
		return Reflect.ownKeys(r.props).filter((e) => !r.exclude.has(e));
	},
};
function _r(r, e, n) {
	return new Proxy({ props: r, exclude: e }, ur);
}
const or = {
	get(r, e) {
		let n = r.props.length;
		for (; n--; ) {
			let t = r.props[n];
			if ((h(t) && (t = t()), typeof t == 'object' && t !== null && e in t)) return t[e];
		}
	},
	set(r, e, n) {
		let t = r.props.length;
		for (; t--; ) {
			let s = r.props[t];
			h(s) && (s = s());
			const a = b(s, e);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(r, e) {
		let n = r.props.length;
		for (; n--; ) {
			let t = r.props[n];
			if ((h(t) && (t = t()), typeof t == 'object' && t !== null && e in t)) {
				const s = b(t, e);
				return s && !s.configurable && (s.configurable = !0), s;
			}
		}
	},
	has(r, e) {
		if (e === R || e === N) return !1;
		for (let n of r.props) if ((h(n) && (n = n()), n != null && e in n)) return !0;
		return !1;
	},
	ownKeys(r) {
		const e = [];
		for (let n of r.props)
			if ((h(n) && (n = n()), !!n)) {
				for (const t in n) e.includes(t) || e.push(t);
				for (const t of Object.getOwnPropertySymbols(n)) e.includes(t) || e.push(t);
			}
		return e;
	},
};
function vr(...r) {
	return new Proxy({ props: r }, or);
}
function hr(r, e, n, t) {
	var T;
	var s = !er || (n & nr) !== 0,
		a = (n & tr) !== 0,
		l = (n & rr) !== 0,
		i = t,
		u = !0,
		d = void 0,
		o = () => (l && s ? (d ?? (d = x(t)), S(d)) : (u && ((u = !1), (i = l ? D(t) : t)), i));
	let p;
	if (a) {
		var Y = R in r || N in r;
		p = ((T = b(r, e)) == null ? void 0 : T.set) ?? (Y && e in r ? (f) => (r[e] = f) : void 0);
	}
	var _,
		O = !1;
	a ? ([_, O] = fr(() => r[e])) : (_ = r[e]),
		_ === void 0 && t !== void 0 && ((_ = o()), p && (s && J(), p(_)));
	var c;
	if (
		(s
			? (c = () => {
					var f = r[e];
					return f === void 0 ? o() : ((u = !0), f);
				})
			: (c = () => {
					var f = r[e];
					return f !== void 0 && (i = void 0), f === void 0 ? i : f;
				}),
		s && !(n & Q))
	)
		return c;
	if (p) {
		var L = r.$$legacy;
		return function (f, P) {
			return arguments.length > 0 ? ((!s || !P || L || O) && p(P ? c() : f), f) : c();
		};
	}
	var w = !1,
		v = (n & sr ? x : ar)(() => ((w = !1), c()));
	a && S(v);
	var M = B;
	return function (f, P) {
		if (arguments.length > 0) {
			const E = P ? S(v) : s && a ? V(f) : f;
			return W(v, E), (w = !0), i !== void 0 && (i = E), f;
		}
		return (X && w) || M.f & k ? v.v : S(v);
	};
}

export { _r as r, cr as c, hr as p, pr as b, vr as s };
