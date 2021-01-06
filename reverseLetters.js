function reverseLetters(string) {
  return string.split('').reverse().join('');
}

function reverseWords(string) {
  var words = string.split(' ');
  var i;
  var newWordsArr = [];

  for (i = 0; i < words.length; i += 1) {
    if (words[i].length >= 5) {
      newWordsArr.push(reverseLetters(words[i]));
    } else {
      newWordsArr.push(words[i])
    }
  }

  return newWordsArr.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
