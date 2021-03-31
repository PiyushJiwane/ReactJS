import './App.css';
import React,{useReducer} from 'react'
import CompA from './Components/CompA'
import CompB from './Components/CompB'
import CompC from './Components/CompC'

const initialState=0;
const reducer=(currentState,action)=>{
    switch(action){
        case 'increment':
            return currentState+1;
        case 'decrement':
            return currentState-1;
        case 'reser':
            return initialState;
        default:
            return initialState
    }
}

export const CountContext=React.createContext();

function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{countState:count,countDispatch:dispatch }}>
      <div className="App">
      <h3>{count}</h3>
      <CompA/>
      <CompB/>
      <CompC/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
