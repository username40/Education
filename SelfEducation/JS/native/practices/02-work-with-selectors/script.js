/*Работаем с селекторами.*/

function selectBrands() {
    // Получаем элемент по id и проверяем его свойство по selectedIndex.
    var selector = document.getElementById('selectBrands').selectedIndex;
    var options = document.getElementById('selectBrands').options;
    var brandValue = document.getElementById('brandValue');
    // Получаем опции в виде массива и преобразовываем в текст.
    brandValue.innerHTML = 'Выбран бренд: ' + options[selector].text;
}

function checkRange() {
    var range = document.getElementById('range');
    var rangeValue = document.getElementById('rangeValue');

    rangeValue.innerHTML = range.value;
}