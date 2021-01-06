function repeater(string) {
  newString = '';
  var i;

  for (i = 0; i < string.length; i += 1) {
    newString += string[i].repeat(2);
  }

  return newString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
