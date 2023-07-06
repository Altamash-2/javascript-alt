// foreach method of array
// its another type of loop which we used to traverse over the array

let dishes = ['biryani', 'channy', 'samosa', 'parathay'];
// using for loop
for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}
console.log('******');
// using foreach methode
dishes.forEach((element) => {
  console.log(element);
});
