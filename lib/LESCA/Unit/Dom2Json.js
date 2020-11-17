"use strict";

var _this = void 0;

var $ = require('jquery');

var findDom = function findDom(tar, dat) {
  var self = _this;
  var t = $(tar).children('div'),
      s = tar.className;
  dat[s] = {};

  if (t.length > 0 && s) {
    t.each(function () {
      var len = $(this).children('div').length;
      var sty = this.className;
      var txt = this.innerText;
      if (len == 0) dat[s][sty] = txt;else self.findDom(this, dat[s]);
    });
  }
};

module.exports = function (dom) {
  var data = {};
  findDom(dom, data);
  return data;
};