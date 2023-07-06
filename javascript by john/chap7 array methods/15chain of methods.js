// array methods

// chain of methode
let num = [1, 2, 3, 4, 5, 6];
let result = num.slice(0, 3).splice(2, 1, 7).push(8, 9);
// push method return new length of the array
console.log(result);
console.log(num);
