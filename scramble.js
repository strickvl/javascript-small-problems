/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered

input: string1 (the set of characters)
  - string2 (the string we want to make out of those characters)

rules:
- only lowercase letters used (no punctuation or digits or spaces)
- every letter in str2 must have an equivalent in string1
- if there's a letter in str2 that isn't in str1, return false

data structures:
- array versions of the letters in the string (amended as we're going through)

algorithm:
- split both strings into arrays
- iterate over str2Arr (with for loop)
  - if current char from str2 not in str1Arr, return false
  - if current char from str2 in str1Arr:
    - find the index value for that car in str1Arr
    - use splice to delete that char from str1Arr
    - continue onwards
- if you get to the end without issues, return true

*/

function scramble(str1, str2) {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');

  for (let index = 0; index < str2Arr.length; index += 1) {
    let currentChar = str2Arr[index];
    if (str1Arr.includes(currentChar)) {
      let charIdx = str1Arr.indexOf(currentChar);
      str1Arr.splice(charIdx, 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble('rkqodlw', 'world')); // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // ==> True
console.log(scramble('aabbcamaomsccdd', 'commas')); // ==> True
console.log(scramble('scriptjava', 'javascript')); // ==> True
console.log(scramble('scriptingjava', 'javascript')); // ==> True
console.log(scramble('scriptsjava', 'javascripts')); // ==> True
console.log(scramble('', '')); // ==> True
console.log(scramble('jscripts', 'javascript')); // ==> False
console.log(scramble('katas', 'steak')); // ==> False
console.log(scramble('', 'abc')); // ==> False
