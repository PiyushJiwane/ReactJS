import React, { Component } from 'react'

class ButtonClick extends Component {
    render() {
        const {count,ClickHandler}=this.props;
        return (
            <div>
                <button onClick={ClickHandler}>Click {count} times</button>
            </div>
        )
    }
}

export default ButtonClick
