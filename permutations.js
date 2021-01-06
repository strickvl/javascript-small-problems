"use strict";

/*
  Write a function that outputs all permutations of an input string and remove duplicates, if present.
  This means, you have to shuffle all letters from the input in all possible orders.

  input: a string
  output: an array with all the various permutations of that string

  rules:
  - rotate / shuffle the letters from the input into all possible orders
  - only return unique permutations (i.e. there should be no duplicates)
  - if the string is empty, return an empty array

  ds:
  - have an array to store the permutations

  algorithm:
  - init an array to store the permutations
  - for loop for the number of times your string is long
  - init a new string with the char to shuffle around;
  - init a new string with the remaining chars (i.e. with spliced the string at the current loop index



  - if the resulting word isn't in the permutations array, then add it to the array
  - return the permutationsarray
*/

function permutations(str) {
  let versions = [];

  let outerCombos = generateOuterCombos(str);

  outerCombos.forEach(word => {
    console.log(word);
    for (let i = 0; i < str.length; i += 1) {
      let character = word[i];
      let strArr = word.split('');
      strArr.splice(i, 1);
      console.log(character);
      console.log(strArr);
      let combos = populateArr(character, strArr);
      console.log(combos);
      combos.forEach(combo => {
        if (versions.includes(combo) === false) {
          versions.push(combo);
        }
      });
    }
  });
  return versions.sort();
}

function generateOuterCombos(str) {
  let pattern = [];
  let combos = [];
  for (let i = 0; i < str.length; i += 1) {
    pattern.push(i);
  }

  for (let startIdx = 0; startIdx < str.length; startIdx += 1) {
    let counter = startIdx;
    let word = '';
    for (let i = 0; i < str.length; i += 1) {
      if (counter === str.length) counter = 0;
      word += str[pattern[counter]];
      counter += 1;
    }
    combos.push(word);
  }
  return combos;
}

function makeBlankArr(length) {
  let arr = [];
  arr.length = length;
  return arr;
}

function populateArr(char, arr) {
  let options = [];
  for (let outer = 0; outer <= arr.length; outer += 1) {
    let newArr = makeBlankArr(arr.length + 1);
    let counter = 0;
    for (let inner = 0; inner <= arr.length; inner += 1) {
      if (inner === outer) {
        newArr[inner] = char;
      } else {
        newArr[inner] = arr[counter];
        counter += 1;
      }
    }
    options.push(newArr.join(''));
  }
  return options;
}

//console.log(permutations('a')); // ['a']
//console.log(permutations('ab')); // ['ab', 'ba']
//console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
//console.log(permutations('abc')); // [\'abc\', \'acb\', \'bac\', \'bca\', \'cab\', \'cba\']
console.log(permutations('abcd')); // [\'abc\', \'acb\', \'bac\', \'bca\', \'cab\', \'cba\']
