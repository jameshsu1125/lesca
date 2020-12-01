"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _exifJs = _interopRequireDefault(require("exif-js"));

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

var InputCapture = /*#__PURE__*/function (_React$Component) {
  _inherits(InputCapture, _React$Component);

  var _super = _createSuper(InputCapture);

  function InputCapture(props) {
    var _this;

    _classCallCheck(this, InputCapture);

    _this = _super.call(this, props);

    require('./inputCapture.less');

    return _this;
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
          var _this2 = this;

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
            var o = _exifJs["default"].getTag(_this2, 'Orientation');

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
      var _this3 = this;

      var file = e.target.files[0];
      this.set({
        file: file,
        cb: function cb(e) {
          if (_this3.props.onend) _this3.props.onend(e);
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
      }, this.props.txt ? this.props.label : 'Capture');
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

var _default = InputCapture;
exports["default"] = _default;