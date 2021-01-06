/*
  DECRYPT NOTES
  ds: array to represent the fence

  algorithm:
  - initialise a newString = ''
  - init an empty fence array with three subarrays
  - set length for the subarrays as being the string length
  - init a for loop to iterate over the items of the string
  - keep repeating the pattern 0, 1, 2, 1 (for assigning values at index[counter from the string index])
  - assign the values to the fence as per the pattern
  ___PATTERN CONDITIONALS:
  - if we're on the first round, assign the strings at 0 and at 4 and 8 etc
  - if we're on the second round, assign the strings at odd numbers
  - if we're on the third round, assign the strings at 2 and any numbers -2 which are divisible by 4

  TO PACKAGE UP INTO A STRING
  - set up a for loop 0, 1, 2, iterate over the rows
  for each element in each array (ignore the undefineds; add each element to the newString)
  - return newString



for the iteration step:
- have a counter for the string index (manual)
- iterate the string index only if it was assigned
- set the row for each iteration also by the repCount
*/

function decrypt(string) {
  let newString = '';
  let fenceArr = [[], [], []];
  fenceArr[0].length = string.length;
  fenceArr[1].length = string.length;
  fenceArr[2].length = string.length;
  let rowPattern = [0, 1, 2, 1];
  let rowPatternCounter = 0;
  let stringCounter = 0;

  for (let repCount = 0; repCount < 3; repCount += 1) {
    rowPatternCounter = 0;

    for (let stringIdx = 0; stringIdx < string.length; stringIdx += 1) {
      if (rowPatternCounter === 4) {
        rowPatternCounter = 0;
      }
      if (repCount === 0) {
        if (stringIdx === 0 || stringIdx % 4 === 0) {
          fenceArr[repCount][stringIdx] = string[stringCounter];
          stringCounter += 1;
        }
      } else if (repCount === 1) {
        if (stringIdx % 2 !== 0) {
          fenceArr[repCount][stringIdx] = string[stringCounter];
          stringCounter += 1;
        }
      } else if (repCount === 2) {
        if (stringIdx === 2 || (stringIdx - 2) % 4 === 0) {
          fenceArr[repCount][stringIdx] = string[stringCounter];
          stringCounter += 1;
        }
      }
      rowPatternCounter += 1;
    }
  }
  rowPatternCounter = 0;


  for (let i = 0; i < string.length; i += 1) {
    if (rowPatternCounter === 4) {
      rowPatternCounter = 0;
    }
    let char = fenceArr[rowPattern[rowPatternCounter]][i];
    newString += char;
    rowPatternCounter += 1;
  }

  return newString;
}

/*
  ENCRYPT NOTES
  input string
  output: transformed string

  ds: array to represent the fence

  algorithm:
  - initialise a newString = ''
  - remove all spaces from the string
  - init an empty fence array with three subarrays
  - set length for the subarrays as being the string length
  - init a for loop to iterate over the items of the string
  - keep repeating the pattern 0, 1, 2, 1 (for assigning values at index[counter from the string index])
  - assign the values to the fence as per the pattern
  - set up a for loop 0, 1, 2, iterate over the rows
  for each element in each array (ignore the undefineds; add each element to the newString)
  - return newString
*/

function encrypt(string) {
  let newString = '';
  string = string.replace(/[ ]/gi, '');
  let fenceArr = [[], [], []];
  fenceArr[0].length = string.length;
  fenceArr[1].length = string.length;
  fenceArr[2].length = string.length;
  let rowPattern = [0, 1, 2, 1];
  let rowPatternCounter = 0;

  for (let stringIdx = 0; stringIdx < string.length; stringIdx += 1) {
    if (rowPatternCounter === 4) {
      rowPatternCounter = 0;
    }
    fenceArr[rowPattern[rowPatternCounter]][stringIdx] = string[stringIdx];

    rowPatternCounter += 1;
  }
  for (let i = 0; i < 3; i += 1) {
    fenceArr[i].forEach(char => {
      if (/[A-Z]/.test(char)) {
        newString = newString + char;
      }
    });
  }
  return newString;
}

console.log(encrypt("WE ARE DISCOVERED FLEE AT ONCE")); // returns "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(decrypt("WECRLTEERDSOEEFEAOCAIVDEN")); // returns "WEAREDISCOVEREDFLEEATONCE"
