function sequence(int) {
  var newArr = [];
  var i;

  for (i = 1; i <= int; i += 1) {
    newArr.push(i);
  }

  return newArr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
