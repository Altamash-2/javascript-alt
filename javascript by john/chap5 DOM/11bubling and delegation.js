// bubling and delegation
// bubling means elemnt pe event chalega uske baad parent then uske parents
const ul = document.querySelector('ul');
ul.addEventListener('click', () => {
  console.log('inside ul');
});
let button = document.querySelector('.clickMe');

button.addEventListener('click', function () {
  let li = document.createElement('li');
  li.textContent = 'something new added';
  ul.append(li); // added last  and prepend added first
});

// removing

// let element = document.querySelectorAll('li');
// element.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     // console.log(e.target);
//     console.log('inside li');

//     e.target.remove();
//   });
// });

const uls = document.querySelector('ul');
uls.addEventListener('click', (e) => {
  console.log('inside uls');
  if (e.target.nodeName == 'LI') {
    e.target.remove();
  }
});
