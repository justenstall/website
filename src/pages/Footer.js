import React from 'react'

export class Footer extends React.Component {
	render() {
		return (
			<div className="container-fluid footer footer-desktop">
				<a className="cc-tag" rel="license" target="_blank"href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/80x15.png"/></a> Made by Justen Stall. Custom <a rel="noopener noreferrer" target="_blank" href="jstall.css" className="a-anim-light">CSS <i className="fab fa-css3"></i></a> and <a rel="noopener noreferrer" target="_blank" href="jstall.js" className="a-anim-light">JavaScript <i className="fab fa-js"></i></a> for animations and styling. <a id="changelog-link" className="a-anim-light" rel="noopener noreferrer" target="_blank" href="changelog.txt">CHANGELOG</a>
			</div>
		);
	}
}