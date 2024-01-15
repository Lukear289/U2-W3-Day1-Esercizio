class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.email = _location;
  }

  comparaEta(otherUser) {
    if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
    }
  }
}

// Creazione di due istanze della classe User
const user1 = new User('Luca', 'Rossi', 30, 'Roma');
const user2 = new User('Marco', 'Verdi', 25, 'Milano');
// comparazione età
const result = user1.comparaEta(user2);
console.log(result);
