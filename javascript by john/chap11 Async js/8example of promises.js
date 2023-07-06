// quokka plugin
// const properties = require('jsdom-quokka-plugin/properties');
// properties;
// some more example of Promise
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
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
