import React from 'react'
import useCounter from './useCounter'

function Counter() {
    const [count,Increment,Decrement,Reset]=useCounter(10,10);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={Increment}>+1</button>
            <button onClick={Decrement}>-1</button>
            <button onClick={Reset}>Reste</button>
        </div>
    )
}

export default Counter
