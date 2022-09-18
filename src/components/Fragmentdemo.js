import React from 'react'

function Fragmentdemo() {
  return (
    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This Describes The Fragment Demo Component</p>
        {table()}
    </React.Fragment>
  )
}

export default Fragmentdemo


export function table() {
  return (
    <table>
        <tbody>
            <tr>
                {column()}
            </tr>
        </tbody>
    </table>
  )
}

export function column() {
    // const items=[]
    return (
      <React.Fragment>
        {/* 
        {
            items.map(
                item=>(
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                )
            )
        }
Instead of React.Fragment we can use empty tags i.e. <></> but they Key property can't be used
        */}
        <td>Name</td>
        <td>P.T.</td>
      </React.Fragment>
    )
  }