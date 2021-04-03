import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../Redux/Cake/CakeAction';
import { buyIceCream } from '../Redux/IceCreams/IceCreamAction';

function HookCakeComponent() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();
    return (
        <div>
            <div>
            <h3>Number of Cakes : {numOfCakes}</h3>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
            </div>
            <div>
            <h3>Number of Cakes : {numOfIceCream}</h3>
            <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
            </div>
        </div>
    )
}

export default HookCakeComponent
