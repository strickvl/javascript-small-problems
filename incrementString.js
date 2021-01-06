/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

input: string
output: a transformed string

rules:
- if the string ends with a number, increment that number by 1
- if the string doesn't end with a number, append 1 to the string
- if there are leading zeros, remember to keep them when transforming the string
- the numbers are always 0 or above

algo:
- setup a variable for the word
- setup a variable for any matches for numbers
- get matches for the two parts of the string
  - put the word match into the variable
  - put the numbers match into the numbers variable
- run a sub-method to increment the numbers match variable
  - if there is no numbers match, then set the numbers variable to 1
  - if there is a numbers match:
    - split the numbers into leading zeros and numbers
    - if there are no leading zeros, just return the incremented number as a string
    - if there are leading zeros:
      - if the final number is 9, remove one of the zeros
      - increment the number
      - add both those two parts together and return it as a string.
- return the word part together with the numbers part
*/

function incrementStringNum(input) {
  if (input === null) {
    return '1';
  } else {
    let zeros = input[0].match(/^[0]+/g);
    let numbers = input[0].match(/[1-9]+[0-9]*$/g);
    if (zeros === null) {
      return String(Number(numbers) + 1);
    } else if (numbers !== null) {
      if (numbers[0][numbers.length - 1] === '9') {
        zeros = zeros[0].slice(1);
      }
      return zeros + String(Number(numbers) + 1);
    } else {
      return zeros[0].slice(1) + '1';
    }
  }
}

function incrementString(string) {
  if (string === '') return '1';
  let wordRegex = /[A-Za-z]+/g
  let numRegex = /[0-9]+/g
  let word = string.match(wordRegex);
  let numbers = string.match(numRegex);
  let newNumber = incrementStringNum(numbers);
  if (word === null) {
    return newNumber;
  } else {
    return word + newNumber;
  }
}

console.log(incrementString('foo')); // foo1
console.log(incrementString('foobar23')); // foobar24
console.log(incrementString('foo0042')); // foo0043
console.log(incrementString('foo9')); // foo10
console.log(incrementString('foo099')); // foo100
console.log(incrementString('foo0099')); // foo0100
console.log(incrementString('')); // '1'
console.log(incrementString('1')); // '2'
console.log(incrementString('foo0')); // foo1
console.log(incrementString('foobar000')); // 'foobar001'
