"use strict";

/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

input -- a string with a test case IP address
output -- a boolean stating whether that case is valid or not

rules:
- a valid IP has 4 sets of digits
- the digit sets must be between 0 and 255 (inclusive)
- leading zeroes invalidate the result

ds -- an array of our values

algorithm:
- split the string by '.'
- if the length of the array is not === 4, return false
- iterate over the numbers one by one (as strings):
  - if there any alpha chars, return false
  - if it is two digits and the first digit is a zero, return false
  - if you turn it into a number and it is outside the range 0-255 (incl), return false
- otherwise return true
*/

function isValidIP(str) {
  let arr = str.split('.');
  if (arr.length !== 4) return false;
  for (let i = 0; i < arr.length; i += 1) {
    let element = arr[i];
    if (element === '') return false;
    if (/[^0-9]/.test(element)) return false;
    if (element.length > 1 && element[0] === '0') return false;
    if (Number(element) < 0 || Number(element) > 255) return false;
  }
  return true;
}

console.log(isValidIP('1.2.3.4')); // true
console.log(isValidIP('123.45.67.89')); // true
console.log(isValidIP('1.2.3')); // false
console.log(isValidIP('1.2.3.4.5')); // false
console.log(isValidIP('123.456.78.90')); // false
console.log(isValidIP('123.045.067.089')); // false
