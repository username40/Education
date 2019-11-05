'use strict';

/* 2*. Заполнить созданную таблицу фигурами, фигуры должны выглядеть как картинки,
* либо можно использовать символы (существуют символы шахматных фигур)
* причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*/

/**
 * Функция генерирует шахматную доску
 * Спецсимволы шахматы и наименования колонок находятся в массивах
 * При помощи циклов for генерируются строки и клетки
 * Свитч в зависимости от строки ставит на поле фигуры того или иного цвета
 */
function renderBoard() {
  let board = document.createElement('table');

  //массивы с данными о наименовании колонок и фигурами
  let columnLetters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
  //черные и белые фигуры нижний ряд (ладья, конь и т.д.)
  let blackFigures1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;',
    '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8' ];
  let whiteFigures1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;',
    '&#9812;', '&#9821;', '&#9815;', '&#9814;', '1'];
  //черные и белые пешки
  let blackFigures2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;',
    '&#9823;', '&#9823;', '&#9823;',  '&#9823;', '7'];
  let whiteFigures2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;',
    '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'];

  for (let i = 0, a = 9; i < 10, a >= 0; i++, a--) {
    let newTr = board.insertRow(i);

    for (let c = 0; c < 10; c++) {
      let newTd = newTr.insertCell(c);

      switch (i) {
        case 0:
          newTd.innerText = columnLetters[c];
          break;
        case 1:
          newTd.innerHTML = blackFigures1[c];
          break;
        case 2:
          newTd.innerHTML = blackFigures2[c];
          break;
        case 7:
          newTd.innerHTML = whiteFigures2[c];
          break;
        case 8:
          newTd.innerHTML = whiteFigures1[c];
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