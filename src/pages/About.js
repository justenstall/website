import React from 'react'
import { PageTitle } from '../components/PageTitle';
import { PageContainer } from '../components/PageContainer';
import { Container } from '../components/Container';

export class About extends React.Component {
	render() {
		return (
			<PageContainer id="about-page">
				<Container>
					<a className="scroll-link" name="aboutlink"></a>
					<PageTitle>About</PageTitle>
					<h3></h3>
					<p className="tagline">
						Technology has amazed me since I watched behind the scenes footage on my Toy Story 2 VHS as a kid. I am pursuing a career in software innovation to push the boundaries of technology like computer animation did in my favorite childhood movie.
					</p>
					<div className="spacing"></div>
				</Container>
			</PageContainer>
		);
	}
}