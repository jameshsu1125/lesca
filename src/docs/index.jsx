import React from 'react';
import { render } from 'react-dom';
import { Dom2Json, Loading } from '../../lib';
import './styles.css';

var s = Dom2Json(document.querySelector('.index'));
console.log(s);
function Demo() {
	return (
		<div className='index'>
			<div className='aaa'>asdasd</div>
			<div className='bbb'>bbb</div>
			<div className='ccc'>
				<p>Up to the latest GeForce RTX™ 3080 GPU</p>
				<p>
					PCIe<sup>®</sup> 3.0 x8 plug with up to 7.88GB/s max. bandwidth
				</p>
				<p>1kg ultralight design</p>
				<p>Integrated 280W adapter and multi-port hub</p>
			</div>
		</div>
	);
}

render(<Demo />, document.getElementById('app'));
