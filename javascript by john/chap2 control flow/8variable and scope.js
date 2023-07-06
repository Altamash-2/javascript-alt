// variables and block scope
// scope >>-- area where variable is defined or accessible

const score = 90; // global scope
if (true) {
  const score = 50; // let and const are block scope

  console.log(score); // nearest value
}
console.log(score);
