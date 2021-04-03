const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware=redux.applyMiddleware;
const thunkMiddleware=require('redux-thunk').default;
const axios=require('axios');

const initialState = {
  loading: false,
  users: [],
  error: ""
};

const FETCH_API_REQUEST = "FETCH_API_REQUEST";
const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
const FETCH_API_FAILURE = "FETCH_API_FAILURE";

const fetchApiRequest = () => {
  return {
    type: FETCH_API_REQUEST,
  };
};

const fetchApiSuccess = (users) => {
  return {
    type: FETCH_API_SUCCESS,
    payload: users,
  };
};

const fetchApiFailure = (error) => {
  return {
    type: FETCH_API_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_API_SUCCESS:
      return {
        loading:false,
        users: action.payload,
        error:''
      };
    case FETCH_API_FAILURE:
      return {
        loading:false,
        users:[],
        error: action.payload,
      };
  }
};


const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchApiRequest());
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            const users=response.data.map(user=>user.id)
            dispatch(fetchApiSuccess(users));
        }).catch(error=>{
            dispatch(fetchApiFailure(error.message))
        })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState());})
store.dispatch(fetchUsers());