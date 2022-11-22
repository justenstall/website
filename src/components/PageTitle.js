import React from 'react';
import styled from 'styled-components'
import { JustifiedRow } from './JustifiedRow';
import Zigzag from './Zigzag';

const StyledPageTitle = styled.h1`
	font-weight: 900;
	letter-spacing: .13rem;
	text-align: center;
	margin: 15rem auto 0 auto;
	border-radius: 1rem;
	padding: 1rem 0;
	text-shadow: 0rem .3rem 2rem rgba(0,0,0,.8);
	transition: all 0.3s ease-out !important;
`

export class PageTitle extends React.Component {
	render() {
		
		return (
			<JustifiedRow>
				<StyledPageTitle id={this.props.id}><Zigzag>{this.props.children}</Zigzag></StyledPageTitle>
			</JustifiedRow>
		)
	}
}