'use strict';

/* 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
 * Обязательно использовать оператор return.
 */

// Вариант 1
/**
 * Функция складывает 2 числа
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns {number} Возвращает число если было передано 2 числа
 */
function add(a, b) {
    return a + b;
}

/**
 * Функция вычитает 2 числа
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns {number} Возвращает число если было передано 2 числа
 */
function reduce(a, b) {
    return a - b;
}

/**
 * Функция делит 2 числа
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns {number} Возвращает число если было передано 2 числа
 */
function divide(a, b) {
    return a / b;
}

/**
 * Функция умножает 2 числа
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns {number} Возвращает число если было передано 2 числа
 */
function multiply(a, b) {
    return a * b;
}

console.log(add(10, 10));
console.log(reduce(60, 15));
console.log(divide(20, 10));
console.log(multiply(10, 5));

// Вариант 2
/* В данном задании я попробовал использовать стрелочные функции, они же позволяют использовать
 * функции без написания каждый раз return.
 */

/**
 * Функция складывает 2 числа и округляет до 2 знаков после запятой, если это необходимо
 * и выводит результат в консоль
 * @param {number} a Первое число
 * @param {number} b Второе число
 */
let addition = (a, b) => parseFloat((a + b).toFixed(2));

console.log(addition(20, 45));

/**
 * Функция вычитает 2 числа и округляет до 2 знаков после запятой, если это необходимо
 * и выводит результат в консоль
 * @param {number} a Первое число
 * @param {number} b Второе число
 */
let subtraction = (a, b) => parseFloat((a - b).toFixed(2));

console.log(subtraction(75, 22));

/**
 * Функция делит 2 числа и округляет до 2 знаков после запятой, если это необходимо
 * и выводит результат в консоль
 * @param {number} a Первое число
 * @param {number} b Второе число
 */
let division = (a, b) => parseFloat((a / b).toFixed(2));

console.log(division(134, 17));

/**
 * Функция умножает 2 числа и округляет до 2 знаков после запятой, если это необходимо
 * и выводит результат в консоль
 * @param {number} a Первое число
 * @param {number} b Второе число
 */
let multiplication = (a, b) => parseFloat((a * b).toFixed(2));

console.log(multiplication(24, 71));