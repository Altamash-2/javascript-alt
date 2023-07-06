// optional chaining(?.)

let openingHour = {
  sunday: { open: '09:00AM', close: '11:00PM' },
  monday: { open: '10:00AM', close: '10:00PM' },
  tuesday: { open: '11:00AM', close: '12:00PM' },
};

let menuType = 'PlatinumMenu';
let hotel = {
  name: 'hottel',
  location: 'mehdipatnam',
  categories: ['chinese', 'Italian', 'English'],
  mainMenu: ['FoodA', 'FoodB', 'FoodC'],
  starterMenu: ['specialFoodA', 'specialFoodB'],
  openingHour,
};

// let suppose we want to check this hotel open on saturday or not
// if open then at what time

// to avoid this error two methods

// without optional chaining

if (hotel.openingHour && hotel.openingHour.saturday) {
  console.log(hotel.openingHour.saturday.open);
}

// with optional chaining

console.log(hotel.openingHour?.sunday?.open);
// check previous value of the operator => null or undefined
// return undefind
