// array methodes

// flat methode - non mutating methode = no effect on original array
// it creates a new array with the elements of the subarrays
// concatenated into it.

let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log('before flat ', arr);

let result = arr.flat(3); // by default 1(depth value) value
console.log('after flat ', result);
