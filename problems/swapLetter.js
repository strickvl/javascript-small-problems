// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word.
// You may also assume that each string contains nothing but words and spaces,
// and that there are no leading, trailing, or repeated spaces.

function swapWord(string) {
  var newWord = string.split('');
  var start = newWord[0];
  var end = newWord[newWord.length - 1];
  newWord[0] = end;
  newWord[newWord.length - 1] = start;

  return newWord.join('');
}

function swap(string) {
  var words = string.split(' ');
  transformedWords = words.map(word => swapWord(word));
  return transformedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
