// asunchronous javascript

// making http request (example)

let request = new XMLHttpRequest();
console.log(request, request.readyState);
request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

// set up the request
request.open('Get', 'https://jsonplaceholder.typicode.com/todos');

// sending the request
request.send();

// use this link for practice toget JSON data in response
// https://jsonplaceholder.typicode.com/todos

// value state description
// 0  unsent  Client has been created.open not called yet.
// 1 OPENED  open() has been called.
// 2  HEADERS RECEIVED   send() has been called, and headers
// 3  LOADING  Downloading : responseText holds partial data.
// 4  DONE   The operation is complete. // interested here
