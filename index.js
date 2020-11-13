const UserAgent = require('./src/LESCA/Device/UserAgent.js');
const Sensor = require('./src/LESCA/Device/Sensor.js');
const TouchEvent = require('./src/LESCA/Event/TouchEvent.js');
const Gtag = require('./src/LESCA/Social/Gtag.js');
const EnterFrame = require('./src/LESCA/Unit/EnterFrame.js');
const Facebook = require('./src/LESCA/Social/Facebook.js');
const Get = require('./src/LESCA/Unit/Get.js');
const Http2Https = require('./src/LESCA/Unit/Http2https.js');
const LocalStorage = require('./src/LESCA/Unit/LocalStorage.js');
const Number = require('./src/LESCA/Unit/Number.js');

module.exports = {
	UserAgent,
	Sensor,
	TouchEvent,
	Facebook,
	Gtag,
	EnterFrame,
	Get,
	Http2Https,
	LocalStorage,
	Number,
};
