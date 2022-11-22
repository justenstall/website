import React from 'react';
import { Square } from './square';

export class Squares extends React.Component {
	render(){
		return (
			<div id="container">
				<Square id="square1" />
				<Square id="square2" />
				<Square id="square3" />
				<Square id="square4" />
				<Square id="square5" />
				<Square id="square6" />
			</div>
		);
	}
}