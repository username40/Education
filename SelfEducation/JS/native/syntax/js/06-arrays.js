/*********************************************/
/*Массивы.*/
// Массив - это разновидность объекта преднаначенного для хранения данных.
// содержимое заключается в [].
// Хранить в себе может раличные типы данных (строки, числа и т.д.) в т.ч. массивы.
// Конкретный элемент вызывается при помощи указания номера ячейки.
// Нумерация в массивах начинается с 0.
var myArr = ["first", "second", "third"];
console.log(myArr[1]); // second

// Заменить элемент можно следующим образом:
myArr[0] = "zero";
console.log(myArr);

// Аналогичным образом можно вставить элементы в массив если указать номер не существующей ячейки.
// Она создастся и в нее будут положены данные.
myArr[3] = "third!!!";
console.log(myArr);

// Узнать длину массива - .length
// Вставить элемент в конец массива - .push(//data to push array).
// Вставить элемент в начало массива - .unshift().
// Удалить элемент из конца массива - .pop().
// Удалить элемент из начала массива - .shift().

myArr.push("fourth");
console.log(myArr);

myArr.unshift("minusZero");
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.shift();
console.log(myArr);