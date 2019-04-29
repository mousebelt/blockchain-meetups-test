import React, { Component } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
 
class CountryDropDown extends Component {
  constructor(props) {
    super(props)
 
    this.options = countryList().getData()
 
    this.state = {
      options: this.options,
      value: null,
    }
  }
 
  changeHandler = value => {
    this.setState({ value })
  }
 
  render() {
    return (
      <Select
        options={this.state.options}
        value={this.props.value}
        onChange={this.props.handleChange}
      />
    )
  }
}

export default CountryDropDown;