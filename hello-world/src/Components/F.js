import React, { Component } from 'react'
import { UserConsumer } from './ContextComponent'

class F extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName)=>{
                        return <div>Hello, {userName}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default F
