// modern javascript Modules,and tooling

// Module pattern

// immediately invoked function (iife)

let resultIIFE = (function () {
  let orders = [];
  let addTocart = function (product, quantity) {
    console.log(`${product} ordered ${quantity}`);
    orders.push(product, quantity);
  };
  return {
    orders,
    addTocart,
  };
})();

console.log(resultIIFE);
resultIIFE.addTocart('pizza', 5);
resultIIFE.addTocart('Biryani', 8);

console.log(resultIIFE.orders);
