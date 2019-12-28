/*Number counter animation.*/

// prop() returns or change property value in choosen element. He returns
// undefined if property not set or there is no such element
$('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now))
            }
    });
});