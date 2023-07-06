// more events

//copy event
let copyRightElement = document.querySelector('.copy');
copyRightElement.addEventListener('copy', () => {
  console.log('this is copy right content');
});

// mouse over event
let box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
  console.log(e.offsetX, e.offsetY);
});
