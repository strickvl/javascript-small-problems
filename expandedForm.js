/*
You will be given a number and you will need to return it as a string in Expanded Form.
See test cases below for more details.
NOTE: All numbers will be whole numbers greater than 0.

input: a number greater than 0;
output: a string with the various parts separated by " + "

rules:
- return a string separated by " + "
- numbers should be split into the constituent parts depending on where it is in the original digit
ds: an array to store the digits

algo:
- separate the number into an array of digits by converting to string, then splitting then mapping to num + reverse it
- setup a finalArr to [];
- iterate over the numbers in the digitsArr with index value
  - if num is > 0:
    - push that number * 10 to the power of the index value
- return finalArr.join(' + ');
*/

function expandedForm(num) {
  let reverseDigits = String(num).split('').map(val => Number(val)).reverse();
  let finalArr = [];
  reverseDigits.forEach((val, idx) => {
    if (val > 0) {
      finalArr.push(val * Math.pow(10, idx));
    }
  });
  return finalArr.reverse().join(' + ');
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
