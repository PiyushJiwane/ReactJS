import React from 'react'

function CarDetails({name}) {
    return (
        <div>
            <h2>{name.color} - {name.capacity} - {name.type}</h2>
        </div>
    )
}

export default CarDetails
