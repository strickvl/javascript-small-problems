function multiplyAllPairs(arr1, arr2) {
  let finalArr = [];
  arr1.forEach(function(arr1val) {
    arr2.forEach(function(arr2val) {
      finalArr.push(arr1val * arr2val);
    });
  });

  return finalArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
