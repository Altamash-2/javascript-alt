console.log('Exporting Module');

export let order = function (buyer, item) {
  console.log(`${buyer} ordered this ${item}`);
};

// multiple values

let LaptopPrice = 50000;
let quantity = 25;

export { LaptopPrice, quantity as quant };
