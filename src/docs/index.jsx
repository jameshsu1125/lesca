import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../lib';
import './styles.css';

function Demo() {
	return <MyComponent color='brown'>Wow what a button</MyComponent>;
}

render(<Demo />, document.getElementById('app'));
