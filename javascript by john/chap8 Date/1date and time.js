// date and time

// date object always carry both date and time

// using date method
let currentDate = new Date(21, 12, 24, 11, 54, 32); // 0 to 11 (month)
console.log(currentDate);

// using timsStamp(integer number represent in 'ms' from 1-1-1970)
let currentDates = new Date(86400000); // 0 is time in milli second
// 1 day = 24 * 60 * 60 * 1000 = 86400000
console.log(currentDates);

// to get time in 'ms'
let curentDate = new Date().getTime();
console.log(curentDate); // give total time in ms

// some other work on date and time
let completeDateandTime = new Date();
console.log(completeDateandTime);

// get full year
console.log(completeDateandTime.getFullYear());

// get Month
console.log(completeDateandTime.getMonth()); // 0 to 11 0means january

// week day
console.log(completeDateandTime.getDay()); // 0 to 6 0-sunday

// month date
console.log(completeDateandTime.getDate());

// get Hours
console.log(completeDateandTime.getHours());

// get minute
console.log(completeDateandTime.getMinutes());

// get seconds
console.log(completeDateandTime.getSeconds());
