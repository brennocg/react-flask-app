import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ExpoCell from 'app/components/expo-cell'
import Footer from 'app/components/footer'
import { FlexChild, FlexGrid } from 'app/components/flex-grid'

export default class MainScreenRenderer extends Component {
  render() {
    return (
      <div >
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
