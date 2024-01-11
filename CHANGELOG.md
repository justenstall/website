# 1.0.0 (2024-01-11)


### Bug Fixes

* enable eslint with eslintrc ([0c97d21](https://github.com/justenstall/website/commit/0c97d21aaf8561f5241cf42434df9c0007191bd3))
* **python version:** demote python to 3.11 to enable dependabot ([a824edc](https://github.com/justenstall/website/commit/a824edc6b84c068af5dce71d805f7d9e92a110d1))


### Features

* add semantic release job ([888aa62](https://github.com/justenstall/website/commit/888aa62662399783fec6702b536af63967aa9750))
* update work experience, remove some old stuff, delete some old code that I was scared to delete before I was a git wizard ([e97b854](https://github.com/justenstall/website/commit/e97b854eae609ccc5171f5d209424fde3c7f0334))

## Archive (pre-2019)

### WORK IN PROGRESS:

- Activating hover-card with scroll position rather than actual hover
- Working on React and Vue versions
- Removing Bootstrap
  - Challenges:
    - Rows of items
    - Navbar - completed
    - Dropdowns/Dropups - removed
  - Reasons:
    - Can remove jQuery from site
    - Already working against Bootstrap a lot
    - Control media breakpoints better
    - Show my skills

### CURRENT ISSUES:

- Older MS Edge/Internet Explorer works except for gradients

### 9/20/2018

- New job! Added Flyer Enterprises to work experience

### 9/17/2018

- Quick spruce up before Fall Career Fair

### 8/24/2018

- Added background texture to top layer
- Replaced underline with SVG version

### 8/16/2018

- Increased mobile font size
- Brainstorming ways to keep original site accessible when replacing with React version
- Bootstrap container replacement work
- Front page mobile fixes
- Colors
  - Reworked mobile colors
  - Getting ready for HSL switch
  - Brainstorming ideas for a true color scheme, not just blue blue and blue

### 8/13/2018

- Bootstrap removal progress
- Cleaned up old code

### 8/12/2018

- Mobile sizing fixes
- Added animated gradient to mobile

### 8/10/2018

- Scaling fixes
- Dropdown JavaScript fixes
- Spacing fixes
- Legibility work

### 8/9/2018

- Added social link icons to tagline on front page
- Added scroll hint that links to about page on front page
- Removed responsive sizing from every page except for front page
- Added Spotify playlists back! Responsive sizing is what made the footer cover them, so now they fit beautifully!

### 8/8/2018

- Added navbar-test and navbar-follow, which will eventually replace my Bootstrap navbar
- Began working on Bootstrap replacements by commenting out link tag and adding classes for things like containers and rows
- Added script tag for Google data
- Changed most vertical spacing to rem for better control
- New navbar is a go!
  - Favicon in top left
  - Navigation pill in top right
  - Updated mobile navbar to match
  - Notes:
    - Removed follow dropdown and moved social links to contact page, may add it back later but I need to learn more
    - May change favicon to transparent background or an actual HTML element so that I can animate wavy underline
    - I want to add some fancy animations
- Enhanced contact page
  - Social links (Got booted from navbar)
  - Email is now a button
    - Justification: It's an emphasized action, click to send me an email
- Made some things async, still don't have the greatest grasp of its effects but it should help performance a little at the moment
- Eliminated some unnecesary JavaScript

### 8/7/2018

- Commented out Spotify playlists, may come back to them but I need to polish them up first
- Added underline theme around website
  - NEW: a-anim-zigzag/a-anim-zigzag-light
    - So far just on navbar links, need to work on positioning before I can add them elsewhere
  - NEW: Front title with animated underline, secondary titles with hover animated underline
    - Need to redraw underline as SVG, currently using .png from Outline blown up and recolored
- Changed navbar image, social icon was too detailed to register as anything but a blob at that size
- Added media queries, I am currently committing a web dev sin by targeting specific devices, but I am not skilled enough yet to understand exactly why my current queries are not working
- Changed Personal Website portfolio link to About folder on Google Drive with Design Guidelines presentation, changelog is now a description link
- Started working on new navbar, favicon in top left, follow in top right, scroll links either across the top, floated to right of favicon, or below favicon

### 8/6/2018

- More mobile adjustments
- Front title change to image
- Updated favicons
  - App icons
- Added meta tags
  - Twitter
  - Facebook
- Added Spotify playlists, unsure if I will keep them

### 8/5/2018

- Fixed mobile issues with Bootstrap grid items
- Worked on using my own grid for more control over responsiveness
- Added image expand to secondary titles

### 8/2/2018

- Added portfolio subtitles
- Added personal website to portfolio section

### 8/1/2018

- Working on resume section content
  - Added skills section
  - Added experience section
  - Added education section
- Excluded about page and contact page from JS page sizing
- Sized contact page to fit footer
- Added justify-content-center to rows finally (whoops!)
- Added hover effects to some elements
- Adjusted scroll effects
  - Now only classes
  - Added scroll change to dropdown menu
    - Check out the transitions!!!
- Added box-shadow to navbar
- Added THE MOST BEAUTIFUL BUTTONS EVER
  - Still trying to get radial gradient to follow cursor though
- Added EGR 103 presentation

### 7/31/2018

- Refactored JavaScript to use more jQuery
- Put position checking inside function so I can also call it when page reloads
- Animated dropdowns
- Animated dropdown carets
- Animated top button hover
- Altered top gradient to be radial
- Added documentation to CSS for organization
- Working on reactive spacing using JS

### 7/30/2018

- Added footer link to changelog :)
- Added footer-mobile and drop-up menu
- Customized dropdown carets
- Added navbar scroll transition with link underlines and borders changing
- Started working on coloring dropdown when it is on top of text

### 7/27/2018

- Hosted at justenwithane.com with HTTPS from CloudFront
- Wrote media queries for mobile
  - Change font size
  - Change title size
  - Switch to simple gradient background
- Added navbar-mobile
- Added favicon to navbar with animated border
- Added JS to hide top arrow
- Made navbar sticky and added transparent background with blur for browsers with backdrop-filter support
- Added a-anim-light for gradient animated link underlines over dark backrgounds
- Added pictures to section headings
- Worked on portfolio grid
- Fixed top button spacing
- Added spans to fix link underline spacing on dropdown toggle and dropdown items

### 7/26/2018

- Changed font
- Changed animated gradient
- Added Bootstrap grid to portfolio section
- Translated font sizes, margins, padding, and shadows into rem's and %
- Added footer with links to CSS and JS files
- Started work with media queries
- Changed top button to arrow

### 7/26/2018

- Changed font
- Changed animated gradient
- Added Bootstrap grid to portfolio section
- Translated font sizes, margins, padding, and shadows into rem's and %
- Added footer with links to CSS and JS files
- Started work with media queries
- Changed top button to arrow

### 7/24/2018

- Replaced placeholder text
- Added links to CPS 150 assignments, writing assignments, and web apps

### 7/23/2018

- Hosted site in S3 bucket
