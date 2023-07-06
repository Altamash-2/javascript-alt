// updating and chaining content

// innerText
// ignore space
// retrieve and set content in plain text
let heading = document.querySelector('h1');
console.log(heading.innerText);
let content = document.querySelector('.content');
console.log(content.innerText);
content.innerText += '<h3>great coder</h3>';
console.log(content.innerText);

// innerHtml
// it does not ignore spaces
// retrieve and set content in html formate
console.log(heading.innerHTML);
console.log(content.innerHTML);
content.innerHTML += '<h3>great coder</h3>';
console.log(content.innerHTML);
