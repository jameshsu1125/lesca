"use strict";

var UserAgent = require('./UserAgent');

module.exports = {
  Motion: {
    is: true,
    each_time: 1,
    delayCallback: 1000,
    disable: true,
    init: function init(ready) {
      var _this = this;

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

        DeviceMotionEvent.requestPermission().then(function (permissionState) {
          if (permissionState === 'granted') _this.ready();else alert('permission denied!');
        })["catch"](console.error);
      } else this.ready();
    },
    addEvent: function addEvent() {
      var _this2 = this;

      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      this.f = this.call.bind(this);
      this.cb = callback || this.on;
      this.g = v;
      this.d = this.d2 = {
        x: 0,
        y: 0,
        z: 0
      };
      this.is = true;
      window.addEventListener('devicemotion', this.f);
      this.i = setInterval(function () {
        _this2.sync();
      }, this.each_time);
    },
    call: function call(e) {
      this.d = e.accelerationIncludingGravity;
    },
    sync: function sync() {
      var _this3 = this;

      if (!this.disable) return;
      var x = Math.abs(this.d.x - this.d2.x),
          y = Math.abs(this.d.y - this.d2.y),
          z = Math.abs(this.d.z - this.d2.z),
          c = Math.abs(x + y + z);

      if (c > this.g) {
        if (!this.is) return;
        this.is = false;
        this.cb(c);
        this.d2 = this.d = {
          x: 0,
          y: 0,
          z: 0
        };
        setTimeout(function () {
          _this3.is = true;
        }, this.delayCallback);
      }

      this.d2 = this.d;
    },
    on: function on(e) {
      console.log(e);
    },
    destory: function destory() {
      this.d = this.d2 = {
        x: 0,
        y: 0,
        z: 0
      };
      this.is = false;
      window.removeEventListener('devicemotion', this.f);
      clearInterval(this.i);
    },
    error: function error(e) {
      console.log('motion not support!');
    }
  },
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
      var _this4 = this;

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
        _this4.delay = true;
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