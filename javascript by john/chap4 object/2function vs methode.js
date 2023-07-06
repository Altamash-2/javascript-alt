// function vs methode
let ageCalculate = function (birthyears) {
  let age = 2023 - birthyears;
  console.log(`current age is = ${age}`);
};
ageCalculate(2005);

// method >-- it is nothin but object property (key) holding function as 'value'

let person = {
  ageCalculate: function (birthyears = 2005) {
    let age = 2023 - birthyears;
    return age;
  },
};
console.log(person.ageCalculate(2003));
