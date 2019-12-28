/*Делаем popUp.*/
var myPopUp = document.getElementById('myPopUp');

function showPopUp() {
    myPopUp.classList.add('show');
    myPopUp.classList.remove('hide');
}

function closePopUp() {
    myPopUp.classList.remove('show');
    myPopUp.classList.add('hide');
}