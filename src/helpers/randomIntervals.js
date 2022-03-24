export function randomIntervals(arrNumbers){
    let arrIntervals=[];
    arrNumbers.forEach(el=>{
        let delay = Math.round(Math.random()*100)*100;
        if (delay<1000) delay += 1300;
        if (delay>8000) delay = 8000;
        arrIntervals.push(delay);
      })
      console.log("clickHandle, arrIntervals", arrIntervals);
      return arrIntervals;
}