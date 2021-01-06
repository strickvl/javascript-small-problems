function parseString(input) {
  var hours = Number(input.slice(0, 2));
  var mins = Number(input.slice(3, 5));
  var time = new Date(2020, 1, 1, hours, mins);
  return time
}

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  var timeComponents = parseString(timeStr);
  var hours = timeComponents.getHours();
  var minutes = timeComponents.getMinutes();

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
