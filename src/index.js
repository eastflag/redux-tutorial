import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from "react-redux";

const productReducer = (state = [], action) => {
  return state;
}

const userReducer = (state = '', action) => {
  switch(action.type) {
    case 'updateUser':
      return action.payload.user;
    default:
      return state;
  }
}

const allReducer = combineReducers({
  productReducer,
  userReducer
})

const updateUser = {
  type: 'updateUser',
  payload: {
    user: 'Tom'
  }
};

const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);

store.subscribe(() => console.log('subscriber: ', store.getState()));

store.dispatch(updateUser);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
