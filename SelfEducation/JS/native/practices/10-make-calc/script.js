/*Делаем простой калькулятор.*/

function plus() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    //var out = document.getElementById('out');

    // Поскольку вводимая информация это строки необходимо привести их к числу
    number1 = parseInt(number1);
    number2 = parseInt(number2);

    result = number1 + number2;

    document.getElementById('out').innerHTML = result;
}

function minus() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    //var out = document.getElementById('out');

    // Поскольку вводимая информация это строки необходимо привести их к числу
    number1 = parseInt(number1);
    number2 = parseInt(number2);

    result = number1 - number2;

    document.getElementById('out').innerHTML = result;
}

function multiply() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    //var out = document.getElementById('out');

    // Поскольку вводимая информация это строки необходимо привести их к числу
    number1 = parseInt(number1);
    number2 = parseInt(number2);

    result = number1 * number2;

    document.getElementById('out').innerHTML = result;
}

function divide() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    //var out = document.getElementById('out');

    // Поскольку вводимая информация это строки необходимо привести их к числу
    number1 = parseInt(number1);
    number2 = parseInt(number2);

    result = number1 / number2;

    document.getElementById('out').innerHTML = result;
}