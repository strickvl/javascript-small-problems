"use strict";

/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

input -- string
output -- a transformed string

rules:
- anytime we have a #, delete the character that was before it.
- if there are more # symbols than characters, return an empty string
- if an empty string is passed in, just return that
- it is possible to have two # after another. just delete the char before it, and then another from even further left.


algo:
- loop (until the count of # is > 0)
  - find the index of the first #
    - if the index value is 0, do nothing
    - if the index value is > 0
      - splice the character at index - 1 + the # (i.e. two characters)
*/

function cleanString(s) {
  let stringArr = s.split('');
  let hashCount = stringArr.join('').match(/#/g);
  if (hashCount === null) return "";
  if (hashCount.length > (s.length - hashCount.length)) return "";
  while (stringArr.includes("#")) {
    let hashIndex = stringArr.indexOf("#");
    if (hashIndex === 0) {
      continue;
    } else {
      stringArr.splice(hashIndex - 1, 2);
    }
  }
  return stringArr.join('');
};

console.log(cleanString("abc#d##c")); // ==>  "ac"
console.log(cleanString("abc##d######")); // ==>  ""
console.log(cleanString("#######")); //  ==>  ""
console.log(cleanString("")); // ==>  ""
