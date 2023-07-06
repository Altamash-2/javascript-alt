// switch statement

let age = 17;
switch (age) {
  case 15:
  case 16:
  // break;
  case 17:
    result = 'there ages are allowed to sit in the exam';
    break;
  default:
    result = 'not allowed';
}
// if there is no break statement than next case will be execuated
console.log(result);
