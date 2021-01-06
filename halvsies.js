function halvsies(arr) {
  var part1;
  var part2;

  if (arr.length % 2 === 0) {
    part1 = arr.slice(0, arr.length / 2);
    part2 = arr.slice(arr.length / 2);
    return [part1, part2];
  } else {
    part1 = arr.slice(0, arr.length / 2 + 1);
    part2 = arr.slice(arr.length / 2 + 1);
    return [part1, part2];
  }
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
