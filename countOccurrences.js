function countOccurrences(arr) {
  var counts = {};
  var i;
  var j;

  for (i = 0; i < arr.length; i += 1) {
    if (Object.keys(counts).includes(arr[i])) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }

  for (j = 0; j < Object.keys(counts).length; j += 1) {
    item = Object.keys(counts)[j];
    console.log(`${item} => ${counts[item]}`);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
