/*Пишем модальное окно.*/

var myModal = document.getElementById('myModal');
var myBtn = document.getElementById('myBtn');
// В конце написано [0], сделано это так потому что getElementsByClassName
// возвращает массивоподобный объект следовательно нужно указать какой
// именно элемент нам нужен. Или же можно просто присвоить id и работать
// с ним.
var close = document.getElementsByClassName('close')[0];
// var close = document.getElementById('close');

// Функция по клику кнопки открывает модальное окно.
myBtn.onclick = function () {
    myModal.style.display = 'block';
}

// Функция по кликку на крестик закрывает модальное окно.
close.onclick = function () {
    myModal.style.display = 'none';
}

// Функция закрывает модальное окно когда пользователь кликает по экрану
// за его пределами.
window.onclick = function (event) {
    if (event.target === myModal) {
        myModal.style.display = 'none';
    }
}