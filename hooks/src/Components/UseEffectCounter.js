import React,{useState,useEffect} from 'react'

function UseEffectCounter() {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title=`Clicked ${counter} times.`
    })

    const counterIncrement=()=>{
        setCounter(counter+1);
    }

    return (
        <div>
            <button onClick={counterIncrement}>Clicked {counter} times</button>
        </div>
    )
}

export default UseEffectCounter
