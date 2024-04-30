import React, { useState } from 'react';

const CounterHOC = (WrapperComponent, initialValue = 0, steps = 0) => {
  return (props) => {
    const [counter, setCounter] = useState(initialValue);
    const increment = () => {
      setCounter(counter + steps);
    };
    const decrement = () => {
      setCounter(counter - steps);
    };
    const reset = () => {
      setCounter(initialValue);
    };
    return (
      <WrapperComponent
        counter={counter}
        increment={increment}
        decrement={decrement}
        reset={reset}
        {...props}
      />
    );
  };
};

export default CounterHOC;
