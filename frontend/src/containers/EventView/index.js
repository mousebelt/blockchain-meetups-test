import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EventView.scss'
import BackButton from 'assets/images/backbutton.png'
import EventHeader from 'assets/images/eventheader.png'
import LocationImg from 'assets/images/location.png'

class EventView extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="event-view">
        <div className="event-view-back">
          <Link to="/sanfrancisco"><img src={BackButton} alt="Back" /></Link>
        </div>
        <img src={EventHeader} alt="Event Header" className="event-view-header" />
        <div className="event-view-body">
          <h1>Blockchain Couples Meeting</h1>
          <h2>May 1st, 2019 - 1:23pm</h2>
          <div className="event-view-body__padding">
            <span><img src={LocationImg} alt="Location" /></span><span className="event-view-body__location">  Bitcoin Center, San Francisco, CA</span>
          </div>
          <div className="event-view-body__padding">
            Welcome to the meetup for blockchain couples! This event is hosted by MouseBelt in San Francisco.
          </div>
          <div className="event-view-body__padding">
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="event-view-body__padding">
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="event-view-body__padding">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
    )
  }
}

export default EventView;