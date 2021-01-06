"use strict";

/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size size (ignore the last chunk if its size is less than size).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If:
- sizez is <= 0 or if str is empty return ""
- size is greater (>) than the length of str it is impossible to take a chunk of size size hence return "".

input -- string of digits, a chunk size
output -- transformed digits as a string

rules:
- input and output are both strings
- when you cut the string into chunks of size size, discard any that aren't length size
- if a chunk's sum of the cubes of its digits is divisible by 2, reverse the digits of the chunk
- else / if not, then just rotate that chunk by one position
- at the end of iterating through the string + transforming things, join it back together and return it as a string
- if size <= 0 or if str is empty, return "";
- if size > str.length, return "";

ds: array for the chunks
: array for each digit initially

algorithm:
SUBFUNCTION - cut string into chunks
- set up a counter starting at 1
- init an array to store the chunks
- init a string variable to '';
- iterate over the chars of the string:
  - if counter < size:
    - add the char to the string variable
  - if counter === size:
    - set counter to zero
    - push the string var to the array
    - reset the string var to ''
- return the array of chunks, filtered to remove anything less than size length

SUBFUNCTION - check if sum of cubes of digits is divisible by 2
- takes a string
- convert those chars to digits + put them into an array
- map the array to cubes of all the digits
- sum up the array
- if sum % 2 === 0, then return true
- else return false

SUBSUNCTION - rotate a string by one position
- takes a string
- init a final = '';
- split the string into chars
- let first = chars.shift()
- chars.push(first)
- return chars.join('');

MAIN FUNCTION
- if size <= 0 or if str is empty, return "";
- if size > str.length, return "";
- let chunks = to the chunks subfunction
- setup an array for finalChunks
- iterate over the chunks
  - if isdivisible is true, push the reversed chunk to the finalChunks array
  - else, push the rotatedChunk to finalChunks array
- return finalChunks.join('');
*/

function rotate(chunk) {
  let final = '';
  let chars = chunk.split('');
  let first = chars.shift();
  chars.push(first);
  return chars.join('');
}

function getChunks(str, size) {
  let counter = 1;
  let arr = [];
  let tempStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (counter < size) {
      tempStr += str[i];
      counter += 1;
    } else if (counter === size) {
      counter = 1;
      tempStr += str[i];
      arr.push(tempStr);
      tempStr = '';
    }
  }
  return arr.filter(chunk => chunk.length === size);
}

function isDivisible(chunk) {
  let digits = chunk.split('').map(val => Number(val));
  digits = digits.map(num => num * num * num);
  let sum = digits.reduce((sum, val) => sum + val);
  if (sum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function revrot(str, size) {
  if (size <= 0 || str === '' || size > str.length) return "";
  let chunks = getChunks(str, size);
  let finalChunks = [];
  chunks.forEach(chunk => {
    if (isDivisible(chunk)) {
      finalChunks.push(chunk.split('').reverse().join(''));
    } else {
      finalChunks.push(rotate(chunk));
    }
  });
  return finalChunks.join('');
}

console.log(revrot("123456987654", 6)); // --> "234561876549"
//console.log(revrot("123456987653", 6)); // --> "234561356789"
//console.log(revrot("66443875", 4)); // --> "44668753"
//console.log(revrot("66443875", 8)); // --> "64438756"
//console.log(revrot("664438769", 8)); // --> "67834466"
//console.log(revrot("123456779", 8)); // --> "23456771"
//console.log(revrot("", 8)); // --> ""
//console.log(revrot("123456779", 0)); // --> ""
//console.log(revrot("563000655734469485", 4)); // --> "0365065073456944"
