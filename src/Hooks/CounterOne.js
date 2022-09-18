import React,{useReducer} from 'react'

const initialState = 0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:return state
    }
}

function CounterOne() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>CounterOne Count-{count}<hr/>
    <button onClick={()=>dispatch('increment')}><h3>Increment</h3></button>
    <button onClick={()=>dispatch('decrement')}><h3>Decrement</h3></button>
    <button onClick={()=>dispatch('reset')}><h3>Reset</h3></button><hr/>
    </div>
  )
}

export default CounterOne