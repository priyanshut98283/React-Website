import React,{Component} from 'react'
/*
function Greet(){
    return <h1>Hello,Priyanshu Sir😀</h1>
};
export default Greet;
*/
class Greet extends Component {
    constructor(){
        super()
            this.state={
                message:"Welcome Visitor"
            }
    }
    generate(){
        this.setState({
            message:"Thank You For Subscribing😀"
        })
    }

    render(){
        return (
            <div>
                <h4>{this.state.message}</h4>
                <button onClick={()=>this.generate()}>Subscribe</button>
            </div>
            )

    }
}
export default Greet
/*
export const Greet=(props)=>{
    console.log(props)
    return (
    <div>
    <h1>Hello,{props.name}</h1>
    {props.children}
    </div>
    )
}
Destructuring Props and State in Functions And Class...
export const Greet=({name})=>{ ->Inside function call, destructuring in {name,...} from props
    or const {name}=props -> or this way destructuring...
    return (
    <div>
    <h1>Hello,{name}</h1>
    {props.children}
    </div>
    )
}
*/

// Synchronous and Asynchronous Console Log Statements...

//Increasing value of count...

/*
import React, { Component } from 'react'

export default class Greet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:"0"
      }
    }

    Increment(){
        
         this.setState({
             count:this.state.count+1
         },()=>{console.log("Callback value",this.state.count)})
        
       this.setState((prevState,props)=>({
        count:this.prevState+1
       }))
        console.log(this.state.count)
    }

    Incrementfive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

  render() {
    👍Destructuring here-> const {name,...}=this.props
    const {state1,state2}=this.state -> destructuring states...
    return (
        
        <div>
        <h4>{this.state.count}</h4>
        <button onClick={()=>this.Incrementfive()}>Subscribe</button>
    </div>
    )
  }
}
*/
