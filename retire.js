var rlSync = require('readline-sync');

var age = Number(rlSync.question('What is your age? '));
var retirementAge = Number(rlSync.question('At what age would you like to retire? '));

today = new Date();
currentYear = today.getFullYear();

var remainingYears = retirementAge - age;
var retirementYear = currentYear + remainingYears;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${remainingYears} years of work to go!`);


// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!
