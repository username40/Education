'use strict';

/* 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
* Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
* Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

/**
 * Функция генерирует шахматную доску
 * Спецсимволы шахматы и наименования колонок находятся в массивах
 * При помощи циклов for генерируются строки и клетки
 * switch в зависимости от строки ставит на поле фигуры того или иного цвета
 */
function renderBoard() {
  let board = document.createElement('table');

  //массив с данными о наименовании колонок
  let columnLetters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];

  for (let i = 0, a = 9; i < 10, a >= 0; i++, a--) {
    let newTr = board.insertRow(i);

    for (let c = 0; c < 10; c++) {
      let newTd = newTr.insertCell(c);

      switch (i) {
        case 0:
          newTd.innerText = columnLetters[c];
          break;
        case 9:
          newTd.innerText = columnLetters[c];
          break;
        default:
          if (c === 0 || c === 9) {
            newTd.innerHTML = a;
          }
          break;
      }
    }
  }
  document.body.appendChild(board);
};
renderBoard();