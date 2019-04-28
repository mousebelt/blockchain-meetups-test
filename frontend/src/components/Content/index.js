import React, { Component } from 'react';
import { EventPage, Detail } from '../../components';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
// import { ProductList, Product } from '../';
class Content extends Component {
	render() {
		return (
			<div className="content">
				<Switch>
					<Route exact path="/:address" component={EventPage} />
					<Route exact path="/events/:eventId" component={Detail} />
				</Switch>
			</div>
		);
	}
}

export default Content;
