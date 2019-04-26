import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Header.scss'
import BrandImg from 'assets/images/brand.png'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="header">
        <div className="header-brand">
          <Link to="/"><img src={BrandImg} alt="Brand"/></Link>
        </div>
        <div className="header-navbar">
          <ul className="header-navbar-navigation">
            <li><NavLink to="/seattle">Seattle</NavLink></li>
            <li><NavLink to="/sanjose">San Jose</NavLink></li>
            <li><NavLink to="/sanfrancisco">San Francisco</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

Header.propTypes = {

}

export default Header