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
      if (this.device() == 'mobile') {
        document.addEventListener('touchstart', this.fn, {
          passive: false,
          capture: false
        });
      } else {
        document.addEventListener('mousedown', this.fn);
      }
    } else {
      if (this.device() == 'mobile') {
        document.addEventListener('touchstart', this.fn, {
          passive: false,
          capture: false
        });
      }
    }
  },
  device: function device() {
    var MobileDetect = require('mobile-detect'),
        m = new MobileDetect(window.navigator.userAgent);

    if (m.tablet()) return 'mobile';else if (m.mobile()) return 'mobile';else return 'desktop';
  },
  get: function get(e) {
    var key = e.target.id + '_id';

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
  add: function add() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ID';
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
      console.log('cb');
    };
    var type = query.slice(0, 1) == '.' ? '_class' : '_id';
    var name = query.slice(1);
    var key = name + type;
    this.db[key] = fn;
  },
  remove: function remove() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ID';
    var type = query.slice(0, 1) == '.' ? '_class' : '_id';
    var name = query.slice(1);
    var key = name + type;
    delete this.db[key];
  },
  clear: function clear() {
    this.db = {};
  },
  destory: function destory() {
    document.removeEventListener('touchstart', this.fn);
  }
};