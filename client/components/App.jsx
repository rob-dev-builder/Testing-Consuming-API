import React from 'react'
import { getYoda } from '../../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errMessage: null,
      yoda: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ errMessage: null})
    getYoda((err, res)=>{
      if (err) {
        this.setState({errMessage: err})
        return
      }
      this.setState({
        yoda: res
      },() => {
            console.log('my state', this.state)
    })
  }

// handleChange (event){
//   // console.log('this is state in handleChange function: ' + this.setState)
// }
  // componentDidMount () {
  //   this.setState({errMessage: null})
  //   getYoda((err, res) => {
  //     if (err) {
  //       this.setState({ errMessage: err })
  //       return
  //     }
  //     this.setState({
  //       yoda: res
  //     }, () => {
  //       console.log('my state', this.state)
  //     })
  //
  //   })
  // }

  render () {
  // console.log('Yodas message: '+ this.state.yoda)
    return (
      <div>
        <h1>Yoda Speak</h1>
        <p>Enter something to be yodified</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} />
          <button>Yodify</button>
        </form>
        <p>{this.state.yoda}</p>
      </div>
    )
  }
}

export default App
