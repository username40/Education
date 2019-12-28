/*Делаем фильтр-автокомплит.*/

function myFunction() {
    var input = document.getElementById('myInput');
    var filter = input.value.toUpperCase();
    var li = document.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}