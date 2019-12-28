/*********************************************/
/*Объекты.*/
// Объекты имеют схожесть с массивами за тем исключением что, для того чтобы получить доступ к свойству
// необходимо обратиться по его имени.
// В объектах допускается хранить любые типы данных.
// Хранение данных именно в объектах а не в массивах гораздо удобнее - не нужно запоминать номер ячейки.

var myFriends = {
	"name": "Alex",
	"age": 28,
	"sex": "male"
};

console.log(myFriends.name);
console.log(myFriends["name"]);
// Доступ к содержимому свойства возможен двумя способами:
// 1. через [] например myFriends["name"]
// 2. через . например myFriends.name
// Обращение к свойству через . (точечная нотация) удобнее для чтения и ее рекомендуют такие JS - эксперты
// как Дуглас Крокфорд.
// Обращение к свойству объекта через [] уодбно когда к свойству обращаемся через другую переменную.
// Или когда мы обращаемся к свойству вложенного объекта в объект.
var whatIsHisAge = "age";
console.log(myFriends[whatIsHisAge]);