import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,ChannelContext} from '../Components/ComponentC'

function ComponentE() {
    const name=useContext(UserContext)
    const channel=useContext(ChannelContext);
    return (
        <div>
            {name} and {channel}
        </div>
    )
}

export default ComponentE
