// destructuring array

let hotel = {
  name: 'hottel1',
  location: 'street No xyz Delhi',
  categories: ['chinese', 'italian', 'english'],
};

//simple example
// without

let item = [2, 3, 5, 6];
// let x = item[0];
// let y = item[1];
// let z = item[2];
// let p = item[3];
// console.log(x, y, z, p);

// with destructuring

let [x, y, z, p] = item;
console.log(x, y, z, p);

// example2

let [first, , third] = hotel.categories;
console.log(first, third);

// switch the category (Usecase)
// without destructuring

// let temp = first;
// first = third;
// third = temp;
// console.log(first, third);

// with destructuring
[third, first] = [first, third];
console.log(first, third);

// destructuring the nested array

let nums = [2, 3, [6, 9]];
// let [a, , c] = nums;
let [a, , [b, c]] = nums;
console.log(a, b, c);

console.log(a, c);
