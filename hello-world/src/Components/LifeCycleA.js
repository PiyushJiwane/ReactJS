import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Piyush"
        }
        console.log("LifeCycle A constructor call");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle A getDerivedStateFromProps method call");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycle A componentDidMount method call");
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycle A shouldComponentUpdate method call");
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycle A getSnapshotBeforeUpdate method call");
        return null;
    }
    
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("LifeCycle A componentDidUpdate method call");
    }

    buttonClicked=()=>{
        this.setState({
            name:"Piyush jiwane"
        })
    }
    
    render() {
        console.log("LifeCycle A render method call");
        return (
            <div>
                {this.state.name}
                <button onClick={this.buttonClicked}>Click Here</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
