function interleave(arr1, arr2) {
  var compositeArr = [];
  var i;

  for (i = 0; i < arr1.length; i += 1) {
    compositeArr.push(arr1[i]);
    compositeArr.push(arr2[i]);
  }

  return compositeArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
