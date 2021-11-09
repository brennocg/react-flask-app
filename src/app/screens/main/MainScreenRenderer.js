import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default class MainScreenRenderer extends Component {
  render() {
    return (
      <div >
        <Helmet>
          <title>Example Base</title>
        </Helmet>
        <header >

          ... no changes in this part ...

          <p>The current time is .</p>
        </header>
      </div>
    )
  }
}

MainScreenRenderer.propTypes = {
}

MainScreenRenderer.defaultProps = {
}
