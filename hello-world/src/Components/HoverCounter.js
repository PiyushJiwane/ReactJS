import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent';

class HoverCounter extends Component {
    render() {
        const {count, incrementCounter}=this.props;
        return (
            <div>
                <h3 onMouseOver={incrementCounter}>Mouse Hover {count} times</h3>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
