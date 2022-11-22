import React from 'react';

export class Stripe extends React.Component {
	render() {
		return (
			<div id="stripe">
				<button id="reset">New Colors</button>
				<span id="message">Play again?</span>
				<button id="easyBtn">Easy</button>
				<button id="hardBtn" class="selected">Hard</button>
			</div>
		);
	}
}