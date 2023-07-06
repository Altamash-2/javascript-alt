// hoisting
// variable 'declaration' are 'hoisted' toward 'top' of their scope
test = 10; // var ke case me only
//let const are not hoisted
console.log(test);
var test;

//normal function is hoisted
name();
function name() {
  console.log('hello programmer');
}

// not function expression or arrow functions
tests();
let tests = () => {
  console.log('hello programmer');
};
