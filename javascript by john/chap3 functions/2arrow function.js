// arrow function(ES6)

// special form of function expression
// it allows us to write function more fast because
// no need to use function keyword
// no need to use paranthesis() in case of single parameter
// no need to use curely {} if single line code in function
// no need to use return statement if single line code in function

// function expression

let invitation = function (name) {
  console.log(`welcome ${name} to this event`);
};
invitation('sam');
// arrow function
let invitations = (name) => `welcome ${name} to this event`;
console.log(invitations('john'));

// higher Order function - callback function
// passing function as an argument (higher order function example)
let upperCase = function (str) {
  return str.toUpperCase();
};
let lowerCase = function (str) {
  return str.toLowerCase();
};
let transformer = function (str, fun) {
  return fun(str);
};
console.log(transformer('Hello world', upperCase));
console.log(transformer('HeLlo WorlD', lowerCase));
// transform is HOF

// function returning another function
let compliment = function (msg) {
  return function (name) {
    return `${msg} ${name}`;
  };
};
console.log(compliment('you are good person')('john'));

//2nd methode
let complimented = compliment('you are good person');
console.log(complimented('sam'));
// compliment is higher order function
