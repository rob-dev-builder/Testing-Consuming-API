import React from 'react'

    class ReturnSomeData extends React.Component {
      constructor (props) {
        super(props)
      }

      render () {
        console.log(this.props)
         this.props.callbackFromParent('testing from Component')
        return (
          <div>
            {/* <p>Inside props: {this}</p> */}
          </div>
        )
      }
    }

export default ReturnSomeData
