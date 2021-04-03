import {combineReducers} from "redux"
import cakeReducer from "./Cake/CakeReducer"
import iceCreamReducer from "./IceCreams/IceCreamReducer"

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducer
