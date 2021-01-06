function letterCaseCount(string) {
  let count = {};
  count['lowercase'] = string.split('').filter(char => /[a-z]/.test(char)).length;
  count['uppercase'] = string.split('').filter(char => /[A-Z]/.test(char)).length;
  count['neither'] = string.split('').filter(char => /[^A-Za-z]/.test(char)).length;
  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
