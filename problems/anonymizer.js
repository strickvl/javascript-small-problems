let Account = (() => {
  let privateEmail;
  let privatePassword;
  let privateFirstName;
  let privateLastName;
  let privateDisplayName;

  function anonymise() {
    let sequence = '';
    const CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (let i = 1; i <= 16; i += 1) {
      let char = CHARS[Math.floor(Math.random() * CHARS.length)]
      sequence += char;
    }
    return sequence;
  };

  function validate(password) {
    return privatePassword === password;
  };

  return {
    init(email, password, firstName, lastName) {
      privateEmail = email;
      privatePassword = password;
      privateFirstName = firstName;
      privateLastName = lastName;
      this.displayName = anonymise();
      return this;
    },
    firstName(password) {
      if (validate(password)) {
        return privateFirstName;
      } else {
        return 'Invalid Password';
      }
    },
    lastName(password) {
      if (validate(password)) {
        return privateLastName;
      } else {
        return 'Invalid Password';
      }
    },
    email(password) {
      if (validate(password)) {
        return privateEmail;
      } else {
        return 'Invalid Password';
      }
    },
    resetPassword(oldPassword, newPassword) {
      if (validate(oldPassword)) {
        privatePassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    reanonymize(password) {
      if (validate(password)) {
        this.displayName = anonymise();
        return true;
      } else {
        return 'Invalid Password';
      }
    },
  }
})();

const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
