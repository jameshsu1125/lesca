"use strict";

var Facebook = require('./../Device/UserAgent').Facebook;

module.exports = {
  init: function init(uid, _ref) {
    var _ref$v = _ref.v,
        v = _ref$v === void 0 ? 'v8.0' : _ref$v,
        callback = _ref.callback,
        onStatus = _ref.onStatus;
    var self = this;
    this.id = uid;
    this.is = false;
    this.onStatus = onStatus;

    window.fbAsyncInit = function () {
      FB.init({
        appId: uid,
        cookie: true,
        xfbml: true,
        version: v
      });
      self.is = true;
      if (callback) callback();
      if (onStatus) self.status();
    };

    (function (d, s, id) {
      var js,
          fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  },
  getPictureByID: function getPictureByID() {
    return "https://graph.facebook.com/".concat(this.response.id, "/picture?width=600&height=600");
  },
  status: function status() {
    var _this = this;

    FB.getLoginStatus(function (e) {
      _this.status = e.status;

      switch (e.status) {
        case 'not_authorized':
          console.log('未認證');

          _this.login();

          break;

        case 'connected':
          console.log('已認證/已登入');
          FB.api('/me', {
            fields: 'id,name,email,picture.width(800).height(800)'
          }, function (response) {
            _this.response = response;

            _this.onStatus(response);
          });
          break;

        case 'unknown':
          console.log('未登入');

          _this.login(function () {});

          break;
      }
    });
  },
  ready: function ready(id, name, token, imageURL) {
    console.log(id, name);
  },
  logout: function logout() {
    FB.logout(function (e) {
      console.log(e);
    });
  },
  share: function share(_ref2) {
    var id = _ref2.id,
        redirect_uri = _ref2.redirect_uri,
        url = _ref2.url,
        hash = _ref2.hash;

    if (Facebook.is()) {
      var p = {
        method: 'share',
        href: url
      };
      if (hash) p.hashtag = '#' + hash;
      FB.ui(p, function (response) {
        window.location.replace(redirect_uri);
      });
    } else {
      var u = "https://www.facebook.com/dialog/share?app_id=".concat(id, "&href=").concat(encodeURIComponent(url), "&redirect_uri=").concat(encodeURIComponent(redirect_uri));
      if (hash) u += "&hashtag=%23".concat(encodeURIComponent(hash));
      window.location.href = u;
    }
  },
  click: function click() {
    if (!this.is) {
      console.log('init first');
      return;
    }

    if (this.status != 'connected') this.login(window.location.href);else this.ready({
      userID: this.id,
      name: this.name,
      accessToken: this.token,
      imageUrl: this.pic
    });
  },
  login: function login(cb) {
    var _this2 = this;

    if (!this.is) {
      console.log('init first');
      return;
    }

    FB.login(function (response) {
      if (response.authResponse) {
        FB.api('/me', {
          fields: 'id,name,email,picture.width(800).height(800)'
        }, function (response2) {
          _this2.response = response2;

          _this2.onStatus(response);

          cb(response);
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }
};