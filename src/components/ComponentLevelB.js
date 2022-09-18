import React, { Component } from 'react'
import ComponentLevelC from './ComponentLevelC'
import UserContext from './userContext'

class ComponentLevelB extends Component {
  render() {
    return (
        <div>
            Component E Context {this.context}
      <ComponentLevelC/>
      </div>
    )
  }
}

ComponentLevelB.contextType=UserContext
//Upper line is same if we put static contextType= UserContext in upper of ComponentLevelB Render Method...
//There is a limitation of Context it can be used once only although its simple...
// For other nested components to use props we have to use UserConsumer like we used in ComponentLevelC...

export default ComponentLevelB