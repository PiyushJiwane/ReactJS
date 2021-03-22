import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler("Piyush Jiwane")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
