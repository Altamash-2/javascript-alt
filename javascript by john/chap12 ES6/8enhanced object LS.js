// enhanced object literals-shortcuts
// Before ES6 vs after ES6
// we can use computed property name
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
  order() {},
  [menuType]: ['different food items...'],
};
console.log(hotel);
