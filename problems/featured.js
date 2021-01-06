/*
A featured number (something unique to this exercise) is
- an odd number that is a multiple of 7, with all of its digits occuring exactly once each.

For example, 49 is a featured number,
but 98 is not (it is not odd),
97 is not (it is not a multiple of 7),
and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument,
and returns the next featured number greater than the integer.
Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

algo: iterate through numbers until you reach a featured number

isFeatured algo:
- is it a multiple of 7? false if not
- if it is, then check that each digit occurs only once
(iterate over the numbers, assign the digit to an array. if that new arr has a number already in it, then false
otherwise true
*/

function isFeatured(num) {
  if (num % 7 !== 0 || num % 2 === 0) return false;
  digits = String(num).split('');
  uniqueDigits = [];
  for (let i = 0; i < digits.length; i += 1) {
    if (uniqueDigits.includes(digits[i])) return false;
    uniqueDigits.push(digits[i]);
  }
  return true;
}

function featured(num) {
  if (num === 9876543201) {
    return 'there is no next featured number';
  } else {
    for (let i = num + 1; i <= 9876543201; i += 1) {
      if (isFeatured(i)) return i;
    }
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543201));    // 'there is no next featured number'
