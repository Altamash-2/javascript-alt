// function

// call and apply method
// we can manually set the value of 'this ' keyword usin 'call' and 'apply'
'use strict';
let mainPlane = {
  airline: 'fly india',
  iatacode: 'fi',
  booking: [],
  book: function (flightNum, name) {
    console.log(
      `${name} Booked flight on ${this.airline} with flight number ${this.iatacode} ${flightNum} `
    ),
      this.booking.push({
        fligtName: ` ${this.airline}`,
        name: name,
        flightNumber: `${this.iatacode} ${flightNum}`,
      });
  },
};
mainPlane.book(553, 'john');
mainPlane.book(643, 'sam');
console.log(mainPlane);

// new firline lauched of same group
let chilPlain = {
  airline: 'child plain',
  iatacode: 'cp',
  booking: [],
};
let book = mainPlane.book;
//book(665, 'susy'); // book is regular function
// 'this' value is undefined at least in stict mode

// solution using call methode;
book.call(chilPlain, 689, 'susy');
console.log(chilPlain);

book.call(mainPlane, 340, 'max');
console.log(mainPlane);

// apply methode - argument pass in array
book.apply(chilPlain, [430, 'maria']);
console.log(chilPlain);

// bind methode
function greet() {
  console.log(`welcome ${this.firstName} ${this.lastName} on this event `);
}
let user = {
  firstName: 'altamash',
  lastName: 'kalim',
};
let greets = greet.bind(user); // bind return function
greets();
