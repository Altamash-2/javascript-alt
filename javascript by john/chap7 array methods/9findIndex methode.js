// array methode

// findIndex methode
// execute function for each array elements
// it return index of that array element who first pass the
// test otherwise -1

let ages = [11, 28, 19, 17, 23];
let result = ages.findIndex((age) => {
  return age > 15;
});
console.log('Index of required age', result);
