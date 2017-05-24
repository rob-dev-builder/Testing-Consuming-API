import React from 'react'
import { getYoda } from '../../api'

class YodaResponse extends React.Component {
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
        <p>{this.state.yoda}</p>
      </div>
    )
  }
}

export default YodaResponse
