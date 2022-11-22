import React, { Component } from 'react'
import styled from 'styled-components'

const StyledLinkLight = styled.a`
	position: relative;
	color: white;
	text-decoration: none;
	outline: none;
	padding: 1.5rem;

	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: .4rem;
		bottom: 0;
		left: 0;
		background: linear-gradient(to right, var(--light-color) -50%, var(--med-color) 150%);
		border-radius: .2rem;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
	}

	&:hover:before {
		visibility: visible;
		transform: scaleX(1);
	}

	&:hover {
		color: white;
		text-decoration: none;
	}
`

export default class AnimatedLink extends Component {
	render() {
		return (
			<StyledLinkLight 
			rel="noopener noreferrer" 
			target="_blank" 
			href={this.props.link}
		>
			{this.props.children}
		</StyledLinkLight>
		)
	}
}

