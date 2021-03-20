import React from 'react';

// function Greet(props){
//     return <h1>Hello, {props.name} !!!</h1>
// }

const PropsExample=props=><div><h1>Hello, {props.name} a.k.a. {props.subname}  !!!</h1>  {props.children}</div>;

export default PropsExample;