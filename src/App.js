import React, { useState } from 'react'
import './App.css';

let adjestInterval = undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const [stated, setStated] = useState(false);

  const startWatch = ()=> {
    adjestInterval = setInterval(()=>{
      setWatch((x)=>x+1)
    },1000)
    setStated(true);
  }
  const stopWatch = ()=> {
    clearInterval(adjestInterval);
    setStated(false);
  }
  const resetWatch = ()=> {
    setWatch(0);
    clearInterval(adjestInterval);
    setStated(false);
  }

  return (
    <div className="App">
      <h1>Start Stop Watch</h1>
      <h1>{watch}</h1>
      <button className='start' disabled={stated} onClick={startWatch}>Start</button>
      <button className='stop' onClick={stopWatch}>Stop</button>
      <button className='reset' onClick={resetWatch}>Reset</button>
    </div>
  );
}

export default App;
