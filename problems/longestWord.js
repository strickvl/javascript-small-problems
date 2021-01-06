function longestWord(words) {
  return myReduce(words, longest);
}

function myReduce(array, func, initial = array[0]) {
  let accumulator = initial;
  array.forEach(value => accumulator = func(accumulator, value));
  return accumulator;
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
