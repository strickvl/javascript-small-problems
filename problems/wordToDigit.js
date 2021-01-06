/*

Write a function that takes a sentence string as an argument,
and returns that string with every occurrence of a "number word" —
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' —
converted to its corresponding digit character.

- convert every number word into a digit character
- don't do this when the word is inside another word (i.e. sixes should remain as it is)
- return a string at the end with all the parts joined up together
- case doesn't matter
- hyphens don't count
- returns a new string copy of the original


DS none needed
algorithm -- regex problem
iterate over an array of the words with the index values
replace each word (case insensitive) noting word boundaries with the index value
*/

function wordToDigit(string) {
  let newString = string.slice();
  const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  WORDS.forEach((word, idx) => {
    let wordInput = `\\b${word}\\b`
    let regex = new RegExp(wordInput, 'gi');
    newString = newString.replace(regex, String(idx));
  });
  return newString;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.')); // "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('Give me six sixes, please.')); // "Give me 6 sixes, please."
console.log(wordToDigit('Six six Seven.')); // "6 6 7"
console.log(wordToDigit('six-six seven')); // '6-6 7'
console.log(wordToDigit('')); // ''
