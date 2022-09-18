import React,{useReducer} from 'react'

const initialState = {
    firstCounter:0,
    secondCounter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-action.value}
        case 'increment2':
            return {...state,secondCounter:state.secondCounter+action.value}
        case 'decrement2':
            return {...state,secondCounter:state.secondCounter-action.value}
        case 'reset':
            return initialState
        default:return state
    }
}

function CounterTwo() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
    <div>FirstCounter Count(Objects)-{count.firstCounter}</div><hr/>
    <div>SecondCounter Count(Objects)-{count.secondCounter}</div><hr/>
    <button onClick={()=>dispatch({type:'increment',value:1})}><h3>Increment</h3></button>
    <button onClick={()=>dispatch({type:'decrement',value:1})}><h3>Decrement</h3></button>
    <button onClick={()=>dispatch({type:'increment',value:5})}><h3>Increment 5</h3></button>
    <button onClick={()=>dispatch({type:'decrement',value:5})}><h3>Decrement 5</h3></button>
    <button onClick={()=>dispatch({type:'reset'})}><h3>Reset</h3></button><hr/>
    <div>
    <button onClick={()=>dispatch({type:'increment2',value:1})}><h3>Increment Counter 2</h3></button>
    <button onClick={()=>dispatch({type:'decrement2',value:1})}><h3>Decrement Counter 2</h3></button><hr/>
    </div>
    </div>
  )
}

export default CounterTwo