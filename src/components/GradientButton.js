import React from 'react';
// import '../styles/gradient-button.css';
import styled from 'styled-components'
import { Row } from './Row';

const ButtonContainer = styled.div`
	display: flex;
`

const StyledGradientButton = styled.a`
	/* width: 11rem; */
	/* height: 7rem; */
	/* bottom: -5rem; */
	border-radius: 3.5rem;
	position: relative;
	z-index: 95;
	appearance: none;
	background: #00d2ff;
	padding: 2rem 2.5rem;
	border: none;
	color: black;
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	letter-spacing: .1rem;
	cursor: pointer;
	outline: none;
	overflow: hidden;
	box-shadow: 0rem .3rem 2rem rgba(0,0,0,.9);
	transition: all 0.3s ease-out;

	&.wide {
		width: 13rem;
	}

	&:hover {
		color: white;
		box-shadow: 0rem .3rem 3rem rgba(0,0,0,.8);
		transform: scale(1.1);
	}

	&::before {
		--size: 0;
		content: '';
		position: absolute;
		left: var(--x);
		top: var(--y);
		width: var(--size);
		height: var(--size);
		background: radial-gradient(circle at center, var(--dark-color), transparent 65%);
		transform: translate(-50%, -50%);
		transition: width .2s ease-in, height .2s ease-in;
	}

	&:hover::before {
		--size: 40rem;
	}

	& span {
		position: relative;
	}
`

export class GradientButton extends React.Component {
	render() {
		return (
			<ButtonContainer>
				<StyledGradientButton 
					id={this.props.id}
					rel="noopener noreferrer" 
					target="_blank" 
					href={this.props.link} 
					role="button"
				>
					<span>{this.props.children}</span>
				</StyledGradientButton>
			</ButtonContainer>
		);
	}
}