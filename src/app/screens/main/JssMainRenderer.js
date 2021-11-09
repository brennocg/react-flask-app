import injectSheet, { jss } from 'react-jss'
import MainScreenRenderer from 'MainScreenRenderer'

jss.setup({ insertionPoint: 'posui-css-insertion-point' })

const styles = ({
  MainContainer: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  link: {
    color: '#61dafb'
  }
})

export default injectSheet(styles)(MainScreenRenderer)
