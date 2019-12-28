/*Прогресс бар.*/

function move() {
    var myBar = document.getElementById('myBar');
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(myBar);
        } else {
            width++;
            myBar.style.width = width + '%';
            document.getElementById('label').innerHTML = width * 1 + '%';

        }
    }
}