// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }
//
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//
//   communicate() {
//     console.log('Communicating');
//   }
//
//   eat() {
//     console.log('Eating');
//   }
//
//   sleep() {
//     console.log('Sleeping');
//   }
// }
//
// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialisation) {
//     super(firstName, lastName, age, gender)
//     this.specialisation = specialisation;
//   }
//
//   diagnose() {
//     console.log('Diagnosing');
//   }
// }
//
// class Professor extends Person {
//   constructor(firstName, lastName, age, gender, subject) {
//     super(firstName, lastName, age, gender)
//     this.subject = subject;
//   }
//
//   teach() {
//     console.log('Teaching');
//   }
// }
//
// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender)
//     this.degree = degree;
//   }
//
//   study() {
//     console.log('Studying');
//   }
// }
//
// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree;
//   }
//
//   research() {
//     console.log('Researching');
//   }
// }

let professional = {
  invoice() {
    console.log(this.fullName + " is Billing customer");
  },
  payTax() {
    console.log(this.fullName + " Paying taxes");
  }
}

function extend(instance, extensionObj) {
  let properties = Object.getOwnPropertyNames(extensionObj);
  for (let i = 0; i < properties.length; i += 1) {
    let property = properties[i];
    instance[property] = extensionObj[property];
  }
  return instance;
}

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Person.prototype.eat = function() {
  console.log('Eating');
}
Person.prototype.communicate = function() {
  console.log('Communicating');
}
Person.prototype.sleep = function() {
  console.log('Sleeping');
}

function Doctor(firstName, lastName, age, gender, specialisation) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialisation = specialisation;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
}



const doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'S
doctor.diagnose();                         // logs 'Diagnosing'

const professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(`${this.fullName()} is Asking customer to pay`);
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
