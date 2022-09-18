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

function CounterThree() {
    const [count,dispatch]=useReducer(reducer,initialState)
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <div>Using Multiple useReducers for count...Count-{count}<hr/>
    <button onClick={()=>dispatch('increment')}><h3>Increment</h3></button>
    <button onClick={()=>dispatch('decrement')}><h3>Decrement</h3></button>
    <button onClick={()=>dispatch('reset')}><h3>Reset</h3></button><hr/>
    <div>
    <div> CountTwo-{countTwo}<hr/></div>
    <button onClick={()=>dispatchTwo('increment')}><h3>Increment</h3></button>
    <button onClick={()=>dispatchTwo('decrement')}><h3>Decrement</h3></button>
    <button onClick={()=>dispatchTwo('reset')}><h3>Reset</h3></button><hr/>
    </div>
    </div>
  )
}

export default CounterThree