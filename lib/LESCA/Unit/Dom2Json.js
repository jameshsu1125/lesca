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
          op.push($(this).html());
        });
        txt = op;
      }

      var a = $(this).children('a').length;

      if (a > 0) {
        var _op = [];
        $(this).children('a').each(function () {
          var isImg = $(this).children('img').length > 0;
          var dat = {};

          if (isImg) {
            var img = $(this).children('img')[0].getAttribute('src');
            dat.url = this.getAttribute('href');
            dat.img = img;
          } else {
            dat.name = this.innerText;
            dat.url = this.getAttribute('href');
          }

          var dl = $(this).attr('datalayer');
          if (dl) dat.datalayer = dl;

          _op.push(dat);
        });
        txt = _op;
      }

      if (len == 0) {
        var sup = $(this).children('sup').length;
        var sub = $(this).children('sub').length;
        if (sup > 0 || sub > 0) txt = $(this).html();
      }

      if (len == 0) {
        var isImg = $(this).children('img').length > 0;

        if (isImg) {
          txt = $(this).children('img')[0].getAttribute('src');
        }

        dat[s][sty] = txt || true;
      } else findDom(this, dat[s]);
    });
  }
};

module.exports = function (dom) {
  var data = {};
  findDom(dom, data);
  return data;
};