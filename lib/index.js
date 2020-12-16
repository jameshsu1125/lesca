"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Motion", {
  enumerable: true,
  get: function get() {
    return _lescaSensorMotion["default"];
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
Object.defineProperty(exports, "Line", {
  enumerable: true,
  get: function get() {
    return _Line["default"];
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
Object.defineProperty(exports, "CDN", {
  enumerable: true,
  get: function get() {
    return _CDN["default"];
  }
});
exports.OrientationChange = exports.Orientation = void 0;

var _Sensor = _interopRequireDefault(require("./LESCA/Device/Sensor"));

var _lescaSensorMotion = _interopRequireDefault(require("lesca-sensor-motion"));

var _UserAgent = _interopRequireDefault(require("./LESCA/Device/UserAgent"));

var _TouchEvent = _interopRequireDefault(require("./LESCA/Event/TouchEvent"));

var _Facebook = _interopRequireDefault(require("./LESCA/Social/Facebook"));

var _Gtag = _interopRequireDefault(require("./LESCA/Social/Gtag"));

var _Line = _interopRequireDefault(require("./LESCA/Social/Line"));

var _EnterFrame = _interopRequireDefault(require("./LESCA/Unit/EnterFrame"));

var _Hash = _interopRequireDefault(require("./LESCA/Unit/Hash"));

var _Http2https = _interopRequireDefault(require("./LESCA/Unit/Http2https"));

var _LocalStorage = _interopRequireDefault(require("./LESCA/Unit/LocalStorage"));

var _Numbers = _interopRequireDefault(require("./LESCA/Unit/Numbers"));

var _Dom2Json = _interopRequireDefault(require("./LESCA/Unit/Dom2Json"));

var _CDN = _interopRequireDefault(require("./LESCA/Unit/CDN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Orientation = _Sensor["default"].Orientation;
exports.Orientation = Orientation;
var OrientationChange = _Sensor["default"].OrientationChange;
exports.OrientationChange = OrientationChange;
window.TouchEvent = _TouchEvent["default"];