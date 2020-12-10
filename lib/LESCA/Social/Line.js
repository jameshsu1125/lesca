"use strict";

var UserAgent = require('./../Device/UserAgent');

module.exports = {
  share: function share(u, t) {
    if (UserAgent.get() === 'mobile') window.open("line://msg/text/".concat(encodeURIComponent(t + '\n' + u)), '_blank');else window.open("https://lineit.line.me/share/ui?url=".concat(encodeURIComponent(u), "&text=").concat(encodeURIComponent(t)));
  }
};