import React, { Component,useState,useEffect} from 'react'

class MouseMove extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition=e=>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMousePosition)
    }
    // Unmount code for not showing console log after removing element...
  render() {
    return (
      <div>MouseMove Using Class Lifecycle Methods<hr/>
      X-{this.state.x} Y-{this.state.y}
      <hr/>
      <MouseMove2/>
      </div>
    )
  }
}

export default MouseMove

// The Same above code written using hooks...

export function MouseMove2() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition2=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition2)
        return()=>{
            console.log('Component Unmounting Code')
            window.removeEventListener('mousemove',logMousePosition2)
        }
        //This return function is for Unmount code used in class component for removing event 
        //listener so that no console.log will be shown after removing element ...
    },[])
    //This empty array denotes that useState only once i.d. render only once in every change
    // without it, on mouse move there can be 100+ calls on each movement that we dont want 
    // also we dont have any dependancy like count last time so simply left it empty...
  return (
    <div>MouseMove2 Using Hooks useEffect
        <hr/>
        Hooks X-{x} Y-{y}
        <hr/>        
    </div>
  )
}

