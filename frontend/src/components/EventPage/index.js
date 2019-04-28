import React, { Component } from 'react';
import { EventList } from '../../components';
import './styles.css';
class EventPage extends Component {
	render() {
		return (
			<div className="location">
				<img className="location-header" src="/images/sanfransisco.png" alt="SAN FRANCISCO" />
				<div className="location-body">
					<div className="location-body-events">
						<div className="location-body-events-title">Discover these events near you:</div>
						<EventList />
					</div>
					<div className="location-body-events">
						<div className="location-body-events-title">All events:</div>
						<EventList />
					</div>
				</div>
			</div>
		);
	}
}

export default EventPage;
