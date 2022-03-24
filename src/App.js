import { useEffect, useState } from 'react';
import './App.css';
import DisplayNumber from './components/displayNumber/DisplayNumber';
// import DisplayProtocol from './components/displayProtocol/DisplayProtocol';
import { randomIntervals } from './helpers/randomIntervals';
import {randomNumbers} from './helpers/randomNumbers';

function App() {
  const [timerId, setTimerId] = useState();
  const [stickIndex, setStickIndex] = useState(-1);
  const [gameArray, setGameArray] = useState([]);

  function clickHandle(){
    console.log('gameArray',gameArray)
    if(timerId !== undefined) clearTimeout(timerId);
    let i=0;
    setTimerId(setTimeout(function request() {
      setStickIndex(i);
      if(i<gameArray.length-1) i++;
      else {
        setTimeout(()=>setStickIndex(-1), 3000)
        clearTimeout(timerId);
        return
      }
      setTimerId(setTimeout(request, gameArray[i].timer));
    }, gameArray[0].timer));
  }

  useEffect(()=>{
    let arrStickNumber=randomNumbers();
    let arrIntervals=randomIntervals(arrStickNumber);
    let arrTmp = arrStickNumber.map((element, index)=>{
      return {
        stick: element,
        timer: arrIntervals[index]
      }
    })
    setGameArray(arrTmp);
  },[]);
  
  return (
    <div>
      <button className="btn-start" onClick={clickHandle}>Start</button>
      <DisplayNumber stickIndex={stickIndex} gameArray={gameArray}/>
      {/* <DisplayProtocol /> */}
    </div>
  )
}

export default App;
