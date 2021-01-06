function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    let series = [1, 1];
    for (let i = 3; i <= n; i += 1) {
      let newVal = series[series.length - 1] + series[series.length - 2];
      series.push(newVal);
    }
    return series[series.length - 1];
  }
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
