import React, {useState,useEffect} from 'react'

function UseEffectMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePoints=(e)=>{
        console.log("data");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("mouse-move");
        window.addEventListener("mousemove",logMousePoints)

        return ()=>{
            console.log("component unmounted");
            window.removeEventListener("mousemove",logMousePoints)
        }
    },[])

    return (
        <div>
            X - {x} & Y - {y}
        </div>
    )
}

export default UseEffectMouse
