import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)

        this.inputFocus=React.createRef();
    }

    clickHandler=()=>{
        this.inputFocus.current.focus();
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputFocus}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
