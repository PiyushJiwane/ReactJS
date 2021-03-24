import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Piyush"
        }
        console.log("LifeCycle B constructor call");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle B getDerivedStaticFromProps method call");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycle B componentDidMount method call");
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycle B shouldComponentUpdate method call");
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycle B getSnapshotBeforeUpdate method call");
        return null;
    }
    
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("LifeCycle B componentDidUpdate method call");
    }

    render() {
        console.log("LifeCycle B render method call");
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
