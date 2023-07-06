// objected programming

// prototypal inheritance

// parent class

let Car = function (color, model) {
  this.color = color;
  this.model = model;
};

Car.prototype.startEngine = function () {
  console.log('this is start Engine method');
};

let honda = new Car('blue', 2023);
console.log(honda);

let Bike = function (color, model, engineCapacity) {
  Car.call(this, color, model);
  this.engineCapacity = engineCapacity;
};

// inherited from parent class
Bike.prototype = Object.create(Car.prototype);

// not inherited
Bike.prototype.ownBike = function () {
  console.log('this is own Bike class method');
};
let bike1 = new Bike('Green', 2022, '300CC');
let bike2 = new Bike('Brown', 2022, '400CC');
console.log(bike1, bike2);
bike1.startEngine();
bike2.ownBike();
