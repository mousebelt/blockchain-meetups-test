import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="event-view">
				<div className="event-view-back">
					<Link to="/home">
						<img src="/images/arrow-back.png" alt="Back" />
					</Link>
				</div>
				<img src={'/images/event-image.png'} alt="Event Header" className="event-view-header" />
				<div className="event-view-body">
					<h1>Blockchain Couples Meeting</h1>
					<h2>May 1st, 2019 - 1:23pm</h2>
					<div className="event-view-body__padding">
						<span>
							<i className="material-icons">&#xe0c8;</i>
							{/* <img src={'/images/location.png'} alt="Location" /> */}
						</span>
						<span className="event-view-body__location"> Bitcoin Center, San Francisco, CA</span>
					</div>
					<div className="event-view-body__padding">
						Welcome to the meetup for blockchain couples! This event is hosted by MouseBelt in San
						Francisco.
					</div>
					<div className="event-view-body__padding">
						<h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
						Donec accumsan risus cursus augue. In metus tortor, aliquet quis, commodo ut, pharetra vel,
						diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
						egestas. Morbi cursus est id est. Suspendisse potenti. Nulla mollis gravida nulla. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nulla id velit ut
						orci tempus viverra. Suspendisse ultricies est at elit. Cras sodales. Vivamus sed mauris. Sed
						volutpat dui quis erat. including versions of Lorem Ipsum.
					</div>
					<div className="event-view-body__padding">
						<h4>Vestibulum a nunc turpis.</h4>
						Donec accumsan risus cursus augue. In metus tortor, aliquet quis, commodo ut, pharetra vel,
						diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
						egestas. Morbi cursus est id est. Suspendisse potenti. Nulla mollis gravida nulla. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nulla id velit ut
						orci tempus viverra. Suspendisse ultricies est at elit. Cras sodales. Vivamus sed mauris. Sed
						volutpat dui quis erat. including versions of Lorem Ipsum.
					</div>
					<div className="event-view-body__padding">
						Donec accumsan risus cursus augue. In metus tortor, aliquet quis, commodo ut, pharetra vel,
						diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
						egestas. Morbi cursus est id est. Suspendisse potenti. Nulla mollis gravida nulla. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nulla id velit ut
						orci tempus viverra. Suspendisse ultricies est at elit. Cras sodales. Vivamus sed mauris. Sed
						volutpat dui quis erat. including versions of Lorem Ipsum.
					</div>
					<div className="event-view-body__padding">
						Contact the organizer:
						<p className="event-view-body-contact">test@email.com</p>
					</div>
					<div className="event-view-body__padding">
						<button className="event-view-body-button">REGISTER</button>
					</div>
				</div>
			</div>
		);
	}
}
export default Detail;
