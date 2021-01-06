/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

input: two arrays
outup: a single combination array

rules:
- alternate elements from each array when populating the new one
- start with the first one, then add from the second one and keep alternating

ds: new array for the merged ones

algorithm:
- find the largest of the two items
- run a for loop for the length of the largest items
- for every iteration, take one item from each array and add it to the new array
- filter to remove any 'undefineds' from it
- return the new array
*/

function mergeArrays(arr1, arr2) {
  let loopLength = arr1.length;
  let final = [];
  if (arr2.length > loopLength) loopLength = arr2.length;
  for (let i = 0; i < loopLength; i += 1) {
    final.push(arr1[i]);
    final.push(arr2[i]);
  }

  return final.filter(item => item !== undefined);
}

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])); // ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]
console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"])); // [1, a, 2, b, 3, c, d, e, f]
