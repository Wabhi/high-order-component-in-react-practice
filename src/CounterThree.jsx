import React from 'react';
import CounterHOC from './CounterHOC';

const CounterThree = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      <p>COUNTER - 3 | {counter}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default CounterHOC(CounterThree, 30, 40);
