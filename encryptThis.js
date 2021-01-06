"use strict";

/*
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.

input -- string (possibly of multiple words -- space separated)
output -- that string, but transformed as per the algorithm

rules:
- no special chars in the input
- split words by spaces
- each word is encrypted by itself
- for the encryption: first letter is converted to its ASCII code
- for the encryption: second letter gets switched with the last letter
- if a word only has one character, you only get the ASCII code transformation happening

ds: none needed

algorithm:
SEPARATE FUNCTION TO ENCRYPT A STRING
- get the first letter and turn it into the ASCII code
- init a remainder string variable to ''
- if the string is longer than 1 character:
  - init a remainder of string variable (slice to get this)
  - swap the first and the last values (use a temp variable)
- return the ascii bit + the remainder variable

MAIN FUNCTION:
- split the string into words on " "
- map all the separate strings as per our separate function, and join them with a " "
- return this new element
*/

function encryptWord(string) {
  let firstChar = string.charCodeAt(0);
  let remainder = '';
  if (string.length > 1) {
    let remainingChars = string.slice(1);
    let char1 = remainingChars[0];
    let char2 = remainingChars[remainingChars.length - 1];
    remainingChars = remainingChars.split('').slice(1);
    remainingChars.splice((remainingChars.length - 1), 1);
    if (string.length === 2) {
      remainder = char1;
    } else {
      remainder = char2 + remainingChars.join('') + char1;
    }
  }
  return firstChar + remainder;
}

function encryptThis(sentence) {
  let words = sentence.split(' ');
  return words.map(encryptWord).join(' ');
}

console.log(encryptThis("Hello")); // === "72olle"
console.log(encryptThis("good")); // === "103doo"
console.log(encryptThis("hello world")); // === "104olle 119drlo"
console.log(encryptThis("h w")); // === "104 119"
console.log(encryptThis("A")); // === "65"
console.log(encryptThis("he wo")); // === "104e 119o"
console.log(encryptThis("A wise old owl lived in an oak")); // === '65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
//
