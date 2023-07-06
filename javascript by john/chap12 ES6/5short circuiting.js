// short circuiting(&&,||)

let hotel = {
  name: 'hottel',
  location: 'mehdipatnam',
  categories: ['chinese', 'Italian', 'English'],
  mainMenu: ['FoodA', 'FoodB', 'FoodC'],
  openingHour: {
    sunday: { open: '09:00AM', close: '11:00PM' },
    monday: { open: '10:00AM', close: '10:00PM' },
    tuesday: { open: '11:00AM', close: '12:00PM' },
  },
};

// falsy values => 0,false,null,undefined,''(empty string),

// AND (&&) operator (output true if all input true)
let result = 'programmers' && 'Colders' && '5'; // not move towards next
console.log(result);
// OR (||) operator (Output true if fany given input true)
let results = '' || 'null';
console.log(results);

// as || operator find first output true. it simply return that
// true value and does not move towords next operands
