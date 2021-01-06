// Problem rules / IO;
// input, two version numbers as strings, version levels separated by .
// output: -1 if v1 is less than v2, 0 if they're at the same level, and +1 if v1 is more than v2
// If either version number contains characters other than digits and the . character, we should return null.

// implicit rules:
// 0 is a level on its own
// the numbers don't work as decimals... i.e. .2. is lower than .18.

// data structures: keep the split values into an array?

// algorithm:
//   - return null if invalid input (i.e. if either of the strings have anything not num and . (regex?) (pattern in a const?) // METHOD?
// - split the string into its constituent parts, separating on the ., and mapping these to coerce into Number type // METHOD?
// if one array is shorter than the other, add the requisite number of 0 values to the smaller array to make them the same length
// set the max-length (i.e. the total number of iterations we need to make) as the length of the largest array (they should be the same now)
// algorithm should be to iterate over the paired values of the two arrays. at any point if one of the two numbers is more or less, then return -1 or 1
// if the two values at a level are 0, then compare at the next level
// if at the end of all this we still haven't found one larger or smaller, then return 0

function isInvalidInput(string) {
  const regexPattern = /[^0-9.]/
  return regexPattern.test(string);
}

function processInput(string) {
  return string.split(".").map(string => Number(string));
}

function addExtraZeroes(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return [arr1, arr2];
  } else if (arr1.length < arr2.length) {
    extrasZeroCount = arr2.length - arr1.length
    for (let i = 1; i <= extrasZeroCount; i += 1) {
      arr1.push(0);
    }
    return [arr1, arr2];
  } else {
    extrasZeroCount = arr1.length - arr2.length
    for (let i = 1; i <= extrasZeroCount; i += 1) {
      arr2.push(0);
    }
    return [arr1, arr2];
  }
}

function compareVersions(version1, version2) {
  if (isInvalidInput(version1) || isInvalidInput(version2)) return null;
  let arr1 = processInput(version1);
  let arr2 = processInput(version2);
  let arrays = addExtraZeroes(arr1, arr2);
  arr1 = arrays[0];
  arr2 = arrays[1];
  let iterationNumber = arr1.length;
  for (let i = 0; i < iterationNumber; i += 1) {
    if (arr1[i] < arr2[i]) {
      return -1;
    } else if (arr1[i] > arr2[i]) {
      return 1;
    }
  }
  return 0;
}



console.log(compareVersions("0.1", "1") === -1);
console.log(compareVersions("1", "1.0") === 0);
console.log(compareVersions("1.0", "1.1") === -1);
console.log(compareVersions("1.1", "1.2") === -1);
console.log(compareVersions("1.2", "1.2.0.0") === 0);
console.log(compareVersions("1.2.0.0", "1.18.2") === -1);
console.log(compareVersions("1.18.2", "13.37") === -1);
console.log(compareVersions("13.37", "1.18.2") === 1);
console.log(compareVersions("1.18.2", "13.ab") === null);
console.log(compareVersions('1.0', '1.0.5') === -1);
