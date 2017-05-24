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
    getYoda(this.props.MessageToBeTranslated,(err, res) => {
    //  console.log(this.props.MessageToBeTranslated)
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
    // console.log(this.props)
    return (
      <div>
        Yoda translation:
        <p>{this.state.yoda}</p>
      </div>
    )
  }
}

export default YodaResponse
