import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             userdeatils:'',
             userframework:'ReactJS'
        }
    }

    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleUserdetailsChange=(event)=>{
        this.setState({
            userdeatils:event.target.value
        })
    }
    handleUserframeworkChange=(event)=>{
        this.setState({
            userframework:event.target.value
        })
    }
    handleSubmitForm=(event)=>{
        alert(`${this.state.username} - ${this.state.userdeatils} - ${this.state.userframework}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <div>
                    <label>UserName : </label>
                    <input value={this.state.username} onChange={this.handleUsernameChange} type="text"/>
                </div>
                <div>
                    <label>UserDetails : </label>
                    <textarea value={this.state.userdeatils} onChange={this.handleUserdetailsChange} type="text"/>
                </div>
                <div>
                    <label>Framework : </label>
                    <select value={this.state.userframework} onChange={this.handleUserframeworkChange}>
                        <option>ReactJS</option>
                        <option>AngularJS</option>
                        <option>Angular 8</option>
                        <option>VueJS</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
