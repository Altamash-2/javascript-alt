// array methode
// some and every methode
// some methode return true if any array element pass the test
// every method return  true if all elements pass the test

let scores = [25, 34, 67, 92, 80];
let result = scores.some((score) => {
  return score > 90;
});
console.log('some methode', result);

let newScore = [54, 65, 58, 81, 76];
let newResult = newScore.every((score) => {
  return score > 50;
});
console.log('every methode', newResult);
