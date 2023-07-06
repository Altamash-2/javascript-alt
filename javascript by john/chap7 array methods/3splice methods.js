// array methods

// splice methods

// used to add new elements into the array
// Array.splice(index,deleteValue,ValueToAdded)
// return deleted items in the form of array

let num = [3, 5, 7, 9, 2];
let updated = num.splice(1, 2, 0, 1, 8);
console.log('original array = ', num);
console.log('returned element array ', updated);
