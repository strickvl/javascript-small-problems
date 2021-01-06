function isAllUnique(string) {
  let pattern = /\s+/g
  let checkString = string.toLowerCase().replace(pattern, '').split('');
  let chars = [];
  for (let i = 0; i < checkString.length; i += 1) {
    if (chars.includes(checkString[i])) {
      return false;
    } else {
      chars.push(checkString[i]);
    }
  }
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true
