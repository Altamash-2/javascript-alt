// maps

// it is data structure
// which is used to map values into keys
// in map the data type of keys can be of 'any'

// map is similar to object

let openingHour = {
  sunday: { open: '09:00AM', close: '11:00PM' },
  monday: { open: '10:00AM', close: '10:00PM' },
  tuesday: { open: '11:00AM', close: '12:00PM' },
};

let hotel = {
  name: 'hottel',
  location: 'mehdipatnam',
  categories: ['chinese', 'Italian', 'English'],
  mainMenu: ['FoodA', 'FoodB', 'FoodC'],
  starterMenu: ['specialFoodA', 'specialFoodB'],
  openingHour,
};

let restaurantMap = new Map();

// adding value into the map

restaurantMap.set('name', 'Bombay Hotel');
restaurantMap.set(1, 'Address1');
restaurantMap
  .set(2, 'Address2')
  .set(true, 'We are open today')
  .set(false, 'We are close today');
console.log(restaurantMap);

// getting the value
console.log(restaurantMap.get(false));

// size of map
console.log(restaurantMap.size);
