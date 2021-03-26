import React, {useState} from 'react'

function CounterHook() {
    const [Count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(Count+1)}>click {Count} times</button>
        </div>
    )
}

export default CounterHook
