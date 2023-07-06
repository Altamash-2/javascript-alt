// Modern javascript module and tooling

// top level await ES2022

// Before ES2022 we can use await only inside async function
// But in ES2022 inrtoduced top level 'await'

// it means now we can use 'await' outside the async function

// starting
console.log('start using top level await');
let getTodos = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  let data = await response.json();

  console.log(data);
};
getTodos();
console.log('finish .....');

// top level await block the execuation of next code part
