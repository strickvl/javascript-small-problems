/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

input, string and a number for the offset val
output: the transformed string

algorithm:
function to convert a single letter
input: letter, offset val

- get the current charCode for the letter
- if it's above 97, then it's lower case
  upper value = 123 - offset val
  if val is == or higher than upper value, then subtract 26 from the value
  if it's not (i.e. it's lesser) then just return the value + the offset
- else if it's above 65 then it's upper case
  upper value = 90 - offset val
  if val is == or higher than upper value, then subtract 26 from the value
  if it's not (i.e. it's lesser) then just return the value + the offset

main algorithm:
- convert the string into an array of chars
- map the array of chars (if A-Za-z then return the transformed char, otherwise return the original char)
- join up the array of chars at the end and return it
*/

function convertChar(char, offset) {
  let currentCode = char.charCodeAt(0);
  let upperValue = 0;
  let newCode = 0;
  if (currentCode >= 97) {
    upperValue = 123 - offset;
    if (currentCode >= upperValue) {
      newCode = currentCode - 26 + offset;
    } else {
      newCode = currentCode + offset;
    }
  } else if (currentCode >= 65) {
    upperValue = 91 - offset;
    if (currentCode >= upperValue) {
      newCode = currentCode - 26 + offset;
    } else {
      newCode = currentCode + offset;
    }
  }

  return String.fromCharCode(newCode);
}

function caesarEncrypt(string, offset) {
  let stringChars = string.split('');
  let transformedChars = stringChars.map(char => {
    if (/[A-Za-z]/.test(char)) {
      return convertChar(char, offset);
    } else {
      return char;
    }
  })

  return transformedChars.join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
