import React,{useState,useMemo} from 'react'

function CounterMemo() {
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo, setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    
    const isEven=useMemo(()=>{
        // let i=0
        // while(i<2000000000)i++
        return counterOne%2===0
    },[counterOne])
  return (
    <div>CounterMemo
        <hr/>
        <div>
            <div><h5>Below Count Functions will work Slow due to high work of big loop ,shown for complex tasks...</h5></div>
            <div><h5>But second count work fast due to use of [useMemo] that stops unnecessary rendering and uses cached data</h5></div>
            <div><h5>The loop code is commented for faster page load in CounterMemo file.Uncomment that to see slow work of count function.</h5></div>
            <button onClick={incrementOne}>Count One- {counterOne}</button>
            <span>{isEven?'Even':'Odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Count Two- {counterTwo}</button><hr/>
        </div>
    </div>
  )
}

export default CounterMemo