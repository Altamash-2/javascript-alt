// ternary operator(? :)

let age = 17;
if (age > 18) {
  console.log('passed');
} else {
  console.log('fail');
}

// single line solution - ternary operator
let result = age > 18 ? 'passed' : 'fail';
console.log(result);

let ages = 21;
let weight = 40;
let ans = ages > 18 ? (weight > 50 ? 'qualify' : 'weightissues') : 'ageissues';
console.log(ans);
