var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(string) {
  var value = 0;
  var numbers = stringToNumbers(string)[1];
  var signing = stringToNumbers(string)[0];
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];
  }

  if (signing === -1) {
    return value * -1;
  } else {
    return value;
  }
}

function removeSigning(string) {
  if (string[0] === '+') {
    return [1, string.slice(1)]
  } else if (string[0] === '-') {
    return [-1, string.slice(1)]
  } else {
    return [0, string];
  }
}

function stringToNumbers(string) {
  numbers = removeSigning(string)[1]
  signing = removeSigning(string)[0]
  var result = [];
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    result.push(DIGITS[numbers[i]]);
  }

  return [signing, result];
}


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
