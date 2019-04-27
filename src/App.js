import React from 'react';
import logo from './logo.svg';
import './App.css';
import {productReducer} from "./redux/reducers/product";
import {userReducer} from "./redux/reducers/user";
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
      <p>{props.aaa}</p>
      <p>{props.user}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  // props: state
  aaa: state.productReducer,
  user: state.userReducer
});

// 커링 펑션
// HoC 컴포넌트
export default connect(mapStateToProps)(App);
