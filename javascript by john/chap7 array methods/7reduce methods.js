// array methods

// reduce methods

// run reducer function for each array element
// Array.reduce(function(accumulator=total ,currentValue),initialValue)
// it return single value
// sum of all elemets using reduce method

let num = [1, 5, 8, 3, 9];
let sum = num.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);
console.log(sum);

// does not mutate original array
console.log(num);
