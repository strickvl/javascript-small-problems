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

function isRealPalindrome(string) {
  regex = /[^A-Za-z0-9]/g
  testString = string.slice().toLowerCase().replace(regex, '');
  return isPalindrome(testString);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
