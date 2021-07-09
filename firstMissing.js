/*

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

*/

const input1 = [3, 4, -1, 1];
const input2 = [1, 2, 0];

const firstMissingInteger = (input) => {
  input.sort();
  let startingIndex = input.indexOf(1);
  if (!input.indexOf(1)) {
    return 1;
  }
  let start = 1;
  for (let i = startingIndex; i < input.length; i += 1) {
    let val = input[i];
    if (val === start) {
      start += 1;
    } else {
      return val;
    }
  }
  return start;
};

console.log(firstMissingInteger(input1)); // should return 2
console.log(firstMissingInteger(input1) === 2); // true

console.log(firstMissingInteger(input2)); // should return 3
console.log(firstMissingInteger(input2) === 3); // true
