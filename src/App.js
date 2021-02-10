import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {decreaseCount, increaseCount} from "./redux/reducers/counterReducer";
import Counter from "./component/Counter";
import {updateUser} from "./redux/reducers/userReducer";
import User from "./component/User";

function App() {
  const count = useSelector(state => state.count);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Counter count={count} onIncrease={() => dispatch(increaseCount())} onDecrease={() => dispatch(decreaseCount())}></Counter>
      <User name={user.name} updateUser={(name) => dispatch(updateUser(name))}></User>
    </div>
  );
}

export default App;
