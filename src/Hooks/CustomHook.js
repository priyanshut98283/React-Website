import React,{useState} from 'react'
import useDocumentTitle from './useDocumentTitle'

//If we will create another file CustomHook2.js we have to copy the code below in all files 
//i.d. duplication instead of reusing code ...so any file name start with use like useDocumentTitle
// becomes custom hook...
/*
    useEffect(()=>{
        document.title= `Count ${count}`
    },[count])
*/

function CustomHook() {
    const [count,setCount]=useState(0)
    useDocumentTitle(count)
  return (
    <div><h5>customHook Using Count Function From Custom Hook useDocumentTitle.js file and changing
        Document title...See in page tab text...😂</h5><hr/>
    <button onClick={()=>setCount(count+1)}><h3>Count-{count}</h3></button><hr/>
    </div>
  )
}

export default CustomHook