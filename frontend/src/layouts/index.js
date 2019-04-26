import React from 'react'
import PropTypes from 'prop-types'
import Header from 'containers/Header'
import Footer from 'containers/Footer'

const Default = props => {
  const { children } = props

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired
}

export default Default