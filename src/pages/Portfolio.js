import React from 'react';
import { PageTitle } from "../components/PageTitle";
import { Subtitle } from "../components/Subtitle";
import { PortfolioItem } from '../components/PortfolioItem';
import { JustifiedRow } from '../components/JustifiedRow';
import { Container } from '../components/Container';
import { FluidContainer } from '../components/FluidContainer';
import { PageContainer } from '../components/PageContainer';
import { AnimatedLink } from '../components/AnimatedLink';
import CourseData from '../data/CourseData'
import WebDevelopmentData from '../data/WebDevelopmentData'
import OtherProjectData from '../data/OtherProjectData'

export class Portfolio extends React.Component {
	render() {
		return (
			<PageContainer id="portfolio-page">
				<a className="scroll-link" name="portfoliolink"></a>
				<PageTitle>Portfolio</PageTitle>
				
				<FluidContainer>
						<Subtitle>Coursework</Subtitle>
						<JustifiedRow>
							{CourseData.map((course) => (
								<PortfolioItem
									title={course.title}
									date={course.date}
									description={course.description}
									buttonText={course.buttonText}
									link={course.link}
								/>
							))}
						</JustifiedRow>
						{/* <Subtitle>Web Development Course</Subtitle>
						<JustifiedRow>
							{WebDevelopmentData.map((project) => (
								<PortfolioItem
									title={project.title}
									date={project.date}
									description={project.description}
									buttonText={project.buttonText}
									link={project.link}
								/>
							))}
						</JustifiedRow> */}
						<Subtitle>Personal Website</Subtitle>
						<JustifiedRow>
							{OtherProjectData.map((project) => (
								<PortfolioItem
									title={project.title}
									date={project.date}
									description={project.description}
									buttonText={project.buttonText}
									link={project.link}
								/>
							))}
						</JustifiedRow>
					</FluidContainer>
				</PageContainer>
		);
	}
}