// Instead of Higher Order Component ,We can implement Render Prop Method to Share Functionalities...
import React, { Component } from 'react'

class ClickRenderProp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
    incrementCount=()=>{
      this.setState(prevState =>{
          return {count:prevState.count+1}
      })
      }
  render() {
    return (
      <div><hr/>
        {/* {this.props.render(true)} */}
        {this.props.render(this.state.count,this.incrementCount)}
      </div>
    )
  }
}

export default ClickRenderProp


