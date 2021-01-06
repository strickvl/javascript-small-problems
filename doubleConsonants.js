function doubleConsonants(string) {
  newString = '';
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (/[^aeiouAEIOU\s\d-!]/.test(string[i])) {
      newString += string[i].repeat(2);
    } else {
      newString += string[i];
    }
  }

  return newString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
