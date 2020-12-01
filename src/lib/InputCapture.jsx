import React, { Component } from 'react';
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

export default InputCapture;
