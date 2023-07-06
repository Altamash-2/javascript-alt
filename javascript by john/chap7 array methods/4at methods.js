//working with arrays (simple methods)

// at methods

let nums = [23, 54, 77, 85];
console.log(nums[0]);
console.log(nums.at(1));

// getting last element of the array
console.log(nums[nums.length - 1]);
console.log(nums.slice(-1)[0]);
console.log(nums.at(-1));

// at methods can also work on strings
let name = 'altamash';
console.log(name.at(-1));
