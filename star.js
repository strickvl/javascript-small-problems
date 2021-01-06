/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

input: an odd integer representing the dimensions of my star
output: console.log to the screen

algorithm:
- middle row is just n * star (use repeat method)
- all the rest have 3 *s intersperse with increasing spaces

start with the bottom half (keep it stored in an array so we can reverse it for the top half)



*/

function star(num) {
  let innerCount = 0;
  let outerCount = (num - 3) / 2;
  let bottom = [];
  let currentLine = '';
  while (outerCount >= 0) {
    currentLine = `${' '.repeat(outerCount)}*${' '.repeat(innerCount)}*${' '.repeat(innerCount)}*${' '.repeat(outerCount)}`;
    bottom.push(currentLine);
    innerCount += 1;
    outerCount -= 1;
  }
  let top = bottom.slice().reverse();
  for (let i = 0; i < top.length; i += 1) {
    console.log(top[i]);
  }
  console.log("*".repeat(num));
  for (let i = 0; i < bottom.length; i += 1) {
    console.log(bottom[i]);
  }
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
//
console.log('');
star(9);
console.log('');
star(11);
console.log('');
star(13);
