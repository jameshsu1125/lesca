module.exports = {
	Motion: {
		init({ v = 20, callback }) {
			this.d = this.s = { x: 0, y: 0, z: 0 };
			this.is = true;
			this.g = v;
			this.cb = callback || this.on;

			this.f = this.call.bind(this);

			if (typeof DeviceMotionEvent.requestPermission === 'function') {
				DeviceMotionEvent.requestPermission()
					.then((permissionState) => {
						if (permissionState === 'granted') {
							window.addEventListener('devicemotion', this.f);
							this.i = setInterval(() => {
								this.sync();
							}, 100);
						} else {
							alert('Permission denied');
						}
					})
					.catch(console.error);
			} else {
				window.addEventListener('devicemotion', this.f);
				this.i = setInterval(() => {
					this.sync();
				}, 100);
			}

			// if (typeof DeviceMotionEvent.requestPermission === 'function') {
			// 	DeviceOrientationEvent.requestPermission()
			// 		.then((response) => {
			// 			alert(response);
			// 			if (response == 'granted') {
			// 				window.addEventListener('devicemotion', this.f);
			// 				this.i = setInterval(() => {
			// 					this.sync();
			// 				}, 100);
			// 			} else {
			// 				alert('Permission denied');
			// 			}
			// 		})
			// 		.catch(console.error);
			// } else {
			// 	if (typeof window.DeviceMotionEvent !== 'undefined') {
			// 		window.addEventListener('devicemotion', this.f);
			// 		this.i = setInterval(() => {
			// 			this.sync();
			// 		}, 100);
			// 	} else this.error();
			// }
		},
		call(e) {
			this.d = e.accelerationIncludingGravity;
		},
		sync() {
			if (!this.is) return;
			this.is = false;
			let c = Math.abs(this.d.x - this.s.x + this.d.y - this.s.y + this.d.z + this.s.z);
			if (c > this.g) this.cb(c);
			this.s = this.d;
			setTimeout(() => {
				this.is = true;
			}, 300);
		},
		on(e) {
			console.log(e);
		},
		destory() {
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
