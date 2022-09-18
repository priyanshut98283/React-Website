import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,ChannelContext} from '../App'

function ComponentE() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
  return (
    <div>ComponentE<hr/>
    <div>
        Consuming values in this Component Through Hook userContext here ...👍
    {user}-{channel}
    </div><hr/>
        <ComponentF/>
    </div>
  )
}

export default ComponentE