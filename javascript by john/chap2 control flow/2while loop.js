// while loop

for (let i = 1; i <= 5; i++) {
  // infinite loop in case we miss conditional statement
  console.log('for loop ', i);
}

// while loop
let j = 1;
while (j <= 5) {
  console.log('while loop', j);
  j++; // without this statement we will get infinite loop
}

let dishes = ['biryani', 'halim', 'pani puri', 'samosa'];
let e = 0;
while (e < dishes.length) {
  // get error >-- conditional statement is manadatory
  console.log(dishes[e]);
  e++;
}
