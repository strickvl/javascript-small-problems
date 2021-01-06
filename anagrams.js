/*
Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none.

input, a string
  - an array of words to test if the string can be rearranged into that same shape
output: - an array with only those words that are true for isAnagram

rules:
- ignore case
- only a-z chars used
- the counts for each letter in str1 need to match the counts for every letter in str2
- if there's a letter in str2 which isn't in str1, then that word is invalid
- if str2 is longer than str1, that word is invalid
- if there are no matches, return an empty string

algorithm:
- do a filter on every item in the array, seeing if it's true or false as per the function isAnagram

for the isAnagram function:
- split both into arrays of characters
- iterate over the str1 chars:
  - for every char, if the count for str1 for the current char !== that for str2, return false
- else if you get to the end, return true
*/

function getCount(char, str) {
  let count = 0;
  str.split('').forEach(strChar => {
    if (strChar === char) {
      count += 1;
    }
  });
  return count;
}

function isAnagram(str1, str2) {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');

  if (str2.length > str1.length) return false;

  for (let index = 0; index < str1Arr.length; index += 1) {
    let currentChar = str1Arr[index];
    if (getCount(currentChar, str1) !== getCount(currentChar, str2)) return false;
  }
  return true;
}

function anagrams(str, arr) {
  return arr.filter(word => {
    return isAnagram(str, word);
  });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // => []
