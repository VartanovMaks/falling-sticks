export function randomIntervals(arrNumbers){
    let arrIntervals=[];
    arrNumbers.forEach(el=>{
        let delay = Math.round(Math.random()*100)*100;
        if (delay<1000) delay += 1300;
        else
          if (delay>8000) delay = delay - delay/2;
        else 
          if (delay>5000) delay = delay - 2500;
        arrIntervals.push(delay);
      })
      console.log("clickHandle, arrIntervals", arrIntervals);
      return arrIntervals;
}