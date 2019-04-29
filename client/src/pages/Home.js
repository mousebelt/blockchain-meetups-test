import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData, searchData } from '../redux/ducks/events'
import EventCard from '../components/EventCard';
import { Container, Button } from 'reactstrap';
import CountryDropDown from '../components/CountryDropDown';


class Home extends Component {
  state = {
    country: {value: ''},
    city: ''
  }

  changeCountry = (country) => {
    this.setState({ country })
  }

  componentDidMount() {
    this.props.getData()
  }
  render() {
    const { events } = this.props
    return (

      <Container >
        <div className="row m-5">
          <div style={{ width: 200 }}>
            <CountryDropDown
              handleChange={this.changeCountry}
              value={this.state.value}

            />
          </div>
          <input
            type='text'
            value={this.state.value}
            onChange={(e) => this.setState({ city: e.target.value })}
            placeholder="City"
          />
          <Button
            onClick={() => { this.props.searchData({ country: this.state.country.value.toLowerCase(), city: this.state.city }) }}
          >Search</Button>
        </div>
        <div
          className="row justify-content-between"
          style={{ width: '100%' }}

        >
          <div xs='4'>
            Image
            </div>
          <div>
            Name
            </div>
          <div>
            Group
            </div>
          <div>
            view on meetup
            </div>
        </div>
        {
          events.map(elem => <EventCard elem={elem} key={elem.id} />)
        }
      </Container>

    )
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = {
  getData,
  searchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)