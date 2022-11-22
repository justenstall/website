import React from 'react';
import styled from 'styled-components'
import '../styles/jstall.css'
import { HoverDiv } from './HoverDiv';
import { JustifiedRow } from './JustifiedRow';
import AnimatedLinkLight from './AnimatedLinkLight';

const Item = styled(HoverDiv)`
	color: black;
	background-color: white;
	border-radius: 2.5rem;
	padding: 2rem 2.5rem 2rem 2.5rem;
	margin: 1.5rem;
`

const Image = styled.img`
	display: block;
	max-width: 95%;
	max-height: 5rem;
	border: .5rem solid white;
	margin: 0 auto 1rem;
	-webkit-transition: all 0.2s ease-out;
	transition: all 0.2s ease-out;
	&:hover {
		max-width: 100%;
		max-height: 6rem;
	}
`

const Title = styled.h4`
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;
	letter-spacing: .1rem;
`

const Company = styled.h5`
	font-size: 2rem;
	font-weight: 500;
	text-align: center;
`

const Date = styled.h5`
	font-size: 1.8rem;
	font-weight: 400;
	text-align: center;
`

const Description = styled.p`
	color: black;
	font-size: 1.8rem;
	font-weight: 300;
	margin-bottom: 0;
`

const Link = styled(AnimatedLinkLight)`
	color: black;
	font-size: 2rem;
	font-weight: 500;
	padding: .5rem .5rem .3rem;
	&:hover{
		color: black;
	}
`

export class ExperienceItem extends React.Component {

	render() {
		return (
			<Item id={this.props.id}>
				<a href={this.props.link}>
					<Image className="item-img-link" src={this.props.img}/>
				</a>
				<Title>{this.props.title}</Title>
				<Company>{this.props.company}</Company>
				<Date>{this.props.date}</Date>
				<Description>
					{this.props.description}
				</Description>
				<JustifiedRow>
					<Link href={this.buttonLink}>{this.props.buttonText}</Link>
				</JustifiedRow>
			</Item>
		);
	}
}