// parent ,children and sibling

let parentElement = document.querySelector('.content');
// all children of parent
console.log(parentElement.children);

// we can not run foreach method on HTML collection so
// first convert it into array
console.log(Array.from(parentElement.children));
Array.from(parentElement.children).forEach((item) => {
  item.classList.add('coders');
});

// child to parent
let childElement = document.querySelector('h2');
// find the parent of specific child
console.log(childElement.parentElement);

// find next/privious sibling of child
console.log(childElement.previousElementSibling);
