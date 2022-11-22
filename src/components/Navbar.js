import React from 'react';
import Favicon from '../img/app-icon-fullres.png';

export class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<a className="scroll-link" name="toplink"></a>
				<a href="#toplink"><img className="navbar-favicon-large hover-card" src={Favicon} /></a>
				<div className="navbar-large hover-card">
					<a className="test-nav-link a-anim-zigzag-light" href="#aboutlink">About</a>
					<a className="test-nav-link a-anim-zigzag-light" href="#resumelink">Resume</a>
					<a className="test-nav-link a-anim-zigzag-light" href="#portfoliolink">Portfolio</a>
					<a className="test-nav-link a-anim-zigzag-light" href="#contactlink">Contact</a>
				</div>
			</nav>
		);
	}
}