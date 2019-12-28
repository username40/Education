/*Adaptive menu with flex-box and jquery.*/

$('.mobile-tab').hide();

$('#burgerMenu').on('click', function () {
    $('.mobile-tab').slideToggle();
})