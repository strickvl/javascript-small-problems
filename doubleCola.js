/*
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of the person who will drink the n-th cola.

we have a stack that is both growing and being mutated as we go
input, the original set of people / items
 - also a value of n for who is at the first spot after n number of drinks

ds:
- an array holding the queue of people

algorithm:
- init a counter to 1
- setup a copy of the original array
- iterate until counter === n
  - push two copies of the person at index 0 to the end
  - splice the person / value at index 0 so he's deleted
- return the copyArr[0]
*/

function whoIsNext(arr, n) {
  let counter = 1;
  let arrCopy = arr.slice();
  while (counter !== n) {
    arrCopy.push(arrCopy[0]);
    arrCopy.push(arrCopy[0]);
    arrCopy.splice(0, 1);
    counter += 1;
  }
  return arrCopy[0];
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)) // "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)) // "Penny"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)) // "Leonard"
