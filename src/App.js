import { useState } from 'react';
import './App.css';

export default function App() {
  console.log('App');
  
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <h1>Hello</h1>
      <h2>test</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </div>
  );
}