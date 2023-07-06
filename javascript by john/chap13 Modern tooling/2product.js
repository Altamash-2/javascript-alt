console.log('Exporting module');

let order = function (buyer, item) {
  console.log(`${buyer} ordered the ${item}`);
};

export default order;
