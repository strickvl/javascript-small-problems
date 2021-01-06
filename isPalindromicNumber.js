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

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
