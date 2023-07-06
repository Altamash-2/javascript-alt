// create and remove the element

// creat element
const ul = document.querySelector('ul');
let button = document.querySelector('.clickMe');

button.addEventListener('click', function () {
  let li = document.createElement('li');
  li.textContent = 'something new added';
  ul.append(li); // added last  and prepend added first
});

// removing

let element = document.querySelectorAll('li');
element.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.remove();
  });
});
