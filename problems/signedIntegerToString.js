var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(integer) {
  if (integer === 0) {
    return 0;
  } else if (integer >= 1) {
    return "+" + integerToString(integer);
  } else {
    positiveNumber = integerToString(Math.abs(integer));
    return "-" + positiveNumber;
  }
}

function integerToString(number) {
  var result = '';
  var remainder;

  do {
    remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
