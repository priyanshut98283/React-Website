// import React, { Component } from 'react'
import React, { PureComponent} from 'react'
import MemoComp from './MemoComp'

// import PureComp from './PureComp'
// import RegComp from './RegComp'

/*
In ParentComp extends PureComponent , console runs only 1 time as purecomponent stops
executing when values are same as name is same P.T. and never changing but in case of
ParentComp extends Component ,console.log will trigger every 2 seconds as it does not
care about same value...
Howevor, PureComponents only work with class components not function components...
For that we have React.memo memo is for functional components...
*/
// class ParentComp extends Component {
class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
      
        this.state = {
           name:'P.T.'
        }
      }
      componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'P.T.'
            })
        },2000)
      }
  render() {
    console.log('*****Parent Component*****')
    return (
      <div>
        <hr></hr>
        ParentComp
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}/>
        <hr></hr>
      </div>
    )
  }
}

export default ParentComp