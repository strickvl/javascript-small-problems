function penultimate(string) {
  var splitString = string.split(' ');
  return splitString[splitString.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
