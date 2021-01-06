function swapName(string) {
  var splitName = string.split(' ');
  var firstName = splitName[0];
  var lastName = splitName[splitName.length - 1];

  if (splitName.length > 2) {
    firstName += ' ' + splitName[1]
  }

  return `${lastName}, ${firstName}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('William Alexander Strick')); // 'Strick, William Alexander'
