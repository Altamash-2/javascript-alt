// asynchronous javascript

// async and await

let getTodo = async () => {
  let response = await fetch('data.json');
  let data = await response.json();
  // returning the data from async await function
  return data;
};
console.log(1);

getTodo()
  .then((data) => {
    // this is how we handle resolved  promise using then method
    console.log(data);
  })

  .catch((error) => {
    // this is how we handle rejected promise using catch method
    console.log(error);
  });
