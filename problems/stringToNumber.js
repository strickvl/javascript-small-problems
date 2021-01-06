function stringToInteger(str) {
  var reverse_digits = [];
  var integer = 0
  for (var i = str.length-1; i >= 0; i -= 1) {
    reverse_digits.push(Number(str[i]));
  }

  integer = reverse_digits.shift();

  for (var i = 0; i < reverse_digits.length; i += 1) {
    integer += reverse_digits[i] * (10 ** (i + 1))
  }

  return integer;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
