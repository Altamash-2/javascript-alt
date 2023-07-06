// control flow
// for loop

// run the specific task 10 times

// without for loop
// console.log('run the task');
// console.log('run');
// console.log('run');
// console.log('run');
// console.log('run');
// console.log('run');

// for loop
for (let i = 1; i <= 10; i++) {
  console.log('run the task ', i);
}

// usecase of for loop
let dishes = ['biryani', 'halim', 'pani puri'];
// access the array
for (let i = 0; i < dishes.length; i++) {
  const element = dishes[i];
  console.log(element);
}
