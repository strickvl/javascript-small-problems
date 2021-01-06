/*

input
a string of letters
output: boolean

we have a constant of the blocks (pairs of letters)

rules:
- input should be a string type
- the algorithm is case insensitive + only pays attention to alpha chars DONE
- if we ever use both letters of a pair, return false DONE
- if we use one of the letters of a pair, we can never use that a second time

algorithm:

- make a list of already-used characters. if we ever use a character, then add both chars from the block into the already-used
- our algorithm must check if we're using one of the current block

*/

const blocks = [['B', 'O'],
                ['X', 'K'],
                ['D', 'Q'],
                ['C', 'P'],
                ['N', 'A'],
                ['G', 'T'],
                ['R', 'E'],
                ['F', 'S'],
                ['J', 'W'],
                ['H', 'U'],
                ['V', 'I'],
                ['L', 'Y'],
                ['Z', 'M']]

function hasBoth(string, blockList) {
  let upperStringArr = string.split('');

  for (let i = 0; i < blockList.length; i += 1) {
    regex1 = new RegExp(`[${blockList[i][0]}]`, 'g');
    regex2 = new RegExp(`[${blockList[i][1]}]`, 'g');
    if (regex1.test(upperStringArr) && regex2.test(upperStringArr)) {
      return true;
    }
  }

  return false;
}

function hasInvalidChars(string, blocks) {
  let flatBlocks = blocks.flat(Infinity);
  return !(string.split('').some(char => flatBlocks.includes(char)));
}

function formatString(string) {
  regex = /[^A-Za-z]/gi
  return string.replace(regex, '').toUpperCase();
}

function isBlockWord(string, blocks) {
  let testStr = formatString(string);
  if (hasBoth(testStr, blocks) || hasInvalidChars(testStr, blocks)) return false;

}

isBlockWord('BATCH') === true;
isBlockWord('batch') === true;
isBlockWord('batch13') === true;
isBlockWord('batch.') === true;
isBlockWord('BUTCH') === false;
isBlockWord('jest') === true;
isBlockWord('y') === false;
isBlockWord('Y') === false;
isBlockWord('BO') === false;
isBlockWord('B') === true;
isBlockWord('BB') === false;
isBlockWord(13) === false;
isBlockWord([]) === false;
isBlockWord('floW') === true;
isBlockWord('APPLE') === false;
isBlockWord('apple') === false;
isBlockWord('apPLE') === false;
isBlockWord('Box') === false;
