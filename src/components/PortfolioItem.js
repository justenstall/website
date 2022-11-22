import React, { Component } from 'react';
import '../styles/jstall.css';
import { GradientButton } from '../components/GradientButton';
import { JustifiedRow } from './JustifiedRow';
import styled from 'styled-components'
import { HoverDiv } from './HoverDiv';

const Item = styled(HoverDiv)`
	background-color: var(--glass);
	border-radius: 4rem;
	padding: 1.25rem 2.5rem 2rem 2.5rem;
	margin: 1.5rem 1.5rem 4.5rem;
	display: block;
	width: 18%;
`

const Title = styled.h3`
	font-size: 2.5rem;
	font-weight: 700;
	letter-spacing: .1rem;
	text-align: center;
`

const Date = styled.h5`
	font-size: 2rem;
	font-weight: 500;
	text-align: center;
`

const Description = styled.p`
	font-size: 1.8rem;
	font-weight: 300;
	/* margin-bottom: 0; */
	text-align: center;

	& a {
		padding: 0 0 .5rem 0;
	}
`

const PortfolioButton = styled(GradientButton)`
	bottom: 5rem;
	position: absolute;
	margin: 2rem 0;
`

export class PortfolioItem extends Component {
	render() {
		return (
			<Item>
				<JustifiedRow>
					<PortfolioButton link={this.props.link}>
						{this.props.title}
					</PortfolioButton>
				</JustifiedRow>
				<Date>{this.props.date}</Date>
				<Description>
					{this.props.description}
				</Description>
			</Item>
		);
	}
}
