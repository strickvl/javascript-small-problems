function formatNumber(input) {
  if (String(input).length === 1) {
    return '0' + String(input);
  } else {
    return String(input);
  }
}

function dms(input) {
  const degreeSymbol = String.fromCharCode(176);
  var degrees = Math.floor(input);
  var minutes = formatNumber(Math.floor((input - Math.floor(input)) / (1/60)));
  var seconds = formatNumber(Math.floor(((input - Math.floor(input)) / (1/60) - minutes) / (1/60)));

  return `${degrees}${degreeSymbol}${minutes}'${seconds}"`
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
