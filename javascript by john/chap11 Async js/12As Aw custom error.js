// async and await(throwing custom error)

let getTodo = async () => {
  let response = await fetch('datasa.json');
  // custom error
  if (response.status !== 200) {
    throw new Error('custom: error in fetching the data');
  }
  let data = await response.json();
  return data;
};
console.log(1);

getTodo()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
