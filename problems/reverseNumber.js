function reverseNumber(int) {
  var newNum = '';
  var i;
  var stringNum = String(int);

  for (i = stringNum.length - 1; i >= 0; i -= 1) {
    newNum += stringNum[i];
  }

  return Number(newNum);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
