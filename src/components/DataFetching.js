import React,{useState,useEffect}from 'react'
import axios from 'axios'

//Instead of arrays we are fetching data using post not posts that means instead of array of names 
// we are fetching name by writing id of that name...

function DataFetching() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    const handleClick=()=>{
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
    // Use empty array in upper line otherwise console.log will run infinite times...
  return (
    <div>DataFetching using Hooks...<hr/>
    Type any Id to see Name of User...
    <input type='text' value={id} onChange={e=>{setId(e.target.value)}}/><hr/>
    <button type='button' onClick={handleClick}><h3>Fetch Data</h3></button>
    {/* <ul>
        {
            posts.map(post=>(
            <li key={post.id}>{post.name}</li>
            ))
        }
    </ul><hr/> */}
    <div>{post.name}</div><hr/>
    </div>
  )
}

export default DataFetching