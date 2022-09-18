import './myStyle.css'
import React from 'react'

function styleSheet(props) {
  let className=props.primary ? 'primary' : ''
  return (
    <div className={`${className} font-xl`}>
        <h1>Stylesheet</h1>
    </div>
  )
}
export default styleSheet
