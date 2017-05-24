import React from 'react'
import { getYoda } from '../../api'

import YodaResponse from './yodaResponse'

class InputForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('A text was submitted: ' + this.state.value)
    event.preventDefault()
    // const MessageFromUser = this.state.value
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
         <p><YodaResponse MessageToBeTranslated={this.state.value}/></p>
         {/* <p><YodaResponse MessageToBeTranslated={'This is some value'}/></p> */}
      </div>
    )
  }
}

export default InputForm
