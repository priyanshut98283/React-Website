import React,{useState} from 'react'

function Hook1Counter() {
    const [count,setCount]=useState(0)
  return (
    <div>Hook1Counter<hr/>
        <button onClick={()=>setCount(count+1)}><h1>Clicked {count} times</h1></button><hr/>
        <Hook2Counter/>
        <Hook3Counter/>
        <Hook4Counter/>
    </div>
  )
}

export default Hook1Counter

// UseState with variable...
export function Hook2Counter() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div>Hook2Counter
        <hr/>
        Count {count} times <hr/>
        <button onClick={()=>setCount(initialCount)}><h1>Reset</h1></button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}><h1>Increment</h1></button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}><h1>Decrement</h1></button>
        <button onClick={incrementFive}><h1>Increment 5</h1></button><hr/>
    </div>
  )
}

// UseState with Objects...
export function Hook3Counter() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>Hook3Counter
        <form>
            {/* Inside setstate({...name})->this spread operator is used beacause without it
            if we type firstname ,lastname is removed from object and vice versa
            but in class component object values merged automatic but in hooks we have to
            do this manually with help of spread opertator... copy all properties
            of object and then append every new object...*/}
            <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
            <h2>Your FirstName is : {name.firstName}</h2>
            <h2>Your LastName is : {name.lastName}</h2>
            <h2>{JSON.stringify(name)}<hr/></h2>
        </form>
    </div>
  )
}

// UseState with arrays...

function Hook4Counter() {
    const [items,setItems]=useState([])
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>Hook4Counter<hr/>
        <button onClick={addItem}>Add a Number</button>
        <ul>
            {
                items.map(item=>(
                    <li key={item.id}>{item.value}
                    <hr/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

