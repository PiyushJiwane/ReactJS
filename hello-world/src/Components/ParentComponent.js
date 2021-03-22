import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName:"Anil Jiwane"
        }

        //as we are using 'this' keyword in method i.e. why we have to bind greetParent() method
        this.greetParent=this.greetParent.bind(this);
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
