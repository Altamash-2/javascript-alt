// how to store complex data structure like
// array of object
// ultimately in local storage data store in string formate

let vehicles = [
  { company: 'Honda', model: '2009' },
  { company: 'Tyota', model: 2010 },
];
console.log(typeof vehicles, vehicles);

let stringOfVehicle = JSON.stringify(vehicles);
console.log(typeof stringOfVehicle);

localStorage.setItem('vehicles', stringOfVehicle);
console.log(localStorage);

// get stored item again in object formate

let storeData = localStorage.getItem('vehicles');
let objectFormate = JSON.parse(storeData);
console.log(objectFormate, typeof objectFormate);
