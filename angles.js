function validTriangle(arr) {
  const aboveZero = (val) => val > 0;
  if (arr.every(aboveZero) && arr[0] + arr[1] + arr[2] === 180) {
    return true;
  } else {
    return false;
  }
}

function triangle(s1, s2, s3) {
  let angles = [s1, s2, s3];
  const lessThanNinety = (val) => val < 90;
  const hasNinety = (val) => val === 90;
  if (validTriangle(angles) === false) {
    return 'invalid';
  } else if (angles.some(hasNinety)) {
    return 'right';
  } else if (angles.every(lessThanNinety)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
