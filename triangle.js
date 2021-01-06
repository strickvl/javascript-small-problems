function validTriangle(arr) {
  let sortedArr = arr.slice().sort();
  let smallest = sortedArr[0];
  let middle = sortedArr[1];
  let longest = sortedArr[2];
  const aboveZero = (value) => value > 0;

  if (arr.every(aboveZero) && (smallest + middle) > longest) {
    return true;
  } else {
    return false;
  }
}

function isEquilateral(arr) {
  if (arr[0] === arr[1] && arr[0] === arr[2]) {
    return true;
  } else {
    return false;
  }
}

function isIsosceles(arr) {
  if (arr[0] === arr[1] && arr[1] !== arr[2]) {
    return true;
  } else if (arr[1] === arr[2] && arr[2] !== arr[0]) {
    return true;
  } else if (arr[2] === arr[0] && arr[0] !== arr[1]) {
    return true;
  } else {
    return false;
  }
}

function isScalene(arr) {
  if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
    return true;
  } else {
    return false;
  }
}

function triangle(s1, s2, s3) {
  let sides = [s1, s2, s3];
  if (validTriangle(sides) === false) return 'invalid';
  if (isEquilateral(sides)) return 'equilateral';
  if (isIsosceles(sides)) return 'isosceles';
  if (isScalene(sides)) return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
