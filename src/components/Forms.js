import React, { Component } from 'react'
// "react-scripts start"
class Forms extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username:'',
       Comments:'',
       topic:'react'
    }
  }
  handleUsernameChange=(event)=>{
    this.setState({
        username:event.target.value
    })

  }
  handleCommentsChange=(event)=>{
    this.setState({
        Comments:event.target.value
    })
  }
  handleTopicChange=(event)=>{
    this.setState({
        topic:event.target.value
    })
  }
  handleSubmit=(event)=>{
    alert(`${this.state.username} ${this.state.Comments} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    // const {username,Comments,topic}=this.state
    // Using this line helps to remove this.state from every place...
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username:  </label>
        <input  type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
      </div>
      <div>
        <hr/>
        <label>Comments:  </label>
        <textarea value={this.state.Comments} onChange={this.handleCommentsChange}></textarea>
      </div>
      <div>
        <label>Topic:     </label>
        <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
      </div>
      <button  type='submit'>Submit</button>
      </form>
    )
  }
}

export default Forms
