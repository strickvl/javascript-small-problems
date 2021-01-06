function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, idx) => {
    return Number(digitChar) * Math.pow(8, numberString.length - idx - 1)
  });
  return decimalParts.reduce((accumulator, part) => {
    return accumulator + part;
  });
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
