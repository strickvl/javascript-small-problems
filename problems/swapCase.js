function swapCase(string) {
  return string.split('').map(char => {
    if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
