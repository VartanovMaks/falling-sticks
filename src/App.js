import './App.css';
import DisplayNumber from './components/displayNumber/DisplayNumber';
import DisplayProtocol from './components/displayProtocol/DisplayProtocol';
import { randomIntervals } from './helpers/randomIntervals';
import {randomNumbers} from './helpers/randomNumbers';

function App() {
  
  function clickHandle(){
    let arrStickNumber=randomNumbers();
    let arrIntervals=randomIntervals(arrStickNumber);
    
    let i=0;
    let timerId = setTimeout(function request() {
      console.log('Stick ', arrStickNumber[i],' delay : ', arrIntervals[i]/1000, 'sec' );
      if(i<arrIntervals.length-1) i++;
      else {
        clearTimeout(timerId);
        return
      }
      timerId = setTimeout(request, arrIntervals[i]);
    }, arrIntervals[0]);
   
  }

  return (
    <div>
      <button className="btn-start" onClick={clickHandle}>Start</button>
      <DisplayNumber />
      <DisplayProtocol />
    </div>
  )
}

export default App;
