import React from 'react';
import { render } from 'react-dom';
import { Dom2Json, Motion } from '../../lib';
import { Landscape } from '../../lib/UI';
import './styles.css';

var s = Dom2Json(document.querySelector('.index'));

function Demo() {
	return (
		<div className='main'>
			<Landscape />
		</div>
	);
}

render(<Demo />, document.getElementById('app'));
