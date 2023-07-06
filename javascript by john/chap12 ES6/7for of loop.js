let hotel = {
  name: 'hottel',
  location: 'mehdipatnam',
  categories: ['chinese', 'Italian', 'English'],
  mainMenu: ['FoodA', 'FoodB', 'FoodC'],
  starterMenu: ['specialFoodA', 'specialFoodB'],
  openingHour: {
    sunday: { open: '09:00AM', close: '11:00PM' },
    monday: { open: '10:00AM', close: '10:00PM' },
    tuesday: { open: '11:00AM', close: '12:00PM' },
  },
};

let menu = [...hotel.mainMenu, ...hotel.starterMenu];
console.log(menu);

// if only values
for (let elem of menu) console.log(elem);

for (let item of menu.entries()) {
  console.log(item);
}

for (let items of menu.entries()) {
  console.log(`${items[0] + 1}:${items[1]}`);
}

// if we want both index as well as value
for (let [i, item] of menu.entries()) {
  console.log(`${i + 1}:${item}`);
}
