import React from 'react';
import { PageContainer } from '../components/PageContainer';
import { JustifiedRow } from '../components/JustifiedRow';
import { PageTitle } from '../components/PageTitle';
import { Subtitle } from '../components/Subtitle';
import { ExperienceItem } from '../components/ExperienceItem';
import { SkillList } from '../components/SkillList';
import { EducationItem } from '../components/EducationItem';
import { Container } from '../components/Container';
import { GradientButton } from '../components/GradientButton';

import '../styles/jstall.css';

import { experienceData, educationData } from '../data/ResumeData'


export class Resume extends React.Component {
	render() {
		return (
			<PageContainer id="resume-page">
				<a className="scroll-link" name="resumelink"></a>
				<PageTitle>Resume</PageTitle>
				<Subtitle text="Work Experience"/>
				<JustifiedRow>
					{
						experienceData.map((experience) => (
							<ExperienceItem
								id={experience.id}
								link={experience.link}
								img={experience.img}
								title={experience.title}
								company={experience.company}
								date={experience.date}
								description={experience.description}
								buttonLink={experience.buttonLink}
								buttonText={experience.buttonText}
							/>
						))
					}
				</JustifiedRow>

				<Subtitle text="Skills" />
				<Container>
					<SkillList />
				</Container>
				
	
				<Subtitle text="Education" />

				<JustifiedRow>
					{
						educationData.map((education) => (
							<EducationItem
								id={education.id}
								link={education.link}
								img={education.img}
								school={education.school}
								major={education.major}
								date={education.date}
								description={education.description}
							/>
						))
					}
				</JustifiedRow>
				<JustifiedRow>
					<GradientButton
						link="https://drive.google.com/open?id=19CoICV48bVAEBj7RQBjSCL98wd1w9lbS"
					>
						Download Resume <i className="fab fa-google-drive"></i>
					</GradientButton>
				</JustifiedRow>
			</PageContainer>
		);
	}
}