// async await without return statment

// let suppose we want to get more than one data

let getTodo = async () => {
  let response = await fetch('data.json');
  let data = await response.json();
  let response2 = await fetch('hales.json');
  let halesData = await response2.json();
  console.log(data, halesData);
};
console.log(1);

getTodo();
