import React from 'react';
import logo from './logo.svg';
import './App.css';
import {productReducer} from "./redux/reducers/product";
import {userReducer} from "./redux/reducers/user";
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  return (
    <div className="App">
      <p>{props.aaa}</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUser('Jane')}>액션 디스패치</button>
    </div>
  );
}
// subscribe: 스토어의 state를 props로 내려받기
const mapStateToProps = (state) => ({
  // props: state
  aaa: state.productReducer,
  user: state.userReducer
});

// publish: 로직을 콜백펑션으로 만들어서 props 내려주기
// => (로직 = 액션을 디스패치하는 펑션)을 props로 내려주기
const mapActionToProps = (dispatch) => ({
  // props: 액션을 디스패치하는 펑션
  updateUser: (name) => dispatch(updateUser(name))
})

// 커링 펑션
// HoC 컴포넌트
export default connect(mapStateToProps, mapActionToProps)(App);
