/*

Write a function that rotates the last n digits of a number.
For the rotation, rotate by one digit to the left, moving the first digit to the end.

- take the index value as the number of digits from the right. 1 is the end digit
- that number is the one that needs extracting and moving all the way to the right of the number
- return the final number

ds
- we'll want an array for the split values

algorithm:
- split the number into invidivdual digits
- extract the element (arr.length - n)
- use splice to delete the appropriate element
- push that element to the end of the array
- join up the array and return it

*/

function rotateRightmostDigits(num, ridx) {
  let vals = String(num).split('').map(val => Number(val));
  let element = vals.splice((vals.length - ridx), 1);
  vals.push(element[0]);
  return Number(vals.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
