/*
  input array of 3 subarrays
  output: NEW array of 3 subarrays

  ds: new array to hold the new values

  algo:
  - setup the new array with empty values
  - set up two interlocking for loops
  - assign the value of the first row to the first column of the new array
  - etc
*/

function generateEmptyArr(arr) {
  let newArr = [];
  let rows = arr.length;
  let cols = arr[0].length;

  for (let i = 0; i < cols; i += 1) {
    newArr.push([]);
    newArr[i].length = rows;
  }
  return newArr;
}

function transpose(arr) {
  let newArr = generateEmptyArr(arr);

  let rows = arr.length;
  let cols = arr[0].length;

  for (let colIdx = 0; colIdx < rows; colIdx += 1) {
    for (let rowIdx = 0; rowIdx < cols; rowIdx += 1) {
      newArr[rowIdx][colIdx] = arr[colIdx][rowIdx];
    }
  }
  return newArr;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]])); // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
