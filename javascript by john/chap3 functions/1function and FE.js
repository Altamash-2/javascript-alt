// functions
// it is simply a piece of code which we can use in our program many time
// it is just like a variable holding some piece of code
// declaration
function nameOffFunction() {
  // body of function
  console.log('you are running code inside function');
}
// function call
nameOffFunction();

// function expression - more uses in real example
let fun = function () {
  // also called anonymous function
  console.log('this is an example of function expression');
};
// calling function expression
fun();

// passing values (argument and parameters)
let invitation = function (name = 'defaultName', time = 'night') {
  // name or parameteres are local variable to this function
  //name is parameters
  console.log(
    `welcome! ${name} you are invited on our event and time will be ${time}`
  );
};
// console.log(name); // name or parameters are block scope variable

invitation('marie', 'morning'); // marie is argument
invitation();

// returning vlues (how to return value from the function)

let ageCalculation = function (birthYear, currentYear = 2023) {
  let age = currentYear - birthYear;
  return age;
  console.log('after return statement no code of will excuate ');
};
let functionResult = ageCalculation(2005);
console.log(`your age is = ${functionResult}`);

function name() {
  console.log('hello world');
}
name();
const name1 = function () {
  console.log('hello world');
};
name1();

const name2 = function () {
  return 'hello people';
};
let ans2 = name2();
console.log(ans2);
const name3 = (a, b) => {
  return a * b;
};
let ans3 = name3(4, 8);
console.log(ans3);
