/*
I want to count from 1 to n. How many times will I use a '9'?

9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a postive integer.

input: a number
output: a number (the number of times we'll encounter '99' during that run)

rules:
- count all 9 digits during the count from 1 to n

datastruct: an array to capture the digits (filtered to remove any nines

algorithm:
- setup a counter to store the number of 9s
- iterate from 1 to n; for each number:
  - turn the number into a string
  - split the digits and map them to numbers
  - filter the numbers that are 9
  - get a count for that final array
  - add that count to the main counter
*/

function number9(int) {
  let counter = 0;
  for (let i = 1; i <= int; i += 1) {
    let countOfNine = String(i).split('').map(val => Number(val)).filter(val => val === 9).length;
    counter += countOfNine;
  }
  return counter;
}

console.log(number9(8)); // 0
console.log(number9(9)); // 1
console.log(number9(10)); // 1
console.log(number9(98)); // 18
console.log(number9(100)); // 20
