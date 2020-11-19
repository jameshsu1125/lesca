"use strict";

var $ = require('jquery');

var findDom = function findDom(tar, dat) {
  var t = $(tar).children('div'),
      s = tar.className;
  dat[s] = {};

  if (t.length > 0 && s) {
    t.each(function () {
      var len = $(this).children('div').length,
          sty = this.className,
          txt = this.innerText,
          pln = $(this).children('p').length;

      if (pln > 0) {
        var op = [];
        $(this).children('p').each(function () {
          op.push(this.innerText);
        });
        txt = op;
      }

      if (len == 0) dat[s][sty] = txt || true;else findDom(this, dat[s]);
    });
  }
};

module.exports = function (dom) {
  var data = {};
  findDom(dom, data);
  return data;
};