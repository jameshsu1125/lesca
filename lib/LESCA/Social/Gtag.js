"use strict";

var install = function install(gid) {
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

var gtag = function gtag() {
  window.dataLayer.push(arguments);
};

var pv = function pv(title, gid) {
  var id = window.gtagID || gid;
  if (!id) return;
  if (!gtag) return;
  gtag('config', id, {
    page_title: title,
    page_path: '/' + title
  });
};

var event = function event(title) {
  var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!gtag) return;
  gtag('event', 'click', {
    event_category: title,
    event_label: description
  });
};

module.exports = {
  install: install,
  pv: pv,
  event: event
};