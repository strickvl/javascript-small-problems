function buyFruit(arr) {
  let newArr = [];
  arr.forEach(function(pair) {
    for (let i = 0; i < pair[1]; i += 1) {
      newArr.push(pair[0]);
    }
  });
  return newArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
