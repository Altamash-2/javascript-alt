// sets

// sets are just collection of unique value

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

// example

let itemSet = new Set([1, 2, 3, 1, 4, 5, 6, 5]);
console.log(itemSet);
console.log(itemSet.size);
console.log(itemSet.has(3));
itemSet.add(9);
console.log(itemSet);
itemSet.delete(9);
console.log(itemSet);

// in set pass string
let setString = new Set('programming');
console.log(setString);
// set are also iterable but set are not indexing like itemSet[1] not possible

for (let item of itemSet) {
  console.log(item);
}
