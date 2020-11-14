"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gtag_event = exports.gtag_pv = exports.gtag = exports.gtag_install = void 0;

var gtag_install = function gtag_install(gid) {
  var scriptId = 'ga-gtag';
  window.gtagID = window.gtagID || gid;
  if (document.getElementById(scriptId)) return;
  var _document = document,
      head = _document.head;
  var script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=".concat(gid);
  head.insertBefore(script, head.firstChild);
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', gid);
};

exports.gtag_install = gtag_install;

var gtag = function gtag() {
  window.dataLayer.push(arguments);
};

exports.gtag = gtag;

var gtag_pv = function gtag_pv(title) {
  var id = window.gtagID || gid;
  if (!id) return;
  if (!gtag) return;
  gtag('config', id, {
    page_title: title,
    page_path: '/' + title
  });
};

exports.gtag_pv = gtag_pv;

var gtag_event = function gtag_event(title) {
  var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!gtag) return;
  gtag('event', 'click', {
    event_category: title,
    event_label: description
  });
};

exports.gtag_event = gtag_event;