function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (isAString(array[i]) == false) {
      return false; 
    } 
  } 
  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString)); // returns true
console.log(myOwnEvery(['a', 'a234', '1abc', 13, [1, 5]], isAString)); // returns false