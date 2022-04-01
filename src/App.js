import { useState } from 'react';
import './App.css';
import DisplayNumber from './components/displayNumber/DisplayNumber';
import DisplayProtocol from './components/displayProtocol/DisplayProtocol';
import { randomIntervals } from './helpers/randomIntervals';
import {randomNumbers} from './helpers/randomNumbers';

function App() {
  const STUB = {
    stick:-1,
    interval:-1
  }
  const [timerId, setTimerId] = useState();
  const [stick, setStick] = useState(STUB);

  function launchTimers(arrIntervals, arrStickNumber){
    if(timerId !== undefined) clearTimeout(timerId);
    let i=0;
    setTimerId(setTimeout(function request() {
      setStick(
        {
          stick:arrStickNumber[i],
          interval:arrIntervals[i]
        }
      );
      if(i<arrIntervals.length-1) i++;
      else {
        setTimeout(()=>setStick(STUB), 4000)
        clearTimeout(timerId);
        return
      }
      setTimerId(setTimeout(request, arrIntervals[i]));
    }, arrIntervals[0]));
  }

  function clickHandle(){
    setStick(STUB);
    let arrStickNumber=randomNumbers();
    let arrIntervals=randomIntervals(arrStickNumber);
    
    launchTimers(arrIntervals, arrStickNumber);
  }

  return (
    <div className='div-container'>
      <button className="btn-start" onClick={clickHandle}>Start</button>
      { stick.stick !== -1 &&
        <div className='div-info'>
          <div className='column'>Number</div>
          <div className='column'>Protocol</div>
        </div>
      }
      { stick.stick !== -1 &&
        <div className='div-info'>
          <DisplayNumber stickNumber={stick.stick}/>
          <DisplayProtocol stick={stick} />
        </div>
      }
    </div>
  )
}

export default App;
