// forms events (submit form)

let form = document.querySelector('.sign-up-form');
console.log(form);
form.addEventListener('submit', (e) => {
  e.preventDefault(); // default behaviour ko change kar deta hai
  console.log('submit the form successfully');
});
// first methode
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(email.value, password.value);
// });

// second metode
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(form.email.value, form.password.value);
});
