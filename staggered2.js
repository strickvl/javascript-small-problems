function staggeredCase(string) {
  counter = 0;
  let newStr = '';

  for (let i = 0; i < string.length; i += 1) {
    if (/[^a-zA-Z]/.test(string[i])) {
      newStr += string[i];
    } else if (counter % 2 === 0) {
      newStr += string[i].toUpperCase();
      counter += 1;
    } else if (counter % 2 !== 0) {
      newStr += string[i].toLowerCase();
      counter += 1;
    }
  }
  return newStr;
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
