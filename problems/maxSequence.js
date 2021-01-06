/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
input: array of values
output: the sum of the max contiguous subsequence in an array or list of integers

ds: need an array to store subarrays of possible slices

rules:
- if the list is made up of only negative numbers, return 0
- if list is empty, return 0
- subarrs need to be contiguous

algo:
- init an array to store things
- make two interlacing loops -- get all the possible slices and add them to the array
- map the array to transform it into the possible sums of those values
- return the largest sum

*/

function maxSequence(arr) {
  if (arr.every(val => val < 0)) {
    return 0;
  } else if (arr.length === 0) {
    return 0;
  }
  let sequences = [];
  for (let outer = 0; outer <= arr.length; outer += 1) {
    for (let inner = outer + 1; inner <= arr.length; inner += 1) {
      sequences.push(arr.slice(outer, inner));
    }
  }
  sequences = sequences.map(sequence => {
    return sequence.reduce((sum, val) => sum + val);
  });

  return Math.max(...sequences);
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // 0
console.log(maxSequence([])); // 0
console.log(maxSequence([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ])); // 155
console.log(maxSequence([ -40,
  48,
  -7,
  -45,
  26,
  -33,
  -0,
  28,
  38,
  29,
  -29,
  -22,
  -48,
  21,
  8,
  -11,
  50,
  -10,
  -21,
  17,
  44,
  -40,
  22,
  -19,
  -6,
  -7,
  -15,
  -10,
  -5,
  -6,
  -18,
  -9,
  -17,
  -38,
  -29,
  -40,
  13,
  -34,
  -21,
  29,
  -30,
  -42,
  12,
  -43,
  15,
  -48,
  30,
  27,
  50,
  3 ])); // 110
