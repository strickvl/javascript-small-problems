/*
Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

input a number
output: an array of all the two-digit sums

algo:
- stringify num into digits, split into array, map into nums
- setup an array for all the sums
- have two loops to generate all the possible combinations
  - for each two-pair, sum the two and push it to the storage array
- return the storage array
*/

function number(sums) {
  let digits = String(sums).split('').map(val => Number(val));
  let arr = [];
  for (let outer = 0; outer < digits.length; outer += 1) {
    for (let inner = outer + 1; inner < digits.length; inner += 1) {
      arr.push(digits[outer] + digits[inner]);
    }
  }
  return arr;
}

console.log(number(12345)); // returns [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
