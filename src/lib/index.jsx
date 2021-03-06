import Sensor from './LESCA/Device/Sensor';
import Motion from 'lesca-sensor-motion';
const Orientation = Sensor.Orientation;
const OrientationChange = Sensor.OrientationChange;

import UserAgent from './LESCA/Device/UserAgent';
export { Motion, Orientation, OrientationChange, UserAgent };

import TouchEvent from './LESCA/Event/TouchEvent';
window.TouchEvent = TouchEvent;
export { TouchEvent };

import Facebook from './LESCA/Social/Facebook';
import Gtag from './LESCA/Social/Gtag';
import Line from './LESCA/Social/Line';
export { Facebook, Gtag, Line };

import EnterFrame from './LESCA/Unit/EnterFrame';
import Hash from './LESCA/Unit/Hash';
import Http2Https from './LESCA/Unit/Http2https';
import LocalStorage from './LESCA/Unit/LocalStorage';
import Numbers from './LESCA/Unit/Numbers';
import Dom2Json from './LESCA/Unit/Dom2Json';
import CDN from './LESCA/Unit/CDN';

export { EnterFrame, Hash, Http2Https, LocalStorage, Numbers, Dom2Json, CDN };
