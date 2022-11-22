import React from 'react'
import { MainTitle } from '../components/MainTitle'
import { PageContainer } from '../components/PageContainer'
import SocialData from '../data/SocialData'

export class Front extends React.Component {
	render() {

		const SocialIcons = (
			<div>
				{
					SocialData.map((social) => (
						<a 
							className="social-icon" 
							id={social.id} 
							rel="noopener noreferrer" 
							target="_blank" 
							href={social.link}>
								<i className={social.icon}></i>
							</a>
					))
				}
			</div>
		)
		
		return (
			<PageContainer id="front-page">
				<MainTitle />
				<p className="tagline">
					Hey, I'm Justen. I study Computer Science at the University of Dayton.
					<br/>
					<br/>
					{SocialIcons}
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<a className="scroll-hint" href="#aboutlink"><i className="fas fa-angle-down"></i></a>
				</p>
			</PageContainer>
		);
	}
}