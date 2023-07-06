// break and continue statement

// also called jump statments

// continue statement
//used to skip some values of loop
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue; // move towords the next iteration
  }
  console.log('value of i = ', i);
}

// break statement
// used to terminate the loop and controll transfer from outside
for (let j = 0; j <= 10; j++) {
  if (j == 5) {
    console.log('our desired value is = ', j);
    break;
  }
  console.log('value of j = ', j);
}
console.log('now i am outside of the loop scope');
