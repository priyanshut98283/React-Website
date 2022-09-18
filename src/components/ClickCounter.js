import React, { Component } from 'react'

// Removing Duplicacy Of Code ...Higher Order Components...
//Using Same Code in Higher Order Component, to use it everywhere...

//👍 IN Place of UpdatedComponent we can use withCounter name...
// Original Component can be written as WrappedComponent...
// and NewComponent can be written as WithCounter...(Pascal Case of withCounter)...
// These are just naming conventions...

//Higher Order Component...
//In down we can also pass second or more argument like (OriginalComponent,IncrementNumber)...
// and then instead of prevState.count+1 -> we can write prevState.count+IncrementNumber...
// export default UpdatedComponent(ClickCounter,5) -> this way we pass IncrementNumber then 
// after clicking button 5,10,15 number will increment by multiple of 5...
export const UpdatedComponent=(OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
        incrementCount=()=>{
          this.setState(prevState =>{
              return {count:prevState.count+1}
          })
          }
        render(){
            return <OriginalComponent name='P.T.'
            count={this.state.count}
            incrementCount={this.incrementCount}
            {... this.props}
            //Upper line can be omitted here but if ClickCount class is in external file then
            // it is compulsory...Actually in name='P.T.' it sends this prop to UpdatedComponent
            // render not ClickComponent render ...
            />
        }
    }
    return NewComponent
}

//ClickCounter Component...
class ClickCounter extends Component {
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>ClickCounter <hr/>
        <button onClick={incrementCount}><h1>{this.props.name} Clicked {count} times</h1></button>
        <hr/>
        <HoverCounter/>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)



export class HoverCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
    incrementCount=()=>{
      this.setState(prevState =>{
          return {count:prevState.count+1}
      })
      }
  render() {
    const {count}=this.state
    return (
      <h2 onMouseOver={this.incrementCount}>{this.props.name} Hovered {count} times <hr/></h2>
    )
  }
}





