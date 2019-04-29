import React, { Component } from 'react';
import changeLocation from '../../actions/changeLocation.js';
import getEvents from '../../actions/getEvents.js';
import { connect } from 'react-redux';

import './styles.css';

class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: props.location === undefined ? '' : props.location
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.props.handleEnter('');
	}
	handleChange(e) {
		this.setState({
			location: e.target.value
		});
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			if (this.state.value !== '') this.props.handleEnter(this.state.location);
		}
	}

	handleClick(e) {
		if (this.state.value !== '') this.props.handleEnter(this.state.location);
	}

	render() {
		return (
			<div className="search-input">
				<input
					type="text"
					className="search-input-text"
					value={this.state.location}
					placeholder="Type something"
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<button className="search-input-button" onClick={this.handleClick}>
					<img src="images/logo.png" className="search-input-button__right" alt="Search" />
				</button>
			</div>
		);
	}
}

const mapStateToProps = ({ location }) => ({
	location
});

const mapDispatchToProps = (dispatch) => ({
	handleEnter(_location = '') {
		console.log(_location);
		dispatch(changeLocation(_location));
		dispatch(getEvents());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
// export default SearchInput;
