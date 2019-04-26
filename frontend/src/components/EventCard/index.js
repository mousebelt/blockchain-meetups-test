import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './EventCard.scss'

class EventCard extends Component {
  render () {
    return (
      <Link to={'events/' + this.props.id}>
        <div className="event-card">
          <div className="event-card-image">
            <img src={this.props.image} alt="Title" width="100%" />
          </div>
          <div className="event-card-attending">
            <div className="event-card-attending__overlay">
              <div className="event-card-attending__overlay-attending">Attending</div>
              <div className="event-card-attending__overlay-bubble">
                {this.props.attending}
              </div>
            </div>
          </div>
          <div className="event-card-title">
            {this.props.title}
          </div>
          <div className="event-card-title-desc">
            {this.props.titleDesc}
          </div>
          <div className="event-card-content">
            {this.props.content}
          </div>
          <div className="event-card-name">
            {this.props.name}
          </div>
        </div>
      </Link>
    )
  }
}

EventCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  attending: PropTypes.string,
  title: PropTypes.string,
  titleDesc: PropTypes.string,
  content: PropTypes.string,
  name: PropTypes.string
}

export default EventCard