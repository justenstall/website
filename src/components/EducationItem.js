import React from 'react';
import '../styles/jstall.css';
import { JustifiedRow } from './JustifiedRow';
import { HoverDiv } from './HoverDiv';


export class EducationItem extends React.Component {
	render() {
		return (
			<HoverDiv id={this.props.id} className="education-item">
				<a href={this.props.link}>
					<img className="education-img item-img-link" src={this.props.img} />
				</a>
				<h4 className="education-school" color={this.props.firstColor}>{this.props.school}</h4>
				<h5 className="education-major" color={this.props.secondColor}>{this.props.major}</h5>
				<h5 className="education-date">{this.props.date}</h5>
				<h5 className="education-date">{this.props.tagline}</h5>
				<p className="education-description">
					{this.props.description}
				</p>
				<JustifiedRow><a className="a-anim-light education-link" rel="noopener noreferrer" target="_blank" href={this.props.more}>More</a></JustifiedRow>
			</HoverDiv>
		);
	}
}