import { makeStyles } from '@material-ui/core'
import React,{useState,useEffect} from 'react'

const formSubmit=(e)=>{
    e.preventDefault();
}

function CURDOperation() {
    const [user, setUser] = useState({
        fullName:"",
        mobile:"",
        email:"",
        address:""
    })
    return (
        <div style={{margin:"auto",width:"30%"}}>
            <form onSubmit={formSubmit}>
                <div>
                    <input type="text" name="fullName" placeholder="full name" value={user.fullName} onChange={(e)=>setUser({...setUser,fullName:e.target.value})}/>
                </div>
                <div>
                    <input type="text" name="mobile" placeholder="mobile number" value={user.mobile} onChange={(e)=>setUser({...setUser,mobile:e.target.value})}/>
                </div>
                <div>
                    <input type="text" name="email" value={user.email} placeholder="email id" onChange={(e)=>setUser({...setUser,email:e.target.value})}/>
                </div>
                <div>
                    <input type="text" name="address" value={user.address} placeholder="address" onChange={(e)=>setUser({...setUser,address:e.target.value})}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CURDOperation
