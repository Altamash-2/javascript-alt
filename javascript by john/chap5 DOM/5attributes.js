// getting and setting attribute of element

let googleLink = document.querySelector('a');
console.log(googleLink.getAttribute('href'));

// set attribute

googleLink.setAttribute('href', 'https://www.youtube.com');
console.log(googleLink.getAttribute('href'));
googleLink.innerText = 'youtube page';
