import React from 'react'
import { buyCake } from '../Redux/Cake/CakeAction'
import {connect} from 'react-redux'

function CakeComponent(props) {
    return (
        <div>
            <h3>Number of Cakes : {props.numOfCakes}</h3>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps=(store)=>{
    return {
        numOfCakes:store.numOfCakes,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)
