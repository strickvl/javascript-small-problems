"use strict";

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

input: string made up of words
output: transformed string

rules:
- string will have at least one word
- if the word has more than 5 chars, then reverse it
- split the sentence up into words on the " " char.

algo:
- words is the split words
- map the words array: return the word if < 5 characters long / reverse it if not
- join up this words array and return it

*/

function reverseWord(str) {
  let chars = str.split('');
  return chars.reverse().join('');
}

function spinWords(sentenceString){
  let wordsArr = sentenceString.split(' ');
  return wordsArr.map(word => {
    if (word.length < 5) {
      return word;
    } else {
      return reverseWord(word);
    }
  }).join(' ');
}

console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")); // returns "This is rehtona test"
