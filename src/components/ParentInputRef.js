import React, { Component } from 'react'
import InputRef from './InputRef'

class ParentInputRef extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        ParentInputRef
        <InputRef ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentInputRef