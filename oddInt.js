/*
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

function to get the count of a value in the array

iterate over the values of the array
get the count using the helper function
if the count is not even, return that value
*/

function getCount(arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) {
      count += 1;
    }
  }
  return count;
}

function oddInt(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let count = getCount(arr, arr[i]);
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

console.log(oddInt([1])); // 1
console.log(oddInt([1, 2, 2])); // 1
console.log(oddInt([3, 2, 2])); // 3
console.log(oddInt([1,1,1,1,1,1,10,1,1,1,1])); // 10
