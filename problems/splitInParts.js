"use strict";

/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

String length is always greater than 0
String has no spaces
Size is always positive

algorithm:
- split the string into letters
- set up a counter 1, 2, 3
- setup a temp words
- whenever you get to the end of the counter sequenc, reset it, assign the word to the array, wipe the tempword
- whenever the index is longer than the length - 1, then stop and just assign what you have to the array

return the array joined by spaces
*/

function splitInParts (s, partLength) {
  let counter = 1;
  let chars = s.split('');
  let tempWord = '';
  let parts = [];

  for (let i = 0; i < s.length; i += 1) {
    if (counter > partLength) {
      parts.push(tempWord);
      tempWord = '';
      counter = 1;
    }

    tempWord += s[i];
    counter += 1;
  }

  parts.push(tempWord);
  return parts.join(' ');
}

console.log(splitInParts('supercalifragilisticexpialidocious', 3)); // 'sup erc ali fra gil ist ice xpi ali doc iou s'
