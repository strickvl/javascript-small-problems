const greeter = {
  message: (function() {
    const name = 'Naveed';
    const greeting = 'Hello';
    return `${greeting} ${name}!`;
  })(),
  sayGreetings() {
    console.log(this.message);
  }
};

console.log(greeter.sayGreetings());
