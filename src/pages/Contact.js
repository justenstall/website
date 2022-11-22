import React from 'react';
import { PageTitle } from '../components/PageTitle';
import { Subtitle } from '../components/Subtitle';
import { PageContainer } from '../components/PageContainer';
import { Container } from '../components/Container';
import { FluidContainer } from '../components/FluidContainer';
import { GradientButton } from '../components/GradientButton';
import { JustifiedRow } from '../components/JustifiedRow';
import SocialData from '../data/SocialData'
import styled from 'styled-components'

const EmailButton = styled(GradientButton)`
	width: 28rem;
	bottom: 0;
`

const StyledSocialList = styled(JustifiedRow)`
	background-color: var(--glass);
	backdrop-filter: blur(2.5rem) saturate(110%);
	border-radius: 6rem;
	padding: 2rem 2.5rem;
	margin-bottom: 6rem;
`

export class Contact extends React.Component {
	render() {
		const SocialList = (
			<StyledSocialList>
					{
						SocialData.map((social) => (
							<a 
								className="social-link" 
								rel="noopener noreferrer" 
								target="_blank" 
								href={social.link}
							>
								<span className="a-anim-light">
									<i className={social.icon}></i> {social.text}
								</span>
							</a>
						))
					}
			</StyledSocialList>
		)

		return (
			<PageContainer id="contact-page">
				<a className="scroll-link" name="contactlink"></a>
				<PageTitle>Contact</PageTitle>
				<Subtitle>Email</Subtitle>
				<JustifiedRow>
					<EmailButton className="wide" link="mailto:me@justenstall.com">
						me@justenstall.com
					</EmailButton>
					{/* Change this to a "copy email" button */}
				</JustifiedRow>
				<FluidContainer>
					<Subtitle>Social Media</Subtitle>
					<Container>
						{SocialList}
					</Container>
				</FluidContainer>
			</PageContainer>
		);
	}
}