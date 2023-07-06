// asynchronous javascript

// fetch api

fetch('data.json')
  .then((response) => {
    console.log('Promise resolved', response);
    return response.json(); // returning promises
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
