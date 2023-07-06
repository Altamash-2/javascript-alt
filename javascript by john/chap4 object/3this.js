// this keyword

// in each methode we have an access of special keyword called this
// this keyword represent the object. 'calling' the 'methode' in which 'this' is 'present'

// example
let person = {
  firstName: 'altamash',
  lastName: 'kalim',
  city: 'hyderabad',
  birthYear: 2000,
  education: 'web developer',
  getSummary: function () {
    // return `${this.firstName} ${this.lastName} lives in ${this.city} his birthday is ${this.birthYear}`;
    return this;
  },
};
console.log(person.getSummary());
