/*
My aunt Sally is a peculiar woman. She only likes things that have a double letter in them. She dislikes walking but loves running. She also doesn’t like driving but strangely has a passion for steering.

I will be spending some time with aunt Sally and want to make sure we have a good time. I need your help writing a programme that will help me determine if aunt Sally will like the activities that I have selected for her.

Remember, aunt Sally only likes activites that contain adjacent double letter in them (not single or tripple, or more).

She would like:

skiing
but she would not like:

skiiiing
Your task is to return a string of activities, if there are more than one seperate them by a space.

skiing running
If there are no activites that aunt Sally likes return an empty string.

''

input: a string with terms in it
output: the words which have a double letter in them

algorithm:
- split the words by space
filter the resulting array as per the function for double letters
return that filtered array joined with a space

function for checking for double letters
- regex
- use the test method
*/

function hasDoubleLetter(str) {
  let letters = str.split('').filter(char => /[A-Za-z]/.test(char));
  for (let outer = 0; outer < letters.length; outer += 1) {
    if (letters[outer] === letters[outer + 1] && letters[outer + 1] === letters[outer + 2]) return false;
    if (letters[outer] === letters[outer + 1]) return true;
  }
  return false;
}

function myAuntSally(str) {
  let words = str.split(' ');
  let doubledLetterWords = words.filter(hasDoubleLetter);
  return doubledLetterWords.join(' ');
}

console.log(myAuntSally('skiing')); // skiing
console.log(myAuntSally('walking!!!')); // ''
console.log(myAuntSally('walking running swimmming')); // running
