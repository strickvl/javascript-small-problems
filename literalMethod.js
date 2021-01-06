var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

// calling the method
console.log(person.firstName() + ' ' + person.lastName());

// not calling the method
console.log(person.firstName + ' ' + person.lastName);
