let todos = (resource) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    // console.log(request, request.readyState);
    request.addEventListener('readystatechange', () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status == 200) {
        // console.log(request, request.responseText);
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        // console.log('data could not fetch');
        reject('error in fetching the data');
      }
    });
    // set up the request
    request.open('Get', resource);
    // sending the request
    request.send();
  });
};

todos('data.json')
  .then((data) => {
    console.log('promise 1 resonved', data);
    return todos('hales.json');
  })
  .then((data) => {
    console.log('promise 2 Resolved', data);
    return todos('smolga.json');
  })
  .then((data) => {
    console.log('promise 3 reslved', data);
  })
  .catch((error) => {
    // only one catch enough to catch any error
    console.log(error);
  });
