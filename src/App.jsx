import { useState } from 'react';
import './App.css';
import ReactPic from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env)
  return (
    <div className='App'>
      <h1 className='text-9xl text-blue-400 font-bold'>Hello world!</h1>
      <div className='flex space-x-6'>
        <img src="vite.svg" alt='vite' />

        <img src={ ReactPic} alt='danse'/>
      </div>
    </div>
  );
}

export default App
