// Object oriented programming

// prototype

// each object created by 'constructor' function have an access
// to all 'methods' present inside that 'constructor' prototype

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
