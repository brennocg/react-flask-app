import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import MainScreen from 'app/screens/main'

class App extends PureComponent {

  render() {
    return (
        <div>
            <Helmet>
              <title>Example Base</title>
            </Helmet>
            <MainScreen />
        </div>
    )
  }
}

export default App