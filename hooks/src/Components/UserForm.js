import React from 'react'
import useInput from './useInput';

function UserForm() {
    const [firstName,bindFirstName,resetFirstName]=useInput('');
    const [lastName,bindLastName,resetLastName]=useInput('');

    const submitForm=(e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} and ${lastName}`)
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" {... bindFirstName}/>
                <input type="text" {... bindLastName}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm
