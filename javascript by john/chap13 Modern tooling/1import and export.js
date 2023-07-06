// Modern javascript Modules,an d tooling

// Exporting and importing ES6 Modules

// importing module without value
// import { order, LaptopPrice, quant as Q } from './product.js';

import * as singleVariable from './product.js';
console.log('imorting module');

singleVariable.order('jack', 'Laptop');

console.log('laptop price = ', singleVariable.LaptopPrice);
console.log('quantiy = ', singleVariable.quant);

console.log(singleVariable);
