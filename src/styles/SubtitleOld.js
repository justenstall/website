import React from 'react';

export class Subtitle extends React.Component {
	render() {
		return <h3 className="subtitle">{this.props.text}</h3>
	}
}