import React, { Component } from 'react';

class Loading extends Component {
	constructor(props) {
		super(props);
		require('./loading.less');

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

class Qrcode extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let img = new Image();
		img.onload = (e) => {
			this.refs.img.src = e.target.src;
			if (this.props.onload) this.props.onload();
		};
		img.src = this._googleQr();
	}
	_googleQr() {
		var url = encodeURIComponent(this.props.url),
			w = this.props.width || 500,
			h = this.props.height || 500;
		return `http://chart.apis.google.com/chart?cht=qr&chl=${url}}&chs=${w}x${h}`;
	}
	render() {
		return <img ref='img' width={this.props.width} height={this.props.height} />;
	}
}

const OrientationChange = Sensor.OrientationChange;

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

import EXIF from 'exif-js';

class InputCapture extends React.Component {
	constructor(props) {
		super(props);
		require('./inputCapture.less');
	}
	set({ file, length = this.props.length || 500, cb }) {
		var root = this;
		var ctx = this.refs.canvas.getContext('2d');

		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			var img = new Image();
			img.onload = function () {
				let max = length,
					iw = img.width,
					ih = img.height;
				if (iw > ih) {
					if (iw > max) {
						ih = Math.round((ih *= max / iw));
						iw = max;
					}
				} else {
					if (ih > max) {
						iw = Math.round((iw *= max / ih));
						ih = max;
					}
				}
				root.refs.canvas.width = iw;
				root.refs.canvas.height = ih;
				EXIF.getData(img, (e) => {
					let o = EXIF.getTag(this, 'Orientation');
					if (o == 6 || o == 8 || o == 3) {
						let r = 0;
						switch (o) {
							case 3:
								r = 180;
								break;
							case 6:
								r = 90;
								root.refs.canvas.width = ih;
								root.refs.canvas.height = iw;
								break;
							case 8:
								r = -90;
								root.refs.canvas.width = ih;
								root.refs.canvas.height = iw;
								break;
						}
						let x = root.refs.canvas.width / 2,
							y = root.refs.canvas.height / 2;
						ctx.translate(x, y);
						ctx.rotate((r * Math.PI) / 180);
						ctx.drawImage(img, -iw / 2, -ih / 2, iw, ih);
					} else ctx.drawImage(img, 0, 0, iw, ih);
					cb(root.refs.canvas.toDataURL('image/png', 1.0));
				});
			};
			img.src = e.target.result;
		};
	}

	capture() {
		this.refs.input.click();
	}

	onchange(e) {
		var file = e.target.files[0];
		this.set({
			file: file,
			cb: (e) => {
				if (this.props.onend) this.props.onend(e);
			},
		});
	}

	append() {
		if (this.props.img) return <img onClick={this.capture.bind(this)} src={this.props.img} />;
		else return <button onClick={this.capture.bind(this)}>{this.props.txt ? this.props.label : 'Capture'}</button>;
	}

	render() {
		return (
			<div ref='main' id='lesca-inputCapture'>
				{this.append()}
				<input ref='input' onChange={this.onchange.bind(this)} type='file' accept='image/*' capture='camera' />
				<canvas ref='canvas'></canvas>
			</div>
		);
	}
}

export { Qrcode, Loading, Landscape, InputCapture };
