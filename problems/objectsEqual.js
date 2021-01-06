function objectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  for (let i = 0; i < keys1.length; i += 1) {
    if (keys2.includes(keys1[i]) === false) return false;
  }
  for (let i = 0; i < keys2.length; i += 1) {
    if (keys1.includes(keys2[i]) === false) return false;
  }

  for (let i = 0; i < keys1.length; i += 1) {
    let key = keys1[i];
    if (keys1[key] !== keys2[key]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'})));            // false
console.log(console.log(objectsEqual({}, {})));                                      // true
console.log(console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1})));  // false
