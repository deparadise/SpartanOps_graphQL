import React, { Component } from 'react';
// TODO: css TBD

class TesterConsoleWake extends Component {
	handleClick = (event) => {
		let {
			props: { wake, toggleConsoleWake }
		} = this;
		console.log('>> WAKE CLIKED! >>', this.props);
		console.log('>> CLICK READING STATE:', wake);

		toggleConsoleWake(wake);
	};

	render() {
		let displayConsoleFlag = this.props.wake ? 'UP' : 'DOWN';
		return (
			<div>
				{displayConsoleFlag}
				<button onClick={this.handleClick}>WAKE UP</button>
			</div>
		);
	}
}

export default TesterConsoleWake;
