/*Анимация.*/

// В Jquery есть 2 популярные функции hide() show(). Они скрывают или
// показывают контент.

// Элемент скрывается через присваивание ему свойства display: none
//$('.animation').hide('fast');

// Элемент отображается если у него было свойство display: none оно просто
// вычеркивается из списка свойств, либо же его свойство меняется на
// display: block если он ранее скрывался.
//$('.animation').show('slow');

// У методов show() и hide() есть 2 зарезервованных свойства slow и fast они
// позволяют быстро или медленно скрывать/показывать контент. Так же точное
// время можно задавать в мс (1000мс = 1с).
/*
$('.animation').click(function () {
    $(this).hide(2000);
})
*/

/*
$('.animation').hide(900, function () {
    alert('Блок скрыт!');
})
*/

// Так же в анимации используются методы slideUp() slideDown() slideToggle()
/*
$('#stick').click(function () {
    $('#hide').slideDown('slow');
})
*/

// В данном примере можно скрывать и показвать
function changeClass() {
    $(this).prev().toggleClass('active');
}
    $(function () {
        $('article h2').click(function () {
            $(this).next().slideToggle('slow');
            $(this).toggleClass('active');
        });
    });

// В данном примере происходят эффекты анимации по клику.
/*
$('.animation').click(function () {
    //$(this).fadeOut(3000);
    //$(this).fadeIn(3000);
    $(this).fadeTo('slow',0.4);

});
*/

// Используя данный метод можно за раз обработать несколько свойств.
// Они перечисляются как объекты.
// Так же как и в обычном JS здесь можно использовать арифметические
// операторы с присваиванием.
$('.animation').animate({
    'opacity': '-=0.5',
    'width': '+=300px',
    'height': '400px'
    });
