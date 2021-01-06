"use strict";
/*
In English and programming, groups can be made using symbols such as () and {} that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:

A correct string cannot close groups in the wrong order, open a group but fail to close it, or close a group before it is opened.

Your function will take an input string that may contain any of the symbols (), {} or [] to create groups.

It should return True if the string is empty or otherwise grouped correctly, or False if it is grouped incorrectly.

input: string of brackets
output: boolean depending on whether brackets close correctly or not

rules:
- all brackets that are opened must be closed
- brackets are the three types -- (), {} and []
- you can't close a bracket that hasn't been opened DONE
- there won't be any non-bracket chars in the input DONE
- brackets can't be closed in the wrong order
- brackets can't be left open DONE
- brackets can't be closed before it has been opened DONE
- return false if at any time we violate the rules

algorithm:
- setup counters for the three types of brackets
- iterate through the characters in the string (for loop with string indexing)
- if the char is a left bracket, increment the counter by 1 for that particular type
- if the char is a right bracket, increment the counter by 1 for that particular type
- if you get to the end and any of the counters is > 0, return false
- if you ever have a counter with a negative number, return false
- setup a 'last open type' variable
- when you open a variable, set the last open variable to that
- when you close a variable, if the last open variable is not of that same type, then return false

*/

function groupCheck(str) {
  let parenCount = 0;
  let curlyCount = 0;
  let squareCount = 0;
  let lastOpen = [];

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (char === "(") {
      parenCount += 1;
      lastOpen.push("(");
    } else if (char === "{") {
      curlyCount += 1;
      lastOpen.push("{");
    } else if (char === "[") {
      squareCount += 1;
      lastOpen.push("[");
    } else if (char === ")" && lastOpen[lastOpen.length - 1] === "(") {
      parenCount -= 1;
      lastOpen.pop();
    } else if (char === ")" && lastOpen[lastOpen.length - 1] !== "(") {
      return false;
    } else if (char === "}" && lastOpen[lastOpen.length - 1] === "{") {
      curlyCount -= 1;
      lastOpen.pop();
    } else if (char === "}" && lastOpen[lastOpen.length - 1] !== "{") {
      return false;
    } else if (char === "]" && lastOpen[lastOpen.length - 1] === "[") {
      squareCount -= 1;
      lastOpen.pop();
    } else if (char === "]" && lastOpen[lastOpen.length - 1] !== "[") {
      return false;
    }

    if (parenCount < 0 || curlyCount < 0 || squareCount < 0) return false;

  }
  if (parenCount > 0 || curlyCount > 0 || squareCount > 0) return false;
  return true;
}

console.log(groupCheck("({})")); // True
console.log(groupCheck("[[]()]")); // True
console.log(groupCheck("[{()}]")); // True
console.log(groupCheck("")); // True
console.log(groupCheck("({(}")); // False
console.log(groupCheck("(")); // False
console.log(groupCheck("]")); // False
console.log(groupCheck("{(})")); // False
console.log(groupCheck("([]")); // False
console.log(groupCheck("[])")); // False
