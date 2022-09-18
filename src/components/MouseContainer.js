import React,{useState} from 'react'
import MouseMove from './MouseMove'

function MouseContainer() {
    const [display,setDisplay]=useState(true)
  return (
    <div>MouseContainer<hr/>
    <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
    {display && <MouseMove/>}
    </div>
  )
}

export default MouseContainer