//type conversion

let stringType = '12';
console.log(stringType, typeof stringType);

// Number methode
let numberType = Number(stringType);
console.log(numberType, typeof numberType);
// imp note in number methode passing string must be of numeric vaues

let number = 56;
//string methode
let stringTypes = String(number);
console.log(stringTypes, typeof stringTypes);

// boolean method true /false
let age = ''; // empty string ,undefined, null,0 are falsy value
let booleanValueOfAge = Boolean(age);
console.log('boolean value of age is ', booleanValueOfAge);
