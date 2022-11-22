import React from 'react';
import '../styles/jstall.css';
import styled from 'styled-components'
import { skillData } from '../data/ResumeData'

const StyledList = styled.div`
	background-color: var(--glass);
	box-shadow: 0rem .3rem 2rem rgba(0,0,0,.7);
	-webkit-backdrop-filter: blur(2.5rem) saturate(110%);
	backdrop-filter: blur(2.5rem) saturate(110%);
	border-radius: 6rem;
	padding: 2rem 2.5rem;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
	-ms-flex-pack: center !important;
	justify-content: center !important;
`

const StyledIcon = styled.div`
	font-size: 5rem;
	text-align: center;
	vertical-align: center;
	-webkit-filter: brightness(0) invert(1);
	filter: brightness(0) invert(1);
	-webkit-transition: all 0.2s ease-out;
	transition: all 0.2s ease-out;
	margin: 0 auto;
	&:hover {
		-webkit-filter: none;
		filter: none;
		-webkit-transition: all 0.2s ease-out;
		transition: all 0.2s ease-out;
		-webkit-transform: scale(1.3);
		transform: scale(1.3);
	}
`

export class SkillList extends React.Component {
	render(){
		return (
			<StyledList>
				{skillData.map((skill, index) => (
					<StyledIcon className="skill-item col-lg-1 col-md-2 col-sm-3">
						<i className={skill.iconClass}></i>
					</StyledIcon>
				))}
			</StyledList>
		);
	}
}