/*

You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

P:
input is a string
output is an array of all the numbers referenced

rules:
- things separated by commas are separate sets (either individual digits or ranges
- ranges are separated by -, : or .
- we're given a string, but we have to output real numbers at the end
- there are no non-number values apart from the separators in the input (and no need to account for them)

data structures:
- an array to receive the output

algorithm:
SUBMETHODS?
- a method to detect if the element is a range or a single number (DONE)
  - check if the element has -, : or . in it
  - if yes, then it's a range

- a separate method to spit out the numbers for a range
  - split the elements by the separator so you have an array of the start and the end element (+ map to convert them all to number types)
  - have a loop handling pairs of elements (i.e. 1st element to the 2nd, then if there are more, then 2nd to 3rd etc)
  - see if the value of the first element needs updating (i.e. if it is less than the previous number -- if so, then add the next digit) -- USE CONVERT SINGLE-DIGIT NUM
  - if the first element is less than the second element, then just iterate over the numbers
  - if the first element is more than the second one: (THIS BIT PROBABLY NOT NEEDED IF WE'RE UPDATING WITH THE METHOD ABOVE
    - start at the first digit and keep iterating
    - when your final digit(s) are the same as the next number in the pair, then add that number and break out of the loop.

- convert single-digit method
  - takes the previous number and the current number (the previous number defaults to 0)
  - if the previous number < current, then return the current number
  - if previous number is > current number, then iterate upwards until the final digit(s) of the counter are the same as the current number. THAT is what you return.

- the main method for everything together
  - split all the elements by ','
  - if the number is a range, process it as a range
  - if it's just a number, convert it to a full number (i.e. depending on the shorthand) + add it to the newarray



*/

function processRange(rangeString, arr) {
  const SEPARATORS_REGEX = /[\-\:\.]/;
  let separator = rangeString.match(SEPARATORS_REGEX)[0]
  let items = rangeString.split(separator);
  let rangeElements = [];
  for (let i = 0; i < items.length - 1; i += 1) {
    if (i === 0 && arr.length > 0) {
      newArrLast = arr.flat(Infinity)[arr.flat(Infinity).length - 1]
      items[i] = convertSingleDigitShorthand(String(newArrLast), items[i])
    }
    let pair = [Number(items[i]), convertSingleDigitShorthand(items[i], items[i + 1])];
    let subElements = [];
    for (let v = pair[0]; v <= pair[1]; v += 1) {
      subElements.push(v);
    }
    rangeElements.push(subElements);
  }
  return rangeElements.flat(Infinity);
}

function isRange(string) {
  let regex = /[\.\-\:]/
  if (regex.test(string)) {
    return true;
  } else {
    return false;
  }
}

function convertSingleDigitShorthand(prevNumString, currNumString) {
  if (currNumString === undefined) {
    return Number(prevNumString);
  } else if (Number(prevNumString) < Number(currNumString)) {
    return Number(currNumString);
  } else if (Number(prevNumString) >= Number(currNumString)) {
    let regexpvalue = `${currNumString}$`
    let regex = new RegExp(regexpvalue);
    for (let i = Number(prevNumString); i < Infinity; i += 1) {
      if (regex.test(String(i))) {
        return i;
      }
    }
  }
}

function convertShortHand(string) {
  string = string.replace(/[ ]/, '')
  let newArr = [];
  let items = string.split(',');
  for (let i = 0; i < items.length; i += 1) {
    let item = items[i];
    if (isRange(item)) {
      newArr.push(processRange(item, newArr));
    } else if (i === 0) {
      newArr.push(Number(item));
    } else {
      let previousValue = newArr[newArr.length - 1];
      if (Array.isArray(previousValue)) {
        previousValue = previousValue[previousValue.length - 1];
        newArr.push(convertSingleDigitShorthand(previousValue, Number(item)));
      } else {
        newArr.push(convertSingleDigitShorthand(previousValue, Number(item)));
      }
    }
  }
  return newArr.flat(Infinity);
}

console.log(convertShortHand("1, 3, 7, 2, 4, 1")) // [1, 3, 7, 12, 14, 21]
console.log(convertShortHand("1-3, 1-2")) // [1, 2, 3, 11, 12]
console.log(convertShortHand("1:5:2")) // 1, 2, 3, 4, 5, 6, ... 12
console.log(convertShortHand("104-2")) // 104, 105, ... 112
console.log(convertShortHand("104-02")) // 104, 105, ... 202
console.log(convertShortHand("545, 64:11")) // 545, 564, 565, .. 611
