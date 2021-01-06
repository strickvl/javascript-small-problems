/*
Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

input: integer representing a year
output: count of friday 13ths in a year

algorithm:
- init a value to store our count
- iterate over each of the months, if 13th of that month is a friday, add 1 to the count
*/

function fridayThe13ths(year) {
  let count = 0;
  for (let i = 1; i <= 12; i += 1) {
    let month = String(i);

    if (i < 10) {
      month = + "0" + month;
    }
    let date = new Date(`${year}-${month}-13`)
    if (date.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
