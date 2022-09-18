import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentA() {
    const countContext=useContext(CountContext)
  return (
    <div>
    Component A- {countContext.countState}  -
    <button onClick={()=>countContext.countDispatch('increment')}><h3>Increment</h3></button>
    <button onClick={()=>countContext.countDispatch('decrement')}><h3>Decrement</h3></button>
    <button onClick={()=>countContext.countDispatch('reset')}><h3>Reset</h3></button><hr/> 
    </div>
  )
}

export default ComponentA