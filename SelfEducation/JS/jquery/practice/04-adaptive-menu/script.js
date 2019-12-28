/*Adaptive menu.*/

// Shit-code from youTube video
/*
(function () {
    $(function () {
        $('.icon').on('click', function () {
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);
*/

// This is my code, simple code))))!
$('.menu').click(function () {
    $(this).toggleClass('menu-open');
});