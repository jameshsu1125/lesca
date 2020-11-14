"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Sensor", {
  enumerable: true,
  get: function get() {
    return _Sensor2["default"];
  }
});
Object.defineProperty(exports, "UserAgent", {
  enumerable: true,
  get: function get() {
    return _UserAgent["default"];
  }
});
Object.defineProperty(exports, "TouchEvent", {
  enumerable: true,
  get: function get() {
    return _TouchEvent["default"];
  }
});
Object.defineProperty(exports, "Facebook", {
  enumerable: true,
  get: function get() {
    return _Facebook["default"];
  }
});
Object.defineProperty(exports, "Gtag", {
  enumerable: true,
  get: function get() {
    return _Gtag["default"];
  }
});
Object.defineProperty(exports, "EnterFrame", {
  enumerable: true,
  get: function get() {
    return _EnterFrame["default"];
  }
});
Object.defineProperty(exports, "Hash", {
  enumerable: true,
  get: function get() {
    return _Hash["default"];
  }
});
Object.defineProperty(exports, "Http2Https", {
  enumerable: true,
  get: function get() {
    return _Http2https["default"];
  }
});
Object.defineProperty(exports, "LocalStorage", {
  enumerable: true,
  get: function get() {
    return _LocalStorage["default"];
  }
});
Object.defineProperty(exports, "Numbers", {
  enumerable: true,
  get: function get() {
    return _Numbers["default"];
  }
});
Object.defineProperty(exports, "Dom2Json", {
  enumerable: true,
  get: function get() {
    return _Dom2Json["default"];
  }
});
exports.InputCapture = exports.OC = exports.Loading = exports.Qrcode = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./loading.less");

var _Sensor = require("./Sensor");

require("./orientationChange.less");

var _exifJs = _interopRequireDefault(require("exif-js"));

require("./inputCapture.less");

var _Sensor2 = _interopRequireDefault(require("./LESCA/Device/Sensor"));

var _UserAgent = _interopRequireDefault(require("./LESCA/Device/UserAgent"));

var _TouchEvent = _interopRequireDefault(require("./LESCA/Event/TouchEvent"));

var _Facebook = _interopRequireDefault(require("./LESCA/Social/Facebook"));

var _Gtag = _interopRequireDefault(require("./LESCA/Social/Gtag"));

var _EnterFrame = _interopRequireDefault(require("./LESCA/Unit/EnterFrame"));

var _Hash = _interopRequireDefault(require("./LESCA/Unit/Hash"));

var _Http2https = _interopRequireDefault(require("./LESCA/Unit/Http2https"));

var _LocalStorage = _interopRequireDefault(require("./LESCA/Unit/LocalStorage"));

var _Numbers = _interopRequireDefault(require("./LESCA/Unit/Numbers"));

var _Dom2Json = _interopRequireDefault(require("./LESCA/Unit/Dom2Json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Loading = /*#__PURE__*/function (_Component) {
  _inherits(Loading, _Component);

  var _super = _createSuper(Loading);

  function Loading(props) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.call(this, props);
    _this["class"] = _this.props.style ? " ".concat(_this.props.style) : ' dark';
    _this.txtClass = _this.props.style ? " t".concat(_this.props.style) : ' tdark';
    return _this;
  }

  _createClass(Loading, [{
    key: "appendLinesClass",
    value: function appendLinesClass() {
      return 'l' + this["class"];
    }
  }, {
    key: "appendBackgroundClass",
    value: function appendBackgroundClass() {
      return 'lesca-loading-bg' + this["class"];
    }
  }, {
    key: "appendTextClass",
    value: function appendTextClass() {
      return 'lesca-loading-text' + this.txtClass;
    }
  }, {
    key: "appendLines",
    value: function appendLines() {
      var op = [];

      for (var i = 0; i < 18; i++) {
        op.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          className: this.appendLinesClass()
        }));
      }

      return op;
    }
  }, {
    key: "appendText",
    value: function appendText() {
      if (this.props.text) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.appendTextClass()
        }, this.props.text);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "lesca-loading"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: this.appendBackgroundClass()
      }), /*#__PURE__*/_react["default"].createElement("div", {
        ref: "c",
        className: "lesca-loading-c"
      }, this.appendLines()), this.appendText());
    }
  }]);

  return Loading;
}(_react.Component);

exports.Loading = Loading;

var Qrcode = /*#__PURE__*/function (_Component2) {
  _inherits(Qrcode, _Component2);

  var _super2 = _createSuper(Qrcode);

  function Qrcode(props) {
    _classCallCheck(this, Qrcode);

    return _super2.call(this, props);
  }

  _createClass(Qrcode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var img = new Image();

      img.onload = function (e) {
        _this2.refs.img.src = e.target.src;
        if (_this2.props.onload) _this2.props.onload();
      };

      img.src = this._googleQr();
    }
  }, {
    key: "_googleQr",
    value: function _googleQr() {
      var url = encodeURIComponent(this.props.url),
          w = this.props.width || 500,
          h = this.props.height || 500;
      return "http://chart.apis.google.com/chart?cht=qr&chl=".concat(url, "}&chs=").concat(w, "x").concat(h);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("img", {
        ref: "img",
        width: this.props.width,
        height: this.props.height
      });
    }
  }]);

  return Qrcode;
}(_react.Component);

exports.Qrcode = Qrcode;

var OC = /*#__PURE__*/function (_React$Component) {
  _inherits(OC, _React$Component);

  var _super3 = _createSuper(OC);

  function OC(props) {
    var _this3;

    _classCallCheck(this, OC);

    _this3 = _super3.call(this, props);
    _this3.state = {
      show: false
    };
    return _this3;
  }

  _createClass(OC, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      _Sensor.OrientationChange.init({
        callback: function callback(e) {
          var dw = _this4.props.dw || 750,
              s = window.screen.width / dw,
              p = document.querySelector('meta[name="viewport"]');
          p.content = "width=".concat(dw, ", minimum-scale=").concat(s, ", maximum-scale=").concat(s, ", initial-scale=").concat(s);

          _this4.setState({
            show: e != 0
          });
        }
      });
    }
  }, {
    key: "set",
    value: function set() {
      if (this.state.show) return /*#__PURE__*/_react["default"].createElement("div", {
        id: "lesca-oc"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.set());
    }
  }]);

  return OC;
}(_react["default"].Component);

exports.OC = OC;

var InputCapture = /*#__PURE__*/function (_React$Component2) {
  _inherits(InputCapture, _React$Component2);

  var _super4 = _createSuper(InputCapture);

  function InputCapture(props) {
    _classCallCheck(this, InputCapture);

    return _super4.call(this, props);
  }

  _createClass(InputCapture, [{
    key: "set",
    value: function set(_ref) {
      var file = _ref.file,
          _ref$length = _ref.length,
          length = _ref$length === void 0 ? this.props.length || 500 : _ref$length,
          cb = _ref.cb;
      var root = this;
      var ctx = this.refs.canvas.getContext('2d');
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        var img = new Image();

        img.onload = function () {
          var _this5 = this;

          var max = length,
              iw = img.width,
              ih = img.height;

          if (iw > ih) {
            if (iw > max) {
              ih = Math.round(ih *= max / iw);
              iw = max;
            }
          } else {
            if (ih > max) {
              iw = Math.round(iw *= max / ih);
              ih = max;
            }
          }

          root.refs.canvas.width = iw;
          root.refs.canvas.height = ih;

          _exifJs["default"].getData(img, function (e) {
            var o = _exifJs["default"].getTag(_this5, 'Orientation');

            if (o == 6 || o == 8 || o == 3) {
              var r = 0;

              switch (o) {
                case 3:
                  r = 180;
                  break;

                case 6:
                  r = 90;
                  root.refs.canvas.width = ih;
                  root.refs.canvas.height = iw;
                  break;

                case 8:
                  r = -90;
                  root.refs.canvas.width = ih;
                  root.refs.canvas.height = iw;
                  break;
              }

              var x = root.refs.canvas.width / 2,
                  y = root.refs.canvas.height / 2;
              ctx.translate(x, y);
              ctx.rotate(r * Math.PI / 180);
              ctx.drawImage(img, -iw / 2, -ih / 2, iw, ih);
            } else ctx.drawImage(img, 0, 0, iw, ih);

            cb(root.refs.canvas.toDataURL('image/png', 1.0));
          });
        };

        img.src = e.target.result;
      };
    }
  }, {
    key: "capture",
    value: function capture() {
      this.refs.input.click();
    }
  }, {
    key: "onchange",
    value: function onchange(e) {
      var _this6 = this;

      var file = e.target.files[0];
      this.set({
        file: file,
        cb: function cb(e) {
          if (_this6.props.onend) _this6.props.onend(e);
        }
      });
    }
  }, {
    key: "append",
    value: function append() {
      if (this.props.img) return /*#__PURE__*/_react["default"].createElement("img", {
        onClick: this.capture.bind(this),
        src: this.props.img
      });else return /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.capture.bind(this)
      }, this.props.txt ? this.props.txt : 'Capture');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: "main",
        id: "lesca-inputCapture"
      }, this.append(), /*#__PURE__*/_react["default"].createElement("input", {
        ref: "input",
        onChange: this.onchange.bind(this),
        type: "file",
        accept: "image/*",
        capture: "camera"
      }), /*#__PURE__*/_react["default"].createElement("canvas", {
        ref: "canvas"
      }));
    }
  }]);

  return InputCapture;
}(_react["default"].Component);

exports.InputCapture = InputCapture;