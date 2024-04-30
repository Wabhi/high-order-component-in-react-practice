import React from 'react';
import CounterHOC from './CounterHOC';

const CounterTwo = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      <p>COUNTER - 2 | {counter}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default CounterHOC(CounterTwo, 20, 30);
