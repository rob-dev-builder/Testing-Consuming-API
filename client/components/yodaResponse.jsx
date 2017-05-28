import React from 'react'
// import { getYoda } from '../../api'


class YodaResponse extends React.Component {
  constructor (props) {
    super(props)  
  }


  render () {
    // console.log(this.props)
    return (
      <div>
        Yoda translation:
        <p>{this.props.YodaTextFromParent}</p>
      </div>
    )
  }
}

export default YodaResponse
