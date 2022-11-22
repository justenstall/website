import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import zigzagBlack from '../img/Justenwithane-01.svg'
const zigzagAnimate = keyframes`
	0% {
		background-position: 0rem;
	}
	100% {
		background-position: -8rem;
	}
`

const Zigzag = styled.span`
	display: inline-block;
	position: relative;

	&:after {
		content: '';
		height: 1.1rem;
		width: 100%;
		position: absolute;
		/*background: url("img/zigzag-black.png");*/
		background: url(${zigzagBlack});
		background-size: 2rem;
		top: 8rem;
		bottom: 0;
		left: 0;
		animation: ${zigzagAnimate} 1.5s infinite linear;
		animation-play-state: paused;
	}

	&:hover:after {
		animation-play-state: running;
	}

	&:after {
		animation-play-state: running !important;
	}

	.zigzag-title:after {
		top: 9.75rem;
	}
`

export default Zigzag