import React,{useState,useRef,useEffect} from 'react'

function UseRefTimer() {
    const [count, setCount] = useState(0);
    const intervalRef=useRef();

    useEffect(() => {
        intervalRef.current=setInterval(()=>{
            setCount(prevCount=>prevCount+1);
        },1)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            Hook Timer - {count}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}

export default UseRefTimer
