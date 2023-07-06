// spread operator(Unpacking of array elements)

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

let num = [2, 3, 5, 7];
console.log(...num);

// usecase

let newArray = [9, 10, ...num];
console.log(newArray);

let updateMainMenu = [...hotel.mainMenu, 'foodD', 'foodE'];
console.log(updateMainMenu);

// join two array
let joinedArray = [...num, ...newArray];
console.log(joinedArray);

// create shallow copy using spread operator

let copyArray = [...updateMainMenu];
copyArray[1] = 'anyFood';
console.log(copyArray);
console.log(updateMainMenu);

// deep copy

let copyArrays = updateMainMenu; // reference
copyArrays[1] = 'new food';
console.log(copyArrays);
console.log(updateMainMenu);

// we can also use spread operator on string

let passion = 'programming';
console.log(...passion);
