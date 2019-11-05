'use strict';
/*5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 * где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
 * переданного значения операции (использовать switch) выполнить одну из арифметических операций
 * (использовать функции из задания 4) и вернуть полученное значение.
 */

/**
 * Функция производит ту мат операцию которая будет указана 3 аргументом
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation вид мат операции, указывается просто символом + - / * в кавычках
 * @returns {number} возвращает результат выполнения мат операции
 */
function mathOperation(arg1, arg2, operation){
  switch(operation){
    case '+':
      return addition(arg1, arg2);
    case '-':
      return subtraction(arg1, arg2);
    case '/':
      return division(arg1, arg2);
    case '*':
      return multiplication(arg1, arg2);
  }
}

mathOperation(19,19,'+');