import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		///
		console.log(this.props.EventsReducer);
		//////
		let eventId = this.props.match.params.eventId;
		let items = this.props.EventsReducer.filter((event) => event.id === eventId);
		let item = items[0];
		console.log(item);
		return (
			<div className="event-view">
				<div className="event-view-back">
					<Link to="/home">
						<img src="/images/arrow-back.png" alt="Back" />
					</Link>
				</div>
				<img src={'/images/event-image.png'} alt="Event Header" className="event-view-header" />
				<div className="event-view-body">
					<h1>{item.title}</h1>
					<h2>May 1st, 2019 - 1:23pm</h2>
					<div className="event-view-body__padding">
						<span>
							<i className="material-icons">&#xe0c8;</i>
							{/* <img src={'/images/result.png'} alt="result" /> */}
						</span>
						<span className="event-view-body__events"> Bitcoin Center, San Francisco, CA</span>
					</div>
					<div className="event-view-body__padding">
						Welcome to the meetup for blockchain couples! This event is hosted by MouseBelt in San
						Francisco.
					</div>
					<div className="event-view-body__padding">
						<h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
						{item.titleDesc}{' '}
					</div>
					<div className="event-view-body__padding">
						<h4>Vestibulum a nunc turpis.</h4>
						{item.content}
					</div>
					<div className="event-view-body__padding">{item.content}</div>
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
const mapStateToProps = ({ EventsReducer }) => ({
	EventsReducer
});

export default connect(mapStateToProps)(Detail);
// export default Detail;
