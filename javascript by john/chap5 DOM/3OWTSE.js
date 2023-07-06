// other way to get html elements

let querySelectorElement = document.querySelectorAll('p'); // 99% use querySelector
console.log(querySelectorElement);
querySelectorElement.forEach((item) => {
  console.log(item);
});

// get elments by tagName - give html collection

let tagNameElements = document.getElementsByTagName('p');
console.log(tagNameElements);
// tagNameElements.forEach((item) => {
//   console.log(item);}); // give you error not used forEach

// get element by className
let classNameElement = document.getElementsByClassName('coderdost');
console.log(classNameElement);

// getElement by Id

let elementById = document.getElementById('coders');
console.log(elementById);
