/*Делаем модальное окно.*/
// Подключаемся к элементам.
var myModal = document.getElementById('myModal');

// Поскольку придумывать id для каждой картинки не есть хорошо решил искать
// их все по классу.
var image = document.getElementsByClassName('minimal-image');
var imgSrc = document.getElementById('imgSrc');
var caption = document.getElementById('caption');
var close = document.getElementById('close');

// Поскольку к нам приходит коллекция элементов нам необходимо ее перебрать
// при помощи цикла for.
// Таким образом решение получается достаточно универсальным, все что нужно
// это добавлять картинки в галерею с классом minimal-image.
for (var i = 0; i < image.length; i++) {
    image[i].onclick = function () {
        myModal.style.display = 'block';
        imgSrc.src = this.src;
        caption.innerHTML = this.alt;
    }
}

// Закрытие модального окна
close.onclick = function () {
    myModal.style.display = 'none';
}