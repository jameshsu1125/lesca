import React, { Component } from 'react';
import './style.less';

class MySuperCoolComponent extends Component {
	handleClick = () => {
		console.log('Click!');
	};

	render() {
		const { color, children } = this.props;
		return <div className='lesca_ui_loading'>asd</div>;
	}
}

export default MySuperCoolComponent;
