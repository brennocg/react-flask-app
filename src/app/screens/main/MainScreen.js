import React, { PureComponent } from 'react'
import JssMainRenderer from 'JssMainRenderer'


export default class MainScreen extends PureComponent {
  render() {
    return <JssMainRenderer {...this.props}/>
  }
}
