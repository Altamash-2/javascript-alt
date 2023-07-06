// data structure ,string , operators

// destructuring of objects

let hotel = {
  name: 'hottel',
  location: 'mehdipatnam',
  categories: ['chinese', 'Italian', 'English'],
  mainMenu: ['FoodA', 'FoodB', 'FoodC'],
  openingHour: {
    sunday: { open: '09:00AM', close: '11:00PM' },
    monday: { open: '10:00AM', close: '10:00PM' },
  },
};
// let { name, location, mainMenu } = hotel;
// console.log(name, location, mainMenu);

// set customize name to object property
// let { name: hotelName, location: hotelLocation, mainMenu: Menu } = hotel;
// console.log(hotelName, hotelLocation, Menu);

// setting default values
// let { name, menu: newMenu = [], categories = [] } = hotel;
// console.log(name, newMenu, categories);

// destructuring nested objects

let { name, openingHour } = hotel;
console.log(name, openingHour);

let {
  sunday: { open, close },
} = openingHour;
console.log(open, close);
