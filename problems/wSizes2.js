function wordSizes(string) {
  if (string === '') { return {}; }
  var words = string.split(' ');
  var counts = {};

  for (word of words) {
    onlyLettersWord = word.match(/[A-Za-z]/g).join('')
    if (Object.keys(counts).includes(String(onlyLettersWord.length))) {
      counts[String(onlyLettersWord.length)] += 1
    } else {
      counts[String(onlyLettersWord.length)] = 1
    }
  }

  return counts;
}


// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size.
// For instance, the word size of "it's" is 3, not 4.




console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
