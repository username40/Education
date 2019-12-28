/*Пишем выпадающее меню.*/
// Данная функция будет отслеживать нахожление мыши в блоке меню.
document.getElementById('nav').onmouseover = function(event){
    var target = event.target;

    // Теперь нужно проверить чтобы блок внутри которого находится мышь
    // имел класс menu-item.
    // Если это так, необходимо получить блок с классом submenu.
    if (target.className === 'menu-item') {
        var submenu = target.getElementsByClassName('submenu');
        closeMenu();
        submenu[0].style.display = 'block';
    }

}

// Функция проверяет чтобы пока мышь находится на територии
// menu или submenu они отображались.
document.onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className !== 'menu-item' && target.className !== 'submenu') {
        closeMenu();
    }
}

// Функция закрывает меню если увести с него мышью.
function closeMenu() {
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
    }
}