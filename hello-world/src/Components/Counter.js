import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
             counter:0
        }
    }

    incrementCounter(){
        this.setState({
            counter:this.state.counter+1
        },
        ()=> console.log("value :",this.state.counter)
    )}

    incrementFive(){
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
    }

    render() {
        return (
            <div>
                <p>Counter - {this.state.counter}</p>
                <button onClick={()=>this.incrementFive()}>Click Here</button>
            </div>
        )
    }
}

export default Counter
