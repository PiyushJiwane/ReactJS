import React from 'react';
import './myStyle.css';

function Demo(props) {
    let cssClass=props.primary?"primary":"";
    return (
        <div>
            <h1 className={`${cssClass} font-xl`}>Hello, Piyush Jiwane</h1>
        </div>
    )
}

export default Demo
