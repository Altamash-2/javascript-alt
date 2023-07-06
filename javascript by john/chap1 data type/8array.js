//arrays

let dishes = ['Biryani', 'Chat', 'Parathay'];
//access
console.log(dishes[1]);
dishes[0] = 'halim';
console.log(dishes);

// array methode

// join methode
console.log(dishes.join(' '));
//' ' - space operator

//indexOf methode
console.log(dishes.indexOf('Parathay')); // case sensitive

// concate methode
let newDishe = ['sweet', 'pani pury'];
let concateDish = dishes.concat(newDishe);
console.log(concateDish);
// above mehode is immutable

// length property
console.log(concateDish.length);

// push methode - it is mutable
console.log(concateDish.push('samosa')); //return new length of array
console.log(concateDish);

// pop methode - remove element from last
console.log(dishes.pop());
