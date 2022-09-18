// Forwarding ref demo...
import React from 'react'

// function FRInput() {
//   return (
//     <div>
//         FRInput
//         <input type="text"/>
//     </div>
//   )
// }

const FRInput=React.forwardRef((props,ref)=>{
    return ( <div>
              FRInput
              <input type="text" ref={ref}/>
            </div>
    )
})
export default FRInput