function union(arr1, arr2) {
  comboArr = []
  var i;

  for (i = 0; i < arr1.length; i += 1) {
    if (!comboArr.includes(arr1[i])) {
      comboArr.push(arr1[i]);
    }
  }

  for (i = 0; i < arr2.length; i += 1) {
    if (!comboArr.includes(arr2[i])) {
      comboArr.push(arr2[i]);
    }
  }

  comboArr.sort
  return comboArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
