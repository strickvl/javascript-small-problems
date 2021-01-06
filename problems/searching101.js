var rlSync = require('readline-sync');

var numbers = [];

numbers[0] = rlSync.question('Enter the 1st number: ');
numbers[1] = rlSync.question('Enter the 2nd number: ');
numbers[2] = rlSync.question('Enter the 3rd number: ');
numbers[3] = rlSync.question('Enter the 4th number: ');
numbers[4] = rlSync.question('Enter the 5th number: ');

var compareVal = rlSync.question('Enter the last number: ');

function formatArr(arr) {
  string = '';

  for (var i = 0; i < arr.length; i += 1) {
    string += (arr[i] + ', ');
  }

  return '[' + string.slice(0, string.length - 2) + ']';
}

if (numbers.includes(compareVal)) {
  console.log(`The number ${compareVal} appears in ${formatArr(numbers)}.`);
} else {
  console.log(`The number ${compareVal} does not appear in ${formatArr(numbers)}.`);
}
