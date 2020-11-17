const $ = require('jquery');
const findDom = (tar, dat) => {
	const self = this;
	let t = $(tar).children('div'),
		s = tar.className;
	dat[s] = {};
	if (t.length > 0 && s) {
		t.each(function () {
			let len = $(this).children('div').length;
			let sty = this.className;
			let txt = this.innerText;
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
