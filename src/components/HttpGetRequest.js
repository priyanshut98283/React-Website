import React, { Component } from 'react'
import axios from 'axios'
// We are using axios library for get , post request. Instead of this we can also use fetch api...
//We are also using https://jsonplaceholder.typicode.com as a fake online rest api for testing purpose...

class HttpGetRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMsg:''
         
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errorMsg:'Error Retriving data'
            })
        })
    }
  render() {
    const {posts,errorMsg}=this.state
    return (
      <div>...HttpGetRequest...
        List of posts are in Console...<hr/>
        {
            posts.length?
            posts.map(post=><div key={post.id}>{post.name}<hr/></div>) :
            null
        }
        {
            errorMsg? <div>{errorMsg}</div> : null
        }
      </div>
    )
  }
}

export default HttpGetRequest