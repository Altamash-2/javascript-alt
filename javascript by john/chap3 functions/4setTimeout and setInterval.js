// setTimeOut and setInterval
// setTimeOut -> run function 'once' after 'interval' of time
// setInterval -> run function repeatedly,starting after the ineterval of time,then repeading...

// setTimeOut(func|code,delay ,arg1,arg2)
function greeting(name) {
  console.log(`welcome ${name} to our dost family`);
}
setTimeout(greeting, 3000, 'john'); //5000 = 5sec

// setInterval(func|code,delay , arg1, arg2)
// setInterval(greeting, 3000, 'john');
