import React, { PureComponent } from 'react'
import JssMainRenderer from 'app/screens/main/JssMainRenderer'


export default class MainScreen extends PureComponent {
  render() {
    return <JssMainRenderer {...this.props}/>
  }
}
