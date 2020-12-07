import React, { Component } from 'react';
import { OrientationChange } from './LESCA/Device/Sensor';

class Landscape extends React.Component {
	constructor(props) {
		super(props);
		require('./Landscape.less');
		this.state = { show: false };
	}
	componentDidMount() {
		OrientationChange.init({
			callback: (e) => {
				let dw = this.props.dw || 750,
					s = window.screen.width / dw,
					p = document.querySelector('meta[name="viewport"]');
				p.content = `width=${dw}, minimum-scale=${s}, maximum-scale=${s}, initial-scale=${s}`;
				this.setState({ show: e != 0 });
			},
		});
	}
	set() {
		if (this.state.show) return <div id='lesca-oc'></div>;
	}
	render() {
		return <>{this.set()}</>;
	}
}

export default Landscape;
