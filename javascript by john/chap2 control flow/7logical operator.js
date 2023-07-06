// logical operator
//and && , or|| ,not!
// example
// and operator - means both true
let password = 'altamash@gmail.com';
if (password.length > 8 && password.includes('@')) {
  console.log('password stregth is strong');
} else {
  console.log('change your password');
}
// or operator -means one can true

if (password.length > 18 || password.includes('@')) {
  console.log('password is strong');
} else {
  console.log('password can change ');
}

// not operator ! true to false and false to true
let status = false;
if (!status) {
  // change into true
  console.log('your status is = ', status);
}

// priorities
// not
// and , or from left to right

//example
let result = (true && true) || (false && !false);
// result = (true && true) || (false && true);
// result = true || (false && true);
// result = true || false;
console.log(result);
