// import React from "react";

// function NameList() {
//   const nameList = ["Piyush", "Gaurav", "Anil"];
//   const newNameList = nameList.map((name) => <h2>{name}</h2>);
//   return (
//     // <div>
//     //   {nameList.map((name) => (
//     //     <h3>{name}</h3>
//     //   ))}
//     // </div>

//     <div>{newNameList}</div>
//   );
// }

// export default NameList;

import React from 'react'
import CarDetails from './CarDetails';

function NameList() {
    const arrayObj=[
        {
            "color": "purple",
            "type": "minivan",
            "registration": new Date('2012-02-03'),
            "capacity": 17
          },
          {
            "color": "red",
            "type": "nano",
            "registration": new Date('2012-02-04'),
            "capacity": 19
          },
          {
            "color": "green",
            "type": "ms",
            "registration": new Date('2012-02-05'),
            "capacity": 15
          }
    ];

    var ob=arrayObj.map(name=>(
        <CarDetails name={name}/>
    ))

    return(
        <div>{ob}</div>
    )
}

export default NameList

