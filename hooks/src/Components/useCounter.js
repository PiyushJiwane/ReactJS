import {useState} from 'react'

function useCounter(initialValue,value) {
    const [count, setCount] = useState(initialValue)

    const Increment=()=>{
        setCount(count+value)
    }
    const Decrement=()=>{
        setCount(count-value)
    }
    const Reset=()=>{
        setCount(0)
    }
    return [count,Increment,Decrement,Reset]
}

export default useCounter
