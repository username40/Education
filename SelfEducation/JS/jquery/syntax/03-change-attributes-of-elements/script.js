﻿/*Изменение атрибутов элемента*/

// Если с изменением одного вида css-свойства все понятно, то что делать когда
// нужно за раз сменить несколько?
// Писать несколько отдельных команд. Шурик это же не наш метод!
// Все описываемые свойства мы можем представить в виде объекта.
// Так же наименования свойств можно описывать при помощи camelCase, как это
// привычно многим разработчикам любящим css in JS.
$('article').css({'font-size': '35px',
                    'color':'red',
                    fontStyle: 'italic'});

// Добавить класс можно следующим образом:
$('#content').addClass('jquery-class');

// Удалить класс можно используя метод .removeClass.
$('#content').removeClass('box');

