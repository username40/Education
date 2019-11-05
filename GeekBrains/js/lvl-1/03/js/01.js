'use strict';

/* 1. С помощью цикла do…while написать алгоритм для вывода чисел от 0 до 10 включительно,
 * чтобы результат выглядел так:
```
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
```
*/

let evenOddNumbers = 0;

do{
  if (evenOddNumbers === 0) {
    console.log(`${evenOddNumbers} - это ноль!`);
  } else if (evenOddNumbers % 2 === 0) {
    console.log(`${evenOddNumbers} - это четное число!`);
  } else {
    console.log(`${evenOddNumbers} - это нечетное число!`)
  }
  evenOddNumbers++;
} while (evenOddNumbers < 11);