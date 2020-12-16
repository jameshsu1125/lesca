const UserAgent = require('./UserAgent');

module.exports = {
	Motion: {
		is: true,
		each_time: 1,
		delayCallback: 1000,
		disable: true,
		init(ready, norequire = () => {}) {
			if (UserAgent.get() === 'desktop') {
				//desktop escap all
				this.error();
				return false;
			}

			this.ready = ready;

			if (typeof DeviceMotionEvent.requestPermission === 'function') {
				// IOS 14+

				if (window.location.protocol.indexOf('https') < 0) {
					// SSL require
					this.error();
					return false;
				}

				DeviceMotionEvent.requestPermission()
					.then((permissionState) => {
						if (permissionState === 'granted') this.ready();
						else norequire();
					})
					.catch(console.error);
			} else this.ready();
		},
		addEvent(v = 20, callback) {
			this.f = this.call.bind(this);
			this.cb = callback || this.on;
			this.g = v;
			this.d = this.d2 = { x: 0, y: 0, z: 0 };
			this.is = true;
			window.addEventListener('devicemotion', this.f);
			this.i = setInterval(() => {
				this.sync();
			}, this.each_time);
		},
		call(e) {
			this.d = e.accelerationIncludingGravity;
		},
		sync() {
			if (!this.disable) return;

			let x = Math.abs(this.d.x - this.d2.x),
				y = Math.abs(this.d.y - this.d2.y),
				z = Math.abs(this.d.z - this.d2.z),
				c = Math.abs(x + y + z);

			if (c > this.g) {
				if (!this.is) return;
				this.is = false;
				this.cb(c);
				this.d2 = this.d = { x: 0, y: 0, z: 0 };
				setTimeout(() => {
					this.is = true;
				}, this.delayCallback);
			}

			this.d2 = this.d;
		},
		on(e) {
			console.log(e);
		},
		destory() {
			this.d = this.d2 = {
				x: 0,
				y: 0,
				z: 0,
			};
			this.is = false;
			window.removeEventListener('devicemotion', this.f);
			clearInterval(this.i);
		},
		error(e) {
			console.log('motion not support!');
		},
	},
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
			var angle;
			if (window.orientation != undefined) angle = window.orientation;
			else angle = screen.orientation.angle;
			this.cb(angle);
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
