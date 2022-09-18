import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        RefsDemo : {'\n'}
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

/*
This is first approach of creating refs.Now the second but old and less used approach is...
It is called callback refs...
Inside the constructor...
1) this.inputRef=null
2) this.setInputRef=element=>{
    this.inputRef=element
}
3) In <input type='' ref={this.setInputRef}

4) In componentDidMount(){
    if(this.inputRef){
        this.inputRef.focus()
    }
}
thst is if value exits then mount otherwise unmount...i.d. unfous...
*/
export default RefsDemo