[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Usage

```
import { Loading } from 'lesca';

constructor(){
    this.state = { loading:true }
}

append_loading(){
    if(this.state.loading) <Loading />;
}

render(){
    return <>
        {this.append_loading()}
    </>
}

```

# Components

```
    Loading      | props => style='dark' => ( 'dark', 'light' )
    Qrcode       | props => url='https://github.com/jameshsu1125/'
    OC           | props => dw='750'
    InputCapture | props => txt='button Label',
                            img={require('button.png')},
                            onend={ (base64)=>{} },
                            length='500'
```

# Javascripts

```
    Sensor
    UserAgent
    TouchEvent
    Facebook
    EnterFrame
    Hash
    Http2Https
    LocalStorage
    Number
```
