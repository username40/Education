/*Slider.*/

$(document).ready(function () {

    $('.next').click(function () {
        var currentImage = $('.img.current');
        var currentImageIndex = $('.img.current').index();
        var nextImageIndex = currentImageIndex + 1;
        // eq method returns nth index of element
        var nextImage = $('.img').eq(nextImageIndex);

        currentImage.fadeOut(500);
        currentImage.removeClass('current');

        if (nextImageIndex == ($('.img:last').index() + 1)) {
            $('.img').eq(0).fadeIn(500);
            $('.img').eq(0).addClass('current');
        } else {
            nextImage.fadeIn(500);
            nextImage.addClass('current');
        }
    });

    $('.prev').click(function () {
        var currentImage = $('.img.current');
        var currentImageIndex = $('.img.current').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.fadeOut(500);
        currentImage.removeClass('current')
        prevImage.fadeIn(500);
        prevImage.addClass('current');
    });
});
