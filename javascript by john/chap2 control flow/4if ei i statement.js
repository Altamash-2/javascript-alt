//  if else if and if statement

let budget = 6500;
if (budget > 6000) {
  console.log('will do dinner 5 star in hotel');
} else if (budget > 4500) {
  console.log('will do dinner in 3 star hotel');
} else if (budget > 3000) {
  console.log('will do dinner in 2 star hotel');
} else {
  console.log('run if all conditions false ');
}
// else ke baad another if methode nat allowed
// after 1st condition true controll get out of the scope
console.log('I am outside of conditional block');
