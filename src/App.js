import './App.css';

function App() {
  let arrNumbers=[1,2,3,4,5,6,7,8];
  let arrStickNumber=[];
  let arrIntervals=[];
  let arrKoeficient=[1.25, 1.429, 1.667, 2, 2.5, 3.333, 5, 10];
  
  function clickHandle(){
    arrKoeficient.forEach(koef=> {
      let stickNumber = Math.ceil((Math.random()*10.0)/koef)
      let index = stickNumber - 1;
      arrStickNumber.push(arrNumbers.splice(index,1)[0])
    })
    console.log("clickHandle, arrStickNumber", arrStickNumber);
    
    arrStickNumber.forEach(el=>{
      let delay = Math.round(Math.random()*100)*100;
      if (delay<1000) delay += 1300;
      arrIntervals.push(delay);
    })
    console.log("clickHandle, arrIntervals", arrIntervals);
  
    let i=0;
    let timerId = setTimeout(function request() {
      console.log('delay ', i, ', ', arrIntervals[i]/1000, 'sec' );
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
    </div>
  )
}

export default App;
