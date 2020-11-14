"use strict";

module.exports = {
  db: {},
  init: function init() {
    var needDesktopEventCombine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.fn = function (e) {
      var n = e.target.localName;
      if (e.cancelable) if (!e.defaultPrevented) if (n != 'input' && n != 'button' && n != 'select') e.preventDefault();
      this.get(e);
    }.bind(this);

    if (needDesktopEventCombine) {
      document.addEventListener('mousedown', this.fn);
    } else {
      if (this.device() == 'mobile') {
        document.addEventListener('touchstart', this.fn, {
          passive: false,
          capture: false
        });
      } else {
        document.addEventListener('mousedown', this.fn);
      }
    }
  },
  device: function device() {
    var MobileDetect = require('mobile-detect'),
        m = new MobileDetect(window.navigator.userAgent);

    if (m.tablet()) return 'mobile';else if (m.mobile()) return 'mobile';else return 'desktop';
  },
  get: function get(e) {
    if (!this.db[e.target.id]) return;
    this.db[e.target.id](e);
  },
  add: function add() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ID';
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
      console.log('cb');
    };
    this.db[id] = fn;
  },
  remove: function remove() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ID';
    delete this.db[id];
  },
  clear: function clear() {
    this.db = {};
  },
  destory: function destory() {
    document.removeEventListener('touchstart', this.fn);
  }
};