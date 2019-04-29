import React, { Component } from 'react';
import { Header, Content, Footer } from '../../components';

class Home extends Component {
	constructor(props) {
		super(props);
		console.log(props.address);
	}

	render() {
		return (
			<div className="home">
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
}

export default Home;
