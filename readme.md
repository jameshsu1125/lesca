[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```
$ npm install lesca --save
```

# Usage

```javascript
import { Key } from 'lesca';
```

# UI Components

```javascript
lesca
 ┣ Loading => import { Loading } from 'lesca';
 ┃    ┗ props => style = 'dark';                      // or 'light'
 ┣ Qrcode => import { Qrcode } from 'lesca';
 ┃    ┗ props => url = 'https://www.exsample.com';    // <img src='google qrcode url'/>
 ┣ Landscape => import { Landscape } from 'lesca';
 ┃    ┗ props => dw = 750;                            // viewport device-width
 ┗ InputCapture => import { InputCapture } from 'lesca';
      ┣ props => txt='button Label';                  // button Label
      ┣ props => img={ require('buttonImage.png') };  // coustom image button
      ┣ props => onend={ ( base64 )=>{} };            // success image convert to base64
      ┗ props => length='500';                        // resize base64 image width
```

# Javascripts

```javascript
lesca
 ┣ Device
 ┃ ┣ Sensor.js => import { Sensor } from 'lesca';
 ┃ ┃   ┣ Sensor.Motion.init({ v = 20, callback }) => callback(e), Sensor.Motion.destory();
 ┃ ┃   ┣ Sensor.Orientation.init({ callback }) => callback(LR, FB, Dir), Sensor.Motion.destory();
 ┃ ┃   ┗ Sensor.OrientationChange.init({ callback }) => callback(ang), Sensor.Motion.destory();
 ┃ ┗ UserAgent.js  => import { UserAgent } from 'lesca';
 ┃     ┣ UserAgent.get( tabletEqualDesktop = true ) => return 'mobile'; // or 'desktop';
 ┃     ┣ UserAgent.Wechat.is() => ture/false;
 ┃     ┣ UserAgent.Facebook.is() => ture/false;
 ┃     ┣ UserAgent.Ios.is() => ture/false;
 ┃     ┣ UserAgent.Android.is() => ture/false;
 ┃     ┗ UserAgent.Line.is() => ture/false;
 ┣ Event
 ┃ ┗ TouchEvent.js => import { TouchEvent } from 'lesca';
 ┃     ┣ ToushEvent.init( needDesktopEventCombine = true );
 ┃     ┣ ToushEvent.add( id = 'ID', fn = () => {} });
 ┃     ┣ ToushEvent.remove( id = 'ID' );
 ┃     ┣ ToushEvent.clear();
 ┃     ┗ ToushEvent.destory();
 ┣ Social
 ┃ ┣ Facebook.js => import { Facebook } from 'lesca';
 ┃ ┃   ┣ Facebook.init(uid, { v = 'v8.0', callback = () => {}, onStatus = () => {} });
 ┃ ┃   ┣ Facebook.status();
 ┃ ┃   ┣ Facebook.login();
 ┃ ┃   ┣ Facebook.logout();
 ┃ ┃   ┗ Facebook.share({ id, redirect_uri, url, hash });
 ┃ ┗ Gtag.js => import { Gtag } from 'lesca';
 ┃     ┣ Gtag.gtag_install(gid);
 ┃     ┣ Gtag.gtag_pv(title);
 ┃     ┗ Gtag.gtag_event(title, description = '');
 ┗ Unit
   ┣ Dom2Json.js => import { Dom2Json } from 'lesca';
   ┃   ┗ Dom2Json(dom);
   ┣ EnterFrame.js => import { EnterFrame } from 'lesca';
   ┃   ┣ EnterFrame.init(fn);
   ┃   ┣ EnterFrame.add(fn);
   ┃   ┣ EnterFrame.play();
   ┃   ┣ EnterFrame.stop();
   ┃   ┣ EnterFrame.getTime();
   ┃   ┗ EnterFrame.destroy();
   ┣ Hash.js => import { Hash } from 'lesca';
   ┃   ┣ Hash.get(key);
   ┃   ┣ Hash.remove(key);
   ┃   ┣ Hash.removeAndGo(key);
   ┃   ┣ Hash.root();
   ┃   ┗ Hash.file();
   ┣ Http2https.js => import { Http2Https } from 'lesca';
   ┃   ┗ Http2Https.go();
   ┣ LocalStorage.js => import { LocalStorage } from 'lesca';
   ┃   ┣ LocalStorage.set(key, v);
   ┃   ┣ LocalStorage.get(key);
   ┃   ┣ LocalStorage.remove(key);
   ┃   ┣ LocalStorage.clear();
   ┃   ┗ LocalStorage.printAll();
   ┗ Numbers.js => import { Numbers } from 'lesca';
       ┣ Numbers.Pad(str, max);
       ┗ Numbers.Uid(num);
```
