function fibonacci(num) {
  let lookupTable = {};
  if (num <= 2) {
    return 1;
  } else if (lookupTable[num]) {
    return lookupTable[num];
  } else {
    lookupTable[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return lookupTable[num];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
