import React from 'react';
import { render } from 'react-dom';
import { Dom2Json } from '../../lib';
import './styles.css';

var s = Dom2Json(document.querySelector('.index'));
console.log(s);
function Demo() {
	return (
		<div className='index'>
			<div className='aaa'>asdasd</div>
			<div className='bbb'>bbb</div>
		</div>
	);
}

render(<Demo />, document.getElementById('app'));
