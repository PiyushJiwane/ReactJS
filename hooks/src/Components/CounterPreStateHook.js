import React, {useState} from 'react'

function CounterPreStateHook() {
    const [Count, setCount] = useState(0)

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount((prevState)=>prevState+1);
        }
    }

    return (
        <div>
            Count : {Count}
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount((prevState)=>prevState+1)}>Increment</button>
            <button onClick={()=>setCount((prevState)=>prevState-1)}>Decrement</button>
            <button onClick={incrementFive}>+5</button>
        </div>
    )
}

export default CounterPreStateHook
