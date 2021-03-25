import React, { Component } from 'react'

const UpdatedComponent=(OriginalComponent)=>{
    class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 counter:0
            }
        }
        
        clickHandler=()=>{
            this.setState((prevState)=>{
                return{
                    counter:prevState.counter+1
                }
            })
        }
        render() {
            return (
                <OriginalComponent count={this.state.counter} incrementCounter={this.clickHandler}/>
            )
        }
    }
    return NewComponent;
}
export default UpdatedComponent