import React from 'react'
import useCounter from './useCounter'

function CustomCounter() {
    const [count,increment,decrement,reset]=useCounter(10)
    useCounter(count)
  return (
    <div>CustomCounter Using Destructuring Array with initialCount value 10<hr/>
    <h2>Count-{count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button><hr/>
    </div>
  )
}

export default CustomCounter