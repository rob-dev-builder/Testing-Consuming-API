import React from 'react'
// import { getYoda } from '../../api'
import InputForm from './InputForm'

class App extends React.Component {

  render () {
    return (
      <div>
        <h1>Yoda Speak</h1>
        <p>Enter something to be yodified</p>
        <InputForm />
      </div>
    )
  }
}

export default App
