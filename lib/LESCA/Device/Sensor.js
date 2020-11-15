"use strict";

module.exports = {
  Motion: {
    init: function init(_ref) {
      var _this = this;

      var _ref$v = _ref.v,
          v = _ref$v === void 0 ? 20 : _ref$v,
          callback = _ref.callback;
      this.d = this.s = {
        x: 0,
        y: 0,
        z: 0
      };
      this.is = true;
      this.g = v;
      this.cb = callback || this.on;

      if (typeof window.DeviceMotionEvent !== 'undefined') {
        this.f = this.call.bind(this);
        window.addEventListener('devicemotion', this.f);
        this.i = setInterval(function () {
          _this.sync();
        }, 100);
      } else this.error();
    },
    call: function call(e) {
      this.d = e.accelerationIncludingGravity;
    },
    sync: function sync() {
      var _this2 = this;

      if (!this.is) return;
      this.is = false;
      var c = Math.abs(this.d.x - this.s.x + this.d.y - this.s.y + this.d.z + this.s.z);
      if (c > this.g) this.cb(c);
      this.s = this.d;
      setTimeout(function () {
        _this2.is = true;
      }, 300);
    },
    on: function on(e) {
      console.log(e);
    },
    destory: function destory() {
      window.removeEventListener('devicemotion', this.f);
      clearInterval(this.i);
    },
    error: function error(e) {
      console.log('motion not support!');
    }
  },
  Orientation: {
    init: function init(_ref2) {
      var callback = _ref2.callback;
      this.cb = callback || this.on;
      this.delay = false;
      this.r = 0;
      this.is = true;

      if (window.DeviceOrientationEvent) {
        this.f = this.call.bind(this);
        window.addEventListener('deviceorientation', this.f);
      } else this.error();
    },
    call: function call(e) {
      var _this3 = this;

      if (!this.is) return;
      var d, h;

      if (typeof e.webkitCompassHeading !== 'undefined') {
        d = e.webkitCompassHeading;
        if (typeof window.orientation !== 'undefined') d += window.orientation;
      } else {
        d = 360 - e.alpha;
      }

      t = Math.round(d) - this.r;
      h = Math.round(d);
      var g, b, a;
      g = Math.round(e.gamma);
      b = Math.round(e.beta);
      a = h;
      if (this.delay) this.cb(g, b, a);
      setTimeout(function () {
        _this3.delay = true;
      }, 200);
    },
    error: function error() {
      console.log('orientation not support!');
    },
    on: function on(LR, FB, Dir) {
      console.log(LR, FB, Dir);
    },
    destory: function destory() {
      window.removeEventListener('deviceorientation', this.f);
    }
  },
  OrientationChange: {
    init: function init(_ref3) {
      var callback = _ref3.callback;
      this.cb = callback || this.on;

      if (window.DeviceOrientationEvent) {
        this.f = this.call.bind(this);
        this.f();
        window.addEventListener('orientationchange', this.f);
      } else this.error();
    },
    call: function call(e) {
      var angle;
      if (window.orientation != undefined) angle = window.orientation;else angle = screen.orientation.angle;
      this.cb(angle);
    },
    error: function error() {
      console.log('orientationchnage not support!');
    },
    on: function on(ang) {
      console.log(ang);
    },
    destory: function destory() {
      window.removeEventListener('orientationchange', this.f);
    }
  }
};