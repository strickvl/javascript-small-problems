function isPalindrome(string) {
  var firstPart;
  var secondPart;

  if (string.length % 2 === 0) {
    midpoint = (string.length / 2);
    firstPart = string.slice(0, midpoint);
    secondPartReversed = string.slice(midpoint).split('').reverse().join('');
    if (firstPart === secondPartReversed) {
      return true;
    } else {
      return false;
    }
  } else {
    midpoint = Math.floor(string.length / 2);
    firstPart = string.slice(0, midpoint + 1);
    secondPartReversed = string.slice(midpoint).split('').reverse().join('');
    if (firstPart === secondPartReversed) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
