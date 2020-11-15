[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca --save
```

# Usage

```javascript
import { key } from 'lesca';
```

# UI Components

```javascript
import { Loading } from 'lesca';

render(){
  return (
    <div>
      <Loading style='dark'>
    </div>
  );
}
```

|     key      | props  | options & readme                       | default |
| :----------: | :----: | :------------------------------------- | :-----: |
|   Loading    | style  | 'dark', 'light'                        | 'dark'  |
|    Qrcode    |  url   | return <img src='google qrcode url' /> |         |
|  Landscape   |   dw   | viewport device-width,                 |   750   |
| InputCapture |  txt   | text for buttom label                  |         |
|              |  img   | <img src='url'>                        |         |
|              | onend  | (result)=>{ console.log(result) }      |         |
|              | length | resize image width                     |   500   |

# Javascripts

```javascript
import { Motion, Orientation, OrientationChange } from 'lesca';

OrientationChange.init({
	callback: (angle) => {
		console.log(angle);
	},
});
```

|              key               |               method                | options & readme        |
| :----------------------------: | :---------------------------------: | :---------------------- |
|             Motion             |  init({ v = 20, callback=(e)=>{}})  | get devicemotion force  |
|                                |              destory()              | remove                  |
| Orientation(ios not supperted) | init({ callback:(LR, FB, Dir)=>{}}) | get 3 dir rotate values |
|                                |              destory()              | remove                  |
|       OrientationChange        |    init({ callback:(angle)=>{}})    | get 90 -90 0            |
|                                |              destory()              | remove                  |

```javascript
import { UserAgent } from 'lesca';

if (UserAgent.get() === 'mobile') window.location.href = 'https://m.example.com';
```

|    key    |         method          | options & readme             |
| :-------: | :---------------------: | :--------------------------- |
| UserAgent | get(tabletEqualDesktop) | return 'mobile' or 'desktop' |
|           |       Wechat.is()       | ture/false                   |
|           |      Facebook.is()      | ture/false                   |
|           |        Ios.is()         | ture/false                   |
|           |      Android.is()       | ture/false                   |
|           |        Line.is()        | ture/false                   |

```javascript
import { TouchEvent } from 'lesca';

TouchEvent.init(true);
TouchEvent.add('id', () => {
	console.log('clicked');
});
```

|    key     |                method                | options & readme   |
| :--------: | :----------------------------------: | :----------------- |
| TouchEvent | init(needDesktopEventCombine = true) | run fn by dom's id |
|            |    add(id = 'ID', fn = () => {})     | add fn by dom's id |
|            |          remove(id = 'ID')           | remove fn by id    |
|            |               clear()                | remove all fn      |
|            |              destory()               | remove event       |

```javascript
import { Facebook } from 'lesca';

Facebook.init('fb-xxxxxxxxx');
Facebook.share({
	id: 'fb-xxxxxxxxx',
	redirect_uri: 'https://www.example.com/success.html',
	url: 'https://www.example.com/',
	hash: 'myHashTag',
});
```

|   key    |                               method                                | options & readme    |
| :------: | :-----------------------------------------------------------------: | :------------------ |
| Facebook | init(uid, { v = 'v8.0', callback = () => {}, onStatus = () => {} }) | init in constructor |
|          |                              status()                               | get facebook status |
|          |                               login()                               | facebook login      |
|          |                              logout()                               | facebook logout     |
|          |               share({ id, redirect_uri, url, hash })                | facebook share      |

```javascript
import { Gtag } from 'lesca';

Gtag.gtag_install('gtag-xxxxxxxxx');
Gtag.gtag_pv('home page');
```

| key  |               method                | options & readme |
| :--: | :---------------------------------: | :--------------- |
| Gtag |          gtag_install(gid)          | run once         |
|      |           gtag_pv(title)            | add page view    |
|      | gtag_event(title, description = '') | add click event  |

```javascript
import { Dom2Json } from 'lesca';

componentDidMount(){
  var data = Dom2Json(document.querySelector('index'));
  console.log(data);  // return { index:{ title: 'my title' } }
}

render(){
  return(
    <div class='index'>
      <div class='title'>my title</div>
    </div>
  );
}
```

|   key    | method | options & readme                                |
| :------: | :----: | :---------------------------------------------- |
| Dom2Json | (dom)  | DOM convert to Json => { className: innerText } |

```javascript
import { Dom2Json } from 'lesca';

this.x = 0;
EnterFrame.init(() => {
	this.x++;
	console.log(this.x); // => 0, 1, 2 ...
});
```

|    key     |  method   | options & readme              |
| :--------: | :-------: | :---------------------------- |
| EnterFrame | init(fn)  | same as requestAnimationFrame |
|            |  add(fn)  | add fn in EnterFrame          |
|            |  stop()   | stop run the fn               |
|            |  play()   | continue run                  |
|            | getTime() | get millisecond of time       |
|            | destroy() | remove event                  |

```javascript
import { Hash } from 'lesca';

const url = window.location.href; // url = https://www.example.com/?name=james&age=18;
console.log(Hash.get('name')); //james
console.log(Hash.get('age')); //18
```

| key  |      method      | options & readme                                                                      |
| :--: | :--------------: | :------------------------------------------------------------------------------------ |
| Hash |     get(key)     | https://www.example.com/?name=james => get('name') => return 'james'                  |
|      |   remove(key)    | remove key                                                                            |
|      | removeAndGo(key) | remove key and href to                                                                |
|      |      root()      | https://www.example.com/folder/success.html => return https://www.example.com/folder/ |
|      |      file()      | https://www.example.com/folder/success.html => return success.html                    |

```javascript
import { Http2Https } from 'lesca';

Http2Https.go();
```

|    key     | method | options & readme                                    |
| :--------: | :----: | :-------------------------------------------------- |
| Http2Https |   go   | http://www.example.com/ => https://www.example.com/ |

```javascript
import { LocalStorage } from 'lesca';

LocalStorage.set('name', 'james');
console.log(LocalStorage.get('name')); // => james
```

|     key      |     method      | options & readme    |
| :----------: | :-------------: | :------------------ |
| LocalStorage | set(key, value) | save data           |
|              |    get(key)     | return value of key |
|              |   remove(key)   | delete key          |
|              |     clear()     | clear all key       |
|              |   printAll()    | log all key         |

```javascript
import { Numbers } from 'lesca';

this.index = 3;
let image_url = './image-' + Numbers.Pad(this.index, 4) + '.png'; // 3 => 0003;
<img src={require(image_url)} />;
```

|   key   |       method        | options & readme                   |
| :-----: | :-----------------: | :--------------------------------- |
| Numbers | Pad(number, length) | Pad(20, 4) => return '0020'        |
|         |     Uid(length)     | Uid(6) => return 'JsPa3d' //random |
