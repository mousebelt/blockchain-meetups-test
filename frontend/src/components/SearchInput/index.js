import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			if (this.state.value !== '') this.props.handleEnter();
		}
	}

	handleClick(e) {
		if (this.state.value !== '') this.props.handleEnter();
	}

	render() {
		return (
			<div className="search-input">
				<input
					type="text"
					className="search-input-text"
					value={this.state.value}
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

SearchInput.propTypes = {
	value: PropTypes.string
};

export default SearchInput;
