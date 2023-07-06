// asynchronous javascript

// callback hell(chain of callback function insikde one another)

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

console.log(1);
console.log(2);

// asynchronous code example
// chain of todos function (callback) => callback hell
todos('data.json', (error, Data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(Data);
  }
  todos('hales.json', (error, Data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(Data);
    }
    todos('smilga.json', (error, Data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(Data);
      }
    });
  });
  todos;
});

console.log(3);
console.log(4);
