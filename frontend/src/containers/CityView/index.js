import React, { Component } from 'react'
import './CityView.scss'
import CardContainer from 'containers/CardContainer'
import SanFrancisco from 'assets/images/sanfrancisco.png'

class CityView extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="city-view">
        <img src={SanFrancisco} alt="San Francisco" className="city-view-header" />
        <div className="city-view-body">
          <div className="city-view-body-events">
            <div className="city-view-body-events-title">Discover these events near you:</div>
            <CardContainer />
          </div>
          <div className="city-view-body-events city-view-body-events__all">
            <div className="city-view-body-events-title">All events:</div>
            <CardContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default CityView;