/*
You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}
Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}
Rules
Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
If duplicate characters are found in the same array, the first occurance should be kept.

input: an object (string num is key; string upcase letter is value
output -- new object without duplicates (as per the rules)

rules:
- output must remove duplicate values
- start with the largest number key and move down from there (value with the largest number key takes prevcedence)
- if all the values have been chosen already, just give an empty array for that key. (i.e. all keys should be preserved)

ds -- we need an array with the keys, sorted in from largest - smallest
-- we need a new array object to store our new values
-- we need an array to capture any keys we are putting in our new array

algorithm:
- iterate through the large-to-small keys array
  - for each set of values for each of these keys
    - assign a [] as the value for that key in the new object
    - if the value is in our alreadyUsed array, continue
    - if it isn't in there, push the value to the array for that key in the new object
*/

function removeDuplicateIds(object) {
  let newObj = {};
  let alreadyUsed = [];
  let reversedKeys = Object.keys(object).map(val => Number(val)).sort((a, b) => b - a).map(val => String(val));
  for (let i = 0; i < reversedKeys.length; i += 1) {
    newObj[reversedKeys[i]] = [];
    object[reversedKeys[i]].forEach(subVal => {
      if (alreadyUsed.includes(subVal) === false) {
        alreadyUsed.push(subVal);
        newObj[reversedKeys[i]].push(subVal);
      }
    })
  }

  return newObj;
};

input1 = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

output1 = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
}

console.log(removeDuplicateIds(input1)); // returns output1

input2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

output2 = {
  "1": [],
  "2": [],
  "3": ["A"],
}

console.log(removeDuplicateIds(input2)); // returns output2

input3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}

output3 = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
}

console.log(removeDuplicateIds(input3)); // returns output3
