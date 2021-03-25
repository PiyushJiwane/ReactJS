import React, { Component } from 'react'

class RefsEx extends Component {
    constructor(props) {
        super(props)
        this.name=React.createRef();
    }

    componentDidMount(){
        console.log(this.name);
        this.name.current.focus();
    }
    
    buttonCLicked=()=>{
        alert(this.name.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.name}/>
                <button onClick={this.buttonCLicked}>Submit</button>
            </div>
        )
    }
}

export default RefsEx
