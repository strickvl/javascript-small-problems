/*
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

*/

function validPhoneNumber(str) {

}

console.log(validPhoneNumber("(123) 456-7890"));  =>  returns true
console.log(validPhoneNumber("(1111)555 2345"));  => returns false
console.log(validPhoneNumber("(098) 123 4567"));  => returns false
