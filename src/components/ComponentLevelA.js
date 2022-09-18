import React, { Component } from 'react'
import ComponentLevelB from './ComponentLevelB'

// Context Demo...

class ComponentLevelA extends Component {
  render() {
    return (
      <ComponentLevelB/>
    )
  }
}

export default ComponentLevelA

// Context Steps->
// Create The Context
// Provide a Context Value
// Consume the Context value