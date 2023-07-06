// for in loop (each iteration return a 'key' of object)

let car = {
  model: 2022,
  color: 'black',
  company: 'toyota',
};
let x = '';
for (let key in car) {
  console.log(key);
  x = x + car[key];
}
console.log(x);
