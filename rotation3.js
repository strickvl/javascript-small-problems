/*

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

input: number value
output: rotated NUBMER value

ds -- array to store the value

algorithm:
- turn the input number into a string and assign to a variable
- make a new array for the final values
- have slices increasing / iterating,
  - on each section, run the rotateRightMost
  - add the left value to the new array
  - continue the slicing
- return the new array, joined together and converted to a number

*/

function rotateRightmostDigits(arr, ridx) {
  let vals = arr.slice();
  let element = vals.splice((vals.length - ridx), 1);
  vals.push(element[0]);
  return vals;
}

function maxRotation(num) {
  let vals = String(num).split('');
  let rotatedVals = [];
  let newVals = rotateRightmostDigits(vals, vals.length);
  for (let i = 0; i < vals.length; i += 1) {
    rotatedVals.push(newVals[0]);
    newVals.shift()
    newVals = rotateRightmostDigits(newVals, newVals.length);
  }
  return Number(rotatedVals.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
