import { useState } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

export default function App() {
  console.log('App');

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  return (
    <div className='App'>
      <h1>Hello</h1>
      <h2>test</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>

      <div>
        <input value={text} onChange={onChangeText}/>
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open}/>
      </div>
    </div>
  );
}