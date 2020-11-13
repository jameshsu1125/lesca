import React from 'react';
import { render } from 'react-dom';
import { Qrcode, Sensor, InputCapture } from '../../lib';
import './styles.css';

console.log(Sensor);
function Demo() {
	return <InputCapture />;
}

render(<Demo />, document.getElementById('app'));
