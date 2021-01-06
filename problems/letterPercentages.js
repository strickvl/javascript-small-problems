/*

Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

input string
output, object with three properties
- % of chars in the string that are lowercase (as a string with two decimal points)
- % of chars in the string that are uppercase (as a string with two decimal points)
- % of chars in the string that are neither (as a string with two decimal points) -- regex anything not A-Za-z

examples

ds:
- an object for the output

algorithm:
- get the total char count by getting the length of the split string
- replace to get rid of the non-upper case -- then length for the upper and lowercase letters
- then the remainder is neither
- have a formatter method that formats the values for the string output to the object
- return the object
*/

function format(num) {
  return (num * 100).toFixed(2);
}

function letterPercentages(string) {
  let totalCharCount = string.length;
  let lowercase = (string.slice().replace(/[^a-z]/g, '').length) / totalCharCount;
  let uppercase = (string.slice().replace(/[^A-Z]/g, '').length) / totalCharCount;
  let neither = (string.slice().replace(/[A-Za-z]/g, '').length) / totalCharCount;

  return {'lowercase': format(lowercase),
          'uppercase': format(uppercase),
          'neither': format(neither),
         }
}

console.log(letterPercentages('abCdef 123')); // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef')); // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123')); // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(letterPercentages('123..abNY-')); // { lowercase: "20.00", uppercase: "20.00", neither: "60.00" }
