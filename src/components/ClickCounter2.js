import React, { Component } from 'react'

class ClickCounter2 extends Component {
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>ClickCounter2 Using RenderProp Instead of HigherOrderComponents
        <hr/>
        <button onClick={incrementCount}><h1>Clicked {count} times</h1></button><hr/>
      </div>
    )
  }
}

export default ClickCounter2