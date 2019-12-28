/*Пишем табы меню.*/

// var tab;
// var tabContent;

// функция получает массив всех вкладок tab и массив объектов с классом
// tab-content.
// Так же при загрузке страницы выполняется скрытие неавтивных табов при помощи
// функции hideTabsContent().
window.onload = function () {
    // В данном случае эти 2 переменные используются в других функциях.
    // Можно было бы объявить их глобально, но такие известные авторы как
    // Дуглас Крокфорд не советуют так делать, ну и как сказал верзила
    // из операции "Ы" - Шурик, это же не наш метод))).
    // При этом, если внутри функции создать переменную без ключевого слова var
    // она станет глобальной.
    // Честно, даже не знаю как поступить чтобы это было лучшим вариантом
    // с точки зрения удобства чтения.
    tabContent = document.getElementsByClassName('tab-content');
    tab = document.getElementsByClassName('tab');

    hideTabsContent(1);
}

// Функция путем удаления, добавления css-классов скрывает неактивные вкладки
function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('white-border');
    }
}

// Функция отслеживает все клики мыши внутри области с #tabs.
// Далее проверяется элемент по которому был клик.
// Если у элемента класс tab то запускается цикл назначение которого выяснить
// индекс элемента на котором совершили клик мышью на массиве tab.
// Порядковй номер ячейки можно использовать для того чтобы получить нужный
// контент.
// Как только элемент найден цикл запустит showTabsContent и остановит при
// помощи break.
document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className === 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

// Функция проверяет есть ли на кликнутом элементе класс hide.
// Если да, то он добавляет ему white-border удаляет hide и добавляет show.
function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('white-border');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}