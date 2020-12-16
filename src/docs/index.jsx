import React from 'react';
import { render } from 'react-dom';
import { Dom2Json, Motion, Line, Gtag, CDN } from '../../lib';
import { Landscape } from '../../lib/UI';
import './styles.css';

var s = Dom2Json(document.querySelector('.index'));
function openLine() {
	Line.share('https://www.google.com', 'xxxx');
}

function Demo() {
	var u = require('./meta-img.jpg');
	CDN.install('https://google.com');
	console.log(Motion);
	console.log(CDN.path(u));
	return (
		<div className='main'>
			<button onClick={openLine.bind(this)}>Line</button>
			<Landscape />
		</div>
	);
}

render(<Demo />, document.getElementById('app'));
