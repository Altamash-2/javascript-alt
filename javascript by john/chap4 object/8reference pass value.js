// 'object / array' how 'reference' are passed to varible

let arr = [1, 2, 3, 4, 5];
let getRef = arr; // both store in same memory
getRef[5] = 7;
getRef.shift(); // shift remove 1st element and unshift add 1st element
console.log('original array ', arr);
console.log('getRef array ', getRef);

// pass by value
let arrs = [1, 2, 3, 4, 5, 6];
let getValue = [...arrs]; // ... is spread operator make copy of arr
getValue[6] = 8;
getValue.unshift(0);
console.log('original value ', arrs);
console.log('getValue array ', getValue);
