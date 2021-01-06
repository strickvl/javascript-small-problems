/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

input: a string ready for generating hashtags out of them
output: a hashtag

rules:
- output must start with #
- all words must have their first letter capitalised
- if the final result.length > 140, return false
- if the input or result is '', then return false
- words must be joined together without spaces

ds: array to store the words

algo:
function to capitalise the first char of a word
- take a string
return the first char of the string to upper case + the rest of the string downcase

MAIN FUNCTION:
- split the string on space + filter to remove space entries (SET THIS ALL TO WORDS var)
- map the words to capitalise them
- set the finalstr to words.join('')
- if finalstr > 140 or finalstr === '' or str === '' {return false}
- return finalstr;

*/

function capitalise(str) {
  return str[0].toUpperCase() + str.split('').splice(1).join('').toLowerCase();
}

function generateHashtag(str) {
  let words = str.split(' ').filter(word => word !== '');
  words = words.map(word => capitalise(word));
  let final = "#" + words.join('');
  if (final.length > 140 || final === '#' || str === '') return false;
  return final;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata")); // "#HelloThereThanksForTryingMyKata"
console.log(generateHashtag("    Hello     World   ")); // "#HelloWorld"
console.log(generateHashtag("")); // false
console.log(generateHashtag(" Hello there thanks for trying my Kata Hello there thanks for trying my Kata Helloy Kata Hello there thanks for trying my Kata Hey Kata Hello there thanks for trying my Kata Hey Kata Hello there thanks for trying my Kata He there thanks for trying my Kata")); // false
