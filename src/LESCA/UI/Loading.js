import React from 'react';
import './Loading.less';
import $ from 'jquery';

export default class Loading extends React.Component {
	constructor(props) {
		super(props);

		this.class = this.props.style ? ` ${this.props.style}` : ' dark';
		this.txtClass = this.props.style ? ` t${this.props.style}` : ' tdark';
	}

	appendLinesClass() {
		return 'l' + this.class;
	}

	appendBackgroundClass() {
		return 'lesca-loading-bg' + this.class;
	}

	appendTextClass() {
		return 'lesca-loading-text' + this.txtClass;
	}

	appendLines() {
		var op = [];
		for (var i = 0; i < 18; i++) {
			op.push(<div key={i} className={this.appendLinesClass()}></div>);
		}
		return op;
	}

	appendText() {
		if (this.props.text) {
			return <div className={this.appendTextClass()}>{this.props.text}</div>;
		}
	}

	render() {
		return (
			<div id='lesca-loading'>
				<div className={this.appendBackgroundClass()}></div>
				<div ref='c' className='lesca-loading-c'>
					{this.appendLines()}
				</div>
				{this.appendText()}
			</div>
		);
	}
}
