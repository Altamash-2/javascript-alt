//string
console.log('hello world');
let firstName = 'Altamash';
let lastName = 'kaleem';
console.log(firstName, lastName);

//string concatenation
// methode1 using + operator
let fullName = firstName + ' ' + lastName;
console.log(fullName);
// methode2 using template literals
let fullNames = `my name is ${firstName} ${lastName}`;
console.log(fullNames);

// getting string character
console.log(firstName[4]);

// string Methods
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(lastName.indexOf('e')); //indexof methode give first character only other ignore

// common string methods
let hobbies = '   coding reading running';
// trim methode - trim return some value and store in variable
const result = hobbies.trim();
console.log(hobbies);
console.log(result);
// indexOf
console.log(hobbies.indexOf('coding'));
console.log(result.indexOf('coding'));

// lastIndexof
console.log(result.lastIndexOf('running')); //case sensitive means capital and small is different; if not present give -1 result

// include methode - give true (if present) give false (if absent)
console.log(result.includes('reading'));

// slice methode
let fullNameis = 'wowprogrammer';
const ans = fullNameis.slice(0, 7); // excluding last one 0-6;

// imp note methode does not mutate original string
console.log('Original string = ', fullNameis);
console.log('extracted string = ', ans);

// string split methode
let favoriteColores = 'Black Brown Blue red';
let splitColores = favoriteColores.split(' '); // space dene ki vajah se alag alag tut jayega;
// string to array conversion
console.log(splitColores);

// javascript sting are Immutable
let str = 'Hello';
str[0] = 'p';
str[1] = 'q';
// there will be no change in str varible;
console.log(str);
str = str + 'programmer';
console.log(str);
