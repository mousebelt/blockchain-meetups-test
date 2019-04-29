import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Router } from '@reach/router';
import { Search, Home, NotFound } from '../';
// import { Header, Footer, EventPage, Detail } from '../../components';

class App extends Component {
	render() {
		return (
			<div className="app">
				{/* <Router>
					<Search path="/" />
					<Home path="/home">
						<Header />
						<EventPage path="/" />
						<Detail path="/events:eventId" />
						<Footer />
					</Home>
				</Router> */}
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
