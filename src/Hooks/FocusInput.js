import React,{useEffect,useRef} from 'react'

function FocusInput() {
    const inputRef=useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    },[])
  return (
    <div>FocusInput<hr/>
    <input type='text' ref={inputRef}></input><hr/>
    </div>
  )
}

export default FocusInput