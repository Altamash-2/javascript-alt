// object oriented programming

// ES6 classes (they still implement prototypical inheritance behind the scene)

// class declaration

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log('this is start engine method of car class');
  }
}
Car.prototype.breakMethod = function () {
  console.log('break method of car');
};
const honda = new Car('red', 2023);
console.log(honda);
honda.startEngine();
honda.breakMethod();

// imp point
// classes are not hoisted
// class are also first class citizens(pass as an argument or return)
// class are executed in strict mode
