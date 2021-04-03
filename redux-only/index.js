const redux = require("redux");
const createStore = redux.createStore;
const combineReducer=redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECRAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Ex",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECRAM,
  };
}

// const initiatlState={
//     numOfCakes:10,
//     numOfIceCream:20
// }

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};

// const reducer = (state = initiatlState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECRAM:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECRAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer);

console.log("initial state", store.getState());
const unsubcribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubcribe();
