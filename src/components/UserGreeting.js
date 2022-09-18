import React, { Component } from 'react'
// Conditional Rendering...
class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  render() {
    // Approach 1->(if-else)
    if(this.state.isLoggedIn){
        return <div>
            Welcome P.T.
        </div>
    }
    else{
    return <div>Welcome Guest</div>
    //Approach 2->(variable if-else)

    /*
    let message
    if(this.state.isLoggedIn){
        message=<div>Welcome P.T.</div>
    else{
        message=<div>Welcome Guest</div>
    And in Render() Return -> <div>Welcome{message}</div>
    }*/

    //Approach 3->(Ternary Operator)

    /*
    this.state.isLoggedIn ?
    <div> Welcome P.T.</div> :
    <div> Welcome Guest</div>
    */

    //Approach 4->(Short circuit->if left side true,right side evaluated otherwise nothing printed)

    /*
    inside render-> return this.state.isLoggedIn && <div> Welcome P.T. </div>
    */

    }
    //   <div>
    //     <div>Welcome P.T.</div>
    //     <div>Welcome Guest</div>
    //   </div>
    
    }
  }


export default UserGreeting