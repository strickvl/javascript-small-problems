function invoiceTotal() {
  var amounts = Object.values(arguments);
  var sum = amounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?
