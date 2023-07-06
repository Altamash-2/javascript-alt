// object oriente programming

// setters and getters
// getter and setters allow you to define object accessors(computed properties)
// we can also use in class

// class declaration

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log('this is start engine method of car class');
  }
  get startEngines() {
    console.log('this is start engine method using get');
  }
  get description() {
    return `color of car is ${this.color} and its model is ${this.model}`;
  }
  set changeColor(color) {
    console.log((this.color = color));
  }
}

const honda = new Car('red', 2023);
console.log(honda);
honda.startEngine(); // accessing as function
honda.startEngines; // accessing as property
console.log(honda.description);
honda.changeColor = 'blue';

console.log(honda); // set as property

// introduced in ES5(2005)
