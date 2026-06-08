import { B as ir } from './BjEwslEs.js';
import {
	R as $,
	d as A,
	a5 as ar,
	W as b,
	r as C,
	F as D,
	D as er,
	s as F,
	e as G,
	U as H,
	a7 as h,
	h as I,
	I as J,
	b as j,
	c as K,
	$ as k,
	u as L,
	E as m,
	a6 as N,
	a1 as nr,
	L as P,
	_ as Q,
	S as q,
	V as R,
	a0 as rr,
	a4 as sr,
	a2 as tr,
	a as U,
	X as V,
	Y as W,
	Z as X,
	a3 as x,
	C as Z,
	T as z,
} from './D_ARSHuy.js';

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
	I && ((t = G), U());
	var s = new ir(r);
	j(() => {
		var a = e() ?? null;
		if (I) {
			var l = C(t),
				i = l === $,
				u = a !== null;
			if (i !== u) {
				var d = F();
				K(d), (s.anchor = d), A(!1), s.ensure(a, a && ((o) => n(o, a))), A(!0);
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
		a = L;
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
		a = (n & rr) !== 0,
		l = (n & ar) !== 0,
		i = t,
		u = !0,
		d = void 0,
		o = () => (l && s ? (d ?? (d = x(t)), P(d)) : (u && ((u = !1), (i = l ? D(t) : t)), i));
	let p;
	if (a) {
		var Y = R in r || N in r;
		p = ((T = b(r, e)) == null ? void 0 : T.set) ?? (Y && e in r ? (f) => (r[e] = f) : void 0);
	}
	var _,
		O = !1;
	a ? ([_, O] = fr(() => r[e])) : (_ = r[e]),
		_ === void 0 && t !== void 0 && ((_ = o()), p && (s && V(), p(_)));
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
		s && !(n & W))
	)
		return c;
	if (p) {
		var B = r.$$legacy;
		return function (f, S) {
			return arguments.length > 0 ? ((!s || !S || B || O) && p(S ? c() : f), f) : c();
		};
	}
	var w = !1,
		v = (n & tr ? x : sr)(() => ((w = !1), c()));
	a && P(v);
	var M = L;
	return function (f, S) {
		if (arguments.length > 0) {
			const E = S ? P(v) : s && a ? X(f) : f;
			return J(v, E), (w = !0), i !== void 0 && (i = E), f;
		}
		return (Q && w) || M.f & k ? v.v : P(v);
	};
}

export { _r as r, cr as c, hr as p, pr as b, vr as s };
