import React from 'react'
// import { getYoda } from '../../api'
import YodaResponse from './yodaResponse'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errMessage: null,
      yoda: ''
    }
  }

  componentDidMount () {
    this.setState({errMessage: null})
    getYoda("I like to eat ice cream",(err, res) => {
      if (err) {
        this.setState({ errMessage: err })
        return
      }
      this.setState({
        yoda: res
      }, () => {
        console.log('my state', this.state)
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Yoda Speak</h1>
        <p>Enter something to be yodified</p>
        <form>
          <input type="text"/>
          <button>Yodify</button>
        </form>
        <p>Yoda translation:</p>
        <p><YodaResponse /></p>
      </div>
    )
  }
}

export default App
