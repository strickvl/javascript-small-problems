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

function transpose(arr) {
  let newArr = [[], [], []];

  for (let rowIdx = 0; rowIdx <= 2; rowIdx += 1) {
    for (let colIdx = 0; colIdx <= 2; colIdx += 1) {
      newArr[rowIdx][colIdx] = arr[colIdx][rowIdx];
    }
  }
  return newArr;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
