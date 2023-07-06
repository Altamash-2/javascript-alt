// nested if statement

let num = 23;
if (num > 22) {
  console.log('run if 1st condition true');
  if (num > 25) {
    console.log('run if both condition true');
    if (num > 20) {
      console.log('run if all condition true');
    }
  }
}
// this is not good practice;
