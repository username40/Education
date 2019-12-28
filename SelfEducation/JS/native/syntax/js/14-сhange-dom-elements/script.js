/*********************************************/
/*Изменение элементов с помощью DOM.*/
// Для доступа к содержимому элемента используется свойство innerHTML.

var el_1 = document.getElementById('some-block'); // Подключились к элементу с id.
var el_2 = document.getElementsByTagName('div'); // подключилилсь ко всем блокам.

// По клику на кнопку функция меняет содержимое тега на текст который тут написан.
function changeSingle(element) {
    element.innerHTML = 'here is some content';
}

// По клику на кнопку функция меняет содержимое тега на текст который тут написан.
function changeCollection(elements) {
    for (i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'we all changed';
    }
}

// Изменяем значение аттрубутов объекта.
var google_link = document.getElementById('test-link'); // Цепляемся к ссылке по id.
google_link.href = 'https://yandex.ru/'; // Меняем ссылку на другую.
google_link.style.color = 'pink'; // А теперь поменяли стиль (цвет текста).
google_link.style.textDecoration = 'none'; // И уберем нижнее подчеркивание.
// При изменении стилей при помощи JS те свойства где в названии используется - мы просто пишем camelCase.