function parseNumber(val) {
  if (val.length === 1) {
    return '0' + val;
  } else {
    return val;
  }
}

function timeOfDay(minutes) {
  var time = new Date(2020, 1, 1, 0, minutes);
  var hours = parseNumber(String(time.getHours()));
  var mins = parseNumber(String(time.getMinutes()));
  return `${hours}:${mins}`;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
