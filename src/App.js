import { useState } from 'react';
import './App.css';
import DisplayNumber from './components/displayNumber/DisplayNumber';
import DisplayProtocol from './components/displayProtocol/DisplayProtocol';
import { randomIntervals } from './helpers/randomIntervals';
import {randomNumbers} from './helpers/randomNumbers';

function App() {
  const [timerId, setTimerId] = useState();
  const [stickNumber, setStickNumber] = useState();

  function launchTimers(arrIntervals, arrStickNumber){
    if(timerId !== undefined) clearTimeout(timerId);
    let i=0;
    setTimerId(setTimeout(function request() {
      setStickNumber(arrStickNumber[i]);
      if(i<arrIntervals.length-1) i++;
      else {
        setTimeout(()=>setStickNumber(undefined), 3000)
        clearTimeout(timerId);
        return
      }
      setTimerId(setTimeout(request, arrIntervals[i]));
    }, arrIntervals[0]));
  }

  function clickHandle(){
    let arrStickNumber=randomNumbers();
    let arrIntervals=randomIntervals(arrStickNumber);
    
    launchTimers(arrIntervals, arrStickNumber);
  }

  return (
    <div>
      <button className="btn-start" onClick={clickHandle}>Start</button>
      <DisplayNumber stickNumber={stickNumber}/>
      <DisplayProtocol />
    </div>
  )
}

export default App;
