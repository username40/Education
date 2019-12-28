/*Snack bar блок.*/

function showSnackBar() {
    var snackBar = document.getElementById('snackBar');
    snackBar.className = 'show';

    setTimeout(function () {
        snackBar.className = snackBar.className.replace('show', '');
    }, 3000);
}