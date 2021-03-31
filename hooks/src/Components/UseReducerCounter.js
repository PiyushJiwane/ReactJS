import React,{useReducer} from 'react'

const initialState=0;
const reducer=(currentState,action)=>{
    switch(action){
        case 'increment':
            return currentState+1;
        case 'decrement':
            return currentState-1;
        case 'reser':
            return initialState;
        default:
            return initialState
    }
}

function UseReducerCounter() {

    const [count,dispatch]=useReducer(reducer,initialState)

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerCounter