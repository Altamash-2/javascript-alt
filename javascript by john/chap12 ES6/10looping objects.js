// Looping Objects (object_keys,values,entries)

// object are not iterable but indirectly we can...

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

// keys(Properties)
let properties = Object.keys(openingHour);
console.log(properties);

// we know how to loop over array

for (let key of properties) {
  console.log(key);
}

// values

let values = Object.values(openingHour);
console.log(values);

// complete objects

let entries = Object.entries(openingHour);
console.log(entries);

for (let [day, { open, close }] of entries) {
  console.log(`On ${day} we Open at ${open} and close at ${close}`);
}
