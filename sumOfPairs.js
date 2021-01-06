"use strict";

/*
  input is an array, then a sum value
  output, is the two values that sum up to the value (or undefined if there are no pairs)

  DS: array object to store the two values for the output

  algorithm:
  - initialise an empty array for final val
  - set up two interlaced loops
  indexs
  0, 1
  0, 2...end

  1, 2, ...end
  for each, if the two sum up to int value, then return them in an array format
  - return undefined if you get to the end and nothing has summed up to the sum

*/

function sum_pairs(arr, sum) {
  let result = [];
  let resultStore = [];
  for (let outerIndex = 0; outerIndex < arr.length; outerIndex += 1) {
    for (let innerIndex = outerIndex + 1; innerIndex < arr.length; innerIndex += 1) {
      if (arr[outerIndex] + arr[innerIndex] === sum) {
        resultStore.push([[arr[outerIndex], arr[innerIndex]], innerIndex]);
      }
    }
  }

  if (resultStore.length > 0) {
    return resultStore.sort((a, b) => {
      return a[1] - b[1]
    })[0][0]
  } else {
    return undefined;
  }
}

console.log(sum_pairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sum_pairs([4, 3, 2, 3, 4], 6)); // [4, 2]
console.log(sum_pairs([0, 0, -2, 3], 2)); // undefined
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
