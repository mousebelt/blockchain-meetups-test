import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Search, Home, NotFound } from '../';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route exact path="/" component={Search} />
					<Route exact path="/:address" component={Home} />
					<Route exact path="/events/:eventId" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default App;
