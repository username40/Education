﻿/*Делаем accordion.*/

var accordion = document.getElementsByClassName('accordion');

for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    }
}