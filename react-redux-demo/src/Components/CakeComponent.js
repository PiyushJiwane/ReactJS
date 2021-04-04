import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../Redux'

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
        numOfCakes:store.cake.numOfCakes,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)
