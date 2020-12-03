import React from 'react';
import { render } from 'react-dom';
import { Dom2Json, Motion } from '../../lib';
import { Loading } from '../../lib/UI';
import './styles.css';

var s = Dom2Json(document.querySelector('.index'));
console.log(s);

Motion.init({
	callback: (e) => {
		alert(e);
	},
});

function Demo() {
	return (
		<div className='main'>
			<Loading />
		</div>
	);
}

render(<Demo />, document.getElementById('app'));
