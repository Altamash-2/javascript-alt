// working with arrays (simpe methods)

let letters = ['a', 'b', 'c ', 'd'];
console.log(letters);
// remove (mutate the original array)
// let reverse = letters.reverse();
// console.log(reverse);

// console.log(letters);

// concat - non mutating methods
let nums = [1, 2, 3, 4];
let concated = nums.concat(letters);
console.log(concated);
// aother methods
let concat = [...nums, ...letters];
console.log(concat);

//join methods - non mutating methods  it convert array to string
let joined = letters.join(' ');
console.log(joined, typeof joined);
console.log('a b c d');
,