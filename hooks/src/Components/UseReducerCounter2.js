import React,{useReducer} from 'react'

const initialState={
    counterValue:0
};
const reducer=(currentState,action)=>{
    switch(action.type){
        case 'increment':
            return {counterValue:currentState.counterValue+1}
        case 'decrement':
            return {counterValue:currentState.counterValue-1}
        case 'reser':
            return initialState;
        default:
            return initialState
    }
}

function UseReducerCounter2() {

    const [count,dispatch]=useReducer(reducer,initialState)

    return (
        <div>
            <h3>{count.counterValue}</h3>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerCounter2