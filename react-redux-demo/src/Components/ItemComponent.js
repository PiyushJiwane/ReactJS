import React from 'react'
import { connect } from "react-redux";
import { buyCake, buyIceCream } from '../Redux';

function ItemComponent(props) {
    return (
        <div>
            <h3>Item - {props.item}</h3>
            <button onClick={props.buyItem}>Click here</button>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
    const itemValue=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCream
    return {
        item:itemValue
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream());
    return{
        buyItem:dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemComponent) 
