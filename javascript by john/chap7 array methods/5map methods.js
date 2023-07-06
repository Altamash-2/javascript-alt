// array methods

// map method
// create new array from original array by applying
// transformation function

let salaries = [3000, 5000, 8000, 6000, 9000];
let newSalaries = salaries.map((salary) => {
  let incrementedAmount = salary / 2;
  return salary + incrementedAmount;
});
console.log('after 50% Bonus new slaaries are ', newSalaries);
//length of new array always 'equal' to the original array
