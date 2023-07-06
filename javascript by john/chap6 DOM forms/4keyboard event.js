// keyboard events

// implement username validation

// username can only consist of A-Z or a-z
// lenth of userName between 6 to 12

let form = document.querySelector('.sign-up-form');
let user = document.querySelector('#name');
let password = document.querySelector('#password');
let userNamePattern = /^[A-Za-z]{6,12}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let userName = user.value;
  // 'test' method return boolean value
  let result = userNamePattern.test(userName);
  if (result == true) {
    console.log('userName is valid');
  } else {
    console.log('userName is invalid please try again');
  }
  console.log(userName);
});

//live feedbacks

user.addEventListener('keyup', (e) => {
  if (userNamePattern.test(e.target.value)) {
    console.log('passed');
    user.setAttribute('class', 'success');
  } else {
    console.log('failed');
    user.setAttribute('class', 'error');
  }
});
