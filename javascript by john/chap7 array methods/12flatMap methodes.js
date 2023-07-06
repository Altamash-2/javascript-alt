// array methode

// flatMap methode
// it is the combination of the 'map()' methode
// followed by the 'flat()' methode of depth 1

let cart = [
  {
    name: 'Mobile Phone',
    qty: 2,
    price: 500,
  },
  {
    name: 'Tablet',
    qty: 1,
    price: 1000,
  },
];
let newCart = cart.flatMap((item) => {
  if (item.name === 'Mobile Phone') {
    return [
      item,
      {
        name: 'Screen Protector',
        qty: 1,
        price: 0,
      },
    ];
  } else {
    return [item];
  }
});
console.log(newCart);
