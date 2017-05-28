import React from 'react'
import { getYoda } from '../../api'

import InputForm from './InputForm'
import YodaResponse from './YodaResponse'
import ReturnSomeData from './ReturnSomeData'

class App extends React.Component {

  render () {

var SomeYodaText = ""

   let myCallBack = function (dataFromChild) {
       console.log(dataFromChild)

       getYoda(dataFromChild,(err,result)=>{
       console.log(result)
     })
 }

    return (
      <div>
        <h1>Yoda Speak</h1>
        <p>Enter something to be yodified</p>
        {/* <ReturnSomeData callbackFromParent={myCallBack}/> */}
        <InputForm callbackFromParent={myCallBack}/>
        <YodaResponse YodaTextFromParent={SomeYodaText}/>
      </div>
    )
  }
}

export default App
