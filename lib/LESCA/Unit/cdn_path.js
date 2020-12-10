"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cdn_url = exports.cdn = exports.cdn_path_install = void 0;

var cdn_path_install = function cdn_path_install(path) {
  window.cdn_path = window.cdn_path || path;
  window.dataLayer = window.dataLayer || [];
};

exports.cdn_path_install = cdn_path_install;

var cdn = function cdn() {
  window.dataLayer.push(arguments);
};

exports.cdn = cdn;

var cdn_url = function cdn_url(relative_path) {
  var u = relative_path.split('./').join(''),
      i = true;
  if (location.hostname === 'localhost' || location.hostname.indexOf('github') > 0) i = false;
  return i ? relative_path : u + url;
};

exports.cdn_url = cdn_url;