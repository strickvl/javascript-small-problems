let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function splitWords(string) {
  return string.split(' ');
}

function capitaliseElements(arr) {
  return arr.map(word => word[0].toUpperCase() + word.slice(1));
}

function capitalizeBandName(band) {
  let nameWords = splitWords(band.name);
  band.name = capitaliseElements(nameWords).join(' ');
}

function removeDotsInBandName(band) {
  let chars = band.name.split('');
  band.name = chars.filter(char => char !== '.').join('');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
//
