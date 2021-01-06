function totalArea(arr) {
  let squares = arr.map(element => element[0] * element[1]);
  return squares.reduce((accumulator, element) => accumulator + element);
}

function totalSquareArea(arr) {
  let selection = arr.filter(element => element[0] === element[1]);
  return totalArea(selection);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121
