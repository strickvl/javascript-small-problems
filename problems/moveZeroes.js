/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

input an array
output, that same array, with the zeros moved to the end

rules:
- returns a copy of the array
- elements can be anything
- if the array is empty, return [];
- if the input isn't an array, return -1
- remove zeros from the string and put them at the end of the string

algorithm:
- iterate over the values
- filter a copy of the array for anything that isn't zero
- compare the length of the new array with the original length.
- push the equivalent number of zeros to the end
- return the new array
*/

function moveZeros(input) {
  if (Array.isArray(input) === false) {
    return -1;
  } else if (input.length === 0) {
    return [];
  }

  let transformedArr = input.filter(val => val !== 0);
  let missingZeroCount = input.length - transformedArr.length;

  for (let index = 1; index <= missingZeroCount; index += 1) {
    transformedArr.push(0);
  }
  return transformedArr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns [false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false,1,1,2,1,3,"a"])); // returns [false,1,1,2,1,3,"a"]
console.log(moveZeros(3)); // returns -1
console.log(moveZeros([])); // returns []
