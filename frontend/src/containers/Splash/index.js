import React, { Component } from 'react'
import './Splash.scss'
import Header from 'containers/Header'
import Logo from 'components/Logo'
import LogoImg from 'assets/images/logo.png'
import SearchInput from 'components/SearchInput'

class Splash extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }

    this.handleEnter = this.handleEnter.bind(this)
  }

  handleEnter () {
    this.props.history.push('/sanfrancisco')
  }

  render () {
    return (
      <div className="splash">
        <div className="splash__background"></div>
        <Header />
        <div className="splash-body">
          <div className="splash-body__center">
            <Logo src={LogoImg} />
            <h2 className="splash-body-title">Find blockchain meetups near you now</h2>
            <SearchInput 
              value=""
              handleEnter={this.handleEnter}
            />
          </div>
        </div>
      </div>
    )
  }
}

Splash.propTypes = {

}

export default Splash