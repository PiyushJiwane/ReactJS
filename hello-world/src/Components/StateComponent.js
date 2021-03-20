import React , {Component} from 'react';

class StateComponent extends Component{
    constructor(){
        super();
        this.state={
            message:"Welcome Vistitor !!!",
            buttonText:"Subscribe"
        }
    }

    changeText(){
        this.setState({
            message:"Thank you for Subscribing !!!",
            buttonText:"Subcribed"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeText()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StateComponent;

