/*
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number

write a function to check if a number is a single digit
setup a counter to 0 at beginning for number of times needed to turn into single digit

loop while isSingleDigit(val) === false
- get the digits
- reduce them by timesing them together
- make that the new value of val

return counter
*/

function isSingleDigit(val) {
  let stringVal = String(val);
  if (stringVal.length === 1) return true;
  return false;
}

function persistence(num) {
  let count = 0;
  while (isSingleDigit(num) === false) {
    let digits = String(num).split('').map(val => Number(val));
    num = digits.reduce((accum, val) => accum * val, 1);
    count += 1;
  }
  return count;
}

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0
