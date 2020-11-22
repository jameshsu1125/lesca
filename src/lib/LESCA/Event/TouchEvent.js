module.exports = {
	db: {},
	preventDefault: true,
	init(needDesktopEventCombine = true) {
		this.fn = function (e) {
			let n = e.target.localName;
			if (e.cancelable && !e.defaultPrevented && this.preventDefault) if (n != 'input' && n != 'button' && n != 'select') e.preventDefault();
			this.get(e);
		}.bind(this);

		if (needDesktopEventCombine) {
			if (this.device() == 'mobile') {
				document.addEventListener('touchstart', this.fn, {
					passive: false,
					capture: false,
				});
			} else {
				document.addEventListener('mousedown', this.fn);
			}
		} else {
			if (this.device() == 'mobile') {
				document.addEventListener('touchstart', this.fn, {
					passive: false,
					capture: false,
				});
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
		let key = e.target.id + '_id';
		if (this.db[key]) {
			this.db[key](e);
			return;
		}

		key = e.target.className + '_class';
		if (this.db[key]) {
			this.db[key](e);
			return;
		}
	},
	add(
		query = '#ID',
		fn = function () {
			console.log('cb');
		}
	) {
		let type = query.slice(0, 1) == '.' ? '_class' : '_id';
		let name = query.slice(1);
		let key = name + type;
		this.db[key] = fn;
	},
	remove(query = '#ID') {
		let type = query.slice(0, 1) == '.' ? '_class' : '_id';
		let name = query.slice(1);
		let key = name + type;
		delete this.db[key];
	},
	clear() {
		this.db = {};
	},
	destory() {
		document.removeEventListener('touchstart', this.fn);
	},
};
