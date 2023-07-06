// nullish coalescing operator (??)

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

// falsy values => 0,false,null,undefined,''(empty string)
// for || operator

let numGuests = 0;
let result = numGuests || 10;
console.log(result);

// for nullish coalesing operator (?? ) only null and undefined
// are falsy value

let result2 = numGuests ?? 10;
console.log(result2); // 0 is not nullish value

// it return first non nullish value
