/*
You have been put in charge of administrating vaccinations for children in your local area.
Write a function that will generate a list of vaccines for each child presented for vaccination, based on the child's age and vaccination history, and the month of the year.

- The function takes three parameters: age, status and month
- The parameter 'age' will be given in weeks up to 16 weeks, and thereafter in months.
You can assume that children presented will be scheduled for vaccination (eg '16 weeks', '12 months' etc).
- The parameter 'status' indicates if the child has missed a scheduled vaccination,
and the argument will be a string that says 'up-to-date', or a scheduled stage (eg '8 weeks') that has been missed, in which case you need to add any missing shots to the list.
Only one missed vaccination stage will be passed in per function call.
- If the month is 'september', 'october' or 'november' add 'offer fluVaccine' to the list.
- Make sure there are no duplicates in the returned list, and sort it alphabetically.

input, age, status, month
output: list of vaccines they must be given

algorithm:
- let checkItems = [age]
- if status is not 'up to date', then add the status into checkItems array
- init a vaccinesNeeded arr (empty)
- if month is sept, oct, november, add offer fluVaccine to the list
- iterate through the checkItems (either one or two)
  - for each of them, iterate through the various items to see if the various things include that age
  - if so, then add that vaccine to the vaccinesNeeded array
- at the end of all iterations, eliminate duplicates and return the final array sorted alphabetically
*/

function uniques(arr) {
  finalArr = [];
  arr.forEach(item => {
    if (finalArr.includes(item) === false) {
      finalArr.push(item);
    }
  });
  return finalArr;
}

function vaccineList(age, status, month) {
  let checkItems = [age];
  if (status !== "up-to-date") checkItems.push(status);
  let vaccinesNeeded = [];
  if (fluVaccine.includes(month)) vaccinesNeeded.push('offer fluVaccine');
  checkItems.forEach(stage => {
    if (fiveInOne.includes(stage)) vaccinesNeeded.push('fiveInOne');
    if (pneumococcal.includes(stage)) vaccinesNeeded.push('pneumococcal');
    if (rotavirus.includes(stage)) vaccinesNeeded.push('rotavirus');
    if (meningitisB.includes(stage)) vaccinesNeeded.push('meningitisB');
    if (hibMenC.includes(stage)) vaccinesNeeded.push('hibMenC');
    if (measlesMumpsRubella.includes(stage)) vaccinesNeeded.push('measlesMumpsRubella');
    if (preSchoolBooster.includes(stage)) vaccinesNeeded.push('preSchoolBooster');
  });
  return uniques(vaccinesNeeded).sort();
}

let fiveInOne = ['8 weeks', '12 weeks', '16 weeks'];
//Protects against: diphtheria, tetanus, whooping cough, polio and Hib (Haemophilus influenzae type b)
let pneumococcal = ['8 weeks', '16 weeks'];
//Protects against: some types of pneumococcal infection
let rotavirus = ['8 weeks', '12 weeks'];
//Protects against: rotavirus infection, a common cause of childhood diarrhoea and sickness
let meningitisB = ['8 weeks', '16 weeks', '12 months'];
//Protects against: meningitis caused by meningococcal type B bacteria
let hibMenC = ['12 months'];
//Protects against: Haemophilus influenzae type b (Hib), meningitis caused by meningococcal group C bacteria
let measlesMumpsRubella = ['12 months', '40 months'];
//Protects against: measles, mumps and rubella
let fluVaccine = ['september','october','november'];
//Given at: annually in Sept/Oct
let preSchoolBooster = ['40 months'];
//Protects against: diphtheria, tetanus, whooping cough and polio

console.log(vaccineList('12 weeks', 'up-to-date', 'december')); // ['fiveInOne', 'rotavirus']
console.log(vaccineList('12 months', '16 weeks', 'june')); // ['fiveInOne', 'hibMenC', 'measlesMumpsRubella', 'meningitisB', 'pneumococcal']
console.log(vaccineList('40 months', '12 months', 'october')); // ['hibMenC', 'measlesMumpsRubella', 'meningitisB', 'offer fluVaccine', 'preSchoolBooster']
