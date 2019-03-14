module.exports =
function getZerosCount(n, b) {

let sum = 0, arr = [], resArr = [];

  for (let i = 2; b != 1; i++) {
      if (b % i == 0) {
          arr.push(i);
          b /= i;
          i--;
      }
    }
resArr = arr.map(function(el){ 
  sum = 0;
  for(let j = 1; Math.pow(el, j) <= n; j++){
   sum +=  Math.floor(n/Math.pow(el, j));
  } 
  return sum;

});

let clone = 1;
for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] == resArr[i + 1]) {
        clone++;
        resArr.splice(i, 1);
        i--;
    } else {
        resArr[i] = Math.floor(resArr[i] / clone);
        clone = 1;
    }
}

  resArr.sort(function(a, b) {
    return a - b;
  });

  return resArr[0];
}
