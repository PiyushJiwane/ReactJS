import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

class SuperMemoComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mesg:"Hello"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                mesg:"Hello"
            })
        },2000)
    }
    
    render() {
        console.log("--------------SuperComponent----------------");
        return (
            <div>
                <p>Super Memo Component</p>
                <MemoComponent name={this.state.mesg}/>
            </div>
        )
    }
}

export default SuperMemoComponent
