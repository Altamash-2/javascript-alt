// prototypical inheritance

let Car = function (color, model) {
  //instance properties
  this.carColor = color;
  this.carModel = model;
  // not a good practice
};
console.log(Car.prototype);
Car.prototype.startEngine = function () {
  console.log('this is start engine method');
};
// we can also set properties to prototype
Car.prototype.company = 'honda';
console.log(Car.prototype);

let instanceOfCar = new Car('black', 2023);
let instance = new Car('blue', 2000);
console.log(instanceOfCar, instance);
console.log(instance instanceof Car);
instanceOfCar.startEngine();

console.log(instanceOfCar.__proto__);
console.log(instanceOfCar.__proto__.isPrototypeOf(instanceOfCar));

// it is same as
console.log(Car.prototype);
console.log(Car.prototype.isPrototypeOf(Car));

// Car.prototype is prototype of all objects create through
// the Car constructor

let arr = [1, 2, 3, 5, 7, 8]; // [] is same as new Array([])
console.log(arr.__proto__.__proto__); //chaining of prototype
console.log(Object.prototype);
