import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class EventItem extends Component {
	render() {
		const { id, image, attending, title, titleDesc, content, name } = this.props;
		return (
			<Link to={'events/' + id}>
				<div className="event-card">
					<div className="event-card-image">
						<img src={image} alt="Title" width="100%" />
					</div>
					<div className="event-card-attending">
						<div className="event-card-attending__overlay">
							<div className="event-card-attending__overlay-attending">Attending</div>
							<div className="event-card-attending__overlay-bubble">{attending}</div>
						</div>
					</div>
					<div className="event-card-title">{title}</div>
					<div className="event-card-title-desc">{titleDesc}</div>
					<div className="event-card-content">{content}</div>
					<div className="event-card-name">{name}</div>
				</div>
			</Link>
		);
	}
}

export default EventItem;
