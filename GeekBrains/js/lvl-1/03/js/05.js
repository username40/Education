'use strict';

/* 5*. Дан массив (создать такой же, с такими же значениями):
```
const arr = [
  [2, 4, 6],
  [1, 5, 10],
  [7, 4, 1],
];
```
 * Задания:
 * 1. Найти массив, у которого сумма всех чисел максимальна, вывести в console.log индекс этого массива.
 * 2. Получить и вывести в console.log минимальное значение найденное в массиве,
 * который мы получили в первом пункте.
*/

const arr = [
  [2, 4, 6],
  [1, 5, 10],
  [7, 4, 1],
];

let maxSumOfArrayIndex = 0;
let maxSumOfArray = getSumOfElements(arr[maxSumOfArrayIndex]);

for (let i = 1; i < arr.length; i++) {
  const sumOfElements = getSumOfElements(arr[i]);
  if (sumOfElements > maxSumOfArray) {
    maxSumOfArray = sumOfElements;
    maxSumOfArrayIndex = i;
  }
}

console.log(`Индекс массива, сумма элементов которого максимальна, равен ${maxSumOfArrayIndex}`);

const innerArr = arr[maxSumOfArrayIndex];
const minNumber = innerArr[0];

for (let i = 1; i < innerArr.length; i++) {
  if (innerArr[i] < minNumber) {
    minNumber = innerArr[i];
  }
}

console.log(`Минимальный элемент в найденном массиве равен ${minNumber}`);

/**
 * Функция вовзращает сумму элементов массива
 * @param {number[]} arr Массив, сумма элементов которого вернет функция
 * @returns {number} Сумма элементов в массиве
 */
function getSumOfElements(arr) {
  let sum = 0;
  for (const val of arr) {
    sum += val;
  }
  return sum;
}