import React, { Component,useState,useEffect } from 'react'

class HookIntervalCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>HookIntervalCounter<hr/>
      <h1>{this.state.count}</h1><hr/>
      <HookIntervalCounter2/>
      </div>
    )
  }
}

export default HookIntervalCounter

export function HookIntervalCounter2() {
    const [count,setCount]=useState(0)
    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[]) 
    // either use [count] for dependancy array in upper line or add prevCount in setCount as 
    // setCount(prevCount=>prevCount+1) with empty dependancy array as written ...
    //otherwise rendering will not be done ...
  return (
    <div>HookIntervalCounter
        <hr/>
        {count}<hr/>
    </div>
  )
}

// Final thing to note that if we want to call a function inside HookIntervalCounter2 
// i.d. inside hooks ,define that function inside that hook function and add that as dependancy...
// Like function dosomething(){
// console.log(someProp)
// }
// dosomething() ->call inside hook function
// ,[someProp] -> using it as a dependancy...