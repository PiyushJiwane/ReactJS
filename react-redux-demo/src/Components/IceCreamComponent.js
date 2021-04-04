import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../Redux'

function IceCreamComponent(props) {
    return (
        <div>
            <h3>Number of IceCream : {props.numOfIceCream}</h3>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps=(store)=>{
    return {
        numOfIceCream:store.iceCream.numOfIceCream,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent)
