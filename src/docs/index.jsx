import React from 'react';
import { render } from 'react-dom';
import { Dom2Json, Motion, Line } from '../../lib';
import { Landscape } from '../../lib/UI';
import './styles.css';

var s = Dom2Json(document.querySelector('.index'));
function openLine() {
	Line.share('https://www.google.com', 'xxxx');
}
function Demo() {
	return (
		<div className='main'>
			<button onClick={openLine.bind(this)}>Line</button>
			<Landscape />
		</div>
	);
}

render(<Demo />, document.getElementById('app'));
