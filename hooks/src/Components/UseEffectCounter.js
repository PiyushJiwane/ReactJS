import React,{useState,useEffect} from 'react'

function UseEffectCounter() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        document.title=`Clicked ${counter} times.`
        console.log("clicked");
    },[counter])

    const counterIncrement=()=>{
        setCounter(counter+1);
    }

    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={counterIncrement}>Clicked {counter} times</button>
        </div>
    )
}

export default UseEffectCounter
