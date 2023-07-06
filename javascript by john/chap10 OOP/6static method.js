// object oriented programming

// static method(method which is not present on constructor
// 'prototype'property but 'constructor' itself)

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

// static method(can never inherited to all objects)
Car.breakMethod = function () {
  console.log('this is break method of Car');
};
let honda = new Car('red', 2023);
honda.startEngine();
Car.breakMethod();
