import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>GreetPrent</button> 
        Passing Parameters now in next onclick handler...
        Previously We Passed Method as Props(Properties)
  */}
        <button onClick={()=>props.greetHandler('child')}>GreetParent</button>
    </div>
  )
}
