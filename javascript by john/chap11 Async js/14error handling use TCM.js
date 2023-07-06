// error handling using try catch methode

let getTodo = async () => {
  try {
    let response = await fetch('data.json');
    let data = await response.json();
    let response2 = await fetch('hales.json');
    let halesData = await response2.json();
    console.log(data, halesData);
  } catch (error) {
    console.log(error.message);
  }
};
console.log(1);

getTodo();

// try {
//   let x = 4;
//   const y = 6;
//   y = x;
// } catch (error) {
//   console.log(error.message);
// }
