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
						op.push($(this).html());
					});
				txt = op;
			}
			let a = $(this).children('a').length;
			if (a > 0) {
				let op = [];
				$(this)
					.children('a')
					.each(function () {
						let isImg = $(this).children('img').length > 0;
						let dat = {};
						if (isImg) {
							let img = $(this).children('img')[0].getAttribute('src');
							dat.url = this.getAttribute('href');
							dat.img = img;
						} else {
							dat.name = this.innerText;
							dat.url = this.getAttribute('href');
						}

						let dl = $(this).attr('datalayer');
						if (dl) dat.datalayer = dl;

						op.push(dat);
					});
				txt = op;
			}

			if (len == 0) {
				let sup = $(this).children('sup').length;
				let sub = $(this).children('sub').length;
				if (sup > 0 || sub > 0) txt = $(this).html();
			}

			if (len == 0) {
				let isImg = $(this).children('img').length > 0;
				if (isImg) {
					txt = $(this).children('img')[0].getAttribute('src');
				}
				dat[s][sty] = txt || true;
			} else findDom(this, dat[s]);
		});
	}
};
module.exports = function (dom) {
	let data = {};
	findDom(dom, data);
	return data;
};
