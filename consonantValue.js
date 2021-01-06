"use strict";

/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

input: string
output: value of the sum of counts for the letters of the highest-scoring string pattern

rules:
- substrings are separated by vowels
- for each substring, calculate the values by summing their 1-26 # value together (SUBMETHOD)
- return the highest summing substring value

algo:
- split the strings on any vowel letters
- write a method to get the value of summed sub-string letters
- map the substring array using the method to get the values, and sort to return the highest value
*/

function getLetterValSum(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i) - 96;
  }
  return sum;
}

function solve(s) {
  let regex = /[aeiou]/
  let arr = s.split(regex);
  return arr.map(getLetterValSum).sort((a, b) => b - a)[0];
};

console.log(solve("zodiac")); // 26
console.log(solve("chruschtschov")); //80
console.log(solve("khrushchev")); // 38
console.log(solve("strength")); // 57
console.log(solve("catchphrase")); // 73
console.log(solve("twelfthstreet")); // 103
console.log(solve("mischtschenkoana")); // 80
