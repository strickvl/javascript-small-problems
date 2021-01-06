/*
Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

If both arrays are empty, return -1.

If one array is empty, return the smallest value from the non-empty array.

Note: Try to solve this without brute force.

Example:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = [45, 34, 67, 2, 0]

  Output = 1

Example empty array:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = []

  Output = 1

Example two empty arrays:

  arr1 = []
  arr2 = []

Output = -1


input: two arrays
output: the smallest difference between the various pairs of values

algo:
- return -1 if both arrs are empty
- if one array is empty, return the smallest val from the full array
- set difference to Infinity
- iterate through the first array
- iterate through the second array
  - at every point, get those two values
  - find the largest val (ignore if they're equal)
  - diff is largest - smallest
  - if diff is < difference variable, update that variable with this as the new val
*/

function smallestDiff(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return -1;
  if (arr1.length === 0) {
    return Math.min(...arr2);
  } else if (arr2.length === 0) {
    return Math.min(...arr1);
  }
  let difference = Infinity;
  arr1.forEach(val1 => {
    arr2.forEach(val2 => {
      if (val1 > val2) {
        if ((val1 - val2) < difference) {
          difference = val1 - val2;
        }
      } else if (val2 > val1) {
        if ((val2 - val1) < difference) {
          difference = val2 - val1;
        }
      } else if (val1 === val2) {
        difference = 0;
      }
    })
  })
  return difference;
}

console.log(smallestDiff([1, 3, 5, 23, 5], [45, 34, 67, 2, 0])); // 1
console.log(smallestDiff([1, 3, 5, 23, 5], [])); // 1
console.log(smallestDiff([], [])); // -1
