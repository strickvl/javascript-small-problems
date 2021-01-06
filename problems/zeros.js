/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

input is a number, that you have to calculate the factorial for (function?)
output, is the number of trailing zeros

algorithm:

- get the factorial for a number
  - iterate from 1 up to the number, timesing the value by each successive (use reduce)
  - return the final value
- convert the number to a string
- get the match for regex pattern for the final zeros
- return the length of this match
*/

function getFactorial(n) {
  let factorial = 1;
  for (let index = 1; index <= n; index += 1) {
    factorial *= index;
  }
  return factorial;
}

function zeros(n) {
  let nFactorialString = String(getFactorial(n));
  let regex = /0*$/g
  return nFactorialString.match(regex)[0].length;
}

console.log(zeros(6) == 1);
// 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

console.log(zeros(12) == 2);
// 12! = 479001600 --> 2 trailing zeros

//console.log(zeros(30));
//console.log(getFactorial(30));
