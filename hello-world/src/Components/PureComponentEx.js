import React, { PureComponent } from 'react'

class PureComponentEx extends PureComponent {
    render() {
        console.log("--------------PureComponent----------------");
        return (
            <div>
                Pure Component - {this.props.msg}
            </div>
        )
    }
}

export default PureComponentEx
