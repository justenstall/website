import React from 'react';
import { Stripe } from './stripe';

export class Header extends React.Component {
	render(){
		return (
			<div>
				<h1>
					The Great
					<br/>
					<span id="colorDisplay">RGB(10,10,10)</span>
					<br/>
					Guessing Game
				</h1>
				<Stripe />
			</div>
		);
	}
}