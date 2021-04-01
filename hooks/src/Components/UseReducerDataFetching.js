import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    error:'',
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                error:'',
                post:action.payload
            }
        case 'FETCH_FAILED':
            return {
                loading:false,
                error:'something went wrong !!!',
                post:''
            }
        default:
            return initialState;
    }
}

function UseReducerDataFetching() {
    const [state,dispacth]=useReducer(reducer,initialState);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res=>{
            dispacth({type:'FETCH_SUCCESS',payload:res.data})
        }).catch(err=>{
            dispacth({type:'FETCH_FAILED'})
        })
    },[])

    return (
        <div>
            {state.loading?'Loading...':state.post.title}
            {state.error?state.error:null}
        </div>
    )
}

export default UseReducerDataFetching
