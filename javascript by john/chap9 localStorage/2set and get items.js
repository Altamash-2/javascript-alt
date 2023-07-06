// local storage

//set item
// get item
// update item

// set item in local storage
localStorage.setItem('passion', 'programming');
localStorage.setItem('age', 24);
console.log(localStorage);

// get item from local storage
console.log(localStorage.getItem('age'));

// update
localStorage.setItem('age', 26); // overwrite the previous value
console.log(localStorage);
localStorage.setItem('passion', 'coding');
localStorage.setItem('ag', '26');

// remove Item
localStorage.removeItem('ag');
localStorage.removeItem('age');
