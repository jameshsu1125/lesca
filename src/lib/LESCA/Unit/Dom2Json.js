const $ = require('jquery');
const findDom = (tar, dat) => {
	let t = $(tar).children('div'),
		s = tar.className;
	dat[s] = {};
	if (t.length > 0 && s) {
		t.each(function () {
			let len = $(this).children('div').length,
				sty = this.className,
				txt = this.innerText,
				pln = $(this).children('p').length;
			if (pln > 0) {
				let op = [];
				$(this)
					.children('p')
					.each(function () {
						op.push(this.innerText);
					});
				txt = op;
			}

			if (len == 0) dat[s][sty] = txt || true;
			else findDom(this, dat[s]);
		});
	}
};
module.exports = function (dom) {
	let data = {};
	findDom(dom, data);
	return data;
};
