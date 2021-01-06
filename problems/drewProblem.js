"use strict";

// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
//
// The restriction is that the characters in part1 and part2 should be in the same order as in s.
//
// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.
//
// For example:
//
// 'codewars' is a merge from 'cdw' and 'oears':
//
//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears
//
/*
  input: string
  - part1 (chars)
  - part2 (chars)

  rules:
  - if there's a character in either part 1 or part 2 which isn't in s, then it's false
  - the next character in any sequence, must be part of the subsequent sequence in the original string
  - parts don't need to be sequential (TEST CASE)
  - each character in the original string must be used up exactly once (i.e. there can't be extra / repeated characters)

  algorithm:
  - initialise an array of string chars based on the string variable (stringArr)
  - turn each part into an array of string chars (part1Arr / part2Arr)
  - initialise an index counter variable (placeInString) to 0
  - eliminate any of the bad inputs
  - false if any character in part1 or part2 isn't in the original string DONE
  - false if the length of part1 and part2 is not === length of string DONE
  // - false if the counts of any char in part1 or part2 is not the same for part1 + part2 (concatenated)


  - start with one of the parts, iterate over the characters one by one
  - get its index value from the array of string chars (stringArr.indexOf())
  if the index value is greater than the placeInString variable:
  - delete that value from the stringArr
  - update the placeInString variable with this new index value - 1
  if not:
  - return false;
  - when you get to the end, reset the placeInString to 0
  - repeat this for part2
  - if you get to the end and you still have any characters left in stringArr, then return false

  sameCharsFunction
  iterate over string2
  if any letter in string2 is not in string1, then return false
  otherwise return true
*/

function sameChars(str1, str2) {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');
  for (let index = 0; index < str2Arr.length; index += 1) {
    let char = str2Arr[index];
    if (!str1.includes(char)) return false;
  }
  return true;
}

function isMerge(string, part1, part2) {
  let stringArr = string.split('');
  let part1Arr = part1.split('');
  let part2Arr = part2.split('');
  let placeInString = 0;

  let regexstring = `[${string}]`
  let regex = new RegExp(regexstring, 'gi');
  if (sameChars(string, part1) === false || sameChars(string, part2) === false) return false;
  if ((part1.length + part2.length) !== string.length) return false;

  for (let index = 0; index < part1Arr.length; index += 1) {
    let char = part1Arr[index];
    let charIndexInString = stringArr.indexOf(char);
    if (charIndexInString >= placeInString) {
      stringArr.splice(charIndexInString, 1);
      placeInString = charIndexInString;
    } else {
      return false;
    }

  }
  placeInString = 0;

  for (let index = 0; index < part2Arr.length; index += 1) {
    let char = part2Arr[index];
    let charIndexInString = stringArr.indexOf(char);
    if (charIndexInString >= placeInString) {
      stringArr.splice(charIndexInString, 1);
      placeInString = charIndexInString;
    } else {
      return false;
    }
  }

  if (stringArr.length !== 0) return false;
  return true;
}

console.log(isMerge('codewars', 'code', 'wars')); // true
console.log(isMerge('codewars', 'cdw', 'oears')); // true
console.log(isMerge('codewars', 'oears', 'cdw')); // true
console.log(isMerge('codewars', 'cod', 'wars')); // false
console.log(isMerge('codewars', 'cod', 'war%')); // false
console.log(isMerge('codewars', 'co3', 'wars')); // false
console.log(isMerge('codewars', 'dcw', 'oears')); // false
console.log(isMerge('codewars', 'cdw', 'eoars')); // false
console.log(isMerge('codewars', 'cod', 'ewars')); // true
console.log(isMerge('codewars', 'coe', 'dwars')); // true
console.log(isMerge('codewars', 'codd', 'ewars')); // true
