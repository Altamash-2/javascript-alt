// rest pattern and parameter
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

// spread(...) operat operator it is present in the RHS of =
let num = [2, 3, 4, 5];
let newArray = [1, ...num];
console.log(newArray);

// syntax of rest(...) Get elements and packed them into array
// use in LHS

let [a, b, ...others] = num;
console.log(others);

let { sunday, ...weedDays } = hotel.openingHour;
console.log(weedDays);
