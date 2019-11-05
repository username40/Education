'use strict';

/*
  * 5*. Пользователь, с помощью команды prompt, вводит номер билета - 6 цифр.
  * Программа определяет является ли счастливым данный билетик и выводит соответстующее сообщение в консоль.
  * Счастливый билет - билет, у которого сумма первых трех цифр равна сумме последних трех цифр номера билета.
  * Для выполнения задания необходимо использовать оператор % и ветвление.
  * Чтобы сравнить два значения, можно использовать if и else (курс основ программирования), например:
  * ```
  * const a = 1;
  * const b = 1;
  *
  * if (a === b) {
  *   console.log('Две переменные a и b равны.');
  * }
  * ```
 */

//  Вариант 1
let number = parseInt(prompt('Введите номер билета'));
let n1 = number % 10;
let n2 = Math.floor(number / 10) % 10;
let n3 = Math.floor(number / 100) % 10;
let n4 = Math.floor(number / 1000) % 10;
let n5 = Math.floor(number / 10000) % 10;
let n6 = Math.floor(number / 100000) % 10;
let message = 'Билет НЕ счастливый!';

if(n1 + n2 + n3 === n4 + n5 + n6) {
  message = 'Поздравляем, у Вас счастливый билет!';
}

alert(message);

// Вариант 2
let ticketNumber = prompt('Введите номер билета');
let ticketNumberSplit = ticketNumber.split("");
let firstThreeNumbers = +ticketNumberSplit[0] + +ticketNumberSplit[1] + +ticketNumberSplit[2];
let secondThreeNumbers = +ticketNumberSplit[3] + +ticketNumberSplit[4] + +ticketNumberSplit[5];

if (ticketNumberSplit.length < 6 || ticketNumberSplit.length > 6) {
  console.log('Необходимо ввести ровно 6 цифр!');
} else if (firstThreeNumbers === secondThreeNumbers) {
  console.log('Поздравляем у Вас счастливый билет!');
} else {
  console.log('К сожалению у Вас НЕ счастливый билет!');
}
