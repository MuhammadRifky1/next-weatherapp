import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Examples from './components/examples'

class Counter extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <Examples />
  }
}
const mapDispatchToProps = { startClock }
export default connect(
  null,
  mapDispatchToProps
)(Counter)
