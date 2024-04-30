import React from 'react';
import CounterHOC from './CounterHOC';

const CounterOne = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      <p>COUNTER - 1 | {counter}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default CounterHOC(CounterOne, 10, 20);
