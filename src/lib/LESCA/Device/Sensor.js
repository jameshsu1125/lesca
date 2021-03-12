const UserAgent = require('./UserAgent');

module.exports = {
	Orientation: {
		init({ callback }) {
			this.cb = callback || this.on;
			this.delay = false;
			this.r = 0;
			this.is = true;
			if (window.DeviceOrientationEvent) {
				this.f = this.call.bind(this);
				window.addEventListener('deviceorientation', this.f);
			} else this.error();
		},
		call(e) {
			if (!this.is) return;
			let d, h;
			if (typeof e.webkitCompassHeading !== 'undefined') {
				d = e.webkitCompassHeading;
				if (typeof window.orientation !== 'undefined') d += window.orientation;
			} else {
				d = 360 - e.alpha;
			}
			t = Math.round(d) - this.r;
			h = Math.round(d);
			let g, b, a;
			g = Math.round(e.gamma);
			b = Math.round(e.beta);
			a = h;
			if (this.delay) this.cb(g, b, a);
			setTimeout(() => {
				this.delay = true;
			}, 200);
		},
		error() {
			console.log('orientation not support!');
		},
		on(LR, FB, Dir) {
			console.log(LR, FB, Dir);
		},
		destory() {
			window.removeEventListener('deviceorientation', this.f);
		},
	},
	OrientationChange: {
		init({ callback }) {
			this.cb = callback || this.on;
			if (window.DeviceOrientationEvent) {
				this.f = this.call.bind(this);
				this.f();
				window.addEventListener('orientationchange', this.f);
			} else this.error();
		},
		call(e) {
			try {
				var angle;
				if (window.orientation != undefined) angle = window.orientation;
				else angle = screen.orientation.angle;
				this.cb(angle);
			} catch {
				console.log('ie11');
				this.cb(0);
			}
		},
		error() {
			console.log('orientationchnage not support!');
		},
		on(ang) {
			console.log(ang);
		},
		destory() {
			window.removeEventListener('orientationchange', this.f);
		},
	},
};
