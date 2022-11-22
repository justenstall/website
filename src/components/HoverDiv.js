import styled from 'styled-components'

export const HoverDiv = styled.div`
	box-shadow: 0rem .3rem 2rem rgba(0,0,0,.8);
	-webkit-transition: all 0.3s ease-out;
	transition: all 0.3s ease-out;
	
	&:hover {
		box-shadow: 0rem .3rem 2.5rem rgba(0,0,0,.6);
		-webkit-transform: scale(1.01);
		transform: scale(1.01);
	}
`