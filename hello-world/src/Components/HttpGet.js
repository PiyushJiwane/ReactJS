import React, { Component } from 'react'
import axios from 'axios'

class HttpGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             jsonData:[],
             error:''
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts1").then(response=>{
            this.setState({
                jsonData:response.data
            })
        }).catch(error=>{
            console.log(error);
            this.setState({
                error:"Error 404"
            })
        })
    }
    
    render() {
        const {jsonData,error}=this.state
        return (
            <div>
                List of posts
                {
                    jsonData.length?jsonData.map(jsonData=><div key={jsonData.id}>{jsonData.title}</div>):null
                }
                {
                    error?<div><h1>{error}</h1></div>:null
                }
            </div>
        )
    }
}

export default HttpGet
