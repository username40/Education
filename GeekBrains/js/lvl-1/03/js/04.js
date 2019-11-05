'use strict';

/* 4*. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (можно без оптимизаций).
*/

let i = 0;

while (i < 100) {
  if (isPrimeNumber(i)) {
    console.log(i);
  }
  i++;

  /**
   * Функция проверяет является ли число простым
   * @param {number} number Число которое проверяем
   * @returns {boolean} Вернет true, если число простое, иначе false
   */
  function isPrimeNumber(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}