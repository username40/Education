'use strict';

/* 3.  Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
 * только у вашей горки должно быть 20 рядов, а не 5:
```
x
xxx
xxxxx
xxxxxxx
xxxxxxxxx
```
*/

for (let i = 0, mountainX = 'x'; i < 20; i++, mountainX += 'xx') {
	console.log(mountainX);
}

/*
* Второй вариант - здесь вывод в консоль происходит только 1 раз

let pyramid = '';
for (let i = 0; i < 20; i++) {
  pyramid += 'x';

  for (let j = 0; j < i; j++) {
    pyramid += 'xx';
  }
  pyramid += '\n';
}

console.log(pyramid);
*/
