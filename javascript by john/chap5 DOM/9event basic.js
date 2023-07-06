// event basics (click me)

let eventElement = document.querySelector('.clickMe');
console.log(
  eventElement.addEventListener('click', function () {
    console.log('clicked me');
  })
);

let elements = document.querySelectorAll('li');
console.log(elements);
elements.forEach(function (item) {
  item.addEventListener('click', function (e) {
    // console.log('item checked');
    console.log(e.target); // event me target vo hota hai jo tell click hua
    e.target.style.color = 'green';
  });
});
