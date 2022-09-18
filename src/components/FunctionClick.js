import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
  return (
    <div>
        {/* Inside onclick-clickHandler not Function call i.e. clickHandler() otherwise error will come
        same for class otherwise in console log infinite loop will run...
        */}
        <button onClick={clickHandler}>Event-handler-Click</button> 
    </div>
  )
}



export default FunctionClick
/*
import React, { Component } from 'react'

 class FunctionClick extends Component {

  clickHandler(){
    console.log("Clicked the Button")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>ClassClick</button>
      </div>
    )
  }
}
export default FunctionClick
*/
