import React, { Component } from 'react'

class RegularComponentEx extends Component {
    render() {
        console.log("--------------RegularComponent----------------");
        return (
            <div>
                <p>Regular Component - {this.props.msg}</p>
            </div>
        )
    }
}

export default RegularComponentEx
