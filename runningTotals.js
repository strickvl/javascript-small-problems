function runningTotal(arr) {
  var total = 0;
  var newArr = [];

  for (var i = 0; i < arr.length; i += 1) {
    total = total + arr[i];
    newArr.push(total);
  }

  return newArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
