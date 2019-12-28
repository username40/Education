/*Анимация в JS.*/

// Функция по клику мыши двигает кубик по диагонали.
function myMove() {
    var animationCell = document.getElementById('animationCell');
    var position = 0;
    // 1 параметр название функции, 2 параметр интервал в милисекундах
    // который нужно повторять.
    var interval = setInterval(frame, 10);

    // Функция прибавляет отступы за счет которых и происходит смещение.
    // Работает до 350 потому что кубик сам имеет размеры 50*50px, чтобы
    // не вылез за пределы поля.
    function frame() {
        if (position === 350) {
            // Остановка setInterval.
            clearInterval(interval);
        } else {
            position++;
            animationCell.style.top = position + 'px';
            animationCell.style.left = position + 'px';
        }
    }
}
