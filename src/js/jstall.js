let $window = $(window);
let $myNavLink = $(".my-nav-link");
let $topBtn = $("#topBtn");
let $navbar = $(".navbar");
let $navbarImage = $(".navbar-image");
let $dropdownSpan = $(".dropdown-span");
let $spacedPages = $("#front-page");
let $aboutPage = $("#about-page");
let $resumePage = $("#resume-page");
let $portfolioPage = $("#portfolio-page");
let $contactPage = $("#contact-page");
let $resumeNavLink = $("#resume");
let $companyLogos = $(".company-logo");
let $dropdownMenu = $(".dropdown-menu");
let $educationItems = $(".education-item");
let $testNavbarFavicon = $(".test-navbar-favicon");
let $navbarTest = $(".navbar-test");

// On load, run through all necessary functions
$window.ready(function(){
	// positionCheck();
	pageHeight();
	responsiveSizing();
});

// Media queries to color dropdown underlines if screen is less than 991.98px wide
$window.resize(function(){
	// positionCheck();
	pageHeight();
	responsiveSizing();
});

// Runs position function when user scrolls
$window.scroll(function(){
	// positionCheck();
});

// Navbar Active Link Highlighting
// Select all links with hashes
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
.click(function(event) {
	// On-page links
	if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
	) {
		// Figure out element to scroll to
		let target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation will actually happen
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000, function() {
				// Callback after animation
				// Must change focus!
				let $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
					return false;
				} else {
					$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
					$target.focus(); // Set focus again
				};
			});
		}
	}
});

// Animate dropdowns
// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(320);
	$(".dropdown-caret").addClass("dropdown-caret-flipped");
});
// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp(320);
	$(".dropdown-caret").removeClass("dropdown-caret-flipped");
});

// // Show image descriptions on hover of title
// for (var i = $secondaryTitles.length - 1; i >= 0; i--) {
// 	let imgDescription = $imgDescriptions[i];
// 	$secondaryTitles[i].addEventListener("mouseover", function(event) {
// 		imgDescription.style.display = "block";
// 		// imgDescription.style.transform = "scale(1)";
// 	});
// 	$secondaryTitles[i].addEventListener("mouseout", function(event) {
// 		imgDescription.style.display = "none";
// 		// imgDescription.style.transform = "scale(0)";
// 	});
// }



// When position is away from the top of the document, show the button
function positionCheck(){
	dropdownUnderlineToggle();
	if ($window.scrollTop() < 40) {
		// $testNavbarFavicon.addClass("in-view");
		// $navbarTest.addClass("in-view");
		// topBtnShow();
		// $myNavLink.addClass("a-anim-zigzag");
		// $myNavLink.removeClass("a-anim-zigzag-light");
		// $navbarImage.addClass("navbar-image-top");
		// $navbarImage.removeClass("navbar-image-scrolled");
		// $navbar.removeClass("navbar-scrolled");
		// $dropdownMenu.removeClass("dropdown-menu-scrolled");
	} else{
		// $testNavbarFavicon.removeClass("in-view");
		// $navbarTest.removeClass("in-view");
		// topBtnHide();
		// $myNavLink.removeClass("a-anim-zigzag");
		// $myNavLink.addClass("a-anim-zigzag-light");
		// $navbarImage.removeClass("navbar-image-top");
		// $navbarImage.addClass("navbar-image-scrolled");
		// $navbar.addClass("navbar-scrolled");
		// $dropdownMenu.addClass("dropdown-menu-scrolled");
	}
}

function responsiveSizing(){
	// Dropdown Underline Color
	if($window.width() <= 992){
		$dropdownSpan.removeClass("a-anim");
		$dropdownSpan.addClass("a-anim-light");
	} else{
		$dropdownSpan.addClass("a-anim");
		$dropdownSpan.removeClass("a-anim-light");
	}
	// if($window.width() < 4820) {

	// 	$educationItems.removeClass("col-lg-4");
	// 	$educationItems.addClass("col-lg-8");
	// }
	// if($window.width() <= 751){
	// 	$resumeNavLink.hide();
	// } else{
	// 	$resumeNavLink.show();
	// }
}

function resizeDelay(){
	let resizeTimer;
	$(window).on('resize', function(e) {
	  	clearTimeout(resizeTimer);
	  	resizeTimer = setTimeout(function() {
			// Insert code here
	  	}, 250);
	});
}

// Set each page container to take up full window height
function pageHeight(){
	let windowHeight = $window.height();
	$spacedPages.height(windowHeight);
}

// LITERALLY THE MOST BEAUTIFUL BUTTON EVER
// document.querySelector('.pf-button').onmousemove = (e) => {
 
//   const x = e.pageX - e.target.offsetLeft
//   const y = e.pageY - e.target.offsetTop

//   e.target.style.setProperty('--x', `${ x }px`)
//   e.target.style.setProperty('--y', `${ y }px`)
 
// }

function mousePosition() {

}

function topBtnShow() {
	if ($window.scrollTop() < 40) {
		if ($window.width() >= 1280){
			$topBtn.slideUp();
		}
	} else {
		if ($window.width() >= 1280){
			$topBtn.slideDown();
		}
	}
	

	
}

function topBtnHide() {
	
}

function dropdownUnderlineToggle() {
	if ($window.scrollTop() < 40) {
		if($window.width() > 992){
			$dropdownSpan.addClass("a-anim");
			$dropdownSpan.removeClass("a-anim-light");
		}
	} else {
		if($window.width() > 992){
			$dropdownSpan.removeClass("a-anim");
			$dropdownSpan.addClass("a-anim-light");
		}
	}
}

function showDropdown() {
	
}