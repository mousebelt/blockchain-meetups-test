import React, { Component } from 'react';
import { Header, SearchInput } from '../../components';

import './styles.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleEnter = this.handleEnter.bind(this);
	}

	handleEnter() {
		// this.props.history.push('/sanfrancisco');
	}

	render() {
		return (
			<div className="search">
				<Header />
				<div className="search-body">
					<div>
						<img src="images/meetup.png" alt="logo" />
						<h2 className="search-body-title">Find blockchain meetups near you now</h2>
						<SearchInput value="" handleEnter={this.handleEnter} />
					</div>
				</div>
			</div>
		);
	}
}

// Search.propTypes = {};

export default Search;
