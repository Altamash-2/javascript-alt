// introduction to objects in javascripts

let car = {
  color: 'blac',
  model: 2022,
  company: 'honda',
};
console.log(car);

// accessing the javascript object properties
console.log(car['model']);
console.log(car.color);

let propetyName = 'color';
console.log(car[propetyName]); // computed
console.log(car.propetyName); // use direct property name

// modify the object property
car['color'] = 'brown';
console.log(car.color);
car.model = 2024;
console.log(car.model);

// delete properties of object
let obj = {
  prop1: 'value1',
  prop2: 'value2',
};
const returnValue = delete obj.prop2;

// it always return true;
console.log(obj.prop1, returnValue);
