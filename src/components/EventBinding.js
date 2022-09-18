import React, { Component } from 'react'

class EventBinding extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message:"HelloHi"
    }
    //    {/*Binding in the class constructor -> Best Method*/}

    
    //Approach 3->this.clickHandler=this.clickHandler.bind(this)
}

  
//   clickHandler(){
//     this.setState({
//         message:"Goodbuy"
//     })
//     console.log(this)
//   }


//Approach 4-> Array Function In ClickHandler
  clickHandler=()=>{
    this.setState({
        message:"Goodbuy"
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*Approach 1-><button onClick={this.clickHandler.bind(this)}>EventBindingClick</button>*/}
        {/*Approach 2-><button onClick={()=>this.clickHandler()}>EventBindingClick</button>*/}
        <button onClick={this.clickHandler}>EventBindingClick</button>
      </div>
    )
  }
}
export default EventBinding