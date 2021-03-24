import React, { Component } from 'react'
import PureComponentEx from './PureComponentEx'
import RegularComponentEx from './RegularComponentEx'

class SuperComponent extends Component {
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
                <p>Super Component</p>
                <RegularComponentEx msg={this.state.mesg}/>
                <PureComponentEx msg={this.state.mesg}/>
            </div>
        )
    }
}

export default SuperComponent
