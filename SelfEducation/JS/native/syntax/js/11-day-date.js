/*********************************************/
/*Метод даты и времени.*/
var now = new Date();
console.log(now); // Tue Oct 09 2018 20:32:03 GMT+0500 (Екатеринбург, стандартное время).

// Как получить отдельные элементы даты?
var thisYear = new Date();
console.log(thisYear.getFullYear()); // 2018
console.log(thisYear.getMonth()); // 9 - писался в октябре (10 мес.) в этом методе отсчет идет с 0 для первого мес.
console.log(thisYear.getDate()); // 9.
console.log(thisYear.getDay()); // 2.
console.log(thisYear.getHours()); // 20.
console.log(thisYear.getMinutes()); // 39.
console.log(thisYear.getSeconds()); // 16.
console.log(thisYear.getTime()); // 1539099607678 - это количество милисекунд прошедшее с 01.01.1970.
console.log(thisYear.getUTCMilliseconds());// 512

// Как прибавить дней, месяцев или даже лет?
var plusYear = new Date(2018);
plusYear.setDate(plusYear.getFullYear() + 2);
console.log(plusYear);