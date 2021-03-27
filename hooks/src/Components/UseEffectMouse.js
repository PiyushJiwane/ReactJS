import React, {useState,useEffect} from 'react'

function UseEffectMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(()=>{
        console.log("mouse-move");
        window.addEventListener("mousemove",(e)=>{
            console.log("data");
            setX(e.clientX);
            setY(e.clientY);
        })
    },[])

    return (
        <div>
            X - {x} & Y - {y}
        </div>
    )
}

export default UseEffectMouse
