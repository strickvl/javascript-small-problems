/*
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block.

You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise.
You can consider the letters to be case-insensitive when you apply the rules.

input, string
output: boolean depending on whether it can be spelt with the blocks or not

ds:
- array of strings (paired letters) for the blocks
- array to keep the ones that have already been matched

algo:

make a sub-method to check if a letter pair matches the string we have
- regex1 = new RegExp(block[0], 'gi');
- regex2 = new RegExp(block[1], 'gi');
if (regex1.test(string)) {
  return true;
}
if pattern 2 matches, return true
else, return false



- iterate through the UPPERCASED string, character by character
  - if matchedBlocksarr.some match our character, return false
  - add the block match for the current character to matchedBlocks arr
- if you get to the end ok, then return true;

*/

const BLOCKS = ["BO", "XK", "DQ", "CP", "NA", "GT", "RE", "FS", "JW", "HU", "VI", "LY", "ZM"];

function matchesBlock(string, block) {
  regex1 = new RegExp(block[0], 'gi');
  regex2 = new RegExp(block[1], 'gi');

  if (regex1.test(string)) {
    return true;
  } else if (regex2.test(string)) {
    return true;
  } else {
    return false;
  }
}

function isBlockWord(string) {
  let matchedBlocks = [];

  for (let i = 0; i < string.length; i += 1) {
    let char = string.toUpperCase()[i];
    if (matchedBlocks.some(block => matchesBlock(char, block))) {
      return false;
    }

    for (let j = 0; j < BLOCKS.length; j += 1) {
      let block = BLOCKS[j];
      if (matchesBlock(char, block)) {
        matchedBlocks.push(block);
        break;
      }
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
