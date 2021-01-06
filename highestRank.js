/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

input (array
output (the number with the highest frequency

rules:

- if there are 2+ numbers with the same frequency, return the one with the highest value
- arrays will always have at least one value
- arrays will contain integers (i.e. valid input)

ds:
- unique values in the array to be iterated over

algorithm:
- write something to get the count of a value in an array
  - init a counter to 0
  - iterate over the array; update the counter if that element is === the target value
  - return the counter

MAIN FUNCTION:
- init an array for the unique vals;
- iterate over the array; if the value isn't in the uniqueArr, push it there
- init a highestCount val to 0;
- init a higestCountVal to 0;
- then iterate over uniqueVals:
  - if the count for that uniqueVal is greater than the current highestCount, update the new highestCount to the count + set the highestCountVal to the current val
  - if the count is ===, then update the highestCountVal if val > highestCountVal
return highestCount;
*/

function getCount(arr, target) {
  let count = 0;
  arr.forEach(val => {
    if (val === target) {
      count += 1;
    }
  });
  return count;
}

function highestRank(arr) {
  let uniqueVals = [];
  arr.forEach(val => {
    if (uniqueVals.includes(val) === false) {
      uniqueVals.push(val);
    }
  });
  let highestCount = 0;
  let highestCountVal = 0;
  uniqueVals.forEach(val => {

    let currentCount = getCount(arr, val);
    if (currentCount > highestCount) {
      highestCount = currentCount;
      highestCountVal = val;
    } else if (currentCount === highestCount) {
      if (val > highestCountVal) {
        highestCountVal = val;
      }
    }
  });
  return highestCountVal;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3
