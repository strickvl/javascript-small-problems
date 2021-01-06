function sum(num) {
  let digits = String(num).split('').map(num => Number(num));
  return digits.reduce((sum, val) => sum + val);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
