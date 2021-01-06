function factorialize(num) {
  var count = 1;
  var total = 1;
  while (count<=num-1) {
    total = total*(count+1);
    console.log("current calc: " + count +" * "+(count+1));
    console.log("current total: "+total);
    console.log("current count: "+count);
    count=count+1;
  }
  return total;
}

factorialize(5);