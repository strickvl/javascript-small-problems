/*
Write a function that computes the difference between the square of the sum of the first n positive integers
and the sum of the squares of the first n positive integers.

algo:
- iterate to produce the first n positive integers (for loop?)

*/

function sumSquareDifference(num) {
  let vals = []
  for (let i = 1; i <= num; i += 1) {
    vals.push(i);
  }

  let squareSum = vals.reduce((sum, val) => sum + val) ** 2;
  let sumSquares = vals.reduce((sum, val) => sum + (val ** 2));
  return squareSum - sumSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
