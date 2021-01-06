/*
input: an integer (for the # of bulbs & the # of repetitions)
output: an array with the bulbs that are on after int repetitions

- all switches are off initially
- do n iterations:
  - go every iteration# values and toggle those values

data structures:
- need an array to store the index values (+1) of bulbs that are on

algorithm
- set up an array with bulbs that are all set to 0
- set up an empty array for the final output vals
- do n iterations
- for each iteration, run toggleLights to toggle every index's values
- once all that is done, iterate through the array of bulbs with the index vals
  - append the index + 1 to the final output vals array
  - return the final output vals array

*/

function initialiseArray(num) {
  let arr = []
  for (let i = 1; i <= num; i += 1) {
    arr.push(0);
  }
  return arr;
}

function toggleLights(arr, num) {
  for (let i = num - 1; i < arr.length; i += num) {
    arr[i] = toggleValue(arr[i]);
  }
}

function toggleValue(val) {
  if (val === 1) {
    return 0;
  } else if (val === 0) {
    return 1;
  }
}

function lightsOn(switches) {
  let bulbs = initialiseArray(switches);
  let output = [];
  for (let i = 1; i <= switches; i += 1) {
     toggleLights(bulbs, i);
   }
  for (let j = 0; j < bulbs.length; j += 1) {
    if (bulbs[j] === 1) {
      output.push(j + 1);
    }
  }
  return output;
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0));      // []
console.log(lightsOn(1));      // [1]
