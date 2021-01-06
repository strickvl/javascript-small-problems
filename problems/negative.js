function negative(int) {
  var final = (int > 0) ?  -int : int;
  return final;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
