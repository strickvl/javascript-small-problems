function convertChar(char, offset) {
  let currentCode = char.charCodeAt(0);
  let upperValue = 0;
  let newCode = 0;
  if (currentCode >= 97) {
    upperValue = 123 - offset;
    if (currentCode >= upperValue) {
      newCode = currentCode - 26 + offset;
    } else {
      newCode = currentCode + offset;
    }
  } else if (currentCode >= 65) {
    upperValue = 91 - offset;
    if (currentCode >= upperValue) {
      newCode = currentCode - 26 + offset;
    } else {
      newCode = currentCode + offset;
    }
  }

  return String.fromCharCode(newCode);
}

function caesarEncrypt(string, offset) {
  let stringChars = string.split('');
  let transformedChars = stringChars.map(char => {
    if (/[A-Za-z]/.test(char)) {
      return convertChar(char, offset);
    } else {
      return char;
    }
  })

  return transformedChars.join('');
}

/*
  input: string, keyword
  output: transformed string

  ds: array to store the chars?

  algo:
  - finalArr = []
  - offsetArr = lowercase the keyword + map it to an array of offsets (code - 96)
  - init keyword counter variable to 0
  - split the string and iterate over it
  - if the char is not [A-Za-z] just add it to the finalArr
  - if it is, then transform the char with caesarEncrypt with an offset of the value of offsetArr[keywordcounter]
  - increment the keywordcounter by one. if it now === keyword.length, then set it back to 0 again
  - at the end, return the joined string
*/

function vigenereEncrypt(string, keyword) {
  let finalArr = [];
  let offsetArr = keyword.toLowerCase().split('').map(char => char.charCodeAt(0) - 97);
  let keywordCounter = 0;

  string.split('').forEach(char => {
    if (/[A-Za-z]/.test(char)) {
      let newChar = caesarEncrypt(char, offsetArr[keywordCounter]);
      finalArr.push(newChar);
      keywordCounter += 1;
      if (keywordCounter === keyword.length) keywordCounter = 0;
    } else {
      finalArr.push(char);
    }
  });

  return finalArr.join('');
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat')); // returns "Bmnxmtpeqw dhz'x gh ar pbldal!"
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'A')); // returns "Pineapples don't go on pizzas!"
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa')); // returns "Pineapples don't go on pizzas!"
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab')); // returns "Riogaqrlfu dpp't hq oo riabat!"
console.log(vigenereEncrypt("Dog", 'rabbit')); // returns "Uoh"
