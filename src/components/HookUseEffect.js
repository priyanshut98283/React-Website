import React,{useState,useEffect} from 'react'

//Changing Document.title after every time the function renders using useEffect...

function HookUseEffect() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('useEffect-Updating Document Title')
        document.title=`You clicked ${count} times`
    },[count])
    //In upper line we passed ,[count] which is a second argument for useEffect which means
    // conditional run effects...i.d. when count value changes only then execute console.log
    // and document.title not every time we input anything inside <input></input> tag ...
  return (
    <div>HookUseEffect-See title changes after clicking in tab<hr/>
    <input type='text' value={name} onChange={e=>setName(e.target.value)}></input> :-
    <button onClick={()=>setCount(count+1)}>Clicked {count} times</button><hr/>
    </div>
  )
}

export default HookUseEffect