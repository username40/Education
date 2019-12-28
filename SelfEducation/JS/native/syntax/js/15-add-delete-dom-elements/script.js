/*********************************************/
/*Добавление и удаление DOM - элементов при помощи JS*/
// Для добавления элементов существует методы createElememt() appendChild().
// createElement создает элемент по названию, а так же возвращает его.
// appendChild добавляет элемент как дочерний (или последний).
// Для удаления элементов сущесвует метод removeChild().

// По клику на кнопку происходит добавление ссылки(дочерний элемент).
function addlink() {
    var firstBlock = document.getElementById('block-1');
    var link = document.createElement('a');
    var br = document.createElement('br');

    link.innerHTML = 'go to google';
    link.href = 'https://www.google.ru/';

    firstBlock.appendChild(br);
    firstBlock.appendChild(link);
}
// По клику на кнопку происходит удаление блока со всеми ссылками внутри.
function removeLnk() {
    var removeLink = document.getElementById('block-1');
    document.body.removeChild(removeLink);
}