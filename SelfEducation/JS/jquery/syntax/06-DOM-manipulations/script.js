/*Манипуляции с DOM.*/

// При помощи данного примера мы создаем а затем помещаем блок в body
/*
var $myDiv = $('<div id="my" class="page">this div created in' +
    ' jquery</div>').appendTo('body');
*/

// Есть еще способ который должен быть более производительным, особенно
// когда речь идет о создании большого количества DOM-элементов
/*
var $myDiv = $('<div>this div created in jquery</div>', {'id': 'my',
    'class': 'page'}).appendTo('#content');
*/

// Либо так
/*
var $myDiv = $('<div>this div created in jquery</div>').attr({'id': 'my',
    'class': 'page'}).appendTo('#content');
*/
// Но более понятно если писать это на нативном JS

var myDiv = document.createElement('div');
myDiv.id = 'my';
myDiv.className = 'page';

// Метод after - вставляет элемент после того который сначала ищем. Будет
// вставлен после каждого найденного
$('p').after('<hr/>');

// insertBefore позволяет вставить перед нужным элементом
$('<hr/>').insertBefore('h1');

// Вместо after можно воспользоваться append
$('h2').append('<hr/>');

// replaceWith - заменяет найденные элементы новыми
/*
$('.second').replaceWith('<h2>replceWith text</h2>');
*/

// replaceAll Заменяет все найденные элементы
/*
$('<h2>replaceWith text</h2>').replaceAll('.inner');
*/
// метод wrap обворачивает каждый найденный DOM элемент. А метод wrapAll
// обворачивает группу найденных элементов в обертку которая передается ему
// в параметрах.
// Метод wrapInner обворачивает содержимое искомого элемента вставляя его
// внутрь себя
/*
$('.inner').wrap('<div>this is shell text</div>');
$('.inner').wrapAll('<div>this is shell text</div>');
$('.inner').wrapInner('<div>this is shell text</div>');
*/

// Метод clone клонирует выбранные элементы которые потом можно куда нибудь
// вставить.
/*
$('.first').clone().appendTo('.third');
*/

// Метод detach убирает из DOM дерева элемент но при этом хранит его для
// последующего использования.
// В данном примере убираем блок .first и вставляем его в блок .third
/*
$('.first').detach().appendTo('.third');
*/

// Метод empty стирает содержимое DOM-элемента, при этом сохраняя сам элемент
/*
$('.second').empty();
*/

// А метод remove полностью уничтожает и сам элемент и его содержимое.
/*
$('.first').remove();
*/

