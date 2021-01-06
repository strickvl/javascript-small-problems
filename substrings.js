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

console.log(substrings('abcde'));

// returns
//[ "a", "ab", "abc", "abcd", "abcde",
//  "b", "bc", "bcd", "bcde",
//  "c", "cd", "cde",
//  "d", "de",
//  "e" ]
