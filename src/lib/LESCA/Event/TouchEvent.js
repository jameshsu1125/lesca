module.exports = {
	db: {},
	init(is) {
		this.fn = function (e) {
			let n = e.target.localName;
			if (e.cancelable)
				if (!e.defaultPrevented)
					if (n != 'input' && n != 'button' && n != 'select') e.preventDefault();
			this.get(e);
		}.bind(this);
		if (is) {
			document.addEventListener('mousedown', this.fn);
		} else {
			if (this.device() == 'mobile') {
				document.addEventListener('touchstart', this.fn, {
					passive: false,
					capture: false,
				});
			} else {
				document.addEventListener('mousedown', this.fn);
			}
		}
	},
	device() {
		let MobileDetect = require('mobile-detect'),
			m = new MobileDetect(window.navigator.userAgent);
		if (m.tablet()) return 'mobile';
		else if (m.mobile()) return 'mobile';
		else return 'desktop';
	},
	get(e) {
		if (!this.db[e.target.id]) return;
		this.db[e.target.id](e);
	},
	add(
		id = 'ID',
		fn = function () {
			console.log('cb');
		}
	) {
		this.db[id] = fn;
	},
	remove(id = 'ID') {
		delete this.db[id];
	},
	clear() {
		this.db = {};
	},
	destory() {
		document.removeEventListener('touchstart', this.fn);
	},
};
