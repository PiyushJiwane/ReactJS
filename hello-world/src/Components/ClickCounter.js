import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent';

class ClickCounter extends Component {
    render() {
        const {count, incrementCounter}=this.props;
        return (
            <div>
                <button onClick={incrementCounter}>Click {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
