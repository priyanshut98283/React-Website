import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentLevelC extends Component {
  render() {
    return (
        <div>
            <h1>ComponentLevelC</h1><hr/>
            <UserConsumer>
                {
                    (username)=>{
                        return <h2>Hello {username} <hr/></h2>
                    }
                }
            </UserConsumer>
        </div>
    )
  }
}

export default ComponentLevelC