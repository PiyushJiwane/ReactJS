import { BUY_ICECREAM } from "./IceCreamType"

const initialState={
    numOfIceCream:20
}

const iceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream:state.numOfIceCream - action.payload
            }
        default:
            return state
    }
}

export default iceCreamReducer