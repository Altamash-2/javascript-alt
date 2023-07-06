// object oriented programing
// constructor function and the 'new' operator
// we can not use 'arrow' function as constructor
// call 'constructor' function using 'new' keyword

// 1 new {object} Created empty initially
// 2 'this' = {object}
// 3 object linked to prototype
// 4 function automatically return {objcet}

let Car = function (color, model) {
  //instance properties
  this.carColor = color;
  this.carModel = model;
  // not a good practice
  this.login = function () {
    console.log('login-methode');
  };
};
let instanceOfCar = new Car('black', 2023);
let instance = new Car('blue', 2000);
console.log(instanceOfCar, instance);
console.log(instance instanceof Car);
