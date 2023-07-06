// object oriented programming

// class inheritence(sub class)

// class declaration

// parent class
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log('this is start engine method');
  }
}

// child class

class Bike extends Car {
  // add some new properties and 'method' as well
  constructor(color, model, engineCapacity) {
    super(color, model); // super jo hai car constructor ko value lata hai
    this.engineCapacity = engineCapacity;
  }
  bikeMethode() {
    console.log('this is methode of Bike class');
  }
}
let newBike = new Bike('Black', 2020, '300CC');
let bike2 = new Bike('Brown', 2023, '400CC');

console.log(newBike, bike2);
newBike.startEngine();
