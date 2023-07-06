// array methods

// slice methods -non mutating methods
// used to extract part the array
// array.slice (startIndex,lastIndex(excluded))
// return new array of extracted elements

let num = [3, 4, 5, 7, 8, 2];
let sliceArray = num.slice(1, 4);
console.log('oginal array = ', num);
console.log('extracted array = ', sliceArray);
