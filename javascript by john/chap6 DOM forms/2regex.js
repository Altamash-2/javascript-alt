// regular Expression (regex)

// it is a pattern of characters used to do pattern matching
// or we can say for 'Data validation'
// implementation of password validation

// length at least = 8
// at least contain one upper case letter
// at least contain one lower case letter
// at least contain one digit 0 to 9

let form = document.querySelector('.sign-up-form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let passwordValue = password.value;
  console.log(passwordValue);
  let result = passwordValue.match(passwordPattern);
  if (result) {
    console.log('your password is strong');
  } else {
    console.log('try again');
  }
});
