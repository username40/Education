﻿/*Back-to-top-btn.*/

var btnTop = $('.btn-to-top');
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 40) {
        btnTop.fadeIn();
    } else {
        btnTop.fadeOut();
    }
});

$(btnTop).on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});