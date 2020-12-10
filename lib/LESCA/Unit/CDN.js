"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var install = function install(path) {
  window.cdn_path = window.cdn_path || path;
  window.dataLayer = window.dataLayer || [];
};

var cdn = function cdn() {
  window.dataLayer.push(arguments);
};

var path = function path(relative_path) {
  if (_typeof(relative_path) === 'object') relative_path = relative_path["default"];

  if (!window.cdn_path) {
    console.log('install with path first');
    return relative_path;
  }

  var u = relative_path.split('./').join(''),
      i = true;
  if (location.hostname === 'localhost' || location.hostname.indexOf('github') > 0) i = false;
  return i ? relative_path : window.cdn_path + '/' + u;
};

module.exports = {
  install: install,
  cdn: cdn,
  path: path
};