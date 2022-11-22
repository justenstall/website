import React, { Component } from 'react'

export default class NavbarMobile extends Component {
	render() {
		return (
			<nav class="navbar sticky-top old-navbar-mobile">
				<div class="container old-navbar-mobile-container">
					<li class="nav-item">
						<div class="dropdown">
							<a class="nav-link dropdown-toggle caret-off" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<span class="my-nav-link a-anim-zigzag-light">Pages</span>
									</a>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item a-anim-light" href="#aboutlink">About</a>
									<a class="dropdown-item a-anim-light" href="#resumelink">Resume</a>
									<a class="dropdown-item a-anim-light" href="#portfoliolink">Portfolio</a>
									<a class="dropdown-item a-anim-light" href="#contactlink">Contact</a>
							</div>
						</div>
					</li>
					<li class="nav-item">
						{/* <a href="#toplink"><img class="navbar-img navbar-img-top" src="img/bground.jpg"/></a> */}
						<a href="#toplink"><img class="navbar-favicon" src="img/favicon/android-chrome-512x512.png"/></a>
					</li>
					<li class="nav-item">
						<div class="dropdown">
							<a class="nav-link dropdown-toggle caret-off" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<span class="my-nav-link a-anim-zigzag-light">Follow</span>
									</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item a-anim-light" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/justenstall"><i class="fab fa-linkedin"></i> LinkedIn</a>
									<a class="dropdown-item a-anim-light" rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/justenstall"><i class="fab fa-twitter"></i> Twitter</a>
									<a class="dropdown-item a-anim-light" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/justenstall"><i class="fab fa-instagram"></i> Instagram</a>
									<a class="dropdown-item a-anim-light" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/justenstall"><i class="fab fa-facebook"></i> Facebook</a>
									<a class="dropdown-item a-anim-light" rel="noopener noreferrer" target="_blank" href="https://www.github.com/justenstall"><i class="fab fa-github"></i> GitHub</a>
							</div>
						</div>
					</li>
				</div>
			</nav>
		)
	}
}
