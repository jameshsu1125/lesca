"use strict";

var UserAgent = require('./UserAgent');

module.exports = {
  Orientation: {
    init: function init(_ref) {
      var callback = _ref.callback;
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
      var _this = this;

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
        _this.delay = true;
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
    init: function init(_ref2) {
      var callback = _ref2.callback;
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