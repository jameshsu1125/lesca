import React from 'react';
import { OrientationChange } from './../Device/Sensor';
import './orientationChange.less';

export default class orientationChange extends React.Component {
	constructor(props) {
		super(props);
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
