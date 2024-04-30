import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import CounterThree from './CounterThree';
import Posts from './Posts';
import Albums from './Albums';
import Photos from './Photos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CounterOne />
      <CounterTwo />
      <CounterThree /> */}
      <Posts />
      <hr />
      <Albums />
      <hr />
      <Photos />
    </>
  );
}

export default App;
