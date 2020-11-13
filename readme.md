[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Usage

```javascript
import { Loading } from 'lesca';

constructor(){
    this.state = { loading:true }
}

append_loading(){
    if(this.state.loading) <Loading />;
}

render(){
    return (
        <>
            {this.append_loading()}
        </>
    );
}

```

# Components

```javascript
    Loading      | props => style='dark' => ( 'dark', 'light' )
    Qrcode       | props => url='https://github.com/jameshsu1125/'
    OC           | props => dw='750'
    InputCapture | props => txt='button Label',
                            img={require('button.png')},
                            onend={ (base64)=>{} },
                            length='500'
```

# Javascripts

```javascript
    Sensor       | Object => Motion, Orientation, OrientationChange
    UserAgent    | Method => get, Facebook.is, Line.is, Ios.is, Android.is, Wechat.is
    TouchEvent   | Method => init, add, remove, clear, destory
    Facebook     | Method => init, status, login, logout, share, click
    EnterFrame   | Method => init, add, destroy, stop, play
    Hash         | Method => get, remove, removeAndGo, root, file
    Http2Https   | Method => go
    LocalStorage | Method => is, set, get, remove, clear, showAll
    Numbers      | Method => Pad, Uid
```
