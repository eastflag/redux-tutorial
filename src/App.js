import React from 'react';
import './App.css';
import {updateUser} from "./redux/actions";
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const products = useSelector(state => state.products);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>{products.length}</p>
      <p>{user}</p>
      <button onClick={() => dispatch(updateUser('Jane'))}>액션 디스패치</button>
    </div>
  );
}

export default App;
