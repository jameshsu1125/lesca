[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Usage

```javascript
import { Key } from 'lesca';
```

# Components

```javascript
lesca
 ┣ Loading => import { Loading } from 'lesca';
 ┃    ┗ props => style = 'dark'; // dark, light
 ┣ Qrcode => import { Qrcode } from 'lesca';
 ┃    ┗ props => url = 'https://www.exsample.com';
 ┣ Landscape => import { Landscape } from 'lesca';
 ┃    ┗ props => dw = 750; // viewport device-width
 ┗ InputCapture => import { InputCapture } from 'lesca';
      ┣ props => txt='button Label';
      ┣ props => img={ require('buttonImage.png') };
      ┣ props => onend={ ( base64 )=>{} };
      ┗ props => length='500';  // resize base64 image width
```

# Javascripts

```javascript
lesca
 ┣ Device
 ┃ ┣ Sensor.js => import { Sensor } from 'lesca';
 ┃ ┃   ┣ Object | Sensor.Motion => init({ v = 20, callback }), on(e), remove();
 ┃ ┃   ┣ Object | Sensor.Orientation => init({ callback }), on(LR, FB, Dir), remove();
 ┃ ┃   ┗ Object | Sensor.OrientationChange => init({ callback }), on(ang);
 ┃ ┗ UserAgent.js  => import { UserAgent } from 'lesca';
 ┃ ┃   ┣ function | get(tabletEqualDesktop = true) => return 'mobile' | 'desktop';
 ┃ ┃   ┣ function | Wechat.is() => ture/false;
 ┃ ┃   ┣ function | Facebook.is() => ture/false;
 ┃ ┃   ┣ function | Ios.is() => ture/false;
 ┃ ┃   ┣ function | Android.is() => ture/false;
 ┃ ┃   ┗ function | Line.is() => ture/false;
 ┣ Event
 ┃ ┗ TouchEvent.js => import { TouchEvent } from 'lesca';
 ┃ ┃   ┣ function | ToushEvent.init(needDesktopEventCombine = true);
 ┃ ┃   ┣ function | ToushEvent.add(id = 'ID', fn = ()=>{} });
 ┃ ┃   ┣ function | ToushEvent.remove(id = 'ID');
 ┃ ┃   ┣ function | ToushEvent.clear();
 ┃ ┃   ┗ function | ToushEvent.destory();
 ┣ Social
 ┃ ┣ Facebook.js => import { Facebook } from 'lesca';
 ┃ ┃   ┣ function | Facebook.init(uid, { v = 'v8.0', callback = () => {}, onStatus = () => {} });
 ┃ ┃   ┣ function | Facebook.status();
 ┃ ┃   ┣ function | Facebook.login();
 ┃ ┃   ┣ function | Facebook.logout();
 ┃ ┃   ┗ function | Facebook.share({ id, redirect_uri, url, hash });
 ┃ ┗ Gtag.js => import { Gtag } from 'lesca';
 ┃ ┃   ┣ function | Gtag.gtag_install(gid);
 ┃ ┃   ┣ function | Gtag.gtag_pv(title);
 ┃ ┃   ┗ function | Gtag.gtag_event(title, description = '');
 ┗ Unit
   ┣ Dom2Json.js => import { Dom2Json } from 'lesca';
   ┃   ┗ function | Dom2Json(dom);
   ┣ EnterFrame.js => import { EnterFrame } from 'lesca';
   ┃   ┣ function | EnterFrame.init(fn);
   ┃   ┣ function | EnterFrame.add(fn);
   ┃   ┣ function | EnterFrame.play();
   ┃   ┣ function | EnterFrame.stop();
   ┃   ┣ function | EnterFrame.getTime();
   ┃   ┗ function | EnterFrame.destroy();
   ┣ Hash.js => import { Hash } from 'lesca';
   ┃   ┣ function | Hash.get(key);
   ┃   ┣ function | Hash.remove(key);
   ┃   ┣ function | Hash.removeAndGo(key);
   ┃   ┣ function | Hash.root();
   ┃   ┗ function | Hash.file();
   ┣ Http2https.js => import { Http2Https } from 'lesca';
   ┃   ┗ function | Http2Https.go();
   ┣ LocalStorage.js => import { LocalStorage } from 'lesca';
   ┃   ┣ function | LocalStorage.set(key, v);
   ┃   ┣ function | LocalStorage.get(key);
   ┃   ┣ function | LocalStorage.remove(key);
   ┃   ┣ function | LocalStorage.clear();
   ┃   ┗ function | LocalStorage.printAll();
   ┗ Numbers.js => import { Numbers } from 'lesca';
       ┣ function | Numbers.Pad(str, max);
       ┗ function | Numbers.Uid(num);
```
