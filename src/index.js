import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from "react-redux";
// 1) 먼저 매핑되는 화일을 정확하게 찾기
// 2) 해당되는 폴더의 index.js를 찾기
import {allReducer} from "./redux/reducers";
import {updateUser} from "./redux/actions";
import {store} from "./redux/store";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
