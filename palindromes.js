function substringsAtStart(string) {
  return string.split('').map(function (char, idx) {
    return string.slice(0, idx + 1);
  });
}

function substrings(str) {
  let arr = [];
  str.split('').forEach((char, idx) => {
    let substrs = substringsAtStart(str.slice(idx));
    substrs.forEach(function (substr) {
      arr.push(substr);
    })
  });
  return arr;
}

function isPalindrome(str) {
  let chars = []
  str.split('').forEach(function(char) {
    chars.unshift(char);
  });
  return chars.join('') === str;
}

function palindromes(str) {
  return substrings(str).filter(substr => isPalindrome(substr) && substr.length > 1);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
