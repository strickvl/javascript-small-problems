/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers,
such as credit card numbers Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit,
which is usually appended to a partial number to generate the full number.

This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulus 10 is congruent to 0),
then the number is valid according to the Luhn Formula; else it is not valid.
Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula.
This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

input: number in string format
output: true or false depending on whether it's a valid luhn number

rules / test cases:
- start on the rightmost digit annd move left / doubling the value of every second digit
- add all the digits together post-transform
- if the sum % 10 === 0, then it's a valid checksum

algorithm:
- format the string to remove any non-digits
- reverse the string
- iterate over every second digit and transform them as per the formula
- sum up all the digits together from a string of consecutive numbers
- if the sum % 10 === 0, then it's valid; false if not
*/

function formatForLuhn(string) {
  let regex = /[^\d]/gi;
  let digits = string.replace(regex, '');
  let newString = ''
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    newString += digits[i];
  }
  return newString.split('');
}

function transformStringDigit(digit) {
  let newDigit = Number(digit) * 2;
  if (newDigit >= 10) {
    return String(newDigit - 9);
  } else {
    return String(newDigit);
  }
}

function sumStringNums(input) {
  return input.split('').reduce((accum, digit) => accum + Number(digit), 0);
}

function checkLuhn(input) {
  if (typeof(input) !== 'string') return false;
  let reverseDigitString = formatForLuhn(input);
  for (let i = 1; i <= reverseDigitString.length - 1; i += 2) {
    reverseDigitString[i] = transformStringDigit(reverseDigitString[i]);
  }
  reverseDigitString = reverseDigitString.join('');
  if (sumStringNums(reverseDigitString) % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkLuhn('1111') === false);
console.log(checkLuhn('8763') === true);
console.log(checkLuhn('2323 2005 7766 3554') === true);
console.log(checkLuhn('2323-2005-7766-3554') === true);
console.log(checkLuhn('2323 2005 7766 3554abcdef') === true);
console.log(checkLuhn(12345) === false);
