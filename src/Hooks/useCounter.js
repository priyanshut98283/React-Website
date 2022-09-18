import {useState} from 'react'

function useCounter(initialCounter=0) {
//   return (
//     <div>useCounter</div>
//   )
const [count,setCount]=useState(initialCounter)
    const increment=()=>{
        setCount(prevCount=>prevCount+1)
    }
    const decrement=()=>{
        setCount(prevCount=>prevCount-1)
    }
    const reset=()=>{
        setCount(0)
    }
    return [count,increment,decrement,reset]
}

export default useCounter