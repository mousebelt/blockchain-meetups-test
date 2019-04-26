import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Logo.scss'

class Logo extends Component {
  render () {
    return (
      <img className="logo" src={this.props.src} alt="Logo" />
    )
  }
}

Logo.propTypes = {
  src: PropTypes.string
}

export default Logo