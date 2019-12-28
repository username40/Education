/*Замена фона при скролле.*/

$(window).ready(function () {
    var wHeight = $(window).height();

    $('.slide').height(wHeight).scrollie({
        scrollOffset: -50,
        scrollingInView: function(element) {
            var bgColor = element.data('background');
            $('body').css('background-color', bgColor)
        }
    });
});

