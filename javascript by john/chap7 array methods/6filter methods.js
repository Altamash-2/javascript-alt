//array methods
// filter method (used to perform filtration on array)

let gifts = ['watch', 'ring', 'chocolates', 'mobile', 'watch', 'iphone'];

// now you want to filter only 'watch and ring' gifts

let filteredArray = gifts.filter((gift) => {
  if (gift == 'watch' || gift == 'ring') {
    return gift;
  }
});

// it return new array
console.log(filteredArray);
console.log(gifts);

// imp note
//length of new array may or may not be equal to original array
