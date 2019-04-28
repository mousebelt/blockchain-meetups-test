import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Header, Content, Footer } from '../../components';
import * as productActions from '../../actions/product';
import { connect } from 'react-redux';

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

export default connect(
	(state) => ({
		products: state.product.products
	}),
	(dispatch) => ({
		actions: bindActionCreators(productActions, dispatch)
	})
)(Home);
