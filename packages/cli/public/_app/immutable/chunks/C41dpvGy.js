import { B as c } from './BjEwslEs.js';
import { b as p, E as t } from './D_ARSHuy.js';

function E(r, s, ...a) {
	var e = new c(r);
	p(() => {
		const n = s() ?? null;
		e.ensure(n, n && ((o) => n(o, ...a)));
	}, t);
}

export { E as s };
