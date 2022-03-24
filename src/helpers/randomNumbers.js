export function randomNumbers(){
    let arrNumbers=[1,2,3,4,5,6,7,8];
    let arrStickNumber=[];
    let arrKoeficient=[1.25, 1.429, 1.667, 2, 2.5, 3.333, 5, 10];

    arrKoeficient.forEach(koef=> {
      let stickNumber = Math.ceil((Math.random()*10.0)/koef)
      let index = stickNumber - 1;
      arrStickNumber.push(arrNumbers.splice(index,1)[0])
    })
    console.log("randomNumbers, ", arrStickNumber);
    return arrStickNumber;
   
}