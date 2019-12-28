/*Hide-show.*/
//Простое переключение с кнопки меню которая в виде бургера на кнопку крестика.
function burgerMenu() {
    var burger = document.getElementById('burger');
    var myDiv = document.getElementById('myDiv');

    if (burger.style.background === 'url("img/menu.svg")' && myDiv.style.display === 'none') {
        burger.style.background = 'url("img/close.svg")';
        myDiv.style.display = 'block';
    } else {
        burger.style.background = 'url("img/menu.svg")';
        myDiv.style.display = 'none';
    }
}