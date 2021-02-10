import React from 'react';

function Counter({count, onIncrease, onDecrease}) {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <span>{count}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

export default Counter;
