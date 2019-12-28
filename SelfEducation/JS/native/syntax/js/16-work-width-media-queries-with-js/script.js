
/*********************************************/
/*Обработка событий.*/
// События в документе это некоторые процессы которые происходят на странице.
// Условно деляться на пользовательские и браузерные.
// Браузерные - загрузка документа загрузка DOM и их неудачные версии.
// Пользовательские - все остальные (изменение размера окна, клик и т.д.).
// onclick - клик левой кнопкой мыши.
// ondblclick - двойной клик левой кнопкой мыши.
// onchange - изменение значения элементов формы.
// onfocus - событие фокусировки на элементе.
// onblur - событие противоположное (потеря фокуса) предыдущему.
// Все примеры описываются в index.html.


/*********************************************/
/*Как работать с DOM? Доступ к элементам веб-страницы*/
// DOM - Document Object Model (Объектная модель документа).
// При помощи JS можно получить доступ к элементам веб-страницы чтобы в полследующем производить с ними операции.
// Скрипт файл в котором идет работа с DOM необходимо обязательно подключать только в конце HTML документа,
// перед закрывающим тегом <body>
// Это вызвано тем что если скрипт загрузится до создания HTML - документа он не сможет выполнится и образуется
// ошибка

// По принятому соглашению при HTML верстке для указания стилей используются только классы.
// Id элементов верстки используется для JS.
var element = document.getElementById('header'); // Mы подкючились к HTML-элементу с индетификатором header.
console.log(element); // Теперь в консоль будет выведена вся структура тега к которому привязан id.

// Чтобы получить коллекцию элементов можно использовать:
var tags = document.getElementsByTagName('p'); // Мы взяли все теги <p>.
console.log(tags);

// Чтобы получить коллекцию элементов с определенным классом можно использовать:
var classes = document.getElementsByClassName('content'); // Мы взяли все элементы с классом content
console.log(classes);


/*********************************************/
/*Изменение элементов с помощью DOM*/
// Для доступа к содержимому элемента используется свойство innerHTML.

var el_1 = document.getElementById('some-block'); // Подключились к элементу с id
var el_2 = document.getElementsByTagName('div'); // подключилилсь ко всем блокам

// По клику на кнопку функция меняет содержимое тега на текст который тут написан
function changeSingle(element) {
    element.innerHTML = 'here is some content';
}

// По клику на кнопку функция меняет содержимое тега на текст который тут написан
function changeCollection(elements) {
    for (i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'we all changed';
    }
}

// Изменяем значение аттрубутов объекта
var google_link = document.getElementById('test-link'); // Цепляемся к ссылке по id.
google_link.href = 'https://yandex.ru/'; // Меняем ссылку на другую.
google_link.style.color = 'pink'; // А теперь поменяли стиль (цвет текста).
google_link.style.textDecoration = 'none'; // И уберем нижнее подчеркивание.
// При изменении стилей при помощи JS те свойства где в названии используется - мы просто пишем camelCase.

/*********************************************/
/*Добавление и удаление DOM - элементов при помощи JS*/
// Для добавления элементов существует методы createElememt() appendChild()
// createElement создает элемент по названию, а так же возвращает его
// appendChild добавляет элемент как дочерний (или последний)
// Для удаления элементов сущесвует метод removeChild()

function addlink() {
    var firstBlock = document.getElementById('block-1');
    var secondBlock = document.getElementById('block-2');
    var link = document.createElement('a');
    var br = document.createElement('br');

    link.innerHTML = 'go to google';
    link.href = 'https://www.google.ru/';

    firstBlock.appendChild(br);
    firstBlock.appendChild(link);
}

function removeLnk() {
    var removeLink = document.getElementById('block-1');
    document.body.removeChild(removeLink);
}

/*********************************************/
/*Как работать с медиа-запросами через JS?*/
// Получить текущую ширину экрана можно с помощью .innerWidth.
// Получить текущую высоту экрана можно с помощью .innherHeight.
// Так же ширину можно получить с помощью document.body.clientWidth.
// Эти способы не будут раотать корректно если не произвести сбор стилей.
// Минимум что должно быть записано в начале css - файла:
// * {
//      margin: 0;
//      padding: 0;
// }
// matches - возвращает истину или ложь в зависимости от результата запроса.
//var screen = window.matchMedia("(max-width: 768px)");

if (screen.matches) {
    console.log("<768px");
} else {
    console.log(">768px");
}

// При помощи такой вот несложной конструкции JS может динамически отслеживать
// размер экрана.
if (matchMedia) {
    var screen = window.matchMedia("(max-width: 768px)");
    screen.addListener(changes);
    changes(screen);
}

function changes(screen) {
    if (screen.matches) {
        console.log("<768px");
    } else {
        console.log(">768px");
    }
}