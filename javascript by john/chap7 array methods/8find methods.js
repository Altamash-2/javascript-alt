// array methods

// find method
// it return the 'first' element we are loking for...

let students = [
  { id: 1, name: 'alex' },
  { id: 2, name: 'john' },
  { id: 1, name: 'paul' },
];

let result = students.find((student) => {
  return student.id == 1;
});
console.log(result);
