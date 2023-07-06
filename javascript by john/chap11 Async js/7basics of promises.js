let todos = (resource, callback) => {
  let request = new XMLHttpRequest();
  // console.log(request, request.readyState);
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status == 200) {
      // console.log(request, request.responseText);
      let data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // console.log('data could not fetch');
      callback('Data could not fetch', undefined);
    }
  });
  // set up the request
  request.open('Get', resource);
  // sending the request
  request.send();
};

// promise general example

let getSomething = () => {
  return new Promise((resolve, reject) => {
    // resolve('Some Data'); // Dummy
    reject('Some error');
  });
};
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
