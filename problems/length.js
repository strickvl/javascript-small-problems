var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ... undefined
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // [javascript]
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // [javascript, undefined, undefineg]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // [javascript, undefined, python]
console.log(languages[1]); // undefined
console.log(languages.length); // 3
