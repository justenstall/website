import React from 'react'

import udLogo from '../img/udayton-logo-primary-2color.png';
import vbLogo from '../img/vb.jpg';
import feLogo from '../img/flyer-enterprises-wikipedia.jpg';
import cooperLogo from '../img/Cooper_stacked_2017.jpg';
import geAviationLogo from '../img/ge-aviation-logo.png';

export const experienceData = [
	{
		id: 'experience-fe',
		link: 'http://www.flyerenterprises.com',
		img: feLogo,
		title: 'Developer',
		company: 'Flyer Enterprises IT | FE Digital',
		date: 'September 2018 - Present',
		description: <span>I assist with a variety of projects within FEit and FE Digital including:
		- Working with the application development teams to update mobile applications
		- Working with the FE Digital team, providing web development services to local small businesses</span>,
	},
	{
		id: 'experience-ge-aviation',
		link: 'https://www.geaviation.com/',
		img: geAviationLogo,
		title: 'Digital Technology Intern',
		company: 'GE Aviation',
		date: 'Summer 2019',
		description: <span>I work as a DT Intern in the Military group at GE Aviation. I assist with data analysis and data automation in the Spares Contracts group.</span>,
	},
	{
		id: 'experience-cooper',
		link: 'http://us.coopertire.com',
		img: cooperLogo,
		title: 'IT Infrastructure Intern',
		company: 'Cooper Tire & Rubber Company',
		date: 'Summer 2018',
		description: <span>I helped streamline company processes with a focus on Life Cycle Management and Mobile Device Management. My main projects were preparing Microsoft Intune for deployment to 1200 clients and creating a LCM database to save employees time tracking leased computers.</span>,
		buttonLink: 'https://drive.google.com/open?id=1kTm6UM2Onah879Do0Tsib0y1r0fpTSU6Jd3EyKzhjmQ',
		buttonText: 'End of Term Presentation',
	},
]

export const educationData = [
	{
		id: 'education-ud',
		link: 'https://udayton.edu',
		img: udLogo,
		school: 'University of Dayton',
		major: 'Computer Science',
		date: 'August 2017 - Present',
		tagline: '3.71 GPA | Honors Program',
		description: <span>
			Awards:
				Trustee's Merit Scholar
				Dean's List Spring 2018, Fall 2017
			2018 UD Programming Contest: 8th Place
				Activities:
				Association for Computing Machinery
				Institute of Electrical and Electronics Engineers
				Makers Club
				Campus Ministry
				New Beginnings Retreat Leadership Team
				Intramural Sports
		</span>,
		firstColor: '#1F3E7C',
		secondColor: '#D51E3D',
	},
	{
		id: 'education-vb',
		link: 'https://vbschools.net',
		img: vbLogo,
		school: 'Van Buren High School',
		major: 'Honors Diploma | Valedictorian | 4.0 GPA',
		date: 'August 2013 - May 2017',
		description: <span>
			Awards:
				National Merit Scholarship Finalist
				Franklin B. Walter All-Scholastic Award: Hancock County Winner
				Elks Club Student of the Month
			Activities:
				National Honor Society
				Cross Country
				Track & Field
				Musicals
				Show Choir
				Choir
		</span>,
		firstColor: '#F78429',
		secondColor: '#5c666f',
	},
]

export const skillData = [
	{iconClass: 'devicon-java-plain-wordmark colored'},
	{iconClass: 'devicon-javascript-plain colored'},
	{iconClass: 'devicon-python-original colored'},
	{iconClass: 'devicon-cplusplus-plain-wordmark colored'},
	{iconClass: 'devicon-nodejs-plain colored'},
	{iconClass: 'devicon-mysql-plain-wordmark colored'},
	{iconClass: 'devicon-postresql-original-wordmark colored'},
	{iconClass: 'devicon-react-plain-wordmark colored'},
	{iconClass: 'devicon-vuejs-plain-wordmark colored'},
	{iconClass: 'devicon-git-plain-wordmark colored'},
	{iconClass: 'devicon-html5-plain-wordmark colored'},
	{iconClass: 'devicon-css3-plain-wordmark colored'},
]