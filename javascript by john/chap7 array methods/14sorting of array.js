// working with arrays(simple methods)

// sorting array using sort method
// By default sort method is used to sort string
// it firstly convert everything into string and then...

let letters = ['d', 'e', 'f', 'a', 'b'];
console.log(letters.sort());

let nums = [2, 5, 7, -1, -22, -43];
console.log(nums.sort()); // unexpected result

// if a-b < 0 => a<b => a,b (keep order same)
// if a-b >0 => a > b => b,a (switch the order)

nums.sort((a, b) => {
  if (a < b) {
    return -1; // any num less than 0
  }
  if (a > b) {
    return 1; // any num greater than 0
  }
});
console.log('sorted', nums);

// descending order
nums.sort((a, b) => {
  return b - a;
});
console.log(nums);
