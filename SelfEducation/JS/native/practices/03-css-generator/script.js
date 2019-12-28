/*Создаем свой css генератор.*/
// Делаем простой генератор css кода, меняющий свойство border-radius
// и выводящее его на экран в виде строки которую можно скопировать.

function changeRadius() {
    // Переменные для удобства называются так же как и Id которых они получают.
    // Названия расшифровываются следующим образом:
    // rtl - range top left;
    // ttl - text top left.
    // Получаем input range.
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbl = document.getElementById('rbl').value;
    var rbr = document.getElementById('rbr').value;

    // Получаем input text.
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');

    // Получаем блок который будет демонстрировать результат.
    var viewResult = document.getElementById('viewResult');

    // Вставляем текст в результирующее поле которое можно скопировать
    // себе в css-файл.
    ttl.innerHTML = rtl;
    ttr.innerHTML = rtr;
    tbl.innerHTML = rbl;
    tbr.innerHTML = rbr;

    // Для большей наглядности, блок, который выглядит как прямоугольник меняет свой вид
    // при смещении ползунков.
    viewResult.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}